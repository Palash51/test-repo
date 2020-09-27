import * as React from 'react'
import { Card, Image, Header } from 'semantic-ui-react'
import { ISingers, IAlbums, ISongs } from '../../../interfaces/music';


interface IProps {
    musicData:  Record<string, ISingers[] | IAlbums[] | ISongs[]>
}

const SongListing = (props: IProps) =>  {

    const { musicData } = props;

    const openSongCard = (song:any) => {
      // open Modal here contains song details
      
    }

        return (
          <div>
            {Object.entries(musicData).map(([key, value]) => (
              <div id={key}>
                <div
                  style={{
                    display: "flex",
                    marginLeft: "2rem",
                    marginTop: "2rem",
                  }}
                >
                  <Header as='h1' color='red' style={{textTransform: 'capitalize'}}>{key}</Header>
                </div>
                <div
                  style={{
                    padding:12,
                    whiteSpace:"nowrap",
                    overflowX: 'auto',
                  }}
                >
                  {(value as Array<ISingers|IAlbums|ISongs>).map((song: any) => (
                    <Card style={{ width: "10rem", height: "14rem", margin: "1rem", display:'inline-block'}} onClick={() => 
                      openSongCard(song.id)}>
                        <Image src={song.smallImage} wrapped ui={false} />
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
