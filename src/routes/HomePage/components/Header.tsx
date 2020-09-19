import * as React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
// import IRootState  from '../../../reducers/store'
import { Language } from '@material-ui/icons';
import styled from "styled-components";

import { LanguageModal } from './LanguageModal'

import { actions as bannerListing } from '../../../reducers/musicListing/'
import { IRootState } from '../../../reducers';

import  Banner  from './Banner';
import SongListing from './SongListing';


const StickyTopWrapper = styled.div`
height: 3px;
background-color: red;
`;


const NavbarWrapper = styled.div`
  display:flex;
  justify-content: space-evenly;
  width: 100%;
  background-color: #21252d;
  overflow: auto;
  height: 68px;
  color:#FFF;
`;

const BannerWrapper = styled.div`
    margin-top: 50px;
`;

type IStateProps = ReturnType<typeof mapStateToProps>;
type IDispatchProps = typeof mapDispatchToProps;

type IProps = IStateProps &
  IDispatchProps & {}


interface IState {
    openLanguageModal: boolean;
    preferredLanguages: string[];
}

class Header extends React.Component<IProps, IState> {

    constructor(props: IProps) {
        super(props)
    
        this.state = {
            openLanguageModal: false,
            preferredLanguages: []
        }
    }
    

    private getLanguages = () => {
        this.setState({ openLanguageModal : true })
    }

    private toggleModal = (value: boolean) => {
        this.setState({ openLanguageModal: value})
    }

    private selectedLanguages = (languages: string[]) => {
        this.setState({ preferredLanguages: languages})
        this.props.bannerListingData(languages)
    }

    public render() {
        const { openLanguageModal, preferredLanguages } = this.state;
        const { loading, error, result } = this.props;
        
        return (
            <>
            <StickyTopWrapper></StickyTopWrapper>
            <NavbarWrapper>
                <div style={{display: 'flex', marginTop: 16, marginRight: 80, fontSize: '1.25rem'}}>
                <Link to="/about"><span style={{color:'#FF0000'}}>WYNK</span>MUSIC</Link>
                </div>
                <div style={{display: 'flex', marginTop: 20, marginRight: 60, fontSize: 14 ,fontWeight: 500, color:'#FF0000'}}>
                    <div style={{marginRight: 30}}><Link to="/contact" style={{color:'#FFF'}}>HOME</Link></div>
                    <div style={{marginRight: 30}}><Link to="/projects" style={{color:'#FFF'}}>MY MUSIC</Link></div>
                    <div style={{marginRight: 30}}><Link to="/projects" style={{color:'#FFF'}}>DOWNLOAD APP</Link></div>
                </div>
                <div style={{display: 'flex', marginTop: 16, marginRight: 80}}>
                    <div style={{marginRight: 60}}><input type="text" className="fa fa-search" placeholder="Search for music you love!" 
                    style={{width: 320, height: 40, background: '#0c0f12', border: 'none', borderRadius: 10,textAlign: 'center'}}></input></div>
                    <div style={{marginRight: 30, marginTop: 6}} onClick={this.getLanguages}><Language></Language></div>
                    <div style={{marginRight: 30, marginTop: 6}}>SIGN IN</div>
                </div>
            </NavbarWrapper>
            {openLanguageModal && (
            <LanguageModal 
                toggleModal={(value) => this.toggleModal(value)}
                selectedLanguages={(languages) => this.selectedLanguages(languages)}
                preferredLanguages={preferredLanguages}
            />)}
            
            <BannerWrapper>
                <Banner />
            </BannerWrapper>
            {Object.keys(result).length > 0 && (
            <SongListing 
            musicData={result}
            />
            )}
        </>
        )
    }
}

const mapStateToProps = (state: IRootState) => ({
    ...state.musicListing
})

const mapDispatchToProps = {
    bannerListingData: bannerListing.bannerListingData,
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)
