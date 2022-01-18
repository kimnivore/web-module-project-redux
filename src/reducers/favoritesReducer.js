const initialState = {
    favorites: [{title: "Kim's movie", id: 1}, {title: "Keane's movie", id: 2}],
    displayFavorites: true
};

const reducer = (state = initialState, action) => {
    switch(action.type) {
        // case:
        //     return {

        //     }

        default:
            return state;
    }
};


export default reducer;