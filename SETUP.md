# Setup Instructions

## Update GitHub Repository URL

Before deploying, update the GitHub link in `src/App.tsx`:

```tsx
// Line 108 - Replace with your actual repository URL
href="https://github.com/yourusername/who-to-bother"
```

## Features Implemented

### ✅ Search Filter Bar
- Real-time text search
- Searches by name and Twitter handle
- Clear button to reset search
- Fully accessible with ARIA labels

### ✅ Results Count
- Shows total number of experts matching filters
- Updates in real-time
- Shows "No results found" message when filters return nothing
- Uses `aria-live="polite"` for screen reader announcements

### ✅ URL State Management
- Filter states persist in URL parameters
- Shareable URLs like: `?category=payments&company=Square&search=Sarah`
- URL updates automatically when filters change
- Initial state loaded from URL on page load

### ✅ View on GitHub Link
- Prominently displayed in header
- Accessible with proper ARIA labels
- Styled to match Block branding

## URL Parameters

- `category` - Category ID (e.g., "payments", "developer", "official")
- `company` - Company name (e.g., "Square", "Cash App", "Tidal")
- `search` - Search query string

Example: `http://localhost:5173/?category=developer&company=Square&search=api`

## Performance Optimizations

- `useMemo` for filter function to prevent unnecessary re-renders
- `useMemo` for results count calculation
- Efficient filtering that only processes visible experts

