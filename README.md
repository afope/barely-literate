# barely literate society 📚

> a modern book club platform that brings literature enthusiasts together through voting, reviews, and community meetups.

**status: work in progress** - actively being developed and enhanced.

## overview

barely literate society is a full-stack web application designed to foster a vibrant book club community. members can discover new reads, vote for quarterly book selections, share reviews, and connect with fellow book lovers through in-person and virtual meetups.

## ✨ features

### current implementation

- ✅ **user authentication** - secure sign-up and login with supabase auth
- ✅ **book voting system** - members vote for their favorite books with real-time updates
- ✅ **responsive design** - beautiful, modern UI built with tailwind css
- ✅ **protected routes** - secure user-specific pages and features
- ✅ **mobile-first navigation** - hamburger menu for seamless mobile experience
- ✅ **book categories** - fiction, non-fiction, and classics tabs
- ✅ **review cards** - member testimonials and book ratings

### coming soon

- 🔄 user profiles with reading preferences
- 🔄 event management for meetups and book discussions
- 🔄 book recommendation algorithm
- 🔄 discussion forums
- 🔄 reading progress tracking
- 🔄 book exchange marketplace

## 🛠️ tech stack

### frontend

- **next.js 14** - react framework with app router
- **typescript** - type-safe development
- **tailwind css** - utility-first styling
- **radix ui** - accessible component primitives
- **lucide react** - beautiful icon library
- **react hook form** - form validation
- **zod** - schema validation

### backend & database

- **supabase** - backend as a service
  - postgresql database
  - row level security (rls)
  - authentication
  - real-time capabilities

### tools & libraries

- **sonner** - toast notifications
- **class variance authority** - component variants
- **eslint** - code linting

## 🚀 getting started

### prerequisites

- node.js 18+ and npm
- supabase account and project

### installation

1. clone the repository

```bash
git clone https://github.com/yourusername/barely-literate.git
cd barely-literate
```

2. install dependencies

```bash
npm install
```

3. set up environment variables

```bash
cp .env.example .env.local
```

add your supabase credentials:

```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

4. run the development server

```bash
npm run dev
```

5. open [http://localhost:3000](http://localhost:3000)

## 📁 project structure

```
barely-literate/
├── src/
│   ├── app/              # Next.js app directory
│   │   ├── auth/         # Authentication pages
│   │   ├── profile/      # User profile page
│   │   └── page.tsx      # Home page
│   ├── components/       # React components
│   │   ├── auth/         # Auth-specific components
│   │   ├── ui/           # Reusable UI components
│   │   ├── book-voting-card.tsx
│   │   ├── nav.tsx
│   │   └── review-card.tsx
│   ├── contexts/         # React contexts
│   │   └── auth-context.tsx
│   └── lib/              # Utilities
│       └── supabase.ts
├── public/               # Static assets
└── README.md
```

## 🎨 key features implementation

### authentication flow

the app implements a complete authentication system using supabase:

- email/password authentication
- protected routes with middleware
- session management
- user context for global state

### book voting system

- real-time vote updates
- one vote per user per book
- vote persistence in supabase
- loading states and error handling

### responsive design

- mobile-first approach
- hamburger navigation menu
- touch-friendly interactions
- optimized layouts for all screen sizes

## 🔒 security

- row level security (rls) on database tables
- protected API routes
- secure password handling
- authentication middleware
- environment variable protection

## 🧪 development

```bash
# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linter
npm run lint
```

## 📝 database schema

### book_votes

- `id` (uuid, primary key)
- `user_id` (uuid, foreign key)
- `book_title` (text)
- `book_author` (text)
- `created_at` (timestamp)

### profiles

- `id` (uuid, primary key)
- `first_name` (text)
- `last_name` (text)
- `updated_at` (timestamp)

## 🤝🏿 contributing

this is currently a personal project in active development. contributions and suggestions are welcome!

## 📄 license

this project is open source and available under the [MIT license](LICENSE).

## 👩🏿‍💻 author

afọpẹ́fólúwa òjó

## 🙏🏿 acknowledgments

- book cover images from various sources
- design inspiration from modern book communities
- built with love for literature enthusiasts

---

**note:** this project is currently under active development. features and functionality may change as the project evolves.
