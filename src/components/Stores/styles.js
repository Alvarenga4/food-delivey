import styled from 'styled-components/native';

export const Container = styled.View.attrs({
})`
  background-color: #FFF;
  margin-top: 10;
`;

export const Label = styled.Text`
  font-size: 18;
  color: #282323;
  font-family: Roboto-Bold;
  margin-bottom: 20;
  margin-left: 20;
`;

export const Content = styled.ScrollView.attrs({
    horizontal: false,
})`
`

export const Card = styled.View.attrs({
})`
    width: 340;
    background-color: #FFF;
    border-width: 1;
    border-color: #fff;
    border-radius: 4;
    margin-top: 10;
    margin-left: 10;
    margin-bottom: 20;
`;

export const Row = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding-left: 10;
  padding-right: 10;
  margin-top: 10;
  margin-bottom: 10;
`;

export const Col = styled.View`
  flex-direction: column;
`;

export const ViewLogo = styled.ImageBackground.attrs({
  imageStyle: {
    borderRadius: 80,
    width: 90,
    height: 90,
  }
})`
  width: 90;
  height: 90;
  margin-right: 10;
  background-color: #000;
  border-radius: 80;
`;

export const LogoCompany = styled.Image`
  width: 80;
  height: 80;
  border-radius: 10;
`;

export const CompanyName = styled.Text`
    font-size: 24;
    color: #000;
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
    color: #000;
    font-family: Roboto-Light;
`;

export const CompanyTimeDelivey = styled.Text`
    font-size: 12;
    color: #b8b8b8;
    font-family: Roboto-Regular;
`;

export const CompanyRate = styled.Text`
    font-size: 12;
    color: #FFDE00;
    font-family: Roboto-Bold;
`;

export const CompanyDeliveryPrice = styled.Text`
    font-size: 12;
    color: #b8b8b8;
    font-family: Roboto-Regular;
`;
