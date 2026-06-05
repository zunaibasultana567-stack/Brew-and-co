/**
 * Professional "BC" monogram badge — replaces the cup emoji logo.
 * Self-contained SVG: works on both light (navbar) and dark (footer) backgrounds.
 */
export default function BrandMark({ size = 36 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* Badge background */}
      <rect width="40" height="40" rx="9" fill="#1E1008" />

      {/* Subtle inner border */}
      <rect x="1" y="1" width="38" height="38" rx="8.5" stroke="#3D2010" strokeWidth="1" />

      {/* Top terracotta accent bar */}
      <rect x="7" y="7" width="26" height="2" rx="1" fill="#C75B2A" />

      {/* Bottom terracotta accent bar — thinner, softer */}
      <rect x="7" y="31" width="26" height="1.2" rx="0.6" fill="#C75B2A" opacity="0.45" />

      {/* Vertical divider between B and C */}
      <rect x="19.5" y="13" width="1" height="14" rx="0.5" fill="#C75B2A" opacity="0.55" />

      {/* "B" — cream */}
      <text
        x="6.5"
        y="29"
        fontFamily="'Georgia', 'Times New Roman', serif"
        fontSize="19"
        fontWeight="700"
        fill="#F5EFE6"
      >
        B
      </text>

      {/* "C" — warm terracotta */}
      <text
        x="21.5"
        y="29"
        fontFamily="'Georgia', 'Times New Roman', serif"
        fontSize="19"
        fontWeight="700"
        fill="#C75B2A"
      >
        C
      </text>
    </svg>
  )
}
