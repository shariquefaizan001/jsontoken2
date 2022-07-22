import React, { useEffect, useState } from 'react'

export default function Home() {
  const [state, setState] = useState();

  useEffect(() => {
    async function getData() {
      const res = await fetch("http://localhost:8080");
      const data = await res.json();
      console.log(res);
      setState(data)
    }
    getData()
  }, [])
  return (
    <>
      <div>my page</div>
      <div>
        {
          state && JSON.stringify(state)}
      </div>
    </>
  )
}
