import React from 'react'
import { connect } from 'react-redux'
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import styled from "styled-components";

const ModalWrapper = styled.div`
    background-color: #21252d;
`;

const CheckBoxWrapper = styled.div`
    display: flex; 
    justifyContent: space-around; 
    fontSize: 20;
`;

interface IProps {
    toggleModal: (value: boolean) => void;
    selectedLanguages: (languages: string[]) => void;
    preferredLanguages: string[];
}

interface IState {
    showModal: boolean;
    selectedLanguages: string[];//Array<'Hindi'|'English'>;
}

export class LanguageModal extends React.Component<IProps, IState> {

    constructor(props:IProps) {
        super(props)
    
        this.state = {
            showModal: true,
            selectedLanguages: []
        }
    }
    

    private handleClose = () => {
        this.setState({ showModal: false})
        this.props.toggleModal(false)
    }

    private selectLanguage = (event: any) => {
        const language = event.target.value;
        this.setState(prevState => ({
            selectedLanguages: [...prevState.selectedLanguages, language]
          }))
    }

    private handleSelectedLanguages = () => {
        this.props.selectedLanguages(this.state.selectedLanguages)
        this.handleClose()
    }

    public render() {
        const { showModal } = this.state;
        // const { preferredLanguages } = this.props;
        // checked={preferredLanguages.includes('English')}
        return (
            <ModalWrapper>
               <Modal show={showModal} onHide={this.handleClose}>
                    <Modal.Header closeButton>
                    <Modal.Title style={{color: '#fff'}}>Select Music Language[s]</Modal.Title>
                    </Modal.Header>
                    <Modal.Body style={{height: 500}}>
                            <div style={{display: 'flex', justifyContent: 'space-around', fontSize: 20}}>
                                <div className="checkbox">
                                <label style={{color: '#fff'}}>
                                    <input type="checkbox"  value="Hindi" onClick={this.selectLanguage} />Hindi</label>
                                </div>
                                <div className="checkbox">
                                <label style={{color: '#fff'}}>
                                    <input type="checkbox" value="English" onClick={this.selectLanguage} />English</label>
                                </div>
                                
                            </div>
                    </Modal.Body>
                    <Modal.Footer>
                    <Button variant="secondary" onClick={this.handleClose} 
                    style={{backgroundColor: '#0c0f12', borderColor: '#818c94', minWidth: 120, color: '#b7c0c4', border: '1 solid #e8e8e8', borderRadius: 20}}>
                        cancel
                    </Button>
                    <Button variant="danger" onClick={this.handleSelectedLanguages} style={{backgroundColor: '#ed1c24', minWidth: 120, borderRadius: 20}}>
                        Save
                    </Button>
                    </Modal.Footer>
                </Modal> 
            </ModalWrapper>
        )
    }
}

const mapStateToProps = () => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(LanguageModal)
