import TopbarLink from "./TopbarLink"

export default function Topbar(){
    return (
        <>
        <div className="flex min-h-14 justify-center space-x-5 bg-primary items-center text-2xl font-bold">
            <TopbarLink name="Home" link="/"/>
        </div>
        </>
    )
}