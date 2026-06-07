'use client'

import { useEffect } from 'react'
import '@n8n/chat/style.css'

export default function N8nChat() {
  useEffect(() => {
    let cleanup: (() => void) | undefined

    import('@n8n/chat').then(({ createChat }) => {
      const instance = createChat({
        webhookUrl: '/api/chat',
        mode: 'window',
        chatInputKey: 'chatInput',
        chatSessionKey: 'sessionId',
        metadata: {},
        showWelcomeScreen: false,
        loadPreviousSession: false,
        defaultLanguage: 'en',
        initialMessages: [
          'Hi! Welcome to Brew & Co ☕',
          'How can I help you today?',
        ],
        i18n: {
          en: {
            title: 'Brew & Co',
            subtitle: 'Ask us anything about our menu, hours, or reservations.',
            footer: '',
            getStarted: 'Start chatting',
            inputPlaceholder: 'Type your message…',
            closeButtonTooltip: 'Close chat',
          },
        },
      })

      if (instance && typeof (instance as any).unmount === 'function') {
        cleanup = () => (instance as any).unmount()
      }
    })

    return () => {
      cleanup?.()
    }
  }, [])

  return null
}
