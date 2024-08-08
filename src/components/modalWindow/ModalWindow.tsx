import React from "react";
import ReactDOM from "react-dom";
import ButtonMain from "../buttonMain/ButtonMain";
import { AnimatePresence, motion } from "framer-motion";
export const ModalWindow: React.FC<{
    isOpen: boolean;
    onCancel: () => void;
    onConfirm: () => void;
    children: React.ReactNode;
}> = ({ isOpen, onCancel, onConfirm, children }) => {
    if (!isOpen) return null;

    return ReactDOM.createPortal(
        <AnimatePresence>
            <motion.div
                className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-50'
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}>
                <motion.div
                    className='bg-zinc-900 rounded-lg border-2 border-amber-500 shadow-lg p-9'
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.8, opacity: 0 }}
                    transition={{ duration: 0.3 }}>
                    {children}
                    <div className='flex justify-end gap-4'>
                        <ButtonMain onClick={onConfirm} label='Confirm' />
                        <ButtonMain onClick={onCancel} label='Cancel' />
                    </div>
                </motion.div>
            </motion.div>
        </AnimatePresence>,
        document.body
    );
};
