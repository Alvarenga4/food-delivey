import React, {useState, useEffect} from 'react';

import {Container, StatusBar} from './styles';

import HeaderInfo from '../../components/HeaderInfo';
import ProductsMenu from '../../components/ProductSearch';
import Stores from '../../components/Stores';

export default function Main({navigation}) {
  return (
      <>
        <StatusBar barStyle="dark-content" backgroundColor="#FFF" />
        <HeaderInfo navigation={navigation} />
        <Container>
          <ProductsMenu navigation={navigation} />
          <Stores navigation={navigation} />
        </Container>
      </>
  );
}
