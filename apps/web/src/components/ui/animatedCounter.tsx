"use client";

import React, { useEffect, useState } from "react";
import { useInView } from "framer-motion";

interface AnimatedNumberProps {
 targetValue: number;
}

export function AnimatedNumber({ targetValue }: AnimatedNumberProps) {
 const [count, setCount] = useState(0);
 const ref = React.useRef(null);
 const isInView = useInView(ref, { once: true, amount: 0.5 });

 useEffect(() => {
 if (isInView && targetValue > 0) {
 const duration = 2000;
 const steps = Math.min(targetValue, 100);
 const increment = targetValue / steps;
 const stepDuration = duration / steps;

 let currentStep = 0;
 const timer = setInterval(() => {
 currentStep++;
 const newValue = Math.min(Math.round(increment * currentStep), targetValue);
 setCount(newValue);

 if (currentStep >= steps) {
 clearInterval(timer);
 setCount(targetValue);
 }
 }, stepDuration);

 return () => clearInterval(timer);
 }
 }, [isInView, targetValue]);

 const baseFontSize = 24;
 const increaseBy = 24;
 const progress = targetValue > 0 ? count / targetValue : 0;
 const fontSize = baseFontSize + (progress * increaseBy);

 return (
 <span
 ref={ref}
 className="font-bold transition-all duration-100"
 style={{
 fontSize: `${fontSize}px`,
 lineHeight: 1.2,
 backgroundImage: 'linear-gradient(45deg, #007bff, #6610f2, #00c853, #ffc107)',
 WebkitBackgroundClip: 'text',
 color: 'transparent',
 backgroundSize: '200% 200%',
 animation: 'gradientAnimation 2s infinite linear',
 }}
 >
 {count}
 </span>
 );
}