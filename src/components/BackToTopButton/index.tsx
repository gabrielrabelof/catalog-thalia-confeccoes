import { useEffect, useState } from 'react'

import { ArrowUp } from 'lucide-react'
import clsx from 'clsx'

export function BackToTopButton() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    function handleScroll() {
      if (window.scrollY > 500) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <a
      href="#inicio"
      className={clsx(
        'fixed -right-10 bottom-20 z-50 translate-y-16 transform rounded-full bg-salmon p-3 opacity-0 shadow-md transition-all duration-300 ease-in-out hover:bg-salmon-hover lg:bottom-28 lg:right-0',
        {
          '-translate-x-14': isVisible,
          'opacity-100': isVisible,
        },
      )}
    >
      <ArrowUp className="h-5 w-5 text-white lg:h-7 lg:w-7" />
    </a>
  )
}
