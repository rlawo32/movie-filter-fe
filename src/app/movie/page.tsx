'use client';

import React, { useState, useEffect } from 'react';
import { createClient } from '@supabase/supabase-js';

// Supabase 설정
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

export default function MovieListPage() {
  const [movies, setMovies] = useState<any[]>([]);
  const [selectedMovie, setSelectedMovie] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  // 1. Supabase에서 실제 데이터 가져오기
  useEffect(() => {
    async function fetchMovies() {
      const { data, error } = await supabase
        .from('mf_movies_info')
        .select('*')
        .order('mi_popularity', { ascending: false }) // 인기도 순 정렬
        .limit(20);

      if (!error && data) {
        setMovies(data);
      }
      setLoading(false);
    }
    fetchMovies();
  }, []);

  const handleCardClick = (movie: any) => {
    setSelectedMovie(movie);
  };

  if (loading) return <div className="bg-[#141414] min-h-screen flex items-center justify-center text-white">로딩 중...</div>;

  return (
    <div id="movie-list-root">
      <style dangerouslySetInnerHTML={{ __html: `
        #movie-list-root {
          background-color: #141414; min-height: 100vh;
          font-family: 'Pretendard', sans-serif; color: white; padding: 60px 40px;
        }
        .list-container { max-width: 1400px; margin: 0 auto; }
        .header-title { font-size: 32px; font-weight: 900; margin-bottom: 40px; color: #fff; }

        /* 그리드 디자인 */
        .movie-grid { 
          display: grid; 
          grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)); 
          gap: 25px; 
        }
        
        /* 영화 카드 */
        .movie-card { cursor: pointer; transition: all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1); }
        .movie-card:hover { transform: scale(1.05); z-index: 10; }
        
        .poster-wrapper { 
          width: 100%; aspect-ratio: 2/3; border-radius: 8px; overflow: hidden; 
          position: relative; box-shadow: 0 4px 20px rgba(0,0,0,0.5);
        }
        .poster-img { width: 100%; height: 100%; object-fit: cover; }
        .match-badge { 
          position: absolute; top: 10px; left: 10px; background: #e50914; 
          padding: 4px 10px; border-radius: 4px; font-size: 12px; font-weight: bold; 
        }

        /* 모달 디자인 (상세보기) */
        .modal-overlay {
          position: fixed; top: 0; left: 0; width: 100%; height: 100%;
          background: rgba(0,0,0,0.85); display: flex; align-items: center; justify-content: center;
          z-index: 9999; backdrop-filter: blur(5px);
        }
        .modal-content {
          background: #181818; width: 95%; max-width: 850px; max-height: 90vh;
          overflow-y: auto; border-radius: 15px; position: relative;
          box-shadow: 0 0 50px rgba(0,0,0,1); animation: modal-up 0.4s ease;
        }
        @keyframes modal-up { from { opacity: 0; transform: translateY(50px); } to { opacity: 1; transform: translateY(0); } }
        
        .close-btn {
          position: absolute; top: 20px; right: 20px; width: 40px; height: 40px;
          background: #181818; border-radius: 50%; display: flex; align-items: center; 
          justify-content: center; font-size: 24px; cursor: pointer; z-index: 10;
        }

        /* 모달 내부 상세 레이아웃 */
        .hero-banner { width: 100%; height: 400px; position: relative; }
        .hero-img { width: 100%; height: 100%; object-fit: cover; opacity: 0.7; }
        .hero-gradient { 
          position: absolute; inset: 0; 
          background: linear-gradient(to top, #181818 5%, transparent 50%); 
        }
        
        .detail-info { padding: 0 40px 40px 40px; margin-top: -60px; position: relative; }
        .main-title { font-size: 48px; font-weight: 900; margin-bottom: 15px; text-shadow: 2px 2px 10px rgba(0,0,0,0.8); }
        .meta-row { display: flex; gap: 15px; color: #a3a3a3; font-size: 16px; margin-bottom: 20px; align-items: center;}
        .rating-text { color: #46d369; font-weight: bold; }
        
        .summary { font-size: 16px; line-height: 1.6; color: #d2d2d2; max-width: 600px; }

        /* OTT 로고 섹션 */
        .ott-title { font-size: 14px; color: #808080; margin-bottom: 15px; display: block; letter-spacing: 1px; }
        .ott-grid { display: flex; gap: 20px; }
        .ott-item { display: flex; flex-direction: column; align-items: center; gap: 8px; }
        .ott-logo { width: 50px; height: 50px; border-radius: 10px; object-fit: cover; }
      ` }} />

      <div className="list-container">
        <h1 className="header-title">명성님을 위한 추천 콘텐츠</h1>{/* 실제 로그인 닉네임 뿌려주는걸로 개선 필요 */}
        
        <div className="movie-grid">
          {movies.map((movie) => (
            <div key={movie.mi_id} className="movie-card" onClick={() => handleCardClick(movie)}>
              <div className="poster-wrapper">
                <img src={movie.mi_poster_path} className="poster-img" alt={movie.mi_title} />
                <div className="match-badge">{Math.floor(movie.mi_popularity % 100)}% 일치</div>
              </div>
              <h3 style={{marginTop: '12px', fontSize: '15px', fontWeight: '600'}}>{movie.mi_title}</h3>
              <p style={{fontSize: '13px', color: '#808080'}}>{movie.mi_release_date?.split('-')[0]}</p>
            </div>
          ))}
        </div>
      </div>

      {/* 영화 상세 모달 */}
      {selectedMovie && (
        <div className="modal-overlay" onClick={() => setSelectedMovie(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="close-btn" onClick={() => setSelectedMovie(null)}>✕</div>
            
            {/* 상단 배너 */}
            <div className="hero-banner">
              <img src={selectedMovie.mi_backdrop_path} className="hero-img" alt="backdrop" />
              <div className="hero-gradient" />
            </div>

            {/* 상세 내용 */}
            <div className="detail-info">
              <h1 className="main-title">{selectedMovie.mi_title}</h1>
              <div className="meta-row">
                <span className="rating-text">평점 {selectedMovie.mi_rating}</span>
                <span>{selectedMovie.mi_release_date}</span>
              </div>
              <p className="summary">{selectedMovie.mi_summary}</p>

              <div style={{marginTop: '40px'}}>
                <span className="ott-title">시청 가능한 플랫폼</span>
                <div className="ott-grid">
                  {selectedMovie.mi_networks && selectedMovie.mi_networks.length > 0 ? (
                    selectedMovie.mi_networks.map((net: any, idx: number) => (
                      <div key={idx} className="ott-item">
                        <img src={net.logo} className="ott-logo" alt={net.name} />
                        <span style={{fontSize: '11px', color: '#808080'}}>{net.name}</span>
                      </div>
                    ))
                  ) : (
                    <p style={{color: '#555', fontSize: '14px'}}>제공되는 OTT 정보가 없습니다.</p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}