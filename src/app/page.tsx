"use client";
import Image from "next/image";
import Base from "./components/Base";
import { createRef, useEffect } from "react";

export default function Home() {
  const page1 = createRef<HTMLDivElement>()
  const page2 = createRef<HTMLDivElement>()
  const page3 = createRef<HTMLDivElement>()
  const page4 = createRef<HTMLDivElement>()
  const page5 = createRef<HTMLDivElement>()
  const page6 = createRef<HTMLDivElement>()
  const page7 = createRef<HTMLDivElement>()
  const pages = [page1, page2, page3, page4, page5, page6, page7]
  let pageIndex = 0
  let canMove = true;

  useEffect(() => {
    function changePage(delta: number) {
      if (!canMove || (delta > -10 && delta < 10)) {
        return
      }

      if (delta < 0) {
        if (pageIndex > 0) {
          pageIndex--;
        }
      }
      else {
        if (pageIndex + 1 < pages.length) {
          pageIndex++;
        }
      }

      console.log(pageIndex);

      pages[pageIndex].current?.scrollIntoView({ behavior: "smooth" })

      if (pageIndex == pages.length) {
        window.scroll({top: delta})
      }

      canMove = false;
      setTimeout(() => {
        canMove = true;
      }, 400)
    }

    if (typeof window !== 'undefined') {
      window.addEventListener('wheel', (e) => {
        e.preventDefault();
        e.stopPropagation();
        changePage(e.deltaY)
      }, { passive: false })
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
          <div className="flex flex-col lg:flex-row pt-10">
            <div className="w-1/2 flex flex-col justify-center place-items-center mt-12">
              <div className="w-2/3 mx-auto">
                <div className="p-2 py-10 bg-stone-800 px-5">
                  <h2 className="text-xl text-secondary text-center font-bold">Occy Social Alliances</h2>
                  <p className="text-justify font-serif text-lg">
                    Occy Social Alliance is a decentralized global platform designed for authentic connection, collaboration, and collective action.
                    <br />
                    <br />
                    More than just about business, Occy is built on shared values and a commitment to doing what is right, helping people and local communities.
                    <br />
                    <br />
                    By providing cutting-edge technology, vital resources, and strategic guidance, Occy empowers a global network of people and communities to create a more just, sustainable, and connected future.
                  </p>
                  <div className="flex justify-end">
                    <a href="#" className="bg-secondary hover:bg-yellow-600 text-white p-2 mt-2 rounded-lg">Learn more</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-1/2 -mt-24">
              <div className="flex space-x-5 justify-center">
                <Image src={"/octopus.png"} height={150} width={150} alt="Octopus Logo" className="place-self-center rounded-2xl object-cover" />
                <p className="font-bold text-3xl self-center font-serif">Occy Social Alliances</p>
              </div>
              <p>Occy Social Alliances connect you to a dynamic global commerce ecosystem where people, businesses, and communities unite to inspire growth and success. With a focus on building meaningful alliances Occy empowers you to thrive</p>
            </div>
          </div>
        </div>

        <div className="pt-10 min-h-screen content-center" ref={page3}>
          <div className="flex flex-col lg:flex-row-reverse pt-10">
            <div className="w-1/2 flex flex-col justify-center place-items-center">
              <div className="w-2/3 mx-auto">
                <div className="p-2 py-10 bg-stone-800 px-5">
                  <h2 className="text-xl text-secondary text-center font-bold">Occy Business Alliances</h2>
                  <p className="text-justify font-serif text-lg">
                    Many business owners struggle with directory listings. The information is scattered, outdated, inconsistent, or ineffective. This can lead to time-consuming updates, stress in measuring performance, duplicate listings, challenges in responding to reviews and hindering your growth.
                    <br />
                    <br />
                    Occy will help you with that struggle, ensuring your information is accurate, impactful, and easy to manage, helping your business thrive.
                  </p>
                </div>
              </div>
            </div>
            <div className="w-1/2 mt-36">
              <img src={"https://place-hold.it/750x750"} className="mx-auto w-2/3" height={500} width={500} alt="Placeholder" />
            </div>
          </div>
        </div>

        <div className="pt-10 min-h-screen content-center" ref={page4}>
          <div className="flex flex-col lg:flex-row pt-10">
            <div className="w-1/2 flex flex-col justify-center place-items-center">
              <div className="w-2/3 mx-auto">
                <div className="p-2 py-10 bg-stone-800 px-5">
                  <h2 className="text-xl text-secondary text-center font-bold">Occy Directory Solutions</h2>
                  <h3 className="font-bold text-lg text-center">Directory Listing</h3>
                  <p className="text-center font-serif text-lg">
                    Free listing on our directory
                    <br />
                    <br />
                    Free biography of your business
                  </p>
                  <div className="flex justify-end pt-5 space-x-3">
                    <a href="#" className="p-2 bg-amber-500 hover:bg-yellow-600 rounded-lg">Claim Benefit</a>
                    <a href="#" className="p-2 bg-amber-500 hover:bg-yellow-600 rounded-lg">Learn More</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-1/2 mt-36">
              <img src={"https://place-hold.it/750x750"} className="mx-auto w-2/3" height={500} width={500} alt="Placeholder" />
            </div>
          </div>
        </div>

        <div className="pt-10 min-h-screen content-center" ref={page5}>
          <div className="flex flex-col lg:flex-row-reverse pt-10">
            <div className="w-1/2 flex flex-col justify-center place-items-center">
              <div className="w-2/3 mx-auto">
                <div className="p-2 py-10 bg-stone-800 px-5">
                  <h2 className="text-xl text-secondary text-center font-bold">Occy Directory Solutions</h2>
                  <h3 className="font-bold text-lg text-center">Directory Management</h3>
                  <p className="text-center font-serif text-lg">
                    Ensure your Name, Address and Phone Number (NAP) are current
                  </p>
                  <div className="flex justify-end pt-5 space-x-3">
                    <a href="#" className="p-2 bg-amber-500 hover:bg-yellow-600 rounded-lg">Claim Benefit</a>
                    <a href="#" className="p-2 bg-amber-500 hover:bg-yellow-600 rounded-lg">Learn More</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-1/2 mt-36">
              <img src={"https://place-hold.it/750x750"} className="mx-auto w-2/3" height={500} width={500} alt="Placeholder" />
            </div>
          </div>
        </div>

        <div className="pt-10 min-h-screen content-center" ref={page6}>
          <div className="flex flex-col lg:flex-row pt-10">
            <div className="w-1/2 flex flex-col justify-center place-items-center">
              <div className="w-2/3 mx-auto">
                <div className="p-2 py-10 bg-stone-800 px-5">
                  <h2 className="text-xl text-secondary text-center font-bold">Occy Directory Solutions</h2>
                  <h3 className="font-bold text-lg text-center">Reputation Management</h3>
                  <p className="text-center font-serif text-lg">
                    Protecting and enhancing your image, ensuring a positive online reputation to enable you to thrive.
                    <br />
                    <br />
                    Monitoring with alerts on all major platforms.
                    <br />
                    <br />
                    Tracking and responding to your reviews across multiple sites
                  </p>
                  <div className="flex justify-end pt-5 space-x-3">
                    <a href="#" className="p-2 bg-amber-500 hover:bg-yellow-600 rounded-lg">Claim Benefit</a>
                    <a href="#" className="p-2 bg-amber-500 hover:bg-yellow-600 rounded-lg">Learn More</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-1/2 mt-36">
              <img src={"https://place-hold.it/750x750"} className="mx-auto w-2/3" height={500} width={500} alt="Placeholder" />
            </div>
          </div>
        </div>

        <div className="pt-10 content-center" ref={page7}>
          <div className="flex flex-col lg:flex-row-reverse pt-10 pb-5">
            <div className="w-1/2 flex flex-col justify-center place-items-center">
              <div className="w-2/3 mx-auto">
                <div className="p-2 py-10 bg-stone-800 px-5">
                  <h2 className="text-xl text-secondary text-center font-bold">Occy Directory Solutions</h2>
                  <h3 className="font-bold text-lg text-center">More than XX Solutions to help you grow your business including :</h3>
                  <p className="text-center font-serif text-lg">
                    XXXXXXXXXXXXX
                  </p>
                  <div className="flex justify-end pt-5 space-x-3">
                    <a href="#" className="p-2 bg-amber-500 hover:bg-yellow-600 rounded-lg">Claim Benefit</a>
                    <a href="#" className="p-2 bg-amber-500 hover:bg-yellow-600 rounded-lg">Learn More</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-1/2 mt-36">
              <img src={"https://place-hold.it/750x750"} className="mx-auto w-2/3" height={500} width={500} alt="Placeholder" />
            </div>
          </div>
        </div>
      </Base >
    </>
  );
}
