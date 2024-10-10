import React, { useState } from "react";
import { getPhoto } from "./Contract";

function RetrievePhotoPage() {
    const [photoId, setPhotoId] = useState("");
    const [retrievedIpfsHash, setRetrievedIpfsHash] = useState("");

    const handleGetPhoto = async () => {
        try {
            const hash = await getPhoto(photoId);
            const gatewayUrl = `https://ipfs.io/ipfs/${hash}`;
            setRetrievedIpfsHash(gatewayUrl);
        } catch (error) {
            console.error("Error retrieving photo:", error);
        }
    };

    const handleCopyToClipboard = () => {
        if (retrievedIpfsHash) {
            navigator.clipboard.writeText(retrievedIpfsHash);
            alert("URL copied to clipboard!");
        }
    };

    return (
        <div className="form-container">
            <h2>Retrieve Photo</h2>
            <input
                type="number"
                placeholder="Photo ID"
                value={photoId}
                onChange={(e) => setPhotoId(e.target.value)}
            />
            <button onClick={handleGetPhoto}>Get Photo</button>

            {retrievedIpfsHash && (
                <div className="url-container">
                    <h3>Retrieved IPFS URL:</h3>
                    <div className="url-display">
                        <a href={retrievedIpfsHash} target="_blank" rel="noopener noreferrer">
                            {retrievedIpfsHash}
                        </a>
                    </div>
                    <button className="copy-button" onClick={handleCopyToClipboard}>
                        Copy to Clipboard
                    </button>
                </div>
            )}
        </div>
    );
}

export default RetrievePhotoPage;
