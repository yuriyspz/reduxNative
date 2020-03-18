import React from 'react'
import {Button, View, FlatList, Text, TouchableHighlight, TouchableOpacity} from "react-native";
import Modal from 'react-native-modal';
import {getAllBooks} from "../actions";
import {connect} from "react-redux";
import styled from 'styled-components/native';
import MyModal from "./modal";

class SingleBook extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            modalVisible: false,
        }
    }

    componentDidMount() {
    }

    render() {
        return (
            <Container>
                <MyModal
                    onUpdate={this.props.onUpdate}
                    animationType='slide'
                    visible={this.state.modalVisible}
                    book={this.props.book}
                    closeDisplay={() => this.setState({modalVisible: false})}
                />
                <TouchableOpacity onPress={() => {
                    this.setState({modalVisible: !this.state.modalVisible})
                }}>
                    <ListElement>-----------------------------------</ListElement>
                    <ListElement>Название: {this.props.book.title}</ListElement>
                    <ListElement>Автор: {this.props.book.author}</ListElement>
                    <ListElement>Описание: {this.props.book.description}</ListElement>
                    <ListElement>Дата публикации: {this.props.book.published}</ListElement>
                </TouchableOpacity>

                <ListElement>-----------------------------------</ListElement>

            </Container>
        );
    }

}

const Container = styled.View`

	background-color: papayawhip;
	justify-content: center;
	align-items: center;
`;
const ListElement = styled.Text`
	font-size: 24px;
	color: palevioletred;
`;

export default SingleBook;