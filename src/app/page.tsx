"use client";
import Image from "next/image";
import Base from "./components/Base";
import { usePathname } from "next/navigation";

export default function Home() {
  const pathname = usePathname()

  return (
    <>
      <Base>
        <div className="relative">
          <Image src={pathname + "/solvay.jpg"} height={1500} width={1500} objectFit="cover" alt="Solvay Conference" />
          <div className="absolute bottom-24 left-0 right-0 text-center text-white text-shadow bg-slate-500 bg-opacity-20">
            <h1 className="text-7xl font-bold">Octopus Alliances</h1>
            <p className="text-2xl font-bold">It&apos;s all about you</p>
          </div>
        </div>
        <div className="px-4">
          <p className="text-center text-xl">1927 conference that included Albert Einstein and Marie Curie. In all 27 Noble Prize winners attended.</p>

          <p>Image missing...</p>

          <h2 className="font-bold text-2xl">Our focus is simple: You.</h2>
          <p>
            Occy Social and Business Alliances empower people, businesses and communities with solutions designed to drive your growth, and unlock your success.
            We customize our approach to meet your unique needs, helping you to seize your opportunities, overcome your challenges, and thrive.
          </p>

          <div className="flex pt-10">
            <div className="w-1/2"></div>
            <div className="w-1/2">
              <div className="flex space-x-5 justify-center">
                <Image src={pathname + "/octopus.png"} height={150} width={150} alt="Octopus Logo" className="place-self-center rounded-2xl" />
                <p className="font-bold text-3xl self-center font-serif">Occy Social Alliances</p>
              </div>
              <p>Occy Social Alliances connect you to a dynamic global commerce ecosystem where people, businesses, and communities unite to inspire growth and success. With a focus on building meaningful alliances Occy empowers you to thrive</p>
            </div>
          </div>

          <div className="flex pt-10">
            <div className="w-1/2">
              <div className="flex space-x-5 justify-center">
                <Image src={pathname + "/octopus.png"} height={150} width={150} alt="Octopus Logo" className="place-self-center rounded-2xl" />
                <p className="font-bold text-3xl self-center font-serif">Occy Business Alliances</p>
              </div>
              <h3 className="font-bold text-2xl py-5">Directories</h3>
              <p>Many business owners struggle with directory information that is scattered, outdated, inconsistent, or ineffective. For you this can lead to time-consuming updates, stress in measuring your performance, duplicate listings, and challenges in responding to your reviews.
              <br />
              <br />
              Occy will help you with that struggle, ensuring your information is accurate, impactful, and easy to manage, helping your business thrive.</p>
            </div>
            <div className="w-1/2"></div>
          </div>
        </div>
      </Base>
    </>
  );
}
