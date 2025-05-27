import { useState } from "react"

export default function Hero(props) {
  const { name, data, percentage, handleToggleModal, handleResetData } = props

  // Clamp percentage to maximum of 100%
  const displayPercentage = Math.min(percentage, 100)

  return (
    <section id="hero">
      <h2>
        {displayPercentage === 100 
          ? `Hello ${name}, you have surpassed the life expectancy! Enjoy while it lasts 🫡`
          : `Hello ${name}, you have ${data.weeks} weeks left to live. Make them count 🫡`
        }
      </h2>
      <div className="btns-container">
        <button onClick={handleToggleModal}>Not {name}?</button>
        <button onClick={handleResetData}>Reset data</button>
      </div>
      <div className="progress-bar">
        <div className="progress-percentage" style={{ width: `${displayPercentage}%`}}>
          <div className="progress-birth">
            {/* <i className="fa-solid fa-baby"></i> */}
            <span>🐣</span>
            <h6 className="bar-label"> Birth</h6>
          </div>
          <p>{displayPercentage.toFixed(1)} %</p>
        </div>
        <div>
          <h6 className="bar-label">Death</h6>
          <span>💀</span>
          {/* <i className="fa-solid fa-skull"></i> */}
        </div>
      </div>
    </section>
  )
}