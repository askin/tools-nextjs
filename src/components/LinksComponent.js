import ToolLink from "@/components/toollink";

export default function LinksComponent({title, links = []}) {
    return (
        <div>
            <h1>{title}</h1>
            <ul>
                {links.filter((link) => (link.enabled)).map((link) => (
                    <ToolLink key={link.title} href={link.href} title={link.title}/>
                ))}
            </ul>
        </div>
    );
}