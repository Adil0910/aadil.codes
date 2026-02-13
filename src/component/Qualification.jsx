import React from 'react'

function Qualification() {
  return (
    <>

      <div className="qualification-section">

        <h2 className="heading"><span style={{borderBottom:"3px solid", paddingBlock:"10px"}}>My Qua</span>lifications</h2>

        <div className="card-container">

          {/* BCA */}
          <div className="q-card">
            <div className="card-left">
              <h3>BCA (Pursuing)</h3>
              <p className='paraf'><strong>College:</strong> Manipal Univercity Jaipur</p>
              <p className='paraf'><strong>Session:</strong> 2024 (April) - Present</p>
              <p className='paraf'><strong>Roll No:</strong> 2414500249</p>
              <p className='paraf'><strong>2nd Semester Marks:</strong> 8.32 SGPA</p>
            </div>

            <div className="card-right">
              <img src="img/tom.jpeg" alt="BCA" />
            </div>
          </div>

          {/* BA */}
          <div className="q-card">
            <div className="card-left">
              <h3>B.A (Completed)</h3>
              <p className='paraf'><strong>College:</strong> D.D.U Gorakhpur</p>
              <p className='paraf'><strong>Passing Year:</strong> 2024 (March)</p>
            </div>

            <div className="card-right">
              <img src="img/day3.jpeg" alt="BA" />
            </div>
          </div>

          {/* 12th */}
          <div className="q-card">
            <div className="card-left">
              <h3>12th (Intermediate)</h3>
              <p className='paraf'><strong>Board:</strong> UP</p>
              <p className='paraf'><strong>Passing Year:</strong> 2020</p>
              <p className='paraf'><strong>Percentage:</strong> 71%</p>
            </div>

            <div className="card-right">
              <img src="img/graduatio day2.jpeg" alt="12th" />
            </div>
          </div>

          {/* 10th */}
          <div className="q-card">
            <div className="card-left">
              <h3>10th (Matriculation)</h3>
              <p className='paraf'><strong>Board:</strong> UP</p>
              <p className='paraf'><strong>Passing Year:</strong> 2018</p>
              <p className='paraf'><strong>Percentage:</strong> 65%</p>
            </div>

            <div className="card-right">
              <img src="img/Graduation Day.jpeg" alt="10th" />
            </div>
          </div>

        </div>
<div className='lastq' style={{width:"100%",display:"flex",justifyContent:"center"}}>
        <div className="training-card">
          <h3>Full Stack Development </h3>
          <p className='paraf'><strong>Institute:</strong> @traininginfoseek , Lucknow</p>
          <p className='paraf'><strong>Technologies:</strong> Frontend Backend Security & Services</p>
          <p className='paraf'><strong>Projects:</strong> 10 Projects </p>
        
        </div>
</div>

      </div>
    </>
  )
}

export default Qualification
