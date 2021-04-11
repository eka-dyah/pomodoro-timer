const RectForSession = ({
	timeSeconds,
	sessionTime,
	shortTime,
	longTime,
	session,
	index,
	colorActive,
	colorInactive,
}) => {
	let indicatorToFull = 0;
	if (session === index) {
		if (session % 2 === 0) {
			indicatorToFull = `${
				timeSeconds * 100 / (sessionTime * 60)
			}%`;
		} else if (session % 2 !== 0 && session !== 7) {
			indicatorToFull = `${
				timeSeconds * 100 / (shortTime * 60)
			}%`;
		} else {
			indicatorToFull = `${
				timeSeconds * 100 / (longTime * 60)
			}%`;
		}
	}
	return (
		<div
			className="col-1"
			id={index}
			style={{
				position: "relative",
				height: 10,
				backgroundColor: colorInactive,
			}}
		>
			<div
				id={index}
				style={{
					position: "absolute",
					top: 0,
					left: 0,
					height: 10,
					right: session >= index ? indicatorToFull : "100%",
					backgroundColor: colorActive,
				}}
			></div>
		</div>
	);
};

export default RectForSession;
