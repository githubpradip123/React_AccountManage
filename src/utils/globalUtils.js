import Snackbar from 'react-native-snackbar';

const globalUtils = {

    showToastMessage(message) {
        Snackbar.show({
            text: message,
            duration: Snackbar.LENGTH_LONG,
            top: 100,
        });

    },

}

export default globalUtils;