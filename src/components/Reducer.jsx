const initialState = {
    count: 0,
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "INCREMENT":
            return {
                count: state.count + 1
            };
        case "DECREMENT":
            if (state.count > 0) {
                return {
                    count: state.count - 1
                };
            } else {
                return state;
            }
        default:
            return state;
    }
};

export default reducer;
