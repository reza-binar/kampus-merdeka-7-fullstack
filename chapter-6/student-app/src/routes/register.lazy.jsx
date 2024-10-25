import { createLazyFileRoute } from "@tanstack/react-router";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";

export const Route = createLazyFileRoute("/register")({
    component: Register,
});

function Register() {
    return (
        <Row className="mt-5">
            <Col className="offset-md-3">
                <Card>
                    <Card.Header className="text-center">Register</Card.Header>
                    <Card.Body>
                        <Form>
                            <Form.Group
                                as={Row}
                                className="mb-3"
                                controlId="name"
                            >
                                <Form.Label column sm="3">
                                    Name
                                </Form.Label>
                                <Col sm="9">
                                    <Form.Control
                                        type="text"
                                        placeholder="Name"
                                        required
                                    />
                                </Col>
                            </Form.Group>

                            <Form.Group
                                as={Row}
                                className="mb-3"
                                controlId="email"
                            >
                                <Form.Label column sm={3}>
                                    Email
                                </Form.Label>
                                <Col sm={9}>
                                    <Form.Control
                                        type="email"
                                        placeholder="Email"
                                        required
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
                                <Col sm={9}>
                                    <Form.Control
                                        type="password"
                                        placeholder="Password"
                                        required
                                    />
                                </Col>
                            </Form.Group>

                            <Form.Group
                                as={Row}
                                className="mb-3"
                                controlId="confirmPassword"
                            >
                                <Form.Label column sm={3}>
                                    Confirm Password
                                </Form.Label>
                                <Col sm={9}>
                                    <Form.Control
                                        type="password"
                                        placeholder="Confirm Password"
                                        required
                                    />
                                </Col>
                            </Form.Group>

                            <Form.Group
                                as={Row}
                                className="mb-3"
                                controlId="profilePicture"
                            >
                                <Form.Label column sm={3}>
                                    Profile Picture
                                </Form.Label>
                                <Col sm={9}>
                                    <Form.Control
                                        type="file"
                                        placeholder="Choose File"
                                        required
                                    />
                                </Col>
                            </Form.Group>
                        </Form>
                        <div className="d-grid gap-2">
                            <Button variant="primary">Register</Button>
                        </div>
                    </Card.Body>
                </Card>
            </Col>
            <Col md={3}></Col>
        </Row>
    );
}
