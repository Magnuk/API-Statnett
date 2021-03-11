// if(items.metadata.count>0){
    function renderEarthquakes() {
        const earthquakeList = [];
        items.forEach((features) => {
          let location = features.properties.place;
          let magnitude = features.properties.mag;
          let time = features.properties.time;
          earthquakeList.push(<Earthquakes location={location} magnitude={magnitude} time={time}/>);
        })
        return earthquakeList;
      }
    // }
    const Earthquakes = ({ location, magnitude, time }) => (
        <div>
          <p>{location}</p>
          <p>{magnitude}</p>
          <p>{time}</p>
        </div>
    );

