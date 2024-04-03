import React from "react";
import "./Footer.scss"

const Footer = () => {
    return (
        <footer className="footer">
            <p>&copy; {new Date().getFullYear()}React CA placeholder</p>
        </footer>
    )
}
export default Footer