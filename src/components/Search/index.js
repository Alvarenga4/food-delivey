import React, {useEffect, useState} from 'react';
import {
    Container,
    Label,
    Row,
    Col,
    ViewCard,
    MenuImage,
    ViewMenuLabel,
    MenuLabel,
} from './styles';

import InputSearch from '../InputSearch';

export default function Search({ navigation }) {
    return (
        <>
            <InputSearch />
            <Container>

                <Label>Categorias</Label>

                <Row>
                    <Col>
                        <ViewCard style={{ backgroundColor: '#f8f8f8' }} elevation={10} >
                            <MenuImage source={{ uri: 'https://www.gruposiberiann.com.br/img/slide/slide2_item1.png' }} resizeMode="contain" />
                        </ViewCard>
                    </Col>

                    <Col>
                        <ViewCard style={{ backgroundColor: '#ffcc00' }} elevation={8} >
                            <MenuImage source={{ uri: 'https://quinteiroslanches.com.br/wp-content/uploads/2016/06/lanche.png' }} resizeMode="contain" />
                        </ViewCard>
                    </Col>
                </Row>

                <Row>
                    <Col>
                        <ViewCard style={{ backgroundColor: '#ccffcc' }} elevation={8} >
                            <MenuImage source={{ uri: 'https://pngimage.net/wp-content/uploads/2018/05/bebida-png-6.png' }} resizeMode="contain" />
                        </ViewCard>
                    </Col>
                </Row>

            </Container>
        </>
    )
}