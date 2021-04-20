const today = new Date();
const nowYear = today.getFullYear();

const theDate = new Date(nowYear , 11, 31);
const diffDate = theDate.getTime() - today.getTime();

const result = Math.ceil(diffDate/(60 * 1000 * 60 * 24));
console.log(`연말까지 ${result}일 남았습니다.`);