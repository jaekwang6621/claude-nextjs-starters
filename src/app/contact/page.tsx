import type { Metadata } from 'next'
import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'
import { Container } from '@/components/layout/container'
import { InquiryForm } from '@/components/inquiry-form'

export const metadata: Metadata = {
  title: '문의하기 - B2B AI Agent Platform',
  description:
    'B2B AI Agent Platform에 대해 문의하시면 빠른 시일 내에 담당자가 연락드리겠습니다',
}

export default function ContactPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <Container>
          <div className="py-12">
            <div className="mx-auto max-w-2xl">
              <div className="mb-12 text-center">
                <h1 className="text-5xl font-bold">문의하기</h1>
                <p className="text-muted-foreground mt-6 text-xl">
                  B2B AI Agent Platform에 대해 궁금하신 점을 문의해주세요
                </p>
              </div>

              {/* Inquiry Form */}
              <div className="bg-muted/50 rounded-lg p-8">
                <InquiryForm />
              </div>
            </div>
          </div>
        </Container>
      </main>
      <Footer />
    </div>
  )
}
