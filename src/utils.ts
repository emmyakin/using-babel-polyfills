export default class TestClass {
  constructor() {}

  usePromise() {
    return new Promise((resolve) => {
      resolve('using promise');
    });
  }
  useMap() {
    const newMap = new Map();
    newMap.set('key', 'value');
    return newMap;
  }

  useSet() {
    const newSet = new Set();
    newSet.add('value');
    return newSet;
  }
}


async function createTestClass() {
  const testClass = new TestClass();
  return await testClass.usePromise()
}