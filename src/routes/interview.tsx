import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/interview")({
  head: () => ({
    meta: [
      { title: "Team interviews | AgroDev" },
      {
        name: "description",
        content:
          "The AgroDev team shares why it is building a practical, climate-resilient food platform for Moldova.",
      },
      { property: "og:title", content: "Team interviews | AgroDev" },
      { property: "og:description", content: "Meet the students behind AgroDev." },
    ],
  }),
  component: InterviewPage,
});

const interviews = [
  {
    name: "Valeria",
    qa: [
      [
        "Why food security?",
        "It is where biology, climate and economics meet. When a harvest is lost because of a poor decision, the effects travel through the whole chain - from the farm to families at the table.",
      ],
      [
        "What does resilience mean to you?",
        "It means a farm can get through a difficult year without devastating losses. Data and forecasts create that capacity before a crisis, not after it.",
      ],
    ],
  },
  {
    name: "Anna",
    qa: [
      [
        "How does the team work together?",
        "We divided the project into farm, consumer and pilot-farm areas. Each person leads a part, but we discuss the key decisions together.",
      ],
      [
        "What has been the hardest part?",
        "Turning a scientific concept into something an everyday farmer can understand. Designing a clear interface was just as important as the technology itself.",
      ],
    ],
  },
  {
    name: "Masha",
    qa: [
      [
        "What role does science play in AgroDev?",
        "Platform recommendations need a real basis in agronomy and soil chemistry. Otherwise, they are only attractive charts, not useful guidance.",
      ],
      [
        "Why pilot farms?",
        "They allow us to test technology in real conditions and publish honest results - not marketing claims from manufacturers.",
      ],
    ],
  },
  {
    name: "Boris",
    qa: [
      [
        "How does the technical layer work?",
        "Field sensors collect conditions. The model compares them with weather data, then turns the results into a forecast and a specific next action.",
      ],
      [
        "What does a QR code add?",
        "It can show a product's story: origin, producer, date and available checks. That makes responsibility across the supply chain easier to trace.",
      ],
    ],
  },
];

function InterviewPage() {
  return (
    <>
      <section className="hero-surface">
        <div className="mx-auto w-full max-w-5xl px-4 py-16 sm:px-5 md:py-20">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] opacity-75">
            The people behind AgroDev
          </p>
          <h1 className="mt-3 text-4xl font-bold leading-tight md:text-5xl">Team interviews</h1>
          <p className="mt-4 max-w-2xl text-lg leading-7 opacity-90">
            Four students discuss their project, climate risks and the role technology can play in
            Moldova's agriculture.
          </p>
        </div>
      </section>

      <section className="mx-auto w-full max-w-4xl px-4 py-16 sm:px-5 md:py-20">
        <div className="space-y-6">
          {interviews.map((person) => (
            <article key={person.name} className="card-soft p-6 sm:p-8">
              <h2 className="font-display text-2xl font-bold">{person.name}</h2>
              <div className="mt-5 space-y-6">
                {person.qa.map(([question, answer]) => (
                  <div key={question}>
                    <h3 className="font-semibold text-primary">{question}</h3>
                    <p className="mt-2 leading-7 text-muted-foreground">{answer}</p>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
