import cl from './Modal.module.css';

export const Modal = ({ largeImageURL, handleBackdropClick }) => {
  return (    
    <div className={cl.Overlay} onClick={handleBackdropClick}>
      <div className={cl.Modal}>
        <img src={largeImageURL} alt="" />
      </div>
    </div>
  );
}