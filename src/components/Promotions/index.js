import React, {useEffect, useState} from 'react';
import {
    Container,
    Content,
    ViewCard,
    MenuImage,
} from './styles';

export default function Promotions({ navigation }) {
    return (
        <>
            <Container>

                <Content>
                    <ViewCard elevation={8} >
                        <MenuImage source={{ uri: 'https://i.ytimg.com/vi/6oB3e6uII0Y/maxresdefault.jpg' }} resizeMode="stretch" />
                    </ViewCard>
                    <ViewCard elevation={10} >
                        <MenuImage source={{ uri: 'https://s2.glbimg.com/do-yezjlT1ghgZJmbN15fvyTtmc=/0x0:1920x1001/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2019/r/k/Jmrq3JTVWsqoVBuuxU9g/ifood-loop.png' }} resizeMode="stretch" />
                    </ViewCard>
                    <ViewCard elevation={8} >
                        <MenuImage source={{ uri: 'https://i.ytimg.com/vi/u3KdosGkXk8/maxresdefault.jpg' }} resizeMode="stretch" />
                    </ViewCard>
                    <ViewCard elevation={8} >
                        <MenuImage source={{ uri: 'https://scontent.fsjk1-1.fna.fbcdn.net/v/t1.0-9/84632325_3622609644446307_3418098797094371328_n.jpg?_nc_cat=103&_nc_ohc=IMp2ByYppjYAX8LaC8Z&_nc_ht=scontent.fsjk1-1.fna&oh=2afaa9e48a19e964fcb77321c22907aa&oe=5EB9D356' }} resizeMode="stretch" />
                    </ViewCard>
                    <ViewCard elevation={8} >
                        <MenuImage source={{ uri: 'https://geekpublicitario.com.br/wp-content/uploads/2017/01/promocao-classicos-do-dia-mcdonalds-atualizado.jpg' }} resizeMode="stretch" />
                    </ViewCard>
                </Content>


            </Container>
        </>
    )
}