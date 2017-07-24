import { connect } from 'react-redux';

import Tracks from './tracks';
import { requestAllTracks } from '../../../actions/track_actions';
import { enqueuePlayback } from '../../../actions/playback_actions';
import { selectAllTracks } from '../../../reducers/selectors';

const mapStateToProps = (state) => ({
  currentUser: state.session.currentUser,
});

const mapDispatchToProps = (dispatch) => ({
  requestAllTracks: () => dispatch(requestAllTracks()),
  enqueuePlayback: (tracks) => dispatch(enqueuePlayback(tracks)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Tracks);
