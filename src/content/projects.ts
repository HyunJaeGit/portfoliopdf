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
    subtitle: '여러 URL의 상태를 동시에 관리하는 도구에서 시작해 3D 관제와 상태 전이 기반 AI 가이드로 확장한 모니터링 프로젝트',
    problem: '여러 URL을 한 화면에서 관리하기 위해 시작했으며, 대상별 스캔 생명주기와 상태 이력을 구축한 뒤 상태가 변할 때만 Gemini를 호출하는 3D 관제 도구로 확장했습니다.',
    role: '스캔 작업 생명주기·AI 호출 최적화·3D 상태 시각화 구현',
    technologies: ['Java 21', 'Spring Boot 3.4', 'JPA', 'MySQL 8.0', 'React', 'Three.js', 'Gemini API'],
    highlights: [
      '상태 전이 기반 호출 제어로 Gemini 호출량 약 90% 감소, 불필요한 토큰 사용 억제',
      'Java 21 Virtual Thread·TaskScheduler·ScheduledFuture 기반 다중 URL 동적 스캔 제어',
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
    subtitle: '전국 음식점 데이터를 관계형 모델로 구성하고 복합 검색·페이징·지도 탐색까지 연결한 해외 관광객 대상 플랫폼',
    problem: '지역 정보에 익숙하지 않은 해외 관광객이 전국 음식점을 지역·카테고리로 검색하고, 결과 목록과 지도 위치를 같은 흐름에서 비교할 수 있도록 데이터 조회부터 화면 탐색까지 연결했습니다.',
    role: '팀장 · 데이터 계층 전담 · 지도 연동 · AWS 배포',
    technologies: ['Java 8', 'Spring Framework 4', 'JSP', 'MyBatis', 'Oracle 18c', 'Kakao Map API', 'AWS EC2·RDS'],
    highlights: [
      'MyBatis SQL Mapper와 CRUD·복합 검색·페이징 쿼리 전담',
      'Oracle OFFSET/FETCH 기반 목록 페이징',
      'Kakao Map API 연동과 AWS EC2·RDS 배포',
      '일정·브랜치 조율과 기능별 결과물 통합',
    ],
    image: {
      src: 'images/projects/mz-search-map.png',
      alt: 'MZ 플랫폼의 서울 백반 검색 결과와 Kakao 지도 마커 연동 화면',
      caption: '개발·테스트 환경 화면 — DB 복합 검색, Oracle 페이징과 Kakao Map API를 연결한 MZ 검색 결과 화면',
    },
    path: '/portfolio/mz',
  },
]
