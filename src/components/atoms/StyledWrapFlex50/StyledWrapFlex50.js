import styled from 'styled-components';

export const StyledWrapFlex50 = styled.div`
  display: flex;
  flex-direction: column;
  gap: 29px;
  ${({ theme }) => theme.mq.desktop} {
    flex-direction: row;
  }
`;
