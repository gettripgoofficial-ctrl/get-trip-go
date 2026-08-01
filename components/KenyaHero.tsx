import Image from "next/image"
import { kenyaHero } from "@/data/kenyaData"

export default function KenyaHero() {
  return (
    <div className="relative h-[420px] sm:h-[560px] w-full">
      <Image
        src={kenyaHero.image}
        alt="Kenya safari landscape"
        fill
        priority
        sizes="100vw"
        className="object-cover object-bottom"
      />
    </div>
  )
}
