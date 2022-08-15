import styled from '@emotion/styled';

export const Wrapper = styled.div`
  position: relative;
  z-index: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 320px;

  ${props => props.theme.breakpoints.up('sm')} {
    min-height: 400px;
  }
`;

export const ImageWrapper = styled.span`
  span {
    z-index: -1;

    &::before {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      content: '';
      background-color: rgba(0, 0, 0, 0.35);
      z-index: 1;
    }
  }
`;
