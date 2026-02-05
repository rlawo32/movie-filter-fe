import { createClient } from '@supabase/supabase-js';
import Image from 'next/image';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

// Next.js 최신 버전에서는 params가 Promise 형태입니다.
export default async function MovieDetailPage({ params }: { params: Promise<{ id: string }> }) {
  
  // 1. 반드시 params를 await 해줘야 id를 가져올 수 있습니다!
  const resolvedParams = await params;
  const id = resolvedParams.id;

  console.log("🔍 이제 제대로 찍힐 ID:", id);

  // 2. DB 검색
  const { data: movie, error } = await supabase
    .from('mf_movies_info')
    .select('*')
    .eq('mi_id', id)
    .single();

  console.log("📦 DB 응답 결과:", movie);

  if (error || !movie) {
    return (
      <div className="p-10 text-white">
        <h1>영화 정보를 찾을 수 없습니다.</h1>
        <p>시도한 ID: {id}</p>
        <p>에러: {error?.message}</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white">
      {/* 배경 이미지 섹션 */}
      <div className="relative h-[60vh] w-full">
        <Image 
          src={movie.mi_backdrop_path} 
          alt={movie.mi_title}
          fill
          priority
          className="object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent" />
        <div className="absolute bottom-10 left-10">
          <h1 className="text-6xl font-black mb-4">{movie.mi_title}</h1>
          <p className="max-w-3xl text-xl text-gray-200 leading-relaxed line-clamp-3">{movie.mi_summary}</p>
        </div>
      </div>

      {/* 정보 섹션 */}
      <div className="max-w-7xl mx-auto p-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-2 space-y-8">
          {/* OTT 플랫폼 */}
          <section>
            <h2 className="text-2xl font-bold mb-6 text-yellow-400">보러 가기</h2>
            <div className="flex flex-wrap gap-6">
              {movie.mi_networks?.map((net: any, idx: number) => (
                <div key={idx} className="group flex flex-col items-center">
                  <img src={net.logo} alt={net.name} className="w-16 h-16 rounded-2xl mb-2 transition-transform group-hover:scale-110 shadow-xl" />
                  <span className="text-sm text-gray-400">{net.name}</span>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* 사이드 정보 */}
        <div className="bg-zinc-900/50 p-8 rounded-3xl border border-zinc-800">
          <h3 className="text-xl font-bold mb-6">상세 정보</h3>
          <div className="space-y-4">
            <div><p className="text-zinc-500 text-sm">개봉일</p><p>{movie.mi_release_date}</p></div>
            <div><p className="text-zinc-500 text-sm">평점</p><p className="text-yellow-400 font-bold">★ {movie.mi_rating}</p></div>
            <div><p className="text-zinc-500 text-sm">인기도</p><p>{Math.floor(movie.mi_popularity)} points</p></div>
          </div>
        </div>
      </div>
    </div>
  );
}