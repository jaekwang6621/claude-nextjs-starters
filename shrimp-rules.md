# AI Agent Development Standards

> **For AI Agents Only**: This document provides project-specific rules and operational guidelines for AI agents working on this codebase. Not for general developer documentation.

## Project Context

**Tech Stack:**

- Next.js 16.1.1 (App Router + Turbopack)
- React 19.2.3 + TypeScript 5
- TailwindCSS v4.1.18 + shadcn/ui (new-york style)
- React Hook Form 7.63.0 + Zod 4.1.11 + Server Actions
- Notion API (@notionhq/client)

**Project Type:** B2B AI Agent Platform - 6-page landing platform showcasing AI orchestration system and 3 specialized agents with Notion-integrated inquiry form

**Current Pages:** `/`, `/orchestration`, `/leader-agent`, `/characterchat-agent`, `/proofreading-agent`, `/contact`

---

## ⚠️ CRITICAL: Multi-File Coordination Rules

**THESE RULES ARE MANDATORY - VIOLATIONS WILL BREAK THE APPLICATION**

### Rule 1: Form Implementation (3-File Rule)

**When implementing ANY form:**

**MUST modify all 3 files together:**

1. **Validation Schema** - `/src/lib/validations/{name}.ts`

   ```typescript
   import { z } from 'zod'

   export const inquiryFormSchema = z.object({
     companyName: z.string().min(1, '회사명을 입력해주세요'),
     email: z.string().email('올바른 이메일 형식이 아닙니다'),
   })

   export type InquiryFormData = z.infer<typeof inquiryFormSchema>
   ```

2. **Server Action** - `/src/lib/actions/{name}.ts`

   ```typescript
   'use server'

   import {
     inquiryFormSchema,
     type InquiryFormData,
   } from '@/lib/validations/inquiry'

   export async function submitInquiry(data: InquiryFormData) {
     const validated = inquiryFormSchema.parse(data) // MUST validate
     // ... implementation
     return { success: true, message: '제출 완료' }
   }
   ```

3. **Client Component** - Form component file

   ```typescript
   'use client'

   import { useForm } from 'react-hook-form'
   import { zodResolver } from '@hookform/resolvers/zod'
   import {
     inquiryFormSchema,
     type InquiryFormData,
   } from '@/lib/validations/inquiry'
   import { submitInquiry } from '@/lib/actions/inquiry'
   ```

**❌ NEVER:**

- Create form without validation schema
- Create Server Action without schema validation
- Use different schemas for client and server

**✅ Example - Correct Form Pattern:**

```typescript
// 1. Schema first
const schema = z.object({ name: z.string().min(1) })
// 2. Server Action uses same schema
const action = async data => schema.parse(data)
// 3. Client uses same schema
const form = useForm({ resolver: zodResolver(schema) })
```

---

### Rule 2: Page Creation (3-File Rule)

**When adding a new page:**

**MUST modify all 3 files:**

1. **Page File** - `/src/app/{route}/page.tsx`

   ```typescript
   import type { Metadata } from 'next'

   export const metadata: Metadata = {
     title: '페이지 제목 - B2B AI Agent Platform',
     description: '페이지 설명',
   }

   export default function NewPage() {
     /* ... */
   }
   ```

2. **Main Navigation** - `/src/components/navigation/main-nav.tsx`
   - Add route to navigation items array

3. **Mobile Navigation** - `/src/components/navigation/mobile-nav.tsx`
   - Add route to mobile navigation items array

**❌ NEVER:**

- Create page without updating both navigation components
- Create page without unique metadata export

---

### Rule 3: Environment Variables (2-File Rule)

**When adding environment variables:**

**MUST modify both files:**

1. **Environment File** - `.env.local`

   ```bash
   NEW_API_KEY=your_key_here
   ```

2. **Environment Validation** - `/src/lib/env.ts` (if validation needed)
   - Add validation schema
   - Export typed environment variable

**❌ NEVER:**

- Use `process.env` directly without validation
- Add sensitive keys without `.gitignore` check

---

### Rule 4: Metadata for SEO (Page-Level Rule)

**EVERY page MUST:**

- Export unique `metadata` object
- Include page-specific title with template suffix
- Include descriptive description

```typescript
// ✅ Correct
export const metadata: Metadata = {
  title: '문의하기 - B2B AI Agent Platform',
  description: 'AI 에이전트 도입 상담 문의하기',
}

// ❌ Wrong - No metadata export
export default function Page() {
  /* ... */
}
```

---

## Component Development Standards

### Server vs Client Components

**DEFAULT: Server Component**

```typescript
// ✅ Server Component (no 'use client')
export default async function UserList() {
  const users = await getUsers() // Can fetch data
  return <div>{/* ... */}</div>
}
```

**ONLY use 'use client' when:**

- Using React hooks (useState, useEffect, useActionState)
- Event handlers (onClick, onChange)
- Browser APIs (window, localStorage)
- Third-party libraries requiring client-side

```typescript
// ✅ Client Component (has 'use client')
'use client'

import { useState } from 'react'

export function InteractiveButton() {
  const [count, setCount] = useState(0)
  return <button onClick={() => setCount(count + 1)}>{count}</button>
}
```

**❌ NEVER:**

- Add 'use client' to Server Components unnecessarily
- Forget 'use client' when using hooks or event handlers

---

### Component Organization Rules

**Component placement decision tree:**

1. **Is it a shadcn/ui component?** → `/src/components/ui/`
2. **Is it a layout component (Header, Footer, Container)?** → `/src/components/layout/`
3. **Is it navigation-related?** → `/src/components/navigation/`
4. **Is it a React Context provider?** → `/src/components/providers/`
5. **Is it page-specific and used only once?** → Keep in page file or co-located folder
6. **Otherwise** → `/src/components/` root with descriptive name

**File size limit:** MUST keep components under 300 lines. If exceeded, split into smaller components.

---

## Form Implementation Pattern (Project-Specific)

**This project uses a SPECIFIC pattern - follow exactly:**

### Pattern Flow:

1. **Define Zod Schema** in `/src/lib/validations/`
2. **Export Type** using `z.infer<typeof schema>`
3. **Create Server Action** in `/src/lib/actions/` with `'use server'`
4. **Server Action validates** using same schema
5. **Return ActionResult** type: `{ success: boolean, message: string, data?: any, errors?: Record<string, string[]> }`
6. **Client component** uses React Hook Form + zodResolver
7. **useActionState** (React 19) for form submission with pending state

### Complete Example:

```typescript
// 1. Schema (lib/validations/contact.ts)
export const contactSchema = z.object({
  name: z.string().min(1, '이름을 입력해주세요'),
  email: z.string().email('올바른 이메일 형식이 아닙니다'),
  message: z.string().min(10, '메시지는 10자 이상 입력해주세요'),
})
export type ContactFormData = z.infer<typeof contactSchema>

// 2. Server Action (lib/actions/contact.ts)
'use server'

import { contactSchema, type ContactFormData } from '@/lib/validations/contact'

export async function submitContact(data: ContactFormData) {
  try {
    const validated = contactSchema.parse(data)
    // Process validated data
    return { success: true, message: '제출 완료' }
  } catch (error) {
    return { success: false, message: '오류 발생' }
  }
}

// 3. Client Component
'use client'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { contactSchema, type ContactFormData } from '@/lib/validations/contact'
import { submitContact } from '@/lib/actions/contact'

export function ContactForm() {
  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: { name: '', email: '', message: '' },
  })

  const onSubmit = async (data: ContactFormData) => {
    const result = await submitContact(data)
    if (result.success) {
      // Handle success
    }
  }

  return (
    <form onSubmit={form.handleSubmit(onSubmit)}>
      {/* Form fields using form.register */}
    </form>
  )
}
```

**❌ NEVER:**

- Use different validation schemas for client and server
- Skip server-side validation
- Create forms without React Hook Form
- Forget to add 'use server' to Server Actions
- Use 'use server' in client components

---

## Page and Routing Rules

### App Router Structure

**File-system based routing:**

```
src/app/
├── page.tsx                    # / (Homepage)
├── orchestration/
│   └── page.tsx               # /orchestration
├── leader-agent/
│   └── page.tsx               # /leader-agent
└── contact/
    └── page.tsx               # /contact
```

### Required Page Exports

**EVERY page.tsx MUST:**

1. Export default function (page component)
2. Export metadata object (for SEO)
3. Use Server Component by default (unless interactivity needed)

```typescript
// ✅ Correct Page Structure
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Page Title - B2B AI Agent Platform',
  description: 'Page description for SEO',
}

export default function PageName() {
  return <div>{/* Content */}</div>
}
```

**❌ NEVER:**

- Create page without metadata
- Use duplicate page titles
- Forget to import Metadata type

---

### Layout Rules

**Root Layout** (`/src/app/layout.tsx`) already configured with:

- ThemeProvider
- Global metadata template
- Font configuration
- Global CSS imports

**DO:**

- Use existing layout structure
- Add page-specific layouts in subdirectories if needed

**❌ NEVER:**

- Modify root layout without understanding impact
- Remove ThemeProvider or global providers

---

## Import and Path Management

### Path Aliases (Mandatory)

**ALWAYS use `@/` aliases:**

```typescript
// ✅ Correct - Using aliases
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { submitInquiry } from '@/lib/actions/inquiry'

// ❌ Wrong - Relative paths
import { Button } from '../../../components/ui/button'
import { cn } from '../../lib/utils'
```

**Available aliases:**

- `@/components` → `src/components`
- `@/lib` → `src/lib`
- `@/app` → `src/app`

---

### Import Order (Mandatory)

**MUST follow this order:**

```typescript
// 1. External libraries
import React from 'react'
import { NextPage } from 'next'

// 2. Internal modules (@/ paths)
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

// 3. Relative imports
import './styles.css'
```

**❌ NEVER:**

- Mix import order randomly
- Use require() instead of import

---

## Code Organization Rules

### Naming Conventions

**Files:**

- kebab-case: `user-profile.tsx`, `inquiry-form.tsx`
- Components: PascalCase export: `export function UserProfile()`
- Utilities: camelCase: `export function formatDate()`

**Folders:**

- lowercase or kebab-case: `components/`, `user-settings/`
- ❌ NEVER: PascalCase folders

**TypeScript Types:**

- PascalCase: `type UserProfile = {...}`
- Interface: `interface ButtonProps {...}`

---

### File Size Rules

**MUST:**

- Keep files under 300 lines
- Split larger components into smaller ones
- Extract complex logic into separate files

**When exceeding 300 lines:**

1. Split into sub-components
2. Extract hooks into separate files (`/src/lib/hooks/`)
3. Move utilities to `/src/lib/`

---

### Component Export Rules

```typescript
// ✅ Named exports (preferred for components)
export function LoginForm() {
  /* ... */
}

// ✅ Default export (for pages)
export default function HomePage() {
  /* ... */
}

// ❌ Avoid mixing both for same component
export function LoginForm() {
  /* ... */
}
export default LoginForm // Unnecessary
```

---

## shadcn/ui Integration

### Adding UI Components

**MUST use shadcn CLI:**

```bash
npx shadcn@latest add button
npx shadcn@latest add card
npx shadcn@latest add form
```

**This automatically:**

- Installs component to `/src/components/ui/`
- Adds necessary dependencies
- Configures with project's new-york style

**❌ NEVER:**

- Manually create files in `/src/components/ui/`
- Modify existing shadcn components directly (create wrapper instead)
- Copy-paste shadcn code from documentation

---

### Using UI Components

```typescript
// ✅ Correct Usage
import { Button } from '@/components/ui/button'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'

export function Example() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Title</CardTitle>
      </CardHeader>
      <CardContent>
        <Button>Click Me</Button>
      </CardContent>
    </Card>
  )
}
```

**Component Variants with CVA:**

```typescript
import { Button } from '@/components/ui/button'

// Uses class-variance-authority (CVA) for variants
<Button variant="default">Default</Button>
<Button variant="destructive">Delete</Button>
<Button variant="outline">Outline</Button>
<Button size="sm">Small</Button>
<Button size="lg">Large</Button>
```

---

## Environment Variables

### Current Environment Variables

**Required for production:**

- `NOTION_API_KEY` - Notion integration key
- `NOTION_DATABASE_ID` - Notion database ID for inquiry form

### Adding New Variables

**Process:**

1. **Add to `.env.local`:**

   ```bash
   NEW_API_KEY=your_key_value
   ```

2. **Add validation (if needed) in `/src/lib/env.ts`:**

   ```typescript
   const envSchema = z.object({
     NOTION_API_KEY: z.string().min(1),
     NEW_API_KEY: z.string().min(1), // Add here
   })
   ```

3. **Access in Server Components/Actions:**
   ```typescript
   const apiKey = process.env.NEW_API_KEY
   ```

**❌ NEVER:**

- Commit `.env.local` to git
- Expose sensitive keys to client components
- Use environment variables without validation

---

## Documentation Maintenance

### When to Update ROADMAP.md

**MUST update when:**

- Completing a task (mark as completed)
- Adding new tasks
- Changing task priority
- Modifying feature requirements

**Location:** `/docs/ROADMAP.md`

**Format:**

```markdown
- **Task XXX: Task Name** - Status
  - See: `/tasks/XXX-task-file.md`
  - [x] Completed item
  - [ ] Pending item
  - **관련 기능**: F001, F002
```

---

### When to Create Task Files

**MUST create in `/tasks/` when:**

- Starting significant new feature work
- User requests tracked task
- Complex multi-step implementation

**Format:** Follow `/tasks/000-sample.md` structure

**Naming:** `XXX-description.md` (e.g., `015-notion-integration.md`)

---

### Documentation Reference Guide

**Before implementing, READ:**

- `/CLAUDE.md` - Main development guidelines
- `/docs/ROADMAP.md` - Current project status
- `/docs/guides/project-structure.md` - File organization
- `/docs/guides/component-patterns.md` - Component patterns
- `/docs/guides/forms-react-hook-form.md` - Form handling
- `/docs/guides/nextjs-16.md` - Next.js 16 specific patterns

---

## Prohibited Actions

### ❌ NEVER DO:

1. **Code Changes:**
   - Modify files in `/node_modules/`
   - Edit shadcn/ui components directly (create wrappers)
   - Use deprecated React patterns (class components, componentDidMount)
   - Use `any` type without justification
   - Create components over 300 lines

2. **File Operations:**
   - Create files outside established folder structure
   - Use snake_case for file names
   - Mix PascalCase and kebab-case randomly
   - Create duplicate utility functions

3. **Import/Dependencies:**
   - Use relative paths when alias available
   - Import from `/node_modules/` directly
   - Add dependencies without checking existing ones
   - Use `require()` in TypeScript files

4. **Forms:**
   - Create forms without Zod schema
   - Skip server-side validation
   - Use different schemas for client/server
   - Forget 'use server' in Server Actions

5. **Components:**
   - Add 'use client' unnecessarily
   - Forget 'use client' when using hooks
   - Mix Server and Client component logic
   - Create deeply nested components (>4 levels)

6. **Environment:**
   - Commit secrets to repository
   - Use hardcoded API keys
   - Expose sensitive data to client

7. **Documentation:**
   - Skip ROADMAP updates after completing tasks
   - Ignore existing documentation guides
   - Create documentation outside `/docs/` structure

---

## Decision Trees

### Decision: Where to Place a New Component?

```
Is it from shadcn/ui?
├─ YES → /src/components/ui/
└─ NO → Is it layout-related (Header, Footer, Container)?
    ├─ YES → /src/components/layout/
    └─ NO → Is it navigation-related?
        ├─ YES → /src/components/navigation/
        └─ NO → Is it a React Context Provider?
            ├─ YES → /src/components/providers/
            └─ NO → Is it used in only one page?
                ├─ YES → Keep in page file or co-located folder
                └─ NO → /src/components/ (root)
```

---

### Decision: Server or Client Component?

```
Does it use React hooks (useState, useEffect, useActionState)?
├─ YES → Client Component ('use client')
└─ NO → Does it need event handlers (onClick, onChange)?
    ├─ YES → Client Component ('use client')
    └─ NO → Does it use browser APIs (window, localStorage)?
        ├─ YES → Client Component ('use client')
        └─ NO → Does it need third-party client library?
            ├─ YES → Client Component ('use client')
            └─ NO → Server Component (default, no directive)
```

---

### Decision: How to Implement a Form?

```
Follow this exact sequence:

1. Create Zod schema in /src/lib/validations/{name}.ts
   ↓
2. Export type using z.infer<typeof schema>
   ↓
3. Create Server Action in /src/lib/actions/{name}.ts with 'use server'
   ↓
4. Server Action validates with same schema
   ↓
5. Return { success: boolean, message: string, data?, errors? }
   ↓
6. Create Client Component with 'use client'
   ↓
7. Use React Hook Form with zodResolver
   ↓
8. Call Server Action on submit
```

---

### Decision: How to Add a New Page?

```
Follow this exact sequence:

1. Create /src/app/{route}/page.tsx
   ↓
2. Export metadata object with unique title and description
   ↓
3. Export default page component
   ↓
4. Update /src/components/navigation/main-nav.tsx
   ↓
5. Update /src/components/navigation/mobile-nav.tsx
   ↓
6. Test navigation on both desktop and mobile
```

---

### Decision: When to Update Documentation?

```
Did you complete a task?
├─ YES → Update /docs/ROADMAP.md (mark as completed)
└─ NO → Did you add a new feature?
    ├─ YES → Create task file in /tasks/ AND update ROADMAP
    └─ NO → Did you modify project structure significantly?
        ├─ YES → Consider updating /docs/guides/
        └─ NO → No documentation update needed
```

---

### Decision: How to Add Environment Variables?

```
Is it a sensitive key (API key, secret)?
├─ YES → Add to .env.local (NEVER commit)
│        ↓
│        Add validation to /src/lib/env.ts
│        ↓
│        Use only in Server Components/Actions
│
└─ NO → Is it a public variable (Next.js requires NEXT_PUBLIC_ prefix)?
         ├─ YES → Name it NEXT_PUBLIC_{NAME}
         │        ↓
         │        Add to .env.local
         │        ↓
         │        Can use in client components
         │
         └─ NO → Add to .env.local as regular variable
                  ↓
                  Use in Server Components/Actions only
```

---

## Quick Reference Checklist

### Before Implementing Any Feature:

- [ ] Read related documentation in `/docs/guides/`
- [ ] Check if similar pattern exists in codebase
- [ ] Identify all files that need modification
- [ ] Understand multi-file coordination requirements

### When Creating Forms:

- [ ] Schema in `/src/lib/validations/`
- [ ] Server Action in `/src/lib/actions/`
- [ ] Client component with React Hook Form
- [ ] Same Zod schema used in both client and server
- [ ] 'use server' directive in Server Action
- [ ] 'use client' directive in form component
- [ ] ActionResult return type from Server Action

### When Adding Pages:

- [ ] Create `/src/app/{route}/page.tsx`
- [ ] Export unique metadata
- [ ] Update MainNav component
- [ ] Update MobileNav component
- [ ] Test both desktop and mobile navigation

### Before Committing:

- [ ] Run `npm run check-all` (typecheck + lint + format check)
- [ ] Run `npm run build` (verify production build)
- [ ] Update ROADMAP.md if task completed
- [ ] Verify no sensitive data in commits
- [ ] Confirm all multi-file coordination rules followed

---

**Document Version:** 1.0
**Last Updated:** 2025-12-29
**Project:** claude-nextjs-starters (Next.js 16.1.1 + React 19.2.3)
