# Cozied — Beauty & Wellness Top 10 Lists

A modern, beautifully designed affiliate site for beauty and wellness product guides. Built with Next.js, TypeScript, and Tailwind CSS.

## Features

- **Homepage** with featured guides, trending products, and deal of the day
- **Today Strip** carousel with editor picks
- **Hero Section** with featured guide and sub-stories
- **Deal of the Day** with countdown timer
- **ICYMI Section** with weekend recap
- **For You Grid** with recommendations
- **Responsive Design** for mobile, tablet, and desktop
- **Affiliate Link Integration** with Amazon Associates
- **High-Fidelity Design** based on professional design handoff

## Quick Start

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the site.

## Project Structure

```
cozied/
├── app/                    # Next.js App Router
├── components/            # React components
│   ├── Header.tsx
│   ├── TodayStrip.tsx
│   ├── MainGrid.tsx
│   ├── Footer.tsx
│   └── sections/          # Page sections
├── lib/
│   ├── types.ts           # TypeScript types
│   └── data.ts            # Sample data
└── public/                # Static assets
```

## Tech Stack

- **Framework**: Next.js 14+ with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS + Custom CSS
- **Fonts**: Google Fonts (Newsreader, DM Sans, JetBrains Mono)

## Design System

Colors: Cream, Paper, Ink, Sage (accent), with muted natural tones

Typography: 
- Headlines: Newsreader (serif)
- Body: DM Sans (sans-serif)
- Metadata: JetBrains Mono (monospace)

## Building & Deployment

```bash
npm run build
npm run start
```

Deploy to Vercel or any Node.js hosting.

## Features Coming Soon

- Dynamic content from CMS
- User authentication
- Search functionality
- Category pages
- Guide detail pages
- Reader reviews

## License

© 2026 Cozied. All rights reserved.
