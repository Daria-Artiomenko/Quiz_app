import React from 'react';
import ReactDOM from 'react-dom';
import ButtonMain from '../buttonMain/ButtonMain';
import { Link } from 'react-router-dom';

export const ModalWindow: React.FC<{
  isOpen: boolean;
  onCancel: () => void;
  onConfirm: () => void;
  children: React.ReactNode;
}> = ({ isOpen, onCancel, onConfirm, children }) => {
  if (!isOpen) return null;

  return ReactDOM.createPortal(
        <div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 '>
            <div className='bg-zinc-900 rounded-lg  border-2 border-amber-500 shadow-lg p-9'>
                {children}
                <div className="flex justify-end gap-4">

                    <ButtonMain onClick={onConfirm} label='Confirm'></ButtonMain>

                    <ButtonMain onClick={onCancel} label='Cancel'></ButtonMain>
                </div>
            </div>
        </div>,
        document.body
    );
};