import PropTypes from 'prop-types';
import {
  Card,
  BoxImage,
  UserData,
  StateItem,
  StateList,
  Label,
  Quantity,
} from './Profile.styled';

const Profile = props => {
  const { username, tag, location, avatar, stats } = props;
  return (
    <Card>
      <BoxImage>
        <img src={avatar} alt="User avatar" />
        <p>{username}</p>
        <UserData>{tag}</UserData>
        <UserData>{location}</UserData>
      </BoxImage>

      <StateList>
        <StateItem>
          <Label>Followers</Label>
          <Quantity>{stats.followers}</Quantity>
        </StateItem>
        <StateItem>
          <Label>Views</Label>
          <Quantity>{stats.views}</Quantity>
        </StateItem>
        <StateItem>
          <Label>Likes</Label>
          <Quantity>{stats.likes}</Quantity>
        </StateItem>
      </StateList>
    </Card>
  );
};
Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
  }),
};
export default Profile;
