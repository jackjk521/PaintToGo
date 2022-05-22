import React , {useState, useEffect} from "react";
import "../../css/ConsultationForm.css";
import Axios from 'axios';
import MessageQueue, { useMessageQueue } from "./MessageQueue";

const ConsultationForm = () => {
    const user_id = sessionStorage.getItem('user_id');
    const [desc, setDesc] = useState('');
    const { addMessage, removeMessage, messages } = useMessageQueue();

    const inputHandler = (e) => {
        setDesc(e.target.value);
    }

    const clearFields = () => {
        document.getElementById("consultation-form").reset();
        setDesc('');
    }

    const submitConsultation = () => {
        const consultations = {
            user_id : user_id,
            consult_description : desc,
            status : 3,
        }

        const postConsultation = async (consultations) => {
            const res = await Axios.post('api/addConsultations', consultations);
            addMessage("Consultation booked successfully", "success");
        }

        if(desc) {
            postConsultation(consultations);
            clearFields();
        } else {
            addMessage("Please enter description", "error");
        }  
    }

    return(
    <div className= "consultation-form-body">
        <MessageQueue messages={messages} removeMessage={removeMessage} />
        <h1> Book consultation </h1>

        <div className="consultation-contents">
          <form id = 'consultation-form'>
              <div className = "consultation-inputs">
                  <div className="desc-input">
                    <label htmlFor="consultation-desc" className = "consultation-label"> Description: </label>
                    <textarea type="text" onChange={inputHandler}  rows="8" name="consultation-desc"></textarea>
                  </div>
              </div>
            
            <div className="book-consultation-btn">
                <button type='button' onClick={submitConsultation} className="buttons" id="buttonSend"> Book consultation </button>
            </div>
            
          </form>
        </div>
    </div>
    );
}  

export default ConsultationForm;