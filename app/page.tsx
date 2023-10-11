import Image from 'next/image'
import sudi from '@/public/saudiarabia20.jpg'
import { Separator } from '@/components/ui/separator'

export default async function Home() {
  return (
    <div>
      <h1 className="w-screen mt-6 h-[15px] text-center text-3xl tracking-[2px]">
        <span className="text-sky-600 text-4xl">Q</span>uantum{' '}
        <span className="text-sky-600 text-4xl">S</span>oftware{' '}
        <span className="text-sky-600 text-4xl">E</span>ngineering{' '}
        <span className="text-sky-600 text-4xl">S</span>ummit
      </h1>
      <h1 className="w-screen mt-8 italic h-[15px] text-gray-600 text-center text-lg">
        December 2024
      </h1>
      <h1 className="w-screen mb-2 h-[15px] text-gray-600 mt-4 italic text-center text-lg">
        Jeddah, Saudi Arabia
      </h1>
      <div className="relative w-screen mt-6 h-[300px]">
        <Image
          fill
          src={sudi}
          alt="sudi"
          className="object-cover object-center"
          priority={true}
          sizes="100vw"
          quality="100"
          placeholder="blur"
          blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
        ></Image>
      </div>
      <h1 className=" text-center text-gray-600 text-lg mt-5 px-28 ">
        The ”<span className="text-sky-600 text-lg">Q</span>uantum{' '}
        <span className="text-sky-600 text-lg">S</span>oftware{' '}
        <span className="text-sky-600 text-lg">E</span>ngineering{' '}
        <span className="text-sky-600 text-lg">S</span>ummit,” a groundbreaking
        event aimed at exploring the intersection of software engineering and
        quantum computing.
      </h1>
      <div className="w-screen px-44 mt-7 mb-14 space-y-4">
        <Separator className="bg-blue-900"></Separator>
        <h1 className="text-center text-lg mt-3 text-sky-600 ">Introduction</h1>
        <p className="text-center">
          The rapidly evolving landscape of quantum computing has ushered in a
          new era of computational possibilities, fundamentally reshaping the
          boundaries of what was once thought to be impossible. Quantum
          computing’s potential to revolutionize industries, from cryptography
          to drug discovery, is undeniable. However, harnessing this immense
          power requires a deep understanding of quantum software engineering.
          We are thrilled to introduce the ”Quantum Software Engineering
          Summit,” an unprecedented gathering that bridges the realms of
          software engineering and quantum computing. This pioneering event
          seeks to explore the pivotal role of software engineering in unlocking
          the full potential of quantum computing technologies. In a world where
          quantum supremacy is on the horizon, the Quantum Software Engineering
          Summit emerges as a crucial forum for researchers, engineers, and
          industry leaders to converge, exchange ideas, and propel the field
          forward. This summit will not only provide a platform for cutting-edge
          research presentations but also foster interdisciplinary
          collaborations that will shape the future of quantum software
          engineering. As we navigate the uncharted waters of quantum computing,
          it is imperative that we lay the groundwork for robust software
          development practices, algorithms, and tools. The Quantum Software
          Engineering Summit is dedicated to advancing our collective knowledge
          in these domains, paving the way for the quantum era. Join us on this
          remarkable journey, where experts and enthusiasts alike will come
          together to explore, innovate, and chart the course for quantum
          software engineering. Together, we will unlock the boundless potential
          of quantum computing and usher in a new era of computational
          capabilities. We look forward to your participation and contributions
          to this groundbreaking event.
        </p>
        <Separator className="bg-blue-900"></Separator>
      </div>
    </div>
  )
}
