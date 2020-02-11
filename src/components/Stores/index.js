import React, { useState, useEffect } from 'react';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import {
    Container,
    Label,
    ViewInput,
    InputSearch,
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
    const [search, setSearch] = useState('')
    return (
        <>
          <Container>
            <ViewInput>
              <Icon name="search" size={22} color={'#5557B0'} />
              <InputSearch
                placeholder="Buscar Lojas"
                placeholderTextColor={"#5557B0"}
                keyboardType="email-address"
                autoCapitalize="none"
                value={search}
                onChangeText={setSearch}
              />
            </ViewInput>
            
            <Label>Espresas Destaques</Label>

            <Content>
                <Card elevation={4}>
                    <Row>
                        <Col>
                            <ViewLogo elevation={4}>
                                <LogoCompany resizeMode="stretch" source={{ uri: 'https://i.pinimg.com/originals/e8/cb/48/e8cb48d2ee29eaf58a4f8da10dec3c07.png' }} />
                            </ViewLogo>
                        </Col>
                        <Col>
                            <CompanyName>McDonald's</CompanyName>
                            <CompanyLocation><Icon name="building" size={16} color={'#b8b8b8'} /> Vale Sul - Satélite - <CompanyType>Fast Food</CompanyType></CompanyLocation>
                            <CompanyTimeDelivey><Icon name="clock-o" size={12} color={'#b8b8b8'} /> 35-40 min - <CompanyRate><Icon name="star" size={12} color={'#b8b8b8'} /> 4.3</CompanyRate></CompanyTimeDelivey>
                            <CompanyDeliveryPrice><Icon name="usd" size={12} color={'#b8b8b8'} /> R$ 4,00 </CompanyDeliveryPrice>
                        </Col>
                    </Row>
                </Card>
                <Card elevation={4}>
                    <Row>
                        <Col>
                            <ViewLogo elevation={4}>
                                <LogoCompany resizeMode="stretch" source={{ uri: 'https://1.bp.blogspot.com/-9usc5-JlKuQ/VMqq4hx1vkI/AAAAAAAAABI/DZQQB7qEsDM/s1600/Logo%2BVitoria%2BLanches.png' }} />
                            </ViewLogo>
                        </Col>
                        <Col>
                            <CompanyName>Vitória Lanches</CompanyName>
                            <CompanyLocation><Icon name="building" size={12} color={'#b8b8b8'} /> Av. Imperador - Santana - <CompanyType>Fast Food</CompanyType></CompanyLocation>
                            <CompanyTimeDelivey><Icon name="clock-o" size={12} color={'#b8b8b8'} /> 35-40 min - <CompanyRate><Icon name="star" size={12} color={'#b8b8b8'} /> 4.3</CompanyRate></CompanyTimeDelivey>
                            <CompanyDeliveryPrice><Icon name="usd" size={12} color={'#b8b8b8'} /> R$ 4,00 </CompanyDeliveryPrice>
                        </Col>
                    </Row>
                </Card>
                <Card elevation={4}>
                    <Row>
                        <Col>
                            <ViewLogo elevation={4}>
                                <LogoCompany resizeMode="stretch" source={{ uri: 'https://www.guiadecaxiasdosul.com/uploads/painel/empresa/15669548241771627584.jpg' }} />
                            </ViewLogo>
                        </Col>
                        <Col>
                            <CompanyName>Belverde Lanches</CompanyName>
                            <CompanyLocation><Icon name="building" size={16} color={'#b8b8b8'} /> Tv Mariana - Vila Paiva - <CompanyType>Fast Food</CompanyType></CompanyLocation>
                            <CompanyTimeDelivey><Icon name="clock-o" size={12} color={'#b8b8b8'} /> 35-40 min - <CompanyRate><Icon name="star" size={12} color={'#b8b8b8'} /> 4.3</CompanyRate></CompanyTimeDelivey>
                            <CompanyDeliveryPrice><Icon name="usd" size={12} color={'#b8b8b8'} /> R$ 4,00 </CompanyDeliveryPrice>
                        </Col>
                    </Row>
                </Card>
                <Card elevation={4}>
                    <Row>
                        <Col>
                            <ViewLogo elevation={4}>
                                <LogoCompany resizeMode="stretch" source={{ uri: 'https://i.pinimg.com/originals/a6/43/12/a643124b7abdb2d76421b437a79c2f75.jpg' }} />
                            </ViewLogo>
                        </Col>
                        <Col>
                            <CompanyName>Açaí Lovers</CompanyName>
                            <CompanyLocation><Icon name="building" size={16} color={'#b8b8b8'} /> Vale Sul Shopping - Satélite - <CompanyType>Açaí</CompanyType></CompanyLocation>
                            <CompanyTimeDelivey><Icon name="clock-o" size={12} color={'#b8b8b8'} /> 35-40 min - <CompanyRate><Icon name="star" size={12} color={'#b8b8b8'} /> 4.3</CompanyRate></CompanyTimeDelivey>
                            <CompanyDeliveryPrice><Icon name="usd" size={12} color={'#b8b8b8'} /> Entrega Gratis </CompanyDeliveryPrice>
                        </Col>
                    </Row>
                </Card>
            </Content>
          </Container>
        </>
    )
}