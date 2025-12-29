# Task 004: 피그마 디자인 분석 및 디자인 시스템 정의

> B2B AI Agent Platform의 6개 페이지 디자인을 피그마에서 분석하고 디자인 시스템을 정의합니다.

## 개요

피그마 MCP를 활용하여 6개 페이지(메인, OS 소개, 리더/캐릭터챗/프루프 리딩 에이전트, 문의 폼)의 디자인을 분석하고, 일관된 디자인 시스템을 구축합니다. 색상, 타이포그래피, 간격 등의 디자인 토큰을 추출하고 Tailwind CSS 설정에 반영하여 이후 UI 구현 작업의 기반을 마련합니다.

## 관련 기능

- **F001**: 메인 페이지
- **F002**: Orchestration System 소개 페이지
- **F003**: 리더 에이전트 소개 페이지
- **F004**: 캐릭터챗 에이전트 소개 페이지
- **F005**: 프루프 리딩 에이전트 소개 페이지
- **F010**: 네비게이션 메뉴
- **F011**: CTA 버튼

## 관련 파일

- `tailwind.config.ts` - Tailwind CSS 설정 (디자인 토큰 추가)
- `src/app/globals.css` - 글로벌 CSS 변수 및 스타일
- `docs/design-system.md` - 디자인 시스템 문서 (신규 생성)
- `docs/content-structure.md` - 페이지별 콘텐츠 구조 문서 (신규 생성)

## 수락 기준

- [ ] 피그마 디자인에서 6개 페이지의 스크린샷 및 디자인 컨텍스트를 추출했다
- [ ] 색상 팔레트가 정의되고 Tailwind 설정에 반영되었다
- [ ] 타이포그래피 시스템(폰트 크기, 줄 높이, 굵기)이 정의되었다
- [ ] 간격 시스템(margin, padding, gap)이 정의되었다
- [ ] 각 페이지별 주요 섹션 및 콘텐츠 구조가 문서화되었다
- [ ] 디자인 시스템 문서가 생성되고 다음 작업에 활용 가능한 상태이다

## 구현 단계

### 1단계: 피그마 파일 접근 및 기본 정보 수집

**사전 요구 사항:**

- [ ] 피그마 파일 URL 확보 (fileKey 및 nodeId 필요)
- [ ] 피그마 인증 확인 (`mcp__figma__whoami` 도구 사용)

**작업 내용:**

- [ ] 6개 페이지의 피그마 URL 또는 nodeId 확보
  - 메인 페이지 (`/`)
  - Orchestration System 소개 (`/orchestration`)
  - 리더 에이전트 소개 (`/leader-agent`)
  - 캐릭터챗 에이전트 소개 (`/characterchat-agent`)
  - 프루프 리딩 에이전트 소개 (`/proofreading-agent`)
  - 문의 폼 (`/contact`)
- [ ] `mcp__figma__get_metadata` 도구로 각 페이지의 구조 파악

### 2단계: 디자인 변수 및 토큰 추출

**작업 내용:**

- [ ] `mcp__figma__get_variable_defs` 도구로 디자인 변수 추출
  - 색상 변수 (Primary, Secondary, Accent, Background, Text 등)
  - 타이포그래피 변수 (Font Family, Size, Weight, Line Height)
  - 간격 변수 (Spacing Scale: 4px, 8px, 12px, 16px, 24px, 32px, 48px 등)
- [ ] 추출된 변수를 디자인 토큰으로 정리
- [ ] `/docs/design-system.md` 문서 생성 및 토큰 기록

**예상 디자인 토큰 구조:**

```markdown
## 색상 팔레트

- Primary: #... (브랜드 메인 컬러)
- Secondary: #...
- Accent: #...
- Background: #...
- Text: #...

## 타이포그래피

- Heading 1: font-size, line-height, font-weight
- Heading 2: ...
- Body: ...

## 간격 시스템

- xs: 4px
- sm: 8px
- md: 16px
- lg: 24px
- xl: 32px
- 2xl: 48px
```

### 3단계: Tailwind CSS 설정 업데이트

**작업 내용:**

- [ ] `tailwind.config.ts` 파일 수정
  - `theme.extend.colors`에 추출한 색상 팔레트 추가
  - `theme.extend.fontSize`에 타이포그래피 스케일 추가
  - `theme.extend.spacing`에 간격 시스템 추가 (필요시)
- [ ] `src/app/globals.css`에 CSS 변수로 색상 정의 (다크모드 대비)
- [ ] 변경 사항 검증 (`npm run dev`로 확인)

**예시:**

```typescript
// tailwind.config.ts
export default {
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#...',
          light: '#...',
          dark: '#...',
        },
        // ...
      },
      fontSize: {
        hero: ['...', { lineHeight: '...', fontWeight: '...' }],
        // ...
      },
    },
  },
}
```

### 4단계: 페이지별 디자인 컨텍스트 및 콘텐츠 추출

**작업 내용:**

- [ ] `mcp__figma__get_design_context` 도구로 각 페이지의 디자인 컨텍스트 추출
- [ ] `mcp__figma__get_screenshot` 도구로 각 페이지의 스크린샷 생성 (참조용)
- [ ] 각 페이지별 주요 섹션 및 콘텐츠 구조 분석:
  - 섹션 레이아웃 (Hero, Features, CTA 등)
  - 텍스트 콘텐츠 (제목, 부제, 설명문)
  - 에이전트별 특징 및 활용 사례
  - CTA 버튼 문구 및 배치
- [ ] `/docs/content-structure.md` 문서 생성 및 페이지별 콘텐츠 기록

**예상 콘텐츠 구조 문서:**

```markdown
# 페이지별 콘텐츠 구조

## 메인 페이지 (/)

### Hero Section

- 제목: "..."
- 부제: "..."
- CTA: "문의하기" -> /contact

### Orchestration System 소개 카드

- 설명: "..."

### 에이전트 카드 그리드

- 리더 에이전트: "..."
- 캐릭터챗 에이전트: "..."
- 프루프 리딩 에이전트: "..."

## Orchestration System 소개 페이지 (/orchestration)

### 개요 섹션

- 제목: "..."
- 설명: "..."

### 작동 원리 섹션

- ...
```

### 5단계: 디자인 시스템 규칙 생성

**작업 내용:**

- [ ] `mcp__figma__create_design_system_rules` 도구로 프로젝트 디자인 시스템 규칙 생성
- [ ] 생성된 규칙을 `/docs/design-system.md`에 통합
- [ ] 컴포넌트 스타일링 가이드라인 추가
  - 버튼 스타일 (Primary, Secondary, Outline)
  - 카드 스타일
  - 입력 필드 스타일
  - 반응형 브레이크포인트

### 6단계: 문서화 및 검증

**작업 내용:**

- [ ] `/docs/design-system.md` 최종 검토
- [ ] `/docs/content-structure.md` 최종 검토
- [ ] ROADMAP.md에서 Task 004 완료 표시
- [ ] 다음 작업(Task 005-011)에 필요한 정보 준비 완료 확인

## 테스트 체크리스트

> 이 작업은 디자인 분석 및 문서화 작업으로, Playwright 테스트는 불필요합니다.

### 검증 항목

- [ ] Tailwind 설정이 올바르게 적용되었는지 `npm run dev` 실행 후 확인
- [ ] 추출한 색상이 브라우저에서 올바르게 표시되는지 확인
- [ ] 디자인 시스템 문서가 완전하고 이해하기 쉬운지 확인
- [ ] 콘텐츠 구조 문서가 모든 페이지를 포함하는지 확인

## 변경 사항 요약

> 작업 완료 후 작성

### 생성된 파일

- `/docs/design-system.md` - 디자인 시스템 전체 문서
- `/docs/content-structure.md` - 페이지별 콘텐츠 구조
- (선택) `/public/figma-screenshots/` - 참조용 스크린샷 (필요시)

### 수정된 파일

- `tailwind.config.ts` - 디자인 토큰 추가
- `src/app/globals.css` - CSS 변수 추가 (필요시)

### 주요 변경 내용

- 색상 팔레트: X개 색상 추가
- 타이포그래피: X개 폰트 스케일 정의
- 간격 시스템: X개 간격 토큰 정의
- 콘텐츠 구조: 6개 페이지 콘텐츠 정리

---

**상태**: 대기
**우선순위**: 높음 (Phase 2의 첫 작업)
**예상 소요 시간**: 2-3시간
**의존성**: Task 001, 002, 003 완료 (완료됨)
**다음 작업**: Task 005 (공통 컴포넌트 라이브러리 구현)
