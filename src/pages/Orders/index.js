import React from 'react';
import { StyleSheet } from 'react-native';
import Lottie from 'lottie-react-native';
import { Header, Title, Container, TabMenu, WaitView, WaitImage, WaitTitle, WaitDescription  } from './styles';

import { Tabs, TabHeading, Tab } from 'native-base';

export default function Orders({ navigation }) {
    return (
        <>
            <Header>
                <Title>PEDIDOS</Title>
            </Header>
            <Container>

            <Tabs tabBarActiveStyle="#F00">
        
                <Tab style={styles.tabContainer} heading={<TabHeading style={styles.tabHeading} ><TabMenu>ANTERIORES</TabMenu></TabHeading>}>
                    <WaitView>
                        <Lottie 
                            source={require('../../assets/lotties/sleep.json')} 
                            autoPlay
                            style={{width: '100%', height: 400}}
                            autoSize
                            loop
                            resizeMode="contain"
                        />
                        <WaitTitle>Você ainda não pediu</WaitTitle>
                        <WaitDescription>Selecione Início para conhecer as melhores opções perto de você</WaitDescription>
                    </WaitView>
                </Tab>

                <Tab style={styles.tabContainer} heading={<TabHeading style={styles.tabHeading} ><TabMenu>EM ANDAMENTO</TabMenu></TabHeading>}>
                    <WaitView>
                        <Lottie 
                            source={require('../../assets/lotties/sleep.json')} 
                            autoPlay
                            style={{width: '100%', height: 400}}
                            autoSize
                            loop
                            resizeMode="contain"
                        />
                        <WaitTitle>Você ainda não pediu</WaitTitle>
                        <WaitDescription>Selecione Início para conhecer as melhores opções perto de você</WaitDescription>
                    </WaitView>
                </Tab>

            </Tabs>

            </Container>
        </>
    )
}

const styles = StyleSheet.create({ 
    tabHeading: {
        backgroundColor: "#f8f8f8",
    },
    tabContainer: {
        justifyContent: 'center',
    }
})