<div align="center">

# 🌱 AgroDev

### Data and trust for a climate-resilient food system

A student climate-tech project from Moldova for the **Oxford Saïd Global Climate Tech Challenge 2026**.

[**Live project website**](https://agrodev-climate-champion.vercel.app/) · [**Product prototype — AgroHelp**](https://farm-connect-main-ochre.vercel.app/) · [**Project video**](https://www.youtube.com/watch?v=maDrQPge89g)

![React](https://img.shields.io/badge/React-19.2-61DAFB?logo=react&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-5.8-3178C6?logo=typescript&logoColor=white)
![TanStack](https://img.shields.io/badge/TanStack-Start-FF4154)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?logo=tailwindcss&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-8-646CFF?logo=vite&logoColor=white)

</div>

---

## The problem

Climate pressure makes agricultural decisions harder: farmers must decide when to irrigate, which technologies are worth adopting, and how to interpret field data without always having the time, technical support or financial margin for trial and error.

At the same time, consumers often have little visibility into where food came from and how it was produced.

**AgroDev connects these two sides of the food system.**

## The solution

The concept is built around three layers:

| Layer | Purpose |
|---|---|
| 🌾 **Farm intelligence** | Turn field and weather information into understandable actions for irrigation, crop care, fertiliser and equipment use. |
| 🎓 **Practical learning** | Give farmers concise guidance, pilot examples and context for new agricultural technologies. |
| 🔎 **Food traceability** | Let consumers inspect origin, producer, dates, production journey and available inspection information through product codes / QR access. |

The interactive product implementation lives in the separate [**AgroHelp**](https://github.com/xondell/farm-connect-main) repository.

## Climate-smart irrigation hypothesis

The competition concept begins with a testable question:

> **Can sensor-informed irrigation reduce avoidable water use without compromising plant growth?**

Proposed loop:

```text
Measure → Interpret → Recommend → Apply → Compare → Improve
```

1. Measure soil moisture and local environmental conditions.
2. Interpret readings together with weather and crop needs.
3. Recommend a clear irrigation action.
4. Compare results with a fixed-schedule control.
5. Improve recommendations using measured outcomes.

The project intentionally separates a **measurable hypothesis** from claims that still require field validation.

## What this repository contains

This repository is the public project website:

- problem framing;
- solution explanation;
- climate-smart irrigation concept;
- project video;
- link to the interactive AgroHelp prototype;
- four-person team presentation;
- interviews page;
- responsive navigation and layout.

## Team

AgroDev is a four-student team from Moldova combining science, sustainability, communication and technology.

| Member | Focus |
|---|---|
| **Valeria** | Biology & sustainability |
| **Anna** | Research, communication & project development |
| **Masha** | Biology, medicine & chemistry |
| **Boris** | Robotics, IT & technical direction |

## Tech stack

| Area | Technology |
|---|---|
| UI | React 19.2 |
| Language | TypeScript 5.8 |
| Framework | TanStack Start |
| Routing | TanStack Router |
| Styling | Tailwind CSS 4 |
| Components | Radix UI |
| Build | Vite 8 |
| Deployment | Nitro / Vercel |

## Run locally

```bash
git clone https://github.com/xondell/agrodev-climate-champion.git
cd agrodev-climate-champion
npm install
npm run dev
```

Useful commands:

```bash
npm run lint
npm run build
npm run preview
```

## Project structure

```text
src/
├── components/
│   └── SiteLayout.tsx       # Header, navigation, footer and shared links
├── routes/
│   ├── index.tsx            # Main project story
│   └── interview.tsx        # Interviews
├── styles.css               # Global / responsive styling
└── server.ts                # Server entry

public/
├── agrodev-logo.png
└── team/
```

## Updating external links

The main external links are centralized in `src/components/SiteLayout.tsx`.

Keep these destinations synchronized with the README:

- live AgroDev website;
- AgroHelp prototype;
- project video.

## Deploy to Vercel

1. Import `xondell/agrodev-climate-champion`.
2. Keep the detected framework/build configuration.
3. create a Preview deployment;
4. test the home page, interviews, mobile navigation and external links;
5. promote to Production.

---

<div align="center">

**Built in Moldova for the Oxford Saïd Global Climate Tech Challenge 2026.**

</div>
