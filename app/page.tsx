import { CategoryGrid } from "@/components/CategoryGrid";
import { DailyFooter } from "@/components/DailyFooter";
import { DailyHeader } from "@/components/DailyHeader";
import { getDailySelection } from "@/lib/content";

export const revalidate = 86400;

export default async function Home() {
  const today = new Date();
  const selection = await getDailySelection(today);

  return (
    <main className="relative mx-auto min-h-screen w-full max-w-6xl px-5 pb-20 pt-16 md:px-12 md:pb-28 md:pt-24">
      <DailyHeader date={today} />
      <CategoryGrid selection={selection} />
      <DailyFooter selection={selection} />
    </main>
  );
}
