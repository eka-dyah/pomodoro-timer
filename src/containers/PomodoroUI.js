import { Component, createRef } from "react";
import SessionIndicator from "./SessionIndicator";
import TimePlace from "../components/TimePlace";
import ControlTimes from "./ControlTimes";
import { connect } from "react-redux";
import { play, next } from "../redux/ActionCreators";
import ModalNotif from "../components/ModalNotif";
import Ring from "../components/Ring";
import FooterArea from "../components/FooterArea";
import LayoutUI from "../components/LayoutUI";

class PomodoroUI extends Component {
	state = {
		play: false,
		isOpenModal: false,
		checkedTheme: false,
	};

	ref = createRef();
	refToggle = createRef();


	componentDidMount() {
		const checkedTheme = localStorage.getItem("checkedTheme") === "true";
		if (checkedTheme !== null || checkedTheme !== undefined) {
			this.setState({ checkedTheme });
		}
	}

	componentDidUpdate(prevProps, prevState) {
		if (prevState.checkedTheme !== this.state.checkedTheme) {
			localStorage.setItem("checkedTheme", this.state.checkedTheme);
		}	
	}

	onClickTheme = () => {
		this.setState({
			checkedTheme: this.refToggle.current.checked,
		});
	};

	playAudio = () => {
		this.ref.current.play();
	};

	stopAudio = () => {
		this.ref.current.pause();
		this.ref.current.currentTime = 0;
	};

	playHandler = () => {
		this.interval = setInterval(() => {
			if (this.props.timeSeconds === 1) {
				clearInterval(this.interval);
				this.playAudio();
				this.setState((state) => ({
					isOpenModal: !state.isOpenModal,
					play: !state.play,
				}));
			}
			if (this.props.timeSeconds === 0) {
				this.props.next();
			}
			this.props.play();
		}, 1000);

		this.setState((state) => ({
			play: !state.play,
		}));
	};

	pauseHandler = () => {
		clearInterval(this.interval);
		this.stopAudio();

		this.setState((state) => ({
			play: !state.play,
		}));
	};

	modalDismiss = () => {
		this.setState((state) => ({
			isOpenModal: !state.isOpenModal,
		}));
		this.stopAudio();
	};

	next = () => {
		this.props.next();
		this.modalDismiss();
		this.playHandler();
		this.stopAudio();
	};

	render() {
		const timerSeconds = this.props.timeSeconds;
		const timerMinute =
			Math.floor(timerSeconds / 60) >= 10
				? Math.floor(timerSeconds / 60)
				: `0${Math.floor(timerSeconds / 60)}`;
		const timerSecond =
			timerSeconds % 60 >= 10
				? timerSeconds % 60
				: `0${timerSeconds % 60}`;
		if (this.state.play) {
			document.title = `(${timerMinute}:${timerSecond}) Pomodoro Timer`;
		} else {
			document.title = "Pomodoro Timer";
		}
		return (
			<>
				<LayoutUI
					title="POMODORO TIMER"
					checked={this.state.checkedTheme}
					innerRef={this.refToggle}
					onClickTheme={this.onClickTheme}
				>
					<ModalNotif
						isOpen={this.state.isOpenModal}
						next={this.next}
						toggle={this.modalDismiss}
						checkedTheme={this.state.checkedTheme}
					/>
					<Ring ref={this.ref} />
					<SessionIndicator />
					<TimePlace
						play={this.state.play}
						playHandler={this.playHandler}
						pauseHandler={this.pauseHandler}
						timeSeconds={this.props.timeSeconds}
					/>
					<ControlTimes />
				</LayoutUI>
				<FooterArea />
			</>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		timeSeconds: state.timeSeconds,
	};
};
const mapDispatchToProps = (dispatch) => {
	return {
		play: () => dispatch(play()),
		next: () => dispatch(next()),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(PomodoroUI);
