module.exports = async () => {
  console.log('GLOBAL TEARDOWN START');

  await global.testPgContainer.stop();

  console.log('GLOBAL TEARDOWN END');
};
