# Styling Guide

Comprehensive guide to styling in the Dr. MediCare application.

## Overview

The project uses a modern styling approach combining:
- **Tailwind CSS** - Utility-first CSS framework
- **CSS Variables** - Theme customization
- **Shadcn/ui** - Pre-built component library
- **Next.js Fonts** - Optimized font loading

## Tailwind CSS

### Configuration

Located in `tailwind.config.ts`:

```typescript
export default {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        // Custom color system
      },
      fontFamily: {
        sans: ['var(--font-sans)'],
        serif: ['var(--font-serif)'],
        mono: ['var(--font-mono)'],
      },
    },
  },
}
```

### Utility Classes

#### Layout
```tsx
// Container
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

// Grid
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

// Flexbox
<div className="flex items-center justify-between">
```

#### Spacing
```tsx
// Padding
className="p-4 px-6 py-8"

// Margin
className="m-4 mx-auto my-8"

// Gap
className="space-y-4 gap-6"
```

#### Typography
```tsx
// Text size
className="text-sm text-base text-lg text-xl text-2xl"

// Font weight
className="font-normal font-medium font-semibold font-bold"

// Text color
className="text-foreground text-muted-foreground text-primary"
```

#### Colors
```tsx
// Background
className="bg-background bg-card bg-primary bg-accent"

// Text
className="text-foreground text-primary text-accent"

// Border
className="border border-primary border-accent"
```

## CSS Variables

### Theme Colors

Defined in `app/globals.css`:

```css
:root {
  /* Primary Colors */
  --primary: 262 95% 35%;
  --primary-foreground: 0 0% 100%;
  
  /* Accent Colors */
  --accent: 340 82% 52%;
  --accent-foreground: 0 0% 100%;
  
  /* Background */
  --background: 0 0% 100%;
  --foreground: 222.2 84% 4.9%;
  
  /* Card */
  --card: 0 0% 100%;
  --card-foreground: 222.2 84% 4.9%;
  
  /* Muted */
  --muted: 210 40% 96.1%;
  --muted-foreground: 215.4 16.3% 46.9%;
  
  /* Border */
  --border: 214.3 31.8% 91.4%;
  --input: 214.3 31.8% 91.4%;
  --ring: 262 95% 35%;
}

.dark {
  /* Dark mode overrides */
  --background: 222.2 84% 4.9%;
  --foreground: 210 40% 98%;
  /* ... */
}
```

### Using CSS Variables

```tsx
// In Tailwind classes
className="bg-primary text-primary-foreground"

// In custom CSS
.custom-element {
  background-color: hsl(var(--primary));
  color: hsl(var(--primary-foreground));
}
```

## Typography

### Font System

Three font families configured:

```typescript
// Sans-serif (Primary)
const fontSans = Exo({ 
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
})

// Serif (Headings)
const fontSerif = Source_Serif_4({ 
  subsets: ['latin'],
  variable: '--font-serif',
  display: 'swap',
})

// Monospace (Code)
const fontMono = IBM_Plex_Mono({ 
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
})
```

### Typography Scale

```tsx
// Headings
<h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
<h2 className="text-3xl md:text-4xl font-bold">
<h3 className="text-2xl md:text-3xl font-semibold">
<h4 className="text-xl md:text-2xl font-semibold">

// Body text
<p className="text-base text-muted-foreground">
<p className="text-lg leading-relaxed">

// Small text
<span className="text-sm text-muted-foreground">
<span className="text-xs">
```

## Component Styling

### Shadcn/ui Components

Pre-styled components in `components/ui/`:

```tsx
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"

// Usage
<Button variant="default" size="lg">
  Click Me
</Button>

<Card className="rounded-lg shadow-sm">
  <CardHeader>
    <CardTitle>Title</CardTitle>
  </CardHeader>
  <CardContent>
    Content
  </CardContent>
</Card>
```

### Button Variants

```tsx
// Variants
<Button variant="default">Default</Button>
<Button variant="destructive">Destructive</Button>
<Button variant="outline">Outline</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="ghost">Ghost</Button>
<Button variant="link">Link</Button>

// Sizes
<Button size="default">Default</Button>
<Button size="sm">Small</Button>
<Button size="lg">Large</Button>
<Button size="icon">Icon</Button>
```

### Custom Component Styling

```tsx
// Using cn utility for conditional classes
import { cn } from "@/lib/utils"

function Component({ className, variant }) {
  return (
    <div className={cn(
      "base-classes",
      variant === "primary" && "primary-classes",
      variant === "secondary" && "secondary-classes",
      className
    )}>
      Content
    </div>
  )
}
```

## Responsive Design

### Breakpoints

```tsx
// Mobile first approach
className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl"

// Tailwind breakpoints:
// sm: 640px
// md: 768px
// lg: 1024px
// xl: 1280px
// 2xl: 1536px
```

### Responsive Patterns

```tsx
// Hide on mobile
<div className="hidden md:block">Desktop only</div>

// Show on mobile
<div className="block md:hidden">Mobile only</div>

// Responsive grid
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">

// Responsive flex
<div className="flex flex-col md:flex-row gap-4">
```

## Dark Mode

### Implementation

Using `next-themes` for dark mode:

```tsx
// Theme Provider (app/layout.tsx)
<ThemeProvider
  attribute="class"
  defaultTheme="light"
  enableSystem
  disableTransitionOnChange
>
  {children}
</ThemeProvider>

// Theme Toggle Component
import { useTheme } from "next-themes"

function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  
  return (
    <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
      Toggle Theme
    </button>
  )
}
```

### Dark Mode Styles

```tsx
// Automatic with CSS variables
className="bg-background text-foreground"

// Manual dark mode classes
className="bg-white dark:bg-gray-900 text-black dark:text-white"
```

## Animations

### Tailwind Animations

```tsx
// Built-in
className="animate-spin"
className="animate-pulse"
className="animate-bounce"

// Transitions
className="transition-all duration-300"
className="hover:scale-105 transition-transform"
```

### Custom Animations

Defined in `tailwind.config.ts`:

```typescript
animation: {
  'float-hero': 'float 6s ease-in-out infinite',
  'float-delayed': 'float 8s ease-in-out infinite',
  'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
}
```

Usage:
```tsx
<div className="animate-float-hero">Floating element</div>
```

## Special Effects

### Gradients

```tsx
// Background gradients
className="bg-gradient-to-r from-primary to-accent"
className="bg-gradient-to-br from-primary/20 to-accent/20"

// Text gradients
className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"
```

### Shadows

```tsx
// Box shadows
className="shadow-sm shadow-md shadow-lg shadow-xl shadow-2xl"

// Custom shadows
className="shadow-[0_0_15px_rgba(0,0,0,0.1)]"
```

### Backdrop Effects

```tsx
// Blur
className="backdrop-blur-sm backdrop-blur-md backdrop-blur-lg"

// Brightness
className="backdrop-brightness-50"

// Combined
className="bg-white/80 backdrop-blur-md"
```

## Grid Dots Background

Custom background pattern:

```css
.bg-grid-dots {
  background-image: 
    radial-gradient(circle, hsl(var(--muted-foreground) / 0.15) 1px, transparent 1px);
  background-size: 20px 20px;
}
```

Usage:
```tsx
<div className="bg-grid-dots">
  Content with dotted background
</div>
```

## Best Practices

### 1. Use Semantic Classes

```tsx
// Good
<div className="bg-card text-card-foreground">

// Avoid
<div className="bg-white text-black dark:bg-gray-900 dark:text-white">
```

### 2. Consistent Spacing

```tsx
// Use spacing scale
className="p-4 gap-6 space-y-8"

// Avoid arbitrary values
className="p-[13px] gap-[23px]"
```

### 3. Component Composition

```tsx
// Reusable styled components
function Card({ children, className }) {
  return (
    <div className={cn(
      "rounded-lg border bg-card text-card-foreground shadow-sm",
      className
    )}>
      {children}
    </div>
  )
}
```

### 4. Responsive First

```tsx
// Mobile first
className="text-sm md:text-base lg:text-lg"

// Not desktop first
className="text-lg md:text-base sm:text-sm"
```

### 5. Performance

```tsx
// Avoid inline styles
style={{ color: 'red' }} // Avoid

// Use Tailwind classes
className="text-red-500" // Preferred
```

## Accessibility

### Focus States

```tsx
className="focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
```

### Color Contrast

Ensure sufficient contrast:
- Text on background: 4.5:1 minimum
- Large text: 3:1 minimum
- Interactive elements: 3:1 minimum

### Screen Reader Only

```tsx
<span className="sr-only">Screen reader text</span>
```

## Tools & Resources

### Development Tools

- **Tailwind CSS IntelliSense** - VS Code extension
- **Tailwind Prettier Plugin** - Auto-sort classes
- **Chrome DevTools** - Inspect styles

### Resources

- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Shadcn/ui Components](https://ui.shadcn.com)
- [Color Palette Generator](https://uicolors.app)
- [Tailwind Cheat Sheet](https://nerdcave.com/tailwind-cheat-sheet)

## Troubleshooting

### Styles Not Applying

1. Check Tailwind content paths in config
2. Restart development server
3. Clear `.next` cache
4. Verify class names are correct

### Dark Mode Issues

1. Ensure ThemeProvider is wrapping app
2. Check CSS variable definitions
3. Use `dark:` prefix for dark mode classes
4. Test with theme toggle

### Custom Styles Not Working

1. Use `@layer` directives in globals.css
2. Ensure proper specificity
3. Check for conflicting Tailwind classes
4. Use `!important` sparingly with `!` prefix
