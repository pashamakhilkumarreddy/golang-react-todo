import styled from 'styled-components';

const Header = styled.header.withConfig({
    displayName: 'Header',
})`
    border-bottom: 1px solid #ddd;
    box-shadow: 0 0 0 2px rgba(0, 0, 0, 0.1);
`;

export default Header;