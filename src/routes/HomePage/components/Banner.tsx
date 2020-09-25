import * as React from 'react'
import { connect } from 'react-redux'

import banner1 from '../../../images/banner1.png';
import bollywood from '../../../images/bollywood.png';
import singer from '../../../images/singer.png';

import styled from "styled-components";


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
          <div style={{display: 'flex', justifyContent: 'center'}}>
            {/* <div className="slide-wrap"> */}
  
              {/* <a href="#slide-1">1</a>
              <a href="#slide-2">2</a>
              <a href="#slide-3">3</a>
              <a href="#slide-4">4</a>
              <a href="#slide-5">5</a> */}
              <div className="slider">
                <div className="slide" id="slide-1" ><img src={singer} alt={banner1}  className="img-responsive" /></div>
                <div className="slide" id="slide-2"><img src={banner1} alt={banner1}  className="img-responsive" /></div>
                <div className="slide" id="slide-3"><img src={bollywood} alt={banner1}  className="img-responsive" /></div>
                <div className="slide" id="slide-4"><img src={singer} alt={banner1}  className="img-responsive" /></div>
                <div className="slide" id="slide-5"><img src={banner1} alt={banner1}  className="img-responsive" /></div>
             </div>
            {/* </div> */}
          
          </div>
        );
    }
}

const mapStateToProps = () => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(Banner)
