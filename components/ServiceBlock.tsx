interface ServiceBlockProps {
  title: string
  description: string
  imageLeft?: boolean
  altText: string
}

export default function ServiceBlock({
  title,
  description,
  imageLeft = true,
  altText,
}: ServiceBlockProps) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 border-b border-black">
      {/* Placeholder image */}
      <div
        className={`${
          imageLeft ? 'lg:order-1' : 'lg:order-2'
        } aspect-[4/3] bg-[#F5F5F5] flex items-center justify-center border-b lg:border-b-0 ${
          imageLeft ? 'lg:border-r' : 'lg:border-l'
        } border-black`}
        role="img"
        aria-label={altText}
      >
        <span className="text-label opacity-30">{altText}</span>
      </div>

      {/* Text */}
      <div
        className={`${
          imageLeft ? 'lg:order-2' : 'lg:order-1'
        } flex items-center px-10 py-20 lg:px-16 xl:px-24`}
      >
        <div>
          <h3 className="font-display font-extrabold uppercase text-[clamp(2rem,4vw,3.2rem)] tracking-tightest leading-none mb-6">
            {title}
          </h3>
          <p className="font-sans text-[1.0625rem] leading-relaxed">{description}</p>
        </div>
      </div>
    </div>
  )
}
