import React, { useState, useRef, useEffect } from 'react';
import '../css/skills.css';

export default function Skills() {

    const containerRef = useRef(null);
     const [isVisible, setIsVisible] = useState(false);
   
     const callbackFunction = (entries) => {
       const [entry] = entries;
       setIsVisible(entry.isIntersecting)
     }
   
     const options = {
       root: null,
       rootMargin: "0px",
       threshold: 0.7
     }
   
     useEffect(() => {
   
       const observer = new IntersectionObserver(callbackFunction, options)
   
       if (containerRef.current) observer.observe(containerRef.current)
   
       return () => {
         if (containerRef.current) observer.unobserve(containerRef.current)
       }
     }, [containerRef, options])

    return (
        <div className={`skills ${isVisible ? 'animate' : ''}`} id="skills" ref={containerRef}>
        
        <h1 className={`skills__title ${isVisible ? 'slideInFromLeft' : ''}`}>Skills</h1>

        <h1 className={`skills__subtitle ${isVisible ? 'slideInFromLeft' : ''}`}>Frontend</h1>
        
        <p className={`skills__description; ${isVisible ? 'slideInFromRight' : ''}`}>
            React
        </p>

        <h1 className={`skills__subtitle ${isVisible ? 'slideInFromLeft' : ''}`}>Backend</h1>

        <p className={`skills__description; ${isVisible ? 'slideInFromRight' : ''}`}>
            Java
        </p>
        <p className={`skills__description; ${isVisible ? 'slideInFromRight' : ''}`}>
            Here are some of my Skills.
        </p>
        </div>
    )
}