import React, { PropsWithChildren, useEffect, useRef } from 'react';
import { motion } from "framer-motion";

function Parchment({ children, ...motionProps }: PropsWithChildren) {
    const contentRef = useRef<HTMLDivElement | null>(null);
    const motionRef = useRef<HTMLDivElement | null>(null);
    const containRef = useRef<HTMLDivElement | null>(null);

    function scrollHeight() {
        const content = contentRef.current;
        const contain = containRef.current;

        if (content && contain) {
            content.style.height = `${contain.offsetHeight}px`;
        }
    }

    function debounce(func: (...args: any[]) => void, wait: number) {
        let timeout: NodeJS.Timeout;
        return function executedFunction(...args: any[]) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }

    useEffect(() => {
        const debouncedScrollHeight = debounce(scrollHeight, 200);

        window.addEventListener('resize', debouncedScrollHeight);
        window.addEventListener('orientationchange', debouncedScrollHeight);

        return () => {
            window.removeEventListener('resize', debouncedScrollHeight);
            window.removeEventListener('orientationchange', debouncedScrollHeight);
        };
    }, []);


    return (
        <>
            <motion.div id="motion" ref={motionRef} {...motionProps}>
                <div id="parchment" ref={contentRef} />
                <div id="contain" ref={containRef}>
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
