import { useEffect, useState } from "react";
import type { JsonRpcSigner } from "@ethersproject/providers";
import { useMetaMask } from "metamask-react";
import { ethers } from "ethers";

export const useSigner = () => {
  const [signer, setSigner] = useState<JsonRpcSigner>();
  const { status } = useMetaMask();

  useEffect(() => {
    if (status === "connected") {
      // A Web3Provider wraps a standard Web3 provider, which is
      // what MetaMask injects as window.ethereum into each page
      const provider = new ethers.providers.Web3Provider(window.ethereum);

      // MetaMask requires requesting permission to connect users accounts
      provider.send("eth_requestAccounts", []).then(() => {
        // The MetaMask plugin also allows signing transactions to
        // send ether and pay to change state within the blockchain.
        // For this, you need the account signer...
        const signer = provider.getSigner();

        setSigner(signer);
      });
    } else {
      setSigner(undefined);
    }
  }, [status]);

  return signer;
};
