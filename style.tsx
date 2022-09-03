import styled from 'styled-components';
import { Size } from './index';

const FontSize = {
    SMALL:`1rem`,
    MEDIUM:`1.2rem`,
    LARGE:`2rem`
};

export const Style = styled.h1<Size>`
    font-size: ${({ size }: Size) => FontSize[size]};
    color: black;
    margin: 0;
    padding: 0;
`;

export default Style;
