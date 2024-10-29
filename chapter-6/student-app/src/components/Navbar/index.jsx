import { Link } from "@tanstack/react-router";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import { useEffect, useState } from "react";

const NavigationBar = () => {
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

    const logout = (event) => {
        event.preventDefault();

        // delete the local storage here
        localStorage.removeItem("token");
    };

    return (
        <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand as={Link} to="/">
                    Student Wakanda App
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="/">
                            Home
                        </Nav.Link>
                    </Nav>
                    <Nav>
                        {user ? (
                            <>
                                <Nav.Link as={Link} to="/profile">
                                    <Image
                                        src={user?.profile_picture}
                                        fluid
                                        style={{
                                            width: "30px",
                                            height: "30px",
                                            display: "inline-block",
                                            overflow: "hidden",
                                            borderRadius: "50%",
                                        }}
                                    />{" "}
                                    {user?.name}
                                </Nav.Link>
                                <Nav.Link onClick={logout}>Logout</Nav.Link>
                            </>
                        ) : (
                            <>
                                <Nav.Link as={Link} to="/login">
                                    Login
                                </Nav.Link>
                                <Nav.Link as={Link} to="/register">
                                    Register
                                </Nav.Link>
                            </>
                        )}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavigationBar;
