import * as React from "react";
import { useState, useEffect } from "react";
import "./MidnightMansionGame.css";

const MidnightMansionGame = () => {
  const colors = ["Blue", "Red", "Green", "Yellow"]
  const [says, simonSays] = useState([])
  const [copy, setCopy] = useState(says)
  const [lost, setLost] = useState(false)
  const [hitSubmit, setHitSubmit] = useState(true)
  const[score, setScore] = useState(0)


  const getColor = () => {
    const next = colors[Math.floor(Math.random()*colors.length)]
    simonSays([...says, next])
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    getColor()
    setHitSubmit(false)
    }

    useEffect(() => {
     setCopy(says)
    },[says])

  const guess = (e) => {
    e.preventDefault()
    const choice = e.target.value
    console.log(choice)
    
    if (choice == copy[0]) {
      setCopy(copy.slice(1))
      console.log(copy.length)
      if (copy.length == 1) {
        setHitSubmit(true)
        setScore(score+1)
      }
    } else {
      setLost(true)
    }
  }


  return (hitSubmit?<>  
  <form onSubmit={handleSubmit}>
    <div>Simon Says:</div>
    <div>{says.slice(-1)}</div>
    <input type="submit" placeholder="Next"/>
  </form>
  </> 
  :(lost? <>
  <div>You Lost! You big Loser!</div>
  </>:
  <>
    <div>Simon Says: {says.slice(-1)}</div>
    <button onClick={guess} value="Blue">Blue</button>
    <button onClick={guess} value="Red">Red</button>
    <button onClick={guess} value="Green">Green</button>
    <button onClick={guess} value="Yellow">Yellow</button>
    <div>Score:{score}</div>
  </>))
}

export default MidnightMansionGame;
