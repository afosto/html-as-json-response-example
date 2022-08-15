import AngleLeft from '@icons/AngleLeft';
import { Button, Typography } from '@mui/material';
import { useRouter } from 'next/router';
import { FormattedMessage } from 'react-intl';
import translations from './translations';

const BackButton = () => {
  const router = useRouter();

  return (
    <Button
      size="small"
      startIcon={<AngleLeft sx={{ color: 'grayStone.700' }} />}
      onClick={() => router.back()}
      sx={{ mr: 3.5, mt: 0.25 }}
    >
      <Typography color="grayStone.700" variant="bodyMedium" fontWeight="bold">
        <FormattedMessage {...translations.back} />
      </Typography>
    </Button>
  );
};

export default BackButton;
