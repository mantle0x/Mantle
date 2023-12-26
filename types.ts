// types.ts
// Types used in the Mantle0x module

export interface BlockchainNetwork {
    name: string;
    rpcUrl: string;
    // Additional network properties...
}

export interface Transaction {
    fromNetwork: string;
    toNetwork: string;
    amount: number;
    // Additional transaction properties...
}

export interface SmartContract {
    name: string;
    network: string;
    code: string;
    // Additional contract properties...
}
