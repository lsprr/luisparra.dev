import React, { PropsWithChildren, useEffect, useRef } from 'react';
import { motion } from "framer-motion";

function Parchment({ children, ...motionProps }: PropsWithChildren) {
    const contentRef = useRef<HTMLDivElement | null>(null);
    const containerRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        function scrollHeight() {
            const content = contentRef.current;
            const container = containerRef.current;

            if (content && container) {
                content.style.height = `${container.offsetHeight}px`;
            }
        }

        scrollHeight();

        window.addEventListener('resize', scrollHeight);

        return () => {
            window.removeEventListener('resize', scrollHeight);
        };
    }, []);

    return (
        <>
            <motion.div id="motion" ref={containerRef} {...motionProps}>
                <div id="parchment" ref={contentRef} />
                <div id="contain" ref={containerRef}>
                    {children}
                </div>

                <svg>
                    <filter id="wavy2">
                        <feTurbulence x="0" y="0" baseFrequency="0.02" numOctaves="5" seed="1" />
                        <feDisplacementMap in="SourceGraphic" scale="20" />
                    </filter>
                </svg>
            </motion.div>
        </>
    );
}

export default Parchment;
