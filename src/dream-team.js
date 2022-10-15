const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
 if (!Array.isArray(members)) return false;
 let res = '';
members = members.map(el => (typeof el ==='string')? el.trim() : el);
 for(let i = 0; i < members.length; i++) {
  if((typeof members[i] === 'string')) {
  res = res + members[i][0]
  }
 }
 return res.toLowerCase().split('').sort().join('').toUpperCase();
}

module.exports = {
  createDreamTeam
};
