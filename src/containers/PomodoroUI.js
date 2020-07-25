import React, { Component, createRef } from "react";
import SessionIndicator from "../components/SessionIndicator";
import TimePlace from "../components/TimePlace";
import ControlTimes from "../components/ControlTimes";
import { connect } from 'react-redux';
import { play, next } from "../redux/ActionCreators";
import ModalNotif from "../components/ModalNotif";
import Ring from "../components/Ring";

class PomodoroUI extends Component {
    state = {
        play: false,
        isOpenModal: false
    }

    ref = createRef();

    playAudio = () => {
        this.ref.current.play();
    }

    playHandler = () => {
        this.interval = setInterval(() => {
            if (this.props.timeSeconds === 1) {
                clearInterval(this.interval);
                this.playAudio();
                this.setState(state => ({
                    isOpenModal: !state.isOpenModal,
                    play: !state.play
                }));
            }
            if (this.props.timeSeconds <= 0) {
                this.props.next();
            }
            this.props.play();
        }, 1000);

        this.setState(state => ({
            play: !state.play
        }))
    }

    pauseHandler = () => {
        clearInterval(this.interval)

        this.setState(state => ({
            play: !state.play
        }))
    }

    modalDismiss = () => {
        this.setState(state => ({
            isOpenModal: !state.isOpenModal
        }))
    }

    next = () => {
        this.props.next();
        this.modalDismiss();
        this.playHandler();
    }

    render() {
        return (
            (
                <div className="container">
                    <ModalNotif
                        isOpen={this.state.isOpenModal}
                        next={this.next}
                        toggle={this.modalDismiss}
                    />
                    <Ring ref={this.ref} />
                    <h1 className="my-5 text-center">POMODORO TIMER</h1>
                    <div className="row">
                        <SessionIndicator />
                        <TimePlace
                            play={this.state.play}
                            playHandler={this.playHandler}
                            pauseHandler={this.pauseHandler}
                            timeSeconds={this.props.timeSeconds}
                        />
                        <ControlTimes />
                    </div>
                </div>
            )
        )
    }
}

const mapStateToProps = (state) => {
    return {
        timeSeconds: state.timeSeconds
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        play: () => dispatch(play()),
        next: () => dispatch(next())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PomodoroUI);
