import * as React from 'react'
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
                  <h4>{key}</h4>
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    marginLeft: "4rem",
                  }}
                >
                  {(value as Array<ISingers|IAlbums|ISongs>).map((song: any) => (
                    <div
                      className="card"
                      style={{
                        width: "10rem",
                        height: "10rem",
                        marginRight: "1.2rem",
                      }}
                    >
                      <div className="card-body">
                        <h5 className="card-title">{song.title}</h5>
                        <h6 className="card-subtitle mb-2 text-muted">
                          {song.language}
                        </h6>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        );
    }

export default SongListing;
