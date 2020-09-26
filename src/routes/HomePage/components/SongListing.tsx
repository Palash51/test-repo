import * as React from 'react'
import { Card, Image, Header } from 'semantic-ui-react'
import { ISingers, IAlbums, ISongs } from '../../../interfaces/music';


interface IProps {
    musicData:  Record<string, ISingers[] | IAlbums[] | ISongs[]>
}

const SongListing = (props: IProps) =>  {

    const { musicData } = props;
        
        return (
          <div>
            {Object.entries(musicData).map(([key, value]) => (
              <div id={key}>
                <div
                  style={{
                    display: "flex",
                    marginLeft: "4rem",
                    marginTop: "4rem",
                  }}
                >
                  <Header as='h1' color='red' style={{textTransform: 'capitalize'}}>{key}</Header>
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    marginLeft: "4rem",
                  }}
                >
                  {(value as Array<ISingers|IAlbums|ISongs>).map((song: any) => (
                    <Card style={{marginRight: "1.2rem", width: "10rem", height: "12rem", marginTop: "1rem"}}>
                        <Image src='https://react.semantic-ui.com/images/avatar/large/daniel.jpg' wrapped ui={false} />
                        <Card.Content>
                            <Card.Header className="song-header" style={{fontSize: 12, display: '-webkit-box'}}>{song.title}</Card.Header>
                        </Card.Content>
                      </Card>
                  ))}
                </div>
              </div>
            ))}
          </div>
        );
    }

export default SongListing;
