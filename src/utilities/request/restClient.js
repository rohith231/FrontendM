let axios = require("axios");

axios.interceptors.request.use(
  (requestConfig) => {
    console.log(requestConfig);
    requestConfig.headers["Authorization"] = `Bearer ${localStorage.getItem(
      "token"
    )}`;
    return requestConfig;
  },
  (error) => {
    console.log(error);
    return Promise.reject(error);
  }
);

axios.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    console.log(error);
    return Promise.reject(error);
  }
);
function getService(url) {
  axios
    .get(url)
    .then(function (response) {
      console.log("Response-----------", response);
      return response;
    })
    .catch(function (error) {
      console.log("Error-----------", error);
      return error;
    });
}

function postService(url, params) {
  return axios.post(url, params);
}

function putService(url, params) {
  // axios.put(url, params)
  axios
    .request({
      url: url,
      method: "PUT",
      data: params,
    })
    .then(function (response) {
      return response;
    })
    .catch(function (error) {
      return error;
    });
}

function deleteService(url, params) {
  // axios.delete(url, { data: params })
  axios
    .request({
      url: url,
      method: "DELETE",
      data: params,
    })
    .then(function (response) {
      return response;
    })
    .catch(function (error) {
      return error;
    });
}

module.exports = {
  getService: getService,
  postService: postService,
  putService: putService,
  deleteService: deleteService,
};
