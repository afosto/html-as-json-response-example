import ProductDetailsRow from '@components/ProductDetails/components/ProductDetailsRow';
import { Box, Table, TableBody, Typography } from '@mui/material';
import findObjectInArray from '@utils/findObjectInArray';
import PropTypes from 'prop-types';
import { Fragment } from 'react';
import { FormattedMessage } from 'react-intl';
import translations from './translations';

const ProductDetails = ({ details, name }) => {
  const metals = findObjectInArray(details, 'key', 'metals');
  const stones = findObjectInArray(details, 'key', 'stones');

  return (
    <Box mt={5}>
      <Typography variant="h4" mb={2}>
        <FormattedMessage {...translations.title} values={{ name: name.replace(/<br>/g, ' ') }} />
      </Typography>
      <Box backgroundColor="grey.100">
        <Table size="small" sx={theme => ({ borderTop: `1px solid ${theme.palette.grey[300]}` })}>
          <TableBody>
            {(metals?.details || []).map(
              ({ label, details: metalDetails, values: metalValues, key, description }) => (
                <Fragment key={key}>
                  {metalValues.length > 0 && (
                    <ProductDetailsRow
                      label={label}
                      value={metalValues.join(', ')}
                      description={description}
                      key={key}
                    />
                  )}
                  {metalDetails.map(({ key: detailKey, values, description: metalDescription }) => {
                    if (detailKey.indexOf('_label') > 0) {
                      return null;
                    }

                    return (
                      <ProductDetailsRow
                        label={label}
                        value={values.join(', ')}
                        description={metalDescription}
                        key={detailKey}
                      />
                    );
                  })}
                </Fragment>
              ),
            )}
          </TableBody>
        </Table>
      </Box>

      {(stones?.details || []).map(({ details: stoneDetails, key, label }) => (
        <Fragment key={key}>
          <Typography variant="h6" mt={5} mb={1}>
            {label}
          </Typography>
          <Box backgroundColor="grey.100">
            <Table
              size="small"
              sx={theme => ({ borderTop: `1px solid ${theme.palette.grey[300]}` })}
            >
              <TableBody>
                {(stoneDetails || []).map(
                  ({ label: detailLabel, values: detailValues, key: detailKey, description }) => (
                    <Fragment key={detailKey}>
                      {detailValues.length > 0 && (
                        <ProductDetailsRow
                          label={detailLabel}
                          value={detailValues.join(', ')}
                          description={description}
                          key={detailKey}
                        />
                      )}
                    </Fragment>
                  ),
                )}
              </TableBody>
            </Table>
          </Box>
        </Fragment>
      ))}
    </Box>
  );
};

const detailShape = {
  description: PropTypes.string,
  details: PropTypes.arrayOf(PropTypes.object),
  img: PropTypes.string,
  label: PropTypes.string,
  values: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number])),
  visible: PropTypes.bool,
};

ProductDetails.propTypes = {
  details: PropTypes.arrayOf(PropTypes.shape(detailShape)).isRequired,
  name: PropTypes.string.isRequired,
};

ProductDetails.defaultProps = {};

export default ProductDetails;
