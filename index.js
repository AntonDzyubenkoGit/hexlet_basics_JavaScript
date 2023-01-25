const getHiddenCard = (cardAccount, stars = 4) => `${'*'.repeat(stars)}${cardAccount.slice(-4)}`;

const getHiddenCard_2 = (cardAccount, stars = 4) => {
  return `${'*'.repeat(stars)}${cardAccount.slice(-4)}`;
};

console.log(getHiddenCard_2('123456789123456', 2));
