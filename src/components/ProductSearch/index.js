import React, {useEffect, useState} from 'react';

import {
    Container,
    ViewCard,
    MenuImage,
} from './styles';

export default function ProductSearch({ navigation }) {
    return (
        <>
            <Container>
                <ViewCard elevation={10} >
                    <MenuImage source={{ uri: 'https://www.programaconsumer.com.br/blog/wp-content/uploads/2018/11/pizzaria-app.png' }} resizeMode="stretch" />
                </ViewCard>
                <ViewCard elevation={8} >
                    <MenuImage source={{ uri: 'https://campinascafe.com.br/wp-content/uploads/2019/11/beef.jpg' }} resizeMode="stretch" />
                </ViewCard>
                <ViewCard elevation={8} >
                    <MenuImage source={{ uri: 'https://abrilexame.files.wordpress.com/2019/02/coca-cola.gif' }} resizeMode="stretch" />
                </ViewCard>
            </Container>
        </>
    )
}