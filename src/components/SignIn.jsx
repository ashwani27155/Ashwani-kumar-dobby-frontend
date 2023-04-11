import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./SignUp";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";
function SignIn() {
	const navigate = useNavigate();
	const [input, setInput] = useState({ email: "", password: "" });
	const onChangeHandler = (e) => {
		const val = e.target.value;
		const name = e.target.name;
		setInput({ ...input, [name]: val });
	};

	const Submit = (e) => {
		e.preventDefault();
		axios
			.post("http://localhost:8000/user/signin", input)
			.then((res) => {
				if (res.data.status === true) {
					localStorage.setItem("token", res.data.token);
					navigate("/showdata");
				}
			})
			.catch((err) => {
				console.log(err.response.data.msg);
			});
	};

	return (
		<div className="container">
			<Form onSubmit={Submit}>
				<Form.Group className="mb-3" controlId="formGroupEmail">
					<Form.Label>Email address</Form.Label>
					<Form.Control
						type="email"
						placeholder="Enter email"
						name="email"
						value={input.email}
						onChange={onChangeHandler}
					/>
				</Form.Group>
				<Form.Group className="mb-3" controlId="formGroupPassword">
					<Form.Label>Password</Form.Label>
					<Form.Control
						type="password"
						placeholder="Password"
						name="password"
						value={input.password}
						onChange={onChangeHandler}
					/>
				</Form.Group>

				<Button variant="primary" type="submit">
					SignIn
				</Button>

				<br />
				<Link to="/signup">Don't have Account</Link>
			</Form>
		</div>
	);
}
export default SignIn;
