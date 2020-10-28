import axios from "axios";
const actions = {
  async get({ dispatch }, { url, params }) {
    let response = null;
    try {
      let shown = false;
      if (this.state.user.authJWT) {
        axios.defaults.headers.common.Authorization =
          "Bearer " + this.state.user.authJWT;
      } else {
        if (localStorage.getItem("jwt")) {
          axios.defaults.headers.common.Authorization =
            "Bearer " + localStorage.getItem("jwt");
        }
      }
      response = await axios.get(url, { params }).catch(function (error) {
        console.log("error", error);
        if (
          error.response &&
          error.response.data &&
          error.response.data.errors
        ) {
          for (const index in error.response.data.errors) {
            for (const index2 in error.response.data.errors[index]) {
              const err = error.response.data.errors[index][index2];
              if (err) {
                shown = true;
                dispatch("snackbar/openError", err, {
                  root: true,
                });
              }
            }
          }
        } else if (
          error.response &&
          error.response.data &&
          error.response.data.detail
        ) {
          shown = true;
          dispatch("snackbar/openError", error.response.data.detail, {
            root: true,
          });
        }
        if (!shown) {
          shown = true;
          dispatch(
            "snackbar/openError",
            "Error occured, please try again later",
            { root: true }
          );
        }
      });
      if (response && response.status === 200) {
        return response.data;
      }

      if (!shown) {
        dispatch(
          "snackbar/openError",
          "Error occured, please try again later",
          { root: true }
        );
      }
    } catch (e) {
      dispatch("snackbar/openError", e.message, { root: true });
    }
  },
  async post({ dispatch }, { url, params, body }) {
    let response = null;
    // console.log('post', url, params)
    try {
      let fd = new FormData();
      for (const index in params) {
        fd.append(index, params[index]);
      }
      if (body) {
        fd = body;
      }
      if (this.state.user.authJWT) {
        axios.defaults.headers.common.Authorization =
          "Bearer " + this.state.user.authJWT;
      } else {
        if (localStorage.getItem("jwt")) {
          axios.defaults.headers.common.Authorization =
            "Bearer " + localStorage.getItem("jwt");
        }
      }
      let shown = false;
      response = await axios.post(url, fd).catch(function (error) {
        if (
          error.response &&
          error.response.data &&
          error.response.data.errors
        ) {
          for (const index in error.response.data.errors) {
            for (const index2 in error.response.data.errors[index]) {
              const err = error.response.data.errors[index][index2];
              if (err) {
                shown = true;
                dispatch("snackbar/openError", err, {
                  root: true,
                });
              }
            }
          }
        } else if (
          error.response &&
          error.response.data &&
          error.response.data.detail
        ) {
          shown = true;
          dispatch("snackbar/openError", error.response.data.detail, {
            root: true,
          });
        } else if (error.response && error.response.status === 401) {
          shown = true;
          dispatch(
            "snackbar/openError",
            "401 Unauthorized, authentication is needed",
            { root: true }
          );
        }
        if (!shown) {
          shown = true;
          dispatch(
            "snackbar/openError",
            "Error occured, please try again later",
            { root: true }
          );
        }
      });

      if (response && response.status === 200 && response.data) {
        return response.data;
      }

      if (!shown) {
        dispatch(
          "snackbar/openError",
          "Error occured, please try again later",
          { root: true }
        );
      }
    } catch (e) {
      dispatch("snackbar/openError", e.message, { root: true });
    }
  },
};

export default {
  namespaced: true,
  actions,
};
