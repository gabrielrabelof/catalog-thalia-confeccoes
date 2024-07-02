export function ShopeeLogo() {
  return (
    <svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <rect width={24} height={24} rx={8} fill="url(#pattern0_310_102)" />
      <defs>
        <pattern
          id="pattern0_310_102"
          patternContentUnits="objectBoundingBox"
          width={1}
          height={1}
        >
          <use xlinkHref="#image0_310_102" transform="scale(.01042)" />
        </pattern>
        <image
          id="image0_310_102"
          width={96}
          height={96}
          xlinkHref="data:image/png;base64,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"
        />
      </defs>
    </svg>
  )
}
