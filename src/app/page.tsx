import { Footer } from '@/components/layout/footer'
import { Header } from '@/components/layout/header'
import { TaglineBar } from '@/components/layout/tagline-bar'
import { HeroSection } from '@/components/sections/hero-section'
import { FeatureTabsSection } from '@/components/sections/feature-tabs-section'
import { FeatureDetailSection } from '@/components/sections/feature-detail-section'
import { CTASection } from '@/components/sections/cta-section'
import {
  TechHeadline,
  TechHeadlineHighlight,
} from '@/components/sections/tech-headline'
import { TechFeatureCards } from '@/components/sections/tech-feature-cards'
import { CustomerCardsSection } from '@/components/sections/customer-cards-section'
import { BottomCTACards } from '@/components/sections/bottom-cta-cards'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '홈 - B2B AI Agent Platform',
  description:
    '기업이 보유한 문서 기반 IP를, AI를 통해 다양한 기능과 서비스로 확장해드립니다.',
}

// 기능 탭 데이터
const featureTabs = [
  { id: 'reader', label: '독서 튜터', active: true },
  { id: 'character', label: '캐릭터 챗', active: false },
  { id: 'proofreading', label: '정밀 검수/교정', active: false },
  { id: 'analysis', label: '상업성/독자 분석', active: false },
  { id: 'metadata', label: '도서 메타데이터 관리', active: false },
  { id: 'recommendation', label: 'AI 맞춤 추천', active: false },
]

// 기술 기능 카드 데이터
const techCards = [
  {
    id: 'text-analysis',
    title: '문맥까지 이해하는 고정밀 텍스트 분석',
    description:
      '문장을 단어 단위로만 보는 것이 아니라, 문단 구조 · 앞뒤 문장 · 전체 흐름을 함께 읽어냅니다. 같은 단어라도 상황에 따라 의미가 달라지는 부분을 구분하고, 단순 오탈자뿐 아니라 어색한 표현, 논리적으로 매끄럽지 않은 문장까지 찾아냅니다. 교정, 요약, 검색, 질의응답 등 다른 엔진들의 기반 데이터로 활용할 수 있습니다.',
  },
  {
    id: 'narrative-memory',
    title: '시리즈 전체를 기억하는 장기 서사 메모리',
    description:
      '여러 권, 여러 회차에 걸친 인물 · 설정 · 사건 정보를 하나의 서사 흐름으로 함께 이해합니다. 질문이 들어오면 해당 장면만 보는 것이 아니라, 앞뒤 권의 관련 내용까지 함께 참조해 자연스러운 이유와 맥락을 설명합니다. 캐릭터 챗봇, 시리즈 IP 서비스 등에서 설정 충돌을 막고, 이야기가 끊기지 않는 대화를 구현할 수 있습니다.',
  },
  {
    id: 'style-module',
    title: '톤앤매너를 학습해 일관성을 유지하는 스타일 모듈',
    description:
      '도서 전반의 톤앤매너를 학습하여 작성자나 편집자가 바뀌어도 말투 · 표기 · 문장 구조가 흔들리지 않도록 합니다. 에디터, 마케팅 카피, 대화 스크립트 등 전 영역에서 동일한 브랜딩을 유지하는 기반이 됩니다.',
  },
  {
    id: 'intent-reasoning',
    title: '질문의 의도를 파악해 답을 찾아내는 추론 엔진',
    description:
      '정확한 용어나 문장 구조가 달라도, 비슷한 상황과 규정을 다루는 페이지를 우선적으로 찾아 사용자가 원하는 답에 더 정확하게 도달할 수 있도록 돕습니다. 이 엔진은 검색 결과, Q&A, 추천 기능의 공통 기반으로 작동하며, 도서 IP에 접근하는 전반적인 경험의 품질을 끌어올립니다.',
  },
  {
    id: 'multi-doc',
    title: '여러 도서를 한 번에 이해하는 통합 리딩',
    description:
      '여러 도서를 동시에 이해하는 멀티 도서 이해가 가능합니다. 서로 다른 파일·권·시즌에 흩어진 정보를 하나의 맥락으로 통합해 이해하며, 형식이 달라도 공통 개념과 관계를 기준으로 연결해 사용자는 한 번의 질문으로 전체 내용을 아우르는 답변을 받을 수 있습니다.',
  },
  {
    id: 'safety-module',
    title: '보안 · 규정을 준수하는 안전 제어 모듈',
    description:
      '회사 규정, 보안 정책, 금지 표현을 규칙으로 걸어두고, AI가 만든 답변을 이 규칙에 한 번 더 대조해 이상한 부분을 걸러냅니다. 여기에 더해 AI 스스로도 위험하거나 부적절해 보이는 표현을 감지해 미리 수정 · 차단함으로써, 서비스에 올릴 수 있는 수준으로 답변을 정돈합니다.',
  },
]

// 고객 카드 데이터
const customerCards = [
  {
    id: 'publisher',
    title: 'AI 독서 플랫폼을 구축하고 싶은\n출판사 및 유통사',
    description:
      '보유한 도서 IP를 활용해 기존 전자책 서비스를 AI 독서 플랫폼으로 확장할 수 있습니다. 단순한 PDF 형태의 도서를 AI가 학습해 독자에게는 새로운 읽기 경험을 제공하고, 운영 중인 플랫폼에는 다양한 AI 기능을 자연스럽게 접목할 수 있도록 함께 설계합니다.',
  },
  {
    id: 'edutech',
    title: '에듀테크 · 독서 교육 서비스',
    description:
      "학생이 도서를 읽다가 막히는 부분을 바로 질문하고 도움을 받을 수 있는 AI 독서 튜터를 서비스 안에 포함할 수 있습니다. 문단과 앞뒤 맥락을 바탕으로 핵심을 정리하고 학생 눈높이에 맞춰 다시 설명해 주어, 교사가 없어도 혼자 읽기 어려웠던 책을 끝까지 따라가도록 돕습니다. 별도의 문제 풀이가 아니라 '질문과 이해'를 중심으로 한 독서 학습 경험을 제공할 수 있습니다.",
  },
  {
    id: 'media',
    title: '스토리 IP를 확장하고 싶은\n미디어 · 콘텐츠 기업',
    description:
      '학습 튜터, 캐릭터 챗, 멀티미디어 콘텐츠 제작 등으로 텍스트를 자유롭게 확장할 수 있습니다. 텍스트 안에 갇혀 있던 IP를 여러 서비스와 상품에 다시 활용해, 종이책을 넘어서는 새로운 독서 경험과 수익 모델을 만들어 갈 수 있습니다.',
  },
  {
    id: 'proofreading',
    title: '교정, 교열 리소스가 부족한\n출판사 · 제작사',
    description:
      'AI가 본문 전체를 스캔해 오탈자, 띄어쓰기, 문장 부호, 어색한 표현 등을 이슈 목록으로 정리해 제공합니다. 편집자는 목록을 따라가며 한 번에 확인 · 수정할 수 있어, 마감 직전에 원고를 여러 번 읽어가며 오탈자를 찾는 수동 교정 작업을 줄이고 작품 전반의 품질을 안정적으로 유지할 수 있습니다.',
  },
  {
    id: 'quality-check',
    title: '원고 퀄리티를 빠르게 점검하고 싶은 출판사 · 편집부',
    description:
      '완성된 원고를 업로드하면 AI가 상업성, 독창성, 예상 타깃 독자, 완성도 등을 종합적으로 분석해 줍니다. 강점과 보완이 필요한 부분을 한눈에 볼 수 있는 리포트로 정리해, 편집자가 본격적인 검토에 들어가기 전에 원고의 현재 상태를 객관적으로 파악할 수 있습니다.',
  },
  {
    id: 'distribution',
    title: '여러 채널에 도서를 효율적으로\n유통하고 싶은 출판사',
    description:
      '한 번의 분석으로 각 유통 채널에 필요한 도서 정보, 소개 문구, 키워드, 카테고리 후보를 자동 생성하고, 채널별로 필요한 항목을 표 형태로 깔끔하게 정리해 줍니다. 정리된 결과는 엑셀 등으로 한 번에 추출해 채널별로 복사 · 수정해 쓸 수 있어, 운영팀은 흩어진 정보를 모으고 입력하는 반복 작업을 줄이고 기획 · 마케팅에 더 많은 시간을 쓸 수 있습니다.',
  },
  {
    id: 'library',
    title: '전자자료실을 운영하는\n기관 · 학교 · 공공도서관',
    description:
      '전자책 · 논문 · 자료집이 쌓여 있는 디지털 자료실 위에 AI 독서/학습 튜터를 올려, 이용자가 자료를 읽으면서 이해가 안 되는 부분을 바로 질문할 수 있는 환경을 만들 수 있습니다. 단순 PDF 열람에서 벗어나, 핵심 요약 · 개념 설명 · 관련 자료 추천까지 함께 제공해 자료의 활용도를 높일 수 있습니다.',
  },
  {
    id: 'onboarding',
    title: '사내 교육 포털 · 온보딩 시스템을\n운영하는 일반 기업',
    description:
      '사내 규정, 업무 매뉴얼, 교육 교재를 기반으로 구성원이 실제 업무 상황에서 질문하면 문서에서 근거를 찾아 설명해 주는 AI 교육 도우미로 활용할 수 있습니다. 신입 온보딩 · 보안 교육처럼 반복되는 문의와 설명에 들던 시간을 줄이고, 교육 담당자는 대면 교육 · 콘텐츠 기획 · 고급 질문 설계 등에 자원을 집중할 수 있습니다.',
  },
  {
    id: 'magazine',
    title: '리포트 · 매거진 구독 서비스를\n운영하는 미디어 기업',
    description:
      '산업 리포트, 투자 보고서, 인사이트 매거진 등 긴 문서를 AI가 함께 읽으며 구독자가 궁금한 내용을 질문으로 탐색할 수 있는 인터랙티브 리딩 경험을 제공합니다. 기사 · 리포트 기반 Q&A, 요약, 배경 설명 기능을 통해 같은 콘텐츠로 더 높은 체류 시간과 재구독률을 기대할 수 있습니다.',
  },
  {
    id: 'research',
    title: '연구 · 정책 보고서 아카이브를\n운영하는 공공 · 연구기관',
    description:
      'AI가 수백·수천 건의 연구·정책 보고서를 의미 단위로 이해해 연구자와 정책 담당자가 키워드를 정확히 몰라도 질문만으로 관련 보고서를 찾을 수 있게 합니다. 이해하기 어려운 문단이나 전문 용어에 대해 질문을 던지면, 앞뒤 맥락을 함께 참고해 내용을 쉽게 풀어 설명해 주기 때문에 방대한 보고서를 실제 의사결정이나 토론에 활용하기가 훨씬 수월해집니다.',
  },
]

// 하단 CTA 카드 데이터
const bottomCTACards = [
  { id: 'demo', label: 'Request Demo', variant: 'dark' as const },
  { id: 'libre', label: 'Libre OS', variant: 'light' as const },
]

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <TaglineBar />
      <main className="flex-1">
        {/* 2.1 Hero Section - Empty gradient placeholder for image upload */}
        <HeroSection
          variant="gradient"
          size="full"
          className="px-10"
          title=""
          description=""
        />

        {/* 2.2 Headline Section */}
        <TechHeadline>
          We Help Your{' '}
          <TechHeadlineHighlight>Document IP</TechHeadlineHighlight> Get Reused
          In Ways You Couldn&apos;t Even Imagine Before.
        </TechHeadline>

        {/* 2.3 기능 선택 탭 */}
        <FeatureTabsSection tabs={featureTabs} />

        {/* 2.4 독서 튜터 소개 섹션 */}
        <FeatureDetailSection
          title="AI 독서 튜터는 책읽기 과정을 깊이 있는 학습 경험으로 만듭니다."
          description="AI 학습 튜터는 독자가 보고 있는 책을 함께 읽고, 챕터 구조와 맥락을 깊이 있게 파악한 뒤 질문에 답하는 지능형 학습 도우미입니다. 단순히 궁금한 부분을 찾아주는 것을 넘어, 핵심 요약 · 쉬운 개념 설명 · 예시와 비유 · 추가 배경 지식 · 이해도를 점검하는 질문까지 여러 학습 기능을 한 번에 제공할 수 있습니다."
          highlightTitle="전공 서적, 수험서, 실무서, 인문 · 교양 도서처럼 읽기만으로는 온전히 이해하기 어려운 책일수록 AI 학습 튜터의 도움을 크게 받을 수 있습니다."
          highlightContent="AI 학습 튜터와 함께라면 전자책을 읽는 독자는 독서를 단순한 열람이 아닌, 이해하고 활용하는 경험으로 바꿀 수 있습니다. 학생과 수험생은 이해가 어려운 개념을 쉽게 풀어 설명받고 막히는 문단을 바로 질문하며 흐름을 놓치지 않고 따라갈 수 있습니다. 직장인과 전문가는 복잡한 챕터를 요약해서 보거나 '우리 프로젝트에 적용하면?' 같은 응용 질문으로 책 내용을 실제 업무와 빠르게 연결하고 실질적인 인사이트와 액션으로까지 확장할 수 있습니다."
          ctaText="독서 튜터 기능 더 알아보기"
          ctaHref="/reader-agent"
          imageAlt="독서 튜터 소개"
        />

        {/* 2.5 AI 전문가 시너지 CTA */}
        <CTASection
          title="AI 전문가들이 모여 시너지를 일으킵니다."
          description="기획부터 구축·운영까지, 귀사의 상황에 맞는 AI 활용 전략을 함께 설계합니다."
          action={{
            label: 'AI 기능 도입 문의하기',
            href: '/contact',
            variant: 'default',
            size: 'lg',
          }}
          className="bg-gray-50"
        />

        {/* 2.6 Tech Features Headline */}
        <TechHeadline>
          Our Team Turns{' '}
          <TechHeadlineHighlight>Complex AI Ideas</TechHeadlineHighlight> Into
          Deployed Systems For Organizations Across Industries, From Data
          Infrastructure To Customer-Facing Products.
        </TechHeadline>

        {/* 2.7 Tech Feature Cards */}
        <TechFeatureCards cards={techCards} />

        {/* 2.8 Who Our Product Is For Headline */}
        <TechHeadline>Who Our Product Is For</TechHeadline>

        {/* 2.9 Customer Cards */}
        <CustomerCardsSection cards={customerCards} />

        {/* 2.10 하단 CTA 섹션 */}
        <BottomCTACards cards={bottomCTACards} />
      </main>
      <Footer />
    </div>
  )
}
