import styled from 'styled-components/native';
import { Dimensions } from 'react-native';

const widthScreen = Dimensions.get('screen').width - 45;

export const Label = styled.Text`
  font-size: 18;
  color: #000;
  font-family: Roboto-Bold;
  margin-top: 20;
`;

export const Container = styled.View.attrs({
})`
  background-color: #FFF;
`;

export const Content = styled.ScrollView.attrs({
    horizontal: true,
    showsHorizontalScrollIndicator: false,
})`
  margin-top: 50;
  margin-bottom: 50;
  margin-left: 5;
  flex: none;
`;


export const ViewCard = styled.View`
  width: ${widthScreen};
  height: 160;
  margin-right: 10;
  background-color: #000;
  border-radius: 10;
`;

export const MenuImage = styled.Image`
  width: ${widthScreen};
  height: 160;
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

