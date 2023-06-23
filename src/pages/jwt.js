import Layout from "@/components/layout";
import BigContent from "@/components/BigContent";
import HighlightCode from "@/components/HighlightCode";
import {useEffect, useState} from "react";
import ToolSpacer from "@/components/toolSpacer";
import SmallContent from "@/components/SmallContent";

export default function Page() {
    const exampleJwt = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c";
    const [inputValue, setInputValue] = useState(exampleJwt);
    const [headerValue, setHeaderValue] = useState("");
    const [payloadValue, setPayloadValue] = useState("");

    function decode() {
        // Remove Bearer or anything else
        let parsedJwt= decodeJwt(inputValue.split(" ").slice(-1)[0])
        setHeaderValue(parsedJwt.header)
        setPayloadValue(parsedJwt.title)
    }

    useEffect(() => {
        decode()
    },[]);

    function decodeJwt(jwtToken) {
        const jwtTokenArray = jwtToken.split(".")
        return {
            header: JSON.stringify(JSON.parse(Buffer.from(jwtTokenArray[0], 'base64')), null, 4),
            title: JSON.stringify(JSON.parse(Buffer.from(jwtTokenArray[1], 'base64')), null, 4)
        }
    }

    return (
        <Layout title="JWT Tool">
            <SmallContent>
                <form>
                    <h1>Enter JWT Token Here</h1>
                    <textarea cols="100" rows="10" id="dencoder" name="dencoder" value={inputValue}
                              onChange={e => {
                                  setInputValue(e.currentTarget.value);
                              }}
                    />
                    <input type="button" className="button" value="Format" onClick={ decode } />
                </form>
            </SmallContent>
            <ToolSpacer image={false} />
            <SmallContent>
                <h1>Decoded</h1>
                <span>Header</span>
                <HighlightCode code={headerValue} language="json" />
                <span>Payload</span>
                <HighlightCode code={payloadValue} language="json" />
            </SmallContent>
            <BigContent>
                <b>JSON Web Token (JWT)</b> is a compact, URL-safe means of representing claims to be transferred between two parties. The claims in a JWT are encoded as a JSON object that is used as the payload of a JSON Web Signature (JWS) structure or as the plaintext of a JSON Web Encryption (JWE) structure, enabling the claims to be digitally signed or integrity protected with a Message Authentication Code (MAC) and/or encrypted. <a href="https://datatracker.ietf.org/doc/html/rfc7519" target="_blank">Ref: RFC 7519</a>
            </BigContent>
        </Layout>
    )
}