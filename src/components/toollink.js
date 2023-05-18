export default function ToolLink({title, href, target=""}) {
    if (target === "") {
        return (
            <li className="menu-item"><a href={href}>{title}</a></li>
        );} else {
        return (
            <li className="menu-item"><a href={href} target={target}>{title}</a></li>
        );
    }
}