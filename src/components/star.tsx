import { useState, useEffect } from 'react';

function Star() {
	const [x, setX] = useState(0);
	const [y, setY] = useState(0);

	useEffect(() => {
		function handleResize() {
			setX(Math.floor(Math.random() * window.innerWidth));
			setY(Math.floor(Math.random() * window.innerHeight));
		}

		window.addEventListener('resize', handleResize);
		handleResize();
	}, []);

	return (
		<div className={`bg-white rounded-full w-1 h-1 fixed -z-10`} style={{
			left: x,
			top: y
		}}/>
	);
}

export default Star;