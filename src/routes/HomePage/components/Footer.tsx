import React from 'react'
import { Card, Image } from 'semantic-ui-react'
import googleplay from '../../../images/googleplay.png';
import styled from "styled-components";


const FooterWrapper = styled.div`
    display: flex;
    flex-direction: column;
`


const Footer = ()  => {
    return (
        <>
            <div style={{padding: 50}}>
            <Card
                link
                style={{backgroundColor: '#21252d', borderRadius: 0, padding: '1.5rem', color:'red', boxShadow: 'none' }}
                className="w-100"
                >
                <Card.Content style={{display: 'flex', justifyContent: 'space-between'}}>
                    <div>
                        <Card.Header style={{color: '#f7f5f5', fontSize: 21, lineHeight: 1.2}}>Best way to watch movies</Card.Header>
                        <Card.Description style={{color: '#f7f5f5'}}>
                        Don’t forget to install Dynamics Movies on your mobile phones
                        </Card.Description>
                    </div>
                    {/* <div style={{ display: 'flex', width: 1 }}> */}
                    <Image src={googleplay} wrapped ui={false} />
                    <Image src={googleplay} wrapped ui={false} />
                    {/* </div> */}
                </Card.Content>
            </Card>
            </div>

            <div className="main-footer">
                <FooterWrapper className="container"> 
                {/* style={{display: 'flex', flexDirection: 'column'}}> */}
                    <div className="row">
                        {/* Column 1 */}
                        <div className="col-md-3 col-sm-6">
                            <h4>LATEST ALBUMS</h4>
                            <ul className="list-unstyled">
                                <li>Test1</li>
                                <li>Test2</li>
                                <li>Test3</li>
                                <li>Test4</li>
                            </ul>
                        </div>
                        {/* Column 2 */}
                        <div className="col-md-3 col-sm-6">
                            <h4>GENRES</h4>
                            <ul className="list-unstyled">
                                <li>Test1</li>
                                <li>Test2</li>
                                <li>Test3</li>
                                <li>Test4</li>
                            </ul>
                        </div>
                        {/* Column 3 */}
                        <div className="col-md-3 col-sm-6">
                            <h4>OLD SONGS</h4>
                            <ul className="list-unstyled">
                                <li>Test1</li>
                                <li>Test2</li>
                                <li>Test3</li>
                                <li>Test4</li>
                            </ul>
                        </div>
                        {/* Column 4 */}
                        <div className="col-md-3 col-sm-6">
                            <h4>TOP ARTISTS</h4>
                            <ul className="list-unstyled">
                                <li>Test1</li>
                                <li>Test2</li>
                                <li>Test3</li>
                                <li>Test4</li>
                            </ul>
                        </div>
                    </div>

                    <div className="row" style={{paddingTop: 16}}>
                        {/* Column 1 */}
                        <div className="col-md-3 col-sm-6">
                            <h4>LANGUAGES</h4>
                            <ul className="list-unstyled">
                                <li>Test1</li>
                                <li>Test2</li>
                                <li>Test3</li>
                                <li>Test4</li>
                            </ul>
                        </div>
                        {/* Column 2 */}
                        <div className="col-md-3 col-sm-6">
                            <h4>LATEST SONGS</h4>
                            <ul className="list-unstyled">
                                <li>Test1</li>
                                <li>Test2</li>
                                <li>Test3</li>
                                <li>Test4</li>
                            </ul>
                        </div>
                        {/* Column 3 */}
                        <div className="col-md-3 col-sm-6">
                            <h4>TOP SONGS</h4>
                            <ul className="list-unstyled">
                                <li>Test1</li>
                                <li>Test2</li>
                                <li>Test3</li>
                                <li>Test4</li>
                            </ul>
                        </div>
                        {/* Column 4 */}
                        <div className="col-md-3 col-sm-6">
                            <h4>TOP SEARCHED LYRICS</h4>
                            <ul className="list-unstyled">
                                <li>Test1</li>
                                <li>Test2</li>
                                <li>Test3</li>
                                <li>Test4</li>
                            </ul>
                        </div>
                    </div>
                    {/* Footer Bottom */}
                    <div className="footer-bottom">
                        <p className="text-xs-center">
                            &copy;{new Date().getFullYear()} Movies App - All Rights Reserved.
                        </p>

                    </div>
                </FooterWrapper>
            </div>
            
        </>
    )
}

export default Footer;
