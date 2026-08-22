# 권현재 백엔드 개발자 포트폴리오

### [GitHub Pages에서 포트폴리오 바로 보기](https://hyunjaegit.github.io/portfoliopdf/)

[GitHub 저장소](https://github.com/HyunJaeGit/portfoliopdf)

Java와 Spring을 중심으로 한 백엔드 개발자 포트폴리오 사이트입니다. Aura3D와 MZ 맛집 검색 플랫폼에서 구현한 기능, 기술 선택, 검증 범위와 한계를 정리했습니다.

## 주요 페이지

- 홈: 개발자 소개, 대표 프로젝트, 주요 경험과 기술
- 프로젝트: Aura3D와 MZ 프로젝트 요약
- Aura3D: 모니터링 API, 스케줄링, 상태 이력과 AI 가이드 처리
- MZ: 복합 검색, 페이징, 지도 연동과 팀 프로젝트 기여
- 이력서 및 포트폴리오 문서 페이지

## 기술 구성

- React
- TypeScript
- Vite
- React Router (`HashRouter`)
- CSS

백엔드, API 서버, 데이터베이스 또는 서버리스 함수 없이 정적 사이트로 구성되어 있습니다.

## 로컬 실행

```bash
npm ci
npm run dev
```

## 검증

```bash
npm run lint
npm run build
```

## 배포

`main` 브랜치에 변경사항을 push하면 GitHub Actions가 의존성 설치, lint, production build를 수행한 뒤 GitHub Pages에 배포합니다. Actions 탭에서 `Deploy to GitHub Pages` 워크플로를 직접 실행할 수도 있습니다.
