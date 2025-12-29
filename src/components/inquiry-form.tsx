'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import Link from 'next/link'
import { CheckCircle2, Loader2 } from 'lucide-react'
import {
  inquiryFormSchema,
  type InquiryFormData,
} from '@/lib/validations/inquiry'
import { submitInquiry } from '@/lib/actions/inquiry'
import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'

export function InquiryForm() {
  const [isSuccess, setIsSuccess] = useState(false)
  const [errorMessage, setErrorMessage] = useState<string | null>(null)

  const form = useForm<InquiryFormData>({
    resolver: zodResolver(inquiryFormSchema),
    defaultValues: {
      companyName: '',
      contactName: '',
      email: '',
      phone: '',
      message: '',
    },
  })

  async function onSubmit(data: InquiryFormData) {
    setErrorMessage(null)

    const result = await submitInquiry(data)

    if (result.success) {
      setIsSuccess(true)
      form.reset()
    } else {
      setErrorMessage(result.error || '문의 제출 중 오류가 발생했습니다')
    }
  }

  // Success State UI
  if (isSuccess) {
    return (
      <div className="space-y-6 text-center">
        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-green-100 dark:bg-green-900">
          <CheckCircle2 className="h-12 w-12 text-green-600 dark:text-green-400" />
        </div>

        <div className="space-y-2">
          <h2 className="text-2xl font-bold">
            문의가 성공적으로 접수되었습니다
          </h2>
          <p className="text-muted-foreground">
            빠른 시일 내에 담당자가 연락드리겠습니다.
          </p>
        </div>

        <div className="flex items-center justify-center gap-4">
          <Link href="/">
            <Button variant="outline">홈으로 돌아가기</Button>
          </Link>
          <Button
            onClick={() => {
              setIsSuccess(false)
              form.reset()
            }}
          >
            추가 문의하기
          </Button>
        </div>
      </div>
    )
  }

  // Form UI
  return (
    <div className="space-y-6">
      {errorMessage && (
        <Alert variant="destructive">
          <AlertTitle>오류</AlertTitle>
          <AlertDescription>{errorMessage}</AlertDescription>
        </Alert>
      )}

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          {/* Company Name */}
          <FormField
            control={form.control}
            name="companyName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>회사명 *</FormLabel>
                <FormControl>
                  <Input placeholder="ABC 주식회사" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Contact Name */}
          <FormField
            control={form.control}
            name="contactName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>담당자명 *</FormLabel>
                <FormControl>
                  <Input placeholder="홍길동" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Email */}
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>이메일 *</FormLabel>
                <FormControl>
                  <Input
                    type="email"
                    placeholder="example@company.com"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Phone */}
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel>연락처 *</FormLabel>
                <FormControl>
                  <Input placeholder="010-1234-5678" {...field} />
                </FormControl>
                <FormDescription>
                  하이픈(-)을 포함하거나 제외하고 입력 가능합니다
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Message */}
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel>문의 내용 *</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="문의하실 내용을 자세히 입력해주세요 (최소 10자)"
                    className="min-h-[150px] resize-y"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Submit Button */}
          <Button
            type="submit"
            className="w-full"
            disabled={form.formState.isSubmitting}
            size="lg"
          >
            {form.formState.isSubmitting ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                제출 중...
              </>
            ) : (
              '문의하기'
            )}
          </Button>
        </form>
      </Form>
    </div>
  )
}
