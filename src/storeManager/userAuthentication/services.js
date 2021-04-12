import GlobalConfig from '../../config/globalConfig';
import axios from 'axios';

export const userContact = (payload) => {
  const url = `${GlobalConfig.API_ROOT}/contact`;
  return axios.post(url, { ...payload })
  .then((response) => {
      const responseObj = response.data;
      return responseObj

    }).catch((e) => {
// console.log(e)
    });
};


export const applyOnline = (payload) => () =>{
   const url = `${GlobalConfig.API_ROOT}/registration_form`;
   return axios.post(url, { ...payload })
     .then((response) => {
       const responseObj = response && response.data;
       return responseObj
     }).catch((e) => {
//  console.log(e)
     });
};
 

export const GetFertilizerCompany = (payload) => () =>{
  const url = `${GlobalConfig.API_ROOT}/registration_form`;
  return axios.post(url, { ...payload })
  .then((response) => {
      const responseObj = response.data;
      return responseObj
    }).catch((e) => {
// console.log(e)
    });
};

export const getState = (payload) => () =>{
  const url = `${GlobalConfig.API_ROOT}/state?status=true`;
  return axios.get(url)
  .then((response) => {
      const responseObj = response.data;
      return responseObj
    }).catch((e) => {
// console.log(e)
    });
};

export const getDistrict = (id) => () =>{
  const url = `${GlobalConfig.API_ROOT}/district?status=true&state_id= ${id}`;
  return axios.get(url)
  .then((response) => {
      const responseObj = response.data;
      return responseObj
    }).catch((e) => {
// console.log(e)
    });
};

export const getLookup = () => () => {
  const url = `${GlobalConfig.API_ROOT}/lookup?status=true`;
  return axios.get(url)
  .then((response) => {
      const responseObj = response.data;
      return responseObj
    }).catch((e) => {
// console.log(e)
    });
};

export const getLookupType = (id) => () => {
  const url = `${GlobalConfig.API_ROOT}/lookup?status=true&lookup_type_key=${id}`;
  return axios.get(url)
  .then((response) => {
      const responseObj = response.data;
      return responseObj
    }).catch((e) => {
// console.log(e)
    });
};


export const checkStatus = (phone) => () => {
    const url = `${GlobalConfig.API_ROOT}/registration_form/check-status?phone=${phone}`;
    return axios.get(url)
    .then((response) => {
        const responseObj = response.data;
        return responseObj
      }).catch((e) => {
//   console.log(e)
      });
  };
  


 
 