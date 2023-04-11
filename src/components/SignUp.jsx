import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./SignUp";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

function SignUp() {
	const [input, setInput] = useState({ fname: "", email: "", password: "" });
	const onChangeHandler = (e) => {
		const val = e.target.value;
		const name = e.target.name;
		setInput({ ...input, [name]: val });
	};

	const Submit = async (e) => {
		e.preventDefault();
		await axios.post("http://localhost:8000/user/signup", input);
		alert("User Created Successfully");
	};
	return (
		<div className="container">
			<Form onSubmit={Submit}>
				<Form.Group className="mb-3" controlId="formGroupEmail">
					<Form.Label>FullName</Form.Label>
					<Form.Control
						type="text"
						placeholder="Enter email"
						name="fname"
						value={input.fname}
						onChange={onChangeHandler}
					/>
				</Form.Group>
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
					SignUp
				</Button>
				<br />
				<Link to="/"> Have a Account</Link>
			</Form>
		</div>
	);
}

export default SignUp;
