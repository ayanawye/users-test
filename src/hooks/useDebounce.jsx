import { useEffect, useState } from "react";

function useDebounce(value, delay) {
  const [debouncedValue, setDeboncedValue] = useState(value)

  useEffect(() => {
    const handler = setTimeout(() => {
      setDeboncedValue(value)
    }, delay)

    return () => {
      clearTimeout(handler)
    }
  }, [value, delay])
  
  return debouncedValue
}

export default useDebounce