const getFirstLineFromString = (str: string) => {
  return str.split('\n')[0];
};

const getAllStringExceptFirstLine = (str: string) => {
  return str.split('\n').slice(1).join('\n');
};

export { getFirstLineFromString, getAllStringExceptFirstLine };
