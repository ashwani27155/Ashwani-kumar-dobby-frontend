import React, { useState } from "react";
import axios from "axios";
import AddImage from "./AddImage";
import { Link } from "react-router-dom";
import SearchImage from "./SearchImage";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
function ShowData() {
	const navigate = useNavigate();
	const [data, setData] = useState([]);
	// console.log(localStorage.getItem("token"));
	useEffect(() => {
		if (!localStorage.getItem("token")) {
			navigate("/");
		}
	});

	const Submit = async () => {
		const fetcheddata = await axios.get("http://localhost:8000/image/getdata");
		setData(fetcheddata.data.datafetched);
	};

	const logout = () => {
		localStorage.getItem("token");
		localStorage.removeItem("token");
	};

	return (
		<div className="container">
			<Link to="/addimage">
				<button>Add+</button>
			</Link>{" "}
			<Link to="/showdata">
				<SearchImage />
			</Link>
			<table className="table table-striped">
				<thead className="thead-light">
					<tr>
						<th scope="col">Image</th>
						<th scope="col"> Title</th>
						<th scope="col">Date</th>
					</tr>
				</thead>
				<tbody>
					{data.map((ele, index) => {
						return (
							<tr key={index}>
								<td>
									<img
										src={`http://localhost:8000/image/data/` + ele.image}
										style={{ maxWidth: "100px" }}
										alt=""
									/>
								</td>
								<td>{ele.title}</td>
								<td>{ele.date}</td>
							</tr>
						);
					})}
				</tbody>
			</table>
			<button onClick={Submit} className="btn btn-success">
				Show AllData
			</button>{" "}
			<Link to="/showdata">
				<button className="btn btn-danger" onClick={logout}>
					Logout
				</button>
			</Link>
		</div>
	);
}

export default ShowData;
