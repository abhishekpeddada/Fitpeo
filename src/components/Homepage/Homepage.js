import '../../../src/styles/styles.css';
import Barchart from '../charts/Barchart';
import Piechart from '../charts/Piechart';
function Homepage() {
  return (
    <div  className="main-content">
    <div>
      <div className='header-wrapper'>
        <div className='header-title'>
            <h2>Hello Sharukh👋,</h2>
        </div> 
        <div className='user-info'>
        <div className='search-box'>
        <i className='fa-solid fa-search'></i>
        <input type='text' className='search' placeholder='search'/>
        </div>
        </div>
      </div>
    </div>
    <div className='card-container'>
            <div className='card-wrapper'>
                <div className='payment-card'>
                    <div className='card-header'>
                    <i className='icon'><i className="fas fa-dollar-sign inside-icon"></i></i>
                        <div className='amount'>
                        <h3 className='card-main-title'>Earnings</h3>
                        <span className='title'>198k</span>
                        <h4 className='amount-value'><span className='up-arrow'>↑ 37%</span> this month</h4>
                        </div>   
                    </div>
                </div>
                <div className='payment-card'>
                    <div className='card-header'>
                    <i className='icon1'><i className="fas fa-file inside-icon1"></i></i>
                        <div className='amount'>
                        <h3 className='card-main-title'>orders</h3>
                        <span className='title'>2.4 k</span>
                        <h4 className='amount-value'><span className='down-arrow'>↓ 2%</span>this month</h4>
                        </div>   
                    </div>
                </div>
                <div className='payment-card'>
                    <div className='card-header'>
                    <i className='icon2'><i className="fas fa-wallet inside-icon2"></i></i>
                        <div className='amount'>
                        <h3 className='title'>Balance</h3>
                        <span className='card-main-title'>2.4 k</span>
                        <h4 className='amount-value'><span className='down-arrow'>↓ 2%</span>this month</h4>
                        </div>   
                    </div>
                </div>
                <div className='payment-card'>
                    <div className='card-header'>
                    <i className='icon3'><i className="fas fa-shopping-bag inside-icon3"></i></i>
                        <div className='amount'>
                        <h3 className='card-main-title'>Total sales</h3>
                        <span className='title'>89k</span>
                        <h4 className='amount-value'><span className='up-arrow'>↑ 11%</span>this week</h4>
                        </div>   
                    </div>
                </div>
            </div>

    </div>
    <div className='graphs'>
        <div className='box'>
            <Barchart/>
        </div>
        <div className='box1'><Piechart/></div>

    </div>
    <div className='table-wrapper'>
        <div className='title-header'>
            <h3 className='card-main-title'>Product Shell</h3>
            <input type='search' placeholder='search' className='search-main-title'/>
            <select className='search-main-title'>
                <option>30days</option>
            </select>
        </div>

        <div className='table-container'>
        <table>
            <thead>
                <tr>
                    <th className='prod-head'>Product Name </th>
                    <th>Stock</th>
                    <th>Price</th>
                    <th>Total Sales</th>
                </tr>
            </thead>
            <tbody>
                    <tr>
                        <td>abstract</td>
                        <td>32 in stock</td>
                        <td>45</td>
                        <td>20</td>
                    </tr>
                    <tr>
                        <td>sharpness illusion</td>
                        <td>32 in stock</td>
                        <td>45</td>
                        <td>20</td>
                    </tr>
                </tbody>
        </table>
        </div>
    </div>
    </div>
  );
}

export default Homepage;
