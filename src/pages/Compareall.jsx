import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import './compareall.css'
import photo9 from '../Components/Assets/golden.png'
import photo4 from '../Components/Assets/black.png'
import photo from '../Components/Assets/red.png'

const Compareall = () => {
  const[menu,setMenu]= useState("home")
  return (
    
      <div className="app-container">
        <h2 id='compare'>COMPARE ALL MODELS</h2>
        <div className="vehicle-container">
            <img src={photo4} alt="Rhyno SE03 Lite" className="vehicle-image"/>
            <h2> SE03 Lite</h2>
            <button type="button" className="buy-now" onClick={()=>{setMenu("prebook")}}><Link className='prebook1' to='/prebook'>Buy Now </Link></button>
            </div>
            <div className="vehicle-container">
            <img src={photo9} alt="Rhyno SE03 Lite" className="vehicle-image"/>
            <h2> SE03 Lite </h2>
            <button type="button" className="buy-now" onClick={()=>{setMenu("prebook")}}><Link className='prebook1' to='/prebook'>Buy Now </Link></button>
            </div>
            <div className="vehicle-container">
            <img src={photo} alt="Rhyno SE03 Lite" className="vehicle-image"/>
            <h2>SE03 Max</h2>
            <button type="button" className="buy-now" onClick={()=>{setMenu("prebook")}}><Link className='prebook1' to='/prebook'>Buy Now </Link></button>
            </div>
            <table>
        <thead>
          <tr>
            <th id='th' colSpan="1">Specification</th>
            <th id='th' colSpan="1">SE03 Lite</th>
            <th id='th' colSpan="1">SE03 </th>
            <th id='th' colSpan="1">SE03 Max</th>
          </tr>
    
        </thead>
        <tbody>
          <tr>
            <td>Warranty on electronics</td>
            <td>1 year</td>
            <td>1 year</td>
            <td>1 year</td>
          </tr>
          <tr>
            <td>Battery</td>
            <td>1.8Kwh</td>
            <td>2.7Kwh</td>
            <td>2.7Kwh</td>
          </tr>
          <tr>
            <td>Max range (@30km/h)</td>
            <td>100 km</td>
            <td>150 km</td>
            <td>150 km</td>
          </tr>
          <tr>
            <td>Motor</td>
            <td>1500W</td>
            <td>1500W</td>
            <td>1500W</td>
          </tr>
          <tr>
            <td>Charging time</td>
            <td>3 hours (12A)</td>
            <td>4 hours (12A)</td>
            <td>4 hours (12A)</td>
          </tr>
          <tr>
            <td>Battery warranty</td>
            <td>3 Years</td>
            <td>3 Years</td>
            <td>3 Years</td>
          </tr>
          <tr>
            <td>Max speed</td>
            <td>50 km/h</td>
            <td>55 km/h</td>
            <td>55 km/h</td>
          </tr>
          <tr>
            <td>Max range (@full speed)</td>
            <td>70 km</td>
            <td>90 km</td>
            <td>90 km</td>
          </tr>
          <tr>
            <td>Max range (@45km/h)</td>
            <td>90 km</td>
            <td>110 km</td>
            <td>110 km</td>
          </tr>
          <tr>
            <td>Other key benefits</td>
            <td>
              Fire-safe battery<br />
              Range prediction<br />
              Comfortable ride<br />
              Stable and safe
            </td>
            <td>
              Fire-safe battery<br />
              Range prediction<br />
              Comfortable ride<br />
              Stable and safe
            </td><td>
              Fire-safe battery<br />
              Range prediction<br />
              Comfortable ride<br />
              Stable and safe
            </td>
             </tr>
          <tr>
            <td>Battery features</td>
            <td>
              LFP with 1500 cycles<br />
              Active Balancing<br />
              Waterproof (IP67)
            </td>
            <td>
              LFP with 1500 cycles<br />
              Active Balancing<br />
              Waterproof (IP67)
            </td>
            <td>
              LFP with 1500 cycles<br />
              Active Balancing<br />
              Waterproof (IP67)
            </td>
          </tr>
        </tbody>
      </table>
        
        
    </div>
    
  )
}

export default Compareall
