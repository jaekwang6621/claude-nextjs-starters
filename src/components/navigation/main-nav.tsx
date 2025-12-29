'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'

interface NavItem {
  title: string
  href: string
}

const navItems: NavItem[] = [
  { title: '홈', href: '/' },
  { title: 'Orchestration System', href: '/orchestration' },
  { title: '리더 에이전트', href: '/leader-agent' },
  { title: '캐릭터챗 에이전트', href: '/characterchat-agent' },
  { title: '프루프 리딩 에이전트', href: '/proofreading-agent' },
  { title: '문의하기', href: '/contact' },
]

export function MainNav() {
  const pathname = usePathname()

  return (
    <nav className="flex items-center space-x-6 lg:space-x-8">
      {navItems.map(item => (
        <Link
          key={item.href}
          href={item.href}
          className={cn(
            'hover:text-primary text-sm font-medium transition-colors',
            pathname === item.href ? 'text-foreground' : 'text-foreground/60'
          )}
        >
          {item.title}
        </Link>
      ))}
    </nav>
  )
}
