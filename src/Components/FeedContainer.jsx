import React, { useEffect, useRef } from 'react'
import "../Style/feedcontainer.css";
import Feed from './Feed';
import FeedHeading from './FeedHeading';

function FeedContainer() {

    const boxRef = useRef();
    const resizerRef = useRef();


    useEffect(() => {
        const resizeableBox = boxRef.current;
        const rightResizer = resizerRef.current;
    
        let xcord = 0;
    
        const onMouseRightResize = (event) => {
          const dx = event.clientX - xcord;
          xcord = event.clientX;
          
          // Update width dynamically from element
          let newWidth = resizeableBox.offsetWidth + dx;
          resizeableBox.style.width = `${newWidth}px`;
        };
    
        const onMouseUpResize = () => {
          document.removeEventListener("mousemove", onMouseRightResize);
          document.removeEventListener("mouseup", onMouseUpResize);
        };
    
        const onMouseDownRightResize = (event) => {
          xcord = event.clientX;
          document.addEventListener("mousemove", onMouseRightResize);
          document.addEventListener("mouseup", onMouseUpResize);
        };
    
        // Attach listeners
        rightResizer.addEventListener("mousedown", onMouseDownRightResize);
    
        return () => {
          rightResizer.removeEventListener("mousedown", onMouseDownRightResize);
        };
      }, []);

  return (
    <div ref={boxRef} className='feed-container'>
        <div className='feed-div'>
            <FeedHeading/>
            <Feed/>
        </div>
        <div ref={resizerRef} className='resize-div'></div>
    </div>
  )
}

export default FeedContainer