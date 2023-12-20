
import "./subfooter.css";
import searchimg from "../../asserts/tour/png/searchfooter.png"
import moneyusp from "../../asserts/tour/png/MoneyUsp.png"
import ticket from "../../asserts/tour/png/TicketsUsp.png"

function Subfooter() {
    return (
        <section className='subfooter_cont'>

            <main className='subfooter_main'>

                <div className="search_subf">
                    <img src={searchimg} alt="searchimg" className="search_img" />
                    <div className="sub_des">
                        <h1 className="subh1">Search a hug selection</h1>
                        <p className="subp">Easily compare flights, airlines, and <br/> prices – all in one place</p>
                    </div>
                </div>
                <div className="search_subf">
                    <img src={moneyusp} alt="moneyusp" className="search_img" />
                    <div className="sub_des">
                        <h1 className="subh1">Pay no hidden fees</h1>
                        <p className="subp">Get a clear price breakdown every step<br/>of the way</p>
                    </div>
                </div>
                <div className="search_subf">
                    <img src={ticket} alt="ticket" className="search_img" />
                    <div className="sub_des">
                        <h1 className="subh1"> Get more flexibility</h1>
                        <p className="subp">Change your travel dates with the<br/>Flexible ticket option*</p>
                    </div>
                </div>


            </main>

        </section>
    )
}

export default Subfooter
