
export const data:{
        id: number,
        title: string,
        year: string,
        matchRate: number,
        genres: string[],
        summary: string,
        poster: string,
        backdrop: string,
        platforms: {
          name: string,
          logo: string
        }[]
    }[] = [
  { 
    id: 1, 
    title: "캡틴 아메리카: 브레이브 뉴 월드", 
    year: "2025", 
    matchRate: 93, 
    genres: ["SF", "액션"],
    summary: "대통령이 된 새디우스 로스와 재회 후, 국제적인 사건의 중심에 서게 된 샘이 전 세계를 붉게 장악하려는 사악한 음모 뒤에 숨겨진 존재와 이유를 파헤쳐 나가는 액션 블록버스터",
    poster: "https://media.themoviedb.org/t/p/w500/qj1uEI7zrCWbMppjFZmCXVlWlb1.jpg",
    backdrop: "https://media.themoviedb.org/t/p/original/8eifdha9GQeZAkexgtD45546XKx.jpg",
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
    summary: "조상의 묘를 옮기며 벌어지는 기이한 사건들... 거액의 의뢰를 받은 무당과 지관이 겪는 험한 일.", 
    poster: "https://media.themoviedb.org/t/p/w500/tw0i3kkmOTjDjGFZTLHKhoeXVvA.jpg", 
    backdrop: "https://media.themoviedb.org/t/p/original/6EO11KoiMMG29ISaQrm2G5DCe1X.jpg",
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
    summary: "우주를 구원할 운명의 전쟁이 시작된다. 아라키스 행성에서의 거대한 여정.", 
    poster: "https://media.themoviedb.org/t/p/w500/8AsDR2o5AC3V8Jmj6JH6cpta7dz.jpg", 
    backdrop: "https://media.themoviedb.org/t/p/original/ylkdrn23p3gQcHx7ukIfuy2CkTE.jpg",
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
    summary: "판도라를 위협하는 재의 부족, 더 이상 인간만이 적이 아니다! 모두의 운명을 뒤흔들 거대한 전투가 시작된다!", 
    poster: "https://media.themoviedb.org/t/p/w500/l18o0AK18KS118tWeROOKYkF0ng.jpg", 
    backdrop: "https://media.themoviedb.org/t/p/original/sdZSjtGUTSN8B3al5o0f2WoQfQQ.jpg",
    platforms: [
      { name: "AMAZON", logo: "/images/logos/netflix.png" },
      { name: "DISNEY", logo: "/images/logos/tving.png" },
      { name: "COUPANG", logo: "/images/logos/watcha.png" },
    ]
  },
  { 
    id: 5, 
    title: "주토피아 2", 
    year: "2025", 
    matchRate: 95, 
    genres: ["애니메이션"], 
    summary: "더 화려해진 세계, 더 넓어진 주토피아! 가~~장 사랑스러운 콤비 '주디'와 '닉'이 돌아온다!", 
    poster: "https://media.themoviedb.org/t/p/w500/ib6v6qUXzez1x2qIOLN7C0yJNPQ.jpg", 
    backdrop: "https://media.themoviedb.org/t/p/original/7nfpkR9XsQ1lBNCXSSHxGV7Dkxe.jpg",
    platforms: [
      { name: "NETFLIX", logo: "/images/logos/netflix.png" },
      { name: "WAVVE", logo: "/images/logos/wavve.png" },
    ]
  },
  { 
    id: 6, 
    title: "극장판 짱구는 못말려: 초화려 작열하는 떡잎마을 댄서즈", 
    year: "2025", 
    matchRate: 95, 
    genres: ["애니메이션"], 
    summary: "짱구와 맹구는 수상한 잡화점에서 코 모양처럼 생긴 배낭을 발견하고, 맹구는 배낭의 콧구멍에 꽂혀 있는 휴지(?)를 홀린 듯이 자신의 코에 꽂아버린다. 그 순간, 알 수 없는 힘이 맹구에게서 뿜어져 나오는데…!", 
    poster: "https://media.themoviedb.org/t/p/w500/hh2eWvm91RMIVQb0esjQab8sWgh.jpg", 
    backdrop: "https://media.themoviedb.org/t/p/original/xmSkUXvYFQyMnxTUJJtEVvpSShk.jpg",
    platforms: [
      { name: "NETFLIX", logo: "/images/logos/netflix.png" },
      { name: "WATCHA", logo: "/images/logos/watcha.png" },
    ]
  },
  { 
    id: 7, 
    title: "나우 유 씨 미 3", 
    year: "2025", 
    matchRate: 95, 
    genres: ["범죄", "액션"], 
    summary: "한때 더러운 방식으로 돈을 모으는 재벌들을 시원하게 혼내주던 마술사기단 ‘포 호스맨’. 은퇴 후 평범한 삶을 살고 있던 그들에게 새로운 임무를 알리는 의미심장한 카드가 배달되는데...", 
    poster: "https://media.themoviedb.org/t/p/w500/dECA069mRikkghzgSBsM0cvic4F.jpg", 
    backdrop: "https://media.themoviedb.org/t/p/original/dHSz0tSFuO2CsXJ1CApSauP9Ncl.jpg",
    platforms: [
      { name: "WATCHA", logo: "/images/logos/watcha.png" },
    ]
  },
  { 
    id: 8, 
    title: "곤지암", 
    year: "2018", 
    matchRate: 95, 
    genres: ["공포", "스릴러"], 
    summary: "괴담의 실체를 담아내기 위해 병원 내부를 촬영하기 시작하던 멤버들에게 상상도 못한 기이하고 공포스러운 일들이 실제로 벌어지기 시작 하는데…", 
    poster: "https://media.themoviedb.org/t/p/w500/llj8dIkLSHOG1X7aFXims2IaCU5.jpg", 
    backdrop: "https://media.themoviedb.org/t/p/original/x1j5VVU4ypEx1hM0PDYGwCJvwtS.jpg",
    platforms: [
    ]
  },
  { 
    id: 9, 
    title: "좀비딸", 
    year: "2018", 
    matchRate: 95, 
    genres: ["코미디", "드라마"], 
    summary: "절대 '수아'를 포기할 수 없는 '정환'은 호랑이 사육사의 오랜 경험을 살려 좀비딸 트레이닝에 돌입하는데... 맹수보다 사납고, 사춘기보다 예민한 좀비딸 훈련기! 가장 유쾌한 극비 프로젝트가 시작된다!", 
    poster: "https://media.themoviedb.org/t/p/w500/aASLRiO8p9xLIvG9EHXSyZ71sPl.jpg", 
    backdrop: "https://media.themoviedb.org/t/p/original/gT7MXlPs7ohpdefR5cdgdPx1zsf.jpg",
    platforms: [
      { name: "WAVVE", logo: "/images/logos/wavve.png" },
      { name: "TVING", logo: "/images/logos/tving.png" },
    ]
  },
  { 
    id: 10, 
    title: "위플래쉬", 
    year: "2015", 
    matchRate: 95, 
    genres: ["드라마"], 
    summary: "모욕적인 폭언과 폭력을 휘두르며 완벽을 강요하는 플레쳐 교수의 무자비한 교수법으로 인해 앤드류는 능력을 증명해야 한다는 생각에 점차 미쳐가고, 앤드류가 광기에 휩싸일수록 플레쳐 교수의 완벽을 향한 집념 역시 높아지는데…!", 
    poster: "https://media.themoviedb.org/t/p/w500/sNoZ3DAjOtCtpGvaEubMELDNtaS.jpg", 
    backdrop: "https://media.themoviedb.org/t/p/original/1kuYEvLkX2nTkbfzN6X0w0xQFQU.jpg",
    platforms: [
      { name: "NETFLIX", logo: "/images/logos/netflix.png" },
    ]
  },
  { 
    id: 11, 
    title: "28년 후", 
    year: "2015", 
    matchRate: 95, 
    genres: ["공포", "스릴러", "드라마"], 
    summary: "28일 후 시작, 28주 후 전염, 28년 후 진화... 태어나 처음 마주한 바이러스에 감염된 세상, 충격을 넘어선 극강의 공포가 밀려온다!", 
    poster: "https://media.themoviedb.org/t/p/w500/zRo90O0bTKJem1aDgVa6Sm0gthE.jpg", 
    backdrop: "https://media.themoviedb.org/t/p/original/6WqqEjiycNvDLjbEClM1zCwIbDD.jpg",
    platforms: [
      { name: "WAVVE", logo: "/images/logos/wavve.png" },
      { name: "TVING", logo: "/images/logos/tving.png" },
      { name: "WATCHA", logo: "/images/logos/watcha.png" },
    ]
  },
  { 
    id: 12, 
    title: "슈퍼맨", 
    year: "2015", 
    matchRate: 95, 
    genres: ["액션", "모험"], 
    summary: "‘슈퍼맨’은 첫 패배와 함께 이들의 계속된 공세에 직면하고 모든 것을 바로잡기 위해 슈퍼독 ‘크립토’와 함께 맞서게 되는데... 과연 그는 이 전례 없는 위기에서 다시 날아오를 수 있을까? 올여름, 가장 강력한 슈퍼히어로 블록버스터가 온다!", 
    poster: "https://media.themoviedb.org/t/p/w500/kCXGCEsDqjzWJVDyHgBUg0AMetT.jpg", 
    backdrop: "https://media.themoviedb.org/t/p/original/aJDLz1748CIMZkCkyISYe5Hl6I7.jpg",
    platforms: [
      { name: "NETFLIX", logo: "/images/logos/netflix.png" },
      { name: "WATCHA", logo: "/images/logos/watcha.png" },
    ]
  },
  { 
    id: 13, 
    title: "극장판 귀멸의 칼날: 무한성편", 
    year: "2015", 
    matchRate: 95, 
    genres: ["애니메이션"], 
    summary: "탄지로 일행이 떨어진 곳, 그곳은 혈귀의 본거지 《무한성》─ “귀살대”와 “혈귀”의 최종 결전의 포문이 열린다.", 
    poster: "https://media.themoviedb.org/t/p/w500/m6Dho6hDCcL5KI8mOQNemZAedFI.jpg", 
    backdrop: "https://media.themoviedb.org/t/p/original/lNYympQM5O6QSInusbyG9eJDIe4.jpg",
    platforms: [
      { name: "WAVVE", logo: "/images/logos/wavve.png" },
      { name: "TVING", logo: "/images/logos/tving.png" },
    ]
  },
];
