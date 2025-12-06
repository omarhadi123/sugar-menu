import type {ReactNode} from "react";

export default function Container({children}: {children: ReactNode}) {
    return (
        <>
            <main className="pt-6 w-full h-screen overflow-y-scroll absolute top-0 left-0 z-10 bg-white/80 grid place-items-center">
                {children}
            </main>
        </>
    );
}
