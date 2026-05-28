# Royal Global Apparel

A premium women's fashion brand website for Royal Global Apparel, located at Winners Plaza, Main Market Onitsha, Anambra State, Nigeria.

## Features

- **Hero Section** — Full-screen landing with brand logo and call-to-action buttons
- **Product Catalog** — Showcases fashion products with WhatsApp ordering
- **About Section** — Brand story, values, and why to shop with us
- **Testimonials Carousel** — Auto-rotating reviews from customers across Nigerian tribes (Igbo, Yoruba, Hausa, Efik, Ijaw, Fulani, Ibibio, Tiv)
- **Order Form** — Customers can fill out an order form that goes to the store email
- **Password-Protected Admin Dashboard** — Manage products (add/delete) — only accessible with admin password
- **Mobile Responsive** — Works on all devices

## Tech Stack

- **Framework**: TanStack Start (React 19 + SSR)
- **Styling**: Tailwind CSS v4
- **Storage**: Netlify Blobs (product persistence)
- **Forms**: Netlify Forms (order submissions → email)
- **Routing**: TanStack Router (file-based)
- **Deployment**: Netlify

## Running Locally

```bash
npm install
npm run dev
```

The dev server starts on port 3000 (or 8888 via Netlify CLI).

## Admin Access

Navigate to `/admin` and enter the admin password (default: `Miracle12345`).

To change the password, set the `ADMIN_PASSWORD` environment variable in the Netlify dashboard.

## Order Notifications

Order form submissions are handled by Netlify Forms. To receive email notifications:
1. Go to Netlify Dashboard → Forms → "order"
2. Click "Form notifications" and add your email (miraclenaya6@gmail.com)

## Contact

- Shop No C1 & C18, Winners Plaza, Biafra Market, Main Market Onitsha, Anambra State
- WhatsApp: 08061265633 / 09037325861
- Email: miraclenaya6@gmail.com
