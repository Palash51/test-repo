import React from 'react';
import { match } from "react-router-dom";

import { Breadcrumb, Card, Image } from 'semantic-ui-react';
import styled from "styled-components";

const Wrapper = styled.div`
margin-left: 48px;
`;

interface DetailParams {
    songId: string;    
}

interface IProps  {
    match?: match<DetailParams>;
}


const SongDetails: React.FC<IProps> = (props) => {
    const songId  = props.match?.params.songId
    const sections = [
        { key: 'Home', content: 'Home', link: true },
        { key: 'Songs', content: 'Songs', link: true },
        { key: `${songId}`, content: `${songId}`, active: true },
    ]
    return (
        <Wrapper>
        <Breadcrumb icon='right angle' sections={sections} style={{marginTop: 8, backgroundColor: '#0c0f12', padding: '2px'}} />
        <div>
        <Card style={{ width: "18rem", height: "18rem", marginTop: "1rem" }}>
                <Image src={'https://img.wynk.in/unsafe/275x275/filters:no_upscale():format(webp)/http://s3-ap-south-1.amazonaws.com/wynk-music-cms/srch_sonymusic/music/srch_sonymusic_A10328E0009736735Q.jpg'} wrapped ui={false} />
              </Card>
        </div>
        </Wrapper>
    )
}

export default SongDetails;