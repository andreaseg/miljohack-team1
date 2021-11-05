import axios from 'axios'

async function getHouse(id) {
  try {
    const response = await axios.get('https://backend-dot-miljohack-krak1.ew.r.appspot.com/houses/'+id);
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

async function getEnergyProfile(id) {
  try {
    const response = await axios.get('https://backend-dot-miljohack-krak1.ew.r.appspot.com/houses/'+id+'/energy');
    return response.data.features;
  } catch (error) {
    console.error(error);
  }
}

async function postHouse(data) {
  try {
    const response = await axios.post('https://backend-dot-miljohack-krak1.ew.r.appspot.com/houses', data);
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

const exports = { getHouse, postHouse, getEnergyProfile }

export default exports;