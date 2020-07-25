import * as ActionTypes from './ActionTypes';

export const play = () => {
    return {
        type: ActionTypes.PLAY
    }
}

export const reset = () => {
    return {
        type: ActionTypes.RESET
    }
}

export const prev = () => {
    return {
        type: ActionTypes.PREV
    }
}

export const next = () => {
    return {
        type: ActionTypes.NEXT
    }
}

export const upHandlerSession = () => {
    return {
        type: ActionTypes.UP_SESSION
    }
}

export const downHandlerSession = () => {
    return {
        type: ActionTypes.DOWN_SESSION
    }
}

export const upHandlerShortBreak = () => {
    return {
        type: ActionTypes.UP_SHORT_BREAK
    }
}

export const downHandlerShortBreak = () => {
    return {
        type: ActionTypes.DOWN_SHORT_BREAK
    }
}

export const upHandlerLongBreak = () => {
    return {
        type: ActionTypes.UP_LONG_BREAK
    }
}

export const downHandlerLongBreak = () => {
    return {
        type: ActionTypes.DOWN_LONG_BREAK
    }
}