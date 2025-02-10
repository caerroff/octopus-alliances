import Image from "next/image";
import Link from "next/link";

export default function Topbar() {
    return (
        <>
            <div className="flex justify-between bg-primary min-h-10 place-items-center">
                <Image height={64} width={64} src={"/octopus.png"} alt="Octopus Logo" className="m-2 object-cover rounded-2xl" />
                <div className="flex justify-center">
                    <Link href={"/"} className="text-white p-2 m-2 font-bold text-2xl hover:text-secondary">Home</Link>
                </div>
                <Image height={64} width={64} src={"/octopus.png"} alt="Octopus Logo" className="m-2 object-cover rounded-2xl" />
            </div>
        </>
    )
}