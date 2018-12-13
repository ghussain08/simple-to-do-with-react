import React from 'react';
import './Header.css';
const Header = () => {

    // Define array of days of a week
    let days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    let d = new Date();

    return (
        <header className="Header">
            {
                /* 
                    getDay() function returns an
                    integer representing index of current day in week 
    
                    example:
                    For Monday it will return 1
                    and to access that we need to do "getDay() - 1"
                */
            }
            <h1>{days[d.getDay() - 1]}</h1>
            <p>{d.toLocaleDateString()}</p>
        </header>
    )

}
export default Header;