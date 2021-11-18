import React, { useState } from "react";
import styled from "styled-components";

const SearchImages = styled.img`
    width: 100%;
    height: 100%;
    margin-bottom: 1em;
    border-radius: 8px;

    @media (min-width: 768px) {
        margin-bottom: 0;
    }
`;

const ImagesContainer = styled.div`
    margin-top: 2em;

    @media (min-width: 768px) {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        gap: 1em;
    }

    @media (min-width: 1024px) {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
        grid-template-rows: 1fr 1fr;
        gap: 1em 2em;
    }
`;

const Container = styled.div`
    &.images {
        position: relative;
    }

    &.details-container {
        position: absolute;
        top: 0;
        width: 100%;
        height: calc(100% - 1em);
        background: linear-gradient(transparent 70%, rgba(50, 50, 50, 0.3));
    }

    &.details {
        position: absolute;
        top: 80%;
        width: inherit;
    }

    &.like-page {
        background: white;
    }
`;

const Bio = styled.p`
    color: ${(props) => (props.like ? "var(--color-main)" : "white")};
    font-size: 18px;
    font-weight: 700;
    margin: 0;
    vertical-align: middle;
    margin-left: 8px;
`;
const Location = styled(Bio)`
    font-size: 12px;
`;

const SearchResults = ({ data }) => {
    const [mouseEntered, setMouseEntered] = useState(false);

    const handleMouseEnter = (e) => {
        
    }

    return (
        <ImagesContainer>
            {data.data.results.map((result, index) => {
                return (
                    <React.Fragment key={index}>
                        <Container
                            data-id={index}
                            className="images"
                            onMouseEnter={(e) => handleMouseEnter(e)}
                            onMouseLeave={(e) => handleMouseLeave(e)}
                        >
                            <SearchImages src={result.urls.small} />

                            {!mouseEntered ? (
                                <Container className="details-container">
                                    <Container className="details">
                                        <Bio>{result.user.first_name}</Bio>
                                        <Location>
                                            <svg
                                                style={{
                                                    display: "inline",
                                                    width: "16px",
                                                    verticalAlign: "middle",
                                                    marginRight: "4px",
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
                                                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                                                />
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={1}
                                                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                                                />
                                            </svg>
                                            {result.user.location}
                                        </Location>
                                    </Container>
                                </Container>
                            ) : (
                                <Container className="like-page">
                                    <Bio like>{result.user.first_name}</Bio>
                                    <Location like>
                                        <svg
                                            style={{
                                                display: "inline",
                                                width: "16px",
                                                verticalAlign: "middle",
                                                marginRight: "4px",
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
                                                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                                            />
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={1}
                                                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                                            />
                                        </svg>
                                        {result.user.location}
                                    </Location>
                                </Container>
                            )}
                        </Container>
                    </React.Fragment>
                );
            })}
        </ImagesContainer>
    );
};

export default SearchResults;
