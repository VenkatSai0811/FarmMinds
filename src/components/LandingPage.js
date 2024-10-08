import React from 'react';
import { useNavigate } from 'react-router-dom';
import './LandingPage.css'; // Import the CSS file

function LandingPage() {
    const navigate = useNavigate();

    // Function to handle button click and navigate to the signin page
    const handleNavigation = () => {
        navigate('/signin'); // Redirect to the Signin page
    };

    return (
        <div className="landing-page-container"> {/* Updated className */}
            <div className="button-container">
                <button className="role-button" onClick={handleNavigation}>Admin</button>
                <button className="role-button" onClick={handleNavigation}>Farmer</button>
                <button className="role-button" onClick={handleNavigation}>Buyer</button>
            </div>
        </div>
    );
}

export default LandingPage;
