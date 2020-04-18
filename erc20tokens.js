// mainnet-localhost

window.widgetERC20Tokens = {
  usdt: {
    address: '0xdac17f958d2ee523a2206206994597c13d831ec7',
    decimals: 6,
    fullName: 'Usdt'
  },
  // Symbol of ERC20 token in lowerCase
  btso: {
    // Address of ERC20 contract
    address: '0x0F4B39dD967Da1Ff19cd5Ee04987E74010B96737',
    // Count of decimals after dot
    decimals: 18,
    // Display name in wallet (By default - its symbol of ERC20, but can be other userfriendy text)
    fullName: 'BTSO',
    // Icon of currency (image)
    icon: 'https://growup.wpmix.net/wp-content/uploads/2016/10/favicon.png',
    // Background color of icon
    iconBgColor: '#ccc',
  }
}

window.buildOptions = {
  ownTokens: true, // Will be inited from window.widgetERC20Tokens
  addCustomERC20: true, // Allow user add custom erc20 tokens
  curEnabled: { // Or 'false' if enabled all
    btc: true,
    eth: true,
    btso: true,
  },
  invoiceEnabled: false, // Allow create invoices
}
