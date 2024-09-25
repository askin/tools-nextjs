import Layout from "@/components/layout";
import {useState} from "react"
import BigContent from "@/components/BigContent";

export default function Page() {
    const onFormSubmit = e => {
        e.preventDefault();
    }

    function extractGoogleDriveFileId(googleDriveShareUrl) {
        if (googleDriveShareUrl.includes("docs.google.com")) {
            alert("docs.google.com is not supported!!")
            return ""
        }

        let fileId = googleDriveShareUrl.split('file/d/').slice(-1)[0].split("/view")[0].split("?")[0]
        return fileId
    }

    function createGoogleDriveDownloadUrl(fileId) {
        if (fileId == "") {
            return ""
        }
        return "https://drive.google.com/u/3/uc?id=" + fileId + "&export=download&confirm=yes"
    }

    function createGoogleDriveHostUrl(fileId) {
        if (fileId == "") {
            return ""
        }
        return "https://drive.google.com/u/3/uc?id=" + fileId
    }

    const [googleDriveShareUrlValue, setGoogleDriveShareUrlValue] = useState("");
    const [fileIdValue, setFileIdValue] = useState("");
    const [googleDriveDownloadUrlValue, setGoogleDriveDownloadUrlValue] = useState("");
    const [googleDriveHostUrlValue, setGoogleDriveHostUrlValue] = useState("");

    return (
        <Layout title="Create Google Drive Download Link">
            <BigContent>
                <form onSubmit={onFormSubmit}>
                    <h2>Enter Google Drive Share Link:</h2>
                    <input
                        type="text"
                        className="redInput"
                        value={googleDriveShareUrlValue}
                        onChange={e => {
                            setGoogleDriveShareUrlValue(e.currentTarget.value)
                            let fileId = extractGoogleDriveFileId(e.currentTarget.value)
                            setFileIdValue(fileId)
                            let googleDriveDownloadUrl = createGoogleDriveDownloadUrl(fileId)
                            let googleDriveHostUrl = createGoogleDriveHostUrl(fileId)
                            setGoogleDriveDownloadUrlValue(googleDriveDownloadUrl)
                            setGoogleDriveHostUrlValue(googleDriveHostUrl)
                        }}
                    />
                    <h2>File Id: (If you have, enter file id)</h2>
                    <input
                        type="text"
                        className="redInput"
                        value={fileIdValue}
                        onChange={e => {
                            setFileIdValue(e.currentTarget.value)
                            let googleDriveDownloadUrl = createGoogleDriveDownloadUrl(e.currentTarget.value)
                            let googleDriveHostUrl = createGoogleDriveHostUrl(e.currentTarget.value)
                            setGoogleDriveDownloadUrlValue(googleDriveDownloadUrl)
                            setGoogleDriveHostUrlValue(googleDriveHostUrl)
                        }}
                    />
                    <h2>Google Drive Download Url</h2>
                    <input
                        type="text"
                        className="redInput"
                        value={googleDriveDownloadUrlValue}
                        readOnly={true}
                    />

                    <h2>Google Drive Host Url</h2>
                    <input
                        type="text"
                        className="redInput"
                        value={googleDriveHostUrlValue}
                        readOnly={true}
                    />

                    <input type="button" className="button" value="Copy Download Url" onClick={ () => navigator.clipboard.writeText(googleDriveDownloadUrlValue) }/>
                    <input type="button" className="button" value="Copy Host Url" onClick={ () => navigator.clipboard.writeText(googleDriveHostUrlValue) }/>
                </form>
            </BigContent>
            <BigContent>
                Download Url: <a href={googleDriveDownloadUrlValue} target="_blank">{googleDriveDownloadUrlValue}</a><br/>
                Host Url: <a href={googleDriveHostUrlValue} target="_blank">{googleDriveHostUrlValue}</a>
            </BigContent>
        </Layout>
    )
}
