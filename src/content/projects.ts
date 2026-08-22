export type ProjectSummary = {
  id: 'aura3d' | 'mz'
  title: string
  type: string
  period: string
  subtitle: string
  problem: string
  role: string
  technologies: readonly string[]
  highlights: readonly string[]
  image: {
    src: string
    alt: string
    caption: string
  }
  path: string
}

export const projects: readonly ProjectSummary[] = [
  {
    id: 'aura3d',
    title: 'Aura3D',
    type: '개인 프로젝트',
    period: '2025.12–2026.01',
    subtitle: '사용자 요청 기반 스캔과 상태 전이 기반 AI 가이드를 결합한 3D 모니터링 도구',
    problem: '핵심 과제는 반복 스캔과 동일 상태의 AI 재호출을 분리해 외부 API 사용량과 관제 해석 부담을 줄이는 구조였습니다.',
    role: '스캔 작업 생명주기·AI 호출 최적화·3D 상태 시각화 구현',
    technologies: ['Java 21', 'Spring Boot 3.4', 'JPA', 'MySQL 8.0', 'React', 'Three.js', 'Gemini API'],
    highlights: [
      'TaskScheduler와 ScheduledFuture 기반 동적 스캔 제어',
      '상태 전이 시에만 Gemini를 호출하고 기존 가이드 재사용',
      'JPA 상태 이력과 React·Three.js 기반 관제 데이터 시각화',
    ],
    image: {
      src: 'images/projects/aura3d-dashboard.png',
      alt: 'Aura3D 3D 비서가 HTTP 200 상태와 Gemini 대응 가이드를 보여주는 관제 대시보드',
      caption: '개발·테스트 환경 화면 — 3D 비서, Gemini 대응 가이드와 프로젝트별 스캔 제어를 결합한 Aura3D 대시보드',
    },
    path: '/portfolio/aura3d',
  },
  {
    id: 'mz',
    title: 'MZ 전국 맛집 정보 플랫폼',
    type: '4인 팀 프로젝트 · 팀장',
    period: '2023.09–2024.01',
    subtitle: '해외 관광객이 다국어·지역·카테고리 기준으로 음식점을 탐색하는 플랫폼',
    problem: '핵심 과제는 지역 정보에 익숙하지 않은 사용자도 전국 음식점을 검색하고 지도에서 비교할 수 있는 탐색 흐름이었습니다.',
    role: '팀장 · Oracle DB 설계 · MyBatis SQL Mapper 및 전체 SQL 작업 · 지도 연동 · AWS 배포',
    technologies: ['Java 8', 'Spring Framework 4', 'JSP', 'MyBatis', 'Oracle 18c', 'Kakao Map API', 'AWS EC2·RDS'],
    highlights: [
      'MyBatis SQL Mapper와 CRUD·복합 검색·페이징 쿼리 전담',
      'Oracle OFFSET/FETCH 기반 목록 페이징',
      'Kakao Map API 연동과 AWS EC2·RDS 배포',
    ],
    image: {
      src: 'images/projects/mz-search-map.png',
      alt: 'MZ 플랫폼의 서울 백반 검색 결과와 Kakao 지도 마커 연동 화면',
      caption: '개발·테스트 환경 화면 — DB 복합 검색, Oracle 페이징과 Kakao Map API를 연결한 MZ 검색 결과 화면',
    },
    path: '/portfolio/mz',
  },
]
