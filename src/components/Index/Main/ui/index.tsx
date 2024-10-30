import {ReactNode} from "react";


export default function Main({elements}: {elements: ReactNode[]}) {
    return (elements.map((element: ReactNode) => (
            element
        ))
    )
}