"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";

export default function Topbar() {
    return (
        <>
            <div className="flex justify-center bg-primary min-h-20 place-items-center px-5 p-1">
                <div className="px-5 lg:px-36 py-2">
                    <Image src={"/octopus-logo.png"} className="rounded-2xl ml-2" height={110} width={110} alt="Octopus Logo" />
                </div>
                <div className="flex flex-col justify-center text-secondary text-5xl text-center font-bold underline underline-offset-[20px]">
                    <h2>Octopus Alliances</h2>
                </div>
                {/* Social Media Icons below. Uncomment them whenever the social networks are ready to share ! */}
                {/* <div className="flex text-2xl px-10 text-secondary space-x-2">
                    <a href="#" className="hover:text-red-400">
                    <i className="fa-brands fa-instagram" />
                    </a>
                    <a href="#" className="hover:text-red-400">
                    <i className="fa-brands fa-x-twitter" />
                    </a>
                    <a href="#" className="hover:text-red-400">
                    <i className="fa-brands fa-facebook" />
                    </a>
                    </div> */}
                <div className="px-5 lg:px-36 py-2">
                    <Image src={"/octopus-logo.png"} className="rounded-2xl ml-2" height={110} width={110} alt="Octopus Logo" />
                </div>
            </div>

        </>
    )
}