import React, {useEffect, useState} from 'react';
import {
    Container,
    Label,
    Content,
    ViewCard,
} from './styles';

export default function Highlights({ navigation }) {
    return (
        <>
            <Container>

                <Label>Famoso no Ifood</Label>

                <Content>
                    <ViewCard source={{ uri: 'https://i.ytimg.com/vi/6oB3e6uII0Y/maxresdefault.jpg' }} elevation={8} >
                    </ViewCard>
                    <ViewCard source={{ uri: 'https://scontent.fsjk1-1.fna.fbcdn.net/v/t1.0-9/17523395_287241568375192_7665918216908781472_n.png?_nc_cat=107&_nc_ohc=lDulYAhgOQcAX-PZp1D&_nc_ht=scontent.fsjk1-1.fna&oh=17bdbb23331c800e12d8f6017228e9d6&oe=5EC17425' }} elevation={10} >
                    </ViewCard>
                    <ViewCard source={{ uri: 'https://static-images.ifood.com.br/image/upload/f_auto,t_high/logosgde/201911181856_dabc9317-74fb-4784-98bd-aa28b47e46a4.jpg' }} elevation={8} >
                    </ViewCard>
                    <ViewCard source={{ uri: 'https://scontent.fsjk1-1.fna.fbcdn.net/v/t1.0-9/p960x960/42111204_459038494587316_2904084004531601408_o.jpg?_nc_cat=106&_nc_ohc=kk3GdzL4xZoAX_faaVG&_nc_ht=scontent.fsjk1-1.fna&_nc_tp=6&oh=d64777bed345a9827401b45b087f7db1&oe=5EFF39BB' }} elevation={8} >
                    </ViewCard>
                    <ViewCard source={{ uri: 'https://scontent.fsjk1-1.fna.fbcdn.net/v/t1.0-9/47475901_564604997300980_7506639596797558784_n.jpg?_nc_cat=105&_nc_ohc=Cnvb8z7ZWlAAX9tbib0&_nc_ht=scontent.fsjk1-1.fna&oh=600e6234c48479e41dd7dfb9cb521ea5&oe=5EF2DBAE' }} elevation={8} >
                    </ViewCard>
                    <ViewCard source={{ uri: 'https://scontent.fsjk1-1.fna.fbcdn.net/v/t1.0-9/33430126_1519712824806299_3873649421082165248_n.png?_nc_cat=105&_nc_ohc=2oag7UXXw0AAX-fS-uf&_nc_ht=scontent.fsjk1-1.fna&oh=ed33d76fa71587eda8fb33dd082f21ee&oe=5EF39DCE' }} elevation={8} >
                    </ViewCard>
                </Content>


            </Container>
        </>
    )
}