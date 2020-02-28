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
                    <ViewCard style={{ backgroundColor: '#f8f8f8' }} elevation={10} >
                        <MenuImage source={{ uri: 'https://www.gruposiberiann.com.br/img/slide/slide2_item1.png' }} resizeMode="contain" />
                        <MenuLabel>Pizzas</MenuLabel>
                    </ViewCard>
                    <ViewCard style={{ backgroundColor: '#ffcc00' }} elevation={8} >
                        <MenuImage source={{ uri: 'https://quinteiroslanches.com.br/wp-content/uploads/2016/06/lanche.png' }} resizeMode="contain" />
                        <MenuLabel>Lanches</MenuLabel>
                    </ViewCard>
                    <ViewCard style={{ backgroundColor: '#ccffcc' }} elevation={8} >
                        <MenuImage source={{ uri: 'https://pngimage.net/wp-content/uploads/2018/05/bebida-png-6.png' }} resizeMode="contain" />
                    </ViewCard>
                    <MenuLabel>Bebidas</MenuLabel>
                </Content>


            </Container>
        </>
    )
}