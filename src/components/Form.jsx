import { useState } from "react"

export default function Form(props) {
  const { handleToggleModal, handleUpdateData } = props
  const [name, setName] = useState('')
  const [lifeExpectancy, setLifeExpectancy] = useState(0)
  const [day, setDay] = useState(1)
  const [month, setMonth] = useState(1)
  const [year, setYear] = useState(new Date().getFullYear())

  const days = Array.from({ length: 31 }, (_, i) => i + 1)
  const months = ['January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December']
  const years = Array.from({ length: 100 }, (_, i) => new Date().getFullYear() - i)

  function handleSubmit(e) {
    e.preventDefault()

    handleUpdateData({
      name,
      birthDate: `${year}-${String(month).padStart(2, '0')}-${String(day).padStart(2, '0')}`,
      lifeExpectancy: Number(lifeExpectancy)
    })
  }

  return (
    <div className="form-container">
      <div className="form-header">
        <h2>Your details</h2>
        <button onClick={handleToggleModal}>
          <i className='fa-solid fa-xmark' />
        </button>
      </div>

      <form id="form" onSubmit={handleSubmit}>
        <label>
          Name
          <input 
            type="text" 
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required />
        </label>

        <label>
          Birthday
          <div className="form-birthday">
            <select value={day} onChange={(e) => setDay(e.target.value)} required>
              {days.map((day, id) => 
                <option 
                  value={day}
                  key={id}
                >{day}</option>
              )}
            </select>
            <select value={month} onChange={(e) => setMonth(e.target.value)} required>
              {months.map((month, id) => 
                <option 
                  value={id + 1}
                  key={id}
                >{month}</option>
              )}
            </select>
            <select value={year} onChange={(e) => setYear(e.target.value)} required>
              {years.map((year, id) => 
                <option 
                  value={year}
                  key={id}
                >{year}</option>
              )}
            </select>
          </div>
        </label>

        <label>
          Life Expectancy (years)
          <input 
            type="number" 
            placeholder="Life Expectancy"
            onChange={(e) => setLifeExpectancy(e.target.value)}
            max="120"
            min="1"
            step="1"
            required />
        </label>

        <button type='submit'>Save</button>
      </form>
    </div>
  )
}