import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import styled from "styled-components";
import Nav from "./components/nav";
import ana from "./components/ana.jpg";

const LoaderContainer = styled.div`
    width: 100%;
    height: 100vh;
`;

const LoaderBox = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    width: 5em;
    height: 5em;
    transform: translate(-50%, -50%);
`;

const Loader = styled.div`
    width: 100%;
    height: 100%;
    border: 2px solid var(--color-main);
    border-color: var(--color-main) transparent var(--color-main) transparent;
    border-radius: 50%;
    animation: spin 1s linear infinite;

    @keyframes spin {
        0% {
            transform: rotate(0deg);
        }

        100% {
            transform: rotate(360deg);
        }
    }
`;

const Main = styled.main`
    padding: 1em;

    @media (min-width: 768px) {
        display: flex;
        padding: 2em;
    }

    @media (min-width: 1024px) {
        padding: 3em 3em 3em 7em;
    }
`;

export const Section = styled.section`
    @media (min-width: 768px) {
        &.main-section {
            width: 80%;
            display: flex;
            justify-content: space-between;
        }

        &.user-data {
            width: 15%;
            position: relative;
        }
    }

    @media (min-width: 1024px) {
        &.user-data {
            width: 20%;
            position: relative;
        }
    }
`;
const SearchBar = styled.div`
    display: flex;
    justify-content: space-around;
    background: white;
    padding: 0.7em 0.5em;
    box-shadow: 1px 1px 3px 3px var(--color-greyBoxShadow);
    border-radius: 8px;

    @media (min-width: 768px) {
        justify-content: space-between;
        padding: 0.3em 1em;
    }
`;

const Input = styled.input`
    border: none;
    outline: none;
    padding: 1em 0;
    font-family: var(--font-family);

    @media (min-width: 768px) {
        font-size: 18px;
    }
`;

export const Container = styled.div`
    &.clear-form {
        position: relative;
        min-width: 28px;
    }

    &.user-data-inner {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        display: flex;
        justify-content: space-between;
    }
`;

const Form = styled.form`
    @media (min-width: 768px) {
        width: 75%;
    }

    @media (min-width: 1024px) {
        width: 65%;
    }
`;

const Button = styled.button`
    background: var(--color-main);
    color: white;
    border: none;
    outline: none;
    padding: 0 2em;
    border-radius: 8px;

    @media (min-width: 768px) {
        margin: 0.7em 0;
    }
`;

const Image = styled.img`
    width: 32px;
    height: 32px;
    border-radius: 50%;
    margin-left: 1em;

    @media (min-width: 1024px) {
        margin-left: 3em;
    }
`;

function App() {
    const [data, setData] = useState(true);
    const [value, setValue] = useState("");
    const cursorRef = useRef(null);

    const [width, setWidth] = useState(
        window.innerWidth || document.documentElement.clientWidth
    );

    const handleChange = (e) => {
        setValue(e.target.value);
    };

    const clearForm = () => {
        if (value) {
            setValue("");
        }
    };

    const checkWidth = () => {
        setWidth(window.innerWidth || document.documentElement.clientWidth);
    };

    const fetchData = async (e) => {
        e.preventDefault();
        const baseurl = "https://api.unsplash.com/search/photos";
        const ACCESS_KEY = "HcRy2JXgdkC_6REA7syOG6yExWyeFh8nhEuIHohp-nk";
        const query_params = `client_id=${ACCESS_KEY}&query=${value}`;

        try {
            const response = await axios.get(`${baseurl}?${query_params}`);
            console.log(response);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        cursorRef.current.focus();
    }, []);

    useEffect(() => {
        window.onresize = checkWidth;
    });

    if (!data) {
        return (
            <LoaderContainer>
                <LoaderBox>
                    <Loader></Loader>
                </LoaderBox>
            </LoaderContainer>
        );
    }

    return (
        <Main>
            <Nav />
            <Section className="main-section">
                <Form onSubmit={(e) => fetchData(e)}>
                    <SearchBar>
                        <svg
                            style={{ width: "28px" }}
                            fill="none"
                            stroke="#bcb8b1"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                            ></path>
                        </svg>
                        <Input
                            placeholder="Find Something..."
                            value={value}
                            onChange={(e) => handleChange(e)}
                            ref={cursorRef}
                            required
                        />
                        <Container className="clear-form" onClick={clearForm}>
                            {value.length >= 1 && (
                                <svg
                                    style={{
                                        width: "28px",
                                        position: "absolute",
                                        top: "50%",
                                        transform: "translateY(-50%)",
                                    }}
                                    fill="none"
                                    stroke="#bcb8b1"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M6 18L18 6M6 6l12 12"
                                    ></path>
                                </svg>
                            )}
                        </Container>
                        {width >= 768 && <Button>Search</Button>}
                    </SearchBar>
                </Form>
                {width >= 768 && (
                    <Section className="user-data">
                        <Container className="user-data-inner">
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
                                    strokeWidth="1"
                                    d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                                ></path>
                            </svg>
                            <Image src={ana} alt="profile-picture" />
                        </Container>
                    </Section>
                )}
            </Section>
        </Main>
    );
}

export default App;
