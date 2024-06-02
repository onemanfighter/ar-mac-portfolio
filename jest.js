import '@localization/config';
// import './__mocks__/zustand';

jest.useFakeTimers();
jest.mock('zustand');

// Mocking Date
class MockDate extends Date {
  constructor() {
    super('2020-05-14T11:01:58.135'); // add whatever date you'll expect to get
  }
}

global.Date = MockDate;
