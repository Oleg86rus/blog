import { classNames } from 'shared/lib/tests/classNames/classNames';
import { memo, useMemo, useState } from 'react';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import { LangSwitcher } from 'widgets/LangSwitcher';
import { Button } from 'shared/ui/Button';
import { ButtonSize, ThemeButton } from 'shared/ui/Button/ui/Button';
import { SidebarItemList } from '../../model/items';
import { SidebarItem } from '../SidebarItem/ui/SidebarItem';
import cls from './Sidebar.module.scss';

interface SidebarProps {
    className?: string
}

export const Sidebar = memo(({ className }: SidebarProps) => {
    const [collapsed, setCollapsed] = useState(false);
    const onToggle = () => {
        setCollapsed((prev) => !prev);
    };

    const itemlist = useMemo(() => SidebarItemList.map((item) => (
        <SidebarItem
            key={item.path}
            item={item}
            collapsed={collapsed}
        />
    )), [collapsed]);

    return (
        <div
            data-testid="sidebar"
            className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [className])}
        >
            <Button
                data-testid="sidebar-toggle"
                type="button"
                onClick={onToggle}
                className={cls.collapseBtn}
                theme={ThemeButton.BACKGROUND_INVERTED}
                square
                size={ButtonSize.L}
            >
                {collapsed ? '>' : '<'}
            </Button>
            <div className={cls.items}>
                {itemlist}

            </div>
            <div className={cls.switchers}>
                <ThemeSwitcher />
                <LangSwitcher className={cls.lang} />
            </div>
        </div>
    );
});
