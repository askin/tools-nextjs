import Layout from '../components/layout'
import ToolSpacer from "@/components/toolSpacer";
import LinksComponent from "@/components/LinksComponent";
import SmallContent from "@/components/SmallContent";

export default function Page() {
    const tools = [
        {
            title: "Converters: ",
            links: [
                {enabled: true, href: "binary-ascii-converter", title: "Ascii - Binary Converter"},
                {enabled: true, href: "decimal-hexadecimal", title: "Decimal - Hexadecimal Converter"},
                {enabled: true, href: "unixtimestamp", title: "Unix Time Conversion"}
            ]
        },
        {
            title: "Text Tools: ",
            links: [
                {enabled: true, href: "json-formatter", title: "JSON Formatter"},
            ]
        },
        {
            title: "Decode/Encode/Hash: ",
            links: [
                {enabled: true, href: "url-encoder-decoder", title: "Decode / Encode URL"},
                {enabled: true, href: "base64-decode-encode", title: "Base64 Decoder/Encoder"},
                {enabled: true, href: "hash-tools", title: "Hash Tools"},
            ]
        },
        {
            title: "Network Tools: ",
            links: [
                {enabled: true, href: "web-page-header", title: "Get Web Page Header"},
                {enabled: false, href: "whois", title: "Who is"},
                {enabled: true, href: "whatismyip", title: "What is my IP?"},
            ]
        },
        {
            title: "Generators: ",
            links: [
                {enabled: true, href: "tckn", title: "Validate and Generate TCKN"},
                {enabled: true, href: "uuid-tools", title: "Generate UUID"},
            ]
        },
        {
            title: "Informations: ",
            links: [
                {enabled: true, href: "ascii-table", title: "Table of ASCII Characters"},
                {enabled: true, href: "demo-information", title: "Demo ZIP / Credit Card. etc.."},
            ]
        }
    ]

    const references = [
        {enabled: true, href: "https://www.siyahsapka.org/password-recovery.php", title: "Theme stolen from here."},
        {enabled: false, href: "http://phpwhois.ols.es/", title: "PHP Whois Class", },
        {enabled: true, href: "https://meyerweb.com/eric/tools/dencoder/index.html", title: "URL Decoder/Encoder stolen from here."}
    ]

    return (
        <Layout title="Kelebek's Tools">
            <SmallContent>
                {tools.map((tool) => (
                    <LinksComponent key={tool.id} title={tool.title} links={tool.links} />
                ))}
            </SmallContent>
            <ToolSpacer />
            <SmallContent>
                <LinksComponent title="References: " links={references} />
            </SmallContent>
        </Layout>
    )
}