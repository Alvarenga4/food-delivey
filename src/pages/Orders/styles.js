import styled from 'styled-components/native';

export const Header = styled.View`
  background-color: #f8f8f8;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.Text`
  margin-top: 20;
  color: #000;
  font-size: 14;
  font-family: Roboto-Light;
`;

export const Container = styled.ScrollView`
  flex: 1;
  background-color: #FFF;
`;

export const TabMenu = styled.Text`
  color: #F00;
  font-size: 12;
  font-family: Roboto-Bold;
  letter-spacing: 1;
  text-transform: uppercase;
`;

export const WaitView = styled.View`
  margin-top: 30;
  justify-content: center;
  align-items: center;
`;

export const WaitImage = styled.Image`
  width: 100%;
  height: 100%;
`;

export const WaitTitle = styled.Text`
  font-family: Roboto-Black;
  font-size: 16;
`;

export const WaitDescription = styled.Text`
  font-family: Roboto-Light;
  font-size: 13;
`;
