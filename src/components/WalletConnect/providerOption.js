import WalletConnect from "@walletconnect/web3-provider";
import CoinbaseWalletSDK from "@coinbase/wallet-sdk";
import Torus from "@toruslabs/torus-embed";

export const providerOptions = {
  walletlink: {
    package: CoinbaseWalletSDK, // Required
    options: {
      appName: "TiFi Bank", // Required
      infuraId: "https://mainnet.infura.io/v3/ddc8b2532ae94ed39647bb579f5cf9f6", // Required unless you provide a JSON RPC url; see `rpc` below
    },
  },
  walletconnect: {
    package: WalletConnect, // required
    options: {
      // rpc: {
      //   97: "https://bsc-dataseed.binance.org/",
      // },
      rpc: {
        56: 'https://bsc-dataseed1.binance.org'
      },
      bridge: "https://bridge.walletconnect.org",
      qrcodeModalOptions: {
        mobileLinks: [
          "rainbow",
          "metamask",
          "argent",
          "trust",
          "imtoken",
          "pillar",
        ],// 
      }
    },
  // },
  // "custom-binancechainwallet": {
  //   display: {
  //     logo: "../../assets/img/binance-logo.svg",
  //     name: "Binance Chain Wallet",
  //     description: "Connect to your Binance Chain Wallet"
  //   },
  //   package: true,
  //   connector: async () => {
  //     let provider = null;
  //     if (typeof window.BinanceChain !== 'undefined') {
  //       provider = window.BinanceChain;
  //       try {
  //         await provider.request({ method: 'eth_requestAccounts' })
  //       } catch (error) {
  //         throw new Error("User Rejected");
  //       }
  //     } else {
  //       throw new Error("No Binance Chain Wallet found");
  //     }
  //     return provider;
  //   }
  // },
  // torus: {
  //   package: Torus, // required
  //   options: {
  //     networkParams: {
  //       host: "https://localhost:8545", // optional
  //       chainId: 1337, // optional
  //       networkId: 1337 // optional
  //     },
  //     config: {
  //       buildEnv: "development" // optional
  //     }
  //   }
  }
};
export const networkParams = {
  "0x63564c40": {
    chainId: "0x63564c40",
    rpcUrls: ["https://api.harmony.one"],
    chainName: "Harmony Mainnet",
    nativeCurrency: { name: "ONE", decimals: 18, symbol: "ONE" },
    blockExplorerUrls: ["https://explorer.harmony.one"],
    iconUrls: ["https://harmonynews.one/wp-content/uploads/2019/11/slfdjs.png"],
  },
  "0xa4ec": {
    chainId: "0xa4ec",
    rpcUrls: ["https://forno.celo.org"],
    chainName: "Celo Mainnet",
    nativeCurrency: { name: "CELO", decimals: 18, symbol: "CELO" },
    blockExplorerUrl: ["https://explorer.celo.org"],
    iconUrls: [
      "https://celo.org/images/marketplace-icons/icon-celo-CELO-color-f.svg",
    ],
  },
  "0x38": {
    chainId: "0x38",
    rpcUrls: ["https://bsc-dataseed.binance.org/"],
    chainName: "Binance Smart Chain",
    nativeCurrency: { name: "BNB", decimals: 18, symbol: "BNB" },
    blockExplorerUrl: ["https://bscscan.com"],
    iconUrls: [
      "https://celo.org/images/marketplace-icons/icon-celo-CELO-color-f.svg",
    ],
  },
  "0x61": {
    chainId: "0x61",
    rpcUrls: ["https://data-seed-prebsc-1-s3.binance.org:8545/"],
    chainName: "Binance Smart Chain Testnet",
    nativeCurrency: { name: "TBNB", decimals: 18, symbol: "TBNB" },
    blockExplorerUrl: ["https://testnet.bscscan.com"],
    iconUrls: [
      "https://celo.org/images/marketplace-icons/icon-celo-CELO-color-f.svg",
    ],
  },
};
