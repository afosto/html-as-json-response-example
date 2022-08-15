// eslint-disable-next-line no-promise-executor-return
const wait = ms => new Promise(resolve => setTimeout(resolve, ms));

export default wait;
