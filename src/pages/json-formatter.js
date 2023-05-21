import Layout from "@/components/layout";
import BigContent from "@/components/BigContent";
import HighlighCode from "@/components/HighlighCode";
import {useState} from "react";

export default function Page() {
    const [inputValue, setInputValue] = useState("");
    const [resultValue, setResultValue] = useState("");
    const [spaceInputValue, setSpaceInputValue] = useState(2);

    function formatJSON(jsonText) {
        return
    }

    return (
        <Layout title="JSON Formatter">
            <BigContent>
                <form>
                    <h1>Enter JSON Text</h1>
                    <textarea cols="100" rows="10" id="dencoder" name="dencoder" value={inputValue}
                              onChange={e => {
                                  setInputValue(e.currentTarget.value);
                              }}
                    />
                    <input type="button" className="button" value="Format" onClick={() => {setResultValue(JSON.stringify(JSON.parse(inputValue), null, spaceInputValue))}} />
                    <span className="greenTitle">Tab Size:</span><input type="number" min="1" max="100"
                           aria-describedby="countHelp" value={spaceInputValue} onChange={e => {
                        setSpaceInputValue(parseInt(e.currentTarget.value));
                    }}
                />
                </form>

                <HighlighCode code={resultValue} language="json" />
            </BigContent>
        </Layout>
    )
}