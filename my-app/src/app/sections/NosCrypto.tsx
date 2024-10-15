'use client';

const supportedCoins = [
  { name: "Bitcoin", symbol: "BTC", logo: "/images/bitcoin.png" },
  { name: "Ethereum", symbol: "ETH", logo: "/images/bitcoin.png" },
  { name: "Litecoin", symbol: "LTC", logo: "/images/bitcoin.png" },
  { name: "Ripple", symbol: "XRP", logo: "/images/bitcoin.png" },
  { name: "Cardano", symbol: "ADA", logo: "/images/bitcoin.png" },
  { name: "Polkadot", symbol: "DOT", logo: "/images/polkadot_.webp" },
  { name: "Dogecoin", symbol: "DOGE", logo: "/images/doge.webp" },
  { name: "Chainlink", symbol: "LINK", logo: "/images/shiba_inu.webp"},
];

const NosCrypto = () => {
  return (
    <section className="py-8 bg-black text-white overflow-hidden">
      <div className="container mx-auto px-4 my-14 mb-24">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 md:mb-12">
          Coins et Blockchains pris en charge
        </h2>
        <div className="relative">
          <div className="hidden md:flex space-x-8">
            {supportedCoins.map((coin) => (
              <div key={coin.symbol} className="flex items-center space-x-2">
                <img src={coin.logo} alt={`${coin.name} logo`} className="w-12 h-12" />
                <div>
                  <h3 className="font-semibold">{coin.name}</h3>
                  <p className="text-gray-500">{coin.symbol}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="flex space-x-12 animate-scroll-left md:hidden">
            {supportedCoins.map((coin) => (
              <div key={coin.symbol} className="flex items-center space-x-2">
                <img src={coin.logo} alt={`${coin.name} logo`} className="w-12 h-12" />
                <div>
                  <h3 className="font-semibold">{coin.name}</h3>
                  <p className="text-gray-500">{coin.symbol}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="flex space-x-12 animate-scroll-right md:hidden absolute top-24 left-0">
            {supportedCoins.map((coin) => (
              <div key={coin.symbol} className="flex items-center space-x-2">
                <img src={coin.logo} alt={`${coin.name} logo`} className="w-12 h-12" />
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
            transform: translateX(-100%);
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
