import { useCallback, useState } from 'react';

const useFilterState = () => {
  const [open, setOpen] = useState(false);

  const toggleOpen = useCallback(() => {
    setOpen(openState => !openState);
  }, []);

  const handleClose = useCallback(() => {
    setOpen(false);
  }, []);

  return { handleClose, open, setOpen, toggleOpen };
};

export default useFilterState;
