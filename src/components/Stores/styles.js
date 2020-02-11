import styled from 'styled-components/native';

export const Container = styled.View.attrs({
    paddingHorizontal: 20,
})`
  background-color: #FFF;
  margin-top: 10;
`;

export const ViewInput = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: #f1f1f1;
  border-color: #f1f1f1;
  border-width: 1;
  border-radius: 10;
  margin-bottom: 10;
  height: 50;
`;

export const InputSearch = styled.TextInput`
  color: #b8b8b8;
  font-size: 12;
  font-family: 'Roboto-Thin';
`;

export const Content = styled.ScrollView.attrs({
    horizontal: false,
})`
`

export const Card = styled.View.attrs({
})`
    height: 160;
    background-color: #FFF;
    border-width: 1;
    border-color: #fff;
    border-radius: 10;
    margin-top: 10;
    margin-bottom: 20;
`;

export const Row = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-left: 10;
`;

export const Col = styled.View`
  flex-direction: column;
`;

export const ViewLogo = styled.View`
    background-color: #000;
    width: 100;
    height: 100;
    margin-top: 10;
    border-radius: 10;
`;

export const LogoCompany = styled.Image`
  width: 100;
  height: 100;
  border-radius: 10;
`;

export const CompanyName = styled.Text`
    font-size: 24;
    color: #5557B0;
    font-family: Chewy-Regular;
    margin-top: 10;
`;

export const CompanyLocation = styled.Text`
    font-size: 12;
    color: #b8b8b8;
    font-family: Chewy-Regular;
`;

export const CompanyType = styled.Text`
    font-size: 12;
    color: #f00;
    font-family: Chewy-Regular;
`;

export const CompanyTimeDelivey = styled.Text`
    font-size: 12;
    color: #b8b8b8;
    font-family: Chewy-Regular;
`;

export const CompanyRate = styled.Text`
    font-size: 12;
    color: #b8b8b8;
    font-family: Chewy-Regular;
`;

export const CompanyDeliveryPrice = styled.Text`
    font-size: 12;
    color: #0eea0e;
    font-family: Chewy-Regular;
`;
