import styled from 'styled-components';

export const StyledList = styled.div`
  display: grid;
  row-gap: 40px;
  margin-bottom: 96px;

  ${({ theme }) => theme.mq.desktop} {
    grid-template-columns: 1fr 1fr 1fr;
    row-gap: 32px;
    column-gap: 30px;
    margin-bottom: 160px;
  }
`;
