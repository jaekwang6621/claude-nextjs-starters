import { Container } from './container'

export function Footer() {
  return (
    <footer className="border-t">
      <Container>
        <div className="py-8">
          <div className="text-center">
            <p className="text-muted-foreground text-sm">
              © 2025 B2B AI Agent Platform. All rights reserved.
            </p>
          </div>
        </div>
      </Container>
    </footer>
  )
}
