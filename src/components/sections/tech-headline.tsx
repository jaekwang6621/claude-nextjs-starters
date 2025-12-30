import { cn } from '@/lib/utils'
import * as React from 'react'

// 컴포넌트 Props 인터페이스
export interface TechHeadlineProps extends React.ComponentProps<'section'> {
  children: React.ReactNode
}

// 기술 기능 헤드라인 컴포넌트
export function TechHeadline({
  children,
  className,
  ...props
}: TechHeadlineProps) {
  return (
    <section className={cn('py-20', className)} {...props}>
      <div className="mx-auto max-w-[1520px] px-10 text-center">
        <h2 className="font-stack-sans-headline text-gray-dark-600 text-[64px] leading-[78px] font-light tracking-[0.64px]">
          {children}
        </h2>
      </div>
    </section>
  )
}

// 텍스트 강조 컴포넌트
export function TechHeadlineHighlight({
  children,
}: {
  children: React.ReactNode
}) {
  return <span className="text-gray-200">{children}</span>
}
