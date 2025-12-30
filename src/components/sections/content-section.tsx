import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'

import { cn } from '@/lib/utils'

const contentSectionVariants = cva(
  'prose prose-lg dark:prose-invert mx-auto max-w-4xl',
  {
    variants: {
      spacing: {
        sm: 'mb-8',
        md: 'mb-12',
        lg: 'mb-16',
      },
    },
    defaultVariants: {
      spacing: 'md',
    },
  }
)

export interface ContentSectionProps
  extends
    React.ComponentProps<'div'>,
    VariantProps<typeof contentSectionVariants> {
  title?: string
}

export function ContentSection({
  children,
  title,
  spacing,
  className,
  ...props
}: ContentSectionProps) {
  return (
    <div
      data-slot="content-section"
      className={cn(contentSectionVariants({ spacing }), className)}
      {...props}
    >
      {title && <h2 className="mb-4 text-3xl font-bold">{title}</h2>}
      {children}
    </div>
  )
}
