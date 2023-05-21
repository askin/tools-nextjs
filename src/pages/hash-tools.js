import Layout from "@/components/layout";
import React, {useState} from "react"
import BigContent from "@/components/BigContent";
import {createHash} from 'crypto';

export default function Page() {
    const [inputValue, setInputValue] = useState("");
    const [resultValue, setResultValue] = useState("");
    const [algorithmInputValue, setAlgorithmInputValue] = useState("sha256")

    const algorithmList = [

        {name: "sha1", description: "sha1", isDefault: "false"},
        {name: "sha224", description: "sha224", isDefault: "false"},
        {name: "sha256", description: "sha256", isDefault: "true"},
        {name: "sha384", description: "sha384", isDefault: "false"},
        {name: "sha512", description: "sha512", isDefault: "false"},
        {name: "md5", description: "md5", isDefault: "false"},
    ]

    const onFormSubmit = e => {
        e.preventDefault();
    }

    function encodeURL() {
        const hashFunc = createHash(algorithmInputValue);
        hashFunc.update(inputValue);
        setResultValue(hashFunc.digest('hex'))
    }

    return (
        <Layout title="Hash Tools">
            <BigContent>
                <form onSubmit={onFormSubmit}>
                    <h1>Enter Text</h1>
                    <textarea cols="100" rows="10" id="dencoder" name="dencoder" value={inputValue}
                              onChange={e => {
                                  setInputValue(e.currentTarget.value);
                              }}
                    />
                    <input type="button" className="button" value="Create Hash" onClick={encodeURL}/>
                    <select
                        value={algorithmInputValue}
                        onChange={(e) => {
                            setAlgorithmInputValue(e.target.value);
                        }}
                    >
                        {algorithmList.map((algorithm) => (
                                <option key={algorithm.id} value={algorithm.name}
                                        defaultValue={algorithm.isDefault}>{algorithm.description}</option>
                            )
                        )}
                    </select>

                    <h1>Hash: </h1>
                    <input type="input" className="redInput" value={resultValue}
                           readOnly={true}
                    />
                </form>
            </BigContent>
        </Layout>
    )
}