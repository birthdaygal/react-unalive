import { useEffect, useState } from 'react'
import Calendar from './components/Calendar'
import Clocks from './components/Clocks'
import Form from './components/Form'
import Hero from './components/Hero'
import Layout from './components/layouts/Layout'
import Portal from './components/Portal'
import Summary from './components/Summary'
import { calculateTimeLeft, getPercentage } from './utils'

function App() {
  const [showModal, setShowModal] = useState(false)
  const [name, setName] = useState('Harry')
  const [birthDate, setBirthDate] = useState('1980-07-31')
  const [lifeExpectancy, setLifeExpectancy] = useState(80)
  const [data, setData] = useState(calculateTimeLeft(birthDate, lifeExpectancy))
  const percentage = getPercentage(birthDate, lifeExpectancy)

  function handleToggleModal() {
    setShowModal(!showModal)
  }

  function handleUpdateData({ name, birthDate, lifeExpectancy }) {
    if (!name || !birthDate || !lifeExpectancy) return

    const parsedLifeExpectancy = parseInt(lifeExpectancy)

    setName(name)
    setBirthDate(birthDate)
    setLifeExpectancy(parsedLifeExpectancy)
    setData(calculateTimeLeft(birthDate, parsedLifeExpectancy))

    // save to local storage
    localStorage.setItem('unalive-data', JSON.stringify({
      name,
      birthDate,
      lifeExpectancy: parsedLifeExpectancy
    }))

    handleToggleModal()
  }

  function handleResetData() {
    const defaultValues = {
      name: 'Harry',
      birthDate: '1980-07-31',
      lifeExpectancy: 80
    }

    // Update state with default values
    setName(defaultValues.name)
    setBirthDate(defaultValues.birthDate)
    setLifeExpectancy(defaultValues.lifeExpectancy)

    // Calculate and set data using the default values directly
    setData(calculateTimeLeft(defaultValues.birthDate, defaultValues.lifeExpectancy))

    // clear local storage data
    localStorage.removeItem('unalive-data')
  }

  // retrieve data from local storage on load
  useEffect(() => {
    if (!localStorage) return

    const localData = localStorage.getItem('unalive-data')
    if (localData) {
      const { name: n, birthDate: b, lifeExpectancy: l } = JSON.parse(localData)
      setName(n)
      setBirthDate(b)
      setLifeExpectancy(l)
    }
  }, [])

  // run the clock countdown with 1 sec interval
  useEffect(() => {
    const interval = setInterval(() => {
      setData(calculateTimeLeft(birthDate, lifeExpectancy))
    }, 1000)

    // clean up when component unmounts
    return () => clearInterval(interval)
  }, [birthDate, lifeExpectancy])

  return (
    <>
      <Layout>
        {showModal && (<Portal handleToggleModal={handleToggleModal}>
          <Form 
              handleToggleModal={handleToggleModal} 
              handleUpdateData={handleUpdateData}
          />
        </Portal>)}
        <Hero 
          name={name} 
          data={data}
          percentage={percentage}
          handleToggleModal={handleToggleModal}
          handleResetData={handleResetData}
        />
        <Clocks data={data} />
        <Calendar 
          lifeExpectancy={lifeExpectancy}
          data={data} 
        />
        <Summary
          lifeExpectancy={lifeExpectancy}
          birthDate={birthDate}
        />
      </Layout>
    </>
  )
}

export default App
