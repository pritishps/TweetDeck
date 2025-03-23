import React, { useEffect, useRef } from 'react'
import "../Style/feedcontainer.css";

function FeedContainer() {

    const boxRef = useRef();
    const resizerRef = useRef();

    useEffect(()=>{
        const resizeableBox = boxRef.current;
        const style = window.getComputedStyle(resizeableBox);
        let width = parseInt(style.width,10)
        // console.log(style.x)


        let xcord = 0;

        const onMouseRightResize = (event) =>{
            const dx = event.clientX - xcord;
            xcord = event.clientX;
            width = width + dx;
            resizeableBox.style.width = `${width}px`;
        }
        const onMouseUpResize = (event)=>{
            document.removeEventListener("mousemove",onMouseRightResize);
        }

        const onMouseDownRightResize = (event)=>{
            // console.log("EVENT TRIGGERED")
            xcord = event.clientX;
            resizeableBox.style.left = style.left;
            resizeableBox.style.right = style.right;
            document.addEventListener("mousemove",onMouseRightResize);
            document.addEventListener("mouseup",onMouseUpResize)
        }


        // ADDING THE LISTENERS

        const rightResizer = resizerRef.current;
        rightResizer.addEventListener("mousedown",onMouseDownRightResize)

        return()=>{
            rightResizer.removeEventListener("mousedown",onMouseDownRightResize)
        }

    },[])

  return (
    <div ref={boxRef} className='feed-container'>
        <div className='feed-div'>Content is aiodjahdha dsa dkja d Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, nemo! Ut eveniet cupiditate doloribus facilis ipsam sequi aspernatur impedit a libero porro corporis similique aliquid ullam nam ipsa, earum atque nesciunt.</div>
        <div ref={resizerRef} className='resize-div'></div>
    </div>
  )
}

export default FeedContainer