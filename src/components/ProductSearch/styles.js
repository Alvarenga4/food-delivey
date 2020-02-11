import styled from 'styled-components/native';

export const Label = styled.Text`
  font-size: 18;
  color: #5557B0;
  font-family: Roboto-Light;
  margin-left: 20;
`;

export const Container = styled.ScrollView.attrs({
    horizontal: true,
    showsHorizontalScrollIndicator: false,
    paddingHorizontal: 20,
})`
  margin-top: 20;
  flex: none;
`;


export const ViewCard = styled.View`
  width: 150;
  height: 150;
  margin-right: 5;
  background-color: #000;
  border-radius: 10;
`;

export const MenuImage = styled.Image`
  width: 100%;
  height: 100%;
  border-radius: 10;
`;
