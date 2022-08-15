import Times from '@icons/Times';
import { useState } from 'react';
import DiamondShapes from '@icons/DiamondShapes';
import InfoSquare from '@icons/InfoSquare';
import { Button, Dialog, DialogContent, DialogTitle, IconButton, Typography } from '@mui/material';

const MultipleSizesExplanation = () => {
  const [showDialog, setShowDialog] = useState(false);

  const handleClose = () => {
    setShowDialog(false);
  };

  const handleOpen = () => {
    setShowDialog(true);
  };

  return (
    <>
      <Button
        color="grayGreen"
        size="small"
        variant="text"
        startIcon={<DiamondShapes />}
        endIcon={<InfoSquare />}
        onClick={handleOpen}
      >
        <Typography variant="bodyMedium">Diverse steengroottes mogelijk</Typography>
      </Button>
      <Dialog open={showDialog} onClose={handleClose}>
        <DialogTitle
          sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}
        >
          Diverse steengroottes mogelijk
          <IconButton aria-label="close" onClick={handleClose}>
            <Times />
          </IconButton>
        </DialogTitle>
        <DialogContent sx={{ pb: 4 }}>
          Als dit icoon bij een sieraad staat is het mogelijk om zelf de grootte van de edelsteen te
          kiezen. Op deze manier is er een sieraad voor ieder budget.
        </DialogContent>
      </Dialog>
    </>
  );
};

export default MultipleSizesExplanation;
