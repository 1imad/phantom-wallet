async function connect() {
    const isPhantomInstalled = window.solana && window.solana.isPhantom;
    if ("solana" in window) {
        const provider = window.solana;
        if (provider.isPhantom) {
            try {
                const resp = await window.solana.connect();
                //public key => resp.publicKey.toString();
                window.solana.on("connect", () => console.log("connected!"))
            } catch (err) {
                console.log(err);
            }
        }
    } else {
        window.open("https://phantom.app/", "_blank");
    }
}

async function logout() {
    try {
        await window.solana.disconnect();
        window.solana.on('disconnect', () => console.log("disconnected!"))
    } catch (err) {
        console.log(err);
    }
}