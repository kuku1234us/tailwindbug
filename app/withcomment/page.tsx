import { StyleTable } from "@/lib/styleLookup";

export default function Page() {
  console.log("sty", StyleTable["inputField"]);
  return (
    <div className="relative text-5xl w-full h-full">
      Test
      <input className={StyleTable["inputField"]} />
    </div>
  );
}
