# 📝 Blog Platform

A **full-featured blog platform** built with:

- ✨ Next.js 15 (App Router)
- 🎯 NestJS (REST API)
- 🛡️ JWT Auth + GitHub Login
- 🗃️ PostgreSQL + Prisma
- 🎨 TailwindCSS

---

## 🧩 Features

### 👨‍💻 Admin

- GitHub Login via NextAuth
- Create / Edit / Delete Blog Posts
- Admin Dashboard (`/admin/dashboard`)
- Secure with JWT Token & Session

### 👀 Public Users

- View all blog posts (`/`)
- Read post details (`/post/:id`)
- Add comments to posts
- Responsive UI

---

## ⚙️ Tech Stack

| Layer       | Tech                      |
|-------------|---------------------------|
| Frontend    | Next.js 15 + TailwindCSS  |
| Backend     | NestJS (TypeScript)       |
| Database    | PostgreSQL + Prisma ORM   |
| Auth        | GitHub OAuth + JWT        |

---

## 🛠️ Local Setup

### 1. Clone Project

```bash
git clone https://github.com/DevakiWale/Blog-Platform.git
cd Blog-Platform
````

### 2. Setup Backend (`/backend`)

```bash
cd backend
npm install
cp .env.example .env  # Add your DB + JWT secrets

npx prisma generate
npx prisma migrate dev --name init

npm run start:dev
```

### 3. Setup Frontend (`/frontend`)

```bash
cd ../frontend
npm install
cp .env.example .env  # Add GitHub Client ID/Secret & API URL

npm run dev
```

## 🔐 Environment Variables

### ✅ Backend (`/backend/.env`)

```
DATABASE_URL=postgresql://USER:PASSWORD@host:port/dbname
JWT_SECRET=your_jwt_secret
```

### ✅ Frontend (`/frontend/.env.local`)

```
NEXTAUTH_URL=http://localhost:3001
NEXTAUTH_SECRET=your_nextauth_secret
GITHUB_ID=your_github_client_id
GITHUB_SECRET=your_github_client_secret
NEXT_PUBLIC_API_URL=http://localhost:3000
```

## 👩‍💻 Author

* 💼 [Devaki Wale](https://github.com/DevakiWale)



