'use server'

import { Client } from '@notionhq/client'
import {
  inquiryFormSchema,
  type InquiryFormData,
} from '@/lib/validations/inquiry'

const notion = new Client({
  auth: process.env.NOTION_API_KEY,
})

export async function submitInquiry(data: InquiryFormData) {
  try {
    // 서버 측 검증
    const validated = inquiryFormSchema.parse(data)

    // Notion API 키가 설정되어 있지 않은 경우
    if (!process.env.NOTION_API_KEY || !process.env.NOTION_DATABASE_ID) {
      console.warn('Notion API credentials not configured')
      return {
        success: false,
        error: 'Notion API가 설정되지 않았습니다. 환경 변수를 확인해주세요.',
      }
    }

    // Notion API 호출
    const response = await notion.pages.create({
      parent: {
        database_id: process.env.NOTION_DATABASE_ID!,
      },
      properties: {
        회사명: { title: [{ text: { content: validated.companyName } }] },
        담당자명: {
          rich_text: [{ text: { content: validated.contactName } }],
        },
        이메일: { email: validated.email },
        연락처: { phone_number: validated.phone },
        '문의 내용': {
          rich_text: [{ text: { content: validated.message } }],
        },
        상태: { select: { name: '신규' } },
      },
    })

    return { success: true, id: response.id }
  } catch (error) {
    console.error('Inquiry submission error:', error)

    if (error instanceof Error) {
      return { success: false, error: error.message }
    }

    return { success: false, error: '문의 제출 중 오류가 발생했습니다' }
  }
}
