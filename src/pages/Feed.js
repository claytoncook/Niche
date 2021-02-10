import './Feed.scss';
import { useAuthContext, signOutUser } from '../AuthContext';
import { Redirect } from 'react-router';

function Feed() {
  const { auth, dispatch } = useAuthContext();

  return auth.user ? (
    <div className="Feed">
      Feed...
      <form onSubmit={() => dispatch(signOutUser)}>
        <button type="submit">Sign Out</button>
      </form>
    </div>
  ) : (
      <Redirect to={{ pathname: '/login' }} />
    );
}

export default Feed;