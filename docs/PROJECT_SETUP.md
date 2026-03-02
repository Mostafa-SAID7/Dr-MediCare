# Project Setup Guide

Complete guide to setting up the Dr. MediCare project for development.

## Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v18.17 or higher)
- **npm** (v9 or higher) or **yarn** (v1.22 or higher)
- **Git** (v2.30 or higher)
- A code editor (VS Code recommended)

## Installation Steps

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/Dr-MediCare.git
cd Dr-MediCare
```

### 2. Install Dependencies

Due to React 19 compatibility, use the legacy peer deps flag:

```bash
npm install --legacy-peer-deps
```

Or if using yarn:

```bash
yarn install
```

### 3. Environment Setup

Create a `.env.local` file in the root directory:

```bash
# App Configuration
NEXT_PUBLIC_APP_URL=http://localhost:3000
NEXT_PUBLIC_APP_NAME=MediCare

# API Configuration (if needed)
# NEXT_PUBLIC_API_URL=https://api.example.com
# API_SECRET_KEY=your-secret-key

# Database (if needed)
# DATABASE_URL=postgresql://user:password@localhost:5432/medicare

# Authentication (if needed)
# NEXTAUTH_URL=http://localhost:3000
# NEXTAUTH_SECRET=your-nextauth-secret

# Email Service (if needed)
# SMTP_HOST=smtp.example.com
# SMTP_PORT=587
# SMTP_USER=your-email@example.com
# SMTP_PASSWORD=your-password

# Payment Gateway (if needed)
# STRIPE_PUBLIC_KEY=pk_test_...
# STRIPE_SECRET_KEY=sk_test_...
```

### 4. Run Development Server

```bash
npm run dev
```

The application will be available at `http://localhost:3000`

## Development Workflow

### Available Scripts

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linting
npm run lint

# Fix linting issues
npm run lint:fix

# Type checking
npm run type-check
```

### Project Structure

```
Dr-MediCare/
├── app/              # Next.js App Router pages
├── components/       # React components
├── lib/             # Utility functions
├── data/            # Mock data
├── types/           # TypeScript types
├── public/          # Static assets
└── docs/            # Documentation
```

## IDE Setup

### VS Code Extensions (Recommended)

Install these extensions for the best development experience:

1. **ESLint** - Code linting
2. **Prettier** - Code formatting
3. **Tailwind CSS IntelliSense** - Tailwind autocomplete
4. **TypeScript Vue Plugin (Volar)** - TypeScript support
5. **GitLens** - Git integration
6. **Auto Rename Tag** - HTML tag renaming
7. **Path Intellisense** - Path autocomplete

### VS Code Settings

Create `.vscode/settings.json`:

```json
{
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  "typescript.tsdk": "node_modules/typescript/lib",
  "tailwindCSS.experimental.classRegex": [
    ["cn\\(([^)]*)\\)", "[\"'`]([^\"'`]*).*?[\"'`]"]
  ]
}
```

## Configuration Files

### TypeScript Configuration

The project uses strict TypeScript settings. See `tsconfig.json`:

```json
{
  "compilerOptions": {
    "target": "ES2020",
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve",
    "incremental": true,
    "plugins": [
      {
        "name": "next"
      }
    ],
    "paths": {
      "@/*": ["./*"]
    }
  }
}
```

### Tailwind Configuration

Tailwind is configured with custom theme colors. See `tailwind.config.ts`.

### Next.js Configuration

Performance optimizations are configured in `next.config.mjs`:
- Image optimization (AVIF/WebP)
- Bundle splitting
- SWC minification
- Modular imports

## Database Setup (Future)

When implementing a database:

### PostgreSQL

```bash
# Install PostgreSQL
# Create database
createdb medicare_dev

# Run migrations (when implemented)
npm run db:migrate

# Seed database (when implemented)
npm run db:seed
```

### Prisma (Recommended ORM)

```bash
# Install Prisma
npm install prisma @prisma/client --legacy-peer-deps

# Initialize Prisma
npx prisma init

# Generate Prisma Client
npx prisma generate

# Run migrations
npx prisma migrate dev
```

## Testing Setup (Future)

### Jest Configuration

```bash
# Install testing dependencies
npm install --save-dev jest @testing-library/react @testing-library/jest-dom --legacy-peer-deps

# Run tests
npm test

# Run tests with coverage
npm run test:coverage
```

### Cypress (E2E Testing)

```bash
# Install Cypress
npm install --save-dev cypress --legacy-peer-deps

# Open Cypress
npx cypress open

# Run Cypress tests
npm run test:e2e
```

## Troubleshooting

### Common Issues

#### 1. Peer Dependency Conflicts

**Error**: `ERESOLVE unable to resolve dependency tree`

**Solution**: Use `--legacy-peer-deps` flag:
```bash
npm install --legacy-peer-deps
```

#### 2. Port Already in Use

**Error**: `Port 3000 is already in use`

**Solution**: Kill the process or use a different port:
```bash
# Kill process on port 3000 (Windows)
netstat -ano | findstr :3000
taskkill /PID <PID> /F

# Use different port
PORT=3001 npm run dev
```

#### 3. Module Not Found

**Error**: `Cannot find module '@/components/...'`

**Solution**: Restart TypeScript server in VS Code:
- Press `Ctrl+Shift+P`
- Type "TypeScript: Restart TS Server"

#### 4. Tailwind Classes Not Working

**Solution**: 
1. Check `tailwind.config.ts` content paths
2. Restart development server
3. Clear `.next` cache: `rm -rf .next`

#### 5. Image Optimization Errors

**Error**: `Image optimization error`

**Solution**: Ensure images are in `public/` directory and paths start with `/`

### Build Issues

#### Production Build Fails

```bash
# Clear cache and rebuild
rm -rf .next
npm run build
```

#### Type Errors

```bash
# Run type checking
npm run type-check

# Fix common issues
npm run lint:fix
```

## Performance Optimization

### Development

- Use React DevTools for component profiling
- Enable source maps for debugging
- Use hot reload for faster development

### Production

- Analyze bundle size: `npm run build`
- Use Lighthouse for performance audits
- Monitor Core Web Vitals

## Git Workflow

### Branch Naming

- `feature/feature-name` - New features
- `fix/bug-name` - Bug fixes
- `docs/doc-name` - Documentation
- `refactor/refactor-name` - Code refactoring

### Commit Messages

Follow conventional commits:
```
feat: add new feature
fix: resolve bug
docs: update documentation
style: format code
refactor: restructure code
test: add tests
chore: update dependencies
```

## Deployment

See [DEPLOYMENT.md](./DEPLOYMENT.md) for detailed deployment instructions.

## Additional Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [TypeScript Documentation](https://www.typescriptlang.org/docs)
- [Shadcn/ui Documentation](https://ui.shadcn.com)

## Getting Help

- Check existing [Issues](https://github.com/your-username/Dr-MediCare/issues)
- Read the [FAQ](../app/faq/page.tsx)
- Join our community discussions
- Contact: support@medicare.com

## Next Steps

After setup:
1. Explore the codebase
2. Read [STRUCTURE.md](./STRUCTURE.md)
3. Check [CONTRIBUTING.md](./CONTRIBUTING.md)
4. Start developing!
