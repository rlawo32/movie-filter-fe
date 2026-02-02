'use client';

import React, { useState } from 'react';

// 1. 영화 데이터 (상세 정보 포함)
const DUMMY_MOVIES = [
  { 
    id: 1, 
    title: "올드 맨 (Old Man)", 
    year: "2021", 
    matchRate: 93, 
    genres: ["미스터리", "스릴러"],
    overview: "재우는 벽과 벽 사이의 오묘한 위치에 배치된 마을에서 전개되는 공포의 파티를 준비하고 있다. 하지만 그의 계획은 예상치 못한 손님의 방문으로 어긋나기 시작하는데...",
    poster: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?q=80&w=500",
    platforms: [
      { name: "NETFLIX", logo: "/images/logos/netflix.png" },
      { name: "TVING", logo: "/images/logos/tving.png" },
      { name: "WAVVE", logo: "/images/logos/wavve.png" },
      { name: "WATCHA", logo: "/images/logos/watcha.png" },
    ]
  },
  { 
    id: 2, 
    title: "파묘", 
    year: "2024", 
    matchRate: 88, 
    genres: ["미스터리", "공포"], 
    overview: "조상의 묘를 옮기며 벌어지는 기이한 사건들... 거액의 의뢰를 받은 무당과 지관이 겪는 험한 일.", 
    poster: "https://images.unsplash.com/photo-1594909122845-11baa439b7bf?q=80&w=500", 
    platforms: [{ name: "NETFLIX", logo: "/images/logos/netflix.png" }] 
  },
  { 
    id: 3, 
    title: "듄: 파트 2", 
    year: "2024", 
    matchRate: 95, 
    genres: ["SF", "액션"], 
    overview: "우주를 구원할 운명의 전쟁이 시작된다. 아라키스 행성에서의 거대한 여정.", 
    poster: "https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=500", 
    platforms: [{ name: "WAVVE", logo: "/images/logos/wavve.png" }] 
  },
];

export default function MovieListPage() {
  // 팝업(모달) 상태 관리
  const [selectedMovie, setSelectedMovie] = useState<any>(null);

  // 클릭 시 페이지 이동을 막고 모달만 띄우는 함수
  const handleCardClick = (e: React.MouseEvent, movie: any) => {
    e.preventDefault(); // 페이지 이동 방지
    setSelectedMovie(movie);
  };

  return (
    <div id="movie-list-root">
      <style dangerouslySetInnerHTML={{ __html: `
        #movie-list-root {
          all: initial; display: block; background-color: #141414; min-height: 100vh;
          font-family: 'Pretendard', sans-serif; color: white; padding: 60px 40px;
        }
        #movie-list-root * { box-sizing: border-box; color: white; }
        
        .list-container { max-width: 1200px; margin: 0 auto; }
        .header-title { font-size: 32px; font-weight: 900; margin-bottom: 40px; }

        .movie-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(220px, 1fr)); gap: 30px; }
        
        /* 영화 카드: a 태그 대신 div로 구성 */
        .movie-card { cursor: pointer; transition: transform 0.3s ease; display: block; }
        .movie-card:hover { transform: translateY(-10px); }
        .poster-wrapper { width: 100%; aspect-ratio: 2/3; border-radius: 12px; overflow: hidden; position: relative; border: 1px solid #333; }
        .poster-img { width: 100%; height: 100%; object-fit: cover; }
        .match-badge { position: absolute; top: 10px; right: 10px; background: #ff0558; padding: 4px 8px; border-radius: 6px; font-size: 12px; font-weight: bold; }

        /* 모달 스타일 */
        .modal-overlay {
          position: fixed; top: 0; left: 0; width: 100%; height: 100%;
          background: rgba(0,0,0,0.9); display: flex; align-items: center; justify-content: center;
          z-index: 9999; padding: 20px;
        }
        .modal-content {
          background: #141414; width: 100%; max-width: 900px; max-height: 85vh;
          overflow-y: auto; border-radius: 24px; position: relative; border: 1px solid #333;
          animation: modal-up 0.3s ease-out;
        }
        @keyframes modal-up {
          from { transform: translateY(30px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        .close-btn {
          position: absolute; top: 20px; right: 25px; font-size: 35px; 
          cursor: pointer; z-index: 10001; color: #fff;
        }

        .detail-layout { padding: 40px; }
        .top-section { display: flex; gap: 30px; }
        .detail-poster { width: 200px; height: 300px; border-radius: 15px; object-fit: cover; flex-shrink: 0; }
        .title { font-size: 40px; font-weight: 900; margin: 0 0 10px 0; letter-spacing: -2px; }
        .meta { color: #888 !important; margin-bottom: 20px; font-size: 16px; }
        .synopsis-box { background: #1f1f1f; padding: 20px; border-radius: 15px; border: 1px solid #333; margin-bottom: 20px; }
        .synopsis-text { font-size: 14px; color: #ccc !important; line-height: 1.7; }
        
        .platform-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 15px; margin-top: 20px; }
        .platform-card { background: #1c1c1c; padding: 15px; border-radius: 15px; display: flex; flex-direction: column; align-items: center; border: 1px solid #2a2a2a; }
        .logo-box { height: 30px; display: flex; align-items: center; margin-bottom: 8px; }
        .logo-box img { max-height: 20px !important; width: auto !important; }

        @media (max-width: 800px) {
          .top-section { flex-direction: column; align-items: center; }
          .platform-grid { grid-template-columns: repeat(2, 1fr); }
        }
      ` }} />

      <div className="list-container">
        <h1 className="header-title">오늘의 추천 영화</h1>
        <div className="movie-grid">
          {DUMMY_MOVIES.map((movie) => (
            <div key={movie.id} className="movie-card" onClick={(e) => handleCardClick(e, movie)}>
              <div className="poster-wrapper">
                <img src={movie.poster} className="poster-img" alt={movie.title} />
                <div className="match-badge">{movie.matchRate}%</div>
              </div>
              <h3 style={{marginTop: '15px', fontSize: '18px', fontWeight: '700'}}>{movie.title}</h3>
              <p style={{fontSize: '14px', color: '#666'}}>{movie.year}</p>
            </div>
          ))}
        </div>
      </div>

      {/* 팝업 레이어 */}
      {selectedMovie && (
        <div className="modal-overlay" onClick={() => setSelectedMovie(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <span className="close-btn" onClick={() => setSelectedMovie(null)}>&times;</span>
            
            <div className="detail-layout">
              <div className="top-section">
                <img src={selectedMovie.poster} className="detail-poster" alt="poster" />
                <div className="info-area">
                  <h1 className="title">{selectedMovie.title}</h1>
                  <p className="meta">{selectedMovie.year} ㆍ {selectedMovie.genres.join(', ')}</p>
                  <div className="synopsis-box">
                    <p className="synopsis-text">{selectedMovie.overview}</p>
                  </div>
                  <div style={{fontSize: '18px', color: '#ff0558', fontWeight: 'bold'}}>
                    취향 일치도 {selectedMovie.matchRate}%
                  </div>
                </div>
              </div>

              <div style={{marginTop: '30px'}}>
                <span style={{fontSize: '11px', color: '#444', letterSpacing: '2px', fontWeight: 'bold'}}>WATCH NOW</span>
                <div className="platform-grid">
                  {selectedMovie.platforms.map((p: any) => (
                    <div key={p.name} className="platform-card">
                      <div className="logo-box">
                        <img src={p.logo} alt={p.name} />
                      </div>
                      <span style={{fontSize: '10px', color: '#555'}}>바로가기</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}