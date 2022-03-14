import React, {useEffect} from 'react'
import {useQuery, gql} from "@apollo/client";
import {GET_ROCKETS} from '../GraphQl/Queries'
import RocketCard from './RocketCard';


 const GetRockets = () => {
    const {error, loading, data} = useQuery(GET_ROCKETS);

     useEffect(()=> {
       console.log(data)
    }, [data])

    const rocketData = data?.rockets.rockets;
    console.log(rocketData)
  
  if (typeof rocketData == 'undefined'){
      return (
        <h1 className='loading'>LOADING...</h1>
      )
  }
  else {
  return (
    <div className='rocket-section'>
      <div className='rocket-section-content'>
        <h1 className='rocket-section-title'>ROCKETS</h1>
        <div className='rocket-container'>
          <RocketCard name={rocketData[0].name} img={rocketData[0].img} description={rocketData[0].description} height={rocketData[0].height} success_rate_pct={rocketData[0].success_rate_pct} stages={rocketData[0].stages} boosters={rocketData[0].boosters} first_flight={rocketData[0].first_flight} wikipedia={rocketData[0].wikipedia}/>
          <RocketCard name={rocketData[1].name} img={rocketData[1].img} description={rocketData[1].description} height={rocketData[1].height} success_rate_pct={rocketData[1].success_rate_pct} stages={rocketData[1].stages} boosters={rocketData[1].boosters} first_flight={rocketData[1].first_flight} wikipedia={rocketData[1].wikipedia}/>
          <RocketCard name={rocketData[2].name} img={rocketData[2].img} description={rocketData[2].description} height={rocketData[2].height} success_rate_pct={rocketData[2].success_rate_pct} stages={rocketData[2].stages} boosters={rocketData[2].boosters} first_flight={rocketData[2].first_flight} wikipedia={rocketData[2].wikipedia}/>
          <RocketCard name={rocketData[3].name} img={rocketData[3].img} description={rocketData[3].description} height={rocketData[3].height} success_rate_pct={rocketData[3].success_rate_pct} stages={rocketData[3].stages} boosters={rocketData[3].boosters} first_flight={rocketData[3].first_flight} wikipedia={rocketData[3].wikipedia}/>
        </div>
      </div>
    </div>

  )
  }
}

export default GetRockets