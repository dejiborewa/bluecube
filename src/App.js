import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import styled from "styled-components";
import SearchResults from "./components/searchResults";
import Loader from "./components/loader";
import Nav from "./components/nav";
import ana from "./components/assets/ana.jpg";
import bruno from "./components/assets/bruno.jpg";
import riri from "./components/assets/riri.jpg";
import tobi from "./components/assets/tobi.jpg";

const Main = styled.main`
    padding: 1em;

    @media (min-width: 768px) {
        display: flex;
        padding: 2em;
    }

    @media (min-width: 1024px) {
        padding: 3em 5em;
    }
`;

export const Section = styled.section`
    &.subMenu-container {
        display: none;
    }

    @media (min-width: 768px) {
        &.main-section-container {
            width: 80%;
        }

        &.main-section {
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
            width: 23%;
            position: relative;
        }

        &.subMenu-container {
            width: max-content;
            margin-left: auto;
            margin-right: auto;
            display: flex;
            margin-top: 2em;
            background: white;
            box-shadow: 1px 1px 3px 3px var(--color-greyBoxShadow);
        }
    }

    @media (min-width: 1440px) {
        &.subMenu-main {
            width: 95%;
            margin: 2em auto 0;
        }

        &.subMenu-container {
            margin: 0;
        }
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
        justify-content: space-around;
        align-items: center;
    }

    @media (min-width: 768px) {
        &.box-container {
            position: absolute;
            z-index: 3;
            top: 4em;
            right: 0em;
            width: 300px;
            background: white;
            box-shadow: 1px 1px 3px 3px var(--color-greyBoxShadow);
            border-radius: 8px;
        }

        &.box {
            display: flex;
            align-items: center;
            justify-content: space-around;
            padding: 1em;
            cursor: pointer;
        }

        &.box-text {
            width: 70%;
            cursor: pointer;
        }

        &.subMenu {
            display: flex;
            padding: 1em;
            background: white;
            border-left: 2px solid var(--color-greyBoxShadow);
            font-size: 14px;
        }
    }

    @media (min-width: 1440px) {
        &.subMenu {
            padding: 1em 1.5em;
            font-size: 16px;
        }
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

const Form = styled.form`
    @media (min-width: 768px) {
        width: 75%;
    }

    @media (min-width: 1024px) {
        width: 65%;
    }
`;

const Label = styled.label``;
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
    margin-left: ${(props) => (props.box ? "0em" : "1em")};

    @media (min-width: 1024px) {
        margin-left: ${(props) => (props.box ? "0em" : "1.5em")};
    }
`;

const Text = styled.p`
    margin: ${(props) => (props.box ? "0" : "0 0 0 0.5em")};
    color: var(--color-main);
    padding: ${(props) => (props.box ? "0 0.5em" : "0")};
`;

const heartIcon = (
    <svg
        style={{
            display: "inline",
            width: "32px",
            cursor: "pointer",
        }}
        fill="#ccc"
        stroke="#ccc"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1}
            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
        />
    </svg>
);

const messageIcon = (
    <svg
        style={{
            display: "inline",
            width: "32px",
            cursor: "pointer",
        }}
        fill="#5a29e4"
        stroke="#5a29e4"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1}
            d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
        />
    </svg>
);

const notificationData = [
    {
        image: bruno,
        text: "Michael liked you!",
        time: "About 20 minutes ago",
        icon: heartIcon,
    },
    {
        image: riri,
        text: "Jack liked you!",
        time: "About 40 minutes ago",
        icon: heartIcon,
    },
    {
        image: tobi,
        text: "Martin commented on your photo!",
        time: "About 56 minutes ago",
        icon: messageIcon,
    },
];

const subMenu = [
    "World",
    "Following",
    "Popular",
    "Post",
    "Gender",
    "Location",
    "Profession",
];
const Notifications = ({ setNotificationBox }) => {
    const hideBox = () => {
        setNotificationBox(false);
    };

    return (
        <Container className="box-container" onMouseLeave={hideBox}>
            {notificationData.map((data, index) => {
                return (
                    <Container className="box" key={index}>
                        <Image src={data.image} loading="eager" box />
                        <Container className="box-text">
                            <Text box>{data.text}</Text>
                            <Text box>{data.time}</Text>
                        </Container>
                        {data.icon}
                    </Container>
                );
            })}
        </Container>
    );
};

function App() {
    const [data, setData] = useState(false);
    const [value, setValue] = useState("");
    const [notificationBox, setNotificationBox] = useState(false);
    const [initiatedSearch, setInitiatedSearch] = useState(false);
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

    const displayBox = () => {
        setNotificationBox(true);
    };

    const fetchData = async (e) => {
        e.preventDefault();
        setInitiatedSearch(true);
        const baseurl = "https://api.unsplash.com/search/photos";
        const ACCESS_KEY = "HcRy2JXgdkC_6REA7syOG6yExWyeFh8nhEuIHohp-nk";
        const query_params = `client_id=${ACCESS_KEY}&query=${value}&orientation=squarish`;

        try {
            const response = await axios.get(`${baseurl}?${query_params}`);
            setData(response);
        
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

    return (
        <Main>
            <Nav />
            <Section className="main-section-container">
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
                            <Label htmlFor="search-bar"></Label>
                            <Input
                                placeholder="Find Something..."
                                value={value}
                                id="search-bar"
                                onChange={(e) => handleChange(e)}
                                ref={cursorRef}
                                required
                            />
                            <Container
                                className="clear-form"
                                onClick={clearForm}
                            >
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
                            {width >= 768 && (
                                <Button type="submit">Search</Button>
                            )}
                        </SearchBar>
                    </Form>
                    {width >= 768 && (
                        <Section className="user-data">
                            <Container className="user-data-inner">
                                <svg
                                    style={{
                                        display: "inline",
                                        width: "32px",
                                        cursor: "pointer",
                                    }}
                                    fill="#7c3aed"
                                    stroke="#7c3aed"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                    onMouseEnter={displayBox}
                                    onClick={displayBox}
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="1"
                                        d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                                    ></path>
                                </svg>
                                {notificationBox && (
                                    <Notifications
                                        setNotificationBox={setNotificationBox}
                                    />
                                )}
                                <Image
                                    src={ana}
                                    alt="profile-picture"
                                    loading="eager"
                                />
                                {width >= 1024 && <Text>Abigail</Text>}
                            </Container>
                        </Section>
                    )}
                </Section>

                <Section className="subMenu-main">
                    <Section className="subMenu-container">
                        {subMenu.map((menu, index) => {
                            return (
                                <Container className="subMenu" key={index}>
                                    <span>{menu}</span>
                                    <svg
                                        style={{
                                            display: "inline",
                                            width: "16px",
                                            cursor: "pointer",
                                            verticalAlign: "middle",
                                            marginLeft: "4px",
                                        }}
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M19 9l-7 7-7-7"
                                        />
                                    </svg>
                                </Container>
                            );
                        })}
                    </Section>
                </Section>

                {initiatedSearch && (
                    <Section>
                        {data ? <SearchResults data={data} /> : <Loader />}
                    </Section>
                )}
            </Section>
        </Main>
    );
}

export default App;
