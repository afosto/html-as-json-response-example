import { Times } from '@icons/index';
import { TabContext, TabList, TabPanel } from '@mui/lab';
import { Box, Dialog, Divider, IconButton, Tab } from '@mui/material';
import NextImage from 'next/image';
import PropTypes from 'prop-types';
import { useState } from 'react';

const a11yProps = index => ({
  id: `simple-tab-${index}`,
  'aria-controls': `simple-tabpanel-${index}`,
});

const ProductSizeDrawings = ({ drawings }) => {
  const [showSizeDrawings, setShowSizeDrawings] = useState(false);
  const [activeTab, setActiveTab] = useState(0);

  const handleOpenSizeDrawingsDialog = () => setShowSizeDrawings(true);
  const handleCloseSizeDrawingsDialog = () => setShowSizeDrawings(false);

  const handleChangeTab = (e, newValue) => setActiveTab(newValue);

  return (
    <>
      <Box
        component="button"
        display="block"
        backgroundColor="transparent"
        border={0}
        position="absolute"
        top={20}
        right={20}
        py={1}
        mt={-1}
        sx={{ cursor: 'pointer' }}
        onClick={handleOpenSizeDrawingsDialog}
      >
        <svg viewBox="0 0 96 54" width={44} height={24}>
          <path
            fill="#000"
            fillRule="evenodd"
            d="M.8 20.8h95v21H.8v-21zm1.4 1.4v18h6.4v-7.7h2.8v7.8h5.7V27.9h2.8v12.4h5.7v-7.8h2.8v7.8h5.7V27.9h2.8v12.4h5.7v-7.8h2.8v7.8h5.8V27.9H54v12.4h5.7v-7.8h2.8v7.8h5.7V27.9H71v12.4h5.7v-7.8h2.8v7.8h5.7V27.9H88v12.4h6.4v-18H2.2z"
            clipRule="evenodd"
          />
          <path
            fill="#000"
            d="M18 46.5l-1.6 1.4-.8-1 2.5-2.1h1.3V53H18v-6.5zM32.8 51.6l3.2-3.1.3-.3.3-.3.2-.4.1-.4-.1-.5-.3-.3-.4-.2-.5-.1-.9.3c-.2.2-.4.5-.4.8l-1.5-.1c0-.4.1-.7.3-1l.6-.7.8-.4a3.6 3.6 0 012-.1l.8.4.6.7.2 1c0 .5-.1 1-.4 1.3l-.9 1.1-2.5 2.4h3.8V53h-5.5v-1.4h.2zM51.6 48.2h1l.5-.2.4-.3.1-.6c0-.3-.1-.6-.3-.8-.2-.2-.6-.3-.9-.3l-.7.2-.5.7-1.5-.4.4-.8.6-.5.8-.3.9-.1 1 .1.8.4.6.7.2 1c0 .4-.1.8-.4 1.2-.2.3-.6.6-1 .7.5.1.9.3 1.2.7.3.4.4.8.4 1.3l-.2 1-.6.8c-.3.2-.5.4-.9.5l-1 .2-1-.1-.8-.3-.6-.6c-.2-.2-.3-.5-.4-.9l1.5-.4c.1.3.2.6.5.8.2.2.5.3.9.3l.5-.1.4-.3.3-.4.1-.5-.2-.6-.4-.4-.6-.2H51.8v-1.5h-.2zM69.3 51.4h-3.5V50l3.3-5.2h1.6v5.3h1.2v1.3h-1.2v1.7h-1.4v-1.7zm0-4.5l-2.1 3.3h2.1v-3.3zM89.4 46.2h-3.3v1.6l.4-.1h.5l1.1.2.9.6.6.9.2 1.1-.2 1.2c-.1.4-.4.6-.6.9l-.9.6-1.2.2c-.7 0-1.2-.2-1.7-.5s-.8-.8-1-1.4l1.5-.4.5.7c.2.2.5.3.9.3l.6-.1.5-.3.3-.4.1-.6-.2-.7-.4-.5-.6-.3-.7-.1-.9.1-.8.3.1-4.4h4.3v1.1zM8.6 1.4h1.8l5 11.6H13l-1.1-2.7h-5l-1 2.7H3.6l5-11.6zm2.6 7.1L9.4 3.8 7.6 8.5h3.6zM17.2 6.8h-1.6V5.1h1.6V4l.1-1.5.4-1.1c.2-.3.5-.6.9-.7.4-.2.9-.3 1.5-.3l1.2.1-.1 1.7-.4-.1h-.4l-.7.1-.4.4-.2.5v2h1.8v1.7h-1.8V13h-2V6.8h.1zM22.2 5.1h1.9v1.2l.8-1c.4-.3.9-.4 1.6-.4 1.2 0 2.1.5 2.5 1.5.3-.5.6-.9 1.1-1.1.4-.2.9-.4 1.5-.4.5 0 1 .1 1.3.3.3.2.7.4.9.7l.5 1.1.1 1.3V13h-2V8.5l-.1-.7-.2-.6-.4-.4-.7-.1-.8.2-.5.5-.3.7-.1.7v4.3h-2V8.4c0-.5-.1-.9-.3-1.2-.2-.3-.6-.4-1-.4l-.8.2-.6.4-.3.6-.1.8v4.3h-2v-8zM38.1 9.7c.1.6.3 1 .7 1.4a2.4 2.4 0 002.6.2l.9-.8 1.4 1.1c-.5.6-1 1-1.5 1.2-.5.2-1.2.4-1.8.4a5 5 0 01-1.7-.3l-1.4-.8a3.8 3.8 0 01-1.2-3 3.8 3.8 0 011.2-3c.4-.4.8-.6 1.4-.8.5-.2 1.1-.3 1.7-.3l1.5.3c.5.2.8.5 1.2.8.4.3.6.8.8 1.3.2.5.3 1.1.3 1.8v.5h-6.1zm4-1.5c0-.6-.2-1-.5-1.4-.3-.4-.8-.5-1.5-.5a2 2 0 00-1.4.5 2 2 0 00-.6 1.4h4zM45 6.8V5.1h1.6V2.8h2v2.3h2.2v1.7h-2.2v3.4l.2.9c.1.2.4.3.9.3l.6-.1.5-.2v1.7l-.8.2-.8.1-1.3-.2-.8-.5c-.2-.2-.3-.5-.4-.9l-.1-1.2V6.7l-1.6.1zM52.1 2.4c0-.3.1-.6.4-.8.2-.2.5-.4.9-.4s.7.1.9.3c.2.2.4.5.4.8 0 .3-.1.6-.4.8-.2.2-.5.3-.9.3s-.7-.1-.9-.4c-.3 0-.4-.3-.4-.6zm.2 2.7h2V13h-2V5.1zM56.6 5.1h1.8v1.3c.2-.4.5-.7.9-1 .4-.3.9-.4 1.6-.4.5 0 1 .1 1.3.3.3.2.7.4.9.7l.5 1 .1 1.2v5h-2v-4-.7l-.2-.8a2 2 0 00-.4-.6c-.2-.2-.5-.2-.8-.2l-.8.2-.6.4c-.2.1-.3.4-.3.6l-.1.8v4.3h-2l.1-8.1zM74.1 5.1v7.2c0 .7-.1 1.4-.3 1.9-.2.5-.4 1-.8 1.4-.4.4-.8.7-1.4.9a7.6 7.6 0 01-4.1 0 4 4 0 01-1.8-1l1.2-1.6c.4.4.8.6 1.2.8.4.2.9.3 1.5.3l1.2-.2.8-.5.4-.8.1-1.1v-.6c-.3.4-.7.7-1.1.9a4 4 0 01-3 0c-.5-.2-.9-.5-1.2-.9l-.8-1.3c-.2-.5-.3-1-.3-1.6 0-.6.1-1.1.3-1.6.2-.5.4-.9.8-1.3.3-.4.7-.7 1.2-.9.5-.2 1-.3 1.6-.3.6 0 1.1.1 1.6.3.5.2.9.6 1.1 1V4.9h1.8v.2zm-4.2 1.6l-1 .2-.7.5-.5.7a3 3 0 00-.2 1l.2.9.5.7.7.5.9.2a3 3 0 001-.2l.7-.5.5-.7.2-.9c0-.7-.2-1.2-.6-1.7-.4-.5-1-.7-1.7-.7zM77.9 9.7c.1.6.3 1 .7 1.4a2.4 2.4 0 002.6.2l.9-.8 1.4 1.1c-.5.6-1 1-1.5 1.2-.5.2-1.2.4-1.8.4a5 5 0 01-1.7-.3l-1.4-.8a3.8 3.8 0 01-1.2-3 3.8 3.8 0 011.2-3c.4-.4.8-.6 1.4-.8.5-.2 1.1-.3 1.7-.3l1.5.3c.5.2.8.5 1.2.8l.8 1.3c.2.5.3 1.1.3 1.8v.5h-6.1zm4-1.5c0-.6-.2-1-.5-1.4-.3-.3-.8-.5-1.5-.5a2 2 0 00-1.4.5 2 2 0 00-.6 1.4h4zM85.7 5.1h1.9v1.3c.2-.4.5-.7.9-1 .4-.3.9-.4 1.6-.4.5 0 1 .1 1.3.3.3.2.7.4.9.7l.5 1 .1 1.2v5h-2v-4-.7l-.2-.8-.4-.6c-.2-.2-.5-.2-.8-.2l-.8.2-.6.4c-.2.1-.3.4-.3.6l-.1.8v4.3h-2V5.1z"
          />
        </svg>
      </Box>
      <Dialog
        open={showSizeDrawings}
        fullWidth
        maxWidth="md"
        onClose={handleCloseSizeDrawingsDialog}
      >
        <TabContext value={activeTab}>
          <Box display="flex" alignItems="center" pr={1}>
            <TabList onChange={handleChangeTab}>
              {drawings.map(({ type }, idx) => (
                <Tab
                  label={type === 'size_drawing_metric' ? 'Millimeters' : 'Inches'}
                  {...a11yProps(idx)}
                />
              ))}
            </TabList>
            <IconButton sx={{ ml: 'auto' }} onClick={handleCloseSizeDrawingsDialog}>
              <Times />
            </IconButton>
          </Box>
          <Divider />
          {drawings.map(({ src }, idx) => (
            <TabPanel value={idx} sx={{ p: 0 }}>
              <NextImage src={src} width={1280} height={720} layout="intrinsic" />
            </TabPanel>
          ))}
        </TabContext>
      </Dialog>
    </>
  );
};

ProductSizeDrawings.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  drawings: PropTypes.arrayOf(PropTypes.object),
};

ProductSizeDrawings.defaultProps = {
  drawings: [],
};

export default ProductSizeDrawings;
