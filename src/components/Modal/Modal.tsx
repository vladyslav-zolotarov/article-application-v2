import { useEffect, useRef, ReactNode } from 'react';
import { createPortal } from 'react-dom';
import { twMerge } from 'tailwind-merge';

const modalRoot = document.querySelector('#modal-root') as HTMLElement;

interface ModalProps extends React.ComponentPropsWithoutRef<'div'> {
  children: ReactNode;
}

export const Modal = (props: ModalProps) => {
  const { className, children } = props;

  const elRef = useRef<HTMLDivElement | null>(null);
  if (!elRef.current) {
    elRef.current = document.createElement('div');
    elRef.current.classList.add('modal-overlay');
  }

  useEffect(() => {
    const el = elRef.current!;
    modalRoot.appendChild(el);
    return () => {
      modalRoot.removeChild(el);
    };
  }, []);

  return createPortal(
    <div className={twMerge('modal-box', className)}>{children}</div>,
    elRef.current
  );
};
