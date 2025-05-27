function WeeksGrid(props) {
  const { weeksArr, finalWeek, currWeek, yearId } = props

  return (
    <div className="weeks-grid">
      {weeksArr.map((week, weekId) => {
        // +1 to make weeks 1-based to match data.weeks
        const weekNum = yearId * 52 + weekId + 1
        const dotStyle = weekNum === currWeek 
          ? 'blink'
          : weekNum === finalWeek
            ? 'red'
            : weekNum > currWeek
              ? 'empty'
              : ''
        
        return (
          <div key={weekId} className={'dot ' + dotStyle} />
      )
      })}
    </div>
  )
}

export default function Calendar({ lifeExpectancy, data }) {
  const yearsArr = [...Array.from({ length: lifeExpectancy }).keys()]
  const weeksArr = [...Array.from({ length: 52 }).keys()]

  const finalWeek = lifeExpectancy * 52
  const currWeek = finalWeek - parseInt(data['weeks'])

  return (
    <section>
      <p className="sentence">Each square of dots is a year of your life, and each row represents a decade.</p>
      <div className="years-grid">
        {yearsArr.map((year, yearId) => {
          // return (<p key={yearId}>Year {year}</p>)
          return (
            <WeeksGrid 
              key={yearId}
              finalWeek={finalWeek}
              currWeek={currWeek}
              weeksArr={weeksArr} 
              yearId={yearId}
            />
          )
        })}
      </div>

    </section>
  )
}