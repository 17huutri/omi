import React, { useState } from "react";

const ZaloPaySandboxIntegration = () => {
    const [transactionId, setTransactionId] = useState("");
    const [amount, setAmount] = useState("");
    const [description, setDescription] = useState("");

    const handlePay = async () => {
        try {
            const response = await fetch("https://sandbox.zalopay.com.vn/v001/tpe/createorder", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": "Bearer your_access_token" // Replace with your access token
                },
                body: JSON.stringify({
                    app_id: "your_app_id", // Replace with your app ID
                    app_trans_id: transactionId,
                    app_user: "user_id", // Replace with user ID
                    app_time: new Date().toISOString(),
                    app_amount: amount,
                    item: description,
                    embed_data: {}
                })
            });
            const data = await response.json();
            console.log(data); // Handle response data
        } catch (error) {
            console.error("Error:", error); // Handle error
        }
    };

    return (
        <div>
            <h2>Zalo Pay Sandbox Integration</h2>
            <div>
                <label>Transaction ID:</label>
                <input type="text" value={transactionId} onChange={(e) => setTransactionId(e.target.value)} />
            </div>
            <div>
                <label>Amount (VND):</label>
                <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} />
            </div>
            <div>
                <label>Description:</label>
                <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} />
            </div>
            <button onClick={handlePay}>Pay with Zalo Pay</button>
        </div>
    );
};

export default ZaloPaySandboxIntegration;
