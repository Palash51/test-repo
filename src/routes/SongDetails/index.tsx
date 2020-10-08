import React from 'react';
import { match } from "react-router-dom";

import { Breadcrumb, Card, Image, Header, Button, Icon } from 'semantic-ui-react';
import styled from "styled-components";
import style from './style';


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
    const [hover, setHover] = React.useState(false);

    const songId  = props.match?.params.songId
    const sections = [
        { key: 'Home', content: 'Home', link: true, style: {color: '#b7c0c4'} },
        { key: 'Songs', content: 'Hindi Songs', link: true, style: {color: '#b7c0c4'} },
        { key: 'Songs', content: 'Ginny Weds Sunny-Original Motion Picture Soundtrack Songs', link: true, style: {color: '#b7c0c4'} },
        { key: `${songId}`, content: `${songId}`, active: true },
    ]
    return (
      <Wrapper>
        <Breadcrumb
          icon="right angle"
          sections={sections}
          style={{ marginTop: 8, backgroundColor: "#0c0f12", padding: "20px" }}
        />
        <div style={{ display: "flex", padding: 16 }}>
          <Card
            style={{
              width: "20rem",
              height: "20rem",
              marginTop: "1rem",
              borderRadius: "2%",
            }}
          >
            <Image
              src={
                "https://img.wynk.in/unsafe/275x275/filters:no_upscale():format(webp)/http://s3-ap-south-1.amazonaws.com/wynk-music-cms/srch_sonymusic/music/srch_sonymusic_A10328E0009736735Q.jpg"
              }
              wrapped
              ui={false}
            />
          </Card>
          <div style={{ marginLeft: 54, marginTop: 14, padding: 16 }}>
            <Header as="h1" style={{ color: "#f7f5f5", fontSize: 36 }}>
              Sawan Mein Lag Gayi Aag
            </Header>
            <div
              onMouseEnter={() => {
                setHover(true);
              }}
                        onMouseLeave={() => {
                setHover(false);
              }}
              style={{
                ...style.normal,
                ...(hover ? style.hover : null),
                fontSize: 14,
              }}
            >
              Ginny Weds Sunny-Original Motion Picture Soundtrack
            </div>
            <div style={{ color: "#818c94", fontSize: 12 }}>
              3:46 • Sony Music Entertainment India Pvt. Ltd.
            </div>
            <div
              style={{
                marginTop: 24,
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <div>
                <Button
                  style={{
                    backgroundColor: "#ed1c24",
                    lineHeight: "1.5rem",
                    fontWeight: 900,
                    color: "#f7f5f5",
                    borderRadius: 20,
                    marginRight: 16,
                  }}
                >
                  <Icon name="play" />
                  Play Now
                </Button>
                <Button
                  style={{
                    backgroundColor: "#0c0f12",
                    borderColor: "#818c94",
                    border: "1px solid #e8e8e8",
                    lineHeight: "1.5rem",
                    fontWeight: 900,
                    color: "#f7f5f5",
                    borderRadius: 20,
                    marginRight: 16,
                  }}
                >
                  <Icon name="download" />
                  Download
                </Button>
                <Button
                  circular
                  icon="heart"
                  style={{
                    width: "3rem",
                    height: "3rem",
                    border: "1px solid #e8e8e8",
                  }}
                />
              </div>
              <div style={{marginLeft: "25rem",}}>
                <Button
                  circular
                  icon="share"
                  style={{
                    width: "3rem",
                    height: "3rem",
                    border: "1px solid #e8e8e8",
                  }}
                />
                <Button
                  circular
                  icon="ellipsis vertical"
                  style={{
                    width: "3rem",
                    height: "3rem",
                    marginLeft: "1.2rem",
                    border: "1px solid #e8e8e8",
                  }}
                />
              </div>
            </div>
            <div>
            <Header size='medium' style={{ color: "#f7f5f5", fontSize: 20, marginTop: 36 }}>Ginny weds sunny Songs</Header>
            </div>
          </div>
        </div>
        <div>
        {/* <Card.Group>
            <Card fluid color='red' header='Option 1' />
            <Card fluid color='orange' header='Option 2' />
            <Card fluid color='yellow' header='Option 3' />
        </Card.Group> */}
        </div>
      </Wrapper>
    );
}

export default SongDetails;