import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'utils';

@connect((state)=>({ isAuthenticated: state.auth.isAuthenticated  }))
class TalkView extends React.Component {
  render() {
    return (
        <div className={`${classes.talkView} talk1-view`}>
            Let's Talk
        </div>
    )
  }
}

export {TalkView};
