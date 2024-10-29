import { createLazyFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";

export const Route = createLazyFileRoute("/login")({
    component: Login,
});

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const onSubmit = async (event) => {
        event.preventDefault();

        /* hit the login API */
        // define the request body
        const body = {
            email,
            password,
        };

        // hit the login API with the data
        const response = await fetch(
            `${import.meta.env.VITE_API_URL}/auth/login`,
            {
                body: JSON.stringify(body),
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
            }
        );

        // get the data if fetching succeed!
        const result = await response.json();
        if (result.success) {
            // save token to local storage
            localStorage.setItem("token", result.data.token);
            return;
        }

        alert(result.message);
    };

    return (
        <Row className="mt-5">
            <Col className="offset-md-3">
                <Card>
                    <Card.Header className="text-center">Login</Card.Header>
                    <Card.Body>
                        <Form onSubmit={onSubmit}>
                            <Form.Group
                                as={Row}
                                className="mb-3"
                                controlId="email"
                            >
                                <Form.Label column sm={3}>
                                    Email
                                </Form.Label>
                                <Col sm="9">
                                    <Form.Control
                                        type="email"
                                        placeholder="Email"
                                        required
                                        value={email}
                                        onChange={(event) => {
                                            setEmail(event.target.value);
                                        }}
                                    />
                                </Col>
                            </Form.Group>
                            <Form.Group
                                as={Row}
                                className="mb-3"
                                controlId="password"
                            >
                                <Form.Label column sm={3}>
                                    Password
                                </Form.Label>
                                <Col sm="9">
                                    <Form.Control
                                        type="password"
                                        placeholder="Password"
                                        required
                                        value={password}
                                        onChange={(event) => {
                                            setPassword(event.target.value);
                                        }}
                                    />
                                </Col>
                            </Form.Group>
                            <div className="d-grid gap-2">
                                <Button type="submit" variant="primary">
                                    Login
                                </Button>
                            </div>
                        </Form>
                    </Card.Body>
                </Card>
            </Col>
            <Col md={3}></Col>
        </Row>
    );
}
