//import firebase from './firebase';

export const updateCount = (amount) => {
    return {
        type: "UPDATE_COUNT",
        payload: amount
    }
}

export const updateDevice = (width) => {
    //console.log('update device width:', width);
    var device;
    
    if (width > 992) {
        //console.log('desktop')
        device = 'desktop';
    } else if (width > 768) {
        //console.log('md')
        device = 'md';
    } else {
        //console.log('sm')
        device = 'sm';
    }
    
    return {
        type: "UPDATE_DEVICE",
        payload: device
    }
}