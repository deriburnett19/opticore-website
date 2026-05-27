interface ValueItem {
  header: string
  description: string
}

interface ValueRowProps {
  items: ValueItem[]
}

export default function ValueRow({ items }: ValueRowProps) {
  return (
    <section className="border-t border-b border-black">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-black">
          {items.map((item) => (
            <div key={item.header} className="py-14 px-10 lg:px-16">
              <h3 className="font-display font-extrabold uppercase text-[clamp(2.2rem,4.5vw,3.5rem)] tracking-tightest leading-none mb-5">
                {item.header}
              </h3>
              <p className="font-sans text-[1.0625rem] leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
