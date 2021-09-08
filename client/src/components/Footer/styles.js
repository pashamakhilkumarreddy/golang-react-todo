import styled from 'styled-components';

const Footer = styled.footer.withConfig({
    displayName: 'Footer'
})`
    position: absolute;
    width: 100vw;
    bottom: -6rem;
    padding: 1.5rem !important;
    border-top: 1px solid #dd;
`;

export default Footer;
