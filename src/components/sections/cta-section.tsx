import * as React from 'react'
import Link from 'next/link'
import { cva, type VariantProps } from 'class-variance-authority'

import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { Container } from '@/components/layout/container'

const ctaVariants = cva('py-16', {
  variants: {
    variant: {
      default: '',
      muted: 'bg-muted/50',
      accent: 'bg-accent/50',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
})

export interface CTASectionProps
  extends
    Omit<React.ComponentProps<'section'>, 'title'>,
    VariantProps<typeof ctaVariants> {
  title: string | React.ReactNode
  description?: string | React.ReactNode
  action: {
    label: string
    href: string
    variant?: 'default' | 'outline'
    size?: 'default' | 'lg'
  }
}

export function CTASection({
  title,
  description,
  action,
  variant,
  className,
  ...props
}: CTASectionProps) {
  return (
    <section
      data-slot="cta-section"
      className={cn(ctaVariants({ variant }), className)}
      {...props}
    >
      <Container size="md">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold">{title}</h2>
          {description && (
            <p className="text-muted-foreground mt-4 text-lg">{description}</p>
          )}
          <div className="mt-8">
            <Link href={action.href}>
              <Button
                size={action.size || 'lg'}
                variant={action.variant || 'default'}
              >
                {action.label}
              </Button>
            </Link>
          </div>
        </div>
      </Container>
    </section>
  )
}
