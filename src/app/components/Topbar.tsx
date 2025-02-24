"use client";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Topbar() {
    return (
        <>
            <div className="flex justify-between bg-primary min-h-20 place-items-center">
                <Image height={50} width={50} src={"/octopus.png"} alt="Octopus Logo" className="m-2 object-cover rounded-2xl" />
                <div className="flex flex-col justify-center text-secondary text-2xl text-center font-bold">
                   <p>Octopus Alliances</p>
                   <p className="text-lg">It&apos;s all about you</p>
                </div>
                <Image height={50} width={50} src={"/octopus.png"} alt="Octopus Logo" className="m-2 object-cover rounded-2xl" />
            </div>
        </>
    )
}