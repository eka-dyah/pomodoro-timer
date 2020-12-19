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

class ControlTimes extends Component {
    render() {
        return (
            <div className="col-12 mb-4 mt-md-3">
                <div className="row d-flex justify-content-center">
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
                </div>
            </div>
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
