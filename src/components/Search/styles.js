import styled from 'styled-components/native';

export const Container = styled.ScrollView.attrs({
    paddingHorizontal: 30,
})`
    flex: 1;
    background-color: #FFF;
`;

export const Label = styled.Text`
  font-size: 18;
  color: #000;
  font-family: Roboto-Bold;
  margin-top: 20;
  margin-left: 20;
`;

export const Row = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const Col = styled.View`
  flex-direction: column;
`;

export const ViewCard = styled.View`
  width: 130;
  height: 80;
  background-color: #000;
  border-radius: 10;
  margin-bottom: 10;
  margin-top: 20;
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
  color: #000;
  font-family: Roboto-Light;
  margin-top: 20;
`;