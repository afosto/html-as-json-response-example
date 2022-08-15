import { Box } from '@mui/material';

const ProductDivider = props => (
  <Box
    {...props}
    sx={{
      '&::before': {
        display: 'block',
        content: '""',
        width: 60,
        height: '1px',
        backgroundColor: '#000',
      },
    }}
  />
);

export default ProductDivider;
