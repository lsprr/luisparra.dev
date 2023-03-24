interface MenuItem {
    label: string;
    href: string;
    isExternal?: boolean;
}

interface NavbarProps {
    menuItems: MenuItem[];
}

export type { MenuItem, NavbarProps };
