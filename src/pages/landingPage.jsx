import React from 'react';
import {
    Button,
    Page, useNavigate
} from 'zmp-ui';

const LandingPage = () => {

    const navigate = useNavigate();
    return (
        <Page className="page">
            Landing Page First

            <Button
                fullWidth
                variant="secondary"
                onClick={() => {
                    navigate("/home", {
                        replace: true,
                        animate: true,
                        direction: "backward",
                    });
                }}
            >
                Go To Home Page
            </Button>
        </Page>

    );
}

export default LandingPage;