import React, { useEffect, useRef } from 'react'
import styles from './index.module.css'

const Board = () => {
    const canvasref = useRef(null)

    useEffect(() => {
    if(!canvasref.current) return 
    const canvas = canvasref.current;
    const context = canvas.getContext('2d');

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    //   return () => {
    //     second
    //   }
    }, [])
    
    return (
        <>
        <canvas ref = {canvasref}>

        </canvas>
        </>
    )
}

export default Board;
