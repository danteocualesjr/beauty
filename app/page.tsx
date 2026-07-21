import { CategoryGrid } from "@/components/CategoryGrid";
import { DailyFooter } from "@/components/DailyFooter";
import { DailyHeader } from "@/components/DailyHeader";
import { getDailySelection } from "@/lib/content";

export const revalidate = 86400;

export default async function Home() {
  const today = new Date();
  const selection = await getDailySelection(today);

  return (
    <main className="mx-auto min-h-screen w-full max-w-6xl px-6 py-10 md:px-10 md:py-16">
      <DailyHeader date={today} />
      <CategoryGrid selection={selection} />
      <DailyFooter selection={selection} />
    </main>
  );
}
