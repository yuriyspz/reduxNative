import axios from 'axios'
const url= `https://spring-boot-mysql-server-part0.herokuapp.com/api/books`;


export const getAllBooksSuccess = (books) => {
    return {
        type: 'GET_ALL',
        payload: books
    }
};

export const createBookSuccess = (data) => {
    return {
        type: 'CREATE_BOOK',
        payload: {
            id:data.id,
            title:data.title,
            author:data.author,
            description:data.description,
            published:data.published
        }
    }
};

export const deleteBookSuccess = (id) =>{
    return{
        type:'DELETE_BOOK',
        payload:id
    }
};

export const updateBookSuccess = (id, data) =>{
    return{
        type:'UPDATE_BOOK',
        payload: {
            title:data.title,
            author:data.author,
            description:data.description,
            published:data.published
        },
        id: id
    }
};

export const deleteBook = (id) => {
    return (dispatch) => {
        return axios.delete(`${url}/${id}`)
            .then(response => {
                dispatch(deleteBookSuccess(id));
            })
    }
};

export const getAllBooks = () => {
    return (dispatch) => {
        return axios.get(url)
            .then((response) => {
                dispatch(getAllBooksSuccess(response.data))
            })
    }
};

export const createBook = (book) => {
    return (dispatch) => {
        return axios.post(`${url}/create`, book)
            .then((response) => {
                dispatch(createBookSuccess(response.data))
            })
    }
};

export const updateBook = (id, book) =>{
    return(dispatch) =>{
        return axios.put(`${url}/${id}`, book)
            .then((res)=> {
                dispatch(updateBookSuccess(id, res.data))
            })
    }
};