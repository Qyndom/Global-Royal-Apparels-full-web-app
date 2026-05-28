import { createServerFn } from '@tanstack/react-start'

const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD ?? 'Miracle12345'

export const verifyAdminPassword = createServerFn({ method: 'POST' })
  .inputValidator((data: { password: string }) => data)
  .handler(async ({ data }) => {
    if (data.password === ADMIN_PASSWORD) {
      return { success: true }
    }
    return { success: false }
  })
