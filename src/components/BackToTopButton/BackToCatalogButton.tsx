import { useEffect, useState } from 'react'
import { BookImage } from 'lucide-react'

export function BackToCatalogButton() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const catalogSection = document.getElementById('catalogo')

    if (!catalogSection) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true)
          } else {
            setIsVisible(false)
          }
        })
      },
      {
        threshold: 0.1,
      },
    )

    observer.observe(catalogSection)

    return () => {
      observer.unobserve(catalogSection)
    }
  }, [])

  return (
    <a
      href="#catalogo"
      className={`fixed bottom-28 right-12 z-50 transform rounded-full bg-rose-900 p-3 shadow-md transition-all duration-300 ease-in-out hover:bg-rose-800 ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
      }`}
    >
      <BookImage className="h-7 w-7 text-white" />
    </a>
  )
}
