import Image from "next/image";
import Link from "next/link";

export default function Topbar() {
    return (
        <>
            <div className="flex justify-between bg-primary min-h-10 place-items-center">
                <Image height={64} width={64} src={"/octopus.png"} alt="Octopus Logo" className="m-2 object-cover rounded-2xl" />
                <div className="flex justify-center">
                    <Link href={"/"} className="bg-secondary text-white p-2 m-2 rounded-2xl border border-black font-bold">Home</Link>
                </div>
                <Image height={64} width={64} src={"/octopus.png"} alt="Octopus Logo" className="m-2 object-cover rounded-2xl" />
            </div>
        </>
    )
}