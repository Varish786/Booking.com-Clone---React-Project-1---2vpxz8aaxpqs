import React from 'react'
import GenerateSeats from './GenerateSeats'
import "./seat.css"



function Seatmatrix() {
	return (
		<div className="movie-complex">
			<p className='para'>Select your Seat</p>
			<div className="row movie-layout">
				<div className="movie-column-1">
					{GenerateSeats([1,2,3,4,5,6,7,8,9,10])}
				</div>
				<div className="movie-column-2">
				    {GenerateSeats([11,12,13,14,15,16,17,18,19,20])}
				</div>
				<div className="movie-column-3">
					{GenerateSeats([21,22,23,24,25,26,27,28,29,30])}
				</div>

				<div className="movie-column-4">
					{GenerateSeats([31,32,33,34,35,36,37,38,39,40])}
				</div>

				<div className="movie-column-3">
					{GenerateSeats([41,42,43,44,45,46,47,48,49,50])}
				</div>
				<div className="movie-column-3">
					{GenerateSeats([51, 52, 53, 54, 55,  56, 57, 58, 59, 60])}
				</div>
				<div className="movie-column-3">
					{GenerateSeats([61, 62, 63, 64, 65, 66,  67, 68, 69, 70])}
				</div>
				<div className="movie-column-3">
					{GenerateSeats([71,72, 73, 74, 75, 76, 77,  78, 79, 80])}
				</div>
				<div className="movie-column-3">
					{GenerateSeats([81, 82,83, 84, 85, 86, 87, 88,  89, 90])}
				</div>
				<div className="movie-column-3">
					{GenerateSeats([91, 92, 93,94, 95, 96, 97, 98, 99, 100])}
				</div>
			</div>
		</div>
	)
}



export default Seatmatrix
