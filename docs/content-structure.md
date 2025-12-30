# 콘텐츠 구조 및 텍스트 가이드

**Version**: 1.0
**Last Updated**: 2025-12-30
**Figma File**: [8GAEQXbYO6QPEdPKsR1i1D](https://www.figma.com/design/8GAEQXbYO6QPEdPKsR1i1D)

이 문서는 B2B AI Agent Platform의 6개 페이지에 대한 콘텐츠 구조와 실제 텍스트를 정의합니다. 각 섹션은 Figma 디자인에서 추출한 실제 콘텐츠를 포함하며, 구현 시 참조할 컴포넌트와 스타일 가이드를 함께 제공합니다.

---

## 목차

1. [공통 요소](#1-공통-요소)
2. [메인 페이지 (/)](#2-메인-페이지-)
3. [Orchestration System (/orchestration-system)](#3-orchestration-system-orchestration-system)
4. [리더 에이전트 (/reader-agent)](#4-리더-에이전트-reader-agent)
5. [캐릭터챗 에이전트 (/character-chat)](#5-캐릭터챗-에이전트-character-chat)
6. [프루프 리딩 에이전트 (/proofreading)](#6-프루프-리딩-에이전트-proofreading)
7. [문의 폼 (/contact)](#7-문의-폼-contact)
8. [참조 문서](#8-참조-문서)

---

## 1. 공통 요소

### 1.1 헤더 (Header)

**구조**: 모든 페이지 상단 고정

- Logo (좌측, 184x48px, 배경: Gray/100)
- Navigation Menu (중앙)
- Contact Us Button (우측)

**Navigation Items**:

```
LIBRE OS
Reader Agent
Charactor Chat
Proofreading
```

**Contact Us Button**:

- 텍스트: "Contact Us"
- 스타일: Border(#13161b) + Text(#13161b) + Chevron Icon
- 링크: `/contact`

**타이포그래피**:

- Menu Items: Pretendard Regular 16px, Gray(dark)/600, -0.08px tracking
- Button Text: Pretendard Regular 16px, Gray(dark)/900, -0.08px tracking

**스크린샷**: `docs/screenshots/01-main-page.png` (header 섹션)

---

### 1.2 Tagline Bar

**구조**: Hero 하단, 배경 이미지 오버레이

- 배경 이미지: Frame4 (전체 너비)
- 텍스트: 중앙 정렬

**콘텐츠**:

```
기업이 보유한 문서 기반 IP를, AI를 통해 다양한 기능과 서비스로 확장해드립니다.
```

**타이포그래피**:

- Pretendard SemiBold 18px
- Color: Gray(dark)/900
- Line height: 18px
- Letter spacing: -0.18px

**레이아웃**:

- Padding: 20px 676px
- 중앙 정렬

---

### 1.3 CTA 버튼 패턴

**Primary CTA (Dark)**:

- 배경: Gray(dark)/900 (#13161b)
- 텍스트: White
- Border: 1px solid #13161b
- Padding: 12px 16px (좌), 12px 10px (우)
- 아이콘: Chevron Right (24x24)

**Secondary CTA (Light)**:

- 배경: Gray/200 (#e5e8eb)
- 텍스트: Gray(dark)/900
- 아이콘: Chevron Right (24x24)

**Learn More Button**:

- Border: 1px solid #13161b
- 텍스트: Gray(dark)/900
- Padding: 12px 16px
- 아이콘: Chevron Right (24x24)

---

## 2. 메인 페이지 (/)

**Figma Node ID**: 155-765
**스크린샷**: `docs/screenshots/01-main-page.png`
**Figma URL**: https://www.figma.com/design/8GAEQXbYO6QPEdPKsR1i1D?node-id=155-765

### 2.1 Hero Section

**배경**: Gradient (top: #a8cce8, bottom: #f6f7f8), 1012px height

**Main Headline**:

```
We help your document IP get reused in ways
you couldn't even imagine before.
```

**타이포그래피**:

- Font: Stack Sans Headline Light 64px
- Color: Gray(dark)/600 (#61656c)
- "document IP" 부분: Gray/200 (#cecfd2) - 강조
- Line height: 78px
- Letter spacing: 0.64px
- Capitalize

**레이아웃**:

- Max width: 1520px
- Padding: 0 40px

---

### 2.2 기능 선택 탭 (Feature Tabs)

**구조**: 6개 아이콘 + 라벨, 수평 배열

**탭 목록**:

1. **독서 튜터** (활성 상태)
   - 아이콘: 68x68 Gray/100
   - 텍스트: Pretendard Bold 16px, Gray(dark)/900

2. **캐릭터 챗**
   - 아이콘: 68x68 Gray/100
   - 텍스트: Pretendard Bold 16px, Gray(dark)/400

3. **정밀 검수/교정**
   - 아이콘: 68x68 Gray/100
   - 텍스트: Pretendard Bold 16px, Gray(dark)/400

4. **상업성/독자 분석**
   - 아이콘: 68x68 Gray/100
   - 텍스트: Pretendard Bold 16px, Gray(dark)/400

5. **도서 메타데이터 관리**
   - 아이콘: 68x68 Gray/100
   - 텍스트: Pretendard Bold 16px, Gray(dark)/400

6. **AI 맞춤 추천**
   - 아이콘: 68x68 Gray/100
   - 텍스트: Pretendard Bold 16px, Gray(dark)/400

**레이아웃**:

- Max width: 1184px
- Gap: 균등 분배
- Vertical alignment: center

---

### 2.3 독서 튜터 소개 섹션

**구조**: 2-column layout (이미지 + 텍스트)

**이미지 영역** (좌측):

- Size: 728x528 aspect ratio
- Background: Gray/100
- Border radius: 6px

**텍스트 영역** (우측):

**제목**:

```
AI 독서 튜터는 책읽기 과정을
깊이 있는 학습 경험으로 만듭니다.
```

- Font: Pretendard Bold 24px
- Color: Gray(dark)/900
- Line height: 36px
- Letter spacing: -0.24px

**설명**:

```
AI 학습 튜터는 독자가 보고 있는 책을 함께 읽고, 챕터 구조와 맥락을 깊이 있게 파악한 뒤 질문에 답하는 지능형 학습 도우미입니다. 단순히 궁금한 부분을 찾아주는 것을 넘어, 핵심 요약 · 쉬운 개념 설명 · 예시와 비유 · 추가 배경 지식 · 이해도를 점검하는 질문까지 여러 학습 기능을 한 번에 제공할 수 있습니다.
```

- Font: Pretendard Regular 16px
- Color: Gray(dark)/600
- Line height: 25px
- Letter spacing: -0.08px

**강조 박스** (배경: Gray/50):

**제목**:

```
전공 서적, 수험서, 실무서, 인문 · 교양 도서처럼 읽기만으로는
온전히 이해하기 어려운 책일수록 AI 학습 튜터의 도움을 크게 받을 수 있습니다.
```

- Font: Pretendard Bold 16px
- Color: Gray(dark)/600

**본문**:

```
AI 학습 튜터와 함께라면 전자책을 읽는 독자는 독서를 단순한 열람이 아닌, 이해하고 활용하는
경험으로 바꿀 수 있습니다. 학생과 수험생은 이해가 어려운 개념을 쉽게 풀어 설명받고 막히는 문단을 바로 질문하며 흐름을 놓치지 않고 따라갈 수 있습니다. 직장인과 전문가는 복잡한 챕터를 요약해서 보거나 '우리 프로젝트에 적용하면?' 같은 응용 질문으로 책 내용을 실제 업무와 빠르게 연결하고 실질적인 인사이트와 액션으로까지 확장할 수 있습니다.
```

- Font: Pretendard Regular 16px
- Color: Gray(dark)/500

**CTA Link**:

```
독서 튜터 기능 더 알아보기 →
```

- Font: Pretendard Bold 16px
- Color: #3aa0ff

---

### 2.4 AI 전문가 시너지 CTA

**배경**: Gray/50 (#f7f8f9)

**제목**:

```
AI 전문가들이 모여 시너지를 일으킵니다.
```

- Font: Pretendard Bold 40px
- Color: Gray(dark)/900
- Line height: 40px
- Letter spacing: -0.4px

**부제**:

```
기획부터 구축·운영까지, 귀사의 상황에 맞는 AI 활용 전략을 함께 설계합니다.
```

- Font: Pretendard Regular 16px
- Color: Gray(dark)/600
- Line height: 16px
- Letter spacing: -0.16px

**CTA Button**:

```
AI 기능 도입 문의하기 →
```

- 배경: Gray(dark)/900
- 텍스트: White, Pretendard SemiBold 18px
- Height: 52px
- 아이콘: Chevron Right

**레이아웃**:

- Padding: 80px 200px
- 중앙 정렬
- Gap: 36px

---

### 2.5 Tech Features Headline

**영문 제목**:

```
Our team turns complex AI ideas into deployed systems for organizations across industries, from data infrastructure to customer-facing products.
```

- Font: Stack Sans Headline Light 64px
- Color: Gray(dark)/600 (#61656c)
- "complex AI ideas" 부분: Gray/200 (#cecfd2) - 강조
- Capitalize

**레이아웃**:

- Max width: 1520px
- Padding: 0 40px

---

### 2.6 Tech Feature Cards

**구조**: Horizontal scroll, 6개 카드

**카드 공통 스타일**:

- Width: 580px
- Background: Gray/50 (#f7f8f9)
- Border radius: 12px
- Gap: 28px

**Card 1: 문맥까지 이해하는 고정밀 텍스트 분석**

이미지: 386px height, Gray/50

제목:

```
문맥까지 이해하는 고정밀 텍스트 분석
```

- Pretendard Bold 24px, Gray(dark)/900

설명:

```
문장을 단어 단위로만 보는 것이 아니라, 문단 구조 · 앞뒤 문장 · 전체 흐름을 함께 읽어냅니다. 같은 단어라도 상황에 따라 의미가 달라지는 부분을 구분하고, 단순 오탈자뿐 아니라 어색한 표현, 논리적으로 매끄럽지 않은 문장까지 찾아냅니다. 교정, 요약, 검색, 질의응답 등 다른 엔진들의 기반 데이터로 활용할 수 있습니다.
```

- Pretendard Regular 16px, Gray(dark)/600

**Card 2: 시리즈 전체를 기억하는 장기 서사 메모리**

제목:

```
시리즈 전체를 기억하는 장기 서사 메모리
```

설명:

```
여러 권, 여러 회차에 걸친 인물 · 설정 · 사건 정보를 하나의 서사 흐름으로 함께 이해합니다.
질문이 들어오면 해당 장면만 보는 것이 아니라, 앞뒤 권의 관련 내용까지 함께 참조해
자연스러운 이유와 맥락을 설명합니다. 캐릭터 챗봇, 시리즈 IP 서비스 등에서 설정 충돌을 막고, 이야기가 끊기지 않는 대화를 구현할 수 있습니다.
```

**Card 3: 톤앤매너를 학습해 일관성을 유지하는 스타일 모듈**

제목:

```
톤앤매너를 학습해 일관성을 유지하는 스타일 모듈
```

설명:

```
도서 전반의 톤앤매너를 학습하여 작성자나 편집자가 바뀌어도 말투 · 표기 · 문장 구조가 흔들리지 않도록 합니다. 에디터, 마케팅 카피, 대화 스크립트 등 전 영역에서 동일한 브랜딩을 유지하는 기반이 됩니다.
```

**Card 4: 질문의 의도를 파악해 답을 찾아내는 추론 엔진**

제목:

```
질문의 의도를 파악해 답을 찾아내는 추론 엔진
```

설명:

```
정확한 용어나 문장 구조가 달라도, 비슷한 상황과 규정을 다루는 페이지를 우선적으로 찾아
사용자가 원하는 답에 더 정확하게 도달할 수 있도록 돕습니다. 이 엔진은 검색 결과, Q&A, 추천 기능의 공통 기반으로 작동하며, 도서 IP에 접근하는 전반적인 경험의 품질을 끌어올립니다.
```

**Card 5: 여러 도서를 한 번에 이해하는 통합 리딩**

제목:

```
여러 도서를 한 번에 이해하는 통합 리딩
```

설명:

```
여러 도서를 동시에 이해하는 멀티 도서 이해가 가능합니다. 서로 다른 파일·권·시즌에 흩어진
정보를 하나의 맥락으로 통합해 이해하며, 형식이 달라도 공통 개념과 관계를 기준으로 연결해
사용자는 한 번의 질문으로 전체 내용을 아우르는 답변을 받을 수 있습니다.
```

**Card 6: 보안 · 규정을 준수하는 안전 제어 모듈**

제목:

```
보안 · 규정을 준수하는 안전 제어 모듈
```

설명:

```
회사 규정, 보안 정책, 금지 표현을 규칙으로 걸어두고, AI가 만든 답변을 이 규칙에 한 번 더 대조해 이상한 부분을 걸러냅니다. 여기에 더해 AI 스스로도 위험하거나 부적절해 보이는 표현을 감지해 미리 수정 · 차단함으로써, 서비스에 올릴 수 있는 수준으로 답변을 정돈합니다.
```

---

### 2.7 Who Our Product Is For Headline

**영문 제목**:

```
Who our product is for
```

- Font: Stack Sans Headline Light 64px
- Color: Gray(dark)/600

---

### 2.8 Customer Cards (10개)

**구조**: Horizontal scroll, 각 300x400px

**카드 공통 스타일**:

- Background: White
- Border radius: 8px
- Padding: 20px
- Vertical layout (space-between)

**Card 1**:
제목:

```
AI 독서 플랫폼을 구축하고 싶은
출판사 및 유통사
```

- Pretendard Bold 20px, Gray(dark)/600

설명:

```
보유한 도서 IP를 활용해 기존 전자책 서비스를 AI 독서 플랫폼으로 확장할 수 있습니다. 단순한 PDF 형태의 도서를 AI가 학습해 독자에게는 새로운 읽기 경험을 제공하고, 운영 중인 플랫폼에는 다양한 AI 기능을 자연스럽게 접목할 수 있도록 함께 설계합니다.
```

- Pretendard Regular 16px, Gray(dark)/600

**Card 2**:
제목:

```
에듀테크 · 독서 교육 서비스
```

설명:

```
학생이 도서를 읽다가 막히는 부분을 바로
질문하고 도움을 받을 수 있는 AI 독서 튜터를 서비스 안에 포함할 수 있습니다.
문단과 앞뒤 맥락을 바탕으로 핵심을 정리하고 학생 눈높이에 맞춰 다시 설명해 주어, 교사가 없어도 혼자 읽기 어려웠던 책을 끝까지 따라가도록 돕습니다. 별도의 문제 풀이가 아니라 '질문과 이해'를 중심으로 한 독서 학습 경험을 제공할 수 있습니다.
```

**Card 3**:
제목:

```
스토리 IP를 확장하고 싶은
미디어 · 콘텐츠 기업
```

설명:

```
학습 튜터, 캐릭터 챗, 멀티미디어 콘텐츠 제작 등으로 텍스트를 자유롭게 확장할 수 있습니다. 텍스트 안에 갇혀 있던 IP를 여러 서비스와 상품에 다시 활용해, 종이책을 넘어서는 새로운 독서 경험과 수익 모델을 만들어 갈 수 있습니다.
```

**Card 4**:
제목:

```
교정, 교열 리소스가 부족한
출판사 · 제작사
```

설명:

```
AI가 본문 전체를 스캔해 오탈자, 띄어쓰기, 문장 부호, 어색한 표현 등을 이슈 목록으로 정리해 제공합니다.
편집자는 목록을 따라가며 한 번에 확인 · 수정할 수 있어, 마감 직전에 원고를 여러 번 읽어가며 오탈자를 찾는 수동 교정 작업을 줄이고 작품 전반의 품질을 안정적으로 유지할 수 있습니다.
```

**Card 5**:
제목:

```
원고 퀄리티를 빠르게 점검하고 싶은 출판사 · 편집부
```

설명:

```
완성된 원고를 업로드하면 AI가 상업성, 독창성, 예상 타깃 독자, 완성도 등을 종합적으로 분석해 줍니다. 강점과 보완이 필요한 부분을 한눈에 볼 수 있는 리포트로 정리해, 편집자가 본격적인 검토에 들어가기 전에 원고의 현재 상태를 객관적으로 파악할 수 있습니다.
```

**Card 6**:
제목:

```
여러 채널에 도서를 효율적으로
유통하고 싶은 출판사
```

설명:

```
한 번의 분석으로 각 유통 채널에 필요한 도서 정보, 소개 문구, 키워드, 카테고리 후보를 자동 생성하고, 채널별로 필요한 항목을 표 형태로 깔끔하게 정리해 줍니다.
정리된 결과는 엑셀 등으로 한 번에 추출해 채널별로 복사 · 수정해 쓸 수 있어, 운영팀은 흩어진 정보를 모으고 입력하는 반복 작업을 줄이고 기획 · 마케팅에 더 많은 시간을 쓸 수 있습니다.
```

**Card 7**:
제목:

```
전자자료실을 운영하는
기관 · 학교 · 공공도서관
```

설명:

```
전자책 · 논문 · 자료집이 쌓여 있는 디지털 자료실 위에 AI 독서/학습 튜터를 올려, 이용자가 자료를 읽으면서 이해가 안 되는 부분을 바로 질문할 수 있는 환경을 만들 수 있습니다.
단순 PDF 열람에서 벗어나, 핵심 요약 · 개념 설명 · 관련 자료 추천까지 함께 제공해 자료의 활용도를 높일 수 있습니다.
```

**Card 8**:
제목:

```
사내 교육 포털 · 온보딩 시스템을
운영하는 일반 기업
```

설명:

```
사내 규정, 업무 매뉴얼, 교육 교재를 기반으로 구성원이 실제 업무 상황에서 질문하면 문서에서 근거를 찾아 설명해 주는 AI 교육 도우미로 활용할 수 있습니다.
신입 온보딩 · 보안 교육처럼 반복되는 문의와 설명에 들던 시간을 줄이고, 교육 담당자는 대면 교육 · 콘텐츠 기획 · 고급 질문 설계 등에 자원을 집중할 수 있습니다.
```

**Card 9**:
제목:

```
리포트 · 매거진 구독 서비스를
운영하는 미디어 기업
```

설명:

```
산업 리포트, 투자 보고서, 인사이트 매거진 등 긴 문서를 AI가 함께 읽으며 구독자가 궁금한 내용을 질문으로 탐색할 수 있는 인터랙티브 리딩 경험을 제공합니다.
기사 · 리포트 기반 Q&A, 요약, 배경 설명 기능을 통해 같은 콘텐츠로 더 높은 체류 시간과 재구독률을 기대할 수 있습니다.
```

**Card 10**:
제목:

```
연구 · 정책 보고서 아카이브를
운영하는 공공 · 연구기관
```

설명:

```
AI가 수백·수천 건의 연구·정책 보고서를 의미 단위로 이해해 연구자와 정책 담당자가 키워드를 정확히 몰라도 질문만으로 관련 보고서를 찾을 수 있게 합니다.
이해하기 어려운 문단이나 전문 용어에 대해 질문을 던지면, 앞뒤 맥락을 함께 참고해 내용을 쉽게 풀어 설명해 주기 때문에 방대한 보고서를 실제 의사결정이나 토론에 활용하기가 훨씬 수월해집니다.
```

---

### 2.9 하단 CTA 섹션

**구조**: 2개 버튼, 수평 배열

**Button 1: Request Demo**

- 배경: Gray/900 (#191f28)
- 텍스트: "Request Demo"
- Font: Stack Sans Headline Light 48px, White
- 아이콘: Arrow Right (40x40)
- Size: 184px height

**Button 2: Libre OS**

- 배경: Gray/200 (#e5e8eb)
- 텍스트: "Libre OS"
- Font: Stack Sans Headline Light 48px, Gray(dark)/900
- 아이콘: Arrow Right (40x40)
- Size: 184px height

**레이아웃**:

- Gap: 24px
- Max width: 1520px

---

## 3. Orchestration System (/orchestration-system)

**Figma Node ID**: 167-980
**스크린샷**: `docs/screenshots/02-orchestration-system.png`
**Figma URL**: https://www.figma.com/design/8GAEQXbYO6QPEdPKsR1i1D?node-id=167-980

### 3.1 Hero Section

**영문 제목**:

```
Libre OS System
```

- Font: Hubot Sans Medium 96px
- Color: Gray(dark)/800 (#22262f)

**부제**:

```
The Cognitive Operating System
for IP Expansion & Agent Orchestration.
```

- Font: Stack Sans Headline Light 32px
- Color: Gray(dark)/800
- Capitalize

**Divider**: Gray/700 1px

---

### 3.2 소개 섹션

**제목**:

```
The OS Powering
Your Content Business
```

- Font: Stack Sans Headline Light 44px
- Color: Gray(dark)/800
- Capitalize

**설명**:

```
리브레 OS는 도서 · 문서 등 텍스트 IP를 하나의 공통 지식 레이어 묶어, 리브레 안의 모든 AI 에이전트와  서비스가 같은 기반 위에서 동작하도록 해주는 운영 체계입니다. 각 기능은 바뀌고 추가되더라도, 이 OS를 중심으로 일관된 품질과
경험을 유지하며 콘텐츠 비즈니스를 확장할 수 있습니다.
```

- Font: Pretendard Regular 18px
- Color: Gray(dark)/600
- Line height: 30px

---

### 3.3 OS 시각화 섹션

**이미지**: 616px height, Gray/100

---

### 3.4 Core Infrastructure

**제목**:

```
Core Infrastructure
of Libre OS
```

- Font: Stack Sans Headline Light 44px
- Color: Gray(dark)/800

**설명**:

```
리브레 OS는 도서 · 문서를 구조화해 공통 지식 레이어를 만드는 Structure, 맥락 · 정책 · 권한을 중앙에서 제어하는 Control, 안전한 출력과 로그 · 기록을 관리하는 Safty, 세 가지 모듈로 이루어져 있습니다.
이를 기반으로 모든 서비스는 같은 데이터와 규칙, 동일한 안전 기준을 공유하며 일관되게 동작합니다.
```

**Libre OS Box**:

- 배경: #e8f1fb
- 텍스트: "Libre OS"
- Font: Hubot Sans Medium 56px
- Padding: 48px
- 중앙 정렬

**3개 모듈 카드**:

**Card 1: Structure**

- 배경: Gray/100
- Height: 504px
- Padding: 48px 40px

영문 제목: `Structure`

- Font: Stack Sans Headline SemiBold 40px

영문 부제:

```
Structures text into
a shared knowledge layer
```

- Font: Pretendard Regular 26px
- Color: Gray(dark)/800

한글 요약:

```
텍스트를 공통 지식으로 구조화
```

- Font: Pretendard Regular 22px
- Color: Gray(dark)/700

**Card 2: Control**
영문 제목: `Control`

영문 부제:

```
Keeps context, policy,
and access under control
```

한글 요약:

```
맥락 · 정책 · 권한을 일관되게 제어
```

**Card 3: Safety**
영문 제목: `Safety`

영문 부제:

```
Enforces safe responses
and traceable logs
```

한글 요약:

```
안전한 응답과 로그 추적
```

---

### 3.5 기능 상세 목록 (8개)

**구조**: 각 항목 Icon + 제목 + 설명 + Learn More 버튼

**Item 1: Precise Text Understanding**

아이콘: Frame76 (32x32)

영문 제목:

```
Precise Text Understanding
```

- Font: Stack Sans Headline Regular 32px

한글 설명:

```
문단 구조와 맥락까지 반영해 오탈자 · 논리 오류 · 어색한 표현을
한 번에 잡아냅니다.
```

- Font: Pretendard SemiBold 20px
- Color: Gray(dark)/800

**Item 2: Narrative Memory**

영문 제목:

```
Narrative Memory
```

한글 설명:

```
여러 권, 여러 화에 흩어진 인물과 설정을 기억해, 시리즈 전체의
서사 일관성을 지켜줍니다.
```

**Item 3: Brand Tone Control**

영문 제목:

```
Brand Tone Control
```

한글 설명:

```
작성자가 달라도 브랜드가 정한 말투와 표기 스타일을 적용하여
동일한 목소리를 유지합니다.
```

**Item 4: Intent Reasoning**

영문 제목:

```
Intent Reasoning
```

한글 설명:

```
정확한 키워드가 없어도 질문의 의도를 파악해, 가장 관련도 높은 정보와 답을 찾아냅니다.
```

**Item 5: Multi-Doc Reading**

영문 제목:

```
Multi-Doc Reading
```

한글 설명:

```
여러 도서 · 문서를 함께 읽고, 한 번의 질문으로 전체를 아우르는 답을 제공할 수 있습니다.
```

**Item 6: Single-Doc Deep Reading**

영문 제목:

```
Single-Doc Deep Reading
```

한글 설명:

```
한 권의 도서만을 대상으로 삼아, 다른 자료와 섞이지 않은 순수한 맥락 안에서 깊이 있는 질문과 답변이 가능합니다.
```

**Item 7: Safety & Compliance**

영문 제목:

```
Safety & Compliance
```

한글 설명:

```
보안 정책 · 금지 표현 · 컴플라이언스 규칙을 적용하여 모든
응답을 안전하고 일관되게 통제합니다.
```

**Item 8: Structured Document Parsing**

영문 제목:

```
Structured Document Parsing
```

한글 설명:

```
제목, 각주, 박스, 표 등이 섞인 복잡한 구성의 도서도 구조적인
데이터로 변환하여 체계적으로 인식합니다.
```

---

### 3.6 Who Our Product Is For (10개 카드)

**구조**: 2-column grid, Gray/50 배경, Border Gray/100

**카드 공통 스타일**:

- Background: Gray/50
- Border: 1px Gray/100
- Height: 240px
- Padding: 24px 또는 20px

**Card 1**:
제목:

```
AI 독서 플랫폼을 구축하고 싶은
출판사 및 유통사
```

- Pretendard Bold 24px, Gray(dark)/600

설명:

```
보유한 도서 IP를 활용해 기존 전자책 서비스를 AI 독서 플랫폼으로 확장할 수 있습니다. 단순한 PDF 형태의 도서를 AI가 학습해 독자에게는 새로운 읽기 경험을 제공하고, 운영 중인 플랫폼에는 다양한 AI 기능을 자연스럽게 접목할 수 있도록 함께 설계합니다.
```

- Pretendard Regular 18px, Gray(dark)/600

_(나머지 9개 카드는 메인 페이지와 동일한 콘텐츠, 타이포그래피만 24px/18px로 확대)_

---

## 4. 리더 에이전트 (/reader-agent)

**Figma Node ID**: 191-69
**스크린샷**: `docs/screenshots/03-leader-agent.png`
**Figma URL**: https://www.figma.com/design/8GAEQXbYO6QPEdPKsR1i1D?node-id=191-69

### 4.1 Hero Section

**영문 제목**:

```
Reader Agent
```

- Font: Hubot Sans Medium 96px
- Color: Gray(dark)/800

**영문 부제**:

```
The Reader Agent that Turns Every Book
into an Interactive, Question-Driven Experience.
```

- Font: Stack Sans Headline Light 32px
- Color: Gray(dark)/800
- Capitalize

**Divider**: Gray/700 1px

---

### 4.2 소개 섹션

**제목**:

```
Making Reading
Interactive & Insightful
```

- Font: Stack Sans Headline Light 44px
- Color: Gray(dark)/800
- Capitalize

**설명**:

```
질문과 이해를 중심으로, 독서를 인터랙티브하고 인사이트 있게 만들어 주는 리더 에이전트입니다. 단순히 궁금한 부분을 찾아주는 것을 넘어, 핵심 요약 · 쉬운 개념 설명 · 예시와 비유 · 추가 배경 지식 · 이해도를 점검하는 질문까지 여러 학습 기능을 한 번에 제공할 수 있습니다.
```

- Font: Pretendard Regular 18px
- Color: Gray(dark)/600
- Line height: 30px

---

### 4.3 Feature Sections (4개)

**구조**: 각 섹션은 제목(좌측) + 이미지+설명(우측)

**Section 1: Interactive Reading**

**제목**:

```
Interactive Reading
```

- Font: Stack Sans Headline Light 44px
- Color: Gray(dark)/800
- Capitalize
- Max width: 440px

**이미지**: 826x465, Gray/50, Border Gray/200

**설명**:

```
리더 에이전트와 함께 읽을 때 독자는 이해되지 않는 부분을 그냥 넘기지 않고, 그 자리에서 바로 질문하며
독서를 이어갈 수 있습니다. 질문이 들어오면 에이전트는 해당 내용과 관련된 문단을 찾아 근거를 바탕으로
의미를 정리하고, 앞뒤 흐름 속에서 어떤 역할을 하는지까지 함께 짚어 줍니다. 독자는 필요한 만큼 추가
질문을 계속 이어가며 내용을 점점 더 깊게 파고들 수 있습니다.

그 결과 독서는 글을 눈으로만 따라가는 일방향적인 활동이 아니라, 스스로 궁금한 지점을 짚고 확인해 나가는 상호작용형 학습 과정으로 바뀝니다.
```

- Font: Pretendard Regular 18px
- Color: Gray(dark)/600
- Line height: 30px

**Section 2: Context-Aware Understanding**

**제목**:

```
Context-Aware
Understanding
```

**설명**:

```
리더 에이전트는 한 권의 책을 처음부터 끝까지 직접 읽고 이해한 상태에서 동작합니다. 단순히 하나의
키워드를 중심으로 검색하는 것이 아니라, 챕터 구조, 소제목, 앞뒤 문단의 흐름을 함께 고려해 지금 읽는
부분이 전체 서사와 논리 안에서 어떤 의미를 갖는지 파악합니다.

질문이 들어오면 해당 문장을 둘러싼 문단과, 그와 연결된 앞뒤 내용을 함께 묶어 저자가 말하고자 한 핵심과 개념의 쓰임새를 정리해 보여 줍니다. 덕분에 독자는 단편적인 검색 결과가 아니라, 책을 실제로 이해하고
있는 AI가 건네는 맥락 있는 답변을 얻을 수 있습니다.
```

**Section 3: Reader Experience Analytics**

**제목**:

```
Reader Experience
Analytics
```

**설명**:

```
리더 에이전트와의 대화 기록을 통해 사용자가 어떤 부분을 흥미로워하고, 어디에서 반복해서 막히는지 파악할 수 있습니다. 정리된 질문 데이터를 바탕으로 다음 콘텐츠를 기획하거나 서비스를 개선할 때, 독자가
어려워하는 지점을 보완하여 콘텐츠 완성도를 높이고, 책의 구성을 더욱 독자 친화적으로 다듬을 수 있습니다.
```

**Section 4: Actionable Insights**

**제목**:

```
Actionable Insights
```

**설명**:

```
리더 에이전트는 수업 · 시험 · 업무처럼 실무에서 바로 쓸 수 있는 도움을 줍니다. 전공서 · 수험서 · 실무서에 흩어져 있는 개념·공식·사례를 현재 진행 중인 과제나 프로젝트 맥락에 맞춰 다시 엮어 보여 주어, 독자가
'이 내용을 어디에, 어떻게 써야 하는지'를 구체적으로 떠올릴 수 있게 합니다. 그 결과 독서는 단순한 암기나 이해를 넘어, 현장에서 바로 가져다 쓸 수 있는 실질적인 인사이트를 얻는 과정으로 확장됩니다.
```

---

## 5. 캐릭터챗 에이전트 (/character-chat)

**Figma Node ID**: 193-1616
**스크린샷**: `docs/screenshots/04-characterchat-agent.png`
**Figma URL**: https://www.figma.com/design/8GAEQXbYO6QPEdPKsR1i1D?node-id=193-1616

### 5.1 Hero Section

**영문 제목**:

```
Charactor Chat
```

- Font: Hubot Sans Medium 96px
- Color: Gray(dark)/800

**영문 부제**:

```
Meet the Characters From the Stories You Love, in Live Conversation
```

- Font: Stack Sans Headline Light 32px
- Color: Gray(dark)/800
- Capitalize

---

### 5.2 소개 섹션

**제목**:

```
Turning Story IP
Into Living Characters
```

- Font: Stack Sans Headline Light 44px
- Color: Gray(dark)/800
- Capitalize

**설명**:

```
캐릭터 챗 에이전트는 소설 속 등장인물을 언제든 말을 걸 수 있는 살아 있는 캐릭터로 만들어 줍니다. 시리즈 전권에 걸친 설정과 사건을 기억하고 등장인물의 대사와 서사를 학습해, 오로지 소설 세계관 안에서만 대화가 이루어지도록 제어할 수 있어 독자가 작품 속에 더 깊이 몰입할 수 있게 합니다.
```

- Font: Pretendard Regular 18px
- Color: Gray(dark)/600

---

### 5.3 캐릭터 갤러리

**구조**: 3-column horizontal scroll

- 각 이미지: 1440x760 aspect ratio
- 배경: Gray/300 (#d1d6db)
- Border radius: 6px
- Gap: 24px

---

### 5.4 Feature Sections (5개)

**Section 1: Consistent Character Voice**

**제목**:

```
Consistent
Character Voice
```

**설명**:

```
캐릭터 챗 에이전트는 소설 속 등장인물을, 언제든 말을 걸 수 있는 살아 있는 캐릭터로 바꿔주는 기능입니다.
원고에 담긴 대사와 서술, 행동 묘사를 바탕으로 말투 · 어휘 · 태도를 학습하고, 시리즈 전권에 걸친 설정과
사건을 함께 기억합니다. 덕분에 한두 줄짜리 요약 설정이 아니라, 실제 작품을 이해하고 있는 캐릭터처럼
일관된 말투와 서사를 유지하며 대화를 이어갈 수 있습니다.
```

**Section 2: More Value from Existing IP**

**제목**:

```
More Value from Existing IP
```

**설명**:

```
캐릭터 챗을 통해 기존 텍스트 IP를 활용하면, 새로운 권수를 만들지 않고도 수익 모델을 확장할 수 있습니다. 독자가 책을 다 읽은 이후에도 해당 도서의 캐릭터와 대화를 계속 이어갈 수 있어 작품 유입률과 체류 시간을 늘리고, 완결 후에도 지속적으로 수익을 만들어 내는 구조를 만들 수 있습니다.
```

**Section 3: Character Chat Automation**

**제목**:

```
Character Chat Automation
```

**설명**:

```
기존에 가지고 있는 원고만으로 캐릭터를 바로 생성할 수 있습니다. 따로 설정을 일일이 기입하거나 수백 줄의 프롬프트를 짜지 않아도, 대사 · 서술 · 행동 묘사에서 자동으로 말투, 성격, 관계, 설정을 추출해 각 인물의 컨셉을 잡아주기 때문에, 프롬프트 설계와 튜닝에 들이던 시간과 인건비를 획기적으로 줄일 수 있습니다.

수십 · 수백 개 IP를 운영하는 출판사나 플랫폼일수록 [원고 업로드 → 자동 컨셉 추출 → 캐릭터 챗 생성]
까지의 과정을 반복 가능한 파이프로 만들 수 있다는 게 가장 큰 장점입니다.
```

**Section 4: Character Consistency**

**제목**:

```
Character Consistency
```

**설명**:

```
한 권의 책에서 여러 캐릭터의 페르소나를 추출해 각각의 캐릭터 챗을 생성할 수 있습니다. 또한 여러 캐릭터를 동시에 운영하더라도 각 인물은 고유한 성격과 세계관 규칙 안에서만 반응하도록 제어할 수 있어, 팬
입장에서는 서로 다른 인물과 각자 대화를 나누는 느낌으로 작품 속에 더 깊이 몰입할 수 있습니다
```

**Section 5: Reader Marketing Insights**

**제목**:

```
Reader Marketing Insights
```

**설명**:

```
캐릭터 챗 대화 로그를 통해 독자가 반복해서 언급하는 장면, 대사, 관계와 선호 캐릭터를 자동으로 수집 · 정리합니다. 따로 설문을 돌리거나 커뮤니티 · SNS 반응을 수작업으로 모니터링하지 않아도, 짧은 시간 안에 독자가 어디에 반응하는지, 무엇을 더 보고 싶어 하는지를 한눈에 파악할 수 있습니다.
이 데이터를 바탕으로 외전 · 굿즈 · 이벤트 · 마케팅 카피 · 후속 IP의 우선 순위를 정해, 리서치에 쓰이던 시간과 인건비는 줄이고 기획 성공 가능성은 더 높일 수 있습니다.
```

---

## 6. 프루프 리딩 에이전트 (/proofreading)

**Figma Node ID**: 204-369
**스크린샷**: `docs/screenshots/05-proofreading-agent.png`
**Figma URL**: https://www.figma.com/design/8GAEQXbYO6QPEdPKsR1i1D?node-id=204-369

### 6.1 Hero Section

**영문 제목**:

```
AI Publishing Workflow
```

- Font: Hubot Sans Medium 96px
- Color: Gray(dark)/800

---

### 6.2 소개 섹션

**제목**:

```
AI assistant for
authors & publishers
```

- Font: Stack Sans Headline Light 44px
- Color: Gray(dark)/800
- Capitalize

**설명**:

```
작가와 출판사를 위한 AI 워크스페이스입니다. 원고의 상업성 분석, 서점 유통용 메타데이터 생성, 오탈자 검수까지 한 권의 책이 독자에게 닿기까지의 핵심 업무를 한곳에서 다룰 수 있습니다. 개인 작가부터 출판사 팀까지, 반복적인 출판 업무에 들이던 시간과 인력을 줄이고 콘텐츠에 더 집중할 수 있게 돕습니다.
```

---

### 6.3 워크플로우 카드 (6개)

**구조**: 2-column grid

**카드 공통 스타일**:

- 이미지: 704x368 aspect ratio, Gray/200
- Gap: 32px between image and text
- Total height: 512-515px

**Card 1: 상업성 · 타깃 독자 분석**

**제목**:

```
상업성 · 타깃 독자 분석
```

- Pretendard Bold 24px, Gray(dark)/900

**설명**:

```
원고의 분위기와 장르를 바탕으로, 어떤 독자층에 적합한 콘텐츠인지 분석하는 기능입니다. AI가 분량, 장르, 문장
스타일 등을 종합해 예상 독자 프로파일과 상업적 가능성을 추정하고, 기획서 작성이나 출간 여부를 검토할 때
참고할 수 있는 기준을 제공합니다.
```

- Pretendard Regular 16px, Gray(dark)/600

**Card 2: 스토리 · 캐릭터 구조 분석**

**제목**:

```
스토리 · 캐릭터 구조 분석
```

**설명**:

```
이야기의 흐름과 주요 인물 구성을 한눈에 볼 수 있게 정리해 주는 기능입니다. AI가 전개 순서, 주요 장면, 자주
등장하는 인물과 역할을 요약해 보여줘서, 장편 원고의 전체 구조를 빠르게 파악하고 어느 부분을 다듬을지 참고할 수 있습니다.
```

**Card 3: 서점 등록용 기본 정보 정리**

**제목**:

```
서점 등록용 기본 정보 정리
```

**설명**:

```
서점 등록에 필요한 기본 정보를 한 번에 정리해 주는 기능입니다. 제목, 부제, 시리즈명, 쪽수, 발행 정보 등 원고와 메모에 흩어진 항목을 모아 교보·YES24·알라딘 등록에 쓸 수 있는 기본 메타데이터 형태로 정리해 둡니다.
```

**Card 4: 소개문 · 키워드 · 카테고리 생성**

**제목**:

```
소개문 · 키워드 · 카테고리 생성
```

**설명**:

```
책을 설명하는 문장과 검색에 필요한 정보를 함께 만들어주는 기능입니다. AI가 원고를 읽고 책 소개, 저자 소개, 간단한 서평, 키워드·카테고리 후보를 제안하고, 이를 다듬어 서점 상세 페이지나 홍보 문구로 바로 활용할 수 있습니다.
```

**Card 5: 오탈자 · 맞춤법 검출**

**제목**:

```
오탈자 · 맞춤법 검출
```

**설명**:

```
기본적인 오탈자와 맞춤법 오류를 먼저 걸러주는 기능입니다. PDF 원고를 분석해 철자, 띄어쓰기, 단순 오타를 표시하고 어느 페이지·문장에 있는지 함께 보여 주어 1차 교정 단계에서 실수를 줄여 줍니다.
```

**Card 6: 문장 자연스러움 · 일관성 점검**

**제목**:

```
문장 자연스러움 · 일관성 점검
```

**설명**:

```
읽기 어색한 표현과 앞뒤가 달라진 부분을 찾아주는 기능입니다. AI가 너무 긴 문장, 반복되는 표현, 이름 · 호칭 ·
설정이 바뀌어 쓰여진 부분을 표시해 주어 전체 톤과 정보가 일정하게 유지되도록 다듬을 때 참고할 수 있습니다.
```

---

### 6.4 워크플로우 갤러리

**구조**: 3-column horizontal scroll

- 각 이미지: 1440x760 aspect ratio
- 배경: Gray/300
- Border radius: 6px

---

### 6.5 Philosophy Section

**설명 텍스트** (24px):

```
출판에는 아직도 너무 많은 시간이 들어갑니다. 원고를 여러 번 읽고, 분석 노트를 정리하고, 서점 메타데이터를 채우고, 마지막까지 오탈자를 다시 확인하는 데 대부분의 시간이 쓰입니다.
AI Publishing Agent는 이 반복적인 업무에 쓰이는 시간을 줄이기 위해 만든 작업 파트너입니다. 원고를 처음부터 끝까지 읽고, 상업성 · 구조 · 오탈자 · 메타데이터를 한 번에 뽑아 흩어져 있던 편집 · 교정 · 유통 준비를 하나의 과정으로 이어 줍니다. AI가 작가와 편집자의 판단을 대신하진 않습니다. 다만 필요한 정보를 정리해 보여 줌으로써 더 빠르게 파악하고, 더 정확하게 결정할 수 있도록 돕습니다.
```

- Font: Pretendard Regular 24px
- Color: Gray(dark)/900
- Line height: 36px
- Max width: 1280px

---

### 6.6 Core Capabilities (6개 카드)

**구조**: 2-column grid

**카드 공통 스타일**:

- Background: Gray/50
- Padding: 20px 24px 24px
- Gap: 16px

**Card 1: 언어와 문장 교정**

**제목**:

```
언어와 문장 교정
```

- Pretendard Bold 24px, Gray(dark)/600

**항목 1**:

```
• 최신 맞춤법 · 띄어쓰기 규칙으로 기본 오탈자 자동 탐지 및 수정
```

**항목 2**:

```
• 문장 성분 호응이 어긋난 비문, 번역투 같은 어색한 문장을 자연스러운 한국어로 재작성
```

**Card 2: 용어 및 설정의 일관성 관리**

**제목**:

```
용어 및 설정의 일관성 관리
```

**항목 1**:

```
• 용어 사용 패턴 분석으로 처음부터 끝까지 표기 및 설정 일관성 검증
```

**항목 2**:

```
• 작업자가 바뀌어도 시리즈 전체의 용어 및 설정이 동일하게 유지되도록 품질 균일화
```

**Card 3: 출판사 스타일 가이드 반영**

**제목**:

```
출판사 스타일 가이드 반영
```

**항목 1**:

```
• 출판사 고유 표기법 · 문체 · 금칙어를 스타일 가이드로 등록 및 적용 가능
```

**항목 2**:

```
• 출판사별 톤앤매너와 브랜딩 일관성 유지
```

**Card 4: 업무 속도 및 처리량 향상에 도움**

**제목**:

```
업무 속도 및 처리량 향상에 도움
```

**항목 1**:

```
• 장편 소설 · 매뉴얼도 업로드 후 짧은 시간 안에 1차 결과 제공
```

**항목 2**:

```
• 마감 시즌에도 여러 권을 동시에 처리해 일정 지연 최소화
```

**Card 5: 비용 및 리스크 절감**

**제목**:

```
비용 및 리스크 절감
```

**항목 1**:

```
• 외주 교정 의존도 축소로 추가 비용 절감
```

**항목 2**:

```
• 수작업에서 놓치기 쉬운 단순 오타 · 누락까지 잡아내어 교정 품질 유지
```

**Card 6: 보안 및 내부 통제**

**제목**:

```
보안 및 내부 통제
```

**항목 1**:

```
• 모든 교정 작업을 암호화된 내부 시스템에서 처리되어 보안 · 저작권 리스크 축소
```

**항목 2**:

```
• 미출간 원고를 외부 프리랜서에게 메일로 보내지 않아도 되어, 출간 전 보안 관리에 유리
```

---

## 7. 문의 폼 (/contact)

**Figma Node ID**: 209-41
**스크린샷**: `docs/screenshots/06-contact-form.png`
**Figma URL**: https://www.figma.com/design/8GAEQXbYO6QPEdPKsR1i1D?node-id=209-41

### 7.1 Page Layout

**구조**: 2-column (소개 + 폼)

---

### 7.2 소개 영역 (좌측)

**제목**:

```
Contact
```

- Font: Hubot Sans Medium 96px
- Color: Gray(dark)/800

**설명**:

```
귀사가 보유한 문서와 업무 데이터를 기반으로, 서비스와 조직에 맞는 맞춤형 AI 기능을 설계해 드립니다.
전자도서관, 사내 지식베이스, 콘텐츠 플랫폼 등 다양한 환경에서 검색, 요약, Q&A, 추천 등 필요한 기능만 골라 단계적으로 도입하실 수 있습니다.
양식에 맞춰 문의 사항을 제출해 주시면, 담당자가 도입 범위와 일정, 방향을 함께 제안 드리겠습니다.
```

- Font: Pretendard Regular 18px
- Color: Gray(dark)/600
- Line height: 30px

**레이아웃**:

- Max width: 560px
- Padding: 0 24px

---

### 7.3 폼 영역 (우측)

**배경**: Gray/50 (#f9fafb)
**Max width**: 840px
**Padding**: 48px
**Border radius**: 4px
**Gap**: 64px (섹션 간)

---

### 7.4 기본 정보 섹션

**필드 레이아웃**: 2-column grid, Gap 24px

**Field 1: 회사명** (필수)

- 라벨: "회사명 \*"
  - Font: Pretendard SemiBold 18px
  - Color: Gray(dark)/900
  - '\*' Color: #3aa0ff
- 입력 필드:
  - Placeholder: "회사명을 입력해 주세요."
  - Background: White
  - Border: 1px Gray/300
  - Border radius: 6px
  - Height: 52px
  - Padding: 16px 12px

**Field 2: 업종** (필수)

- 라벨: "업종 \*"
- Placeholder: "업종을 선택해 주세요."
- Type: Dropdown/Select

**Field 3: 이름** (필수)

- 라벨: "이름 \*"
- Placeholder: "이름을 입력해 주세요."

**Field 4: 직책** (필수)

- 라벨: "직책 \*"
- Placeholder: "직책을 입력해 주세요."

**Field 5: 이메일** (필수)

- 라벨: "이메일 \*"
- Placeholder: "이메일을 입력해 주세요."

**Field 6: 휴대전화 번호** (필수)

- 라벨: "휴대전화 번호 \*"
- Placeholder: "숫자만 입력해 주세요."

---

### 7.5 도입 희망 에이전트 섹션

**라벨**:

```
도입 희망 에이전트 *
```

- Font: Pretendard SemiBold 18px
- Color: Gray(dark)/900

**설명**:

```
도입을 희망하는 AI 기능을 모두 선택해 주세요. (복수선택 가능)
```

- Font: Pretendard Regular 16px
- Color: Gray(dark)/500

**체크박스 레이아웃**: 3-column grid

**옵션 목록**:

**Column 1**:

1. **AI 독서 어시스턴트**
   - 부제: "도서 기반 질의응답"
   - Color: #7093c8

2. **AI 도서 분석**
   - 부제: "상업성 및 독자 분석"

3. **기타 / 통합 도입 문의**

**Column 2**: 4. **AI 캐릭터 챗**

- 부제: "도서 기반 캐릭터 생성"

5. **AI 유통 메타데이터 생성**

**Column 3**: 6. **AI 교정 어시스턴트**

- 부제: "오타 검수 및 문장 다듬기"

7. **AI 추천 도서**

**체크박스 스타일**:

- Size: 18x18
- Border: 1px Gray/300
- Border radius: 4px
- Background: White (unchecked)

**라벨 스타일**:

- 주 텍스트: Pretendard Regular 16px, Gray(dark)/800
- 부제: Pretendard Regular 14px, #7093c8

---

### 7.6 문의 내용 필드

**라벨**:

```
문의 내용 *
```

**Textarea**:

- Placeholder: "문의 내용을 입력해 주세요."
- Height: 240px
- Background: White
- Border: 1px Gray/300
- Border radius: 6px
- Padding: 16px 12px

---

### 7.7 개인정보 동의 섹션

**제목**:

```
개인 정보 수집 및 이용에 대한 안내
```

- Font: Pretendard SemiBold 18px
- Color: Gray(dark)/900

**안내 문구**:

```
개인정보 수집 및 이용에 관해 안내 드립니다.
```

- Font: Pretendard Regular 16px
- Color: Gray(dark)/800

**전문 보기 링크**:

```
전문 보기
```

- Font: Pretendard Medium 16px
- Color: #3aa0ff

**체크박스 1**:

```
(필수)개인정보 제3자 제공에 동의합니다.
```

**Divider**: Gray/400, 1px, width 720px

---

### 7.8 Submit 버튼

**텍스트**: "Submit"
**배경**: Gray/900 (#191f28)
**텍스트 색상**: White
**Font**: Pretendard SemiBold 16px
**크기**: 160px width, 48px height
**Border**: 1px Gray(dark)/900
**Padding**: 12px 16px

---

## 8. 참조 문서

### 8.1 디자인 시스템

- **문서**: `/docs/design-system.md`
- **설명**: 색상 팔레트, 타이포그래피, 간격 시스템, 컴포넌트 스타일 가이드

### 8.2 PRD (Product Requirements Document)

- **문서**: `/docs/PRD.md`
- **설명**: 기능 요구사항, 사용자 시나리오, 기술 스펙

### 8.3 프로젝트 구조

- **문서**: `/docs/guides/project-structure.md`
- **설명**: Next.js App Router 구조, 파일 조직

### 8.4 스크린샷

- **위치**: `/docs/screenshots/`
- **파일 목록**:
  - `01-main-page.png` - 메인 페이지
  - `02-orchestration-system.png` - Orchestration System
  - `03-leader-agent.png` - 리더 에이전트
  - `04-characterchat-agent.png` - 캐릭터챗 에이전트
  - `05-proofreading-agent.png` - 프루프 리딩 에이전트
  - `06-contact-form.png` - 문의 폼

### 8.5 Figma 디자인

- **File Key**: `8GAEQXbYO6QPEdPKsR1i1D`
- **Base URL**: `https://www.figma.com/design/8GAEQXbYO6QPEdPKsR1i1D`
- **페이지별 Node ID**:
  - 메인: `155-765`
  - OS: `167-980`
  - 리더: `191-69`
  - 캐릭터챗: `193-1616`
  - 프루프리딩: `204-369`
  - 문의: `209-41`

---

## 9. 구현 가이드

### 9.1 컴포넌트 매핑

**공통 컴포넌트**:

- `Header` - 헤더 (로고 + 네비게이션 + CTA)
- `TaglineBar` - 태그라인 바
- `HeroSection` - 히어로 섹션
- `FeatureCard` - 기능 카드
- `CustomerCard` - 고객 카드
- `CTAButton` - CTA 버튼 (Primary/Secondary)
- `SectionDivider` - 섹션 구분선

**페이지별 컴포넌트**:

- 메인: `FeatureTabs`, `TechCards`, `CustomerScroll`
- OS: `InfrastructureCards`, `FeatureList`
- 리더/캐릭터챗: `FeatureSplit` (이미지 + 텍스트)
- 프루프리딩: `WorkflowCards`, `CapabilityCards`
- 문의: `ContactForm`, `FormField`, `Checkbox`

### 9.2 타이포그래피 클래스

```css
/* Headings */
.heading-hero: Hubot Sans Medium 96px
.heading-section: Stack Sans Headline Light 44-64px
.heading-card: Pretendard Bold 20-24px

/* Body */
.body-lg: Pretendard Regular 18px, 30px line-height
.body-md: Pretendard Regular 16px, 25px line-height
.body-sm: Pretendard Regular 14px

/* Labels */
.label-bold: Pretendard Bold 16px
.label-semibold: Pretendard SemiBold 18px
```

### 9.3 색상 토큰 사용

```css
/* 텍스트 */
--text-primary: Gray(dark) / 900 (#13161b) --text-secondary: Gray(dark) / 600
  (#61656c) --text-tertiary: Gray(dark) / 500 (#85888e)
  --text-placeholder: Gray(dark) / 500 (#85888e) --text-accent: #3aa0ff
  /* 배경 */ --bg-primary: White (#ffffff) --bg-secondary: Gray/50 (#f9fafb)
  --bg-tertiary: Gray/100 (#f2f4f6) --bg-dark: Gray/900 (#191f28) /* Border */
  --border-light: Gray/200 (#e5e8eb) --border-default: Gray/300 (#d1d6db)
  --border-dark: Gray(dark) / 900 (#13161b);
```

### 9.4 레이아웃 가이드

**Container Widths**:

- Max content: 1520px
- Form max: 840px
- Text max: 1280px (philosophy)
- Column max: 704px (2-col grid)

**Spacing Scale**:

- Section gap: 80px
- Card gap: 24-32px
- Content gap: 16-24px
- Field gap: 12px

**Responsive Breakpoints**:

```css
/* Mobile: < 768px */
/* Tablet: 768px - 1024px */
/* Desktop: > 1024px */
```

---

**문서 끝**
