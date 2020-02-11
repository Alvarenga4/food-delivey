import styled from 'styled-components/native';

export const Container = styled.View.attrs({
    paddingHorizontal: 20,
})`
  background-color: #FFF;
`;

export const Row = styled.View`
  margin-top: 20;
  margin-bottom: 20;
  flex-direction: row;
  justify-content: space-between;
`;

export const Col = styled.View`
  flex-direction: column;
`;

export const LocationLabel = styled.Text`
  font-family: Roboto-Black;
  font-size: 16;
  color: #5557B0;
  font-weight: bold;
`;

export const ContentPhoto = styled.View`
  width: 40;
  height: 35;
  background-color: #b8b8b8;
  border-radius: 2;
`;

export const ProfilePhoto = styled.Image`
  width: 40;
  height: 40;
`;