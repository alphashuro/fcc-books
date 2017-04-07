import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import styled from 'styled-components';

const PageContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	height: 80vh;
`;

export default ({ onGoogleSignin }) => (
	<PageContainer>
		<RaisedButton label="Sign in with Google" onClick={onGoogleSignin} />
	</PageContainer>
);
