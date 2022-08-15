import styled from '@emotion/styled';

export const Wrapper = styled.div`
  position: relative;
  z-index: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100px;

  ${props => props.theme.breakpoints.up('sm')} {
    min-height: 250px;
  }
`;

export const ImageWrapper = styled.span`
  span {
    z-index: -1;

    ${props => props.theme.breakpoints.up('sm')} {
      &:before {
        content: '';
        position: absolute;
        background-color: rgba(97, 116, 99, 0.6);
        width: 60vw;
        height: 100%;
        z-index: 1;
        left: -150px;
        transform: skew(40deg);
      }
    }
  }
`;
