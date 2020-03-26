import React from 'react';
//import OrderKitchen from '../components/OrderKitchen';
import ReadyOrdersKitchen from '../components/ReadyOrdersKitchen'
import '../index.css';

//import firebase from '../firebase';

const ReadyView = () => {
    return (
        <main className='container'>
            <ReadyOrdersKitchen />
        </main>
    );
}
export default ReadyView;