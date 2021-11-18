import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Section } from "../App";
import ana from "./assets/ana.jpg";

const NavBar = styled.nav`
    display: flex;
    justify-content: space-between;

    @media (min-width: 768px) {
        display: block;
        width: 20%;
        border-right: 1px soild var(--color-aux);
    }
`;

const Name = styled.h1`
    font-weight: 900;
    color: var(--color-main);
`;

const Modal = styled.div`
    display: flex;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 3;
`;

const Menu = styled.div`
    min-width: 70%;
    height: 100%;
    padding: 1em;
    background: white;
    color: var(--color-aux);

    @media (min-width: 768px) {
        background: inherit;
    }
`;

const MenuItem = styled.div`
    margin: 1em 0;
`;

const TextSmall = styled.p`
    display: inline;
    margin-left: 7px;
    vertical-align: top;

    &:focus {
        border: 1px solid var(--color-aux);
        border-radius: 8px;
    }
`;

const CloseModal = styled.div`
    min-width: 30%;
    min-height: 100vh;
    background: #cad2c5;
    opacity: 0.5;
`;

const CancelContainer = styled.div`
    display: flex;
    justify-content: flex-end;
    margin-bottom: 1em;
`;

const Title = styled.h3`
    color: var(--color-main);
    font-weight: 900;
`;

const Image = styled.img`
    width: 50px;
    height: 50px;
    border-radius: 50%;
`;

const NavModal = ({ setIsModalOpen }) => {
    return (
        <Modal>
            <CloseModal onClick={() => setIsModalOpen(false)} />

            <Menu>
                <CancelContainer onClick={() => setIsModalOpen(false)}>
                    <svg
                        style={{
                            display: "inline",
                            width: "24px",
                        }}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="3"
                            d="M6 18L18 6M6 6l12 12"
                        ></path>
                    </svg>
                </CancelContainer>

                <Section
                    style={{
                        display: "flex",
                        justifyContent: "space-between",
                        marginTop: "2em",
                    }}
                >
                    <svg
                        style={{
                            display: "inline",
                            width: "32px",
                        }}
                        fill="#7c3aed"
                        stroke="#7c3aed"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                        ></path>
                    </svg>
                    <Image src={ana} alt="profile-picture" loading="eager" />
                </Section>

                <Section>
                    <MenuItem>
                        <svg
                            style={{
                                display: "inline",
                                width: "24px",
                            }}
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="1"
                                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                            ></path>
                        </svg>
                        <TextSmall>Home</TextSmall>
                    </MenuItem>

                    <MenuItem>
                        <svg
                            style={{
                                display: "inline",
                                width: "24px",
                            }}
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="1"
                                d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
                            ></path>
                        </svg>
                        <TextSmall>Messages</TextSmall>
                    </MenuItem>
                </Section>

                <Section>
                    <Title>SHARE</Title>

                    <MenuItem>
                        <svg
                            style={{
                                display: "inline",
                                width: "24px",
                            }}
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="1"
                                d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                            ></path>
                        </svg>
                        <TextSmall>Ranking</TextSmall>
                    </MenuItem>

                    <MenuItem>
                        <svg
                            style={{
                                display: "inline",
                                width: "24px",
                            }}
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path d="M12 14l9-5-9-5-9 5 9 5z"></path>
                            <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"></path>
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="1"
                                d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                            ></path>
                        </svg>
                        <TextSmall>Challenge</TextSmall>
                    </MenuItem>

                    <MenuItem>
                        <svg
                            style={{
                                display: "inline",
                                width: "24px",
                            }}
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="1"
                                d="M21 15.546c-.523 0-1.046.151-1.5.454a2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.701 2.701 0 00-1.5-.454M9 6v2m3-2v2m3-2v2M9 3h.01M12 3h.01M15 3h.01M21 21v-7a2 2 0 00-2-2H5a2 2 0 00-2 2v7h18zm-3-9v-2a2 2 0 00-2-2H8a2 2 0 00-2 2v2h12z"
                            ></path>
                        </svg>
                        <TextSmall>Party</TextSmall>
                    </MenuItem>

                    <MenuItem>
                        <svg
                            style={{
                                display: "inline",
                                width: "24px",
                            }}
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="1"
                                d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
                            ></path>
                        </svg>
                        <TextSmall>Connect</TextSmall>
                    </MenuItem>

                    <MenuItem>
                        <svg
                            style={{
                                display: "inline",
                                width: "24px",
                            }}
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="1"
                                d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122"
                            ></path>
                        </svg>
                        <TextSmall>Parade</TextSmall>
                    </MenuItem>

                    <MenuItem>
                        <svg
                            style={{
                                display: "inline",
                                width: "24px",
                            }}
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="1"
                                d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                            ></path>
                        </svg>
                        <TextSmall>Group</TextSmall>
                    </MenuItem>
                </Section>
            </Menu>
        </Modal>
    );
};

function Nav() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const [width, setWidth] = useState(
        window.innerWidth || document.documentElement.clientWidth
    );

    const checkWidth = () => {
        setWidth(window.innerWidth || document.documentElement.clientWidth);
    };

    const openModal = () => {
        setIsModalOpen(true);
    };

    useEffect(() => {
        window.onresize = checkWidth;
    });

    return (
        <>
            {width < 768 ? (
                <NavBar>
                    <Name>bluecube</Name>
                    <svg
                        style={{ width: "32px" }}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                        onClick={openModal}
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="1"
                            d="M4 6h16M4 12h16m-7 6h7"
                        ></path>
                    </svg>
                    {isModalOpen && (
                        <NavModal setIsModalOpen={setIsModalOpen} />
                    )}
                </NavBar>
            ) : (
                <NavBar>
                    <Name>bluecube</Name>

                    <Menu>
                        <Section>
                            <MenuItem>
                                <svg
                                    style={{
                                        display: "inline",
                                        width: "24px",
                                    }}
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="1"
                                        d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                                    ></path>
                                </svg>
                                <TextSmall>Home</TextSmall>
                            </MenuItem>

                            <MenuItem>
                                <svg
                                    style={{
                                        display: "inline",
                                        width: "24px",
                                    }}
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="1"
                                        d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
                                    ></path>
                                </svg>
                                <TextSmall>Messages</TextSmall>
                            </MenuItem>
                        </Section>

                        <Section>
                            <Title>SHARE</Title>

                            <MenuItem>
                                <svg
                                    style={{
                                        display: "inline",
                                        width: "24px",
                                    }}
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="1"
                                        d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                                    ></path>
                                </svg>
                                <TextSmall>Ranking</TextSmall>
                            </MenuItem>

                            <MenuItem>
                                <svg
                                    style={{
                                        display: "inline",
                                        width: "24px",
                                    }}
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M12 14l9-5-9-5-9 5 9 5z"></path>
                                    <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"></path>
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="1"
                                        d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                                    ></path>
                                </svg>
                                <TextSmall>Challenge</TextSmall>
                            </MenuItem>

                            <MenuItem>
                                <svg
                                    style={{
                                        display: "inline",
                                        width: "24px",
                                    }}
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="1"
                                        d="M21 15.546c-.523 0-1.046.151-1.5.454a2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.701 2.701 0 00-1.5-.454M9 6v2m3-2v2m3-2v2M9 3h.01M12 3h.01M15 3h.01M21 21v-7a2 2 0 00-2-2H5a2 2 0 00-2 2v7h18zm-3-9v-2a2 2 0 00-2-2H8a2 2 0 00-2 2v2h12z"
                                    ></path>
                                </svg>
                                <TextSmall>Party</TextSmall>
                            </MenuItem>

                            <MenuItem>
                                <svg
                                    style={{
                                        display: "inline",
                                        width: "24px",
                                    }}
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="1"
                                        d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
                                    ></path>
                                </svg>
                                <TextSmall>Connect</TextSmall>
                            </MenuItem>

                            <MenuItem>
                                <svg
                                    style={{
                                        display: "inline",
                                        width: "24px",
                                    }}
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="1"
                                        d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122"
                                    ></path>
                                </svg>
                                <TextSmall>Parade</TextSmall>
                            </MenuItem>

                            <MenuItem>
                                <svg
                                    style={{
                                        display: "inline",
                                        width: "24px",
                                    }}
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="1"
                                        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                                    ></path>
                                </svg>
                                <TextSmall>Group</TextSmall>
                            </MenuItem>
                        </Section>
                    </Menu>
                </NavBar>
            )}
        </>
    );
}

export default Nav;
