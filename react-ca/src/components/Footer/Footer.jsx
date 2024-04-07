import React from "react";
import "./Footer.scss"

const Footer = () => {
    return (
        <footer className="footer">
            <p>&copy; {new Date().getFullYear()} React CA </p>
        </footer>
    )
}
export default Footer