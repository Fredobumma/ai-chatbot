import Link from 'next/link'

import { IconSeparator } from '@/components/ui/icons'
import { UserMenu } from '@/components/user-menu'
import { SidebarMobile } from './sidebar-mobile'
import { ChatHistory } from './chat-history'

export function Header() {
  return (
    <header className="sticky top-0 z-50 flex items-center justify-between w-full h-16 px-4 border-b shrink-0 bg-gradient-to-b from-background/10 via-background/50 to-background/80 backdrop-blur-xl">
      <Link href="/new">
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
      </Link>
      <div className="flex items-center">
        <UserMenu user={{ email: 'odinakachiogbujiagba@gmail.com', id: '1' }} />
        <div className="flex items-center">
          <IconSeparator className="size-6 text-muted-foreground/50 mr-2.5" />
          <SidebarMobile>
            <ChatHistory userId="1" />
          </SidebarMobile>
        </div>
      </div>
    </header>
  )
}
