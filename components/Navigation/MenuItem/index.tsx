import Link, { LinkProps } from 'next/link';
import type { MenuItem } from './MenuItemProps';

interface Props extends MenuItem { }

const MenuItem = ({ label, href, isExternal }: Props) => {
    const linkProps: React.AnchorHTMLAttributes<HTMLAnchorElement> & LinkProps = {
        href,
        className: 'text-xl whitespace-nowrap',
        'aria-label': `${label} page`,
    };

    if (isExternal) {
        linkProps.target = '_blank';
        linkProps.rel = 'noopener noreferrer';
    }

    return (
        <li>
            <Link {...linkProps}>{label}</Link>
        </li>
    );
};

export default MenuItem;
