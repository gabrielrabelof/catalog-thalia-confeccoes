import { ComponentProps } from 'react'

type WrapperProps = ComponentProps<'div'>

export function Wrapper(props: WrapperProps) {
  return (
    <div
      id="wrapper"
      className="mx-auto w-full max-w-custom-screen-sm lg:max-w-custom-screen-lg"
      {...props}
    ></div>
  )
}
