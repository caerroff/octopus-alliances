import { JSX, Ref } from "react";
import Footer from "./Footer";
import Topbar from "./Topbar";

type Props = {
    children: (JSX.Element | string)[] | (JSX.Element | string),
    ref?: Ref<HTMLDivElement>,
    footerRef: Ref<HTMLDivElement>
}

export default function Base(props: Props) {
    return (
        <>
            <div ref={props.ref}>
                <Topbar />
                <div className="min-h-screen bg-primary text-white">
                    {props.children}
                </div>
                <Footer ref={props.footerRef} />
            </div>
        </>
    )
}