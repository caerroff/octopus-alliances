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
  const page8 = createRef<HTMLDivElement>()
  const pages = [page1, page2, page3, page4, page5, page6, page7, page8]
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
        window.scroll({ top: delta })
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
      <Base ref={page1} footerRef={page8}>
        <div className="place-content-center">
          <div className="relative">
            <Image src={"/penguins.jpg"} height={1500} width={1500} className="object-cover h-[60vh] lg:h-[80vh] w-screen" alt="Penguins" />
            <div className="absolute bottom-24 left-0 right-0 text-center text-white text-shadow bg-slate-500 bg-opacity-20">
              <h1 className="text-3xl lg:text-7xl font-bold">Octopus Alliances</h1>
              <p className="text-xl lg:text-2xl font-bold">It&apos;s all about you</p>
            </div>
          </div>
          <div className="px-3">
            {/* <p className="text-center text-xl">1927 conference that included Albert Einstein and Marie Curie. In all 27 Noble Prize winners attended.</p> */}
            <h2 className="font-bold text-2xl text-center text-secondary">It's all about you</h2>
            <div className="flex justify-center">
              <p className="text-lg text-center leading-5">
                Octopus Alliances is a social enterprise, building a dynamic global commerce ecosystem that will empower ayou as individuals, businesses, and communities to connect, collaborate, contribute and thrive.
              </p>
            </div>
          </div>
        </div>

        <div className="min-h-screen place-content-center" ref={page2}>
          <div className="flex flex-col-reverse lg:flex-row pt-10">
            <div className="lg:w-1/2 flex flex-col justify-center place-items-center lg:mt-[7%]">
              <div className="lg:w-2/3 px-5 lg:px-0 mx-auto">
                <div className="p-2 py-10 bg-stone-800 px-5">
                  <h2 className="text-xl text-secondary text-center font-bold">Occy Social Alliances</h2>
                  <p className="text-justify font-serif text-lg">
                    Occy Social Alliance is a decentralized world wide ecosystem with Time Credits, our community currency, to help facilitate authentic connection, collective action and a movement for good.
                    <br />
                    <br />
                    More than just about business, Occy is built on shared values and a commitment to doing what is right, helping people and local communities.
                    <br />
                    <br />
                    Occy empowers a global member network providing spaces and opportunities for you to communicate and collaborate. Ultimately creating a more just, equitable and sustainable future together.
                  </p>
                  <div className="flex justify-end">
                    <a href="#" className="bg-secondary hover:bg-yellow-600 text-white p-2 mt-2 rounded-lg">Learn more</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2 lg:-mt-[5%] p-5 text-xl">
              <div className="flex space-x-5 justify-center pb-6 max-h-[70vh] object-cover">
                <img src={"https://place-hold.it/750x750"} height={750} width={750} alt="Placeholder" />
              </div> 
            </div>
          </div>
        </div>

        <div className="pt-10 min-h-screen content-center" ref={page3}>
          <div className="flex flex-col-reverse lg:flex-row-reverse pt-10 ">
            <div className="lg:w-1/2 flex flex-col justify-center place-items-center">
              <div className="lg:w-2/3 p-5 lg:p-0 mx-auto lg:-mt-[15%]">
                <div className="p-2 py-10 bg-stone-800 px-5">
                  <h2 className="text-xl text-secondary text-center font-bold">Occy Business Alliances</h2>
                  <p className="text-justify font-serif text-lg">
                    Listing in a directory is often expensive, restrictive, in exible, inadequate and outdated, hindering business growth.
                    <br />
                    <br />
                    Occy will help you with that struggle, to make your business story accurate, compelling, impactful, and easier to manage.
                    <br />
                    <br />
                    With our support you can take full control, save time and optimize your directory listings turning them into a powerful tool to help your business thrive.
                    <br />
                    <br />
                    Additionally with your utilization of our business currency, Trade Credits, we will create a business economy that will generate even greater growth opportunities for you.
                  </p>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2 lg:mt-[4%]">
              <img src={"https://place-hold.it/750x750"} className="mx-auto w-2/3" height={500} width={500} alt="Placeholder" />
            </div>
          </div>
        </div>

        <div className="lg:pt-10 min-h-screen content-center" ref={page4}>
          <div className="flex flex-col-reverse lg:flex-row lg:pt-10">
            <div className="lg:w-1/2 flex flex-col justify-center place-items-center">
              <div className="lg:w-2/3 m-5 px-5 lg:m-0 lg:px-0 mx-auto">
                <div className="p-2 py-10 bg-stone-800 px-5">
                  <h2 className="text-xl text-secondary text-center font-bold">Occy Directory Solutions</h2>
                  <h3 className="font-bold text-lg text-center">Bronze Membership</h3>
                  <ul className="text-start list-disc mx-10 font-serif text-lg">
                    <li>Free Listing</li>
                    <li>Free Trade Credits</li>
                    <li>Limited bonus offer, upgrade to Silver Membership</li>
                  </ul>
                  <div className="flex justify-between pt-5 space-x-3">
                    <a href="#" className="p-2 bg-amber-500 hover:bg-yellow-600 rounded-lg">Members, claim your listing</a>
                    <a href="#" className="p-2 bg-amber-500 hover:bg-yellow-600 rounded-lg">Become a member and claim</a>
                    <a href="#" className="p-2 bg-amber-500 hover:bg-yellow-600 rounded-lg">Learn More</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2 lg:-mt-52 pb-5 lg:pb-0">
              <img src={"https://place-hold.it/750x750"} className="mx-auto w-2/3" height={500} width={500} alt="Placeholder" />
            </div>
          </div>
        </div>

        <div className="lg:pt-10 min-h-screen content-center" ref={page5}>
          <div className="flex flex-col-reverse lg:flex-row-reverse lg:pt-10">
            <div className="lg:w-1/2 flex flex-col justify-center place-items-center">
              <div className="lg:w-2/3 mx-auto p-5 lg:p-0">
                <div className="p-2 py-10 bg-stone-800 px-5 lg:-mt-[15%]">
                  <h2 className="text-xl text-secondary text-center font-bold">Occy Directory Solutions</h2>
                  <h3 className="font-bold text-lg text-center">Silver Membership</h3>
                  <ul className="text-start list-disc mx-10 font-serif text-lg">
                    <li>
                      Premium listing.
                    </li>
                    <li>
                      Upload your videos and photos.
                    </li>
                    <li>
                      Upload your ratings and reviews.
                    </li>
                    <li>
                      Free Trade Credits.
                    </li>
                    <li>
                      AI content creator
                    </li>
                  </ul>
                  <div className="flex justify-between pt-5 space-x-3 ">
                    <a href="#" className="p-2 bg-amber-500 hover:bg-yellow-600 rounded-lg">Members, buy your upgrade</a>
                    <a href="#" className="p-2 bg-amber-500 hover:bg-yellow-600 rounded-lg">Become a member and buy Silver</a>
                    <a href="#" className="p-2 bg-amber-500 hover:bg-yellow-600 rounded-lg">Learn More</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2 lg:mt-[4%]">
              <img src={"https://place-hold.it/750x750"} className="mx-auto w-2/3" height={500} width={500} alt="Placeholder" />
            </div>
          </div>
        </div>

        <div className="lg:pt-10 min-h-screen content-center" ref={page6}>
          <div className="flex flex-col-reverse lg:flex-row pt-10">
            <div className="lg:w-1/2 flex flex-col justify-center place-items-center">
              <div className="lg:w-2/3 mx-auto p-5 lg:p-0 lg:mt-[5%]">
                <div className="p-2 py-10 bg-stone-800 px-5">
                  <h2 className="text-xl text-secondary text-center font-bold">Occy Directory Solutions</h2>
                  <h3 className="font-bold text-lg text-center">Gold Membership</h3>
                  <ul className="text-start list-disc mx-10 font-serif text-lg">
                    <li>Effectively build and use your database listing.</li>
                    <li>Manage your ratings and reviews.</li>
                    <li>Create a slider of multiple banner ads.</li>
                    <li>Advertise offers for your products and services.</li>
                    <li>Free Trade Credits.</li>
                    <li>AI Content creator</li>
                  </ul>
                  <div className="flex justify-between pt-5 space-x-3">
                    <a href="#" className="p-2 bg-amber-500 hover:bg-yellow-600 rounded-lg">Members, buy your upgrade</a>
                    <a href="#" className="p-2 bg-amber-500 hover:bg-yellow-600 rounded-lg">Become a member and buy Gold</a>
                    <a href="#" className="p-2 bg-amber-500 hover:bg-yellow-600 rounded-lg">Learn More</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2 lg:-mt-[7%]">
              <img src={"https://place-hold.it/750x750"} className="mx-auto w-2/3" height={500} width={500} alt="Placeholder" />
            </div>
          </div>
        </div>

        <div className="lg:pt-10 min-h-screen content-center" ref={page7}>
          <div className="flex flex-col-reverse lg:flex-row-reverse lg:-mt-[6%] pb-5">
            <div className="lg:w-1/2 flex flex-col justify-center place-items-center">
              <div className="lg:w-2/3 mx-auto p-5 lg:p-0">
                <div className="p-2 py-10 bg-stone-800 px-5">
                  <h2 className="text-xl text-secondary text-center font-bold">Occy Directory Solutions</h2>
                  <h3 className="font-bold text-lg text-center">Platinum Membership</h3>
                  <ul className="text-start list-disc mx-10 font-serif text-lg">
                    <li>Manage your business reputation.</li>
                    <li>Access to the latest business building sms and email courses</li>
                    <li>Unlimited access to features like blogging and advertising.</li>
                    <li>Advertise offers for your products and services.</li>
                    <li>Free Trade Credits.</li>
                    <li>AI Content creator</li>
                  </ul>
                  <div className="flex justify-between pt-5 space-x-3">
                    <a href="#" className="p-2 bg-amber-500 hover:bg-yellow-600 rounded-lg">Members, buy your upgrade</a>
                    <a href="#" className="p-2 bg-amber-500 hover:bg-yellow-600 rounded-lg">Become a member and buy Platinum</a>
                    <a href="#" className="p-2 bg-amber-500 hover:bg-yellow-600 rounded-lg">Learn More</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2 lg:mt-[8%]">
              <img src={"https://place-hold.it/750x750"} className="mx-auto w-2/3" height={500} width={500} alt="Placeholder" />
            </div>
          </div>
        </div>
      </Base >
    </>
  );
}
