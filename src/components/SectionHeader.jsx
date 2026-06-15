export default function SectionHeader({ label, title }) {
  return (
    <div className="mb-8">
      <p className="text-gold text-xs font-semibold uppercase tracking-[0.14em] mb-2">{label}</p>
      <h2 className="font-display text-3xl md:text-4xl font-bold text-gray-900 dark:text-white leading-tight mb-4">
        {title}
      </h2>
      <div className="w-12 h-[3px] bg-gold rounded-full" />
    </div>
  )
}
