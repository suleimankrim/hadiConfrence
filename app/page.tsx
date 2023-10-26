import Image from 'next/image'
import sudi from '@/public/saudiarabia20.jpg'
import { Separator } from '@/components/ui/separator'
import HadiDot from './components/HadiDot'
import HadiTitle from './components/HadiTitle'

export default async function Home() {
  return (
    <>
      <div>
        <h1 className="w-screen mt-6 h-[15px] text-center text-xl md:text-3xl tracking-[2px]">
          <span className="text-sky-600 text-xl md:text-4xl">Q</span>uantum{' '}
          <span className="text-sky-600 text-xl md:text-4xl">S</span>oftware{' '}
          <span className="text-sky-600 text-xl md:text-4xl">E</span>ngineering{' '}
          <span className="text-sky-600 text-xl md:text-4xl">S</span>ummit
        </h1>
        <h1 className="w-screen mt-8 mb-2 italic h-[15px] text-gray-600 text-center text-xs md:text-lg">
          December 2024
        </h1>
        <div className="relative w-screen mt-6 h-[300px]">
          <Image
            fill
            src={sudi}
            alt="sudi"
            className="object-fill object-center"
            priority={true}
            sizes="100vw"
            quality="100"
            draggable={false}
            placeholder="blur"
            //blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
          ></Image>
        </div>
        <h1 className=" text-center text-gray-600 text-base md:text-lg mt-5 px-16 md:px-28 ">
          The ”<span className="text-sky-600 text-base md:text-lg">Q</span>
          uantum <span className="text-sky-600 text-base md:text-lg">E</span>
          ngineering{' '}
          <span className="text-sky-600 text-base md:text-lg">S</span>ummit,” a
          groundbreaking event aimed at exploring the intersection of software
          engineering and quantum computing.
        </h1>
        <div className="w-screen px-20 md:px-44 mt-7 mb-14 space-y-4">
          <Separator className="bg-blue-900"></Separator>
          <h1 className="text-center text-base md:text-lg mt-3 text-sky-600 ">
            Introduction
          </h1>
          <p className="text-justify">
            The rapidly evolving landscape of quantum computing has ushered in a
            new era of computational possibilities, fundamentally reshaping the
            boundaries of what was once thought to be impossible. Quantum
            computing’s potential to revolutionize industries, from cryptography
            to drug discovery, is undeniable. However, harnessing this immense
            power requires a deep understanding of quantum software engineering.
            We are thrilled to introduce the ”Quantum Software Engineering
            Summit,” an unprecedented gathering that bridges the realms of
            software engineering and quantum computing. This pioneering event
            seeks to explore the pivotal role of software engineering in
            unlocking the full potential of quantum computing technologies. In a
            world where quantum supremacy is on the horizon, the Quantum
            Software Engineering Summit emerges as a crucial forum for
            researchers, engineers, and industry leaders to converge, exchange
            ideas, and propel the field forward. This summit will not only
            provide a platform for cutting-edge research presentations but also
            foster interdisciplinary collaborations that will shape the future
            of quantum software engineering. As we navigate the uncharted waters
            of quantum computing, it is imperative that we lay the groundwork
            for robust software development practices, algorithms, and tools.
            This Summit is dedicated to advancing our collective knowledge in
            these domains, paving the way for the quantum era. Join us on this
            remarkable journey, where experts and enthusiasts alike will come
            together to explore, innovate, and chart the course for quantum
            software engineering. Together, we will unlock the boundless
            potential of quantum computing and usher in a new era of
            computational capabilities. We look forward to your participation
            and contributions to this groundbreaking event.
          </p>
          <Separator className="bg-blue-900"></Separator>
        </div>
      </div>
      <div className="px-12 md:px-40 my-6 w-full h-full flex gap-6">
        <div className="flex-1 space-y-3">
          <div className="border rounded-md shadow-lg p-4 text-justify  space-x-1">
            <div className="flex justify-center">
              <HadiTitle
                title="Conference
            Overview "
              ></HadiTitle>
            </div>{' '}
            The ”Quantum Software Engineering Summit” is not just another
            conference; it is a transformative journey into the heart of the
            quantum computing revolution. This summit stands at the crossroads
            of innovation, where quantum technologies and software engineering
            converge to shape the future of computation.
          </div>
          <div className="border rounded-md shadow-lg text-justify p-4">
            <div className="flex justify-center">
              <HadiTitle title="Unlocking Quantum Potential"></HadiTitle>
            </div>
            At the core of our summit lies the belief that the potential of
            quantum computing can only be fully realized through the art and
            science of software engineering. As quantum hardware evolves at a
            breathtaking pace, the real challenge becomes harnessing its power
            effectively. This is where quantum software engineering steps in,
            providing the keys to unlock the quantum realm.
          </div>
        </div>
        <div className="space-y-3 flex-1 ">
          <div className="border rounded-md shadow-lg text-justify p-4">
            <div className="flex justify-center">
              <HadiTitle title="Our Vision"></HadiTitle>
            </div>
            Imagine a world where computational boundaries are shattered, where
            problems that once seemed insurmountable are solved in seconds, and
            where the possibilities for scientific discovery and technological
            advancement are limitless. This is the vision that propels the
            Quantum Software Engineering Summit.
          </div>
          <div className="border rounded-md text-justify shadow-lg pt-4 px-4 pb-8 ">
            <div className="flex justify-center mb-2">
              <HadiTitle title="Gathering of Pioneers"></HadiTitle>
            </div>
            The Quantum Software Engineering Summit is more than an event; it’s
            a gathering of pioneers, a meeting of minds, and a collaborative
            endeavor to explore uncharted territories. Here, leading experts,
            researchers, and practitioners from diverse backgrounds come
            together to share their insights, discoveries, and visions for the
            quantum future.
          </div>
        </div>
      </div>
      <div className="flex justify-center mb-10">
        <div className="border rounded-md max-w-[600px] text-justify shadow-lg p-4">
          <div className="flex justify-center mb-2">
            <HadiTitle title="Join the Quantum Revolution"></HadiTitle>
          </div>
          The Quantum Software Engineering Summit is your opportunity to join
          the quantum revolution. Whether you are a seasoned quantum physicist,
          a software engineer, a researcher, or simply curious about the quantum
          world, this summit welcomes you. Together, we will chart the course
          for quantum software engineering, break computational boundaries, and
          usher in a new era of possibilities.
        </div>
      </div>
      <div className="w-screen px-20 md:px-44 mt-7 mb-14 space-y-4">
        <Separator className="bg-blue-900"></Separator>
        <div className=" w-full flex flex-col items-center mt-3 font-bold">
          For further information, please contact the General chair: Professor
          Manuel Mazzara <div>m.mazzara@innopolis.ru</div>
        </div>
      </div>
    </>
  )
}
