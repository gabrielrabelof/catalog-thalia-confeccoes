declare module 'scrollreveal' {
  interface ScrollRevealOptions {
    origin?: string
    distance?: string
    duration?: number
  }

  interface ScrollRevealObject {
    reveal: (selector: string, options?: ScrollRevealOptions) => void
  }

  interface ScrollReveal {
    (options?: ScrollRevealOptions): ScrollRevealObject
    reveal: (selector: string, options?: ScrollRevealOptions) => void
  }

  const scrollreveal: ScrollReveal
  export default scrollreveal
}
