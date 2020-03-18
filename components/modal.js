import React, {Component} from 'react';
import {Modal, Text, TouchableHighlight, View, Alert, Button, TextInput} from 'react-native';
import {deleteBook, getAllBooks} from "../actions";
import {connect} from "react-redux";
import styled from 'styled-components/native';

class MyModal extends Component {

    render() {
        return (
            <View>
                <Modal
                    animationType="slide"
                    transparent={false}
                    visible={this.props.visible}
                    onRequestClose={() => {
                        Alert.alert('Modal has been closed.');
                    }}>
                    <InputSpace>Название:</InputSpace>
                    <TextInput type="text"
                               name="title"
                               value={this.props.book.title}
                    />
                    <InputSpace>Author:</InputSpace>
                    <TextInput type="text"
                               name="title"
                               value={this.props.book.author}
                    />
                    <InputSpace>Description:</InputSpace>
                    <TextInput type="text"
                               name="title"
                               value={this.props.book.description}
                    />
                    <InputSpace>Published:</InputSpace>
                    <TextInput type="text"
                               name="title"
                               value={this.props.book.published.toString()}
                    />
                    <Container>
                            <Heading>{this.props.book.title}</Heading>

                            {/*<TouchableHighlight>*/}
                            <Button onPress={() => {
                                this.props.deleteBook(this.props.book.id);
                                this.props.closeDisplay();
                            }}
                                    title='Delete'/>
                            {/*</TouchableHighlight>*/}
                            <CustomButton>
                                <BTN onPress={() => {
                                    this.props.onUpdate(this.props.book.id, this.props.book)
                                }} title='Edit'/>
                            </CustomButton>
                            <CustomButton onPress={() => {
                                this.props.closeDisplay();
                            }} underlayColor={'red'} activeOpacity={0.2}>
                                <View>
                                    <ButtonText>
                                        Close
                                    </ButtonText>
                                </View>
                            </CustomButton>
                            {/*</TouchableHighlight>*/}
                    </Container>

                        {/*<View>*/}
                        {/*    <Text>Автор:</Text>*/}
                        {/*    <TextInput type="text"*/}
                        {/*           name="author"*/}
                        {/*           placeholder='Автор'*/}
                        {/*           value={this.props.author}*/}
                        {/*           onChange={this.handleInputChange}*/}
                        {/*           ref={(input) => {*/}
                        {/*               this.authorInput = input;*/}
                        {/*           }}*/}
                        {/*    />*/}
                        {/*</View>*/}
                        {/*<View>*/}
                        {/*<Text>Описание:</Text>*/}
                        {/*    <TextInput type="text"*/}
                        {/*           name="description"*/}
                        {/*           placeholder='Описание'*/}
                        {/*           value={this.props.description}*/}
                        {/*           onChange={this.handleInputChange}*/}
                        {/*           ref={(input) => {*/}
                        {/*               this.descriptionInput = input;*/}
                        {/*           }}*/}
                        {/*    />*/}
                        {/*</View>*/}
                        {/*<View>*/}
                        {/*    <Text>Дата публикации:</Text>*/}
                        {/*    <TextInput type="number"*/}
                        {/*           name="published"*/}
                        {/*           placeholder='Дата публикации'*/}
                        {/*           value={this.props.published}*/}
                        {/*           onChange={this.handleInputChange}*/}
                        {/*           ref={(input) => {*/}
                        {/*               this.publishedInput = input;*/}
                        {/*           }}*/}
                        {/*    />*/}
                        {/*</View>*/}

                        {/*<Button type="submit" value="Отправить" title='Отправить' />*/}
                </Modal>

                {/*<TouchableHighlight*/}
                {/*    onPress={() => {*/}
                {/*        this.setModalVisible(true);*/}
                {/*    }}>*/}
                {/*    <Text>Show Modal</Text>*/}
                {/*</TouchableHighlight>*/}
            </View>
        );
    }
}
const Heading = styled.Text`
	font-size: 24px;
	color: palevioletred;
	width: 100%;
`;
const Container = styled.View`
      width: 100%;
      padding: 50px 20px;
      background: #afa;
      height: 100%;
      justify-content: flex-start;
`;
const CustomButton = styled.TouchableHighlight`
	background-color: blue;
	border: 5px solid #ffa;
`;
const BTN = styled.Button`
	color: white;
`;
const ButtonText = styled.Text`
    font-size: 26px;
    color: #000;
    text-align: center;
`;
const InputSpace = styled.Text`
    margin-top: 50px;
`;
const mapDispatchToProps = (dispatch) => {
    return {
        deleteBook: (id) => {
            dispatch(deleteBook(id));
        }
    }
};


export default connect(null, mapDispatchToProps)(MyModal)