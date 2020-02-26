import React, {useEffect, useState} from 'react';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import {
    Container,
    ViewInput,
    InputSearch,
} from './styles';

export default function ProductSearch({ navigation }) {
    const [search, setSearch] = useState('')
    return (
        <>
        <Container>

            <ViewInput>
                <Icon name="search" size={22} color={'#f00'} />
                <InputSearch
                    placeholder="Item ou loja"
                    placeholderTextColor={"#b8b8b8"}
                    keyboardType="email-address"
                    autoCapitalize="none"
                    value={search}
                    onChangeText={setSearch}
                />
            </ViewInput>
        </Container>
        </>
    )
}