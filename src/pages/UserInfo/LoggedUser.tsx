import React, { useState } from 'react';
import { Typography, Box } from '@material-ui/core';
import { useTypedSelector } from '@/hook/useTypedSelector';
import { PageWrapper } from '@/components/common/Containers/PageWrapper';
import { ButtonAddUser } from '../../components/Buttons/ButtonAddUser';
import { CopyPopup } from '@/components/UIkit/CopyPopup';
import { Icon } from '@/components/common/Icon';
import IconCopy from '@/assets/svg/iconCopy.svg';
import background from '@/assets/img/background_account_info.png';

const flexWrapperStyle: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
};

const bgWrapperStyle = {
  backgroundSize: 'contain',
  backgroundPosition: 'right',
};

export const LoggedUser = () => {
  const [copyStatus, setCopyStatus] = useState(false);
  const { token } = useTypedSelector((state) => state.user);
  const { tokenInList } = useTypedSelector((state) => state.userList);

  const formattedToken = `${token!.substr(0, 20)}...`;

  const closePopup = () => {
    setCopyStatus(false);
  };

  const copy = () => {
    setCopyStatus(true);
  };

  return (
    <>
      <PageWrapper bgUrl={background} flexStyle={flexWrapperStyle} bgStyle={bgWrapperStyle}>
        <Typography variant="h1">Account</Typography>

        <Box display="flex" alignItems="center" mt={2.5}>
          <Icon>
            <IconCopy onClick={copy} />
          </Icon>

          <Box ml={1}>
            <Typography variant="body1">Token:</Typography>
          </Box>

          <Box ml={1}>
            <Typography variant="subtitle1">{formattedToken}</Typography>
          </Box>
        </Box>

        {!tokenInList && <ButtonAddUser token={token!} />}
      </PageWrapper>

      <CopyPopup copyStatus={copyStatus} copyData={token!} onClose={closePopup} />
    </>
  );
};
