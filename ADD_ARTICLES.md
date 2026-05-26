# How to Add New Articles/Guides to Cozied

This guide explains how to add new beauty & wellness articles to your Cozied website.

## Quick Start: Add a New Guide

All guides are stored in `lib/data.ts`. Here's how to add one:

### 1. Add to the `guides` array in `lib/data.ts`

```typescript
{
  slug: 'your-guide-slug',              // URL-friendly name (use kebab-case)
  title: 'Your Guide Title Here',       // The main headline
  category: 'skincare',                 // Category: skincare, hair, wellness, sleep, body, self-care, home
  subCategory: 'Optional Sub-Category', // e.g., "Serums & Oils"
  heroImage: { 
    src: '/images/your-image.jpg',     // Hero image (replace with real image path)
    alt: 'Alt text for image',
    tone: 'clay'                       // clay, sage, sand, rose, mauve, slate, or ink
  },
  readMinutes: 8,                       // Estimated reading time
  publishedAt: '2026-05-26',           // ISO date format
  updatedAt: '2026-05-26',             // Last update date
  author: authors['elara-wren'],       // Reference to author object
  rating: 4.8,                         // Star rating (0-5)
  reviewCount: 942,                    // Number of reviews (optional)
  picksTestedCount: 10,                // Number of items tested (optional, shows instead of reviewCount)
  excerpt: 'Brief description of what this guide covers...', // Shows on category pages
  picks: [
    {
      rank: 1,
      productTitle: 'Product Name',
      productImage: { src: '/images/product.jpg', alt: 'Product alt text' },
      affiliateUrl: 'https://amazon.com/s?k=product',
      priceFrom: 18,
      badge: 'editor-pick',  // Optional: 'editor-pick', 'best-value', or 'new'
    },
    // ... 9 more products for a "10 picks" guide
  ],
}
```

### 2. Example: Face Serums Guide

```typescript
{
  slug: '10-face-serums',
  title: '10 face serums that actually improve texture',
  category: 'skincare',
  subCategory: 'Serums & Essences',
  heroImage: { src: '/images/serums.jpg', alt: 'Face serums', tone: 'clay' },
  readMinutes: 9,
  publishedAt: '2026-05-27',
  updatedAt: '2026-05-27',
  author: authors['elara-wren'],
  rating: 4.9,
  reviewCount: 1205,
  excerpt: 'We tested every major serum formulation for effectiveness, texture, and value.',
  picks: [
    {
      rank: 1,
      productTitle: 'Hyaluronic Acid Serum',
      productImage: { src: '/images/hyaluronic.jpg', alt: 'Hyaluronic serum' },
      affiliateUrl: 'https://amazon.com/s?k=hyaluronic+acid+serum',
      priceFrom: 12,
      badge: 'best-value',
    },
    {
      rank: 2,
      productTitle: 'Niacinamide Serum',
      productImage: { src: '/images/niacinamide.jpg', alt: 'Niacinamide' },
      affiliateUrl: 'https://amazon.com/s?k=niacinamide+serum',
      priceFrom: 15,
    },
    // ... 8 more products
  ],
}
```

## What Happens After You Add a Guide?

**The website automatically:**
1. ✅ Creates a new page at `/guides/your-guide-slug`
2. ✅ Adds it to the category page at `/category/skincare`
3. ✅ Shows it on the homepage in relevant sections
4. ✅ Generates proper SEO metadata (title, description)

## Available Authors

You can use these pre-defined authors:

```typescript
authors['elara-wren']    // Elara Wren - Beauty editor
authors['maya-patel']    // Maya Patel - Wellness writer
authors['jordan-clark']  // Jordan Clark - Hair specialist
```

Or add a new author to the `authors` object:

```typescript
export const authors: Record<string, Author> = {
  'your-author': {
    slug: 'your-author',
    name: 'Your Name',
    bio: 'Your bio here',
    image: '/avatars/your-name.jpg',
  },
  // ... existing authors
};
```

## Categories

Available categories (use exact values):
- `'skincare'` - Skincare products
- `'hair'` - Hair care
- `'wellness'` - Wellness & health
- `'sleep'` - Sleep products
- `'body'` - Body care
- `'self-care'` - Self-care items
- `'home'` - Home products

## Product Badges

Optional badges for products:
- `'editor-pick'` - Our top recommendation
- `'best-value'` - Best value for money
- `'new'` - Newly tested or released
- Or leave `badge` undefined for no badge

## Image Tones

The hero image background colors:
- `'clay'` - Warm terracotta
- `'sage'` - Muted green
- `'sand'` - Warm beige
- `'rose'` - Soft pink
- `'mauve'` - Muted purple
- `'slate'` - Cool grey-green
- `'ink'` - Dark neutral

## Step-by-Step: Add a New Guide

1. **Open** `lib/data.ts`
2. **Find** the `guides` array
3. **Copy** an existing guide structure
4. **Update** all the fields:
   - slug (unique, kebab-case)
   - title
   - category
   - authors
   - publishedAt/updatedAt dates
   - picks array (add 10 products)
5. **Save** the file
6. **Commit** to git:
   ```bash
   git add .
   git commit -m "Add new guide: 10 face serums"
   git push
   ```
7. **Vercel** automatically rebuilds and deploys!

## Testing Locally

To see your changes before deploying:

```bash
npm run dev
```

Then visit:
- Homepage: http://localhost:3000
- New guide: http://localhost:3000/guides/your-guide-slug
- Category: http://localhost:3000/category/skincare

## Affiliate Links

Every product link must be an affiliate link:

```typescript
affiliateUrl: 'https://amazon.com/s?k=product+name'
```

**Best practices:**
- Use your Amazon Associates tag
- Append `?tag=YOUR_TAG` to the URL
- Test links work before publishing
- Use `rel="nofollow sponsored noopener"` (automatic in the code)

## Performance Tips

- Keep excerpt under 150 characters
- Use realistic prices (check Amazon)
- Keep product titles concise
- Use 4-5 keywords in title for SEO

## Bulk Editing

To modify many guides at once:

1. Open `lib/data.ts`
2. Use find-and-replace in your editor
3. Test changes with `npm run dev`
4. Commit and push

## Adding Authors

If you need a new author:

```typescript
export const authors: Record<string, Author> = {
  // ... existing
  'new-author-slug': {
    slug: 'new-author-slug',
    name: 'Author Full Name',
    bio: 'Author biography',
    image: '/avatars/author.jpg',
  },
};
```

Then use in a guide:
```typescript
author: authors['new-author-slug'],
```

## Common Mistakes to Avoid

❌ **Don't:**
- Use spaces in `slug` (use kebab-case)
- Forget to update `publishedAt` dates
- Leave `picks` array empty (should be 10 items)
- Use duplicate slugs
- Forget affiliate URLs

✅ **Do:**
- Keep slugs consistent and readable
- Use real, tested products
- Include descriptions/excerpts
- Test links before publishing
- Commit with clear messages

## Need Help?

The data structure follows these TypeScript types in `lib/types.ts`:

```typescript
type Guide = {
  slug: string
  title: string
  category: Category
  subCategory?: string
  heroImage: { src: string; alt: string; tone?: Tone }
  readMinutes: number
  publishedAt: string
  updatedAt: string
  author: Author
  rating: number
  reviewCount?: number
  picksTestedCount?: number
  picks: Pick[]
  excerpt?: string
}

type Pick = {
  rank: number
  productTitle: string
  productImage: { src: string; alt: string }
  affiliateUrl: string
  priceFrom: number
  badge?: Badge
}
```

---

**Happy publishing! 📝**
