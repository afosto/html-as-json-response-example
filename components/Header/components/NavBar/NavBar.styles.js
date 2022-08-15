import styled from '@emotion/styled';
import { Paper } from '@mui/material';

export const Wrapper = styled.div`
  position: relative;
`;

export const Menu = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 32px;
  padding-top: 16px;
  padding-bottom: 16px;
  margin-top: 0;
  margin-bottom: 0;
  margin-left: 0;
  list-style: none;
`;

export const Item = styled.li`
  &.active .nav-sub-menu {
    visibility: visible;
    opacity: 1;
  }
`;

export const ItemLink = styled.a``;

export const SubMenu = styled(Paper)`
  position: absolute;
  left: 0;
  right: 0;
  min-width: 150px;
  visibility: hidden;
  opacity: 0;
  padding-top: ${props => props.theme.spacing(6)};
  padding-bottom: ${props => props.theme.spacing(8)};
  background-color: ${props => props.theme.palette.common.white};
  border-radius: 0;
  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.3);
  transition: ${props =>
    props.theme.transitions.create(['opacity'], {
      duration: props.theme.transitions.duration.shortest,
      easing: props.theme.transitions.easing.easeInOut,
    })};
`;

export const SubMenuMenu = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${props => props.theme.spacing(5)};
`;

export const SubMenuMenuList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 16px;
  position: relative;
  list-style: none;
  padding: 0;

  &:not(:last-of-type)::before {
    position: absolute;
    top: 0;
    left: 100%;
    width: 1px;
    height: 100%;
    margin-left: 20px;
    content: '';
    background-color: ${props => props.theme.palette.grayGreen['50']};
  }
`;
