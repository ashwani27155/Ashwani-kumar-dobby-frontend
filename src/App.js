import "./App.css";
import AddImage from "./components/AddImage";
import ShowData from "./components/ShowData";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import { BrowserRouter, Route, Routes } from "react-router-dom";
function App() {
	return (
		<BrowserRouter>
			{/* <AddImage /> */}
			<Routes>
				<Route path="/" element={<SignIn />} />
				<Route path="/signup" element={<SignUp />} />
				<Route path="/showdata" element={<ShowData />} />
				<Route path="/addimage" element={<AddImage />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
