import { connect } from 'react-redux';
import Tetromino from '../components/Tetromino.js';

const CurrentTetrominoContainer = connect (
  (state) => {
    let tmp = state.get('currentTetrominoReducer');
    if(tmp.shape !== undefined) {
      return {
        shape: tmp.shape,
      	name: tmp.name,
      	color: tmp.color,
      	offsetX: tmp.offsetX,
      	offsetY: tmp.offsetY
      }
    } else {
      return {
        shape: [],
      	name: '',
      	color: '',
        offsetX: 0,
      	offsetY: 0,
      }
    }
  },
  (dispatch) => ({

  })
)(Tetromino);

export default CurrentTetrominoContainer;
