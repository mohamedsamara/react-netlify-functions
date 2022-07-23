export const createEmptyBlob = () => {
  const parts = [
    new Blob([], {
      type: 'text/plain',
    }),
    new Uint16Array([33]),
  ];

  const empty = new File(parts, '');

  return empty;
};
