import Layout from "@/components/layout";
import BigContent from "@/components/BigContent";
import HighlightCode from "@/components/HighlightCode";
import {useState} from "react";
import xmlFormat from 'xml-formatter';

export default function Page() {
    const [inputValue, setInputValue] = useState("");
    const [resultValue, setResultValue] = useState("");
    const [spaceInputValue, setSpaceInputValue] = useState(2);
    const [languageValue, setLanguageValue] = useState("json");

    function formatJSON(jsonText) {
        setResultValue(JSON.stringify(JSON.parse(inputValue), null, spaceInputValue))
        setLanguageValue("json")
    }

    function formatXml() {
        const prettyXml = xmlFormat(inputValue, {
            indentation: ' '.repeat(spaceInputValue),
            filter: (node) => node.type !== 'Comment',
            collapseContent: true,
            lineSeparator: '\n'
        });

        setResultValue(prettyXml)
        setLanguageValue("xml")
    }

    function formatText() {
        try {
            try {
                formatJSON()
            } catch (err) {
                formatXml()
            }
        } catch (err) {
            alert("Text is not a json or xml text!")
        }
    }

    return (
        <Layout title="JSON/XML Formatter">
            <BigContent>
                <form>
                    <h1>Enter JSON or XML Text</h1>
                    <textarea cols="100" rows="10" id="dencoder" name="dencoder" value={inputValue}
                              onChange={e => {
                                  setInputValue(e.currentTarget.value);
                              }}
                    />
                    <input type="button" className="button" value="Format" onClick={ formatText } />
                    <span className="greenTitle">Tab Size:</span><input type="number" min="1" max="100"
                           aria-describedby="countHelp" value={spaceInputValue} onChange={e => {
                        setSpaceInputValue(parseInt(e.currentTarget.value));
                    }}
                />
                </form>

                <HighlightCode code={resultValue} language={languageValue} />
            </BigContent>
        </Layout>
    )
}