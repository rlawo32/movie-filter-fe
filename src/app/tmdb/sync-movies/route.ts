import { createClient } from '@supabase/supabase-js';
import { NextResponse } from 'next/server';

// 1. Supabase 접속 정보
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

const TMDB_API_KEY = process.env.TMDB_API_KEY; // .env.local에 저장된 TMDB 키

export async function GET() {
  try {
    // 2. TMDB에서 인기 영화 가져오기 (1페이지 20개)
    const tmdbRes = await fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=${TMDB_API_KEY}&language=ko-KR&page=1`
    );
    const tmdbData = await tmdbRes.json();
    const movies = tmdbData.results;

    // 3. 각 영화별 상세 정보(OTT 플랫폼)
    const processedMovies = await Promise.all(movies.map(async (movie: any) => {
      // OTT 정보(watch/providers) API 별도 호출
      const watchRes = await fetch(
        `https://api.themoviedb.org/3/movie/${movie.id}/watch/providers?api_key=${TMDB_API_KEY}`
      );
      const watchData = await watchRes.json();
      
      // 한국(KR) 지역의 구독 서비스(Netflix, Disney+ 등)만 필터링
      const providers = watchData.results?.KR?.flatrate || [];
      const mi_networks = providers.map((p: any) => ({
        name: p.provider_name,
        logo: `https://image.tmdb.org/t/p/original${p.logo_path}`
      }));

      // 4. 테이블 컬럼명에 매핑
      return {
        mi_id: String(movie.id),           // TMDB ID를 PK인 mi_id로 사용
        mi_title: movie.title,
        mi_summary: movie.overview,
        mi_release_date: movie.release_date,
        mi_rating: String(movie.vote_average),
        mi_popularity: movie.popularity,
        mi_backdrop_path: `https://image.tmdb.org/t/p/original${movie.backdrop_path}`,
        mi_poster_path: `https://image.tmdb.org/t/p/original${movie.poster_path}`,
        mi_networks: mi_networks,          // JSONB 타입 필드에 배열로 삽입
        mi_genre: String(movie.genre_ids[0] || "") // 첫 번째 장르 ID만 임시로
      };
    }));

    // 5. Supabase에 데이터 넣기
    const { data, error } = await supabase
      .from('mf_movies_info')
      .upsert(processedMovies, { onConflict: 'mi_id' }) // mi_id(TMDB_ID) 기준 중복 체크
      .select();

    if (error) throw error;

    return NextResponse.json({ 
      success: true, 
      message: `${data.length}개의 영화 데이터를 성공적으로 동기화했습니다!`,
      data: data 
    });

  } catch (error: any) {
    console.error("동기화 에러:", error);
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}