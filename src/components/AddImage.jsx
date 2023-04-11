import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./SignUp";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
const AddImage = () => {
	const navigate = useNavigate();
	const [input, setInput] = useState({ title: "", date: "", image: "" });

	useEffect(() => {
		if (!localStorage.getItem("token")) {
			navigate("/");
		}
	});
	const onChangeHandler = (e) => {
		let value = e.target.value;
		const name = e.target.name;
		if (name == "image") {
			value = e.target.files[0];
		}
		setInput({ ...input, [name]: value });
	};
	const Submit = async (e) => {
		e.preventDefault();
		const formdata = new FormData();
		formdata.append("title", input.title);
		formdata.append("date", input.date);
		formdata.append("image", input.image);
		const postData = await axios.post(
			"http://localhost:8000/image/createimg",
			formdata
		);
		navigate("/showdata");
		alert("Data added successfully");
	};
	return (
		<div className="container">
			<Form onSubmit={Submit}>
				<Form.Group className="mb-3" controlId="formGroupEmail">
					<Form.Label>Title</Form.Label>
					<Form.Control
						type="text"
						placeholder="Enter title"
						name="title"
						value={input.title}
						onChange={onChangeHandler}
					/>
				</Form.Group>
				<Form.Group className="mb-3" controlId="formGroupEmail">
					<Form.Label>Choose Date </Form.Label>
					<Form.Control
						type="date"
						placeholder="Enter date"
						name="date"
						value={input.date}
						onChange={onChangeHandler}
					/>
				</Form.Group>
				<Form.Group className="mb-3" controlId="formGroupPassword">
					<Form.Label>Image</Form.Label>
					<Form.Control type="file" name="image" onChange={onChangeHandler} />
				</Form.Group>
				<Button variant="primary" type="submit">
					Add Items
				</Button>
			</Form>
		</div>
	);
};
export default AddImage;
