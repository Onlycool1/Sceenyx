import {Container, Header, Content, Footer, Title} from 'native-base';
import React, {Component} from 'react-native';
​
export default class LayoutExample extends Component {
    render() {
        return (
            <Container>
                <Header>
                    <Title>Header</Title>
                </Header>

                <Content>
                    // Your main content goes here
                </Content>

                <Footer>
                    <Title>Footer</Title>
                </Footer>
            </Container>
        );
    }
}