# Admin Dashboard Documentation

## Overview
A secure admin dashboard built with Next.js 14, featuring JWT authentication and comprehensive enquiry management.

## Features

### 🔐 Authentication
- Secure JWT-based authentication
- Protected routes with automatic redirect
- Session management with cookies
- Token verification on each request

### 📊 Dashboard Features
- Real-time date and time display
- Server and database connection status monitoring
- Admin profile display (Name: ZEXO)
- Responsive sidebar navigation
- Beautiful gradient UI design

### 📧 Contact Enquiry Management
- View all contact enquiries
- Filter by status (New, Read, Replied)
- Search functionality
- Status management
- Detailed enquiry view modal
- Demo data included

### 📰 Newsletter Subscriber Management
- View all newsletter subscribers
- Filter by status (Active, Unsubscribed, Bounced)
- Search functionality
- Export to CSV functionality
- Subscriber management (update status, delete)
- Demo data included

## Access Credentials

**Admin Login:**
- Username: `admin`
- Password: `admin123`

## Routes

### Public Routes
- `/admin` - Admin login page

### Protected Routes (Requires Authentication)
- `/admin/dashboard` - Dashboard home
- `/admin/dashboard/contact-enquiry` - Contact enquiries page
- `/admin/dashboard/newsletter-enquiry` - Newsletter subscribers page

## API Endpoints

### Authentication APIs
- `POST /api/admin/login` - Authenticate admin user
- `POST /api/admin/verify` - Verify JWT token
- `GET /api/admin/status` - Get server/database connection status

## Technology Stack

- **Framework:** Next.js 14 (App Router)
- **Authentication:** JWT (jsonwebtoken)
- **Password Hashing:** bcryptjs
- **Cookie Management:** js-cookie
- **Styling:** Tailwind CSS
- **TypeScript:** Full type safety

## Security Features

1. **JWT Authentication**
   - 24-hour token expiration
   - Secure token verification
   - Automatic logout on token expiry

2. **Password Security**
   - Bcrypt password hashing
   - Environment variable configuration

3. **Protected Routes**
   - Automatic authentication check
   - Redirect to login if unauthenticated
   - Server-side token verification

## Environment Variables

Create a `.env.local` file in the root directory:

```env
JWT_SECRET=your-super-secret-jwt-key-change-this-in-production-min-32-characters
ADMIN_USERNAME=admin
```

⚠️ **Important:** Change the `JWT_SECRET` in production!

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Create `.env.local` file with required variables

3. Run development server:
```bash
npm run dev
```

4. Open [http://localhost:3000/admin](http://localhost:3000/admin)

5. Login with credentials:
   - Username: admin
   - Password: admin123

## Dashboard Layout

### Header Components
- **Date & Time:** Real-time clock display
- **Connection Status:** Server and database status indicators
- **Admin Profile:** Shows admin name (ZEXO) with avatar
- **Logout Button:** Sign out functionality

### Sidebar Navigation
- Contact Enquiry - Manage customer contact forms
- Newsletter Enquiry - Manage newsletter subscriptions
- System Status - Connection indicators at bottom

### Main Content Area
- Dynamic page content based on selected route
- Responsive design for all screen sizes
- Statistics cards with key metrics
- Interactive tables with search and filter

## Demo Data

The dashboard includes demo data for testing:

**Contact Enquiries (5 entries):**
- Various statuses (New, Read, Replied)
- Sample customer information
- Different enquiry types

**Newsletter Subscribers (8 entries):**
- Various statuses (Active, Unsubscribed, Bounced)
- Different subscription sources
- Sample email addresses

## Customization

### Adding New Admin Routes

1. Create new page in `/src/app/admin/dashboard/your-page/page.tsx`
2. Add route to sidebar in `/src/app/admin/dashboard/layout.tsx`
3. Add appropriate icon and styling

### Changing Admin Credentials

Update in `/src/lib/auth.ts`:
```typescript
const ADMIN_CREDENTIALS = {
  username: 'your-username',
  passwordHash: 'bcrypt-hashed-password'
};
```

### Styling

All components use Tailwind CSS. Modify classes in respective component files for customization.

## Production Deployment

Before deploying to production:

1. ✅ Change `JWT_SECRET` to a strong, random string
2. ✅ Update admin credentials
3. ✅ Connect to real database (currently using demo data)
4. ✅ Remove demo data and create API endpoints for real data
5. ✅ Add rate limiting to authentication endpoints
6. ✅ Enable HTTPS only
7. ✅ Add logging and monitoring

## File Structure

```
src/
├── app/
│   ├── admin/
│   │   ├── page.tsx                    # Login page
│   │   └── dashboard/
│   │       ├── layout.tsx              # Dashboard layout
│   │       ├── page.tsx                # Dashboard home
│   │       ├── contact-enquiry/
│   │       │   └── page.tsx            # Contact enquiries
│   │       └── newsletter-enquiry/
│   │           └── page.tsx            # Newsletter subscribers
│   └── api/
│       └── admin/
│           ├── login/route.ts          # Login API
│           ├── verify/route.ts         # Token verification
│           └── status/route.ts         # Status check
├── lib/
│   └── auth.ts                         # Authentication utilities
└── components/
    └── ProtectedRoute.tsx              # Protected route wrapper
```

## Support

For issues or questions, contact the administrator: **ZEXO**

---

**Built with ❤️ using Next.js and TypeScript**
