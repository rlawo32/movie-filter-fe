
export const data:{
        id: number,
        title: string,
        year: string,
        matchRate: number,
        genres: string[],
        overview: string,
        poster: string,
        platforms: {
          name: string,
          logo: string
        }[]
    }[] = [
  { 
    id: 1, 
    title: "캡틴 아메키라: 브레이브 뉴 월드", 
    year: "2025", 
    matchRate: 93, 
    genres: ["SF", "액션"],
    overview: "대통령이 된 새디우스 로스와 재회 후, 국제적인 사건의 중심에 서게 된 샘이 전 세계를 붉게 장악하려는 사악한 음모 뒤에 숨겨진 존재와 이유를 파헤쳐 나가는 액션 블록버스터",
    poster: "https://search.pstatic.net/common?quality=75&direct=true&src=https%3A%2F%2Fmovie-phinf.pstatic.net%2F20250207_135%2F17388962578517PWcE_JPEG%2Fmovie_image.jpg",
    platforms: [
      { name: "NETFLIX", logo: "/images/logos/netflix.png" },
      { name: "TVING", logo: "/images/logos/tving.png" },
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
    poster: "https://search.pstatic.net/common?quality=75&direct=true&src=https%3A%2F%2Fmovie-phinf.pstatic.net%2F20240222_175%2F1708609058134r4oaq_JPEG%2Fmovie_image.jpg", 
    platforms: [
      { name: "WAVVE", logo: "/images/logos/wavve.png" },
      { name: "WATCHA", logo: "/images/logos/watcha.png" },
    ]
  },
  { 
    id: 3, 
    title: "듄: 파트 2", 
    year: "2024", 
    matchRate: 95, 
    genres: ["SF", "액션", "드라마"], 
    overview: "우주를 구원할 운명의 전쟁이 시작된다. 아라키스 행성에서의 거대한 여정.", 
    poster: "https://search.pstatic.net/common?quality=75&direct=true&src=https%3A%2F%2Fmovie-phinf.pstatic.net%2F20240207_151%2F1707288437263gBsdd_JPEG%2Fmovie_image.jpg", 
    platforms: [
      { name: "TVING", logo: "/images/logos/tving.png" },
    ]
  },
  { 
    id: 4, 
    title: "아바타: 불과 재", 
    year: "2025", 
    matchRate: 95, 
    genres: ["SF", "액션"],
    overview: "판도라를 위협하는 재의 부족, 더 이상 인간만이 적이 아니다! 모두의 운명을 뒤흔들 거대한 전투가 시작된다!", 
    poster: "https://search.pstatic.net/common?quality=75&direct=true&src=https%3A%2F%2Fmovie-phinf.pstatic.net%2F20251217_118%2F1765951474121LjtOH_JPEG%2Fmovie_image.jpg", 
    platforms: [
      { name: "NETFLIX", logo: "/images/logos/netflix.png" },
      { name: "TVING", logo: "/images/logos/tving.png" },
      { name: "WATCHA", logo: "/images/logos/watcha.png" },
    ]
  },
  { 
    id: 5, 
    title: "주토피아 2", 
    year: "2025", 
    matchRate: 95, 
    genres: ["애니메이션"], 
    overview: "더 화려해진 세계, 더 넓어진 주토피아! 가~~장 사랑스러운 콤비 '주디'와 '닉'이 돌아온다!", 
    poster: "https://search.pstatic.net/common?quality=75&direct=true&src=https%3A%2F%2Fmovie-phinf.pstatic.net%2F20251126_180%2F1764120961520wdmcK_JPEG%2Fmovie_image.jpg", 
    platforms: [
      { name: "NETFLIX", logo: "/images/logos/netflix.png" },
      { name: "WAVVE", logo: "/images/logos/wavve.png" },
    ]
  },
];