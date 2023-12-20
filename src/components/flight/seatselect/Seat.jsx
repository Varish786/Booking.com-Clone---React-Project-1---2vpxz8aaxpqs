import React, { useContext } from 'react'
import { FlightSeatContext } from '../../App'

function Seat({ seatNumber }) {
    const { flightcont, EditMovies } = useContext(FlightSeatContext)



    const seatClickHandler = (e) => {
        e.stopPropagation()
        const seatColor = document.querySelector(`.seat-${seatNumber}`).classList


        if (flightcont.seatNumbers.includes(seatNumber)) {

            const newMovieSeats = flightcont.seatNumbers.filter((seat) => {

                return seat !== seatNumber
            })
            let newtravel = flightcont.trvel + 1
            seatColor.remove("seat-black")
            seatColor.add("seat-grey")
            EditMovies({ ...flightcont, seatNumbers: newMovieSeats, trvel: newtravel })


        } else {
            if (flightcont.trvel > 0) {
                let newtravel = flightcont.trvel - 1
                seatColor.remove("seat-grey")
                seatColor.add("seat-black")
                EditMovies({ ...flightcont, seatNumbers: [...flightcont.seatNumbers, seatNumber], trvel: newtravel })
            }
        }
    }

    return (
        <div className="col-2 col-md-2">
            <div className={`seat seat-${seatNumber}`}
                onClick={seatClickHandler}>{seatNumber}</div>
        </div>
    )
}

export default Seat
