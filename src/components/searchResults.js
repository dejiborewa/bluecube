import React from "react";
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
        z-index: 3;
    }

    @media (min-width: 1024px) {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
        grid-template-rows: 1fr 1fr;
        gap: 2em;
        z-index: 3;
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
        height: calc(100% - 20px);
        background: linear-gradient(transparent 70%, rgba(50, 50, 50, 0.3));
        border-radius: 8px;
    }

    &.details {
        position: absolute;
        top: 75%;
        width: 100%;
    }

    &.like-page {
        background: white;
    }

    @media (min-width: 768px) {
        &.details-container {
            height: 100%;
        }
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
    padding-right: 1em;
`;

const SearchResults = ({ data }) => {
    return (
        <ImagesContainer>
            {data.data.results.map((result, index) => {
                return (
                    <React.Fragment key={index}>
                        <Container data-id={index} className="images">
                            <SearchImages src={result.urls.small} />

                            <Container className="details-container">
                                <Container className="details">
                                    <Bio>
                                        {result.user.first_name.length > 10
                                            ? result.user.first_name.substr(
                                                  0,
                                                  10
                                              )
                                            : result.user.first_name}
                                    </Bio>
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
                                        {result.user.location
                                            ? result.user.location
                                            : "none"}
                                    </Location>
                                </Container>
                            </Container>
                        </Container>
                    </React.Fragment>
                );
            })}
        </ImagesContainer>
    );
};

export default SearchResults;
