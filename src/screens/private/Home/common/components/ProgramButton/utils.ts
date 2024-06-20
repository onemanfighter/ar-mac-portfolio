const getIconSize = (size: number) => {
  const minSize = 4;
  const maxSize = 16;

  return minSize + (size / 100) * (maxSize - minSize);
};

export { getIconSize };
