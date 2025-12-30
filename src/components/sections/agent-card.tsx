import * as React from 'react'
import Link from 'next/link'
import { cva, type VariantProps } from 'class-variance-authority'

import { cn } from '@/lib/utils'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

const agentCardVariants = cva('h-full transition-shadow hover:shadow-lg', {
  variants: {
    variant: {
      default: '',
      featured: 'border-primary/50',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
})

export interface AgentCardProps extends VariantProps<typeof agentCardVariants> {
  title: string
  description: string
  content: string
  href: string
  className?: string
}

export function AgentCard({
  title,
  description,
  content,
  href,
  variant,
  className,
}: AgentCardProps) {
  return (
    <Link href={href}>
      <Card className={cn(agentCardVariants({ variant }), className)}>
        <CardHeader>
          <CardTitle
            className={variant === 'featured' ? 'text-3xl' : 'text-2xl'}
          >
            {title}
          </CardTitle>
          <CardDescription
            className={variant === 'featured' ? 'text-base' : undefined}
          >
            {description}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground text-sm">{content}</p>
          <span className="text-primary mt-4 inline-block text-sm">
            자세히 보기 →
          </span>
        </CardContent>
      </Card>
    </Link>
  )
}
