import React, {useEffect, useState} from 'react';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import {
    Container,
    Content,
    Label,
    ViewCard,
    MenuImage,
    MenuLabel,
} from './styles';

export default function ProductSearch({ navigation }) {
    const [search, setSearch] = useState('')
    return (
        <>
            <Container>

                <Label>Categorias</Label>
                <Content>
                    <ViewCard elevation={10} >
                        <MenuImage source={{ uri: 'https://www.programaconsumer.com.br/blog/wp-content/uploads/2018/11/pizzaria-app.png' }} resizeMode="contain" />
                        <MenuLabel>Pizzas</MenuLabel>
                    </ViewCard>
                    <ViewCard elevation={8} >
                        <MenuImage source={{ uri: 'https://campinascafe.com.br/wp-content/uploads/2019/11/beef.jpg' }} resizeMode="contain" />
                        <MenuLabel>Lanches</MenuLabel>
                    </ViewCard>
                    <ViewCard elevation={8} >
                        <MenuImage source={{ uri: 'https://abrilexame.files.wordpress.com/2019/02/coca-cola.gif' }} resizeMode="contain" />
                    </ViewCard>
                    <MenuLabel>Bebidas</MenuLabel>
                </Content>


            </Container>
        </>
    )
}