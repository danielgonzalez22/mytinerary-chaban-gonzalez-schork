import "../styles/Modal.css";

const Modal = ({ isOpen, closeModal, text, result }) => {
  const handleModalContainerClick = (e) => e.stopPropagation();
  return (
    <article className={`modal ${isOpen && "is-open"}`} onClick={closeModal}>
      <div className="modal-container" onClick={handleModalContainerClick}>
        <button className="modal-close" onClick={closeModal}>x</button>
        {result ?
          <img className="modal-image" src="https://cdn-icons-png.flaticon.com/512/190/190411.png" alt="ok-icon" />
          :
          <img className="modal-image" src="https://cdn-icons-png.flaticon.com/512/6711/6711656.png" alt="ok-icon" />
        }
        <p>{text}</p>
      </div>
    </article>
  )
}
export default Modal;



































// import React, { useState } from "react";
// import "./Modal.css";


// export default function Modal() {

//     const [modal, setModal] = useState(false);

//     const toggleModal = () => {
//         setModal(!modal)
//     }

//     return(
//         <>
//         <button onClick={toggleModal}
//         className='btn-modal'>
//           Succesfully!!
//         </button>

//             <div className="modal">
//             <div onClick={toggleModal}
//             className="overlay"></div>
//             <div className="modal-content">
//                 <h2>Hello Modal</h2>
//                 <p>
//                   lmsdfklsdfklndkndf

//                 </p>
//             </div>



//             </div>






//         </>



//     );
// }


























