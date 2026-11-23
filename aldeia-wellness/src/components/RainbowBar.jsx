const COLORS = ['#C8363F', '#F2C418', '#0D3A91', '#7BA93A', '#7E479A', '#237BB7', '#006CC0']

export default function RainbowBar({ className = 'w-28 mt-3 mb-5' }) {
  return (
    <div
      className={`h-[7px] rounded-full flex overflow-hidden ${className}`}
      role="presentation"
      aria-hidden="true"
    >
      {COLORS.map((c) => (
        <div key={c} style={{ background: c, flex: 1 }} />
      ))}
    </div>
  )
}
