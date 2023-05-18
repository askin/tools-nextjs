import Layout from "@/components/layout";
import {useState} from "react"

export default function Page() {

    const [resultValue, setResultValue] = useState("");
    const [convertToBinaryValue, setConvertToBinaryValue] = useState("");
    const [convertoAsciiValue, setConvertoAsciiValue] = useState("");

    function convertToBinary() {
        var result = convertToBinaryValue.split('').map(function (char) {
            return char.charCodeAt(0).toString(2).padStart(8, '0');
        }).join(' ');

        setResultValue(result)
    }

    function convertToAscii() {
        var result = convertoAsciiValue.split(' ').map(
            function (binary) {
                return String.fromCharCode(parseInt(binary, 2))
            }
        ).join("")
        setResultValue(result)
    }

    return (
        <Layout>
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
            <div className="content-3in1">
                <h1><a href="?" className="grayTitle">convert 2 ascii</a></h1>
                <input
                    type="text"
                    className="grayInput"
                    value={convertoAsciiValue}
                    onChange={e => {
                        setConvertoAsciiValue(e.currentTarget.value);
                    }}
                />
                <br/>
                <br/>
                <input type="button" name="button" id="button2" value="convert" className="button"
                       onClick={convertToAscii}/>
            </div>
            <div id="sonuc" className="sonucDiv" align="center">{resultValue}</div>
        </Layout>
    )
}