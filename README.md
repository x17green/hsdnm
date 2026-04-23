# HSDNM Platform - Complete UI Implementation

A comprehensive stateless UI implementation of the Henry Seriake Dickson National Movement (HSDNM) platform with both public website and membership portal.

## 📋 Project Structure

```
app/
├── page.tsx                    # Landing page
├── about/page.tsx              # About page
├── news/page.tsx               # News listing
├── events/page.tsx             # Events listing
├── contact/page.tsx            # Contact form
└── portal/
    ├── login/page.tsx          # Member login
    ├── register/page.tsx       # Multi-step registration
    ├── dashboard/page.tsx      # Member dashboard
    ├── profile/page.tsx        # Profile management
    ├── member-card/page.tsx    # Digital member card
    ├── events/page.tsx         # Member's events
    ├── reports/page.tsx        # Reports management
    ├── analytics/page.tsx      # Analytics & metrics
    ├── coordinator/page.tsx    # Coordinator dashboard
    └── settings/page.tsx       # Account settings

components/
├── Header.tsx                  # Site header navigation
├── Footer.tsx                  # Site footer
└── PortalSidebar.tsx          # Portal navigation

data/
├── types.ts                    # TypeScript interfaces
├── members.ts                  # Sample member data
├── news-and-events.ts         # News and events data
└── other.ts                    # Announcements, SMS templates, stats
```

## 🎨 Design System

### Color Palette
- **Primary**: Navy blue (`oklch(0.25 0.08 250)`)
- **Secondary**: Teal (`oklch(0.5 0.12 200)`)
- **Accent**: Bright teal (`oklch(0.55 0.15 200)`)
- **Neutral**: Gray scale from white to near-black

### Typography
- **Sans-serif**: Geist (headlines & body)
- **Mono**: Geist Mono (code & special text)

## 📊 Data Structure

### Seed Data
All data is stateless and imported from `/data` folder:
- **Members**: 4 sample members with various tiers
- **Coordinators**: 3 regional coordinators with metrics
- **News**: 5 articles with categories
- **Events**: 6 events (upcoming & past)
- **Volunteers**: 3 volunteer profiles
- **Dashboard Stats**: 50,234 total members, 285 coordinators

## 🌐 Public Website Features

### Landing Page (`/`)
- Hero section with CTA
- Feature highlights
- Statistics showcase
- Call-to-action section

### About Page (`/about`)
- Mission & vision statements
- Core values (6 values)
- Leadership team (4 leaders)
- Member CTA

### News Page (`/news`)
- Featured article highlight
- Recent news grid
- Article cards with metadata
- Newsletter subscription

### Events Page (`/events`)
- Upcoming events (5 displayed)
- Past events archive
- Event details (date, time, location, registration)
- Event type badges

### Contact Page (`/contact`)
- Contact form (name, email, topic, message)
- Office contact information
- Regional offices (4 regions)
- Office hours

## 🔐 Portal Features

### Authentication
- **Login** (`/portal/login`): Email & password with demo credentials
- **Register** (`/portal/register`): 3-step registration (personal info → NIN/location → security)

### Member Features
- **Dashboard** (`/portal/dashboard`): Quick stats, upcoming events, news feed
- **Profile** (`/portal/profile`): Edit profile with location info, view account details
- **Member Card** (`/portal/member-card`): Digital membership card with benefits
- **Events** (`/portal/events`): Registered events with management options
- **Settings** (`/portal/settings`): Notifications, privacy, security preferences

### Coordinator Features
- **Coordinator Dashboard** (`/portal/coordinator`): Member metrics, performance indicators, quick actions
- **Analytics** (`/portal/analytics`): Activity trends, engagement breakdown, recent activity
- **Reports** (`/portal/reports`): Report submission and tracking

## 🧩 Components

### Header
- Responsive navigation menu
- Mobile hamburger menu
- Auth links (Sign In / Join Us)
- Logo and branding

### Footer
- Brand info
- Quick links
- Portal links
- Regional contact information
- Legal links

### PortalSidebar
- Collapsible navigation
- Active route highlighting
- User profile section
- Mobile responsive

## 📱 Responsive Design

- **Mobile-first** approach
- **Breakpoints**: md (768px), lg (1024px)
- **Flexible grids**: Grid-based layouts with gap spacing
- **Touch-friendly**: Adequate spacing and button sizes

## 🎯 Key Features

### Stateless Data
- All data imported from JSON/TypeScript files
- Mock data with realistic values
- Easy to replace with API calls

### Multi-level Roles
- Members (basic access)
- LGA Coordinators (250+ members)
- State Coordinators (1200+ members)
- Regional Coordinators (5000+ members)
- Super Admin (system administrator)

### Real-world Workflows
- Multi-step registration process
- Profile management and editing
- Event registration and tracking
- Report submission system
- Analytics and metrics dashboard

## 🚀 Getting Started

1. **Install dependencies**: `pnpm install`
2. **Run dev server**: `pnpm dev`
3. **View in browser**: http://localhost:3000

### Demo Credentials
- **Email**: amara.okoro@hsdnm.ng
- **Password**: demo

## 🔄 Customization

### Adding More Data
Edit files in `/data/`:
- `members.ts` - Add/modify member profiles
- `news-and-events.ts` - Add news articles and events
- `other.ts` - Add announcements and volunteers

### Styling
- Colors: Edit `app/globals.css` CSS variables
- Components: Create new components in `components/`
- Pages: Add new pages in `app/` (file-based routing)

## 📦 Dependencies

- **Next.js 16**: React framework with App Router
- **TypeScript**: Type safety
- **Tailwind CSS v4**: Utility-first styling
- **Lucide Icons**: Icon library
- **HeroUI (v3 Beta)**: State-of-the-art React Aria components with HSDNM branding.

## 🎓 Architecture Patterns

- **Component composition**: Reusable components
- **Data separation**: Centralized data in `/data`
- **Type safety**: Full TypeScript coverage
- **Layout nesting**: Shared layout components
- **Responsive design**: Mobile-first with Tailwind

This is a comprehensive, production-ready UI that's ready for backend integration!
