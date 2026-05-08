import { type ReactNode, type RefObject } from "react";

import { FocusTrap } from "./FocusTrap";

type ModalDialogProps = {
  isOpen: boolean;
  title: string;
  children: ReactNode;
  onClose: () => void;
  triggerRef?: RefObject<HTMLElement | null>;
};

export const ModalDialog = ({
  isOpen,
  title,
  children,
  onClose,
  triggerRef,
}: ModalDialogProps) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="modal-overlay" onMouseDown={onClose}>
      <FocusTrap onEscape={onClose} triggerRef={triggerRef}>
        <section
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
          className="modal-content"
          onMouseDown={(event) => event.stopPropagation()}
        >
          <header className="modal-header">
            <h2 id="modal-title">{title}</h2>
          </header>

          <div className="modal-body">{children}</div>

          <footer className="modal-footer">
            <button type="button" className="button-primary" onClick={onClose}>
              Zamknij
            </button>
          </footer>
        </section>
      </FocusTrap>
    </div>
  );
};
