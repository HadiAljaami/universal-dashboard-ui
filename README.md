# Universal Dashboard UI

A modern, responsive, bilingual admin dashboard template built with React, TypeScript, Vite, Tailwind CSS, and shadcn/ui components.

This project is designed to be a reusable dashboard starter template for different types of systems such as SaaS platforms, school management systems, library systems, accounting systems, healthcare dashboards, internal admin panels, and business applications.

---

## ✨ Features

- Fully responsive layout for desktop, tablet, and mobile
- Arabic and English language support
- RTL and LTR layout support
- Light mode and dark mode
- Collapsible sidebar
- Mobile-friendly navigation drawer
- Modern top navigation bar
- Reusable UI components
- Dashboard overview page
- Users management page
- Data table page
- Forms page
- Reports page
- Settings page
- Login page
- 404 page
- Clean folder structure
- Ready to connect with any backend API

---

## 🧭 Pages

The template includes the following pages:

- Dashboard Overview
- Users Management
- Data Table
- Forms
- Reports / Analytics
- Settings
- Login
- Not Found Page

---

## 🧩 Reusable Components

This dashboard includes a set of reusable components such as:

- Sidebar
- Topbar
- Cards
- Buttons
- Tables
- Badges
- Forms
- Inputs
- Selects
- Dropdowns
- Tabs
- Alerts
- Toasts
- Skeleton Loading
- Status Badges
- Page Header

---

## 🌍 Internationalization

The dashboard supports both:

- English
- Arabic

The layout direction changes automatically based on the selected language:

- English: LTR
- Arabic: RTL

The selected language is stored locally so the user preference remains after refreshing the page.

---

## 🌓 Theme Support

The dashboard supports:

- Light Mode
- Dark Mode

The selected theme is saved locally and persists between sessions.

---

## 🛠️ Tech Stack

- React
- TypeScript
- Vite
- Tailwind CSS
- shadcn/ui
- Lucide React Icons
- Recharts
- React Router
- TanStack Query

---

## 📦 Installation

Clone the repository:

```bash
git clone https://github.com/HadiAljaami/universal-dashboard-ui.git
```

Navigate to the project folder:

```bash
cd universal-dashboard-ui
```

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open the local development URL in your browser:

```bash
http://localhost:5173
```

---

## 🚀 Available Scripts

Start the development server:

```bash
npm run dev
```

Build the project for production:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

Run tests if configured:

```bash
npm run test
```

---

## 📁 Project Structure

```txt
src/
├── components/
│   ├── common/
│   ├── dashboard/
│   ├── layout/
│   └── ui/
├── data/
├── hooks/
├── i18n/
├── lib/
├── pages/
├── theme/
├── App.tsx
├── main.tsx
└── index.css
```

---

## 📌 Main Folders

### `components/layout`

Contains the main layout components such as:

* Sidebar
* Topbar
* App Layout

### `components/ui`

Contains reusable UI components based on shadcn/ui.

### `components/common`

Contains common project components such as page headers and status badges.

### `pages`

Contains the main application pages.

### `i18n`

Contains translation files and language provider logic.

### `theme`

Contains theme provider logic for light and dark mode.

### `data`

Contains sample data used for UI preview.

---

## 🧱 How to Use This Template in a Real Project

This project is designed as a starter template.

To use it in a real system:

1. Clone or copy the project.
2. Rename the project in `package.json`.
3. Update the logo and application name.
4. Keep only the pages you need.
5. Add your domain-specific pages.
6. Replace sample data with API calls.
7. Connect the dashboard to your backend.
8. Configure authentication and authorization.
9. Deploy the project.

---

## 🔌 Backend Integration

Currently, the project uses sample data for demonstration.

You can connect it later with any backend such as:

* ASP.NET Core Web API
* Node.js / Express
* Laravel
* Django
* Firebase
* Supabase

Example usage:

```ts
const response = await fetch("/api/users");
const users = await response.json();
```

---

## 🧠 Suggested Use Cases

This dashboard can be used as a base for:

* Admin panels
* SaaS dashboards
* School management systems
* Library management systems
* Inventory systems
* Accounting dashboards
* Healthcare systems
* Booking systems
* CRM systems
* Internal company tools

---

## 📸 Preview

Project repository:

```txt
https://github.com/HadiAljaami/universal-dashboard-ui
```

---

## 👨‍💻 Author

Developed by:

**Hadi Aljaami**

GitHub:

```txt
https://github.com/HadiAljaami
```

---

## 📄 License

This project is open for personal and educational use.

You can customize it and use it as a starter template for your own projects.
