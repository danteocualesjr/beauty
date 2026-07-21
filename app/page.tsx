import { CategoryGrid } from "@/components/CategoryGrid";
import { DailyFooter } from "@/components/DailyFooter";
import { DailyHeader } from "@/components/DailyHeader";
import { getDailySelection } from "@/lib/content";

export const revalidate = 86400;

export default async function Home() {
  const today = new Date();
  const selection = await getDailySelection(today);

  return (
    <main className="mx-auto min-h-screen w-full max-w-6xl px-6 pb-16 pt-14 md:px-10 md:pb-24 md:pt-20">
      <DailyHeader date={today} />
      <CategoryGrid selection={selection} />
      <DailyFooter selection={selection} />
    </main>
  );
}
