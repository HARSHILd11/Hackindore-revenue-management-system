
import Chart from './Chart';
import Piechart from "./Piechart1";
import "./User-dashboard.css"



export default function DashBoard() {
    return (
      <>
     
     <div className="Dashboard-container">
        <div className="upper-dashboard">
          <div className="status-display-container">
            <div className="status-display">
              <div className="status-box">Balance</div>
              <div className="status-box">Payment Status</div>
              <div className="status-box">xyz</div>
            </div>
            <div className="line-graph">
              <Chart />
            </div>
          </div>
          <div className="payment-display">
            <div>Total Tax Paid</div>
            <div>Dues</div>
            <div>Pts Earned</div>

          </div>
        </div>
        <div className="lower-dashboard">
         <div className="piechart">
         <Piechart></Piechart>
         </div>
         <div className='ld-status-box'>Payment history</div>
         <div className='ld-status-box'>Calculate Your Tax</div>
        </div>
      </div>
      </>
    )
  }