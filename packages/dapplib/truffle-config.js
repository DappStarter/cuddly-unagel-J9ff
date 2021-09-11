require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom private boil suggest name rival ridge coconut grace ghost army gather'; 
let testAccounts = [
"0xaa0a99268befcf0d68045a8db94e5535a16bf6686cf75fc7bf8f7bb8eb07c9ad",
"0x3e019119f35decf7f2ad0d42598eb27bdb0ee18c2e1344e3af45d7a080e3edbb",
"0xd836e7bf390c282908fff94bd38abea0ca2058f6af69c6fdab3407358d1b434d",
"0xa05bbf45d72f0af80b5f765f77df7ee805ca7dff071d323f6cd81859a609126e",
"0x2f6108a8057832f5101e1b813338fc8e4ac6b621de15863dd559f589f7277610",
"0x992bee69691941e9c9fd3ec7d6450220c26feafd5dd955c83e2ad305d71ae2e3",
"0x2967c4ee90ba27a687d2a728806219d61c9c123ba5203048a08a8a82b36d2d6f",
"0x2bea268e6771c5199379c98c2c7a9f94a31a4d4e07a6145f0fec960357e278ed",
"0x32724a4e40b82f7cafc71a35005b6821fef450714ce780c862859806a1bf1c03",
"0xe1ed715768b1b849f1a7c03290adfa199943fd32670bc09aa55bda94fa075746"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

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
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


