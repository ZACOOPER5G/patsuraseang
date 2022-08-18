import React, { useEffect } from 'react';
import './style.scss'

export const CustomCursor = () => {
    const mainCursor = React.useRef(null);

    useEffect(() => {
        document.addEventListener('mousemove', (event) => {
            const {clientX, clientY} = event;
            const mouseX = clientX - mainCursor.current.clientWidth / 2;
            const mouseY = clientY - mainCursor.current.clientHeight / 2;

            mainCursor.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`
        });

        return () => {};
    }, []);

    return (
    <div className={`cursor-wrapper default`}>
      <div className="main-cursor" ref={mainCursor}></div>
    </div>
    )

}