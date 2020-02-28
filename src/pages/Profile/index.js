import React from 'react';
import {
    Container,
    Content,
    ViewGrid,
    Row,
    Col,
    ViewImage,
    Image,
    ViewIndicationLabel,
    IndicationLabel,
    DescriptionIndication,
    CardImage,
    ProfileImage,
    ViewLabels,
    NameLabel,
    EditButton,
    EditLabel,
    RecommendationView,
    SesionsCards,
    SessionTitle,
    SessionDescription,
} from './styles';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

export default function Profile({ navigation }) {
    return (
        <>
            <ViewGrid>

                <Row>
                    <Col>
                    <CardImage elevation={10}>
                        <ProfileImage 
                            resizeMode="contain"
                            source={{ uri: 'https://scontent.fsjk1-1.fna.fbcdn.net/v/t1.0-9/s960x960/84886631_2451287934976538_2547655427529637888_o.jpg?_nc_cat=104&_nc_ohc=A6AmmoU1KGUAX-XxvqC&_nc_ht=scontent.fsjk1-1.fna&oh=257e63f7de4bedae2aaf19c84bcd2a6d&oe=5EC0D32E' }}
                        />
                    </CardImage>
                    </Col>
                    <Col>
                        <ViewLabels>
                            <NameLabel>Francisco C. Alvarenga</NameLabel>
                        </ViewLabels>
                        <EditButton>
                            <EditLabel> Editar </EditLabel>
                        </EditButton>
                    </Col>
                </Row>
            </ViewGrid>
            <Container>

                <RecommendationView elevation={4}>
                    <ViewIndicationLabel>
                        <IndicationLabel>
                            Ganhe R$ 30 indicando o Food Delivey
                        </IndicationLabel>
                        <DescriptionIndication>Convide seus amigos</DescriptionIndication>
                    </ViewIndicationLabel>
                </RecommendationView>

                
                <SesionsCards>
                    <SessionTitle><Icon name="bell-o" size={22} color={'#000'} />   Notificações</SessionTitle>
                    <SessionDescription>Minha central de notificações</SessionDescription>
                </SesionsCards>

                <SesionsCards>
                    <SessionTitle><Icon name="minus-square-o" size={22} color={'#000'} />    Carteira</SessionTitle>
                    <SessionDescription>Minha carteira</SessionDescription>
                </SesionsCards>

                <SesionsCards>
                    <SessionTitle><Icon name="credit-card" size={22} color={'#000'} />   Pagamentos</SessionTitle>
                    <SessionDescription>Minhas formas de pagamento</SessionDescription>
                </SesionsCards>

                <SesionsCards>
                    <SessionTitle><Icon name="heart-o" size={22} color={'#000'} />   Favoritos</SessionTitle>
                    <SessionDescription>Meus locais favoritos</SessionDescription>
                </SesionsCards>

                <SesionsCards>
                    <SessionTitle><Icon name="map-marker" size={22} color={'#000'} />     Endereços</SessionTitle>
                    <SessionDescription>Meus endereços de entrega</SessionDescription>
                </SesionsCards>
                
            </Container>
        </>
    )
}