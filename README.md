# Mireille Umuhire — Portfolio

A modern, professional portfolio website built with **React**, **Vite**, **Tailwind CSS**, and **Framer Motion**.

## 🚀 Quick Start

### 1. Install dependencies
```bash
npm install
```

### 2. Run development server
```bash
npm run dev
```
Open http://localhost:5173 in your browser.

### 3. Build for production
```bash
npm run build
```

---

## 📁 Project Structure

```
portfolio/
├── index.html
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
├── package.json
└── src/
    ├── main.jsx
    ├── App.jsx           ← Root + dark mode context
    ├── index.css         ← Global styles + Tailwind imports
    └── components/
        ├── Navbar.jsx
        ├── Hero.jsx
        ├── About.jsx
        ├── Skills.jsx
        ├── Projects.jsx
        ├── Certs.jsx
        ├── Contact.jsx
        ├── Footer.jsx
        └── SectionHeader.jsx
```

---

## 🎨 Customisation Guide

### Add your photo
In `Hero.jsx`, replace the `<span>MU</span>` placeholder:
```jsx
<img src="/photo.jpg" alt="Mireille Umuhire" className="w-full h-full object-cover" />
```
Place `photo.jpg` in the `/public` folder.

### Update your CV
Place `cv.pdf` in the `/public` folder — the Download CV button will link to it automatically.

### Update contact details
Edit the `CONTACT_LINKS` array in `Contact.jsx`.

### Update projects
Edit the `PROJECTS` array in `Projects.jsx`. Each project has:
- `name`, `desc`, `tech`, `features`
- `github` and `demo` URLs
- `featured` (true = full-width card)

### Update certifications
Edit the `CERTS` array in `Certs.jsx`.

---

## 🌗 Dark / Light Mode
Click the moon/sun icon in the navbar. Dark mode is driven by Tailwind's `darkMode: 'class'` strategy — the `dark` class toggles on `<html>`.

---

## 🌐 Deployment

### Vercel (recommended — free)
1. Push your code to GitHub
2. Import the repo at vercel.com
3. Vercel auto-detects Vite — click Deploy

### Netlify
1. Run `npm run build`
2. Drag the `dist/` folder to netlify.com/drop

---

## 📦 Dependencies

| Package | Purpose |
|---|---|
| react, react-dom | UI framework |
| vite | Build tool & dev server |
| tailwindcss | Utility-first CSS |
| framer-motion | Scroll animations in Hero |
| react-icons | FiMail, FiGithub, etc. |
| react-scroll | Smooth scroll (optional) |
