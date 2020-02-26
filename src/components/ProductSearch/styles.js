import styled from 'styled-components/native';

export const Label = styled.Text`
  font-size: 18;
  color: #000;
  font-family: Roboto-Bold;
  margin-top: 20;
`;

export const Container = styled.View.attrs({
  paddingHorizontal: 20,
})`
  background-color: #FFF;
`;

export const Content = styled.ScrollView.attrs({
    horizontal: true,
    showsHorizontalScrollIndicator: false,
})`
  margin-top: 20;
  flex: none;
`;


export const ViewCard = styled.View`
  width: 120;
  height: 80;
  margin-right: 10;
  background-color: #000;
  border-radius: 10;
`;

export const MenuImage = styled.Image`
  width: 100%;
  height: 100%;
  border-radius: 10;
`;

export const ViewMenuLabel = styled.View`
  justify-content: center;
  align-items: center;
`;

export const MenuLabel = styled.Text`
  font-size: 12;
  color: #f8f8f8;
  font-family: Roboto-Light;
  margin-top: 20;
`;