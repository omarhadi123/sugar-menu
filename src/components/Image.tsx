import type {ImageParams} from "@/types/image.types";
import {memo} from "react";

function Image({media, name}: ImageParams) {
    const DESKTOP_BREAKPOINT = 1200;
    const TABLET_BREAKPOINT = 768;

    return (
        <>
            <picture className="">
                <source
                    srcSet={media.desktop}
                    media={`(min-width: ${DESKTOP_BREAKPOINT}px)`}
                />
                <source
                    srcSet={media.tablet}
                    media={`(min-width: ${TABLET_BREAKPOINT}px)`}
                />
                <img
                    src={media.mobile}
                    alt={`image of ${name}`}
                    className="rounded-xl"
                />
            </picture>
        </>
    );
}

export default memo(Image);
