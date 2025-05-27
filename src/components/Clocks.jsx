export default function Clocks({ data }) {
  return (
    <section id="clocks">
      <p className="sentence">Time remaining in different units.</p>
      <div className="clocks-grid">
        {Object.keys(data).map((clock, index) => (
          <div className="clock-card" key={index}>
            <p>{data[clock]}</p>
            <p>{clock}</p>
          </div>
        ))}
      </div>
    </section>
  )
}