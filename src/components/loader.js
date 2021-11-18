import React from "react";
import styled from "styled-components";

const LoaderContainer = styled.div`
    width: 100%;
`;

const LoaderBox = styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    width: 3em;
    height: 3em;
    transform: translate(-50%, -50%);
`;

const Spin = styled.div`
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

const Loader = () => {
    return (
        <LoaderContainer>
            <LoaderBox>
                <Spin></Spin>
            </LoaderBox>
        </LoaderContainer>
    );
};

export default Loader;
