import React from 'react';
import { connect } from 'react-redux';
import { startGoogleLogin, startGithubLogin } from '../redux/authActions';
import styled from 'styled-components';
import { Button } from './';
import Google from '../img/google-brands.svg';
import Github from '../img/github-brands.svg';

const LoginPage = ({ startGoogleLogin, startGithubLogin }) => (
    <div>
        <StyledLoginPage>
            <Button 
                primary
                large
                onClick={startGoogleLogin}
            ><img src={Google} alt="Google-logo" />Log in with Google Account
            </Button>
            {/* <Button 
                primary
                large
                onClick={startGithubLogin}
            ><img src={Github} alt="Google-logo" />Log in with Github Account
            </Button> */}
        </StyledLoginPage>
    </div>
);

const StyledLoginPage = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 36px 80px;
    border-radius: 8px;
    padding: 36px 0;
    background-color: ${props => props.theme.colors.white};
    button {
        margin: 8px 0;
    }
    img {
        height: 24px;
        margin-right: 16px;
        color: white;
    }
`;


const mapDispatchToProps = (dispatch) => ({
    startGoogleLogin: () => dispatch(startGoogleLogin()),
    startGithubLogin: () => dispatch(startGithubLogin())
});

export default connect(undefined, mapDispatchToProps)(LoginPage);