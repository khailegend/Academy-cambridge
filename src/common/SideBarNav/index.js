import React from 'react';
import styled from '@emotion/styled';
import { Link as ScrollLink } from 'react-scroll';

const SideBarNavContainer = styled.div`
  background-color: ${(props) => props.backgroundColor || 'transparent'};
  padding: 20px;
  border: ${(props) => props.border || 'none'};
  position: fixed;
  left: 0;
  top: 50%;
  z-index: 10;
  border-radius: 0 12px 12px 0;
  transition: all 0.2s ease-in-out;
  &:hover {
    background-color: ${(props) => props.backgroundColorHover || 'transparent'};
    box-shadow: 0 0 50px #333;
  }
`;

const SideBarNavItem = styled(ScrollLink)`
  font-weight: 700;
  display: block;
  font-size: 30px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  &:hover {
    padding-left: 12px;
    opacity: 1;
  }
`;

const SideBarNav = ({ children, list, offset = 0 }) => {
  return (
    <>
      <SideBarNavContainer
        backgroundColor="transparent"
        backgroundColorHover="#EAB308"
      >
        {list.map((item) => (
          <SideBarNavItem
            key={item.name}
            to={item.url}
            activeClass="text-white opacity-1"
            offset={item.url != 'home' ? offset : 0}
            spy={true}
            smooth={true}
          >
            {item.name}
          </SideBarNavItem>
        ))}
      </SideBarNavContainer>
    </>
  );
};

export default SideBarNav;
