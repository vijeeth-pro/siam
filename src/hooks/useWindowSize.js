import React from 'react'
import { useState, useEffect } from 'react'

function useWindowSize() {
    const [screenSize, getDimension] = useState({
        dynamicWidth: window.innerWidth,
        dynamicHeight: window.innerHeight
      });
      const [Y, getY] = useState(window.scrollY);
      
      const setDimension = () => {
        getDimension({
          dynamicWidth: window.innerWidth,
          dynamicHeight: window.innerHeight
        })
      }
      
      useEffect(() => {
        window.addEventListener('resize', setDimension);
        window.addEventListener('scroll', () =>  getY(window.scrollY));
        
        return(() => {
          window.removeEventListener('resize', setDimension);
          window.removeEventListener('scroll', () => getY(window.scrollY));
        })
      }, [screenSize, Y])
  
      return { ...screenSize, Y}
}

export default useWindowSize