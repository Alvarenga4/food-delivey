import React, { useState, useEffect } from 'react';

import {
    Container,
    Row,
    Col,
    LocationLabel,
    ContentPhoto,
    ProfilePhoto,
} from './styles';

export default function HeaderInfo({ navigation }) {
    return (
        <>
            <Container>
                <Row>
                    <Col>
                        <LocationLabel>Rua Taubaté</LocationLabel>
                    </Col>
                    <Col>
                        <ContentPhoto elevation={8}>
                            <ProfilePhoto 
                                resizeMode="contain"
                                source={{ uri: 'https://scontent.fsjk1-1.fna.fbcdn.net/v/t1.0-9/s960x960/84886631_2451287934976538_2547655427529637888_o.jpg?_nc_cat=104&_nc_ohc=A6AmmoU1KGUAX-XxvqC&_nc_ht=scontent.fsjk1-1.fna&oh=257e63f7de4bedae2aaf19c84bcd2a6d&oe=5EC0D32E' }}
                            />
                        </ContentPhoto>
                    </Col>
                </Row>
            </Container>
        </>
    )
}