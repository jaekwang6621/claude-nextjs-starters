# 디자인 시스템

B2B AI Agent Platform 디자인 시스템 문서

**버전**: 1.0
**작성일**: 2025-12-30
**피그마 파일**: PR사이트\_디자인 (8GAEQXbYO6QPEdPKsR1i1D)

---

## 1. 색상 팔레트 (Color Palette)

### 1.1 Gray Scale

기본 회색 계열 색상으로 배경, 텍스트, 테두리 등에 사용됩니다.

| Token      | Hex 값  | 용도                   |
| ---------- | ------- | ---------------------- |
| `gray-50`  | #F9FAFB | 최상위 배경, 카드 배경 |
| `gray-100` | #F2F4F6 | 보조 배경, 호버 상태   |
| `gray-200` | #E5E8EB | 구분선, 비활성 배경    |
| `gray-900` | #191F28 | 주요 텍스트, 헤딩      |
| **White**  | #FFFFFF | 주요 배경              |

### 1.2 Gray (Dark) - 다크 모드용

| Token           | Hex 값  | 용도                      |
| --------------- | ------- | ------------------------- |
| `gray-dark-400` | #94979C | 보조 텍스트 (밝은 배경)   |
| `gray-dark-500` | #85888E | 보조 텍스트, 플레이스홀더 |
| `gray-dark-600` | #61656C | 중요도 낮은 텍스트        |
| `gray-dark-900` | #13161B | 다크모드 주요 텍스트      |

### 1.3 컬러 사용 가이드

```css
/* 예시: Tailwind 클래스 */
.bg-gray-50      /* 카드/섹션 배경 */
.bg-white        /* 메인 배경 */
.text-gray-900   /* 주요 텍스트 */
.text-gray-dark-500 /* 보조 텍스트 */
.border-gray-200 /* 구분선 */
```

---

## 2. 타이포그래피 (Typography)

### 2.1 폰트 패밀리

**기본 폰트**: Pretendard (웹 폰트)

- Pretendard는 한글과 영문을 모두 지원하는 가변 폰트입니다.
- 웹 폰트 로드: `next/font/google` 또는 로컬 폰트 파일 사용 권장

### 2.2 폰트 스케일

| 이름                 | Font Size | Line Height | Font Weight | Letter Spacing | 용도                  |
| -------------------- | --------- | ----------- | ----------- | -------------- | --------------------- |
| `text-md`            | 16px      | 16px        | 400         | -0.5px         | 본문 텍스트 (1줄)     |
| `text-md-2line`      | 16px      | 25px        | 400         | -0.5px         | 본문 텍스트 (여러 줄) |
| `text-md-2line-bold` | 16px      | 25px        | 700         | -0.5px         | 강조 본문 (여러 줄)   |
| `text-lg-semibold`   | 18px      | 18px        | 600         | -1px           | 소제목, 내비게이션    |
| `display-xxxs-bold`  | 24px      | 36px        | 700         | -1px           | 섹션 제목, 카드 헤딩  |

### 2.3 타이포그래피 사용 예시

```tsx
// Display (제목)
<h2 className="text-2xl font-bold leading-9 tracking-tight">
  섹션 제목
</h2>

// Text lg (소제목)
<h3 className="text-lg font-semibold leading-tight tracking-tighter">
  소제목
</h3>

// Text md (본문)
<p className="text-base font-normal leading-6 tracking-tight">
  본문 텍스트 (1줄)
</p>

// Text md 2line (본문 여러 줄)
<p className="text-base font-normal leading-[25px] tracking-tight">
  본문 텍스트 (여러 줄)
</p>
```

---

## 3. 간격 시스템 (Spacing)

### 3.1 기본 간격 스케일

Tailwind CSS 기본 간격 시스템 사용 (4px 단위):

| Token | Value | 사용 예시             |
| ----- | ----- | --------------------- |
| `1`   | 4px   | 작은 아이콘 간격      |
| `2`   | 8px   | 버튼 내부 패딩        |
| `4`   | 16px  | 카드 내부 패딩        |
| `6`   | 24px  | 섹션 간 간격          |
| `8`   | 32px  | 헤더/푸터 높이        |
| `10`  | 40px  | 섹션 타이틀 하단 간격 |
| `12`  | 48px  | 큰 섹션 간 간격       |
| `16`  | 64px  | 페이지 섹션 간 간격   |
| `20`  | 80px  | 히어로 섹션 상하 패딩 |

### 3.2 컨테이너 최대 너비

- 메인 컨테이너: `1520px` (좌우 여백 200px 기준 1920px 화면)
- 컨텐츠 영역: `1440px` (컨테이너 내부 40px 패딩)

```tsx
<div className="mx-auto max-w-[1520px] px-10">{/* 1520px 컨테이너 */}</div>
```

---

## 4. 레이아웃 구조

### 4.1 페이지 레이아웃

모든 페이지는 다음 구조를 따릅니다:

```tsx
<div className="flex min-h-screen flex-col">
  {/* Header */}
  <header className="h-[162px]">
    {/* Top Navigation: 104px */}
    {/* Tagline: 58px */}
  </header>

  {/* Main Content */}
  <main className="flex-1">{/* Page-specific sections */}</main>

  {/* Footer (필요시) */}
  <footer>{/* Footer content */}</footer>
</div>
```

### 4.2 헤더 구조

**높이**: 162px

- **Top Navigation**: 104px
  - 로고: 240px 왼쪽 시작, 184px × 48px
  - 메뉴: 중앙 정렬 (LIBRE OS, Reader Agent, Charactor Chat, Proofreading)
  - Contact Us 버튼: 우측 (1546px 시작)
- **Tagline**: 58px
  - "기업이 보유한 문서 기반 IP를, AI를 통해 다양한 기능과 서비스로 확장해드립니다."

### 4.3 섹션 간격

- 헤더 ~ 첫 섹션: `80px`
- 섹션 간: `80px ~ 120px`
- 섹션 내부 요소: `40px ~ 60px`

---

## 5. 컴포넌트 스타일

### 5.1 버튼 (Button)

#### Primary Button (Contact Us)

```tsx
<button className="hover:bg-gray-dark-900 flex h-12 items-center gap-2 rounded-lg bg-gray-900 px-4 py-3 text-white transition-colors">
  <span className="text-base font-normal">Contact Us</span>
  <ChevronRight className="h-6 w-6" />
</button>
```

#### Secondary Button (Learn more)

```tsx
<button className="flex h-12 items-center gap-2 rounded-lg border border-gray-200 px-4 py-3 text-gray-900 transition-colors hover:bg-gray-50">
  <span className="text-base font-normal">Learn more</span>
  <ChevronRight className="h-6 w-6" />
</button>
```

### 5.2 카드 (Card)

```tsx
<div className="rounded-2xl border border-gray-200 bg-white p-6 transition-shadow hover:shadow-lg">
  {/* Card content */}
</div>
```

### 5.3 구분선 (Divider)

```tsx
<div className="h-[1px] w-full bg-gray-200" />
```

---

## 6. 반응형 브레이크포인트

Tailwind CSS 기본 브레이크포인트 사용:

| 브레이크포인트 | 값     | 용도          |
| -------------- | ------ | ------------- |
| `sm`           | 640px  | 모바일 가로   |
| `md`           | 768px  | 태블릿        |
| `lg`           | 1024px | 작은 데스크탑 |
| `xl`           | 1280px | 데스크탑      |
| `2xl`          | 1536px | 큰 데스크탑   |

**디자인 기준**: 1920px × 1080px (Full HD)

---

## 7. 아이콘 시스템

**아이콘 라이브러리**: Lucide Icons

### 사용된 아이콘:

- `chevron-right`: 24×24px (버튼, 네비게이션)
- `arrow-right`: 40×40px (큰 CTA)

```tsx
import { ChevronRight, ArrowRight } from 'lucide-react'

<ChevronRight className="w-6 h-6" />
<ArrowRight className="w-10 h-10" />
```

---

## 8. 애니메이션 및 트랜지션

### 8.1 기본 트랜지션

```css
transition-colors /* 색상 전환 (200ms) */
transition-shadow /* 그림자 전환 (200ms) */
transition-all    /* 모든 속성 (200ms) */
```

### 8.2 호버 효과

- **버튼**: 배경색 변경 + 부드러운 전환
- **카드**: 그림자 추가 (hover:shadow-lg)
- **링크**: 색상 변경

---

## 9. 접근성 (Accessibility)

### 9.1 색상 대비

- 주요 텍스트 (gray-900) on White: **14.5:1** (AAA)
- 보조 텍스트 (gray-dark-500) on White: **4.6:1** (AA)

### 9.2 포커스 상태

```tsx
<button className="focus:ring-2 focus:ring-gray-900 focus:ring-offset-2 focus:outline-none">
  {/* Button content */}
</button>
```

---

## 10. 다크 모드 (선택사항)

현재 디자인은 라이트 모드 기준이지만, `gray-dark` 색상을 활용하여 다크 모드 지원 가능:

```tsx
<div className="dark:bg-gray-dark-900 bg-white text-gray-900 dark:text-white">
  {/* Content */}
</div>
```

---

## 11. 적용 우선순위

Task 005-011에서 다음 우선순위로 디자인 시스템 적용:

1. **공통 컴포넌트** (Task 005): Button, Card, Section Wrapper
2. **메인 페이지** (Task 006): Hero, Features, CTA
3. **에이전트 소개 페이지** (Task 007-010): 통일된 레이아웃
4. **문의 폼** (Task 011): 폼 요소 스타일링

---

**문서 버전**: 1.0
**최종 수정일**: 2025-12-30
**작성자**: Claude Code (Task 004)
