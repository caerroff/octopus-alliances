"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";

export default function Topbar() {
    return (
        <>
            <div className="flex justify-between bg-primary min-h-20 place-items-center">
                <div></div>
                <div className="flex flex-col justify-center text-secondary text-2xl text-center font-bold">
                    <p>Octopus Alliances</p>
                    <p className="text-lg">It&apos;s all about you</p>
                </div>
                <div className="flex text-2xl px-10 text-secondary space-x-2">
                    <a href="#" className="hover:text-red-400">
                        <i className="fa-brands fa-instagram" />
                    </a>
                    <a href="#" className="hover:text-red-400">
                        <i className="fa-brands fa-x-twitter" />
                    </a>
                    <a href="#" className="hover:text-red-400">
                        <i className="fa-brands fa-facebook" />
                    </a>
                </div>
            </div>
        </>
    )
}