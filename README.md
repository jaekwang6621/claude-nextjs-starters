# B2B AI Agent Platform

AI 에이전트 오케스트레이션 시스템과 전문 에이전트를 통해 비즈니스 프로세스를 자동화하는 B2B 플랫폼 소개 웹사이트입니다.

## 프로젝트 개요

이 프로젝트는 B2B 고객에게 AI 에이전트 오케스트레이션 시스템 및 3가지 전문 에이전트를 소개하고, 웹 문의를 Notion으로 자동 전송하여 효율적으로 관리하는 MVP 웹사이트입니다.

### 주요 기능

- **메인 페이지**: AI 에이전트 플랫폼 전체 개요 및 3가지 에이전트 요약 소개
- **Orchestration System 소개**: 오케스트레이션 시스템 상세 설명 및 작동 원리
- **3가지 전문 에이전트 소개**:
  - 리더 에이전트 (팀 리더십 및 관리)
  - 캐릭터챗 에이전트 (대화형 인터랙션)
  - 프루프 리딩 에이전트 (문서 검토 및 교정)
- **문의 폼**: 회사 정보 및 문의 내용 수집 → Notion 자동 전송

## 기술 스택

### 프론트엔드 프레임워크

- **Next.js 16.1.1** (App Router + Turbopack)
- **TypeScript 5**
- **React 19.2.3**

### 스타일링 & UI

- **TailwindCSS 4.1.18** (설정파일 없는 새 엔진)
- **shadcn/ui 3.3.1** (new-york style)
- **Radix UI** (접근성 높은 UI 프리미티브)
- **Lucide React** (아이콘 라이브러리)

### 폼 & 검증

- **React Hook Form 7.63.0**
- **Zod 4.1.11** (스키마 검증)
- **@hookform/resolvers 5.2.2**

### 외부 API & 통합

- **Notion API** (@notionhq/client)
- **피그마** (디자인 참조)

## 시작하기

### 사전 요구사항

- Node.js 18.x 이상
- npm, yarn, pnpm 또는 bun

### 설치

1. 저장소 클론 및 의존성 설치:

```bash
git clone <repository-url>
cd nextjs-PR
npm install
```

2. 환경 변수 설정:

`.env.example` 파일을 복사하여 `.env.local` 파일을 생성하고 필요한 값을 입력합니다:

```bash
cp .env.example .env.local
```

`.env.local` 파일을 편집하여 다음 값을 설정합니다:

```env
# Notion API Configuration (필수)
NOTION_API_KEY=your_notion_api_key
NOTION_DATABASE_ID=your_notion_database_id

# Figma (선택사항)
FIGMA_ACCESS_TOKEN=your_figma_token
FIGMA_FILE_KEY=your_figma_file_key
```

#### Notion API 설정 방법

1. [Notion 개발자 포털](https://www.notion.so/my-integrations)에서 새 통합(Integration) 생성
2. 생성된 `Internal Integration Token`을 `NOTION_API_KEY`에 입력
3. Notion에서 문의 데이터를 저장할 데이터베이스 생성
4. 데이터베이스 페이지에서 생성한 통합 연결 (Share → Add connections)
5. 데이터베이스 URL에서 ID 복사하여 `NOTION_DATABASE_ID`에 입력
   - URL 형식: `https://notion.so/[workspace]/[database_id]?v=...`

**Notion 데이터베이스 스키마**:

| 필드명    | 타입      | 설명             |
| --------- | --------- | ---------------- |
| 회사명    | Title     | 문의자 회사 이름 |
| 담당자명  | Rich Text | 문의자 이름      |
| 이메일    | Email     | 문의자 이메일    |
| 연락처    | Phone     | 문의자 전화번호  |
| 문의 내용 | Rich Text | 상세 문의 메시지 |
| 접수일시  | Created   | 문의 제출 시각   |
| 상태      | Select    | 신규/진행중/완료 |

### 개발 서버 실행

```bash
npm run dev
```

브라우저에서 [http://localhost:3000](http://localhost:3000)을 열어 확인하세요.

### 빌드

```bash
npm run build
npm start
```

## 프로젝트 구조

```
nextjs-PR/
├── src/
│   ├── app/                      # Next.js App Router
│   │   ├── layout.tsx            # 루트 레이아웃
│   │   ├── page.tsx              # 메인 페이지
│   │   ├── orchestration/        # Orchestration System 소개
│   │   ├── leader-agent/         # 리더 에이전트 소개
│   │   ├── characterchat-agent/  # 캐릭터챗 에이전트 소개
│   │   ├── proofreading-agent/   # 프루프 리딩 에이전트 소개
│   │   └── contact/              # 문의 폼 페이지
│   ├── components/
│   │   ├── inquiry-form.tsx      # 문의 폼 컴포넌트
│   │   ├── layout/               # 레이아웃 컴포넌트
│   │   ├── navigation/           # 네비게이션 컴포넌트
│   │   ├── providers/            # Context Providers
│   │   └── ui/                   # shadcn/ui 컴포넌트
│   └── lib/
│       ├── actions/              # Server Actions
│       │   └── inquiry.ts        # 문의 제출 액션
│       └── validations/          # Zod 스키마
│           └── inquiry.ts        # 문의 폼 검증 스키마
├── docs/                         # 프로젝트 문서
│   ├── PRD.md                    # 제품 요구사항 문서
│   └── guides/                   # 개발 가이드
└── public/                       # 정적 에셋

```

## 사용 가능한 스크립트

```bash
# 개발 서버 실행 (Turbopack)
npm run dev

# 프로덕션 빌드
npm run build

# 프로덕션 서버 실행
npm start

# 타입 체크
npm run typecheck

# 린트 검사
npm run lint

# 코드 포맷팅
npm run format

# 모든 검사 통합 실행
npm run check-all
```

## 개발 가이드

상세한 개발 가이드는 `/docs/guides/` 폴더를 참조하세요:

- **프로젝트 구조**: `docs/guides/project-structure.md`
- **스타일링 가이드**: `docs/guides/styling-guide.md`
- **컴포넌트 패턴**: `docs/guides/component-patterns.md`
- **Next.js 16 가이드**: `docs/guides/nextjs-16.md`
- **폼 처리 가이드**: `docs/guides/forms-react-hook-form.md`

## 배포

이 프로젝트는 [Vercel Platform](https://vercel.com)에 최적화되어 있습니다.

### Vercel에 배포하기

1. Vercel에 프로젝트 연결
2. 환경 변수 설정:
   - `NOTION_API_KEY`
   - `NOTION_DATABASE_ID`
3. 자동 배포 완료

자세한 내용은 [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying)을 참조하세요.

## 다음 단계

현재 프로젝트는 Phase 1 (클린업 + 기본 구조) 완료 상태입니다. 다음 단계로 진행하세요:

1. **피그마 디자인 분석**: 6개 페이지 디자인 상세 확인 및 콘텐츠 추출
2. **메인 페이지 상세 구현**: 히어로 섹션, 에이전트 카드 디자인 적용
3. **소개 페이지 상세 구현**: 각 에이전트 페이지 고유 디자인 및 실제 컨텐츠 작성
4. **문의 폼 디자인 적용**: 피그마 디자인에 맞춰 폼 스타일링
5. **최종 검증 및 배포**: 반응형, 접근성, SEO 최적화

자세한 계획은 `docs/PRD.md`를 참조하세요.

## 라이선스

MIT

## 문의

프로젝트에 대한 문의사항은 문의 폼을 통해 연락 주시기 바랍니다.
