import { createPortal } from "react-dom";
import css from "../css/Modal.module.css";

const Background = (props) => {
  return <div className={css.backdrop} onClick={props.onClose} />;
};

const ModalOverlay = (props) => {
  return (
    <div className={css.modal}>
      <div className={css.content}>{props.children}</div>
    </div>
  );
};

export default function Modal(props) {
  return (
    <>
      {createPortal(<Background onClose={props.onClose} />, document.body)}
      {createPortal(<ModalOverlay>{props.children}</ModalOverlay>, document.body)}
    </>
  );
}
