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
    id: "igor-golban",
    tab: "Igor Golban",
    name: "Igor Golban",
    roles: [
      "Owner, \"Biantti\" LLC",
      "Cold-pressed oil producer",
    ],
    video: "/interviews/ig-golban.mp4",
    captions: [
      { start: 0, end: 4.5, text: "Good morning! Tell us, please, what exactly do you do?" },
      { start: 4.5, end: 8, text: "Tell us a bit about your farm: what types of oils do you produce?" },
      { start: 8, end: 12.5, text: "What crops do you grow yourself, and where are your fields located?" },
      { start: 13, end: 16.5, text: "My name is Igor Golban, I am the owner of \"Biantti\" LLC." },
      { start: 16.5, end: 22, text: "We have 28 hectares of walnuts, almonds, and sea buckthorn." },
      { start: 22, end: 28, text: "We produce oils, walnuts, seeds, vinegars, syrups, jams, and dried fruits." },
      { start: 28.5, end: 34, text: "Our range of oils includes over 45 types of cold-pressed oils." },
      { start: 34, end: 41, text: "Starting from pumpkin, flax, hemp, milk thistle, walnuts, almonds, hazelnuts." },
      { start: 41, end: 46, text: "Our range is very large. Basically, coconut oil —" },
      { start: 46, end: 52, text: "we have about 10–15 types of oils that our competitors do not produce." },
      { start: 52, end: 58, text: "Camelina oil, rosehip oil, amaranth oil, and other types." },
      { start: 58, end: 63.5, text: "We are located in Băcioi, Străisteni village." },
      { start: 63.5, end: 68, text: "That is where our production is, where our warehouse and business are." },
      { start: 70, end: 75, text: "What are the main sanitary rules and standards you follow" },
      { start: 75, end: 78.5, text: "to guarantee the quality and safety of your oil?" },
      { start: 79, end: 84.5, text: "First of all, we buy all certified seeds, with invoices and certificates from ANSA." },
      { start: 84.5, end: 90, text: "Our production is certified and all processes are fully traceable." },
      { start: 90, end: 96, text: "Starting from reception of raw materials, processing, filtration, bottling," },
      { start: 96, end: 101, text: "labeling, delivery — all in accordance with the HACCP standard." },
      { start: 101, end: 107, text: "We do everything so that the entire product is fully monitored" },
      { start: 107, end: 110.5, text: "and complies with current legislation." },
      { start: 111.5, end: 116, text: "It is known that in Moldova the climate is becoming unpredictable." },
      { start: 116, end: 121.5, text: "Severe droughts or hail strongly affect the harvest of oilseed crops." },
      { start: 121.5, end: 126.5, text: "Have you had seasons when the harvest was poor due to weather conditions?" },
      { start: 126.5, end: 131, text: "How did this reflect on oil production volume and cost?" },
      { start: 131.5, end: 136.5, text: "Basically, once every two years there is either a drought or some frosts." },
      { start: 136.5, end: 142, text: "We try our maximum locally, if not, we take products from the region," },
      { start: 142, end: 146, text: "from Romania, Ukraine, or imports." },
      { start: 146, end: 151.5, text: "We cannot fight the drought, we just procure the necessary seeds" },
      { start: 151.5, end: 155.5, text: "outside of local products if what arrived on the local market is available." },
      { start: 156.5, end: 161, text: "How useful would the functionality of our application and QR code system" },
      { start: 161, end: 165.5, text: "be for your farm, especially for confirming artisanal oil quality" },
      { start: 165.5, end: 168.5, text: "and planning raw material purchases?" },
      { start: 169, end: 173, text: "Every year it is harder and harder to manage and lead." },
      { start: 173, end: 178, text: "For this, every year we implement practically all technologies" },
      { start: 178, end: 182.5, text: "that can be implemented within the company." },
      { start: 182.5, end: 187.5, text: "We track and strive to automate and digitize the processes" },
      { start: 187.5, end: 190.5, text: "within the company." },
      { start: 191, end: 193, text: "Thank you very much!" },
    ],
    summary:
      "Igor Golban, owner of \"Biantti\" LLC, describes his 28-hectare farm producing over 45 types of cold-pressed oils, walnuts, seeds, vinegars, syrups, jams and dried fruits from walnuts, almonds and sea buckthorn. He explains that the company follows strict HACCP certification and full traceability from raw-material reception through to delivery. On climate, Golban notes that drought or frost hit roughly every two years, so the farm supplements local supply with imports from Romania and Ukraine. He sees the AgroHelp application and QR-code system as valuable tools for digitising internal processes and improving planning.",
  },
  {
    id: "wulf-schmieder",
    tab: "Wulf Schmieder",
    name: "Wulf Schmieder",
    roles: [
      "Country Representative",
      "German Sparkassenstiftung Moldova",
    ],
    video: "/interviews/wulf-schmieder.mp4",
    captions: [
      { start: 0, end: 6, text: "Hello, what are the main financial and operational risks in agriculture?" },
      { start: 6, end: 11, text: "Such as droughts, lack of irrigation, or crop failure, that small farmers face?" },
      { start: 12, end: 17, text: "Main problems are legal framework, because Moldova has started" },
      { start: 17, end: 22, text: "30 years ago a land reform which is not finished." },
      { start: 22, end: 28, text: "So many farmers are not secure what fields they can use." },
      { start: 28, end: 33, text: "First, there is also a main obstacle for investors, by the way." },
      { start: 33, end: 38, text: "And the second problem, especially for small farmers:" },
      { start: 38, end: 44, text: "a lack of professional education and also a lack of financial literacy." },
      { start: 45, end: 50, text: "Have there been cases in your practice when financial support" },
      { start: 50, end: 55, text: "or loans to agriculture enterprises did not pay off?" },
      { start: 55, end: 60, text: "Or issues arose with repayment because farmers mismanaged their budgets?" },
      { start: 61, end: 66, text: "Yes, of course, it is a logical effect." },
      { start: 66, end: 72, text: "If you lack professional know-how and knowledge," },
      { start: 72, end: 77, text: "then you do the wrong things. You apply the wrong fertilizers," },
      { start: 77, end: 82, text: "the wrong machinery. So this happens quite often." },
      { start: 83, end: 88, text: "We are developing a platform where artificial intelligence will process data" },
      { start: 88, end: 93, text: "from field sensors and predict irrigation needs" },
      { start: 93, end: 98, text: "based on real weather conditions. How much would such precision help" },
      { start: 98, end: 103, text: "financial organizations and investors reduce crop failure risks?" },
      { start: 104, end: 110, text: "Such a tool can help farmers and is also very interesting" },
      { start: 110, end: 115, text: "for banks and insurance companies, because the big complaint" },
      { start: 115, end: 120, text: "of banks and financial institutions is that farmers are not \"bankable\"." },
      { start: 120, end: 126, text: "That means they do not provide enough information to the banks" },
      { start: 126, end: 131, text: "which refer directly to their operational business and results." },
      { start: 131, end: 137, text: "With the help of such a tool, they would be able to provide" },
      { start: 137, end: 142, text: "better information about it." },
      { start: 142, end: 147, text: "And another problem is the insurance, because only a small part" },
      { start: 147, end: 152, text: "of the small farmers are insured. That means if there is any hailstorm," },
      { start: 152, end: 157, text: "they often have a huge loss." },
      { start: 157, end: 163, text: "With data from sensors, a farmer could prove the weather conditions" },
      { start: 163, end: 168, text: "and prove his demands to insurance companies." },
      { start: 169, end: 174, text: "On our platform, farmers will be able to find educational video tutorials" },
      { start: 174, end: 179, text: "from university professors on financial planning." },
      { start: 179, end: 184, text: "How in-demand is financial literacy education among small farmers in Moldova?" },
      { start: 184, end: 189, text: "Would this help improve their creditworthiness?" },
      { start: 190, end: 195, text: "Professional know-how and financial literacy is really needed," },
      { start: 195, end: 200, text: "and farmers like to get know-how about these topics." },
      { start: 201, end: 206, text: "Our platform plans to feature a separate information block" },
      { start: 206, end: 211, text: "with real testing results of technologies on pilot farms." },
      { start: 211, end: 216, text: "How much will this help financial structures and investors" },
      { start: 216, end: 221, text: "direct funds only toward proven solutions?" },
      { start: 222, end: 227, text: "Well, to spread best practices is always good," },
      { start: 227, end: 232, text: "but it would be not enough just to present the best results." },
      { start: 232, end: 237, text: "You should also present the way how you can achieve these good results." },
      { start: 237, end: 243, text: "The target group for this I see mainly in local farmers," },
      { start: 243, end: 248, text: "not that much in investors, because the investors usually" },
      { start: 248, end: 253, text: "do not need that much tips like the local farmers." },
      { start: 254, end: 256, text: "Okay, thank you so much." },
    ],
    summary:
      "Wulf Schmieder, Country Representative of German Sparkassenstiftung Moldova, explains the main financial and operational risks facing small farmers. He identifies an unfinished land reform — leaving farmers uncertain about which fields they can use — and a lack of professional and financial education as the primary obstacles. Schmieder notes that loan defaults often stem from missing know-how, leading to wrong fertiliser or machinery choices. He highlights that AI-driven sensor data could help farmers become \"bankable\" by providing verifiable operational information to banks and insurers. Financial literacy training is in high demand among Moldovan farmers, and sharing best practices — along with the method behind them — would help direct investment toward proven solutions.",
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
