import React, { useState } from 'react';
import { FaArrowRight } from "react-icons/fa";
import '../../../src/styles/styles.css';

function Sidebar() {
    const [showSidebar, setShowSidebar] = useState(true);

    const toggleSidebar = () => {
        setShowSidebar(prevState => !prevState);
    };

    const [selectedItem, setSelectedItem] = useState(null);
    const handleItemClick = (item) => {
        setSelectedItem(item);
    };

    const menuItems = [
        { id: 1, name: 'Dashboard' },
        { id: 2, name: 'Product' },
        { id: 3, name: 'Customers' },
        { id: 4, name: 'Income' },
        { id: 5, name: 'Promote' },
        { id: 6, name: 'Help' }
    ];

    return (
        <div>
            <div className="hamburger" onClick={toggleSidebar}>
                &#9776;
            </div>
            {showSidebar && (
                <div className="Sidebar">
                    <div className="logo">Dashboard</div>
                    <ul className="menu">
                        {menuItems.map((item) => (
                            <li
                                className={selectedItem === item.id ? 'selected' : ''}
                                onClick={() => handleItemClick(item.id)}
                                key={item.id}
                            >
                                <a href="#">
                                    {item.name}
                                </a>
                            </li>
                        ))}
                        <li className='profile' ><a>Ivano</a><span className='product-manager'>Product Manager</span></li>
                    </ul>
                </div>
            )}
        </div>
    );
}

export default Sidebar;
