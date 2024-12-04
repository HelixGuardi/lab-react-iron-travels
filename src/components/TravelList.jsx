import { useState } from "react";
import travelPlansData from "../assets/travel-plans.json";

function TravelList() {
  const [travelInfo, setTravelInfo] = useState(null);

  return (
    <div className="list-container">
      {travelPlansData.map((eachObj, index) => {
        return (
          <div key={index} className="travel-info-container">
            <img src={eachObj.image} />
            <div className="info-subContainer">
              <h1>
                {eachObj.destination} ({eachObj.days} days)
              </h1>
              <p id="description-text">{eachObj.description}</p>
              <p>
                <span>Price:</span> {eachObj.totalCost} €
              </p>
              <div className="tag-container">
                {eachObj.totalCost <= 350 && (
                  <div className="great-deal-tag">
                    <p>Great Deal</p>
                  </div>
                )}
                {eachObj.totalCost >= 1500 && (
                  <div className="premium-tag">
                    <p>Premium</p>
                  </div>
                )}
                {eachObj.totalCost >= 2000 && (
                  <div className="all-inclusive-tag">
                    <p>All-Inclusive</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        );
      })}
      ;
    </div>
  );
}

export default TravelList;
