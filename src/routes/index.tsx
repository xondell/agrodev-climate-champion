import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, PlayCircle } from "lucide-react";
import { APP_URL, YOUTUBE_VIDEO_ID } from "@/components/SiteLayout";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "AgroDev | Food security for a climate-resilient Moldova" },
      {
        name: "description",
        content:
          "AgroDev is a student team from Moldova building a connected platform for climate-smart farming, practical learning and transparent food traceability.",
      },
      { property: "og:title", content: "AgroDev | Oxford Saïd Global Climate Tech Challenge" },
      {
        property: "og:description",
        content: "Data, guidance and traceability for a more resilient food system.",
      },
    ],
  }),
  component: Index,
});

const team = [
  {
    name: "Valeria",
    photo: "/team/image3.jpg",
    role: "Biology & sustainability",
    bio: "A student from Moldova passionate about biology and sustainability. She believes innovation can help build a more resilient future.",
  },
  {
    name: "Anna",
    photo: "/team/image1.jpg",
    role: "Science profile, Grade 11",
    bio: "She explores environmental and social challenges and develops new ideas. For Anna, thoughtful collaboration is essential to meaningful projects.",
  },
  {
    name: "Masha",
    photo: "/team/image2.jpg",
    role: "Biology, medicine & chemistry",
    bio: "She brings the scientific foundation to AgroDev, with a focus on biology, medicine and chemistry.",
  },
  {
    name: "Boris",
    photo: "/team/image4.jpg",
    role: "Robotics & IT",
    bio: "He leads the platform's technical direction, combining an interest in robotics, IT and practical digital products.",
  },
];

const challenges = [
  {
    title: "A technology and decision gap",
    copy: "Many farmers face costly choices without accessible technical guidance: which tools to adopt, how to interpret data and how to use water, fertiliser and equipment effectively.",
  },
  {
    title: "A transparency gap",
    copy: "Consumers often cannot see where food came from, how it was produced or what checks it passed. At the same time, practical learning and peer knowledge remain fragmented.",
  },
];

const platformPillars = [
  {
    label: "1. Farm intelligence",
    title: "Measure conditions, then act",
    points: [
      "Field sensors capture soil moisture, air and soil temperature, rainfall, wind, pH and solar radiation.",
      "AI-assisted analysis turns these readings into clear, practical recommendations for irrigation, crop protection, fertiliser and equipment use.",
    ],
  },
  {
    label: "2. Practical learning",
    title: "Make modern tools usable",
    points: [
      "Short videos and field-ready guides explain how agricultural technology works, how to configure it and how to avoid common mistakes.",
      "Pilot farms test solutions in real conditions and publish evidence-led findings, helping farmers choose tools on data rather than advertising.",
    ],
  },
  {
    label: "3. Food traceability",
    title: "Build trust from field to shelf",
    points: [
      "A QR code can link a product to its origin, producer, date, composition and available inspection information.",
      "When an issue is found, the system can help trace the product through the supply chain and identify its source.",
    ],
  },
];

function Index() {
  return (
    <>
      <section className="hero-surface overflow-hidden">
        <div className="mx-auto grid w-full max-w-6xl gap-10 px-4 py-16 sm:px-5 md:py-24 lg:grid-cols-[1.25fr_0.75fr] lg:items-center">
          <div className="max-w-3xl">
            <span className="inline-flex rounded-full border border-primary-foreground/30 px-3 py-1 text-xs font-semibold uppercase tracking-widest">
              Oxford Saïd Global Climate Tech Challenge · Moldova
            </span>
            <h1 className="mt-6 text-4xl font-bold leading-[1.08] sm:text-5xl md:text-6xl">
              Data and trust for a climate-resilient food system.
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-7 opacity-90 sm:text-lg">
              AgroDev connects field intelligence, technology education and food traceability -
              turning data into informed action and measurable impact.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href={APP_URL}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-accent px-6 py-3 font-semibold text-accent-foreground transition-transform hover:-translate-y-0.5"
              >
                Explore the prototype <ArrowRight size={18} />
              </a>
              <a
                href="#video"
                className="inline-flex items-center justify-center rounded-full border border-primary-foreground/40 px-6 py-3 font-semibold transition-colors hover:bg-primary-foreground/10"
              >
                Watch our video
              </a>
            </div>
          </div>
          <div className="mx-auto w-full max-w-xs rounded-[2rem] border border-white/20 bg-white/10 p-5 shadow-2xl backdrop-blur-sm lg:max-w-sm">
            <img
              src="/agrodev-logo.png"
              alt="AgroDev logo"
              className="mx-auto w-full rounded-2xl bg-white object-cover"
            />
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-5 md:py-20">
        <p className="text-sm font-semibold uppercase tracking-[0.16em] text-leaf">The challenge</p>
        <h2 className="mt-3 max-w-2xl text-3xl font-bold leading-tight md:text-4xl">
          Climate pressure exposes weak links across the food system.
        </h2>
        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {challenges.map((challenge) => (
            <article key={challenge.title} className="card-soft p-6 sm:p-7">
              <h3 className="text-xl font-semibold text-primary">{challenge.title}</h3>
              <p className="mt-4 leading-7 text-muted-foreground">{challenge.copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-secondary/40 py-16 md:py-20">
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-5">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-leaf">
            Our response
          </p>
          <h2 className="mt-3 text-3xl font-bold md:text-4xl">
            One connected platform, three practical layers.
          </h2>
          <p className="mt-4 max-w-3xl leading-7 text-muted-foreground">
            AgroDev supports earlier, better-informed decisions on the farm while making the journey
            of food more visible to the people who buy it.
          </p>
          <div className="mt-8 grid gap-5 lg:grid-cols-3">
            {platformPillars.map((pillar) => (
              <article key={pillar.label} className="card-soft flex h-full flex-col p-6 sm:p-7">
                <p className="text-xs font-bold uppercase tracking-[0.14em] text-leaf">
                  {pillar.label}
                </p>
                <h3 className="mt-3 text-xl font-bold">{pillar.title}</h3>
                <ul className="mt-5 space-y-4 text-sm leading-6 text-muted-foreground">
                  {pillar.points.map((point) => (
                    <li key={point} className="border-l-2 border-leaf/60 pl-3">
                      {point}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        id="video"
        className="mx-auto w-full max-w-5xl scroll-mt-20 px-4 py-16 sm:px-5 md:py-20"
      >
        <p className="text-sm font-semibold uppercase tracking-[0.16em] text-leaf">
          Meet the project
        </p>
        <h2 className="mt-3 text-3xl font-bold md:text-4xl">Our video</h2>
        <div className="card-soft mt-7 overflow-hidden p-2 sm:p-3">
          <div className="aspect-video overflow-hidden rounded-xl bg-ink">
            {YOUTUBE_VIDEO_ID ? (
              <iframe
                className="h-full w-full"
                src={`https://www.youtube-nocookie.com/embed/${YOUTUBE_VIDEO_ID}`}
                title="AgroDev project video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                loading="lazy"
              />
            ) : (
              <div className="flex h-full flex-col items-center justify-center px-6 text-center text-primary-foreground">
                <PlayCircle size={48} strokeWidth={1.5} className="text-accent" />
                <p className="mt-4 text-lg font-semibold">Project video coming soon</p>
                <p className="mt-2 max-w-md text-sm leading-6 opacity-75">
                  The video player will appear here as soon as the team adds its YouTube video ID.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      <section className="bg-secondary/40 py-16 md:py-20">
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-5">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-leaf">The team</p>
          <h2 className="mt-3 text-3xl font-bold md:text-4xl">AgroDev, Moldova</h2>
          <p className="mt-3 text-muted-foreground">
            Four students combining science, sustainability and technology.
          </p>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {team.map((member) => (
              <article key={member.name} className="card-soft overflow-hidden">
                <img
                  src={member.photo}
                  alt={`${member.name}, AgroDev team member`}
                  loading="lazy"
                  className="aspect-[4/5] w-full object-cover"
                />
                <div className="p-5">
                  <h3 className="font-display text-xl font-bold">{member.name}</h3>
                  <p className="mt-1 text-xs font-semibold uppercase tracking-wide text-leaf">
                    {member.role}
                  </p>
                  <p className="mt-3 text-sm leading-6 text-muted-foreground">{member.bio}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-5 md:py-20">
        <div className="hero-surface flex flex-col items-start gap-6 rounded-3xl p-7 sm:p-10 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="text-2xl font-bold md:text-3xl">Explore our working prototype.</h2>
            <p className="mt-2 max-w-xl leading-7 opacity-90">
              See the starting point for field monitoring, data-guided recommendations and product
              traceability.
            </p>
          </div>
          <a
            href={APP_URL}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 font-semibold text-accent-foreground"
          >
            Open the app <ArrowRight size={18} />
          </a>
        </div>
      </section>
    </>
  );
}
