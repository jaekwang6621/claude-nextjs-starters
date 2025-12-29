import type { Metadata } from 'next'
import Link from 'next/link'
import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'
import { Container } from '@/components/layout/container'
import { Button } from '@/components/ui/button'

export const metadata: Metadata = {
  title: 'Orchestration System - B2B AI Agent Platform',
  description:
    '여러 AI 에이전트를 조율하는 오케스트레이션 시스템의 작동 원리 및 핵심 가치를 소개합니다',
}

export default function OrchestrationPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <Container>
          <div className="py-12">
            {/* Hero Section */}
            <div className="mb-16 text-center">
              <h1 className="text-5xl font-bold">Orchestration System</h1>
              <p className="text-muted-foreground mx-auto mt-6 max-w-2xl text-xl">
                여러 AI 에이전트를 조율하는 오케스트레이션 시스템
              </p>
            </div>

            {/* Content Placeholder */}
            <div className="prose prose-lg dark:prose-invert mx-auto max-w-4xl">
              <section className="mb-12">
                <h2 className="text-3xl font-bold">시스템 개요</h2>
                <p className="text-muted-foreground mt-4 text-lg">
                  복잡한 비즈니스 프로세스를 효율적으로 관리하고 여러 전문
                  에이전트를 조율하여 최적의 결과를 도출하는 오케스트레이션
                  시스템입니다.
                </p>
                <p className="text-muted-foreground mt-4">
                  피그마 디자인을 참조하여 구현 예정
                </p>
              </section>

              <section className="mb-12">
                <h2 className="text-3xl font-bold">작동 원리</h2>
                <p className="text-muted-foreground mt-4">
                  시스템 아키텍처 및 플로우차트 - 피그마 디자인 참조 예정
                </p>
              </section>

              <section className="mb-12">
                <h2 className="text-3xl font-bold">주요 기능</h2>
                <ul className="text-muted-foreground mt-4 space-y-2">
                  <li>에이전트 조율 및 작업 분배</li>
                  <li>성능 모니터링 및 최적화</li>
                  <li>실시간 프로세스 관리</li>
                </ul>
              </section>

              <section className="mb-12">
                <h2 className="text-3xl font-bold">활용 사례</h2>
                <p className="text-muted-foreground mt-4">
                  실제 비즈니스 시나리오 - 피그마 디자인 참조 예정
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
