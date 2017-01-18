export const socketMiddleware = socket => store => next => action => {
    if (action.meta && action.meta.remote) {
        socket.emit('action',action)
    }
    return next(action)
}


/*
* 记录所有被发起的action 以及产生的新的state
* */

export const logger = store => next => action => {
    console.group(action.type)
    console.info('dispatching',action)
    let result = next(action)
    const nextState = store.getState()
    console.log('next state',nextState.toJS? nextState.toJS() : nextState)
    console.groupEnd(action.type)
    return result
}