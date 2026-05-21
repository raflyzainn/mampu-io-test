# User Operations Workspace

A modern, production-ready Next.js application for managing and viewing user operations, posts, and todos.

## Features

**Core Features**
- Users List Page - Browse all users with responsive desktop/mobile layout
- Search and Filter - Search users by name or email
- Sorting - Sort users by name or email in ascending/descending order
- User Activity Signals - View total posts, completed todos, and pending todos
- User Detail Page - Comprehensive user information with posts and todos
- Responsive Design - Mobile-first responsive UI with Tailwind CSS
- Loading States - Skeleton loading for better UX
- Error Handling - Graceful error and empty states
- URL Persistence - Search and filter state preserved in URL query params

## Tech Stack

- Framework: Next.js 16+ (App Router)
- Language: TypeScript 5
- Styling: Tailwind CSS 4
- State Management: TanStack Query (React Query)
- Testing: Jest + React Testing Library
- API: JSONPlaceholder (mock data)

## Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── users/              # Users list page
│   ├── users/[id]/         # User detail page
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Home page
│   ├── not-found.tsx       # 404 page
│   └── error.tsx           # Error boundary
├── components/             # Reusable UI components
│   ├── UserTable.tsx
│   ├── UserCard.tsx
│   ├── UserFilters.tsx
│   ├── UserDetailContent.tsx
│   ├── EmptyState.tsx
│   ├── ErrorState.tsx
│   └── Skeleton.tsx
├── hooks/                  # Custom React hooks
│   └── useApi.ts
├── lib/                    # Utility functions
│   └── users.ts
├── services/               # API services
│   └── api.ts
├── providers/              # React context providers
│   └── QueryProvider.tsx
├── types/                  # TypeScript types
│   └── index.ts
└── tests/                  # Test files
    ├── components/
    └── lib/
```

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. Clone or navigate to the project:
```bash
cd mampu-io-project
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp .env.example .env.local
```

4. Run the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

## Environment Variables

Create a `.env.local` file based on `.env.example`:

```
NEXT_PUBLIC_API_BASE=https://jsonplaceholder.typicode.com
```

- `NEXT_PUBLIC_API_BASE` - Base URL for the API (default: jsonplaceholder.typicode.com)

Note: Variables prefixed with `NEXT_PUBLIC_` are exposed to the browser.

## Usage

### Pages

**Home Page** (`/`)
- Welcome page with quick navigation to users list

**Users List** (`/users`)
- View all users in a responsive layout
- Desktop: Table view with all user details
- Mobile: Card view with essential information
- Search by name or email in real-time
- Sort by name or email (ascending/descending)
- View activity signals (posts, completed todos, pending todos)
- Navigation back to home page

**User Detail** (`/users/[id]`)
- Comprehensive user information
- User address and company details
- All posts authored by the user
- All todos with completion status
- Activity signals summary
- Navigation back to users list

### Features in Detail

**Search**
- Real-time search by user name or email
- Case-insensitive matching
- Results persisted in URL query params

**Sorting**
- Sort by name or email
- Ascending or descending order
- Default: Sort by name (ascending)
- Sort state preserved in URL

**Activity Signals**
- Total Posts: Count of all posts by user
- Completed Todos: Count of completed todos
- Pending Todos: Count of incomplete todos

**Responsive Design**
- Mobile-first approach
- Breakpoint at 768px (md)
- Mobile: Card-based layout
- Desktop: Table-based layout

**Loading States**
- Skeleton loading on users list page
- Skeleton loading on user detail page
- Smooth transitions during data fetching
- React Suspense for streaming

## API Endpoints

The application fetches data from JSONPlaceholder:

- `GET /users` - All users
- `GET /users/:id` - Single user
- `GET /posts?userId=:id` - User's posts
- `GET /todos?userId=:id` - User's todos

## Development

### Running Tests

```bash
npm run test
```

Run tests in watch mode:
```bash
npm run test:watch
```

### Building for Production

```bash
npm run build
npm start
```

### Linting

```bash
npm run lint
```

### Available Commands

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm start` | Start production server |
| `npm run test` | Run tests once |
| `npm run test:watch` | Run tests in watch mode |
| `npm run lint` | Run ESLint |

## Architecture

### Server Components
- Root layout: No hydration issues, cleaner code
- User detail page: Server-side rendering for better SEO
- Data fetching: Happens at build time, revalidated hourly

### Client Components
- Users list page: Interactive filtering and sorting
- Filters: Real-time search with URL query params
- Activity signals: Dynamic data display

### Data Management
- React Query: Client-side caching (5-min stale time)
- URL params: Persistent state for search/filters
- API: JSONPlaceholder (mock data)

### Styling
- Tailwind CSS: Utility-first approach
- Dark mode: Built-in with dark: prefix
- Responsive: Mobile-first design

## Performance

- Code splitting by route
- Skeleton loading for better perceived performance
- Server-side caching: 1 hour revalidation
- Client-side caching: 5 minute stale-time, 10 minute GC time
- Optimized bundle size

## Accessibility

- Semantic HTML structure
- ARIA labels on interactive elements
- Keyboard navigation support
- Color contrast compliance (WCAG)
- Focus management in forms

## Testing

The project includes comprehensive tests:

**Unit Tests**
- User filtering and sorting logic
- Utility function testing

**Component Tests**
- EmptyState component rendering
- Error handling components

Run tests:
```bash
npm run test
```

## Browser Support

- Chrome/Edge: Latest 2 versions
- Firefox: Latest 2 versions
- Safari: Latest 2 versions
- Mobile browsers: iOS Safari 12+, Chrome Android

## Troubleshooting

### Build Issues
1. Clear `.next` folder: `rm -rf .next`
2. Clear node_modules: `rm -rf node_modules`
3. Reinstall: `npm install`

### Port 3000 Already in Use
```bash
npm run dev -- -p 3001
```

### TypeScript Errors
- Ensure all imports use `@/` alias correctly
- Check `tsconfig.json` paths configuration
- Clear TypeScript cache: `rm -rf .next/types`

## Deployment

The project is ready to deploy to:
- Vercel (recommended for Next.js)
- Netlify
- Docker
- Node.js servers

### Build Output
```
Route (app)
├── ○ /                    (Static)
├── ○ /_not-found          (Static)
├── ○ /users               (Static)
└── ƒ /users/[id]          (Dynamic)
```

## Future Enhancements

- Pagination for large user lists
- Advanced filtering (by city, company)
- User edit/delete functionality
- Comments on posts
- Export user data to CSV/PDF
- Dark mode toggle
- Internationalization (i18n)
- Authentication & authorization

## License

MIT

## Support

For issues or questions, please create an issue in the repository.

## Author

Built as a take-home test project following production best practices and modern Next.js patterns.
