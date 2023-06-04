import Profile from './User/Profile';
import Statistics from './Statistics/Statistics';
import FriendList from './FriendList/FriendList';


import user from './path/user.json';
import data from './path/data.json';
import friends from './path/friends.json'




export const App = () => {
  return (
    <div
      style={{
        height: '100%',
        display: 'flex',
        flexDirection:'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding:15,
        fontSize: 40,
        color: '#010101',
        backgroundColor: '#C0C0C0',
      }}
    >
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <Statistics stats={data} />
      <FriendList friends={friends}/>
    </div>
  );
};
