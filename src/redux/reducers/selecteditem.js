export default function (state = null, action) {
    switch (action.type) { 
        case 'SELECT_ITEM':
            return action.payload;
    }
    return state;
}