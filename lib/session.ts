import 'server-only'
import { cookies } from 'next/headers'
 
export async function createSession(sessionId: string) {
  const expiresAt = new Date(Date.now() + 365 * 24 * 60 * 60 * 1000)
  const cookieStore = await cookies();

  cookieStore.set('g6_session', sessionId, {
    httpOnly: false,
    secure: true,
    expires: expiresAt,
    sameSite: 'lax',
    path: '/',
  })
}