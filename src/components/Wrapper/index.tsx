import { ComponentProps } from 'react'

type WrapperProps = ComponentProps<'div'>

export function Wrapper(props: WrapperProps) {
  return (
    <div
      className="mx-auto w-full max-w-sm lg:max-w-custom-screen"
      {...props}
    ></div>
  )
}
