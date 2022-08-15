import clsx from 'clsx';
import PropTypes from 'prop-types';
import * as Styled from './Flag.styles';
import flagSprite from './flag-sprite.png';

const Flag = ({ iso, className, ...props }) => (
  <Styled.FlagBase
    {...props}
    className={clsx(className, { [iso.toUpperCase()]: iso })}
    img={flagSprite.src}
  />
);

Flag.propTypes = {
  className: PropTypes.string,
  iso: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number,
};

Flag.defaultProps = {
  className: undefined,
  iso: undefined,
  width: 16,
  height: undefined,
};

export default Flag;
