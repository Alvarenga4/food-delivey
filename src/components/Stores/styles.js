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
  margin-top: 10;
  height: 50;
`;

export const InputSearch = styled.TextInput`
  color: #b8b8b8;
  font-size: 12;
  margin-left: 20;
  font-family: 'Roboto-Thin';
`;

export const Label = styled.Text`
  font-size: 18;
  color: #5557B0;
  font-family: Roboto-Light;
`;

export const Content = styled.ScrollView.attrs({
    horizontal: false,
})`
`

export const Card = styled.View.attrs({
})`
    width: 100%;
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
  margin-right: 10;
  margin-top: 10;
  margin-bottom: 10;
`;

export const Col = styled.View`
  flex-direction: column;
`;

export const ViewLogo = styled.View`
    background-color: #000;
    width: 80;
    height: 80;
    border-radius: 10;
`;

export const LogoCompany = styled.Image`
  width: 80;
  height: 80;
  border-radius: 10;
`;

export const CompanyName = styled.Text`
    font-size: 24;
    color: #5557B0;
    font-family: Roboto-Light;
    margin-top: 10;
`;

export const CompanyLocation = styled.Text`
    font-size: 12;
    color: #b8b8b8;
    font-family: Roboto-Light;
`;

export const CompanyType = styled.Text`
    font-size: 12;
    color: #f00;
    font-family: Roboto-Light;
`;

export const CompanyTimeDelivey = styled.Text`
    font-size: 12;
    color: #b8b8b8;
    font-family: Roboto-Light;
`;

export const CompanyRate = styled.Text`
    font-size: 12;
    color: #b8b8b8;
    font-family: Roboto-Light;
`;

export const CompanyDeliveryPrice = styled.Text`
    font-size: 12;
    color: #0eea0e;
    font-family: Chewy-Regular;
`;
