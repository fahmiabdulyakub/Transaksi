import axios from 'axios';
import Config from 'react-native-config';

export const getData = () => {
  return new Promise(resolve => {
    axios
      .get(`${Config.API_URL}/frontend-test`)
      .then(result => {
        resolve(result.data);
      })
      .catch(error => {
        console.log(error);
      });
  });
};
