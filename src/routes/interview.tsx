import { useRef, useState } from "react";
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
    captions: undefined,
    summary:
      "Andrei Cumpanici explains that food safety begins in the field: farmers need to use approved fertilizers and plant-protection products correctly, follow production practices and observe the required waiting periods before harvest. He highlights residue analysis as an essential check for meeting Moldovan and export-market standards. He also sees practical training as vital: online learning can help people build on existing knowledge, but should complement direct instruction from specialists. A reliable platform can bring together current technology updates and high-quality video lessons, helping farmers and processors apply research-based guidance with confidence.",
  },
  {
    id: "vineyard-winemaking",
    tab: "Vineyard & winemaking",
    name: "Independent wine producer",
    roles: ["Small vineyard owner", "Wine producer"],
    video: "/interviews/wine-producer.mp4",
    summary:
      "A small-scale wine producer describes how rising heat, drought and disease pressure threaten grape quality and vineyard yields. Excessive heat can raise sugars before phenolic ripeness and acidity develop, while water stress slows growth and may prevent grapes from ripening before autumn. Heavy rain followed by heat keeps leaves wet and encourages disease. Although monitoring tools for leaf wetness and humidity could speed up protection decisions, their cost makes them harder for small producers to adopt. The interview highlights the value of practical, affordable climate-smart tools for vineyards of every size.",
    captions: [
      {
        start: 0,
        end: 8.5,
        text: "Tell us a little about yourself and what you do.",
      },
      {
        start: 8.5,
        end: 17,
        text: "My whole life revolves around wine, vineyards and winemaking.",
      },
      {
        start: 17,
        end: 27,
        text: "Today, my brother and I run our own small wine production.",
      },
      {
        start: 27,
        end: 39,
        text: "We both worked as sommeliers for many years, and my brother is a trained winemaking technologist.",
      },
      {
        start: 39,
        end: 51,
        text: "We have been producing our own wine for six years and also have our own small vineyards.",
      },
      {
        start: 51,
        end: 68,
        text: "What are the main difficulties you face in the vineyard: weather, drought, vine diseases, and the technologies you use to care for it?",
      },
      {
        start: 68,
        end: 80,
        text: "All of these are important challenges, beginning with excessive heat.",
      },
      {
        start: 80,
        end: 93,
        text: "In the heat, grapes accumulate sugar very quickly, but phenolic ripeness does not develop.",
      },
      {
        start: 93,
        end: 106,
        text: "When the seeds remain green, the wine can show unripe, astringent notes.",
      },
      {
        start: 106,
        end: 119,
        text: "Wine needs acidity to feel alive and fresh; acidity also helps it keep longer.",
      },
      { start: 119, end: 131, text: "Excessive heat destroys this balance." },
      {
        start: 131,
        end: 145,
        text: "The second problem is the lack of rain and limited access to water.",
      },
      {
        start: 145,
        end: 161,
        text: "For large vineyards, water stress can block growth and delay grape ripening.",
      },
      {
        start: 161,
        end: 174,
        text: "If autumn cold arrives before the grapes build enough sugar, there will be no good wine.",
      },
      {
        start: 174,
        end: 189,
        text: "Heavy rain followed by heat keeps leaves wet — ideal conditions for disease.",
      },
      {
        start: 189,
        end: 206,
        text: "Have you or your colleagues faced challenges when implementing modern technologies, such as monitoring sensors, weather analysis or forecasting systems?",
      },
      {
        start: 206,
        end: 219,
        text: "I have not faced this personally because our vineyards are small and the risks are lower.",
      },
      {
        start: 219,
        end: 231,
        text: "These tools would certainly make our work easier, but they require major investment.",
      },
      {
        start: 231,
        end: 246,
        text: "Small producers need to use their funds carefully, while large companies cannot afford major losses.",
      },
      {
        start: 246,
        end: 260,
        text: "It is valuable to know how long a leaf stays wet and what the humidity is.",
      },
      {
        start: 260,
        end: 274,
        text: "That information helps growers decide faster when to spray and protect the vineyard.",
      },
      {
        start: 274,
        end: 314.6,
        text: "These technologies are very helpful when there are sufficient funds to invest in them.",
      },
    ],
  },
  {
    id: "beekeeping-family",
    tab: "Beekeeping family",
    name: "Four-generation beekeeping family",
    roles: ["Grozasca village, Ungheni District", "Around 200 hives"],
    video: "/interviews/beekeeping-family.mp4",
    summary:
      "A fourth-generation family beekeeping business in Grozasca explains how it produces a range of honeys, propolis, pollen and seed-and-nut mixes from around 200 hives. The producer outlines strict sanitation, packaging and veterinary practices, relying on approved treatments and natural options such as oxalic acid. The interview also describes the severe 2025 season, when cold during acacia and linden flowering, followed by drought, left little harvest and forced the family to keep their limited honey for the bees. They see AgroHelp as a useful tool for weather and crop-spraying alerts, helping beekeepers protect colonies and plan ahead.",
    captions: [
      {
        start: 0,
        end: 19,
        text: "Good morning. Please tell us what you do, which bee products you make and where your apiary is located.",
      },
      {
        start: 19,
        end: 31,
        text: "We are a family of bee-product producers, engaged in beekeeping for four generations.",
      },
      {
        start: 31,
        end: 43,
        text: "The younger generation has developed it into a business. We now have around 200 hives.",
      },
      {
        start: 43,
        end: 55,
        text: "We are located in Grozasca village, Ungheni District.",
      },
      {
        start: 55,
        end: 69,
        text: "We produce acacia, linden, rapeseed and wildflower honey — and in some years honeydew or lavender honey.",
      },
      {
        start: 69,
        end: 82,
        text: "We also extract propolis and pollen, and make seed-and-nut mixes from crops we grow ourselves.",
      },
      {
        start: 82,
        end: 98,
        text: "Which sanitary and veterinary rules do you follow to guarantee honey quality and safety?",
      },
      {
        start: 98,
        end: 112,
        text: "As food producers, we follow the Republic of Moldova's sanitary-veterinary requirements.",
      },
      {
        start: 112,
        end: 126,
        text: "Everything must be disinfected and washed during honey packaging, filling and labelling.",
      },
      {
        start: 126,
        end: 141,
        text: "Apiary treatments are carried out with veterinary approval or by trained beekeepers following the requirements.",
      },
      {
        start: 141,
        end: 154,
        text: "We mainly use natural products, treating bees with oxalic acid and traditional nettle preparations.",
      },
      {
        start: 154,
        end: 175,
        text: "Have extreme weather conditions ever prevented bees from collecting enough nectar, and how did this affect honey volumes?",
      },
      {
        start: 175,
        end: 188,
        text: "Yes. In 2025, the climate was completely unfavourable — the worst crisis in about 30 years.",
      },
      {
        start: 188,
        end: 202,
        text: "We harvested neither acacia nor linden honey: it was cold, the acacia froze and there were no flowers.",
      },
      {
        start: 202,
        end: 216,
        text: "Drought followed, and we kept the very small wildflower harvest for the bees to survive on. There was no profit that year.",
      },
      {
        start: 216,
        end: 235,
        text: "How could AgroHelp and QR codes help your farm with planning and confirming artisanal honey quality?",
      },
      {
        start: 235,
        end: 247,
        text: "The application is welcome, especially if it sends notifications about unfavourable temperatures.",
      },
      {
        start: 247,
        end: 256.5,
        text: "Spraying alerts would also help beekeepers protect colonies from poisoning and take timely action.",
      },
    ],
  },
];

function InterviewVideo({
  video,
  name,
  captions,
}: {
  video: string;
  name: string;
  captions?: { start: number; end: number; text: string }[];
}) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [currentTime, setCurrentTime] = useState(0);
  const activeCaption = captions?.find(
    (caption) => currentTime >= caption.start && currentTime < caption.end,
  );

  return (
    <div className="relative aspect-video w-full overflow-hidden bg-ink">
      <video
        ref={videoRef}
        className="h-full w-full object-contain"
        controls
        preload="metadata"
        aria-label={`Interview with ${name}`}
        onTimeUpdate={() => setCurrentTime(videoRef.current?.currentTime ?? 0)}
        onSeeked={() => setCurrentTime(videoRef.current?.currentTime ?? 0)}
      >
        <source src={video} type="video/mp4" />
        Your browser does not support embedded video.
      </video>
      {activeCaption && (
        <p
          aria-live="polite"
          className="pointer-events-none absolute inset-x-4 bottom-14 mx-auto max-w-[90%] rounded bg-black/80 px-4 py-2 text-center text-sm font-semibold leading-5 text-white shadow-lg sm:text-base"
        >
          {activeCaption.text}
        </p>
      )}
    </div>
  );
}

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
                  <div className="self-start">
                    <InterviewVideo
                      video={interview.video}
                      name={interview.name}
                      captions={interview.captions}
                    />
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
