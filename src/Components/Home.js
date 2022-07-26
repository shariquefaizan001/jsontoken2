import React, { useEffect, useState } from 'react'

export default function Home() {
  const [state, setState] = useState();

  useEffect(() => {
    async function getData() {
      try {
        const res = await fetch("http://localhost:5000/api", {
          method: "POST"
        });
        const data = await res.json();
        console.log(res);
        setState(data)
      } catch (error) {
        console.log(error)
        setState("Error Occurred")
      }
    }
    getData()
  }, [])
  return (
    <>
      <div>welcome  home page </div>
      <div>
        {
          state && JSON.stringify(state)}
      </div>
    </>
  )
}
