import { Link } from '@tanstack/react-router';
import styled from 'styled-components';

import tokens from '@/design/tokens';

export const HeaderStyled = styled.header`
  background-color: ${tokens.colors.header};
  box-shadow: 0 1px 0.25rem ${tokens.colors.header};
  color: ${tokens.colors.white};
  display: flex;
  font-size: ${tokens.sizes.large};
  margin: 0 0 0.5rem;
  padding: 1rem;
`;

export const Title = styled(Link)`
  color: ${tokens.colors.white};
  display: flex;
  gap: 0.5rem;
  line-height: 1.5rem;
`;

export const Sidebar = styled.span`
  display: flex;
  justify-content: space-evenly;
  margin-left: auto;
`;

export const SidebarItem = styled(Link)`
  color: ${tokens.colors.offWhite};
  font-size: ${tokens.sizes.normal};
  margin-left: 0.5rem;
`;
