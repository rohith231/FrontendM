import styled from "styled-components";
const loadingPageContainer = styled.div`
    .loaderWrapper {
        width: 100%;
        height: 100%;
        z-index: 99999999;
        position: absolute;
    }

    .loaderWrapper .loader {
        width: 100px;
        height: 100px;
        margin: auto;
        text-align: center;
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        margin: auto;
    }

    .loader small {
        display: block;
        margin-top: 5px;
    }
`;

export default loadingPageContainer;
