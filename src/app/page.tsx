"use client"

import UniformSelector from "./components/UniformSelector";

export default function Home() {
  return (
    <div className="flex flex-row">
      <UniformSelector team={"MIA"} />
      <UniformSelector team={"BAL"} />
    </div>
  );
}
