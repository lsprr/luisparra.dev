import React from "react";
import Link from "next/link";

export const Navigation = () => {
    return (
        <nav
            aria-label="Site Nav"
            className="mx-auto flex container items-center justify-between p-4"
        >
            <div className="flex justify-start items-center container mx-auto bg-white font-Nanum fluid-base">
                <Link
                    href="/"
                    className="inline-flex items-center justify-center"
                >
                    <span className="sr-only">Luis Parra</span>
                    Luis Parra
                </Link>
                <span className="mx-2 hidden md:block">&mdash;</span>
                <div className="hidden md:block">Front End Developer</div>
            </div>
        </nav>
    );
};
