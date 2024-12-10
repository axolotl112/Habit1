import { useNavigate } from 'react-router-dom';
import { useState } from 'react'


export default function HabitCard(props){

  const navigate = useNavigate();

  const handleClick = () => {

    const SProps = {
      id: props.id,
      name: props.name,
      progress: props.progress,
    };
   
    navigate(`/habit/src/pages/CardPage.jsx/${props.name}` , { state: SProps }); // Target page route
  }


    return(
<>

      <section onClick={handleClick} className="sec--card">
      <div className="card-tab"></div>
      <div className="card-content">
   
        <h2 className="card-title">Headline</h2>
        <p className="card-description">{props.name}</p>

        <div className="progress-bar">
          <div className="progress" style={{ width: "95%" }}></div>
        </div>
        <p className="progress-text">%{props.progress}</p>

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