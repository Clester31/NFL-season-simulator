"use client"

import UniformSelector from "./components/UniformSelector";

export default function Home() {
  return (
    <div className="flex flex-row">
      <UniformSelector team={"JAX"} location={"away"} />
      <UniformSelector team={"WAS"} location={"home"} />
    </div>
  );
}
