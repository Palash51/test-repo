import * as React from 'react';
import { connect } from 'react-redux';

import { LanguageModal } from './components/LanguageModal'
import { actions as bannerListing } from '../../reducers/moviesListing'
import { IRootState } from '../../reducers';
import MoviesListing from './components/MoviesListing';


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

    toggleModal = (value: boolean) => {
        this.props.setLanguageAsync(value)
    }

    openSignInModal = () => {
        this.setState({ openRegistrationModal: true })
    }

    componentDidMount = () => {
        this.props.bannerListingData([])
    }

    selectedLanguages = (languages: string[]) => {
        this.setState({ preferredLanguages: languages})
        this.props.bannerListingData(languages)
    }

    render() {
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
            {Object.keys(result).length > 0 && (
            <MoviesListing 
            moviesData={result}
            />
            )}
        </>
        )
    }
}

const mapStateToProps = (state: IRootState) => ({
    ...state.moviesListing
})

const mapDispatchToProps = {
    bannerListingData: bannerListing.bannerListingData,
    resetState: bannerListing.resetState,
    setLanguageAsync: bannerListing.setLanguageAsync
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage)

