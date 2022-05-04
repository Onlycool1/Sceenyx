import {Container, Header, Title, Button, Icon} from 'native-base';
import React, {Component} from 'react-native';
​
export default class HeaderExample extends Component {
    render() {
        return (
            <Container>
                <Header>
                    <Button transparent>
                        <Icon name="ios-arrow-left" />
                    </Button>

                    <Title>Header</Title>

                    <Button transparent>
                        <Icon name="navicon"/>
                    </Button>
                </Header>
            </Container>
        );
    }
}