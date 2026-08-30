import { createFileRoute } from "@tanstack/react-router";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export const Route = createFileRoute("/interview")({
  head: () => ({
    meta: [
      { title: "Interviews | AgroDev" },
      {
        name: "description",
        content:
          "Conversations with food safety, quality and sustainability experts supporting Moldova's agriculture.",
      },
      { property: "og:title", content: "Interviews | AgroDev" },
      {
        property: "og:description",
        content: "Watch expert conversations from the AgroDev community.",
      },
    ],
  }),
  component: InterviewPage,
});

const interviews = [
  {
    id: "andrei-cumpanici",
    tab: "Andrei Cumpanici",
    name: "Andrei Cumpanici",
    roles: [
      "Doctor Universitar, UTM",
      "Food Safety, Quality and Sustainability Manager",
    ],
    video: "/interviews/andrei-cumpanici.mp4",
    summary:
      "Andrei Cumpanici explains that food safety begins in the field: farmers need to use approved fertilizers and plant-protection products correctly, follow production practices and observe the required waiting periods before harvest. He highlights residue analysis as an essential check for meeting Moldovan and export-market standards. He also sees practical training as vital: online learning can help people build on existing knowledge, but should complement direct instruction from specialists. A reliable platform can bring together current technology updates and high-quality video lessons, helping farmers and processors apply research-based guidance with confidence.",
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
          <h1 className="mt-3 text-4xl font-bold leading-tight md:text-5xl">
            Interviews
          </h1>
          <p className="mt-4 max-w-2xl text-lg leading-7 opacity-90">
            Hear from the experts whose knowledge helps make agriculture safer,
            more sustainable and better prepared for the future.
          </p>
        </div>
      </section>

      <section className="mx-auto w-full max-w-5xl px-4 py-16 sm:px-5 md:py-20">
        <Tabs defaultValue={interviews[0].id} className="w-full">
          <TabsList className="h-auto max-w-full justify-start gap-1 overflow-x-auto">
            {interviews.map((interview) => (
              <TabsTrigger
                key={interview.id}
                value={interview.id}
                className="px-4 py-2"
              >
                {interview.tab}
              </TabsTrigger>
            ))}
          </TabsList>

          {interviews.map((interview) => (
            <TabsContent
              key={interview.id}
              value={interview.id}
              className="mt-6"
            >
              <article className="card-soft overflow-hidden">
                <div className="grid lg:grid-cols-[minmax(0,1.35fr)_minmax(18rem,0.65fr)]">
                  <div className="bg-ink">
                    <video
                      className="aspect-video h-full w-full object-contain"
                      controls
                      preload="metadata"
                      aria-label={`Interview with ${interview.name}`}
                    >
                      <source src={interview.video} type="video/mp4" />
                      Your browser does not support embedded video.
                    </video>
                  </div>

                  <div className="p-6 sm:p-8">
                    <p className="text-sm font-semibold uppercase tracking-[0.16em] text-primary">
                      Interview guest
                    </p>
                    <h2 className="mt-3 font-display text-3xl font-bold">
                      {interview.name}
                    </h2>
                    <div className="mt-4 space-y-1 text-sm leading-6 text-muted-foreground">
                      {interview.roles.map((role) => (
                        <p key={role}>{role}</p>
                      ))}
                    </div>

                    <div className="mt-8 border-t pt-6">
                      <h3 className="font-display text-xl font-bold">
                        Summary
                      </h3>
                      <p className="mt-3 leading-7 text-muted-foreground">
                        {interview.summary}
                      </p>
                    </div>
                  </div>
                </div>
              </article>
            </TabsContent>
          ))}
        </Tabs>
      </section>
    </>
  );
}
