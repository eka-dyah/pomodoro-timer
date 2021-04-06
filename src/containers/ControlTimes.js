import { Component } from "react";
import ControlTime from "../components/ControlTime";
import { connect } from "react-redux";
import {
	upHandlerSession,
	downHandlerSession,
	upHandlerShortBreak,
	downHandlerShortBreak,
	upHandlerLongBreak,
	downHandlerLongBreak,
} from "../redux/ActionCreators";
import LayoutControlTime from "../components/LayoutControlTime";

class ControlTimes extends Component {
	render() {
		return (
			<LayoutControlTime>
				<ControlTime
					nameOfControl="Session (mins)"
					value={this.props.sessionTime}
					upHandler={this.props.upHandlerSession}
					downHandler={this.props.downHandlerSession}
				/>
				<ControlTime
					nameOfControl="Short Break (mins)"
					value={this.props.shortBreakTime}
					upHandler={this.props.upHandlerShortBreak}
					downHandler={this.props.downHandlerShortBreak}
				/>
				<ControlTime
					nameOfControl="Long Break (mins)"
					value={this.props.longBreakTime}
					upHandler={this.props.upHandlerLongBreak}
					downHandler={this.props.downHandlerLongBreak}
				/>
			</LayoutControlTime>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		sessionTime: state.sessionTime,
		shortBreakTime: state.shortBreakTime,
		longBreakTime: state.longBreakTime,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		upHandlerSession: () => dispatch(upHandlerSession()),
		downHandlerSession: () => dispatch(downHandlerSession()),
		upHandlerShortBreak: () => dispatch(upHandlerShortBreak()),
		downHandlerShortBreak: () => dispatch(downHandlerShortBreak()),
		upHandlerLongBreak: () => dispatch(upHandlerLongBreak()),
		downHandlerLongBreak: () => dispatch(downHandlerLongBreak()),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(ControlTimes);
