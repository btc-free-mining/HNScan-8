import React from "react";
import { useQuery, LineChart } from "@urkellabs/ucl";

export default function DailyDifficulty() {
  //@todo eventually we can make this configurable, but no need right now.
  const { data } = useQuery("/charts/difficulty", {
    startTime: Math.floor(Date.now() / 1000) - 1000 * 24 * 3600,
    endTime: Math.floor(Date.now() / 1000)
  });

  return (
    <LineChart
      axisLabels={["", "Difficulty (in millions)"]}
      chartLabel="Daily Average Difficulty"
      data={data}
      dataLabels={["Daily Average Difficulty"]}
      yFormatter={el => el / 1000000}
    />
  );
}
