# User Operations WorkspaceA modern, production-ready Next.js application for managing and viewing user operations, posts, and todos.## Features✨ **Core Features**- **Users List Page** - Browse all users with responsive desktop/mobile layout- **Search & Filter** - Search users by name or email- **Sorting** - Sort users by name or email in ascending/descending order- **User Activity Signals** - View total posts, completed todos, and pending todos- **User Detail Page** - Comprehensive user information with posts and todos- **Responsive Design** - Mobile-first responsive UI with Tailwind CSS- **Loading States** - Skeleton loading for better UX- **Error Handling** - Graceful error and empty states- **URL Persistence** - Search and filter state preserved in URL query params## Tech Stack- **Framework**: Next.js 16+ (App Router)- **Language**: TypeScript 5- **Styling**: Tailwind CSS 4- **State Management**: TanStack Query (React Query)- **Testing**: Jest + React Testing Library- **API**: JSONPlaceholder (mock data)## Project Structure```src/├── app/                    # Next.js App Router│   ├── users/              # Users list page│   └── users/[id]/         # User detail page├── components/             # Reusable UI components│   ├── UserTable.tsx       # Desktop table view│   ├── UserCard.tsx        # Mobile card view│   ├── UserFilters.tsx     # Search and sort controls
│   ├── UserDetailContent.tsx
│   ├── EmptyState.tsx
│   ├── ErrorState.tsx
│   └── Skeleton.tsx        # Loading skeletons
├── hooks/                  # Custom React hooks
│   └── useApi.ts           # React Query hooks
├── lib/                    # Utility functions
│   └── users.ts            # Filter and sort utilities
├── services/               # API services
│   └── api.ts              # Data fetching functions
├── providers/              # React context providers
│   └── QueryProvider.tsx   # TanStack Query provider
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

1. Navigate to the project:
```bash
cd mampu-io-project
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Environment Variables

The project uses environment variables for configuration. Copy `.env.example` to `.env.local` and update if needed:

```bash
cp .env.example .env.local
```

**Available Variables:**
- `NEXT_PUBLIC_API_BASE` - Base URL for the API (default: `https://jsonplaceholder.typicode.com`)

**Note:** Variables prefixed with `NEXT_PUBLIC_` are exposed to the browser.

## Usage

### Pages

**Home Page** (`/`)
- Welcome page with quick navigation to users list

**Users List** (`/users`)
- View all users in a responsive layout
- Desktop: Table view with all user details
- Mobile: Card view with essential information
- Search by name or email
- Sort by name or email (ascending/descending)
- View activity signals (posts, completed todos, pending todos)

**User Detail** (`/users/[id]`)
- Comprehensive user information
- User address and company details
- All posts authored by the user
- All todos with completion status
- Activity signals summary

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

## Architecture Decisions

### Server Components
- Root layout uses server components
- User detail page uses server-side data fetching for SEO optimization
- No hydration mismatch issues

### Client Components
- User list page is a client component for interactive filtering/sorting
- Filter controls use `useSearchParams` and `useRouter` for URL state management
- Mobile detection happens client-side

### Data Fetching
- Server components fetch data at build time (revalidated hourly)
- Client components use React Query for caching and synchronization
- Optimistic UI updates with loading skeletons

### Styling
- Utility-first Tailwind CSS approach
- Dark mode support with `dark:` prefix
- Responsive design with Tailwind breakpoints
- Custom animations for loading states

### State Management
- URL query params for search/filter persistence
- React Query for client-side data caching
- No Redux/Zustand needed for this application scope

## Performance Optimizations

- **Next.js Image Optimization** - Ready for image loading
- **Code Splitting** - Automatic route-based splitting
- **Caching** - Server-side revalidation every 1 hour
- **React Query** - Client-side caching with stale-time 5 minutes
- **Lazy Loading** - Skeleton loaders for better perceived performance
- **Responsive Images** - Tailwind CSS responsive utilities

## Accessibility

- Semantic HTML structure
- ARIA labels for interactive elements
- Keyboard navigation support
- Color contrast meets WCAG standards
- Focus management in forms

## Testing

The project includes comprehensive tests:

**Unit Tests**
- User filtering and sorting logic
- Utility function testing

**Component Tests**
- EmptyState component rendering
- Error handling components

**Integration Tests Ready**
- User list page with filters and sorting
- User detail page data loading

Run tests:
```bash
npm run test
```

## Browser Support

- Chrome/Edge: Latest 2 versions
- Firefox: Latest 2 versions
- Safari: Latest 2 versions
- Mobile browsers: iOS Safari 12+, Chrome Android

## Future Enhancements

- [ ] Add user edit/delete functionality
- [ ] Implement pagination for large user lists
- [ ] Add advanced filtering (by city, company)
- [ ] User profile pictures from external API
- [ ] Comments on posts
- [ ] Export user data to CSV/PDF
- [ ] Dark mode toggle
- [ ] Internationalization (i18n)
- [ ] Authentication & authorization

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

## License

MIT

## Support

For issues or questions, please create an issue in the repository.

## Author

Built as a take-home test project following production best practices and modern Next.js patterns.
