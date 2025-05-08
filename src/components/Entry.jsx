import "./Entry.css"
export default function Entry(){
    return(
        <div className="grp-flex">
            <img className="travel-image" src="https://scrimba.com/links/travel-journal-japan-image-url" alt="japan-pic"></img>
            <div className="right-container">
                <div className="first-sec">
                    <img src="src/assets/location-logo.png" alt="location-logo" className="location-logo"></img>
                    <span className="country">JAPAN</span>
                    <a href="https://www.google.com/maps/place/Mount+Fuji/@35.3606421,138.7170637,15z/data=!3m1!4b1!4m6!3m5!1s0x6019629a42fdc899:0xa6a1fcc916f3a4df!8m2!3d35.3606255!4d138.7273634!16zL20vMGNrczA?entry=ttu" className="loc-link">View on Google Maps</a>
                </div>
                <h1 className="heading">Mount Fuji</h1>
                <h2 className="date">12 Jan, 2023 - 24 Jan, 2023</h2>
                <h2 className="about">Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists.</h2>
            </div>
        </div>
    )
}