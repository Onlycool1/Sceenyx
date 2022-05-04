import {Container, Footer, Title, Button, Icon} from 'native-base';
import React, {Component} from 'react-native';
​
export default class FooterExample extends Component {
    render() {
        return (
            <Container>
                <Footer>
                    <Button transparent>
                        <Icon name="ios-telephone" />
                    </Button>

                    <Title>Footer</Title>

                    <Button transparent >
                        <Icon name="chatbox" />
                    </Button>
                </Footer>
            </Container>
        );
    }
}