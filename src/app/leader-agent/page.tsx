import type { Metadata } from 'next'
import Link from 'next/link'
import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'
import { Container } from '@/components/layout/container'
import { Button } from '@/components/ui/button'

export const metadata: Metadata = {
  title: '리더 에이전트 - B2B AI Agent Platform',
  description:
    '팀 관리와 리더십 역할을 수행하는 리더 에이전트의 기능과 활용 사례를 소개합니다',
}

export default function LeaderAgentPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <Container>
          <div className="py-12">
            {/* Hero Section */}
            <div className="mb-16 text-center">
              <h1 className="text-5xl font-bold">리더 에이전트</h1>
              <p className="text-muted-foreground mx-auto mt-6 max-w-2xl text-xl">
                팀 리더십 및 관리를 담당하는 전문 AI 에이전트
              </p>
            </div>

            {/* Content Placeholder */}
            <div className="prose prose-lg dark:prose-invert mx-auto max-w-4xl">
              <section className="mb-12">
                <h2 className="text-3xl font-bold">에이전트 개요</h2>
                <p className="text-muted-foreground mt-4 text-lg">
                  팀 관리와 리더십 역할을 수행하는 전문 에이전트입니다.
                </p>
                <p className="text-muted-foreground mt-4">
                  피그마 디자인을 참조하여 구현 예정
                </p>
              </section>

              <section className="mb-12">
                <h2 className="text-3xl font-bold">주요 기능</h2>
                <p className="text-muted-foreground mt-4">
                  구체적인 기능 리스트 - 피그마 디자인 참조 예정
                </p>
              </section>

              <section className="mb-12">
                <h2 className="text-3xl font-bold">활용 사례</h2>
                <p className="text-muted-foreground mt-4">
                  실제 비즈니스 시나리오 2-3개 - 피그마 디자인 참조 예정
                </p>
              </section>

              <section className="mb-12">
                <h2 className="text-3xl font-bold">도입 효과</h2>
                <p className="text-muted-foreground mt-4">
                  성과 지표 또는 ROI - 피그마 디자인 참조 예정
                </p>
              </section>
            </div>

            {/* CTA */}
            <div className="mt-16 text-center">
              <Link href="/contact">
                <Button size="lg">문의하기</Button>
              </Link>
            </div>
          </div>
        </Container>
      </main>
      <Footer />
    </div>
  )
}
