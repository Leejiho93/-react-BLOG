import styled from 'styled-components';

export const RigthUl = styled.ul`
    list-style: none;
    display: 'flex';
    flex-flow: column nowrap;
    background-color: #0D2538;
    position: fixed;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
    top: 100px;
    right: 0;
    height: 100vh;
    width: 200px;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;
    opacity: .2;
    z-index: 500;

    & li {
        padding: 18px 10px;
        color: #fff;
        cursor: pointer;
    }

    & a {
        text-decoration: none;
        color: #fff;
    }

    @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: #0D2538;
    position: fixed;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
    top: 100px;
    right: 0;
    height: 100vh;
    width: 200px;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;
    opacity: .2;
    z-index: 500;
}`;