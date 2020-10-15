import { useState, useEffect } from 'react';

const useViewBoundries = (ref) => {
  const [offsetX, setOffsetX] = useState(null);
    useEffect(() => {
      const dropdown = ref.current;
      console.log(dropdown);
      const clientWidth = window.innerWidth;
      if (dropdown) {
        const { left, width } = dropdown.getBoundingClientRect();
        const dropdownBoundry = left + width;
  
        if (dropdownBoundry > clientWidth) {
          const offset = dropdownBoundry - clientWidth;
          setOffsetX(offset);
        }
      }
    }, [ref]);

    return offsetX;
}

export default useViewBoundries;
