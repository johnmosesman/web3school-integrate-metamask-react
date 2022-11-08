import { ExternalProvider, JsonRpcFetchFunc } from "@ethersproject/providers";

global {
  interface Window {
    ethereum: ExternalProvider | JsonRpcFetchFunc;
  }
}
