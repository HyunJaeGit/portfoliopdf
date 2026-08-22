export type ProjectSummary = {
  id: 'aura3d' | 'mz'
  title: string
  subtitle: string
  role: string
  technologies: readonly string[]
  highlights: readonly string[]
  path: string
}

export const projects: readonly ProjectSummary[] = [
  {
    id: 'aura3d',
    title: 'Aura3D',
    subtitle: '서버 상태를 수집하고 변화에 맞춰 안내하는 모니터링 프로젝트',
    role: '모니터링 API·스케줄링·상태 표현 구현',
    technologies: ['Java', 'Spring', 'JPA', 'React', 'Three.js', 'Gemini API'],
    highlights: [
      '프로젝트 등록·목록·삭제 REST API',
      'TaskScheduler와 ScheduledFuture 기반 모니터링',
      '상태 변화에 따른 AI 가이드 호출과 동일 상태 가이드 재사용',
    ],
    path: '/projects/aura3d',
  },
  {
    id: 'mz',
    title: 'MZ 맛집 검색 플랫폼',
    subtitle: '지역과 카테고리를 조합해 음식점을 탐색하는 4인 팀 프로젝트',
    role: '팀장 · 검색 및 지도 화면 구현 · 결과물 통합',
    technologies: ['Java', 'Spring MVC', 'JSP', 'MyBatis', 'Oracle', 'Kakao Map'],
    highlights: [
      'MyBatis 동적 SQL을 활용한 지역·카테고리 복합 검색',
      'Oracle OFFSET/FETCH 기반 목록 페이징',
      'Kakao Map 마커·동적 인포윈도우와 팀 결과물 통합',
    ],
    path: '/projects/mz',
  },
]
