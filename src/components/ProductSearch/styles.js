import styled from 'styled-components/native';

export const Label = styled.Text`
  font-size: 18;
  color: #000;
  font-family: Roboto-Bold;
  margin-top: 20;
  margin-left: 20;
`;

export const Container = styled.View.attrs({
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
  margin-left: 20;
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

export const Row = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const Col = styled.View`
  flex-direction: column;
`;