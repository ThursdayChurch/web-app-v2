import React from 'react';
import PropTypes from 'prop-types';

import { normalizeUserData } from 'utils';
import { Avatar as UIAvatar } from 'ui-kit';
import { CustomLink } from 'components';

function UserAvatar(props = {}) {
  const { currentUser } = props;
  const { name, src } = normalizeUserData(currentUser);

  return (
    <CustomLink
      href="/profile"
      Component={UIAvatar}
      as="img"
      name={name}
      src={src}
      height="45px"
      width="45px"
    />
  );
}

UserAvatar.propTypes = {
  currentUser: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
};

export default UserAvatar;
