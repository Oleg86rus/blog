import { classNames, Mods } from '@/shared/lib/tests/classNames/classNames';
import React, {
    ReactNode,
} from 'react';
import { useModal } from '@/shared/lib/hooks/useModal/useModal';
import { Overlay } from '../../Overlay/Overlay';
import { Portal } from '../../Portal/Portal';
import cls from './Modal.module.scss';

interface ModalProps {
    className?: string,
    children?: ReactNode,
    isOpen?: boolean,
    onClose?: () => void,
    lazy?: boolean
}

const ANIMATION_DELAY = 300;

export const Modal = (props: ModalProps) => {
    const {
        className,
        children,
        isOpen,
        onClose,
        lazy,
    } = props;

    const { closeHandler, isClosing, isMounted } = useModal({
        animationDelay: ANIMATION_DELAY,
        onClose,
        isOpen,
    });

    const mods: Mods = {
        [cls.opened]: isOpen,
        [cls.isClosing]: isClosing,
    };

    if (lazy && !isMounted) {
        return null;
    }

    return (
        <Portal>
            <div className={classNames(cls.Modal, mods, [className, 'app_modal'])}>
                <Overlay onClick={closeHandler} />
                <div className={cls.overlay}>
                    <div className={cls.content}>
                        {children}
                    </div>
                </div>
            </div>
        </Portal>
    );
};
