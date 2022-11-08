import { useMetaMask } from "metamask-react";

export default function ConnectWallet() {
  const { status, connect, account, chainId, ethereum } = useMetaMask();

  return (
    <>
      <h2>MetaMask status</h2>

      {status === "unavailable" && (
        <p>
          <a href="https://metamask.io/">Click here</a> to install MetaMask
        </p>
      )}

      {status === "connecting" && <p>Connecting...</p>}

      {status === "connected" && (
        <div>
          Connected account {account} on chain ID {chainId}
        </div>
      )}

      {status === "notConnected" && (
        <button onClick={connect}>Connect to MetaMask</button>
      )}
    </>
  );
}
