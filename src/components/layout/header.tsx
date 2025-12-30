'use client'

import { MainNav } from '@/components/navigation/main-nav'
import { MobileNav } from '@/components/navigation/mobile-nav'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { ChevronRight, Menu } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'
import { useMediaQuery } from 'usehooks-ts'
import { Container } from './container'

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const isMobile = useMediaQuery('(max-width: 768px)')

  return (
    <header className="bg-background/95 supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50 w-full border-b backdrop-blur">
      <Container>
        <div className="flex h-[104px] items-center">
          {/* 왼쪽: 로고만 */}
          <div className="flex items-center">
            <Link
              href="/"
              className="flex h-12 w-[184px] items-center justify-center rounded bg-gray-100"
            >
              <span className="sr-only">B2B AI Platform</span>
            </Link>
          </div>

          {/* 중앙: 메뉴 - flex-1로 남은 공간 차지 + justify-center */}
          <div className="flex flex-1 items-center justify-center">
            {!isMobile && <MainNav />}
          </div>

          {/* 오른쪽: Contact Us + 기타 */}
          <div className="flex items-center gap-4">
            {/* Contact Us Button */}
            {!isMobile && (
              <Link href="/contact">
                <Button
                  variant="outline"
                  className="flex h-12 items-center gap-2 rounded-none border border-gray-900 px-4"
                >
                  <span className="text-base font-normal text-gray-900">
                    Contact Us
                  </span>
                  <ChevronRight className="h-6 w-6" />
                </Button>
              </Link>
            )}

            {/* <ThemeToggle /> */}

            {/* Mobile Menu Button */}
            {isMobile && (
              <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <Menu className="h-5 w-5" />
                    <span className="sr-only">메뉴 열기</span>
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                  <MobileNav onClose={() => setMobileMenuOpen(false)} />
                </SheetContent>
              </Sheet>
            )}
          </div>
        </div>
      </Container>
    </header>
  )
}
