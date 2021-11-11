import { Bands } from "../types/Bands";

const reducer:Bands.BandsReducer = (state, action) => {

    const { type, value } = action;

    switch (type) {

        case "STORE":
            return value;
        case "SORT":
            return [...value];

        default:
            return state;

    }

}

export default reducer;