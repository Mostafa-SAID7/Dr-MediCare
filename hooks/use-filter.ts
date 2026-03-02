import { useState, useMemo } from 'react'

interface UseFilterOptions<T> {
  items: T[]
  searchFields?: (keyof T)[]
  filterFn?: (item: T, filters: Record<string, any>) => boolean
}

export function useFilter<T>({ items, searchFields = [], filterFn }: UseFilterOptions<T>) {
  const [searchTerm, setSearchTerm] = useState('')
  const [filters, setFilters] = useState<Record<string, any>>({})

  const filteredItems = useMemo(() => {
    return items.filter(item => {
      // Search filter
      if (searchTerm && searchFields.length > 0) {
        const matchesSearch = searchFields.some(field => {
          const value = item[field]
          return String(value).toLowerCase().includes(searchTerm.toLowerCase())
        })
        if (!matchesSearch) return false
      }

      // Custom filter function
      if (filterFn && !filterFn(item, filters)) {
        return false
      }

      return true
    })
  }, [items, searchTerm, filters, searchFields, filterFn])

  const setFilter = (key: string, value: any) => {
    setFilters(prev => ({ ...prev, [key]: value }))
  }

  const clearFilters = () => {
    setSearchTerm('')
    setFilters({})
  }

  return {
    searchTerm,
    setSearchTerm,
    filters,
    setFilter,
    clearFilters,
    filteredItems,
  }
}
