'use client'

import * as React from 'react'
import { ChevronRight } from 'lucide-react'
import { cn } from '@/lib/utils'

// 컴포넌트 Props 인터페이스
export interface FeatureDetailSectionProps extends React.ComponentProps<'section'> {
  title: string
  description: string
  highlightTitle: string
  highlightContent: string
  ctaText: string
  ctaHref?: string
  imageAlt?: string
  reverse?: boolean // 이미지와 텍스트 위치 반전 옵션
}

// 기능 상세 소개 섹션 컴포넌트
export function FeatureDetailSection({
  title,
  description,
  highlightTitle,
  highlightContent,
  ctaText,
  ctaHref = '#',
  imageAlt = '기능 설명 이미지',
  reverse = false,
  className,
  ...props
}: FeatureDetailSectionProps) {
  return (
    <section className={cn('py-20', className)} {...props}>
      <div className="mx-auto max-w-[1520px] px-10">
        <div
          className={cn(
            'grid grid-cols-1 gap-12 lg:grid-cols-2',
            reverse && 'lg:flex-row-reverse'
          )}
        >
          {/* 이미지 영역 */}
          <div
            className={cn('order-1', reverse && 'lg:order-2')}
            aria-label={imageAlt}
          >
            <div className="aspect-[728/528] w-full rounded-md bg-gray-100" />
          </div>

          {/* 텍스트 영역 */}
          <div
            className={cn(
              'order-2 flex flex-col gap-6',
              reverse && 'lg:order-1'
            )}
          >
            {/* 제목 */}
            <h2 className="text-gray-dark-900 text-2xl leading-9 font-bold tracking-[-0.24px]">
              {title}
            </h2>

            {/* 설명 */}
            <p className="text-gray-dark-600 text-base leading-[25px] font-normal tracking-[-0.08px]">
              {description}
            </p>

            {/* 강조 박스 */}
            <div className="rounded-lg bg-gray-50 p-6">
              <p className="text-gray-dark-600 mb-4 text-base font-bold">
                {highlightTitle}
              </p>

              <p className="text-gray-dark-500 text-base leading-[25px] font-normal">
                {highlightContent}
              </p>
            </div>

            {/* CTA Link */}
            <a
              href={ctaHref}
              onClick={e => {
                e.preventDefault()
                /* TODO: 링크 이동 로직 구현 필요 */
              }}
              className="flex items-center gap-2 self-start text-base font-bold text-[--color-accent-blue] transition-opacity hover:opacity-80"
            >
              {ctaText}
              <ChevronRight className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
