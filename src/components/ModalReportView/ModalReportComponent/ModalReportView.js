import React from "react"
import InputGroup from 'react-bootstrap/InputGroup'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import FormControl from 'react-bootstrap/FormControl'
import pen from "../pen.png";
import location from "../location.png";
import camera from "../camera.png";
import Select from 'react-select';
import MapComponentReport from '../MapComponentReport.js';
import ImageUpload from '../ImageUpload.js';
import {customStyles, options} from "../../common/constans";
import {
    onChangeChangeSelectProblem
} from "../../../redux/reportFormReducer";


function ModalReportView(props) {
    const wrapContainer = {
        position: 'absolute',
        //display: 'flex',
        width: 446,
        height: '84vh',
        overflow: 'auto',
        right: '7%',
        top: 94,
        background: '#FFFFFF',
        borderRadius: 10
    };
    const {
         geo, img, note1, note2, btnClickedProgress,
        toggleModalReport, updateNoteMap, updateNoteDescription,
        onChangeSelectProblem, onSubmit
    } = props;

    return <>
        <Container style={wrapContainer}>
            <Row>
                <Col xs={12} sm={12} md={12} lg={12}>
                    <Button
                        className="modal-close"
                        onClick={toggleModalReport}
                    >
                        <p>X</p>
                    </Button>
                </Col>
            </Row>
            <Row>
                <Col xs={12} sm={12} md={12} lg={12} className='information'>
                    <span>Information</span>
                </Col>
            </Row>
            <Row>
                <Col xs={12} sm={12} md={12} lg={12} className="location">
                    <img src={location}/>
                    <span style={{paddingLeft: 15}}>location (click on the big map)</span>
                </Col>
            </Row>
            <Row>
                <Col xs={12} sm={12} md={12} lg={12} className='mapPin'>
                    <MapComponentReport position={geo}
                    />
                </Col>
            </Row>
            <Row>
                <Col xs={12} sm={12} md={12} lg={12} className='note-reportForm'>
                    <span className='spanNote'>Note: </span>
                    <InputGroup>
                        <FormControl as="textarea"
                                     className='textNote'
                                     type="text"
                                     value={note1.value}
                                     onChange={updateNoteMap}/>
                    </InputGroup>
                </Col>
            </Row>
            <Row>
                <Col xs={12} sm={12} md={12} lg={12} className='description'>
                    <img src={pen}/><span style={{paddingLeft: 15}}>Description of the problem</span>
                </Col>
            </Row>
            <Row>
                <Select
                    className='selectProblem'
                    onChange={onChangeSelectProblem}
                    options={options}
                    styles={customStyles}
                />
            </Row><Row>
            <Col xs={12} sm={12} md={12} lg={12} className='noteDescription'>
                <span className='spanDescription'>Note: </span>
                <InputGroup>
                    <FormControl as="textarea"
                                 className='textNoteDescription'
                                 type="text"
                                 value={note2.value}
                                 onChange={updateNoteDescription}/>
                </InputGroup>
            </Col>
        </Row>
            <Row>
                <Col xs={12} sm={12} md={12} lg={12} className='addPhoto'>
                    <img src={camera}/><span style={{paddingLeft: 15, paddingTop: 5}}>Add photo</span>
                </Col>
            </Row>
            <Row>
                <Col xs={12} sm={12} md={12} lg={12} className='dropPhoto'>
                    <ImageUpload
                        //handleChangeStatus={handleChangeStatus}
                        //handleSubmitDrop={this.handleSubmitDrop}
                    />
                </Col>
            </Row>
            <div>
                <Button  className='Btn-submit-nextStepFinish' type="onClick"
                        onClick={onSubmit}>
                    <p className='nameBtnSubmit'>Submit</p>
                </Button>
            </div>
        </Container>
    </>;
}

export default ModalReportView;
