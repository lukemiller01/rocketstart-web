import React from 'react'

const VerbExample = ({badExample, goodExample}) => {

  return (
    <div>
        <div className="good__example">
            <span className="material-icons explanation__cross">close</span>
            <p className="badExample">{badExample}</p>
        </div>
        <div className="bad__example">
            <span className="material-icons explanation__check">done</span>
            <p className="goodExample">{goodExample}</p>
        </div>
        <hr className="horizontal__rule"></hr>
        <div style={{paddingBottom: ".5rem"}}></div>
    </div>
  )
}

export default VerbExample