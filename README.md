
# Wealthy 💰

Wealthy is a modern financial tracking and budgeting application built using **Next.js 15**, **Prisma**, and **Inngest**. It provides a seamless experience for users to manage their accounts, transactions, and budgets efficiently.

## 🚀 Features

- **User Authentication** with [Clerk](https://clerk.dev/)
- **Real-time Transactions & Budget Tracking**
- **Automated Email Notifications** with [Resend](https://resend.com/)
- **Scheduled Jobs & Background Processing** via [Inngest](https://www.inngest.com/)
- **Interactive Charts & Graphs** using [Recharts](https://recharts.org/)
- **Dark Mode Support** with [Next Themes](https://github.com/pacocoursey/next-themes)
- **Drag & Drop UI Enhancements** with [Framer Motion](https://www.framer.com/motion/)
- **Optimized Forms** using [React Hook Form](https://react-hook-form.com/)
- **Database Management** with [Prisma](https://www.prisma.io/)
- **Type-safe Validations** using [Zod](https://zod.dev/)
- **AI-powered Receipt Scanner** using [Gemini](https://gemini.google.com/app)

## 🛠 Tech Stack

- **Frontend**: Next.js 15, React 19, TailwindCSS
- **Backend**: Next.js API Routes, Prisma ORM, Inngest
- **Database**: PostgreSQL (with Prisma)
- **Email Service**: Resend & React Email
- **State Management**: SWR, React Hook Form
- **UI Components**: Radix UI, Lucide React

## 📂 Project Structure

```bash
wealthy/
│── actions/              # Server actions for transactions & accounts
│── app/                  # Next.js app structure
│   ├── auth/             # Authentication pages
│   ├── main/             # Main app pages (Dashboard, Transactions, etc.)
│── components/           # Reusable UI components
│── hooks/                # Custom hooks
│── lib/                  # Utility functions & configurations
│── prisma/               # Prisma schema & migrations
│── public/               # Static assets
│── api/                  # API routes
│── emails/               # Email templates
│── data/                 # Static data (categories, etc.)
│── sections/             # UI sections
│── pages/                # API routes
│── .env                  # Environment variables
│── package.json          # Dependencies & scripts
```

## 🔧 Installation

### Clone the repository:
```sh
git clone https://github.com/your-username/wealthy.git
cd wealthy
```

### Install dependencies:
```sh
npm install
```

### Set up environment variables (`.env` file):
```sh
DATABASE_URL=your_database_url
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_key
CLERK_SECRET_KEY=your_clerk_secret
RESEND_API_KEY=your_resend_key
```

### Run database migrations:
```sh
npx prisma migrate dev
```

### Start the development server:
```sh
npm run dev
```

## 📈 Usage

- Sign up or log in using Clerk authentication.
- Create and manage accounts, budgets, and transactions.
- View analytics and financial insights.
- Receive email notifications for important events.

## 📌 Scripts

- `npm run dev` – Start the Next.js dev server
- `npm run build` – Build the application
- `npm run start` – Start the production server
- `npm run lint` – Run ESLint checks
- `npm run postinstall` – Generate Prisma client

## 🔗 Related Technologies

- [Next.js](https://nextjs.org/)
- [Prisma](https://www.prisma.io/)
- [Clerk](https://clerk.dev/)
- [Inngest](https://www.inngest.com/)
- [Resend](https://resend.com/)
- [Radix UI](https://www.radix-ui.com/)
- [Framer Motion](https://www.framer.com/motion/)

## 📜 License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.

---

💡 *Feel free to contribute! Pull requests are welcome.* 🚀
```
