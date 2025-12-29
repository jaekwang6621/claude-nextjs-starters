import type { Metadata } from 'next'
import Link from 'next/link'
import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'
import { Container } from '@/components/layout/container'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

export const metadata: Metadata = {
  title: '홈 - B2B AI Agent Platform',
  description:
    'AI 에이전트 오케스트레이션 시스템과 전문 에이전트를 통해 비즈니스 프로세스를 자동화하세요',
}

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="from-muted/50 to-background border-b bg-gradient-to-b py-20">
          <Container>
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="text-5xl font-bold tracking-tight sm:text-6xl">
                B2B AI Agent Platform
              </h1>
              <p className="text-muted-foreground mt-6 text-lg leading-8 sm:text-xl">
                AI 에이전트 오케스트레이션 시스템과 전문 에이전트를 통해
                <br />
                비즈니스 프로세스를 자동화하세요
              </p>
              <div className="mt-10 flex items-center justify-center gap-4">
                <Link href="/contact">
                  <Button size="lg">문의하기</Button>
                </Link>
                <Link href="/orchestration">
                  <Button size="lg" variant="outline">
                    시스템 소개
                  </Button>
                </Link>
              </div>
            </div>
          </Container>
        </section>

        {/* Orchestration System Card */}
        <section className="border-b py-16">
          <Container>
            <div className="mx-auto max-w-4xl">
              <Link href="/orchestration">
                <Card className="transition-shadow hover:shadow-lg">
                  <CardHeader>
                    <CardTitle className="text-3xl">
                      Orchestration System
                    </CardTitle>
                    <CardDescription className="text-base">
                      여러 AI 에이전트를 조율하는 오케스트레이션 시스템
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      복잡한 비즈니스 프로세스를 효율적으로 관리하고 여러 전문
                      에이전트를 조율하여 최적의 결과를 도출합니다.
                      <br />
                      <span className="text-primary mt-2 inline-block">
                        자세히 보기 →
                      </span>
                    </p>
                  </CardContent>
                </Card>
              </Link>
            </div>
          </Container>
        </section>

        {/* Agent Cards Grid */}
        <section className="py-16">
          <Container>
            <div className="mx-auto max-w-5xl">
              <div className="mb-12 text-center">
                <h2 className="text-4xl font-bold">전문 AI 에이전트</h2>
                <p className="text-muted-foreground mt-4 text-lg">
                  각 분야에 특화된 3가지 전문 에이전트를 만나보세요
                </p>
              </div>

              <div className="grid gap-6 md:grid-cols-3">
                {/* Leader Agent Card */}
                <Link href="/leader-agent">
                  <Card className="h-full transition-shadow hover:shadow-lg">
                    <CardHeader>
                      <CardTitle className="text-2xl">리더 에이전트</CardTitle>
                      <CardDescription>팀 리더십 및 관리</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground text-sm">
                        팀 관리와 리더십 역할을 수행하는 전문 에이전트입니다.
                      </p>
                      <span className="text-primary mt-4 inline-block text-sm">
                        자세히 보기 →
                      </span>
                    </CardContent>
                  </Card>
                </Link>

                {/* CharacterChat Agent Card */}
                <Link href="/characterchat-agent">
                  <Card className="h-full transition-shadow hover:shadow-lg">
                    <CardHeader>
                      <CardTitle className="text-2xl">
                        캐릭터챗 에이전트
                      </CardTitle>
                      <CardDescription>대화형 인터랙션</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground text-sm">
                        자연스러운 대화와 상호작용을 제공하는 전문
                        에이전트입니다.
                      </p>
                      <span className="text-primary mt-4 inline-block text-sm">
                        자세히 보기 →
                      </span>
                    </CardContent>
                  </Card>
                </Link>

                {/* Proofreading Agent Card */}
                <Link href="/proofreading-agent">
                  <Card className="h-full transition-shadow hover:shadow-lg">
                    <CardHeader>
                      <CardTitle className="text-2xl">
                        프루프 리딩 에이전트
                      </CardTitle>
                      <CardDescription>문서 검토 및 교정</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground text-sm">
                        문서 검토와 교정 작업을 수행하는 전문 에이전트입니다.
                      </p>
                      <span className="text-primary mt-4 inline-block text-sm">
                        자세히 보기 →
                      </span>
                    </CardContent>
                  </Card>
                </Link>
              </div>
            </div>
          </Container>
        </section>

        {/* CTA Section */}
        <section className="bg-muted/50 py-16">
          <Container>
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-3xl font-bold">지금 바로 시작하세요</h2>
              <p className="text-muted-foreground mt-4 text-lg">
                B2B AI Agent Platform을 통해 비즈니스 프로세스를 자동화하고
                효율성을 높이세요
              </p>
              <div className="mt-8">
                <Link href="/contact">
                  <Button size="lg">무료 상담 신청</Button>
                </Link>
              </div>
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </div>
  )
}
