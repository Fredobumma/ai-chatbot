'use client'

import { IconOpenAI, IconUser } from '@/components/ui/icons'
import { cn } from '@/lib/utils'
import { spinner } from './spinner'
import { CodeBlock } from '../ui/codeblock'
import { MemoizedReactMarkdown } from '../markdown'
import remarkGfm from 'remark-gfm'
import remarkMath from 'remark-math'
import { StreamableValue } from 'ai/rsc'
import { useStreamableText } from '@/lib/hooks/use-streamable-text'

// Different types of message bubbles.

export function UserMessage({ children }: { children: React.ReactNode }) {
  return (
    <div className="group relative flex items-start md:-ml-12">
      <div className="flex size-[25px] shrink-0 select-none items-center justify-center rounded-md border bg-background shadow-sm">
        <IconUser />
      </div>
      <div className="ml-4 flex-1 space-y-2 overflow-hidden pl-2">
        {children}
      </div>
    </div>
  )
}

export function BotMessage({
  content,
  className
}: {
  content: string | StreamableValue<string>
  className?: string
}) {
  const text = useStreamableText(content)

  return (
    <div className={cn('group relative flex items-start md:-ml-12', className)}>
      <div className="flex size-[24px] shrink-0 select-none items-center justify-center rounded-md border bg-primary text-primary-foreground shadow-sm">
      <svg
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1.2959 19.1279C1.2959 17.6519 1.5866 16.1904 2.15143 14.8269C2.71627 13.4632 3.54413 12.2242 4.5878 11.1806C5.63146 10.1369 6.87042 9.30902 8.23401 8.74418C9.59767 8.17942 11.0592 7.88867 12.5351 7.88867V19.1279H1.2959Z"
            fill="#442781"
          />
          <path
            d="M1.2959 19.1279C1.2959 20.6039 1.5866 22.0654 2.15143 23.4291C2.71627 24.7926 3.54413 26.0316 4.5878 27.0753C5.63146 28.119 6.87042 28.9468 8.23401 29.5117C9.59767 30.0765 11.0592 30.3672 12.5351 30.3672V19.1279H1.2959Z"
            fill="#61459C"
          />
          <path
            d="M23.7742 19.1279C23.7742 20.6039 23.4837 22.0654 22.919 23.4291C22.3541 24.7926 21.5263 26.0316 20.4825 27.0753C19.4388 28.119 18.1998 28.9468 16.8362 29.5117C15.4726 30.0765 14.0111 30.3672 12.5352 30.3672V19.1279H23.7742Z"
            fill="#A992DB"
          />
          <path
            d="M30.7039 9.41835C30.7039 14.079 26.9255 17.8572 22.265 17.8572H13.8262V9.41835C13.8262 4.75771 17.6044 0.979492 22.265 0.979492C26.9255 0.979492 30.7039 4.75771 30.7039 9.41835Z"
            fill="#FF7917"
          />
        </svg>
      </div>
      <div className="ml-4 flex-1 space-y-2 overflow-hidden px-1">
        <MemoizedReactMarkdown
          className="prose break-words dark:prose-invert prose-p:leading-relaxed prose-pre:p-0"
          remarkPlugins={[remarkGfm, remarkMath]}
          components={{
            p({ children }) {
              return <p className="mb-2 last:mb-0">{children}</p>
            },
            code({ node, inline, className, children, ...props }) {
              if (children.length) {
                if (children[0] == '▍') {
                  return (
                    <span className="mt-1 animate-pulse cursor-default">▍</span>
                  )
                }

                children[0] = (children[0] as string).replace('`▍`', '▍')
              }

              const match = /language-(\w+)/.exec(className || '')

              if (inline) {
                return (
                  <code className={className} {...props}>
                    {children}
                  </code>
                )
              }

              return (
                <CodeBlock
                  key={Math.random()}
                  language={(match && match[1]) || ''}
                  value={String(children).replace(/\n$/, '')}
                  {...props}
                />
              )
            }
          }}
        >
          {text}
        </MemoizedReactMarkdown>
      </div>
    </div>
  )
}

export function BotCard({
  children,
  showAvatar = true
}: {
  children: React.ReactNode
  showAvatar?: boolean
}) {
  return (
    <div className="group relative flex items-start md:-ml-12">
      <div
        className={cn(
          'flex size-[24px] shrink-0 select-none items-center justify-center rounded-md border bg-primary text-primary-foreground shadow-sm',
          !showAvatar && 'invisible'
        )}
      >
        <IconOpenAI />
      </div>
      <div className="ml-4 flex-1 pl-2">{children}</div>
    </div>
  )
}

export function SystemMessage({ children }: { children: React.ReactNode }) {
  return (
    <div
      className={
        'mt-2 flex items-center justify-center gap-2 text-xs text-gray-500'
      }
    >
      <div className={'max-w-[600px] flex-initial p-2'}>{children}</div>
    </div>
  )
}

export function SpinnerMessage() {
  return (
    <div className="group relative flex items-start md:-ml-12">
      <div className="flex size-[24px] shrink-0 select-none items-center justify-center rounded-md border bg-primary text-primary-foreground shadow-sm">
      <svg
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1.2959 19.1279C1.2959 17.6519 1.5866 16.1904 2.15143 14.8269C2.71627 13.4632 3.54413 12.2242 4.5878 11.1806C5.63146 10.1369 6.87042 9.30902 8.23401 8.74418C9.59767 8.17942 11.0592 7.88867 12.5351 7.88867V19.1279H1.2959Z"
            fill="#442781"
          />
          <path
            d="M1.2959 19.1279C1.2959 20.6039 1.5866 22.0654 2.15143 23.4291C2.71627 24.7926 3.54413 26.0316 4.5878 27.0753C5.63146 28.119 6.87042 28.9468 8.23401 29.5117C9.59767 30.0765 11.0592 30.3672 12.5351 30.3672V19.1279H1.2959Z"
            fill="#61459C"
          />
          <path
            d="M23.7742 19.1279C23.7742 20.6039 23.4837 22.0654 22.919 23.4291C22.3541 24.7926 21.5263 26.0316 20.4825 27.0753C19.4388 28.119 18.1998 28.9468 16.8362 29.5117C15.4726 30.0765 14.0111 30.3672 12.5352 30.3672V19.1279H23.7742Z"
            fill="#A992DB"
          />
          <path
            d="M30.7039 9.41835C30.7039 14.079 26.9255 17.8572 22.265 17.8572H13.8262V9.41835C13.8262 4.75771 17.6044 0.979492 22.265 0.979492C26.9255 0.979492 30.7039 4.75771 30.7039 9.41835Z"
            fill="#FF7917"
          />
        </svg>
      </div>
      <div className="ml-4 h-[24px] flex flex-row items-center flex-1 space-y-2 overflow-hidden px-1">
        {spinner}
      </div>
    </div>
  )
}
