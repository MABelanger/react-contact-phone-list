import { createStore } from 'redux';
import rootReducer from './app/reducers';

const configureStore = () => {
  const persistedSate = {
    contact: {
      id: 1,
      name: 'toto',
      tel: '1234'
    },
    contacts:[
      {
        id: 1,
        name: 'toto1',
        tel: '1234'
      },
      {
        id: 2,
        name: 'toto2',
        tel: '1234'
      }
    ],
    contactFormVisibility: true
  }

  const store = createStore(rootReducer, persistedSate);

  store.subscribe(()=>{
    console.log('store.getState()', store.getState());
  })
  return store;
}

export default configureStore;
