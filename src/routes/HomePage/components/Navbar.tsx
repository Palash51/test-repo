import React from 'react'
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useHistory } from "react-router-dom";
import store from '../../../reducers/store';
import  actions from '../../../reducers/moviesListing/actions';
import { Language } from '@material-ui/icons';
import { StickyTopWrapper,  NavbarWrapper } from './style';

const Navbar: React.FC = () => {
    // const languageModal = useSelector(state => state)
    const history = useHistory();
    const getLanguages = () => {
        store.dispatch<any>(actions.setLanguageAsync(true));
    }

    const openSignInModal = () => {
        history.push(`/login`);
    }
    
    return (
        <>
            <StickyTopWrapper></StickyTopWrapper> 
            <NavbarWrapper>
                <div style={{display: 'flex', marginTop: 16, marginRight: 80, fontSize: '1.25rem'}}>
                <Link to="/home"><span style={{color:'#FF0000'}}>Dynamics </span>Movies</Link>
                </div>
                <div style={{display: 'flex', marginTop: 20, marginRight: 60, fontSize: 14 ,fontWeight: 500, color:'#FF0000'}}>
                    <div style={{marginRight: 30}}><Link to="/home" style={{color:'#FFF'}}>HOME</Link></div>
                    <div style={{marginRight: 30}}><Link to="/" style={{color:'#FFF'}}>MY Movies</Link></div>
                    <div style={{marginRight: 30}}><Link to="/" style={{color:'#FFF'}}>DOWNLOAD APP</Link></div>
                </div>
                <div style={{display: 'flex', marginTop: 16, marginRight: 80}}>
                    <div style={{marginRight: 60}}><input type="text" className="fa fa-search" placeholder="Search for movies you love!" 
                    style={{width: 320, height: 40, background: '#0c0f12', border: 'none', borderRadius: 10,textAlign: 'center'}}></input></div>
                    <div style={{marginRight: 30, marginTop: 6}} 
                    onClick={getLanguages}
                    >
                        <Language></Language>
                    </div>
                    <Link to="/login">
                    <div style={{marginRight: 30, marginTop: 6}} 
                    // onClick={openSignInModal}
                    >SIGN IN</div>
                    </Link>
                    
                </div>
            </NavbarWrapper>
        </>
    )
}

export default Navbar;
