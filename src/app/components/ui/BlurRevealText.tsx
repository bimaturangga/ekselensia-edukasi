import React from 'react';
import { motion } from 'motion/react';

interface BlurRevealTextProps {
    text: string;
    className?: string;
    style?: React.CSSProperties;
    as?: React.ElementType;
}

export function BlurRevealText({ text, className = '', style = {}, as: Component = 'h2' }: BlurRevealTextProps) {
    // Parsing <br> elements embedded in the string
    const parts = text.split(/(<br[^>]*>)/i);

    const segments = parts.map(part => {
        if (part.toLowerCase().startsWith('<br')) return part;
        return part.split(' ').filter(word => word.length > 0);
    });

    const container = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.08, delayChildren: 0.05 },
        },
    };

    const child: any = {
        visible: {
            opacity: 1,
            filter: "blur(0px)",
            y: 0,
            transition: { type: "spring", damping: 12, stiffness: 100 },
        },
        hidden: {
            opacity: 0,
            filter: "blur(6px)",
            y: 10,
        },
    };

    // Expose gradient on children instead of parent to fix WebKit stacking context bug
    const hasGradient = className.includes("bg-clip-text") || style.backgroundImage;
    const wordStyle = (hasGradient && style.backgroundImage)
        ? { backgroundImage: style.backgroundImage, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }
        : {};

    const safeClassName = className.replace(/text-transparent|bg-clip-text/g, '').trim();
    const safeStyle = { ...style };
    if (hasGradient) {
        delete safeStyle.backgroundImage;
    }

    return (
        <Component className={safeClassName} style={safeStyle}>
            <motion.span
                variants={container}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "0px 0px -50px 0px" }}
            >
                {segments.map((segment, segIndex) => {
                    if (typeof segment === 'string' && segment.toLowerCase().startsWith('<br')) {
                        const match = segment.match(/className=['"]([^'"]+)['"]/);
                        return <br key={`br-${segIndex}`} className={match ? match[1] : ''} />;
                    }

                    const words = segment as string[];
                    return words.map((word, wordIndex) => (
                        <React.Fragment key={`${segIndex}-${wordIndex}`}>
                            <motion.span variants={child} className="inline-block relative" style={wordStyle}>
                                {word}
                            </motion.span>
                            {(wordIndex < words.length - 1) && <span>&nbsp;</span>}
                        </React.Fragment>
                    ));
                })}
            </motion.span>
        </Component>
    );
}
