import { classNames } from 'shared/lib/tests/classNames/classNames';
import { memo } from 'react';
import { Card, CardTheme } from 'shared/ui/Card';
import { Text } from 'shared/ui/Text';
import { Notifications } from '../../model/types/Notifications';
import cls from './NotificationItem.module.scss';

interface NotificationItemProps {
    className?: string;
    item: Notifications;
}

export const NotificationItem = memo((props: NotificationItemProps) => {
    const { className, item } = props;

    const content = (
        <Card
            theme={CardTheme.OUTLINE}
            className={classNames(cls.NotificationItem, {}, [className])}
        >
            <Text title={item.title} text={item.description} />
        </Card>
    );

    if (item.href) {
        return (
            <a className={cls.link} target="_blank" href={item.href} rel="noreferrer">
                {content}
            </a>
        );
    }
    return content;
});