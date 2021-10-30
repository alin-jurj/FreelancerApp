import React from 'react'

const ProgressBar = ({value,max}) => {
    return (
        <div>
        <progress value={value} max={100} />
        <span>{value/max*100}% </span>
        </div>
    )
}

export default ProgressBar
