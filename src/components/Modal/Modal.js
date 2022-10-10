import "./Modal.css";
import { useCallback, useEffect } from "react";
export const Modal = ({ isOpen, closeModal }) => {
  const closeHandler = useCallback(() => {
    if (isOpen) {
      closeModal();
    }
  }, [closeModal, isOpen]);

  const onContentClick = (e) => {
    e.stopPropagation();
  };

  const onKeyDown = useCallback(
    (e) => {
      if (e.key === "Escape") {
        closeHandler();
      }
    },
    [closeHandler]
  );

  useEffect(() => {
    if (isOpen) {
      window.addEventListener("keydown", onKeyDown);
    }
    return () => {
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [isOpen, onKeyDown]);

  return (
    <div className={isOpen ? "opened" : "overlay"} onClick={closeHandler}>
      <div className="content" onClick={onContentClick}>
        Why do we use it? It is a long established fact that a reader will be
        distracted by the readable content of a page when looking at its layout.
        The point of using Lorem Ipsum is that it has a more-or-less normal
        distribution of letters, as opposed to using 'Content here, content
        here', making it look like readable English.
      </div>
    </div>
  );
};
