import React, {useState, useEffect} from 'react';

import {Container, StatusBar} from './styles';

import InputSearch from '../../components/InputSearch';
import ProductsMenu from '../../components/ProductSearch';
import Promotions from '../../components/Promotions';
import Stores from '../../components/Stores';
import HighLights from '../../components/Highlights';

export default function Main({navigation}) {
  return (
      <>
        <StatusBar barStyle="dark-content" backgroundColor="#FFF" />
        <InputSearch navigation={navigation} />
        <Container>
          <ProductsMenu navigation={navigation} />
          <Promotions navigation={navigation} />
          <HighLights navigation={navigation} />
          <Stores navigation={navigation} />
        </Container>
      </>
  );
}
