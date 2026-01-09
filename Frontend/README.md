# Frontend CVking - Next.js Client Application

[![Next.js](https://img.shields.io/badge/Next.js-16.0.3-black)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-4.x-blue)](https://tailwindcss.com/)
[![Zustand](https://img.shields.io/badge/Zustand-5.x-orange)](https://zustand-demo.pmnd.rs/)

Frontend client application cho nền tảng CVking, xây dựng với Next.js 16, TypeScript và các công nghệ hiện đại.

## 📋 Tổng Quan

Đây là ứng dụng client frontend cho dự án CVking, cung cấp giao diện người dùng cho:
- **Người dùng cuối**: Đăng nhập, đăng ký, quản lý hồ sơ, tìm việc, đọc blog
- **Admin**: Quản trị hệ thống, quản lý nội dung, analytics
- **Email Editor**: Công cụ tạo template email drag-and-drop

## 🏗️ Cấu Trúc Thư Mục

```
Frontend/
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── (client)/          # Client Routes - Route Groups
│   │   │   ├── login/         # Đăng nhập (/login)
│   │   │   ├── register/      # Đăng ký (/register)
│   │   │   ├── profile/       # Hồ sơ cá nhân (/profile)
│   │   │   ├── editor/        # Email Editor (/editor)
│   │   │   ├── layout.tsx     # Client Layout
│   │   │   └── page.tsx       # Trang chủ client
│   │   ├── (admin)/           # Admin Routes - Route Groups
│   │   │   ├── layout.tsx     # Admin Layout
│   │   │   └── page.tsx       # Admin Dashboard
│   │   ├── api/               # API Routes (Next.js)
│   │   ├── globals.css        # Global Styles
│   │   ├── layout.tsx         # Root Layout
│   │   ├── not-found.tsx      # 404 Page
│   │   └── providers.tsx      # React Providers
│   ├── modules/               # Feature Modules
│   │   ├── client/            # Client Features
│   │   │   ├── HomePage/      # Trang chủ
│   │   │   │   ├── index.tsx
│   │   │   │   └── components/
│   │   │   ├── LoginPage/     # Trang đăng nhập
│   │   │   │   ├── index.tsx
│   │   │   │   └── components/
│   │   │   │       └── LoginForm.tsx
│   │   │   ├── ProfilePage/   # Trang hồ sơ
│   │   │   │   ├── index.tsx
│   │   │   │   └── components/
│   │   │   │       ├── InfoProfile.tsx
│   │   │   │       └── ProfileForm.tsx
│   │   │   ├── RegisterPage/  # Trang đăng ký
│   │   │   └── editor/        # Email Editor
│   │   │       ├── EmailEditor.tsx
│   │   │       ├── Toolbar.tsx
│   │   │       ├── Canvas.tsx
│   │   │       ├── ElementsSidebar.tsx
│   │   │       ├── PropertiesPanel.tsx
│   │   │       ├── ResizableColumns.tsx
│   │   │       ├── templates/ (empty)
│   │   │       └── utils/
│   │   └── admin/             # Admin Features
│   │       ├── DashboardPage/ # Dashboard admin
│   │       │   ├── site-header.tsx
│   │       │   ├── section-cards.tsx
│   │       │   └── chart-area-interactive.tsx
│   │       ├── UserManagement/ # Quản lý user
│   │       │   ├── index.tsx
│   │       │   ├── config/
│   │       │   │   ├── columns.tsx
│   │       │   │   └── actions.tsx
│   │       │   ├── components/
│   │       │   │   ├── constants.ts
│   │       │   │   ├── TableCells.tsx
│   │       │   │   └── TableHeaders.tsx
│   │       │   └── libs/
│   │       │       └── utils.ts
│   │       ├── InteractionManagement/ # Quản lý tương tác
│   │       │   ├── index.tsx
│   │       │   └── components/
│   │       ├── PostManagement/ # Quản lý bài viết
│   │       │   ├── index.tsx
│   │       │   ├── components/
│   │       │   │   ├── constants.ts
│   │       │   │   ├── TableCells.tsx
│   │       │   │   ├── TableHeaders.tsx
│   │       │   │   └── UpdatePostDialog.tsx
│   │       │   ├── config/
│   │       │   └── libs/
│   ├── components/            # Reusable Components
│   │   ├── ui/               # Base UI Components (Shadcn/ui)
│   │   │   ├── button.tsx
│   │   │   ├── input.tsx
│   │   │   ├── card.tsx
│   │   │   ├── dialog.tsx
│   │   │   ├── table.tsx
│   │   │   ├── form.tsx
│   │   │   ├── chart.tsx
│   │   │   └── ... (other UI components)
│   │   ├── common/           # Common Components
│   │   │   ├── bg-gradient.tsx
│   │   │   └── ... (shared components)
│   │   └── layouts/          # Layout Components
│   │       └── FeatureBasedLayout.tsx
│   ├── stores/               # State Management
│   │   ├── userStore.ts      # User state (Zustand)
│   │   ├── editorStore.ts    # Email editor state
│   │   └── index.ts          # Store exports
│   ├── apis/                 # API Integration
│   │   ├── axios.ts          # Axios configuration
│   │   └── client/           # API clients
│   │       ├── auth/         # Auth APIs
│   │       │   ├── index.ts
│   │       │   ├── requests.ts
│   │       │   ├── queries.ts
│   │       │   ├── types.ts
│   │       │   └── keys.ts
│   │       ├── blog/         # Blog APIs
│   │       ├── user/         # User APIs
│   │       ├── comment/      # Comment APIs
│   │       └── like/         # Like APIs
│   ├── contexts/             # React Contexts
│   │   ├── BreadcumbContext.tsx
│   ├── hooks/                # Custom Hooks
│   │   ├── use-mobile.ts
│   │   └── useMe.ts
│   ├── lib/                  # Utilities & Config
│   │   ├── utils.ts          # Utility functions
│   │   ├── routes.ts         # Route constants
│   │   ├── const.ts          # App constants
│   │   ├── validations/      # Zod schemas
│   │   │   └── auth-client.ts
│   │   ├── to-pascal-case.ts # String utilities
│   │   └── routes.ts         # Route definitions
│   ├── types/                # TypeScript Types
│   │   ├── article.ts
│   │   ├── common.ts
│   │   ├── sidebar-function.ts
│   │   └── user.ts
│   ├── faker/                # Mock Data
│   │   ├── article-data.ts
│   │   └── sidebar-data.ts
│   └── providers/            # Additional Providers
├── public/                   # Static Assets
│   ├── images/
│   ├── favicon.ico
│   └── ... (other assets)
├── components.json           # Shadcn/ui config
├── next.config.ts            # Next.js config
├── tailwind.config.ts        # Tailwind config
├── tsconfig.json             # TypeScript config
├── package.json
└── README.md
```

## 🛠️ Công Nghệ Sử Dụng

### Core Framework
- **Next.js 16**: App Router, Server Components, API Routes
- **TypeScript**: Type safety toàn diện
- **React 18**: Latest React features

### UI & Styling
- **Tailwind CSS v4**: Utility-first CSS framework
- **Shadcn/ui**: High-quality components built on Radix UI
- **Radix UI**: Accessible, unstyled UI primitives
- **Lucide React**: Beautiful icons
- **Framer Motion**: Animations

### State Management
- **Zustand**: Lightweight state management
- **TanStack Query**: Server state management, caching
- **React Hook Form**: Form handling
- **Zod**: Schema validation

### Development Tools
- **ESLint**: Code linting
- **Prettier**: Code formatting
- **TypeScript**: Type checking
- **Next.js DevTools**: Development utilities

### External Integrations
- **Axios**: HTTP client với interceptors
- **Cookies-next**: Cookie management
- **Date-fns**: Date utilities
- **Sonner**: Toast notifications

## 🚀 Cài Đặt & Chạy

### Yêu Cầu
- Node.js 18+
- pnpm hoặc yarn

### 1. Cài Đặt Dependencies
```bash
pnpm install
```

### 2. Cấu Hình Environment
```bash
cp .env.example .env.local
```

### 3. Chạy Development Server
```bash
pnpm run dev
```

### 4. Truy Cập
- **Ứng Dụng**: http://localhost:3001
- **Admin**: http://localhost:3001/admin

## 📁 Chi Tiết Cấu Trúc

### App Router Structure
```
app/
├── (client)/          # Client routes - không ảnh hưởng URL
├── (admin)/           # Admin routes - không ảnh hưởng URL
├── api/              # Next.js API routes
├── globals.css       # Global styles
├── layout.tsx        # Root layout
├── not-found.tsx     # 404 page
└── providers.tsx     # Context providers
```

### Modules Organization
```
modules/
├── client/           # Client-facing features
│   ├── HomePage/     # Landing page
│   ├── LoginPage/    # Authentication
│   ├── ProfilePage/  # User profile
│   └── editor/       # Email builder
└── admin/            # Admin features
    ├── DashboardPage/# Analytics dashboard
    ├── UserManagement/# User CRUD
    └── PostManagement/# Content management
```

### Component Architecture
```
components/
├── ui/              # Atomic design - base components
├── common/          # Shared components
└── layouts/         # Page layouts
```

### API Integration
```
apis/client/
├── auth/            # Authentication APIs
├── blog/            # Blog content APIs
├── user/            # User management APIs
└── comment/         # Comments APIs
```

## 🔧 Scripts Quan Trọng

```bash
pnpm run dev          # Development server
pnpm run build        # Production build
pnpm run start        # Production server
pnpm run lint         # ESLint check
pnpm run type-check   # TypeScript check
```

## 🎨 Design System

### Color Palette
- **Primary**: Purple (#8B5CF6)
- **Secondary**: Gray scale
- **Accent**: Blue (#3B82F6)

### Typography
- **Font Family**: Mulish (Google Fonts)
- **Weights**: 400, 500, 600, 700, 800

### Components
- **Button**: Variants (default, outline, ghost, destructive)
- **Input**: Form inputs với validation
- **Card**: Content containers
- **Table**: Data tables với sorting/pagination
- **Dialog**: Modals và drawers

## 📱 Responsive Design

- **Mobile First**: Tất cả components responsive
- **Breakpoints**: sm (640px), md (768px), lg (1024px), xl (1280px)
- **Mobile Navigation**: Collapsible sidebar
- **Touch Friendly**: Adequate touch targets

## 🔄 State Management

### Zustand Stores
```typescript
// User Store
interface UserState {
  user: User | null;
  accessToken: string;
  setUser: (user: User) => void;
  setTokens: (tokens: AuthTokens) => void;
  clearUser: () => void;
}

// Editor Store
interface EditorState {
  elements: ElementData[];
  selectedElementId: string | null;
  addElement: (element: ElementData) => void;
  updateElement: (id: string, updates: Partial<ElementData>) => void;
}
```

### TanStack Query
```typescript
// API Queries
const useGetMyProfileQuery = (options) => {
  return useQuery({
    queryKey: [KEYS.USER_PROFILE],
    queryFn: UserService.getProfile,
    ...options,
  });
};

// Mutations
const useLoginMutation = (options) => {
  return useMutation({
    mutationFn: AuthService.login,
    onSuccess: handleLoginSuccess,
    ...options,
  });
};
```

## 🧩 Custom Hooks

```typescript
// Mobile detection
export const useIsMobile = () => {
  // Implementation
};

// User profile hook
export const useMe = () => {
  return useGetMyProfileQuery();
};
```

## 🎯 Best Practices

### File Organization
- **Feature-based**: Modules group related files
- **Separation of Concerns**: UI, business logic, state separated
- **Reusable Components**: Shared components in `components/`
- **Type Safety**: Full TypeScript coverage

### Code Quality
- **ESLint**: Consistent code style
- **Prettier**: Automatic formatting
- **TypeScript**: Compile-time type checking
- **Component Composition**: Reusable, composable components

### Performance
- **Next.js Optimization**: Image optimization, code splitting
- **Caching**: TanStack Query for server state
- **Lazy Loading**: Dynamic imports cho heavy components
- **Bundle Analysis**: Optimized bundle size

## 🔧 Development Workflow

1. **Feature Development**
   - Tạo module trong `modules/client/` hoặc `modules/admin/`
   - Implement components trong module
   - Add API integration trong `apis/client/`
   - Update types trong `types/`

2. **Component Creation**
   - Base components trong `components/ui/`
   - Feature components trong module
   - Shared components trong `components/common/`

3. **State Management**
   - Local state với useState/useReducer
   - Global state với Zustand
   - Server state với TanStack Query

4. **Styling**
   - Tailwind classes trực tiếp
   - Custom CSS trong `globals.css`
   - Component variants với class-variance-authority

## 🚀 Deployment

### Build for Production
```bash
pnpm run build
pnpm run start
```

### Environment Variables
```env
NEXT_PUBLIC_API_URL=http://localhost:3003
NEXT_PUBLIC_ADMIN_URL=http://localhost:3003/admin
NEXT_PUBLIC_IMAGE_URL=https://res.cloudinary.com/your_cloud
```

### Docker (tùy chọn)
```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production
COPY . .
RUN npm run build
EXPOSE 3001
CMD ["npm", "start"]
```

## 📚 Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Shadcn/ui](https://ui.shadcn.com)
- [Zustand](https://zustand-demo.pmnd.rs)
- [TanStack Query](https://tanstack.com/query)

---

**Frontend CVking** - Modern, scalable React application built with Next.js!