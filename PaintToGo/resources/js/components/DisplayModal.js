import React from "react";
import Modal from "react-modal";
import { GrFormClose } from "react-icons/gr";
import "../../css/Modal.css";

const DisplayModal = ({ openModal, TableHeader, handleClose, header, Details }) => {
    const customStyles = {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            padding: 0,
            width: '70%',
            transform: 'translate(-50%, -50%)',
        },
    };

    return (
        <Modal
            isOpen={openModal}
            style={customStyles}
            onRequestClose={handleClose}
            contentLabel="View Details Modal"
            ariaHideApp={false}
        >
            <div>
                <header className="header">
                    <h3>{header}</h3>
                </header>
                <div className="pad">
                    <table className="body">
                        {TableHeader}
                        <tbody className="table-body">
                            {Details}
                        </tbody>
                    </table>
                </div>
                
            </div>

            
        </Modal>
    )

}

export default DisplayModal;

