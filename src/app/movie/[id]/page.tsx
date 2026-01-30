'use client';

import React, { useState } from 'react';
import Link from 'next/link';

// 1. 영화 리스트 더미 데이터
const DUMMY_MOVIES = [
  { id: 1, title: "올드 맨", year: "2021", matchRate: 93, poster: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?q=80&w=500" },
  { id: 2, title: "파묘", year: "2024", matchRate: 88, poster: "https://images.unsplash.com/photo-1594909122845-11baa439b7bf?q=80&w=500" },
  { id: 3, title: "듄: 파트 2", year: "2024", matchRate: 95, poster: "https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=500" },
  { id: 4, title: "인터스텔라", year: "2014", matchRate: 91, poster: "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?q=80&w=500" },
  { id: 5, title: "기생충", year: "2019", matchRate: 85, poster: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=500" },
  { id: 6, title: "조커", year: "2019", matchRate: 82, poster: "https://images.unsplash.com/photo-1559582798-678dfc71ccd8?q=80&w=500" },
];

// 2. 옵션/필터 더미 데이터 (option.tsx 오류 방지용)
const DUMMY_OPTIONS = [
  { option_title: "전체" },
  { option_title: "장르" },
  { option_title: "국가" },
  { option_title: "연도" }
];

// ✅ 반드시 'export default function'으로 시작해야 합니다!
export default function MovieListPage() {
  const [optionData] = useState(DUMMY_OPTIONS);

  return (
    <div id="movie-list-root">
      {/* 스타일 격리 성벽 */}
      <style dangerouslySetInnerHTML={{ __html: `
        #movie-list-root {
          all: initial;
          display: block;
          background-color: #141414;
          min-height: 100vh;
          font-family: 'Pretendard', sans-serif;
          color: white;
          padding: 60px 40px;
        }
        #movie-list-root * { box-sizing: border-box; color: white; text-decoration: none; }
        
        .list-container { max-width: 1200px; margin: 0 auto; }
        
        /* 헤더 & 필터 바 */
        .header { margin-bottom: 40px; }
        .header h1 { font-size: 32px; font-weight: 900; margin: 0; letter-spacing: -1px; }
        
        .filter-bar { display: flex; gap: 10px; margin-top: 25px; }
        .filter-btn { 
          background: #333; 
          padding: 8px 20px; 
          border-radius: 20px; 
          font-size: 14px; 
          cursor: pointer;
          border: 1px solid transparent;
        }
        .filter-btn:hover { border-color: #ff0558; color: #ff0558; }

        /* 영화 그리드 */
        .movie-grid { 
          display: grid; 
          grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)); 
          gap: 30px; 
          margin-top: 40px;
        }

        .movie-card {
          display: flex;
          flex-direction: column;
          transition: transform 0.3s ease;
        }
        .movie-card:hover { transform: translateY(-10px); }
        
        .poster-wrapper {
          width: 100%;
          aspect-ratio: 2/3;
          border-radius: 12px;
          overflow: hidden;
          background: #222;
          border: 1px solid #333;
          position: relative;
        }
        .poster-img { width: 100%; height: 100%; object-fit: cover; }

        .match-badge {
          position: absolute;
          top: 10px;
          right: 10px;
          background: #ff0558;
          padding: 4px 8px;
          border-radius: 6px;
          font-size: 12px;
          font-weight: bold;
        }

        .movie-info { margin-top: 15px; }
        .movie-title { font-size: 18px; font-weight: 700; margin-bottom: 5px; }
        .movie-year { font-size: 14px; color: #666; }

        @media (max-width: 600px) {
          .movie-grid { grid-template-columns: repeat(2, 1fr); gap: 15px; }
        }
      ` }} />

      <div className="list-container">
        <header className="header">
          <h1>오늘의 추천 영화</h1>
          {/* 옵션 데이터 렌더링 테스트 */}
          <div className="filter-bar">
            {optionData.map(opt => (
              <div key={opt.option_title} className="filter-btn">
                {opt.option_title}
              </div>
            ))}
          </div>
        </header>

        <main className="movie-grid">
          {DUMMY_MOVIES.map((movie) => (
            <Link key={movie.id} href={`/movie/${movie.id}`} className="movie-card">
              <div className="poster-wrapper">
                <img src={movie.poster} alt={movie.title} className="poster-img" />
                <div className="match-badge">{movie.matchRate}%</div>
              </div>
              <div className="movie-info">
                <h3 className="movie-title">{movie.title}</h3>
                <span className="movie-year">{movie.year}</span>
              </div>
            </Link>
          ))}
        </main>
      </div>
    </div>
  );
}