import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
const SearchImage = () => {
	const [input, setInput] = useState("");
	const [imagedata, setImageData] = useState([]); //store the user input
	const [myData, setMyData] = useState(""); //this state is take the path image name
	const [mounted, setMounted] = useState(false);
	const Search = async () => {
		setImageData(input);
	};
	async function getData() {
		const data = await axios
			.get(`http://localhost:8000/image/search/${imagedata}`)
			.then((resp) => {
				setMyData(resp.data.data.image);
			})
			.catch((err) => {
				console.log(err);

				alert("There is no matching Data (Click Ok to Search) ");
			});
	}
	useEffect(() => {
		if (mounted) {
			getData();
		} else {
			setMounted(true);
		}
	}, [imagedata]);
	return (
		<>
			<input
				type="text"
				placeholder="Search image by title"
				value={input}
				onChange={(e) => setInput(e.target.value)}
			/>{" "}
			<button onClick={Search} className="btn btn-primary">
				Search
			</button>
			<br />
			<img
				src={`http://localhost:8000/image/data/${myData}`}
				style={{ maxWidth: "100px" }}
				alt=""
			/>
		</>
	);
};
export default SearchImage;
