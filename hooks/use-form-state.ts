import { useState } from 'react'

export function useFormState<T extends Record<string, any>>(initialState: T) {
  const [formData, setFormData] = useState<T>(initialState)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (field: keyof T, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const handleSubmit = async (
    onSubmit: (data: T) => Promise<void>,
    e?: React.FormEvent
  ) => {
    if (e) e.preventDefault()
    setIsSubmitting(true)
    try {
      await onSubmit(formData)
      setSubmitted(true)
    } catch (error) {
      console.error('Form submission error:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  const reset = () => {
    setFormData(initialState)
    setIsSubmitting(false)
    setSubmitted(false)
  }

  return {
    formData,
    setFormData,
    isSubmitting,
    submitted,
    handleChange,
    handleSubmit,
    reset,
  }
}
