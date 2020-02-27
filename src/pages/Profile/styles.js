import styled from 'styled-components/native';

export const Container = styled.ScrollView.attrs({
  paddingHorizontal: 10,
})`
  flex: 1;
  background-color: #FFF;
`;

export const Content = styled.View`
  justify-content: center;
  align-items: center;
`;

export const ViewGrid = styled.View.attrs({
  paddingHorizontal: 30,
})`
  background-color: #FFF;
`;

export const Row = styled.View`
  flex-direction: row;
  margin-top: 40;
  justify-content: space-between;
  background-color: #FFF;
`;

export const Col = styled.View`
  flex-direction: column;
  background-color: #FFF;
`;

export const CardImage = styled.View`
  width: 80;
  height: 80;
  justify-content: center;
  align-items: center;
  background-color: #b8b8b8;
  border-radius: 80;
  margin-bottom: 20;
`;

export const ProfileImage = styled.Image`
  width: 80;
  height: 80;
  border-radius: 180;
`;

export const ViewLabels = styled.View`
  align-items: center;
  justify-content: center;
  margin-top: 30;
`;

export const EditButton = styled.TouchableOpacity`
`;

export const EditLabel = styled.Text`
  font-size: 16;
  font-family: Roboto-Light;
  color: #a5a5a5;
`;

export const NameLabel = styled.Text`
  color: #000;
  font-family: Roboto-Black;
  font-size: 20;
`;

export const HateView = styled.View`
  margin-top: 10;
  margin-bottom: 10;
  width: 100;
  height: 30;
  border-radius: 10;
  background-color: #fff;
  justify-content: center;
  align-items: center;
`;

export const HateLabel = styled.Text`
  color: #5557B0;
  font-family: Roboto-Black;
  font-size: 14;
`;

export const RecommendationView = styled.View.attrs({
})`
  margin-top: 30;
  margin-left: 20;
  height: 50;
  width: 90%;
  justify-content: center;
  background-color: #FFF;
  border-radius: 5;
`;

export const ViewIndicationLabel = styled.View.attrs({
})`
  justify-content: center;
  align-items: center;
`;

export const IndicationLabel = styled.Text`
  color: #000;
  font-family: Roboto-Regular;
  font-weight: bold;
  font-size: 16;
`;

export const DescriptionIndication = styled.Text`
  color: #a5a5a5;
  font-size: 14;
  font-family: Roboto-Light;
`;


export const Image = styled.Image`
  width: 50;
  height: 50;
`;
export const SesionsCards = styled.TouchableOpacity.attrs({
})`
  width: 100%;
  border-bottom-color: #a5a5a5;
  border-bottom-width: 0.2;
  padding-top: 10;
  padding-bottom: 10;
`;

export const SessionTitle = styled.Text`
  color: #000;
  font-size: 22;
  font-family: Roboto-Regular;
  margin-left: 20;
`;

export const SessionDescription = styled.Text`
  color: #a5a5a5;
  font-size: 16;
  font-family: Roboto-Light;
  margin-left: 20;
`;
