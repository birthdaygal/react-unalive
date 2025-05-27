export default function Summary(props) {
  const { lifeExpectancy, birthDate } = props
  const deathAge = parseInt(birthDate.split('-')[0]) + lifeExpectancy

  return (
    <section id="summary">
      <div className="summary-bar">
        <p className="sentence">
          <i className="fa-solid fa-heart-crack"></i>
          You'll probably die in the year <strong>{deathAge}</strong> at the age of <strong>{lifeExpectancy}</strong>.
        </p>
      </div>
      <div className="summary-quote">
        <h4>Yesterday is history, tommorow is a mystery and today is a gift. That's why we call it the present.</h4>
        <h4>– Ralph Waldo Emerson</h4>
      </div>
    </section>
  )
}