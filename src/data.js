import campusCoreImage from "./assets/NEXORA.svg";

export const projects = [
  {
    id: 1,
    title: "CampusCore",
    subtitle: "Shadron Systems — First Release",
    category: "SaaS Platform",
    company: "Shadron Systems",
    featured: true,
    date: "2025 – Present",
    technology: "Full-Stack SaaS",
    tags: [
      "Next.js",
      "TypeScript",
      "Node.js",
      "Express",
      "PostgreSQL",
      "Prisma",
      "Tailwind CSS",
      "Twilio",
      "Cloudinary",
      "PWA",
    ],
    image: campusCoreImage,
    imageClass:
      "object-contain p-12 bg-gradient-to-br from-violet-950 via-indigo-950 to-slate-950",
    link: "https://github.com/shadtorh",
    demoLink: "https://getcampuscore.com",
    excerpt:
      "A multi-tenant school management platform for K–12 schools in Liberia — admissions, attendance, fees, grading, report cards, and role-based portals.",
    features: [
      "Multi-tenant onboarding with super-admin school lifecycle management",
      "Cookie-based JWT auth with refresh token rotation and RBAC",
      "Teacher grade entry with submit → review → approve workflow",
      "Report card generator using only approved scores",
      "Attendance tracking with weekly summaries and alerts",
      "Fee management with installments, payments, and waiver workflows",
      "Parent, student, and teacher portals with targeted announcements",
      "PWA support with offline fallback",
    ],
    description: `CampusCore is the first product from Shadron Systems — a production-grade, multi-tenant SaaS platform built for K–12 schools in Liberia. It unifies daily school operations — admissions, enrollment, attendance, fees, grading, report cards, and parent/student/teacher portals — in one secure system.

The platform serves school leadership, admins, teachers, students, and parents with role-specific experiences and permission-scoped access.

Architecture:
• Frontend: Next.js 16, TypeScript, Tailwind CSS, shadcn/ui, Recharts
• Backend: Node.js, Express, Prisma ORM
• Database: PostgreSQL (Neon)
• Integrations: Twilio (OTP & SMS), Cloudinary (media), Sentry
• Deployment: Vercel (frontend), Railway (API)

This project demonstrates end-to-end SaaS engineering: multi-tenancy, secure auth, complex domain workflows (grading approvals, report cards, fee waivers), and real-world integrations.`,
  },
];
