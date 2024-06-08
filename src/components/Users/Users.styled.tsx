import styled from 'styled-components';

import tokens from '@/design/tokens';

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const Card = styled.div`
  border: 1px solid ${tokens.colors.tagLight};
  border-radius: 0.5rem;
  box-shadow: 0 3px 5px ${tokens.colors.tagLight};
  flex: 1 0 calc(50% - 1rem);
  margin: 0 1rem 1rem 0;
  padding: 1rem;
  position: relative;

  > p {
    margin-bottom: 0.5rem;
  }
`;

export const StyledName = styled.p`
  align-items: center;
  display: flex;
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 0;
`;

export const StyledUsername = styled.span`
  margin-left: 0.25rem;
  font-size: 1rem;
  font-weight: normal;
`;
