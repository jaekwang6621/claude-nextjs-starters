import * as React from 'react'
import Link from 'next/link'
import { cva, type VariantProps } from 'class-variance-authority'

import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { Container } from '@/components/layout/container'

const heroVariants = cva('', {
  variants: {
    variant: {
      default: 'border-b',
      gradient: 'hero-gradient',
      minimal: '',
    },
    size: {
      sm: 'h-auto py-12',
      md: 'h-auto py-16',
      lg: 'h-auto py-20',
      full: 'h-[1012px]',
    },
  },
  defaultVariants: {
    variant: 'default',
    size: 'md',
  },
})

export interface HeroSectionProps
  extends
    Omit<React.ComponentProps<'section'>, 'title'>,
    VariantProps<typeof heroVariants> {
  title: string | React.ReactNode
  description: string | React.ReactNode
  primaryAction?: {
    label: string
    href: string
  }
  secondaryAction?: {
    label: string
    href: string
  }
}

export function HeroSection({
  title,
  description,
  primaryAction,
  secondaryAction,
  variant,
  size,
  className,
  ...props
}: HeroSectionProps) {
  return (
    <section
      data-slot="hero-section"
      className={cn(
        heroVariants({ variant, size }),
        'flex items-center justify-center',
        className
      )}
      {...props}
    >
      {(title || description || primaryAction || secondaryAction) && (
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            {title && (
              <h1 className="text-5xl font-bold tracking-tight sm:text-6xl">
                {title}
              </h1>
            )}
            {description && (
              <p className="text-muted-foreground mt-6 text-lg leading-8 sm:text-xl">
                {description}
              </p>
            )}
            {(primaryAction || secondaryAction) && (
              <div className="mt-10 flex items-center justify-center gap-4">
                {primaryAction && (
                  <Link href={primaryAction.href}>
                    <Button size="lg">{primaryAction.label}</Button>
                  </Link>
                )}
                {secondaryAction && (
                  <Link href={secondaryAction.href}>
                    <Button size="lg" variant="outline">
                      {secondaryAction.label}
                    </Button>
                  </Link>
                )}
              </div>
            )}
          </div>
        </Container>
      )}
    </section>
  )
}
