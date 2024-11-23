'use client';

const supportedCoins = [
  { name: "Bitcoin", symbol: "BTC", logo: "/images/Cryptos/bitcoin-cryptocurrency.svg" },
  { name: "Bitcoin Cash", symbol: "BCH", logo: "/images/Cryptos/bitcoin-cash-cryptocurrency.svg" },
  { name: "Binance USD", symbol: "BUSD", logo: "/images/Cryptos/binance-usd-busd-logo.png" },
  { name: "Ethereum", symbol: "ETH", logo: "/images/Cryptos/ethereum.png" },
  { name: "Tron", symbol: "TRX", logo: "/images/Cryptos/tron-trx-logo.png" },
  { name: "Litecoin", symbol: "LTC", logo: "/images/Cryptos/litecoin-ltc-logo.png" },
  { name: "Ripple", symbol: "XRP", logo: "/images/Cryptos/rippleXRP.png" },
  { name: "Stellar", symbol: "XLM", logo: "/images/Cryptos/stellar-xlm.svg" },
  { name: "Cardano", symbol: "ADA", logo: "/images/Cryptos/cardano-ada-logo.png" },
  { name: "Polkadot", symbol: "DOT", logo: "/images/polkadot_.webp" },
  { name: "Dogecoin", symbol: "DOGE", logo: "/images/Cryptos/dogecoin-1.svg" },
  { name: "ShibaInu", symbol: "SHIB", logo: "/images/Cryptos/shiba-inu-shib-logo.png"},
  { name: "Binance Coin", symbol: "BNB", logo: "/images/Cryptos/binanceCoin.png" },
  { name: "Monero", symbol: "XMR", logo: "/images/Cryptos/monero-xmr-logo.png" },
  { name: "Tether", symbol: "USDT", logo: "/images/Cryptos/tether-cryptocurrency.svg" },
  { name: "Solana", symbol: "SOL", logo: "/images/Cryptos/solana-sol-logo.png" },
];

const NosCrypto = () => {
  return (
    <section className="py-8 overflow-hidden md:min-h-auto min-h-[450px] h-auto">
      <div className="lg:container mx-auto px-4 my-14 mb-20 lg:my-4">
        <h2 className="text-xl md:text-3xl font-bold text-center mb-8 md:mb-16">
          <span className="text-[#126e51]">Coins et Blockchains</span> pris en charge
          <div className="mt-4 flex justify-center gap-2">
                    <div className="h-1 w-16 bg-[#126e51] rounded-full"></div>
                    <div className="h-1 w-4 bg-[#126e51]/60 rounded-full"></div>
                </div>
        </h2>
        
        <div className="relative flex flex-col h-full min-h-fit">
          {/* Version Desktop */}
          <div className="hidden lg:flex lg:flex-col lg:space-y-10 justify-center container">
            {[0, 5, 10].map((startIndex) => (
              <div key={startIndex} className="lg:flex lg:space-x-24 justify-center container">
                {supportedCoins.slice(startIndex, startIndex + 5).map((coin) => (
                  <div 
                    key={coin.symbol} 
                    className="flex items-center space-x-3 p-4 rounded-xl hover:bg-white hover:shadow-lg transition-all duration-300 
                             group border border-transparent hover:border-emerald-100"
                  >
                    <div className="relative w-12 h-12">
                      <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 to-teal-500/10 rounded-full blur-sm group-hover:blur-md transition-all"></div>
                      <img 
                        src={coin.logo} 
                        alt={`${coin.name} logo`} 
                        data-critical="true" 
                        className="w-12 h-12 rounded-full relative z-10 group-hover:scale-110 transition-transform duration-300" 
                      />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 group-hover:text-emerald-700 transition-colors">{coin.name}</h3>
                      <p className="text-emerald-600">{coin.symbol}</p>
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>

          {/* Version Mobile  */}
          {[0, 5, 10].map((startIndex, index) => (
            <div 
              key={startIndex}
              className={`flex space-x-8 lg:hidden ${index === 1 ? 'animate-scroll-right' : 'animate-scroll-left'} 
                         ${index > 0 ? 'absolute left-0' : ''}`}
              style={{ top: index > 0 ? `${index * 72}px` : '0' }}
            >
              {supportedCoins.slice(startIndex, startIndex + 5).map((coin) => (
                <div 
                  key={coin.symbol} 
                  className="flex items-center space-x-2 min-w-max"
                >
                  <img 
                    src={coin.logo} 
                    alt={`${coin.name} logo`} 
                    className="w-8 h-8 sm:w-10 sm:h-10 rounded-full" 
                  />
                  <div className="flex flex-col">
                    <h3 className="font-medium text-sm sm:text-base text-gray-900">{coin.name}</h3>
                    <p className="text-xs sm:text-sm text-emerald-600">{coin.symbol}</p>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NosCrypto;