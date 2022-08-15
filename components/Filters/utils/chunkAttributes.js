import chunk from '@utils/chunk';
import uuid from '@utils/uuid';

const chunkAttributes = (attributes, chunkSize = 5) => {
  let size = chunkSize;
  const moduloAttributes = attributes.length % size;

  if (moduloAttributes !== 0 && moduloAttributes < 2) {
    size = attributes.length;
  }

  return chunk(attributes, size).map(values => ({
    id: uuid(),
    values,
  }));
};

export default chunkAttributes;
