import PropTypes from 'prop-types';

import { FriendsList,FriendItem,Signal } from './FriendList.styled';

const FriendList = props => {
  const FriendsArray = props.friends;

  return (
    <FriendsList>
      {FriendsArray.map(({ avatar, name, isOnline, id }) => {
        return (
          <FriendItem key={id}>
            <Signal style={{backgroundColor:isOnline ? 'green':'red'}}></Signal>
            <img  src={avatar} alt="User avatar" width="48" />
            <p>{name}</p>
          </FriendItem>
        );
      })}
    </FriendsList>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      name: PropTypes.string.isRequired,
    })
  ),
};
export default FriendList;
