import firebase from 'firebase';
import {config} from './keys';

try{
    firebase.initializeApp(config);

}catch(e){

}

export const firebaseRef = firebase.database().ref();
export default firebase;