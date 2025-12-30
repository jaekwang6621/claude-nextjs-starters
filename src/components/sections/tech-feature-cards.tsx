import * as React from 'react'
import { cn } from '@/lib/utils'

// 기능 카드 인터페이스
export interface TechFeatureCard {
  id: string
  title: string
  description: string
  imageAlt?: string
}

// 컴포넌트 Props 인터페이스
export interface TechFeatureCardsProps extends React.ComponentProps<'section'> {
  cards: TechFeatureCard[]
}

// 기술 기능 카드 섹션 컴포넌트
export function TechFeatureCards({
  cards,
  className,
  ...props
}: TechFeatureCardsProps) {
  return (
    <section className={cn('py-16', className)} {...props}>
      <div className="mx-auto max-w-[1520px] px-10">
        {/* 가로 스크롤 컨테이너 */}
        <div className="flex snap-x snap-mandatory gap-7 overflow-x-auto pb-4">
          {cards.map(card => (
            <div
              key={card.id}
              className="flex min-w-[580px] snap-start flex-col gap-7 rounded-xl bg-gray-50 p-6"
            >
              {/* 이미지 placeholder */}
              <div
                className="h-[386px] rounded-md bg-gray-100"
                aria-label={card.imageAlt || `${card.title} 이미지`}
              />

              {/* 텍스트 영역 */}
              <div>
                <h3 className="text-gray-dark-900 mb-4 text-2xl font-bold">
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
