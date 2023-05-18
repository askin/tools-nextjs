import Layout from "@/components/layout";
import {useState} from "react"

export default function Page() {

    const [resultValue, setResultValue] = useState("");
    const [decimalToHexValue, setDecimalToHexValue] = useState("");
    const [hexToDecimalValue, setHexToDecimalValue] = useState("");

    function decimalToHex() {
        setResultValue(parseInt(decimalToHexValue).toString(16).toUpperCase())
    }

    function hexToDecimal() {
        setResultValue(parseInt(hexToDecimalValue, 16).toString())
    }

    return (
        <Layout>
            <div className="content-3in1">
                <h1><a href="?" className="redTitle">convert 2 hexadecimal</a></h1>
                <input
                    type="text"
                    onSubmit="return false;"
                    className="redInput"
                    value={decimalToHexValue}
                    onChange={e => {
                        setDecimalToHexValue(e.currentTarget.value);
                    }}
                />
                <br/>
                <br/>
                <input type="button" name="button" id="button" value="convert" className="button"
                       onClick={decimalToHex}/>
            </div>
            <div className="content-3in1">
                <h1><a href="?" className="grayTitle">convert 2 decimal</a></h1>
                <input
                    type="text"
                    onSubmit="return false;"
                    className="grayInput"
                    value={hexToDecimalValue}
                    onChange={e => {
                        setHexToDecimalValue(e.currentTarget.value);
                    }}
                />
                <br/>
                <br/>
                <input type="button" name="button" id="button2" value="convert" className="button"
                       onClick={hexToDecimal}/>
            </div>
            <div id="sonuc" className="sonucDiv" align="center">{resultValue}</div>
        </Layout>
    )
}