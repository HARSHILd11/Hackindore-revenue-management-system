
import Chart from './Chart';
import Piechart from "./Piechart1";
import "./User-dashboard.css"



export default function DashBoard() {
  return (
    <>

      <div className="Dashboard-container1">
        <div className="upper-dashboard">
          <div className="status-display-container">
            <div className="status-display">
              <div className="status-box sb-1">Balance: <b>-10000</b> </div>
              <div className="status-box sb-2">Payment Status : <br /> <b> pending</b> </div>
              <div className="status-box sb-3">Your Assets</div>
            </div>
            <div className="line-graph">
              <Chart />
            </div>
          </div>
          <div className="payment-display">
            <div className='tax-paid'>
              <div>
                Total Tax Paid till now
              </div>
              <div>
                <b>100203</b>
              </div> </div>
          <div className="tax-paid">
          <div>
              Dues : 4000
            </div>
            <div>
            <button className='btn btn-danger paynowsty'>Paynow</button>
            </div>
          </div>
          <div className='tax-paid'>
          <div>Pts Earned 100 </div>
          <div><button>Reedem NOW</button></div>
          </div>

          </div>
        </div>
        <div className="lower-dashboard">
          <div className="piechart">
            <Piechart></Piechart>
          </div>
          <div className='ld-status-box status-box'>Payment history

          </div>
         
        </div>
      </div>
    </>
  )
}