import { ComponentProps } from 'react'

type WrapperProps = ComponentProps<'div'>

export function Wrapper(props: WrapperProps) {
  return (
    <div
      className="lg:max-w-custom-screen mx-auto w-full max-w-sm"
      {...props}
    ></div>
  )
}
