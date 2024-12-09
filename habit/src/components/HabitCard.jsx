export default function HabitCard(props){

function change(){

    return(
        console.log("color changed")
    )
}

    return(
<>
      <section className="sec--card">
      <div className="card-tab"></div>
      <div className="card-content">
        <h2 className="card-title">Headline</h2>
        <p className="card-description">{props.name}</p>

        <div className="progress-bar">
          <div className="progress" style={{ width: "95%" }}></div>
        </div>
        <p className="progress-text">99/100</p>

        <div className="card-footer">
          <div className="footer-text">Text</div>
          <div className="footer-text">Text</div>
          {/* <div className="tag">Tag</div> */}
        </div>
      </div>
      </section>
        </>
    )
}