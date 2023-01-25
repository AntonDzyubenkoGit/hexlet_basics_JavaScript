const truncate = (string, count) => {
  return `${string.slice(0, count)}...`;
};

console.log(truncate('и пошла вода', 5));