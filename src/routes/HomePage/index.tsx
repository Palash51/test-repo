import * as React from 'react';
import { connect } from 'react-redux';
import styled from "styled-components";

import { LanguageModal } from './components/LanguageModal'
import { actions as bannerListing } from '../../reducers/musicListing/'
import { IRootState } from '../../reducers';
import  Banner  from './components/Banner';
import SongListing from './components/SongListing';

const BannerWrapper = styled.div`
    margin-top: 50px;
`;

type IStateProps = ReturnType<typeof mapStateToProps>;
type IDispatchProps = typeof mapDispatchToProps;

type IProps = IStateProps &
  IDispatchProps & {}


interface IState {
    openRegistrationModal: boolean;
    preferredLanguages: string[];
}

class HomePage extends React.Component<IProps, IState> {

    constructor(props: IProps) {
        super(props)
    
        this.state = {
            openRegistrationModal: false,
            preferredLanguages: []
        }
    }

    private toggleModal = (value: boolean) => {
        this.props.setLanguageAsync(value)
    }

    private openSignInModal = () => {
        this.setState({ openRegistrationModal: true })
    }

    private selectedLanguages = (languages: string[]) => {
        this.setState({ preferredLanguages: languages})
        this.props.bannerListingData(languages)
    }

    public render() {
        const { preferredLanguages } = this.state;
        const { loading, error, result, openLanguageModal } = this.props;
        return (
            <>
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
    resetState: bannerListing.resetState,
    setLanguageAsync: bannerListing.setLanguageAsync
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage)

