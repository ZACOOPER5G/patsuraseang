import { useState, useEffect } from 'react';

export const useOnScreen = (ref, threshold = 0.3) => {
    const [isIntersecting, setIsIntersecting] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
        ([entry]) => {
            // Update the state when observer callback fires
            setIsIntersecting(entry?.isIntersecting ?? false);
        },
        {
            rootMargin: '0px',
            threshold
        }
        );
        const currentRef = ref.current;
        if (currentRef) {
            observer.observe(currentRef)
        }
        return () => {
            if (currentRef) {
                observer.unobserve(currentRef)
            }
        }
    }, [ref, threshold]);

    return isIntersecting;
}