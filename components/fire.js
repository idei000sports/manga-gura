
import { initializeApp } from 'firebase/app'
import { getFirestore} from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAdjq6X7CxFNekJOVt7sl4OTWf_aBbzgXI",
    authDomain: "mangagura-dd395.firebaseapp.com",
    projectId: "mangagura-dd395",
    storageBucket: "mangagura-dd395.appspot.com",
    messagingSenderId: "588220974598",
    appId: "1:588220974598:web:698a945fc0ef93846f2587"
}

export const app = initializeApp(firebaseConfig)
export const db = getFirestore(app);
