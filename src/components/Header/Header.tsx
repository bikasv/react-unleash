import styled from 'styled-components';

import tokens from '@/design/tokens';

const HeaderStyled = styled.header`
  background-color: ${tokens.colors.header};
  box-shadow: 0 1px 0.25rem ${tokens.colors.header};
  color: ${tokens.colors.white};
  display: flex;
  font-size: 1.25rem;
  margin: 0 0 0.5rem;
  padding: 1rem;
`;

type HeaderProps = {
  title?: string;
};

export function Header({ title = 'React Seed' }: HeaderProps) {
  return (
    <HeaderStyled>
      {title}
    </HeaderStyled>
  );
}
