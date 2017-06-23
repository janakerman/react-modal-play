const initialState = {}

export const DISPLAY_MODAL = 'DISPLAY_MODAL'
export const DISMISS_MODAL = 'DISMISS_MODAL'

export default function reducer(state = initialState, action) {
    switch(action.type) {
        case DISPLAY_MODAL:
            return {...state, component: action.component}
        case DISMISS_MODAL:
            return {...state, component: null}
        default:
            return state;
    }
}

export const showModal = (component) => {
    return {
        type: DISPLAY_MODAL,
        component: component
    }
}

export const dismissModal = (component) => {
    return {
        type: DISMISS_MODAL
    }
}