import Trending from "@/components/category-sections/trending";
import News from "@/components/category-sections/news";
import Investigation from "@/components/category-sections/investigation";
import Entertainment from "@/components/category-sections/entertainment";
import PeaceSecurity from "@/components/category-sections/peace-security";
import Politics from "@/components/category-sections/politics";
import Education from "@/components/category-sections/education";
import Agriculture from "@/components/category-sections/agriculture";
import Health from "@/components/category-sections/health";
import Africa from "@/components/category-sections/africa";
import WorldNews from "@/components/category-sections/world-news";
import Opinion from "@/components/category-sections/opinion";
import Recent from "@/components/category-sections/recent";
import Sport from "@/components/category-sections/sport";
import AntiCorruption from "@/components/category-sections/anti-corruption";
import HumanRight from "@/components/category-sections/human-right";
import YoutubeVideos from "@/components/category-sections/yt-videos";

export default function Home() {
  return (
    <main className="px-5 py-6 xl:px-24 lg:px-8 overflow-hidden">
      <section>
        <Trending />
      </section>

      <section>
        <div className="lg:flex w-full gap-5 mb-5">
          <div className="w-full basis-3/4">
            {/* News */}
            <News />

            {/* Youtube */}
            <YoutubeVideos />
            
            {/* Investigation */}
            <Investigation />

            {/* Anti Corruption */}
            {/* <AntiCorruption /> */}

            {/* Education */}
            <Education />

            {/* Agriculture */}
            <Agriculture />

            {/* Health */}
            <Health />

            {/* HumanRight */}
            {/* <HumanRight /> */}

            {/* Peace & Security */}
            <PeaceSecurity />

            {/* Politics */}
            <Politics />

            {/* Sport */}
            <Sport />

            {/* Entertainment */}
            <Entertainment />

            {/* Opinion */}
            <Opinion />

            {/* Africa */}
            <Africa />
          </div>
          {/* Recent */}
          <Recent />
        </div>
      </section>
      {/* World News */}
      <WorldNews />
    </main>
  );
}
