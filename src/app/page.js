import Image from 'next/image'

function ToolLink({title, href, target=""}) {
    if (target === "") {
    return (
            <li><a href={href}>{title}</a></li>
    );} else {
        return (
            <li><a href={href} target={target}>{title}</a></li>
        );
    }
}

export default function Home() {

    const tools = [
        {href: "binary-ascii.html", title: "Ascii - Binary Converter"},
        {href: "get-header.php", title: "Get Web Page Header"},
        {href: "decimal-hexadecimal.php", title: "Decimal - Hexadecimal Converter"},
        {href: "whois.html", title: "Who is"},
        {href: "whatismyip.html", title: "What is my IP?"},
        {href: "unixtimestamp.html", title: "Unix Time Conversion"},
        {href: "dencoder.html", title: "Decode / Encode URL"},
        {href: "tckn.html", title: "Validate and Generate TCKN"},
        {href: "ascii-table.html", title: "Table of ASCII Characters"},
        {href: "demo-information.html", title: "Demo ZIP / Credit Card. etc.."}
    ]

    const references = [
        {href: "https://www.siyahsapka.org/password-recovery.php", title: "Theme stolen from here."},
        {href: "http://phpwhois.ols.es/", title: "PHP Whois Class", },
        {href: "http://meyerweb.com/eric/tools/dencoder/index.html", title: "URL Decoder/Encoder stolen from here."}
    ]

    return (
        <div>
            <div align="center" className="siteHeader">
                <br/>
                <span className="navigationButton">
                    <a href="/">~/tools</a>
                    &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
                </span>
                <a href="#" className="siteNameButton">kelebek&apos;s tools</a>
                <span className="navigationButton">
                    &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
                    <a href="https://askin.ws">~/askin</a>
                </span>
            </div>
            <div className="content menu-item">
                <div className="content-3in1">
                    <h1>Tools :</h1>
                    <ul>
                        {tools.map((tool) => (
                            <ToolLink href={tool.href} title={tool.title} />
                        ))}
                    </ul>
                </div>
                <div className="content-3in1-spacer">
                    <Image
                        src="/images/bluespacer.gif"
                        alt="background"
                        width={2}
                        height={120}
                        priority
                    />
                </div>
                <div className="content-3in1">
                    <h1>References :</h1>
                    <ul>
                        {references.map((reference) => (
                            <ToolLink href={reference.href} title={reference.title} target="blank" />
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}
