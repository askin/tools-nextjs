import Layout from "@/components/layout";
import {useState} from "react"

export default function Page() {
    const [inputValue, setInputValue] = useState("");
    const [resultValue, setResultValue] = useState("");

    function decode() {
        try {
            setResultValue(atob(inputValue))
        } catch (err) {
            setResultValue(err.message)
        }

    }

    function encode() {
        setResultValue(btoa(inputValue))
    }

    return (
        <Layout title="Base64 Decoder/Encoder">
            <div className="content-full">
                <form>
                    <h1>Enter text:</h1>
                    <textarea cols="100" rows="10" id="dencoder" name="dencoder" value={inputValue}
                              onChange={e => {
                                  setInputValue(e.currentTarget.value);
                              }}
                    />
                    <input type="button" className="button" value="Decode" onClick={decode} />
                    <input type="button" className="button" value="Encode" onClick={encode}/>

                    <h1>Result: </h1>
                    <textarea cols="100" rows="10" value={resultValue}
                              readOnly={true}
                              onChange={e => {
                                  setResultValue(e.currentTarget.value);
                              }}
                    />
                    <input type="button" className="button" value="Copy to clipboard" onClick={() => navigator.clipboard.writeText(resultValue)}/>
                </form>
                <div id="renderAsHtml"></div>
            </div>
        </Layout>
    )
}