import { Component } from "react";
import { connect } from 'react-redux';
import { reset, prev, next } from "../redux/ActionCreators";

class TimePlace extends Component {
    render() {
        const minutes = Math.floor(this.props.timeSeconds / 60)
        const seconds = this.props.timeSeconds % 60
        return (
            <div className="col-12 my-5">
                <div className="row d-flex justify-content-center align-items-center">
                    <div className="col-auto">
                        <button className="btn btn-primary" onClick={this.props.prevSession}>
                            <i className="fa fa-arrow-left" aria-hidden="true"></i>
                        </button>
                    </div>
                    <div className="col-6">
                        <div className="row d-flex justify-content-center">
                            <div className="col-12 text-center">
                                <h1 className="time-indicator">
                                    {minutes < 10 ? `0${minutes}` : minutes}:
                                    {seconds < 10 ? `0${seconds}` : seconds}
                                </h1>
                            </div>
                            <div className="col-auto">
                            
                                {!this.props.play ? (
                                    <button className="btn" onClick={this.props.playHandler}>
                                        <i className="fa fa-play" aria-hidden="true"></i>
                                    </button>
                                ) : (
                                    <button className="btn" onClick={this.props.pauseHandler}>
                                        <i className="fa fa-pause" aria-hidden="true"></i>
                                    </button>
                                )}


                            </div>
                            <div className="col-auto" onClick={this.props.resetHandler}>
                                <button className="btn">
                                    <i className="fa fa-repeat" aria-hidden="true"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="col-auto">
                        <button className="btn btn-primary" onClick={this.props.nextSession}>
                            <i className="fa fa-arrow-right" aria-hidden="true"></i>
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        resetHandler: () => dispatch(reset()),
        prevSession: () => dispatch(prev()),
        nextSession: () => dispatch(next())
    }
}

export default connect(null, mapDispatchToProps)(TimePlace);
