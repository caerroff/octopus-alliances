export default function Footer() {
    const currentYear = (new Date()).getFullYear();


    return (
        <div className="min-h-20 bg-stone-800 flex justify-center place-items-center text-xl text-amber-500">
            <p>Octopus Alliances - {currentYear}</p>
        </div>
    )
}