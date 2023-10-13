import { MdLocationOn } from "react-icons/md"

const Info = ({imageUrl, location, googleMapsUrl, title, startDate, endDate, description}) => {
    return ( 
        <section className="info">
            <div className="info-images">
                <img src={imageUrl} alt="" className="info-img" />
            </div>
            
            <div className="info-details">
                <div className="top">
                    <span className="location-icon"> <MdLocationOn /></span>
                    <span className="location">{location} </span> 
                    <a className="info-map" href={googleMapsUrl}>View on Google Maps</a>
                </div>
                
                <h2 className="info-title">{title}</h2>
                <p className="info-date">{startDate} - {endDate}</p>
                <p className="info-description">{description}</p>
            </div>
        </section>
     );
}
 

export default Info;