import { useState } from "react"

function App() {
  const [url, setUrl] = useState("https://www.vpngate.net/en")
  const [temp,setTemp] = useState("")
  const getUrl = () => {
     setUrl(temp)

  }

  return (
    <>
      <input onChange={e => setTemp(e.target.value)} value={url} type="text" />
      <button onClick={getUrl}>Get</button>
      <iframe width="100%" height="100%" id="frame" src={url}></iframe>
    </>)
}

export default App
