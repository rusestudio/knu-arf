import type { ReactNode } from 'react'

interface MobileLayoutProps {
  children: ReactNode
}

function MobileLayout({ children }: MobileLayoutProps) {
  return (
    <div className="min-h-screen bg-arf-background">
      <div className="relative mx-auto min-h-screen max-w-[430px] bg-arf-background shadow-arf-md">
        <div className="pb-[72px]">
          {children}
        </div>
      </div>
    </div>
  )
}

export default MobileLayout