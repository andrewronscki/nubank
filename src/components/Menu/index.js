import React from 'react';
import QRCode from 'react-native-qrcode';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { Container, Code, Nav, NavItem, NavText, SignOutButtom, SignOutButtomText } from './styles'

export default function Menu({ translateY }) {
    return(
        <Container style={{
                opacity: translateY.interpolate({
                inputRange: [0, 150],
                outputRange: [0, 1],
                }),
            }}
          >
            <Code>
                <QRCode 
                    value="https://www.linkedin.com/in/andr%C3%A9-wronscki-ricardo-13694bb7/"
                    size={80}
                    fgColor="#fff"
                    bgColor="#8b10ae"                    
                />
            </Code>
            <Nav>
                <NavItem>
                    <Icon name="help-outline" size={20} color="#fff" />
                    <NavText>Me ajuda</NavText>
                </NavItem>
                <NavItem>
                    <Icon name="person-outline" size={20} color="#fff" />
                    <NavText>Perfil</NavText>
                </NavItem>
                <NavItem>
                    <Icon name="credit-card" size={20} color="#fff" />
                    <NavText>Configurar cartão</NavText>
                </NavItem>
                <NavItem>
                    <Icon name="smartphone" size={20} color="#fff" />
                    <NavText>Configuração do app</NavText>
                </NavItem>
            </Nav>

            <SignOutButtom onPress={() => {}}>
                <SignOutButtomText>SAIR DO APP</SignOutButtomText>
            </SignOutButtom>
        </Container>
    );
}