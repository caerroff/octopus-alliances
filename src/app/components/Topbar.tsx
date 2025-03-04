"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";

export default function Topbar() {
    return (
        <>
            <div className="flex justify-between bg-purple-950 min-h-20 place-items-center px-14 p-1">
                <div className=" left-1 top-2">
                    <Image src={"/octopus.png"} className="rounded-2xl ml-2" height={60} width={60} alt="Octopus Logo" />
                </div>
                <div className="flex flex-col justify-center text-secondary text-3xl text-center font-bold">
                    <p>Octopus Alliances</p>
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
                <div className="left-1 top-2">
                    <Image src={"/octopus.png"} className="rounded-2xl ml-2" height={60} width={60} alt="Octopus Logo" />
                </div>
            </div>

        </>
    )
}