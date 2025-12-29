import { z } from 'zod'

export const inquiryFormSchema = z.object({
  companyName: z.string().min(1, '회사명을 입력해주세요'),
  contactName: z.string().min(1, '담당자명을 입력해주세요'),
  email: z.string().email('올바른 이메일 형식이 아닙니다'),
  phone: z
    .string()
    .regex(
      /^01[0-9]-?[0-9]{3,4}-?[0-9]{4}$/,
      '올바른 연락처 형식이 아닙니다 (예: 010-1234-5678)'
    ),
  message: z.string().min(10, '문의 내용은 최소 10자 이상 입력해주세요'),
})

export type InquiryFormData = z.infer<typeof inquiryFormSchema>
