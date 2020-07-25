import React, { Component } from 'react';
import { connect } from 'react-redux';

class SessionIndicator extends Component {
    render() {
        const arr = [1,2,3,4,5,6,7,8];
        return (
            <div className="col-12 my-4">
                <div className="row d-flex justify-content-center">
                    {arr.map((id, index) => {
                        return index % 2 !== 0 ? (
                            <div
                                className="col-1"
                                key={index}
                                id={index + 1}
                                style={{
                                    height: 10,
                                    backgroundColor: `${
                                        this.props.session >= index + 1 ? "#F45A0B" : "#90776F" 
                                        }`,
                                }}
                            ></div>
                        ) : (
                            <div
                                className="col-1"
                                key={index}
                                id={index + 1}
                                style={{
                                    height: 10,
                                    backgroundColor: `${
                                        this.props.session >= index + 1 ? "#0BA5F4" : "#6F8890" 
                                        }`,
                                }}
                            ></div>
                        );
                    })}
                </div>
            </div>
        );;
    }
}

const mapStateToProps = state => {
    return {
        session: state.session
    }
}

export default connect(mapStateToProps)(SessionIndicator);
