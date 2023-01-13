import styled from 'styled-components';

export const BannerWrap = styled.section`
  display: grid;
  margin-bottom: 120px;
  row-gap: 24px;

  ${({ theme }) => theme.mq.desktop} {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: ${({ ifGrid }) => (ifGrid ? '1fr 1fr' : '1fr')};
    column-gap: 30px;
    row-gap: 0;
  }
`;
