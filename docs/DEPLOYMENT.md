# Deployment Guide

Complete guide for deploying Dr. MediCare to various platforms.

## Table of Contents

- [Vercel Deployment](#vercel-deployment)
- [Netlify Deployment](#netlify-deployment)
- [AWS Deployment](#aws-deployment)
- [Docker Deployment](#docker-deployment)
- [Environment Variables](#environment-variables)
- [Pre-Deployment Checklist](#pre-deployment-checklist)
- [Post-Deployment](#post-deployment)

## Vercel Deployment (Recommended)

Vercel is the recommended platform as it's built by the Next.js team.

### Method 1: GitHub Integration (Recommended)

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Ready for deployment"
   git push origin main
   ```

2. **Connect to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "Add New Project"
   - Import your GitHub repository
   - Vercel will auto-detect Next.js

3. **Configure Build Settings**
   - Framework Preset: Next.js
   - Build Command: `npm run build`
   - Output Directory: `.next`
   - Install Command: `npm install --legacy-peer-deps`

4. **Add Environment Variables**
   - Go to Project Settings → Environment Variables
   - Add all required variables (see [Environment Variables](#environment-variables))

5. **Deploy**
   - Click "Deploy"
   - Wait for build to complete
   - Your site will be live at `your-project.vercel.app`

### Method 2: Vercel CLI

```bash
# Install Vercel CLI
npm install -g vercel

# Login to Vercel
vercel login

# Deploy to preview
vercel

# Deploy to production
vercel --prod
```

### Custom Domain

1. Go to Project Settings → Domains
2. Add your custom domain
3. Configure DNS records:
   ```
   Type: A
   Name: @
   Value: 76.76.21.21

   Type: CNAME
   Name: www
   Value: cname.vercel-dns.com
   ```

### Vercel Configuration

`vercel.json`:
```json
{
  "buildCommand": "npm run build",
  "devCommand": "npm run dev",
  "installCommand": "npm install --legacy-peer-deps",
  "framework": "nextjs",
  "regions": ["iad1"]
}
```

## Netlify Deployment

### Method 1: Git Integration

1. **Push to Git**
   ```bash
   git push origin main
   ```

2. **Connect to Netlify**
   - Go to [netlify.com](https://netlify.com)
   - Click "Add new site" → "Import an existing project"
   - Connect your Git repository

3. **Build Settings**
   ```
   Build command: npm run build
   Publish directory: .next
   ```

4. **Add Build Environment Variables**
   ```
   NODE_VERSION=18
   NPM_FLAGS=--legacy-peer-deps
   ```

### Method 2: Netlify CLI

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Login
netlify login

# Initialize
netlify init

# Deploy
netlify deploy --prod
```

### Netlify Configuration

`netlify.toml`:
```toml
[build]
  command = "npm run build"
  publish = ".next"

[build.environment]
  NODE_VERSION = "18"
  NPM_FLAGS = "--legacy-peer-deps"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

## AWS Deployment

### AWS Amplify

1. **Connect Repository**
   - Go to AWS Amplify Console
   - Click "New app" → "Host web app"
   - Connect your Git repository

2. **Build Settings**
   ```yaml
   version: 1
   frontend:
     phases:
       preBuild:
         commands:
           - npm install --legacy-peer-deps
       build:
         commands:
           - npm run build
     artifacts:
       baseDirectory: .next
       files:
         - '**/*'
     cache:
       paths:
         - node_modules/**/*
   ```

3. **Environment Variables**
   - Add in Amplify Console → Environment variables

### AWS EC2 (Manual)

1. **Launch EC2 Instance**
   - Ubuntu 22.04 LTS
   - t2.micro or larger
   - Configure security groups (ports 80, 443, 22)

2. **Connect and Setup**
   ```bash
   # SSH into instance
   ssh -i your-key.pem ubuntu@your-ip

   # Install Node.js
   curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
   sudo apt-get install -y nodejs

   # Install PM2
   sudo npm install -g pm2

   # Clone repository
   git clone your-repo-url
   cd Dr-MediCare

   # Install dependencies
   npm install --legacy-peer-deps

   # Build
   npm run build

   # Start with PM2
   pm2 start npm --name "medicare" -- start
   pm2 save
   pm2 startup
   ```

3. **Setup Nginx**
   ```bash
   sudo apt install nginx

   # Configure Nginx
   sudo nano /etc/nginx/sites-available/medicare
   ```

   ```nginx
   server {
       listen 80;
       server_name your-domain.com;

       location / {
           proxy_pass http://localhost:3000;
           proxy_http_version 1.1;
           proxy_set_header Upgrade $http_upgrade;
           proxy_set_header Connection 'upgrade';
           proxy_set_header Host $host;
           proxy_cache_bypass $http_upgrade;
       }
   }
   ```

   ```bash
   sudo ln -s /etc/nginx/sites-available/medicare /etc/nginx/sites-enabled/
   sudo nginx -t
   sudo systemctl restart nginx
   ```

4. **SSL with Let's Encrypt**
   ```bash
   sudo apt install certbot python3-certbot-nginx
   sudo certbot --nginx -d your-domain.com
   ```

## Docker Deployment

### Dockerfile

Create `Dockerfile`:
```dockerfile
FROM node:18-alpine AS base

# Install dependencies only when needed
FROM base AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app

COPY package*.json ./
RUN npm ci --legacy-peer-deps

# Rebuild the source code only when needed
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

ENV NEXT_TELEMETRY_DISABLED 1

RUN npm run build

# Production image
FROM base AS runner
WORKDIR /app

ENV NODE_ENV production
ENV NEXT_TELEMETRY_DISABLED 1

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000

ENV PORT 3000

CMD ["node", "server.js"]
```

### Docker Compose

`docker-compose.yml`:
```yaml
version: '3.8'

services:
  app:
    build: .
    ports:
      - "3000:3000"
    environment:
      - NODE_ENV=production
    restart: unless-stopped
```

### Build and Run

```bash
# Build image
docker build -t medicare-app .

# Run container
docker run -p 3000:3000 medicare-app

# Or use docker-compose
docker-compose up -d
```

## Environment Variables

### Required Variables

```bash
# App Configuration
NEXT_PUBLIC_APP_URL=https://your-domain.com
NEXT_PUBLIC_APP_NAME=MediCare

# API Configuration
NEXT_PUBLIC_API_URL=https://api.your-domain.com
API_SECRET_KEY=your-secret-key

# Database
DATABASE_URL=postgresql://user:password@host:5432/database

# Authentication
NEXTAUTH_URL=https://your-domain.com
NEXTAUTH_SECRET=your-nextauth-secret

# Email
SMTP_HOST=smtp.example.com
SMTP_PORT=587
SMTP_USER=your-email@example.com
SMTP_PASSWORD=your-password

# Payment
STRIPE_PUBLIC_KEY=pk_live_...
STRIPE_SECRET_KEY=sk_live_...
```

### Setting Environment Variables

#### Vercel
```bash
vercel env add VARIABLE_NAME
```

#### Netlify
```bash
netlify env:set VARIABLE_NAME value
```

#### Docker
```bash
docker run -e VARIABLE_NAME=value medicare-app
```

## Pre-Deployment Checklist

### Code Quality

- [ ] All tests passing
- [ ] No console errors
- [ ] No TypeScript errors
- [ ] Linting passes
- [ ] Code reviewed

### Performance

- [ ] Images optimized
- [ ] Bundle size checked
- [ ] Lighthouse score > 90
- [ ] Core Web Vitals passing
- [ ] Lazy loading implemented

### Security

- [ ] Environment variables secured
- [ ] API keys not exposed
- [ ] HTTPS enabled
- [ ] Security headers configured
- [ ] Dependencies updated

### SEO

- [ ] Meta tags configured
- [ ] Sitemap generated
- [ ] Robots.txt configured
- [ ] Open Graph tags added
- [ ] Google Analytics added

### Functionality

- [ ] All pages accessible
- [ ] Forms working
- [ ] Navigation working
- [ ] Mobile responsive
- [ ] Dark mode working

## Post-Deployment

### Monitoring

1. **Setup Analytics**
   - Google Analytics
   - Vercel Analytics
   - Custom monitoring

2. **Error Tracking**
   - Sentry
   - LogRocket
   - Custom error logging

3. **Performance Monitoring**
   - Lighthouse CI
   - Web Vitals
   - Vercel Speed Insights

### SEO Setup

1. **Google Search Console**
   - Verify ownership
   - Submit sitemap
   - Monitor indexing

2. **Google Analytics**
   - Add tracking code
   - Configure goals
   - Setup events

3. **Social Media**
   - Test Open Graph tags
   - Test Twitter cards
   - Verify sharing

### Maintenance

1. **Regular Updates**
   ```bash
   # Update dependencies
   npm update
   npm audit fix

   # Rebuild and redeploy
   npm run build
   vercel --prod
   ```

2. **Backup Strategy**
   - Database backups
   - Code repository
   - Environment variables

3. **Monitoring**
   - Uptime monitoring
   - Error tracking
   - Performance metrics

## Rollback Strategy

### Vercel

```bash
# List deployments
vercel ls

# Rollback to previous
vercel rollback [deployment-url]
```

### Git-based

```bash
# Revert to previous commit
git revert HEAD
git push origin main

# Or reset to specific commit
git reset --hard commit-hash
git push --force origin main
```

## Troubleshooting

### Build Failures

1. Check build logs
2. Verify environment variables
3. Test build locally
4. Check dependency versions

### Runtime Errors

1. Check application logs
2. Verify API endpoints
3. Check database connections
4. Review error tracking

### Performance Issues

1. Analyze bundle size
2. Check image optimization
3. Review API response times
4. Monitor server resources

## Support

For deployment issues:
- Check platform documentation
- Review error logs
- Contact support
- Community forums

---

Last Updated: March 2026
