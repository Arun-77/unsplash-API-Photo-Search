import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import NavBar from './NavBar';
import Gallery from './Gallery';
import LoadSpinner from './LoadSpinner';
import axios from 'axios';

const LandingPage = () => {
	const [reS, setRes] = useState([]);
	const [loading, setLoading] = useState(false);
	const [err, setErr] = useState(null);
	const { img } = useSelector((state) => state.search);
	console.log(img);

	// const fetchReq = async () => {
	//   const response = await fetch(
	//     `https://api.unsplash.com/search/photos?page=1&query=nature&client_id=
	//     HU7Q0Pr - w3r2Osiir2QuVX2deQ8mK07brUC_J5w6E7g
	//   `
	//   );

	//   const dataJ = await response.json();
	//   const data = dataJ.results;
	//   console.log(data);
	// };
	const fetchData = async (img) => {
		setLoading(true);
		setErr(null);
		try {
			const response = await axios.get(
				`https://api.unsplash.com/search/photos?page=1&query=${img}&client_id=HU7Q0Pr-w3r2Osiir2QuVX2deQ8mK07brUC_J5w6E7g`
			);

			const result = response.data;
			setRes(result.results);

			setLoading(false);
		} catch (error) {
			setLoading(false);
			setErr(error.message);
		}
	};

	// useEffect(() => {
	//   fetchData(img);
	// }, []);
	console.log(reS);

	return (
		<main style={{ width: '100%', display: 'grid', placeItems: 'center' }}>
			<NavBar fetching={fetchData} />
			{(loading && <LoadSpinner />) ||
				(reS.length === 0 &&
					(err
						? ''
						: '' || <h1 style={{ marginTop: '2rem' }}>Search Anything...</h1>))}
			{err && <h1>{err}</h1>}
			{!err && !loading && reS.length > 0 && (
				<>
					<h1 style={{ marginBottom: '2rem', paddingTop: '1rem' }}>
						Showing results for "{img}"
					</h1>
					<div>
						{reS.map((photo) => (
							<Gallery key={photo.id} photo={photo} txt={img} />
						))}
					</div>
				</>
			)}
		</main>
	);
};

export default LandingPage;
