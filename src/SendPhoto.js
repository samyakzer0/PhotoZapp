import React, { useState } from "react";
import { sendPhoto } from "./Contract";

function SendPhotoPage() {
    const [recipient, setRecipient] = useState("");
    const [ipfsHash, setIpfsHash] = useState("");
    const [isEncrypted] = useState(false);

    const handleSendPhoto = async () => {
        try {
            await sendPhoto(recipient, ipfsHash, isEncrypted);
            alert("Photo sent successfully!");
        } catch (error) {
            console.error("Error sending photo:", error);
        }
    };

    return (
        <div className="form-container">
            <h2>Send Photo</h2>
            <input
                type="text"
                placeholder="Recipient Address"
                value={recipient}
                onChange={(e) => setRecipient(e.target.value)}
            />
            <input
                type="text"
                placeholder="IPFS Hash"
                value={ipfsHash}
                onChange={(e) => setIpfsHash(e.target.value)}
            />
          
            <button onClick={handleSendPhoto}>Send Photo</button>
        </div>
    );
}

export default SendPhotoPage;
