/**
 * TaglineBar Component
 *
 * Displays the company tagline with a background.
 * Height: 58px (as per Figma design)
 *
 * Note: The background color is an approximation of the Figma Frame 4.
 * If you want to use the actual Figma background image:
 * 1. Save the Frame 4 screenshot to /public/images/tagline-bg.png
 * 2. Uncomment the Image component below
 * 3. Comment out the div with backgroundColor
 */
export function TaglineBar() {
  return (
    <div className="relative w-full overflow-hidden" style={{ height: '58px' }}>
      {/* Background - Approximated color from Figma */}
      <div
        className="absolute inset-0"
        style={{ backgroundColor: '#f0f4f8' }}
      />

      {/* Alternative: Use actual Figma background image
      <div className="absolute inset-0">
        <Image
          src="/images/tagline-bg.png"
          alt=""
          fill
          className="object-cover"
          priority
        />
      </div>
      */}

      {/* Text Overlay */}
      <div className="relative flex items-center justify-center gap-2.5 bg-[linear-gradient(180deg,rgba(231,234,238,1)_0%,rgba(242,244,246,1)_100%)] px-[676px] py-5">
        <p className="text-graydark-900 relative mt-[-1.00px] w-fit text-center text-[length:var(--text-lg-semibold-font-size)] leading-[var(--text-lg-semibold-line-height)] font-[number:var(--text-lg-semibold-font-weight)] font-semibold tracking-[var(--text-lg-semibold-letter-spacing)] whitespace-nowrap [font-style:var(--text-lg-semibold-font-style)]">
          기업이 보유한 문서 기반 IP를, AI를 통해 다양한 기능과 서비스로
          확장해드립니다.
        </p>
      </div>
    </div>
  )
}
