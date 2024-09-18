import React from "react";
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <nav style={styles.navbar}>
            <ul style={styles.navList}>
                <li style={styles.navItem}>
                    <Link to="/" style={styles.navLink}>Home</Link>
                </li>
                <li style={styles.navItem}>
                    <Link to="/myform" style={styles.navLink}>Form</Link>
                </li>
            </ul>
        </nav>
    );
}

const styles = {
    navbar: {
        backgroundColor: '#333',
        padding: '1rem',
    },
    navList: {
        listStyleType: 'none',
        margin: 0,
        padding: 0,
        display: 'flex',
    },
    navItem: {
        marginRight: '1rem',
    },
    navLink: {
        color: '#fff',
        textDecoration: 'none',
    }
};

export default Navbar;
