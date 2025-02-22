export default function book(state = [], action) {
    if (action.type === "GET_ALL") {
        return action.payload
    } else if (action.type === "CREATE_BOOK") {
        return [...state,
            action.payload]
    } else if (action.type === 'DELETE_BOOK') {
        return state.filter(book => book.id !== action.payload);
    } else if(action.type === 'UPDATE_BOOK'){
        return state.map((book) => book.id === action.id ? { ...book,
            title:action.data.title,
            author:action.data.author,
            description:action.data.description,
            published:action.data.published,
            edited: !book.edited } : book)
    }
    return state;
}