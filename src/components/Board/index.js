import React, { useLayoutEffect, useRef } from 'react';
import styles from './index.module.css';

const Board = () => {
    const canvasRef = useRef(null);

    useLayoutEffect(() => {
        const canvas = canvasRef.current;
        const context = canvas.getContext('2d');

        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        // Initial setup
        resizeCanvas();

        // Event listener for window resize
        window.addEventListener('resize', resizeCanvas);

        // Cleanup: Remove the event listener when the component is unmounted
        return () => {
            window.removeEventListener('resize', resizeCanvas);
        };
    }, []);

    return (
        <canvas ref={canvasRef}>

        </canvas>);
};

export default Board;
