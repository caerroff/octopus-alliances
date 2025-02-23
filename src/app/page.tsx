"use client";
import Image from "next/image";
import Base from "./components/Base";
import { usePathname } from "next/navigation";
import { createRef, Ref, useEffect, useState } from "react";

export default function Home() {
  const pathname = usePathname()

  const page1 = createRef<HTMLDivElement>()
  const page2 = createRef<HTMLDivElement>()
  const page3 = createRef<HTMLDivElement>()
  const pages = [page1, page2, page3]
  let pageIndex = 0

  useEffect(() => {
    function changePage() {
      if(pageIndex + 1 >= pages.length){
        pageIndex = 0
      }else{
        pageIndex ++;
      }
      pages[pageIndex].current?.scrollIntoView({behavior: "smooth"})
    }

    if (typeof window !== 'undefined') {
      window.addEventListener('wheel', () => {
        setTimeout(() => {
          changePage()
      }, 20)})
    }
  }, [])

  return (
    <>
      <Base ref={page1}>
        <div className="place-content-center">
          <div className="relative">
            <Image src={"/solvay.jpg"} height={1500} width={1500} className="object-cover h-[60vh] lg:h-auto w-screen" alt="Solvay Conference" />
            <div className="absolute bottom-24 left-0 right-0 text-center text-white text-shadow bg-slate-500 bg-opacity-20">
              <h1 className="text-3xl lg:text-7xl font-bold">Octopus Alliances</h1>
              <p className="text-xl lg:text-2xl font-bold">It&apos;s all about you</p>
            </div>
          </div>
          <div className="px-4">
            <p className="text-center text-xl">1927 conference that included Albert Einstein and Marie Curie. In all 27 Noble Prize winners attended.</p>
            <h2 className="font-bold text-2xl text-center text-secondary">All about you</h2>
            <div className="flex justify-center">
              <p className="text-lg text-center w-3/4 leading-5">
                Occy Social and Business Alliances empower people, businesses and communities with solutions designed to drive your growth, and unlock your success.
                We customize our approach to meet your unique needs, helping you to seize your opportunities, overcome your challenges, and thrive.
              </p>
            </div>
          </div>
        </div>

        <div className="min-h-screen place-content-center" ref={page2}>
          <div className="flex pt-10">
            <div className="w-1/2 flex flex-col justify-center place-items-center">
              <div className="p-2 py-10 bg-stone-800">
                <h2 className="text-xl text-secondary">Occy Social Alliances</h2>
                <p className="w-2/3 text-justify">
                  Occy Social Alliance is a decentralized global platform designed for authentic connection, collaboration, and collective action.
                  More than just about business, Occy is built on shared values and a commitment to doing what is right, helping people and local communities.
                  By providing cutting-edge technology, vital resources, and strategic guidance, Occy empowers a global network of people and communities to create a more just, sustainable, and connected future.
                </p>
              </div>
            </div>
            <div className="w-1/2">
              <div className="flex space-x-5 justify-center">
                <Image src={"/octopus.png"} height={150} width={150} alt="Octopus Logo" className="place-self-center rounded-2xl object-cover" />
                <p className="font-bold text-3xl self-center font-serif">Occy Social Alliances</p>
              </div>
              <p>Occy Social Alliances connect you to a dynamic global commerce ecosystem where people, businesses, and communities unite to inspire growth and success. With a focus on building meaningful alliances Occy empowers you to thrive</p>
            </div>
          </div>
        </div>

        <div className="pt-10 min-h-screen content-center" ref={page3}>
          <div className="w-1/2">
            <div className="flex space-x-5 justify-center">
              <Image src={(pathname == '/' ? "" : pathname) + "/octopus.png"} height={150} width={150} alt="Octopus Logo" className="place-self-center rounded-2xl" />
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
      </Base >
    </>
  );
}
