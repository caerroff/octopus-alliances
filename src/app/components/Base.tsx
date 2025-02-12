import { JSX } from "react";
import Footer from "./Footer";
import Topbar from "./Topbar";

type Props = {
    children: (JSX.Element | string)[] | (JSX.Element | string)
}

export default function Base(props: Props) {
    return (
        <>
            <Topbar />
            <div className="min-h-screen bg-purple-100">
                {props.children}
            </div>
            <Footer />
        </>
    )
}