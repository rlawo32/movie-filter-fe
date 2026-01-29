'use client';

import React from 'react';

export default function MovieDetailPage() {
  return (
    <div style={{
      backgroundColor: '#141414',
      color: 'white',
      minHeight: '100vh',
      width: '100vw',
      position: 'fixed', // 화면 전체를 덮어버림 (팀원 레이아웃 무력화)
      top: 0,
      left: 0,
      zIndex: 9999,
      padding: '40px',
      overflowY: 'auto',
      fontFamily: 'sans-serif'
    }}>
      {/* 연결 확인용 배너 */}
      <div style={{ backgroundColor: 'red', color: 'white', padding: '10px', textAlign: 'center', fontWeight: 'bold', marginBottom: '20px' }}>
        연결 성공! 현재 /movie/test 페이지를 보고 계십니다.
      </div>

      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        {/* 상단 정보 */}
        <div style={{ display: 'flex', gap: '30px', marginBottom: '40px' }}>
          <img 
            src="https://images.unsplash.com/photo-1536440136628-849c177e76a1?q=80&w=500" 
            style={{ width: '200px', borderRadius: '15px' }} 
          />
          <div>
            <h1 style={{ fontSize: '40px', margin: '0 0 10px 0' }}>올드 맨 (Old Man)</h1>
            <p style={{ color: '#888', fontSize: '18px' }}>2021 ㆍ 미스터리, 스릴러</p>
            <div style={{ marginTop: '20px', padding: '20px', background: '#222', borderRadius: '10px', fontSize: '14px', lineHeight: '1.6' }}>
              재우는 벽과 벽 사이의 오묘한 위치에 배치된 마을에서 전개되는 공포의 파티를 준비하고 있다...
            </div>
          </div>
        </div>

        {/* 플랫폼 그리드 (기획안 핵심) */}
        <h3 style={{ fontSize: '14px', color: '#555', marginBottom: '15px', letterSpacing: '2px' }}>WATCH NOW</h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '15px' }}>
          {['NETFLIX', 'TVING', 'WAVVE', 'DISNEY+'].map((name) => (
            <div key={name} style={{ background: '#222', padding: '20px', borderRadius: '12px', textAlign: 'center', border: '1px solid #333' }}>
              <div style={{ fontWeight: 'bold', fontSize: '12px', marginBottom: '10px', color: '#E50914' }}>{name}</div>
              <div style={{ fontSize: '10px', color: '#444' }}>바로가기</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}