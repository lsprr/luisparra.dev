import React, { PropsWithChildren, useRef } from 'react';
import { motion } from "framer-motion";

function Parchment({ children, ...motionProps }: PropsWithChildren) {
    const motionRef = useRef<HTMLDivElement | null>(null);

    return (
        <>
            <motion.div id="motion" ref={motionRef} {...motionProps}>
                <div id="content">
                    {children}
                </div>
                <div className="parchmentOverlay" />
            </motion.div>
        </>
    );
}

export default Parchment;
