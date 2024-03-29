import { useCallback } from 'react';
import { classNames } from '@/shared/lib/tests/classNames/classNames';
import CopyIcon from '@/shared/assets/icons/copy-20-20.svg';
import { Button, ThemeButton } from '../../Button';
import cls from './Code.module.scss';

interface CodeProps {
    className?: string;
    text: string;
}

export const Code = (props: CodeProps) => {
    const { className, text } = props;

    const onCopy = useCallback(() => {
        navigator.clipboard.writeText(text);
    }, [text]);

    return (
        <pre className={classNames(cls.Code, {}, [className])}>
            <Button onClick={onCopy} className={cls.copyBtn} theme={ThemeButton.CLEAR}>
                <CopyIcon className={cls.copyIcon} />
            </Button>
            <code>
                {text}
            </code>
        </pre>
    );
};
