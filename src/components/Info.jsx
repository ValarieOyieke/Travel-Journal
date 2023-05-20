import { MdLocationOn } from "react-icons/md"

const Info = (props) => {
    return ( 
        <section className="info">
            <div className="info-images">
                <img src={props.imageUrl} alt="" className="info-img" />
            </div>
            
            <div className="info-details">
                <div className="top">
                    <span className="location-icon"> <MdLocationOn /></span>
                    <span className="location">{props.location} </span> 
                    <a className="info-map" href={props.googleMapsUrl}>View on Google Maps</a>
                </div>
                
                <h2 className="info-title">{props.title}</h2>
                <p className="info-date">{props.startDate} - {props.endDate}</p>
                <p className="info-description">{props.description}</p>
            </div>
        </section>
     );
}
 

export default Info;