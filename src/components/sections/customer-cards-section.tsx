import * as React from 'react'
import { cn } from '@/lib/utils'

// 고객 카드 인터페이스
export interface CustomerCard {
  id: string
  title: string
  description: string
}

// 컴포넌트 Props 인터페이스
export interface CustomerCardsSectionProps extends React.ComponentProps<'section'> {
  cards: CustomerCard[]
}

// 고객 대상 카드 섹션 컴포넌트
export function CustomerCardsSection({
  cards,
  className,
  ...props
}: CustomerCardsSectionProps) {
  return (
    <section className={cn('py-16', className)} {...props}>
      <div className="mx-auto max-w-[1520px] px-10">
        {/* 가로 스크롤 컨테이너 */}
        <div className="flex snap-x snap-mandatory gap-6 overflow-x-auto pb-4">
          {cards.map(card => (
            <div
              key={card.id}
              className="flex max-w-[300px] min-w-[300px] snap-start flex-col justify-between rounded-lg bg-white p-5 shadow-sm"
            >
              <div>
                <h3 className="text-gray-dark-600 mb-4 text-xl font-bold">
                  {card.title}
                </h3>
                <p className="text-gray-dark-600 text-base leading-[25px] font-normal">
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
