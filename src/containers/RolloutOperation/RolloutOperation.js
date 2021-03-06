import React from 'react';
import { connect } from 'react-redux';
import Button from 'react-bootstrap/Button';
import { AiFillPlayCircle } from 'react-icons/ai';
import { HiPause } from 'react-icons/hi';
import { GiStopSign } from 'react-icons/gi';

import { selectAction } from 'ducks/modules/rolloutOperation';

import './RolloutOperation.css';

const RolloutOperation = ({ onActionSelected }) => (
  <div className='action-buttons'>
    <Button variant='outline-primary' onClick={() => onActionSelected('start')}>
      <AiFillPlayCircle />
      Start
    </Button>
    <Button
      variant='outline-secondary'
      onClick={() => onActionSelected('pause')}
    >
      <HiPause />
      Pause
    </Button>
    <Button variant='outline-danger' onClick={() => onActionSelected('abort')}>
      <GiStopSign />
      Abort
    </Button>
  </div>
);

const mapDispatchToProps = dispatch => ({
  onActionSelected: action => dispatch(selectAction(action)),
});

export default connect(null, mapDispatchToProps)(RolloutOperation);
