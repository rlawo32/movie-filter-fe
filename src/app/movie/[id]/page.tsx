'use client';

import React from 'react';

const MOVIE = {
  title: "올드 맨 (Old Man)",
  year: "2021",
  genres: ["미스터리", "스릴러"],
  matchRate: 93,
  overview: "재우는 벽과 벽 사이의 오묘한 위치에 배치된 마을에서 전개되는 공포의 파티를 준비하고 있다. 하지만 그의 계획은 예상치 못한 손님의 방문으로 어긋나기 시작하는데...",
  poster: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?q=80&w=500", 
  platforms: [
    { name: "NETFLIX", logo: "/images/logos/netflix.png" },
    { name: "TVING", logo: "/images/logos/tving.png" },
    { name: "WAVVE", logo: "/images/logos/wavve.png" },
    { name: "WATCHA", logo: "/images/logos/watcha.png" },
  ],
  naverReviews: [
    { id: 1, author: "무비로그", text: "분위기가 압도적이네요. UI가 정말 깔끔합니다!", date: "2024.03.21" },
    { id: 2, author: "영화조아", text: "중반부 반전이 대박입니다. 꼭 보세요.", date: "2024.03.20" }
  ]
};

export default function MovieDetailPage() {
  return (
    <div id="movie-detail-root">
      <style dangerouslySetInnerHTML={{ __html: `
        #movie-detail-root {
          all: initial;
          display: block;
          background-color: #141414;
          min-height: 100vh;
          font-family: 'Pretendard', sans-serif;
          color: white;
          padding: 60px 20px;
        }
        #movie-detail-root * { box-sizing: border-box; color: white; }
        
        .main-layout { max-width: 1100px; margin: 0 auto; }
        .top-section { display: flex; gap: 40px; margin-bottom: 50px; flex-wrap: wrap; }
        
        .poster-img { width: 240px; height: 350px; border-radius: 15px; object-fit: cover; flex-shrink: 0; box-shadow: 0 10px 40px rgba(0,0,0,0.6); }
        .info-area { flex: 1; min-width: 300px; }
        .title { font-size: 52px; font-weight: 900; margin: 0 0 10px 0; letter-spacing: -2.5px; line-height: 1.1; }
        .meta { font-size: 19px; color: #888 !important; margin-bottom: 25px; }
        
        .synopsis-box { background: #1f1f1f; padding: 25px; border-radius: 20px; border: 1px solid #333; margin-bottom: 25px; }
        .synopsis-text { font-size: 15.5px; color: #ccc !important; line-height: 1.8; margin: 0; }

        .review-sidebar { width: 300px; background: #111; padding: 25px; border-radius: 24px; border: 1px solid #222; height: fit-content; }
        .review-title { color: #00ff88 !important; font-size: 12px; font-weight: 800; margin-bottom: 20px; letter-spacing: 1.5px; }

        .match-banner { border-top: 1px solid #222; border-bottom: 1px solid #222; padding: 30px 0; text-align: center; margin: 40px 0; }
        .match-highlight { color: #ff0558 !important; font-weight: 800; font-size: 24px; }

        .platform-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 15px; margin-bottom: 60px; }
        .platform-card { 
          background: #1c1c1c; 
          padding: 30px 20px; 
          border-radius: 20px; 
          display: flex; 
          flex-direction: column; 
          align-items: center; 
          justify-content: center;
          border: 1px solid #2a2a2a;
          transition: all 0.2s;
          cursor: pointer;
        }
        .platform-card:hover { transform: scale(1.05); background: #252525; border-color: #444; }
        
        /* 플랫폼 로고 크기 대폭 확대 */
        .logo-box { 
          width: 100%; 
          height: 80px; /* 기존 35px에서 80px로 확대 */
          display: flex; 
          align-items: center; 
          justify-content: center; 
          margin-bottom: 10px; 
        }
        .logo-box img { 
          max-height: 60px !important; /* 이미지 높이 대폭 키움 */
          width: 80% !important; /* 가로폭도 카드에 맞춰 확보 */
          object-fit: contain !important; 
          filter: drop-shadow(0 0 10px rgba(255,255,255,0.1)); /* 로고 강조 효과 */
        }
        
        .platform-btn { font-size: 11px; color: #777 !important; font-weight: bold; margin-top: 5px; }

        .section-label { font-size: 13px; color: #444 !important; font-weight: 700; margin-bottom: 20px; letter-spacing: 3px; display: block; }

        .youtube-section { display: grid; grid-template-columns: 1fr 1fr; gap: 30px; }
        .video-thumb { aspect-ratio: 16/9; background: #000; border-radius: 24px; border: 1px solid #222; display: flex; align-items: center; justify-content: center; overflow: hidden; }
        .play-btn { width: 55px; height: 55px; background: #e50914; border-radius: 50%; display: flex; align-items: center; justify-content: center; }
        
        @media (max-width: 950px) {
          .top-section { flex-direction: column; }
          .platform-grid { grid-template-columns: repeat(2, 1fr); }
        }
      ` }} />

      <div className="main-layout">
        <div className="top-section">
          <img src={MOVIE.poster} className="poster-img" alt="poster" />
          <div className="info-area">
            <h1 className="title">{MOVIE.title}</h1>
            <p className="meta">{MOVIE.year} ㆍ {MOVIE.genres.join(', ')}</p>
            <div className="synopsis-box">
              <p className="synopsis-text">{MOVIE.overview}</p>
            </div>
            <div className="match-banner">
              <span style={{fontSize: '20px'}}>취향 일치도 <span className="match-highlight"># {MOVIE.matchRate}%</span></span>
            </div>
          </div>
          <div className="review-sidebar">
            <div className="review-title">NAVER BLOG REVIEW</div>
            {MOVIE.naverReviews.map(r => (
              <div key={r.id} style={{marginBottom: '20px', borderBottom: '1px solid #222', paddingBottom: '15px'}}>
                <p style={{fontSize: '13.5px', color: '#bbb', margin: '0 0 8px 0'}}>"{r.text}"</p>
                <small style={{color: '#555'}}>- {r.author}</small>
              </div>
            ))}
          </div>
        </div>

        <span className="section-label">WATCH NOW</span>
        <div className="platform-grid">
          {MOVIE.platforms.map((p) => (
            <div key={p.name} className="platform-card">
              <div className="logo-box">
                <img src={p.logo} alt={p.name} />
              </div>
              <span className="platform-btn">{p.name} 보러가기</span>
            </div>
          ))}
        </div>

        <span className="section-label">OFFICIAL YOUTUBE</span>
        <div className="youtube-section">
          <div className="video-card">
            <div className="video-thumb"><div className="play-btn">▶</div></div>
            <p style={{marginTop: '15px', fontWeight: '600'}}>공식 메인 예고편</p>
          </div>
          <div className="video-card">
            <div className="video-thumb"><div className="play-btn">▶</div></div>
            <p style={{marginTop: '15px', fontWeight: '600'}}>메이킹 필름</p>
          </div>
        </div>
      </div>
    </div>
  );
}