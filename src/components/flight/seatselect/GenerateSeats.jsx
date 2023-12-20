import React from 'react'
import "./seat.css"
import Seat from "./Seat"

function GenerateSeats(seatNumbers) {
	
	return (
		<div className="row">
			{
				seatNumbers.map((seatNumber) => {
					return <Seat seatNumber={seatNumber} key={seatNumber}/>
				})
			}
		</div>
	)
}

export default GenerateSeats
