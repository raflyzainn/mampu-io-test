# Quick Start Guide

## 🚀 Get Started in 5 Minutes

### Step 1: Install Dependencies
```bash
npm install
```

### Step 2: Run Development Server
```bash
npm run dev
```

### Step 3: Open in Browser
Navigate to [http://localhost:3000](http://localhost:3000)

## 📍 Key Pages

| URL | Description |
|-----|-------------|
| `/` | Home page with navigation |
| `/users` | Users list with search/sort |
| `/users/1` | User detail page (example: user ID 1) |

## 🎯 Try These Actions

### 1. Search Users
- Go to `/users`
- Type "john" in the search box
- See results filtered in real-time

### 2. Sort Users
- Click "Sort by" dropdown
- Select "Name" or "Email"
- Choose "Ascending" or "Descending"

### 3. View User Details
- Click "View" button on any user
- See all posts and todos
- Check back button at top

### 4. Test Responsive Design
- Open DevTools (F12)
- Toggle device toolbar (Ctrl+Shift+M)
- See card view on mobile, table on desktop

## 🧪 Running Tests

```bash
npm run test          # Run all tests once
npm run test:watch    # Run tests with watch mode
```

## 🏗️ Building for Production

```bash
npm run build         # Build optimized production bundle
npm start             # Start production server
```

## 📝 Sample User IDs

The API has 10 users with IDs: 1-10

Try viewing:
- `/users/1` - Leanne Graham
- `/users/5` - Chelsey Dietrich
- `/users/10` - Clementina DuBucci

## 🔧 Development Tips

### Hot Reload
- Code changes auto-reload in browser
- No need to restart server

### Debug Mode
- Open DevTools (F12)
- Check Console for errors
- Check Network tab for API calls

### Clear Cache
```bash
# Clear Next.js cache
rm -rf .next

# Reinstall dependencies
rm -rf node_modules
npm install
```

## 🎨 Customize Styling

- Edit component files in `src/components/`
- Styles use Tailwind CSS utility classes
- Dark mode: Add `dark:` prefix to any class

Example:
```jsx
<div className="bg-white dark:bg-gray-800">
  Light and dark background
</div>
```

## 📚 Project Structure

```
src/
├── app/               # Pages
├── components/        # UI Components
├── hooks/            # React Hooks
├── lib/              # Utilities
├── services/         # API Services
├── providers/        # React Providers
├── types/            # TypeScript Types
└── tests/            # Tests
```

## ❓ Troubleshooting

### Port 3000 In Use?
```bash
npm run dev -- -p 3001
```

### TypeScript Errors?
```bash
rm -rf .next
npm run build
```

### Dependencies Issue?
```bash
rm -rf node_modules package-lock.json
npm install
```

## 📖 Learn More

- [Next.js Docs](https://nextjs.org/docs)
- [React Docs](https://react.dev)
- [Tailwind CSS](https://tailwindcss.com)
- [React Query Docs](https://tanstack.com/query/latest)

## 🎓 Code Examples

### Searching
Search is real-time and case-insensitive:
- Search for "john" → finds "John Doe", "john@example.com"
- Search for "NEW YORK" → finds users from New York

### Sorting
Results update immediately:
- Sort by Name (A-Z) → Ascending
- Sort by Name (Z-A) → Descending
- Sort by Email works similarly

### Activity Signals
Each user has:
- **Posts**: Total number of blog posts
- **Done**: Completed todos
- **Pending**: Incomplete todos

### User Details
View comprehensive information:
- Basic info (username, email, phone, website)
- Address (street, city, coordinates)
- Company (name, catch phrase, BS)
- All posts with titles and bodies
- All todos with completion status

## 🚀 Next Steps

1. Explore the code in `src/components/`
2. Run tests: `npm run test`
3. Build for production: `npm run build`
4. Deploy to Vercel, Netlify, or your server

Enjoy! 🎉
