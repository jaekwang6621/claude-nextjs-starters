'use client'

import * as React from 'react'
import { cn } from '@/lib/utils'

// 기능 탭 인터페이스
interface FeatureTab {
  id: string
  label: string
  active?: boolean
}

// 컴포넌트 Props 인터페이스
export interface FeatureTabsSectionProps extends React.ComponentProps<'section'> {
  tabs: FeatureTab[]
}

// 기능 선택 탭 컴포넌트
export function FeatureTabsSection({
  tabs,
  className,
  ...props
}: FeatureTabsSectionProps) {
  return (
    <section
      className={cn('border-b py-16', className)}
      data-slot="feature-tabs-section"
      {...props}
    >
      <div className="mx-auto max-w-[1184px] px-10">
        <div className="flex items-center justify-between gap-8">
          {tabs.map(tab => (
            <button
              key={tab.id}
              onClick={() => {
                /* TODO: 탭 전환 로직 구현 필요 */
              }}
              className="flex flex-col items-center gap-3 transition-colors hover:opacity-80"
            >
              {/* 아이콘 placeholder */}
              <div
                className="flex h-[68px] w-[68px] items-center justify-center rounded-lg bg-gray-100"
                aria-label={`${tab.label} 아이콘`}
              />
              {/* 라벨 */}
              <span
                className={cn(
                  'text-base font-bold',
                  tab.active ? 'text-gray-dark-900' : 'text-gray-dark-400'
                )}
              >
                {tab.label}
              </span>
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}
