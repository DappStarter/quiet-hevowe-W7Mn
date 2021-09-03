require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'imitate prize flock tribe story crawl super upon gown light army gift'; 
let testAccounts = [
"0x854bb6d2e9bd95eec8559c767576b7b8f31fad8ab7fc4c0add7ff1b8340be8d4",
"0xc8d64438df2f44d8ba5c7d0c55db18dba3a726526d87050bb1ae6e723f5a9fda",
"0x07f7789bbd2c9b2343116e82ac012414ac847b5126c65501849431c2b72999be",
"0x2153d4d9841be7625a8bab1eee406ee3ed90d9c8386e3aadb4a832a31533782b",
"0xa53f4c8dd27ebfdbb30ce6622034253db3685d49536e19a64186112626623b4f",
"0xc30590a1375c7b589ce2f3ae8f1b1bb8ab23e1caa08016936c2f2a128988476b",
"0xf30c7820b20eafc2f12b3af5769a95cb285cafa4add77c3d934e7e088a3bd541",
"0x15af6d61f6710e5fccc26e7a1f528c64f634104c8639e026b11868daed1f3c7a",
"0x51b9911e05101bcb9a00a3ef685eee1bbb1998a28841f6a4296af4bb63c69d94",
"0xeb262e7eca703014ce5b458fcddef64901edd7345936e148c702f8c520d5e955"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

