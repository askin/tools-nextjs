import Layout from "@/components/layout";
import {useState} from "react"
import ToolSpacer from "@/components/toolSpacer";
import Header from "@/components/header";

export default function Page() {

    const [resultValue, setResultValue] = useState("");
    const [convertToBinaryValue, setConvertToBinaryValue] = useState("");
    const [convertToAsciiValue, setConvertToAsciiValue] = useState("");

    function convertToBinary() {
        const result = convertToBinaryValue.split('').map(function (char) {
            return char.charCodeAt(0).toString(2).padStart(8, '0');
        }).join(' ');

        setResultValue(result)
    }

    function convertToAscii() {
        const result = convertToAsciiValue.split(' ').map(
            function (binary) {
                return String.fromCharCode(parseInt(binary, 2))
            }
        ).join("")
        setResultValue(result)
    }

    return (
        <Layout>
            <Header title="Ascii - Binary Converter" />
            <div className="content-3in1">
                <h1><a href="?" className="redTitle">convert 2 binary</a></h1>
                <input
                    type="text"
                    className="redInput"
                    value={convertToBinaryValue}
                    onChange={e => {
                        setConvertToBinaryValue(e.currentTarget.value);
                    }}
                />
                <br/>
                <br/>
                <input type="button" name="button" id="button" value="convert" className="button"
                       onClick={convertToBinary}/>
            </div>
            <ToolSpacer image={false} />
            <div className="content-3in1">
                <h1><a href="?" className="grayTitle">convert 2 ascii</a></h1>
                <input
                    type="text"
                    className="grayInput"
                    value={convertToAsciiValue}
                    onChange={e => {
                        setConvertToAsciiValue(e.currentTarget.value);
                    }}
                />
                <br/>
                <br/>
                <input type="button" name="button" id="button2" value="convert" className="button"
                       onClick={convertToAscii}/>
            </div>
            <div id="sonuc" className="resultDiv" align="center">{resultValue}</div>
        </Layout>
    )
}