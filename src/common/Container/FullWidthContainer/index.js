import styled from '@emotion/styled';
import React from 'react';

const FWContainer = styled.div`
    padding: 0,
    margin: 0,
`;

export default function FullWidthContainer({ children }) {
  return <FWContainer>{children}</FWContainer>;
}
