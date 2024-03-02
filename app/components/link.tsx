const Link = ({ 
    href, 
    children, 
    className } :{
    href: string;
    children: any;
    className: string;
    }) => (
        <a className={className}target="_blank" rel="noopener noreferrer"
        href={href}>
            {children}
            </a>
    );

export default Link;