import styled from 'styled-components';
import { MEDIA } from '..';

export const Container = styled.div`
  color: white;
  background-color: black;
  border-top: solid 2px gray;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px 0;
`;

export const Text = styled.p`
  ${MEDIA} {
    font-size: 14px;
  }
`;
