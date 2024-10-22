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
  { name: "VISA-MASTERCARD", symbol: "MSTCRD", logo: "/images/Crypto/VISAcMASTERCARD.png"},
  { name: "TTogo", symbol: "Ttogo", logo: "/images/Crypto/TTOGO.png"},
  { name: "FreeMoney", symbol: "Free", logo: "/images/Crypto/FREEMONEY.png"},
];

const NosCrypto = () => {
  return (
    <section className="py-8 bg-black text-white overflow-hidden md:min-h-auto min-h-[450px] h-auto">
      <div className="lg:container mx-auto px-4 my-14 mb-20 lg:my-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 md:mb-16">
          <span className="text-[#126e51]">Coins et Blockchains</span> pris en charge
        </h2>
        <div className="relative flex flex-col h-full min-h-fit">
          <div className="hidden lg:flex lg:flex-col lg:space-y-10 justify-center container">
            <div className="lg:flex lg:space-x-24 justify-center container">
              {supportedCoins.slice(0,6).map((coin) => (
                <div key={coin.symbol} className="flex items-center space-x-2">
                  <img src={coin.logo} alt={`${coin.name} logo`} className="w-12 h-12 rounded-full" />
                  <div>
                    <h3 className="font-semibold">{coin.name}</h3>
                    <p className="text-gray-500">{coin.symbol}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="lg:flex lg:space-x-24 justify-center container">
              {supportedCoins.slice(6,13).map((coin) => (
                <div key={coin.symbol} className="flex items-center space-x-2">
                  <img src={coin.logo} alt={`${coin.name} logo`} className="w-12 h-12 rounded-full" />
                  <div>
                    <h3 className="font-semibold">{coin.name}</h3>
                    <p className="text-gray-500">{coin.symbol}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="lg:flex lg:space-x-24 justify-center container">
              {supportedCoins.slice(13,19).map((coin) => (
                <div key={coin.symbol} className="flex items-center space-x-2">
                  <img src={coin.logo} alt={`${coin.name} logo`} className="w-12 h-12 rounded-full" />
                  <div>
                    <h3 className="font-semibold">{coin.name}</h3>
                    <p className="text-gray-500">{coin.symbol}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="flex space-x-16 animate-scroll-left lg:hidden">
            {supportedCoins.slice(0,6).map((coin) => (
              <div key={coin.symbol} className="flex items-center space-x-2">
                <img src={coin.logo} alt={`${coin.name} logo`} className="w-12 h-12 rounded-full" />
                <div>
                  <h3 className="font-semibold">{coin.name}</h3>
                  <p className="text-gray-500">{coin.symbol}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="flex space-x-16 animate-scroll-right lg:hidden absolute top-24 left-0">
            {supportedCoins.slice(6,12).map((coin) => (
              <div key={coin.symbol} className="flex items-center space-x-2">
                <img src={coin.logo} alt={`${coin.name} logo`} className="w-12 h-12 rounded-full" />
                <div>
                  <h3 className="font-semibold">{coin.name}</h3>
                  <p className="text-gray-500">{coin.symbol}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="flex space-x-16 animate-scroll-left lg:hidden absolute top-40 left-0">
            {supportedCoins.slice(12,19).map((coin) => (
              <div key={coin.symbol} className="flex items-center space-x-2">
                <img src={coin.logo} alt={`${coin.name} logo`} className="w-12 h-12 rounded-full" />
                <div>
                  <h3 className="font-semibold">{coin.name}</h3>
                  <p className="text-gray-500">{coin.symbol}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <style jsx>{`
        .animate-scroll-left {
          animation: scroll-left 40s linear infinite;
        }
        .animate-scroll-right {
          animation: scroll-right 40s linear infinite;
        }
        @keyframes scroll-left {
          0% {
            transform: translateX(120%);
          }
          100% {
            transform: translateX(-100%);
          }
        }
        @keyframes scroll-right {
          0% {
            transform: translateX(-120%);
          }
          100% {
            transform: translateX(100%);
          }
        }
      `}</style>
    </section>
  );
};

export default NosCrypto;
