import { createLazyFileRoute } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";

export const Route = createLazyFileRoute("/profile")({
    component: Profile,
});

function Profile() {
    const [user, setUser] = useState(null);

    useEffect(() => {
        // get token from local storage
        const token = localStorage.getItem("token");

        if (token) {
            // hit api auth get profile and pass the token to the function
            getProfile(token);
        }
    }, []);

    const getProfile = async (token) => {
        // fetch get profile
        const response = await fetch(
            `${import.meta.env.VITE_API_URL}/auth/profile`,
            {
                headers: {
                    authorization: `Bearer ${token}`,
                },
                method: "GET",
            }
        );

        // get data
        const result = await response.json();
        if (result.success) {
            // set the user state here
            setUser(result.data);
            return;
        }

        alert(result.message);
    };

    return (
        <Row className="mt-5">
            <Col className="offset-md-3">
                <Card>
                    <Card.Img variant="top" src={user?.profile_picture} />
                    <Card.Body>
                        <Card.Title>{user?.name}</Card.Title>
                        <Card.Text>{user?.email}</Card.Text>
                    </Card.Body>
                </Card>
            </Col>
            <Col md={3}></Col>
        </Row>
    );
}
