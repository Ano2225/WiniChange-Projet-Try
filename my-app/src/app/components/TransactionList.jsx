import React from 'react';

const transactions = [
  {
    id: 1,
    amount: '1130574.07',
    image: '/images/p_1.png',
    currencyImage: '/images/Mtn.png',
    status: 'Reçue avec succès',
  },
  {
    id: 2,
    amount: '0.0513674',
    image: '/images/p_2.png',
    currencyImage: '/images/bitcoin.png',
    status: 'Reçue avec succès',
  },
  {
    id: 3,
    amount: '0.51135747',
    image: '/images/p_3.png',
    currencyImage: '/images/Ether.png',
    status: 'Reçue avec succès',
  },
  {
    id: 4,
    amount: '413974.67',
    image: '/images/p_4.png',
    currencyImage: '/images/Moov.png',
    status: 'Reçue avec succès',
  },
];

const Transaction = ({ amount, image, currencyImage, status }) => (
  <div className="flex items-center p-4  shadow-lg rounded-lg space-x-4 animate-fadeIn">
    <div className="w-16 h-16">
      <img className="w-full h-full object-cover rounded-full" src={image} alt="Transaction User" />
    </div>
    <div className="flex-1">
      <div className="flex items-center space-x-2">
        <h6 className="text-lg font-semibold text-gray-800">{amount}</h6>
        <img src={currencyImage} className="w-6 h-6" alt="Fiat Or Crypto" />
      </div>
      <div className="flex items-center space-x-2 mt-1">
        <p className="text-sm text-green-600">{status}</p>
        <span className="text-green-500">
          <svg width="12" height="13" viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M6 12.152C9.31368 12.152 12 9.46569 12 6.15201C12 2.8383 9.31368 0.152008 6 0.152008C2.68629 0.152008 0 2.8383 0 6.15201C0 9.46569 2.68629 12.152 6 12.152ZM8.1213 4.03069C8.35566 3.79637 8.73552 3.79637 8.96988 4.03069C9.20418 4.265 9.20418 4.6449 8.96988 4.87922L5.57796 8.27109L5.57574 8.27331C5.51514 8.33391 5.44482 8.37885 5.36976 8.40813C5.26344 8.44953 5.1477 8.45955 5.03688 8.43807C4.92342 8.41611 4.81506 8.36121 4.72721 8.27331L4.72493 8.27103L3.03017 6.57627C2.79585 6.34197 2.79585 5.96205 3.03017 5.72775C3.26448 5.49345 3.64438 5.49345 3.87869 5.72775L5.15148 7.00053L8.1213 4.03069Z" fill="#008080"></path>
          </svg>
        </span>
      </div>
    </div>
  </div>
);

const TransactionList = () => (
  <>
    {transactions.map(transaction => (
      <Transaction key={transaction.id} {...transaction} />
    ))}
    <div className="absolute left-0 bottom-0">
      <svg width="116" height="110" viewBox="0 0 116 110" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M89.3547 20.6016C78.8113 22.1384 68.1617 23.1728 58.4621 32.4789C50.4928 40.1249 43.8859 53.13 52.9823 54.9562C64.6435 57.2973 69.5967 43.9722 64.0525 40.1252C58.65 36.3765 44.868 41.2416 39.6346 50.1249C34.0249 59.647 33.4641 76.65 39.8633 92.2933" stroke="#008080" strokeOpacity="0.5" strokeWidth="2" strokeLinecap="round"></path>
        <path d="M87.7183 23.8947L90.7359 20.1792L87.1219 18.1728" stroke="#008080" strokeWidth="2" strokeLinecap="round"></path>
      </svg>
    </div>
    <div className="absolute right-0 bottom-0">
      <svg width="105" height="98" viewBox="0 0 105 98" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M20.9965 78.9201C30.8147 78.0927 40.7028 77.735 50.1778 69.6889C57.9625 63.0782 64.7901 51.4443 56.4961 49.2486C45.8636 46.4338 40.5444 58.4558 45.4463 62.3176C50.2229 66.0807 63.2171 62.3628 68.5458 54.4565C74.2577 45.9817 75.7287 30.3186 70.699 15.5203" stroke="#008080" strokeOpacity="0.5" strokeWidth="2" strokeLinecap="round"></path>
        <path d="M22.6914 75.9722L19.6977 79.2326L22.921 81.2872" stroke="#008080" strokeWidth="2" strokeLinecap="round"></path>
      </svg>
    </div>
  </>
);

export default TransactionList;
