import { JSX } from "react";
import Topbar from "./Topbar";

type Props = {
    children: (JSX.Element | string)[] | (JSX.Element | string)
}

export default function Base(props: Props) {
    return (
        <>
            <Topbar />
            <div className="h-screen bg-purple-100 p-2">
                {props.children}
            </div>
        </>
    )
}