'use client'

import * as React from 'react'
import { ArrowRight } from 'lucide-react'
import { cn } from '@/lib/utils'

// CTA 버튼 카드 인터페이스
interface CTACard {
  id: string
  label: string
  href?: string
  variant: 'dark' | 'light'
}

// 컴포넌트 Props 인터페이스
export interface BottomCTACardsProps extends React.ComponentProps<'section'> {
  cards: CTACard[]
}

// 하단 CTA 카드 섹션 컴포넌트
export function BottomCTACards({
  cards,
  className,
  ...props
}: BottomCTACardsProps) {
  return (
    <section className={cn('py-20', className)} {...props}>
      <div className="mx-auto flex max-w-[1520px] gap-6 px-10">
        {cards.map(card => (
          <button
            key={card.id}
            onClick={() => {
              /* TODO: 클릭 이벤트 구현 필요 */
            }}
            className={cn(
              'flex h-[184px] flex-1 items-center justify-between rounded-lg p-8 transition-opacity hover:opacity-90',
              card.variant === 'dark'
                ? 'bg-gray-900 text-white'
                : 'text-gray-dark-900 bg-gray-200'
            )}
          >
            <span className="font-stack-sans-headline text-5xl font-light">
              {card.label}
            </span>
            <ArrowRight className="h-10 w-10" />
          </button>
        ))}
      </div>
    </section>
  )
}
