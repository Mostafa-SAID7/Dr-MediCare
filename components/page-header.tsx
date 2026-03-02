interface PageHeaderProps {
  title: string
  description: string
  centered?: boolean
}

export function PageHeader({ title, description, centered = false }: PageHeaderProps) {
  return (
    <div className={`mb-8 ${centered ? 'text-center' : ''}`}>
      <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
        {title}
      </h1>
      <p className="text-xl text-gray-600 max-w-2xl mx-auto">
        {description}
      </p>
    </div>
  )
}
