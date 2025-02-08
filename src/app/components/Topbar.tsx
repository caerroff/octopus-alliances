import Link from "next/link";

export default function Topbar() {
    return (
        <>
            <div className="flex justify-center bg-primary min-h-10 place-items-center">
                <Link href={"/"} className="bg-secondary text-white p-2 m-2 rounded-2xl border border-black font-bold">Home</Link>
            </div>
        </>
    )
}