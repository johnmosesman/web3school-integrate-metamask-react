import { useState } from "react";
import ConnectWallet from "../components/connect-wallet";
import { useSigner } from "../hooks/use-signer";

export default function Home() {
  const signer = useSigner();

  const [signature, setSignature] = useState<string>();

  return (
    <div>
      <main>
        <h1>Integrate MetaMask into Next.js React App</h1>

        <ConnectWallet />

        {signer && (
          <>
            <h2>Sign a message</h2>
            <p>Signature is: {signature}</p>
            <button
              onClick={async () => {
                const signature = await signer.signMessage("hey");
                setSignature(signature);
              }}
            >
              Sign
            </button>
          </>
        )}
      </main>
    </div>
  );
}
