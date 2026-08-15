<div align="center">

# 🌱 AgroDev

### Data and trust for a climate-resilient food system

A student climate-tech project from Moldova for the **Oxford Saïd Global Climate Tech Challenge 2026**.

[Explore the prototype](https://agrodev.lovable.app) · [Watch the project video](https://www.youtube.com/watch?v=maDrQPge89g)

![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript&logoColor=white)
![TanStack](https://img.shields.io/badge/TanStack-Start-FF4154)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?logo=tailwindcss&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-powered-646CFF?logo=vite&logoColor=white)

</div>

---

## The idea

Climate pressure makes already difficult agricultural decisions even harder. Farmers must choose when and how much to irrigate, evaluate new technology, and interpret field data — often without enough time, technical support, or trustworthy information.

At the same time, consumers rarely have a clear view of where food came from and how it was produced.

**AgroDev connects these two sides of the food system.** The project starts with climate-smart irrigation and grows toward a broader platform for farm intelligence, practical learning, and food traceability.

## 💧 Climate-smart irrigation

The competition prototype focuses on a concrete question:

> **Can sensor-informed irrigation reduce avoidable water use without compromising plant growth?**

The proposed workflow is deliberately simple:

1. **Measure** soil moisture and local environmental conditions.
2. **Interpret** readings together with weather information and crop needs.
3. **Recommend** a clear irrigation action instead of showing raw data alone.
4. **Verify** the result against a fixed-schedule control setup.

The goal is not to make oversized claims before testing. The prototype is designed around a measurable hypothesis and a practical pilot.

## 🧩 Product vision

| Layer | What it does |
|---|---|
| 🌾 **Farm intelligence** | Turns field and weather data into understandable recommendations for irrigation, crop care, fertiliser, and equipment use. |
| 🎓 **Practical learning** | Gives farmers concise, field-ready guidance and examples from pilot farms. |
| 🔎 **Food traceability** | Connects products to QR-accessible information about origin, producer, dates, and available inspections. |

The irrigation prototype is the first validated building block of this wider vision.

## ✨ Website highlights

This repository contains the public AgroDev project website:

- project story and problem framing;
- climate-smart irrigation concept;
- embedded project video;
- link to the interactive prototype;
- four-person team presentation;
- dedicated interviews page;
- responsive layout for mobile, tablet, and desktop.

## 👥 Team

AgroDev is a four-student team from Moldova combining science, sustainability, communication, and technology.

| Member | Focus |
|---|---|
| **Valeria** | Biology & sustainability |
| **Anna** | Research, communication & project development |
| **Masha** | Biology, medicine & chemistry |
| **Boris** | Robotics, IT & technical direction |

## 🛠 Tech stack

- **React 19**
- **TypeScript**
- **TanStack Start**
- **TanStack Router**
- **Vite**
- **Tailwind CSS 4**
- **Radix UI**
- **Nitro / Vercel output**

## 🚀 Run locally

### Requirements

- Node.js 20+
- npm 10+

```bash
git clone https://github.com/xondell/agrodev-climate-champion.git
cd agrodev-climate-champion
npm install
npm run dev
```

Vite will print the local development URL in the terminal.

### Quality checks

```bash
npm run lint
npm run build
npm run preview
```

## 🗂 Project structure

```text
src/
├── components/
│   └── SiteLayout.tsx       # Shared header, mobile navigation, footer and links
├── routes/
│   ├── index.tsx            # Main project story
│   └── interview.tsx        # Team interviews
├── styles.css               # Global styles and responsive system
└── server.ts                # Server entry point

public/
├── agrodev-logo.png         # Project identity
└── team/                    # Team photography
```

## 🔧 Updating project links

The main external links are centralised in `src/components/SiteLayout.tsx`:

- `APP_URL` — interactive AgroDev prototype;
- `YOUTUBE_VIDEO_ID` — public project video.

Project copy and team information live in `src/routes/index.tsx`, while interview content is kept in `src/routes/interview.tsx`.

## ☁️ Deploy to Vercel

1. Push the repository to GitHub.
2. Import `xondell/agrodev-climate-champion` into Vercel.
3. Keep the detected build settings.
4. Deploy.

The project already targets Vercel through Nitro.

---

<div align="center">

**Built in Moldova for the Oxford Saïd Global Climate Tech Challenge 2026.**

</div>
