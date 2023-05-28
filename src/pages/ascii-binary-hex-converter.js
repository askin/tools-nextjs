import Layout from "@/components/layout";
import {useState} from "react"
import ToolSpacer from "@/components/toolSpacer";
import SmallContent from "@/components/SmallContent";

export default function Page() {

    const [resultValue, setResultValue] = useState("");
    const [convertToBinaryValue, setConvertToBinaryValue] = useState("");
    const [convertToAsciiValue, setConvertToAsciiValue] = useState("");
    const [baseValue, setBaseValue] = useState("base2");
    const [delimeterValue, setDelimeterValue] = useState(" ");

    const baseList = {
        base2: {
            base: 2, description: "Binary", isDefault: "true", padding: 8
        },
        base8: {
            base: 8, description: "Octal", isDefault: "false", padding: 4
        },
        base10: {
            base: 10, description: "Decimal", isDefault: "false", padding: 0
        },
        base16: {
            base: 16, description: "Hexadecimal", isDefault: "false", padding: 2
        }
    }

    const delimeterList = [
        {description: "Space", value: " ", isDefault: true},
        {description: "None", value: "", isDefault: false},
        {description: "Comma", value: ",", isDefault: false}
    ]

    function convertToBinary() {
        const base = baseList[baseValue]
        const result = convertToBinaryValue.split('').map(function (char) {
            return char.charCodeAt(0).toString(base.base).padStart(base.padding, '0').toUpperCase()
        }).join(delimeterValue);

        setResultValue(result)
    }

    function splitString(str, N) {
        const arr = [];

        for (let i = 0; i < str.length; i += N) {
            arr.push(str.substring(i, i + N));
        }

        return arr;
    }

    function convertToAscii() {
        const base = baseList[baseValue]
        let tokens = []
        if (delimeterValue !== "") {
            tokens = convertToAsciiValue.split(delimeterValue)
        } else {
            if (baseValue === "base10") {
                alert("Decimal value can not be converted ascii when delimeter is None!")
            } else {
                const padding = baseList[baseValue].padding
                tokens = splitString(convertToAsciiValue, padding)
            }
        }

        console.log(tokens)

        convertToAsciiValue.split(delimeterValue)
        const result = tokens.map(
            function tokenToAscii(token) {
                return String.fromCharCode(parseInt(token, base.base))
        }).join("")
        setResultValue(result)
    }

    return (
        <Layout title="Ascii - Binary Converter">
            <SmallContent>
                <h1><a href="?" className="redTitle">convert 2 {baseList[baseValue].description.toLowerCase()}</a></h1>
                <input
                    type="text"
                    className="redInput"
                    value={convertToBinaryValue}
                    onChange={e => {
                        setConvertToBinaryValue(e.currentTarget.value);
                    }}
                />
                <input type="button" name="button" id="button" value="convert" className="button"
                       onClick={convertToBinary}/>
                <select
                    className="button"
                    value={baseValue}
                    onChange={(e) => {
                        setBaseValue(e.target.value);
                    }}
                >
                    {Object.keys(baseList).map((base) => (
                            <option key={base.id} value={base}
                                    defaultValue={baseList[base].isDefault}>{baseList[base].description}</option>
                        )
                    )}
                </select>
                <select
                    className="button"
                    value={delimeterValue}
                    onChange={(e) => {
                        setDelimeterValue(e.target.value);
                    }}
                >
                    {delimeterList.map((delimeter) => (
                            <option key={delimeter.id} value={delimeter.value}
                                    defaultValue={delimeter.isDefault}>{delimeter.description}</option>
                        )
                    )}
                </select>

            </SmallContent>
            <ToolSpacer image={false} />
            <SmallContent>
                <h1><a href="?" className="grayTitle">convert {baseList[baseValue].description.toLowerCase()} 2 ascii</a></h1>
                <input
                    type="text"
                    className="grayInput"
                    value={convertToAsciiValue}
                    onChange={e => {
                        setConvertToAsciiValue(e.currentTarget.value);
                    }}
                />
                <input type="button" name="button" id="button2" value="convert" className="button"
                       onClick={convertToAscii}/>
            </SmallContent>
            <div id="sonuc" className="resultDiv" align="center">{resultValue}</div>
        </Layout>
    )
}