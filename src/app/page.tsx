import Image from "next/image";
import {Flow} from "@/components/Flow";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center gap-4 py-8 md:py-10" >
      <h1>Hello</h1>
        <div>
            <Flow/>
        </div>
    </div>
  );
}
