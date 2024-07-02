import { useEffect, useState } from 'react'
import { ArrowUp } from 'lucide-react'

export function BackToTopButton() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
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
      className={`fixed bottom-10 right-10 z-50 transform rounded-full bg-salmon p-3 shadow-md transition-all duration-300 ease-in-out hover:bg-salmon-hover ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
      }`}
    >
      <ArrowUp className="h-7 w-7 text-white" />
    </a>
  )
}
