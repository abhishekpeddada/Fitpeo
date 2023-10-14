import React, { useState, useEffect } from 'react';
import '../../../src/styles/styles.css';

function Sidebar() {
    const [showSidebar, setShowSidebar] = useState(true);
    const [hamburgerClass, setHamburgerClass] = useState('hamburger');

    useEffect(() => {
        const mediaQuery = window.matchMedia("(max-width: 600px)");
        setShowSidebar(!mediaQuery.matches);
        setHamburgerClass(mediaQuery.matches ? 'hamburger-min' : 'hamburger');

        const handleChange = (e) => {
            setShowSidebar(!e.matches);
            setHamburgerClass(e.matches ? 'hamburger-min' : 'hamburger');
        };

        mediaQuery.addListener(handleChange);
        return () => mediaQuery.removeListener(handleChange);
    }, []);

    const toggleSidebar = () => {
        setShowSidebar(!showSidebar);
        setHamburgerClass(showSidebar ? 'hamburger-min' : 'hamburger');
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
            <div className={hamburgerClass} onClick={toggleSidebar}>
                &#9776;
            </div>
            <div className={showSidebar ? "Sidebar" : "Sidebar hidden"}>
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
        </div>
    );
}

export default Sidebar;
