import React, { useState, useEffect } from 'react';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import {
    Container,
    Label,
    Content,
    Card,
    Row,
    Col,
    ViewLogo,
    LogoCompany,
    CompanyName,
    CompanyLocation,
    CompanyType,
    CompanyDeliveryPrice,
    CompanyRate,
    CompanyTimeDelivey,
} from './styles';

export default function Stores({ navigation }) {
    
    return (
        <>
          <Container>
           
            
            <Label>Restaurantes</Label>

            <Content>
                <Card elevation={2}>
                    <Row>
                        <Col>
                            <ViewLogo source={{ uri: 'https://i.pinimg.com/originals/e8/cb/48/e8cb48d2ee29eaf58a4f8da10dec3c07.png' }}  elevation={2}>
                            </ViewLogo>
                        </Col>
                        <Col>
                            <CompanyName>Mc Donald's</CompanyName>
                            <CompanyRate><Icon name="star" size={12} color={'#FFDE00'} /> 4.3 | <CompanyType> Fast Food</CompanyType> | <CompanyLocation>2.2 Km </CompanyLocation></CompanyRate>
                            <CompanyTimeDelivey> 35-40 min - <CompanyDeliveryPrice>R$ 4,00 </CompanyDeliveryPrice></CompanyTimeDelivey>
                        </Col>
                    </Row>
                </Card>
                <Card elevation={2}>
                    <Row>
                        <Col>
                            <ViewLogo source={{ uri: 'https://1.bp.blogspot.com/-9usc5-JlKuQ/VMqq4hx1vkI/AAAAAAAAABI/DZQQB7qEsDM/s1600/Logo%2BVitoria%2BLanches.png' }} elevation={2}>
                            </ViewLogo>
                        </Col>
                        <Col>
                            <CompanyName>Vitória Lanches</CompanyName>
                            <CompanyRate><Icon name="star" size={12} color={'#FFDE00'} /> 4.3 | <CompanyType> Fast Food</CompanyType> | <CompanyLocation>2.2 Km </CompanyLocation></CompanyRate>
                            <CompanyTimeDelivey> 35-40 min - <CompanyDeliveryPrice style={{ color: '#009900' }}>Gratis</CompanyDeliveryPrice></CompanyTimeDelivey>
                        </Col>
                    </Row>
                </Card>
                <Card elevation={2}>
                    <Row>
                        <Col>
                            <ViewLogo source={{ uri: 'https://www.guiadecaxiasdosul.com/uploads/painel/empresa/15669548241771627584.jpg' }} elevation={2}>
                            </ViewLogo>
                        </Col>
                        <Col>
                            <CompanyName>Belverde Lanches</CompanyName>
                            <CompanyRate><Icon name="star" size={12} color={'#FFDE00'} /> 4.3 | <CompanyType> Fast Food</CompanyType> | <CompanyLocation>2.2 Km </CompanyLocation></CompanyRate>
                            <CompanyTimeDelivey> 35-40 min - <CompanyDeliveryPrice>R$ 4,00 </CompanyDeliveryPrice></CompanyTimeDelivey>
                        </Col>
                    </Row>
                </Card>
                <Card elevation={2}>
                    <Row>
                        <Col>
                            <ViewLogo source={{ uri: 'https://i.pinimg.com/originals/a6/43/12/a643124b7abdb2d76421b437a79c2f75.jpg' }} elevation={2}>
                            </ViewLogo>
                        </Col>
                        <Col>
                            <CompanyName>Açaí Lovers</CompanyName>
                            <CompanyRate><Icon name="star" size={12} color={'#FFDE00'} /> 4.3 | <CompanyType> Fast Food</CompanyType> | <CompanyLocation>2.2 Km </CompanyLocation></CompanyRate>
                            <CompanyTimeDelivey> 35-40 min - <CompanyDeliveryPrice style={{ color: '#009900' }}>Gratis </CompanyDeliveryPrice></CompanyTimeDelivey>
                        </Col>
                    </Row>
                </Card>
            </Content>
          </Container>
        </>
    )
}