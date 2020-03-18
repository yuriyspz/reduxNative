import React from 'react'
import {Button, View, FlatList, Text, TouchableHighlight} from "react-native";
import Modal from 'react-native-modal';
import {getAllBooks, updateBook} from "../actions";
import {connect} from "react-redux";
import styled from 'styled-components/native';
import SingleBook from "./singleBook";

class BookList extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.getBooks()
    }

    render() {

        return (
            <Container>
                <FlatList
                    data={this.props.books}
                    renderItem={({item}) =>
                        <SingleBook book={item} onUpdate={this.props.updateBook}/>
                    }
                    keyExtractor={item => item.id.toString()}
                />
            </Container>
        );
    }

}

const Container = styled.View`
	flex: 1;
	background-color: papayawhip;
	justify-content: center;
	align-items: center;
`;
const mapStateToProps = (state) => {
    return {
        books: state.book
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        getBooks: () => {
            dispatch(getAllBooks());
        },
        updateBook: (id, book) => {
            dispatch(updateBook(id, book))
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(BookList)