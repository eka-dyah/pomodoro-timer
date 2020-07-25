import * as ActionTypes from "./ActionTypes";

const initialState = {
    session: 0,
    start: false,
    break: false,
    timeSeconds: 25 * 60,
    sessionTime: 25,
    shortBreakTime: 5,
    longBreakTime: 15,
};

export const Reducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionTypes.PLAY:
            return {
                ...state,
                timeSeconds: state.timeSeconds - 1,
                session: state.session === 0 ? state.session + 1 : state.session
            };
        case ActionTypes.RESET:
            return {
                ...state,
                session: 0,
                start: false,
                break: false,
                timeSeconds: state.sessionTime * 60,
            };
        case ActionTypes.PREV:
            return {
                ...state,
                session: state.session - 1 <= 0 ? 0 : state.session - 1,
                timeSeconds: state.session - 1 >= 0 ? (state.session - 1) === 0 ? state.sessionTime * 60 :
                    (state.session - 1) % 2 === 1 ? state.sessionTime * 60 : state.shortBreakTime * 60 : state.sessionTime * 60
            };
        case ActionTypes.NEXT:
            return {
                ...state,
                session: state.session + 1 > 8 ? 0 : state.session + 1,
                timeSeconds: state.session + 1 <= 8 ? (state.session + 1) === 8 ? state.longBreakTime * 60 :
                    (state.session + 1) % 2 === 1 ? state.sessionTime * 60 : state.shortBreakTime * 60 : state.sessionTime * 60
            };
        case ActionTypes.UP_SESSION:
            return {
                ...state,
                sessionTime: state.sessionTime + 1 > 120 ? 120 : state.sessionTime + 1,
                timeSeconds: state.session === 0 || state.session % 2 === 1 ? state.sessionTime + 1 > 120 ? 120 * 60 : 
                    (state.sessionTime + 1) * 60 : state.timeSeconds
            };
        case ActionTypes.DOWN_SESSION:
            return {
                ...state,
                sessionTime: state.sessionTime - 1 <= 0 ? 1 : state.sessionTime - 1,
                timeSeconds: state.session === 0 || state.session % 2 === 1 ? state.sessionTime - 1 <= 0 ? 1 * 60 : 
                    (state.sessionTime - 1) * 60 : state.timeSeconds
            };
        case ActionTypes.UP_SHORT_BREAK:
            return {
                ...state,
                shortBreakTime: state.shortBreakTime + 1 > 120 ? 120 : state.shortBreakTime + 1,
                timeSeconds: state.session !== 7 && state.session % 2 === 0 ? state.shortBreakTime + 1 > 120 ? 120 * 60 :
                    (state.shortBreakTime + 1) * 60 : state.timeSeconds
            };
        case ActionTypes.DOWN_SHORT_BREAK:
            return {
                ...state,
                shortBreakTime: state.shortBreakTime - 1 <= 0 ? 1 : state.shortBreakTime - 1,
                timeSeconds: state.session !== 7 && state.session % 2 === 0 ? state.shortBreakTime - 1 <= 0 ? 1 * 60 : 
                    (state.shortBreakTime - 1) * 60: state.timeSeconds
            };
        case ActionTypes.UP_LONG_BREAK:
            return {
                ...state,
                longBreakTime: state.longBreakTime + 1 > 120 ? 120 : state.longBreakTime + 1,
                timeSeconds: state.session === 8 ? state.longBreakTime + 1 > 120 ? 120 * 60 : (state.longBreakTime + 1) * 60: 
                    state.timeSeconds
            };
        case ActionTypes.DOWN_LONG_BREAK:
            return {
                ...state,
                longBreakTime: state.longBreakTime - 1 <= 0 ? 1 : state.longBreakTime - 1,
                timeSeconds: state.session === 8 ? state.longBreakTime - 1 <= 0 ? 1 * 60 : 
                    (state.longBreakTime - 1) * 60 : state.timeSeconds
            };
        default:
            return state;
    }
};
