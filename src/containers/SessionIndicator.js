import { Component } from "react";
import { connect } from "react-redux";
import RectForSession from "../components/Additional/RectForSession";

class SessionIndicator extends Component {
	render() {
		const arr = [1, 2, 3, 4, 5, 6, 7, 8];
		return (
			<div className="col-12 my-4">
				<div className="row d-flex justify-content-center">
					{arr.map((id, index) => {
						return index % 2 !== 0 ? (
							<RectForSession
								key={index}
								timeSeconds={this.props.timeSeconds}
                                sessionTime={this.props.sessionTime}
                                shortTime={this.props.shortTime}
                                longTime={this.props.longTime}
								session={this.props.session}
								index={index}
								colorActive="#F45A0B"
								colorInactive="#90776F"
							/>
						) : (
							<RectForSession
								key={index}
								timeSeconds={this.props.timeSeconds}
                                sessionTime={this.props.sessionTime}
                                shortTime={this.props.shortTime}
                                longTime={this.props.longTime}
								session={this.props.session}
								index={index}
								colorActive="#0BA5F4"
								colorInactive="#6F8890"
							/>
						);
					})}
				</div>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		session: state.session,
        timeSeconds: state.timeSeconds,
        sessionTime: state.sessionTime,
        shortTime: state.shortBreakTime,
        longTime: state.longBreakTime
	};
};

export default connect(mapStateToProps)(SessionIndicator);
