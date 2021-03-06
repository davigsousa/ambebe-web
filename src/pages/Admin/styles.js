import styled from 'styled-components';

import bar from '../../assets/bar.jpg';

export const Container = styled.div`
  background-image: url(${bar});
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

export const Checkouts = styled.section`
  flex: 1;
  background-color: white;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  padding: 40px 0;
`;
