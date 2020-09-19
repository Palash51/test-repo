import * as React from 'react'
import { connect } from 'react-redux'
import images from '../../../images/images.jpeg';
import english from '../../../images/english.jpeg';
import hindi from '../../../images/english.jpeg';
import Carousel from "react-bootstrap/Carousel";



type IStateProps = ReturnType<typeof mapStateToProps>;
type IDispatchProps = typeof mapDispatchToProps;

type IProps = IStateProps &
  IDispatchProps & {}


interface IState {
    openLanguageModal: boolean;
    preferredLanguages: string[];
}

class Banner extends React.Component<IProps, IState> {
    public render() {
        return (
          <>
            {/* <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                    <div className="carousel-inner" style={{width: 630, height: 270}}>
                        <div className="carousel-item red active">
                            <img className="d-block w-50"  alt="First slide" />
                         </div>
                        <div className="carousel-item">
                            <img className="d-block w-50"  alt="Second slide" />
                        </div>
                        <div className="carousel-item">
                            <img className="d-block w-50"  alt="Third slide" />
                        </div>
                    </div>
            <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
            </a>
            </div> 
             */}

            <Carousel indicators={false}>
              {/* <Carousel.Item>
                <img
                  className="d-flex w-25"
                  src={english}
                  alt="First slide"
                />
                
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="w-25"
                  src={hindi}
                  alt="Third slide"
                />
              </Carousel.Item> */}
              <Carousel.Item>
                <img
                style={{width: '60%',
                    height: 'max-content',
                    marginLeft: '260px'}}
                //   className="w-25"
                  src={images}
                  alt="Third slide"
                />
              </Carousel.Item>
            </Carousel>
          </>
        );
    }
}

const mapStateToProps = () => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(Banner)
