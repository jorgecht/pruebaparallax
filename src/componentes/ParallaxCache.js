import { useController } from 'react-scroll-parallax';
import React, {useState,useLayoutEffect} from 'react';
import { withController } from 'react-scroll-parallax';

const ParallaxCache = () => {

    const { parallaxController } = useController();

    useLayoutEffect(() => {
        const handler = () => parallaxController.update();
        window.addEventListener('load', handler);
        return () => window.removeEventListener('load', handler);
    }, [parallaxController]);

    return null;
    
}

export default ParallaxCache;