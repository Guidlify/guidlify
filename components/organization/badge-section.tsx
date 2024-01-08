import Image from "next/legacy/image"

interface BadgeSectionProps {
  title: string
  items: { name: string; url: string }[]
}

const BadgeSection: React.FC<BadgeSectionProps> = ({ title, items }) => (
  <div>
    <h1 className="mb-2 text-xl font-bold">{title}</h1>
    <div className="mb-4 flex space-x-2 pl-4">
      {items.map((item) => (
        <div key={item.name} className="mr-1 mt-1">
          <Image alt={item.name} src={item.url} width={44} height={44} />
        </div>
      ))}
    </div>
  </div>
)

export default BadgeSection
