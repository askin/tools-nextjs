import Image from 'next/image'
import ToolLink from  '../components/toollink'
import Layout from '../components/layout'

export default function Page() {
    const tools = [
        {href: "binary-ascii-converter", title: "Ascii - Binary Converter"},
        {href: "get-header.php", title: "Get Web Page Header"},
        {href: "decimal-hexadecimal.php", title: "Decimal - Hexadecimal Converter"},
        {href: "whois", title: "Who is"},
        {href: "whatismyip", title: "What is my IP?"},
        {href: "unixtimestamp", title: "Unix Time Conversion"},
        {href: "dencoder", title: "Decode / Encode URL"},
        {href: "tckn", title: "Validate and Generate TCKN"},
        {href: "ascii-table", title: "Table of ASCII Characters"},
        {href: "demo-information", title: "Demo ZIP / Credit Card. etc.."}
    ]

    const references = [
        {href: "https://www.siyahsapka.org/password-recovery.php", title: "Theme stolen from here."},
        {href: "http://phpwhois.ols.es/", title: "PHP Whois Class", },
        {href: "http://meyerweb.com/eric/tools/dencoder/index.html", title: "URL Decoder/Encoder stolen from here."}
    ]

    return (
        <Layout>
            <div className="content-3in1">
                <h1>Tools :</h1>
                <ul>
                    {tools.map((tool) => (
                        <ToolLink href={tool.href} title={tool.title}/>
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
                        <ToolLink href={reference.href} title={reference.title} target="blank"/>
                    ))}
                </ul>
            </div>
        </Layout>
    )
}