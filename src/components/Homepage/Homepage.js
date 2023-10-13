import '../../../src/styles/styles.css';
import {FaDollarSign} from 'react-icons/fa';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFile } from '@fortawesome/free-solid-svg-icons';
import { faWallet } from '@fortawesome/free-solid-svg-icons';
import { faShoppingBag } from '@fortawesome/free-solid-svg-icons';
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
                    <i className='icon'><FaDollarSign/></i>
                        <div className='amount'>
                        <h3 className='card-main-title'>Todays data</h3>
                        <span className='title'>Payment amount</span>
                        <span className='amount-value'>$5000</span>
                        </div>   
                    </div>
                </div>
                <div className='payment-card'>
                    <div className='card-header'>
                    <i className='icon'><FontAwesomeIcon icon={faFile} /></i>
                        <div className='amount'>
                        <h3 className='card-main-title'>Todays data</h3>
                        <span className='title'>Payment amount</span>
                        <span className='amount-value'>$5000</span>
                        </div>   
                    </div>
                </div>
                <div className='payment-card'>
                    <div className='card-header'>
                    <i className='icon'><FontAwesomeIcon icon={faWallet} /></i>
                        <div className='amount'>
                        <h3 className='card-main-title'>Todays data</h3>
                        <span className='title'>Payment amount</span>
                        <span className='amount-value'>$5000</span>
                        </div>   
                    </div>
                </div>
                <div className='payment-card'>
                    <div className='card-header'>
                    <i className='icon'><FontAwesomeIcon icon={faShoppingBag} /></i>
                        <div className='amount'>
                        <h3 className='card-main-title'>Todays data</h3>
                        <span className='title'>Payment amount</span>
                        <span className='amount-value'>$5000</span>
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
            <h3 className='card-main-title'>Finanace Data</h3>
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
                </tbody>
        </table>
        </div>
    </div>
    </div>
  );
}

export default Homepage;
