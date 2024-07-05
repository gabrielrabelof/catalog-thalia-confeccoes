import { useEffect, useState } from 'react'

import { BookImage } from 'lucide-react'
import clsx from 'clsx'

export function BackToCatalogButton() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const catalogSection = document.getElementById('catalogo')

    if (!catalogSection) return

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
      href="#catalogo"
      className={clsx(
        'fixed -right-10 bottom-20 z-50 translate-y-0 transform rounded-full bg-rose-900 p-3 opacity-0 shadow-md transition-all duration-300 ease-in-out hover:bg-rose-800 lg:bottom-32 lg:right-0',
        {
          'opacity-100': isVisible,
          '-translate-x-14': isVisible,
        },
      )}
    >
      <BookImage className="h-5 w-5 text-white lg:h-7 lg:w-7" />
    </a>
  )
}
