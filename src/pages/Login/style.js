import styled from 'styled-components';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';

export const FullScreenContainer = styled('div')`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ghostwhite;
`;

export const FormWrapper = styled(Paper)`
  padding: 30px;
  width: 400px;
  box-sizing: border-box;
`;

export const FormLogo = styled('img')`
  display: flex;
  justify-content: center;
  margin: 0 auto;
  max-width: 250px;
`;

export const FormButton = styled(Button)`
  /* force to override style */
  && {
    margin-top: 20px ;
    border-radius: 15px ;
  }
`;