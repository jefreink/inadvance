export const selected = (state) => {
    return state.selected;
};

export const texts = (state) => {
    if (state.selected == "en") {
        return state.items.en;
    } else if (state.selected == "es") {
        return state.items.es;
    } else {
        return state.items.en;
    }
};
