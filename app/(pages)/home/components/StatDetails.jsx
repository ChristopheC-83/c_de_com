"use client";

import { statInternet } from "@/datas/statInternet";
import { useStatsStore } from "@/store/StatStore";

export default function StatDetails() {
  const { selectedStat } = useStatsStore();

  const stat = statInternet.find((stat) => stat.id === selectedStat);

  return (
    <div className="container">
      <div className="flex flex-col w-full justify-center lg:justify-start border-2 border-ring bg-card text-card-foreground mt-8 p-1.5 xs:p-2 sm:p-3 md:p-4 customShadow rounded-xl customBorder">
      <p>
        stat detail - {stat?.id}
      </p>
      
    </div>
    </div>
  );
}
