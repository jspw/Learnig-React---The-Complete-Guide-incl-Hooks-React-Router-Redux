import  {createStore} from 'redux';
import userInfoReducer from '../reducers/userInfoReducer';

const store = createStore(userInfoReducer);

export default store;

