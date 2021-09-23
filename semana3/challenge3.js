function mcd (a,b) {
    if (b === 0 || b < 0) {
      return a;
    };

    if (a === 0 || a < 0) {
      return b;
    }

    return mcd(b, a % b);
};

function mcm (a, b) {
    return (a * b) / mcd(a, b);
};

module.exports = mcm;