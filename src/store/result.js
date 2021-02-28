export const state = () => ({
  lastVisitor: {},
});

export const mutations = {
  setLastVisitor(state, lastVisitor) {
    state.lastVisitor = lastVisitor;
  },
};

export const actions = {
  async GetResults({ dispatch }, { code, pass, captcha }) {
    const ret = await dispatch(
      "axios/post",
      {
        url: this.state.config.VUE_CONFIG_APP_API + "Result/Get",
        params: { code, pass, captcha },
      },
      { root: true }
    );
    return ret;
  },
  async ResendResult({ dispatch }, { code, pass, captcha }) {
    const ret = await dispatch(
      "axios/post",
      {
        url: this.state.config.VUE_CONFIG_APP_API + "Result/ResendResult",
        params: { code, pass, captcha },
      },
      { root: true }
    );
    return ret;
  },

  async GetNextTest({ dispatch }) {
    return await dispatch(
      "axios/get",
      {
        url: this.state.config.VUE_CONFIG_APP_API + "Result/GetNextTest",
      },
      { root: true }
    );
  },
  async ListExportableDays({ dispatch }) {
    return await dispatch(
      "axios/get",
      {
        url: this.state.config.VUE_CONFIG_APP_API + "Result/ListExportableDays",
      },
      { root: true }
    );
  },

  async FinalDataExport({ dispatch }, { day }) {
    let name = "sick-all.csv";
    if (day && day.length > 10) {
      name =
        "sick-" +
        day.substr(0, 4) +
        day.substr(5, 2) +
        day.substr(8, 2) +
        ".csv";
    }
    return await dispatch(
      "axios/download",
      {
        url: this.state.config.VUE_CONFIG_APP_API + "Result/FinalDataExport",
        params: { day },
        name: name,
        type: "get",
      },
      { root: true }
    );
  },
  async ListTestedVisitors({ dispatch }, { day }) {
    let name = "tested-all.csv";
    if (day && day.length > 10) {
      name =
        "tested-" +
        day.substr(0, 4) +
        day.substr(5, 2) +
        day.substr(8, 2) +
        ".csv";
    }
    return await dispatch(
      "axios/download",
      {
        url: this.state.config.VUE_CONFIG_APP_API + "Result/ListTestedVisitors",
        params: { day },
        name: name,
        type: "get",
      },
      { root: true }
    );
  },

  async ProofOfWorkExport({ dispatch }, { day }) {
    let name = "nczi-all.csv";
    if (day && day.length > 10) {
      name =
        "nczi-" +
        day.substr(0, 4) +
        day.substr(5, 2) +
        day.substr(8, 2) +
        ".csv";
    }
    return await dispatch(
      "axios/download",
      {
        url: this.state.config.VUE_CONFIG_APP_API + "Result/ProofOfWorkExport",
        params: { day },
        name: name,
        type: "get",
      },
      { root: true }
    );
  },
  async DownloadPDF({ dispatch }, { code, pass, captcha }) {
    return await dispatch(
      "axios/download",
      {
        url: this.state.config.VUE_CONFIG_APP_API + "Result/DownloadPDF",
        params: { code, pass, captcha },
        name: "result.pdf",
        type: "post",
      },
      { root: true }
    );
  },
  async PrintCertificateByDocumentManager(
    { dispatch },
    { registrationCode, personalNumber }
  ) {
    return await dispatch(
      "axios/download",
      {
        url:
          this.state.config.VUE_CONFIG_APP_API +
          "Result/PrintCertificateByDocumentManager",
        params: { registrationCode, personalNumber },
        name: "result.pdf",
        type: "post",
      },
      { root: true }
    );
  },
  async Enqueued({ dispatch }, { code, pass, captcha }) {
    return await dispatch(
      "axios/post",
      {
        url: this.state.config.VUE_CONFIG_APP_API + "Visitor/Enqueued",
        params: { code, pass, captcha },
      },
      { root: true }
    );
  },

  async ListVisitorsInProcess({ dispatch }, { day }) {
    let name = "in-process-all.csv";
    if (day && day.length > 10) {
      name =
        "in-process-" +
        day.substr(0, 4) +
        day.substr(5, 2) +
        day.substr(8, 2) +
        ".csv";
    }
    return await dispatch(
      "axios/download",
      {
        url:
          this.state.config.VUE_CONFIG_APP_API + "Result/ListVisitorsInProcess",
        params: { day },
        name: name,
        type: "get",
      },
      { root: true }
    );
  },
  async ListAllVisitorsWhoDidNotCome({ dispatch }, { day }) {
    let name = "visisotrs-did-not-come-all.csv";
    if (day && day.length > 10) {
      name =
        "visisotrs-did-not-come-" +
        day.substr(0, 4) +
        day.substr(5, 2) +
        day.substr(8, 2) +
        ".csv";
    }
    return await dispatch(
      "axios/download",
      {
        url:
          this.state.config.VUE_CONFIG_APP_API +
          "Result/ListAllVisitorsWhoDidNotCome",
        params: { day },
        name: name,
        type: "get",
      },
      { root: true }
    );
  },
  async ListAllVisitors({ dispatch }, { day }) {
    let name = "all-visitors-all.csv";
    if (day && day.length > 10) {
      name =
        "all-visitors-" +
        day.substr(0, 4) +
        day.substr(5, 2) +
        day.substr(8, 2) +
        ".csv";
    }
    return await dispatch(
      "axios/download",
      {
        url: this.state.config.VUE_CONFIG_APP_API + "Result/ListAllVisitors",
        params: { day },
        name: name,
        type: "get",
      },
      { root: true }
    );
  },

  async ExportResultSubmissions({ dispatch }, { day }) {
    let name = "result-submissions-all.csv";
    if (day && day.length > 10) {
      name =
        "result-submissions-" +
        day.substr(0, 4) +
        day.substr(5, 2) +
        day.substr(8, 2) +
        ".csv";
    }
    return await dispatch(
      "axios/download",
      {
        url:
          this.state.config.VUE_CONFIG_APP_API +
          "Result/ExportResultSubmissions",
        params: { day },
        name: name,
        type: "get",
      },
      { root: true }
    );
  },
  async ListAnonymizedVisitors({ dispatch }, { day }) {
    let name = "all-visitors-anonimized-all.csv";
    if (day && day.length > 10) {
      name =
        "all-visitors-anonimized-" +
        day.substr(0, 4) +
        day.substr(5, 2) +
        day.substr(8, 2) +
        ".csv";
    }
    return await dispatch(
      "axios/download",
      {
        url:
          this.state.config.VUE_CONFIG_APP_API +
          "Result/ListAnonymizedVisitors",
        params: { day },
        name: name,
        type: "get",
      },
      { root: true }
    );
  },

  async RemoveFromDocQueue({ dispatch }, { testId }) {
    return await dispatch(
      "axios/post",
      {
        url: this.state.config.VUE_CONFIG_APP_API + "Result/RemoveFromDocQueue",
        params: { testId },
      },
      { root: true }
    );
  },
  async RemoveTest({ dispatch }, { code, pass, captcha }) {
    return await dispatch(
      "axios/post",
      {
        url: this.state.config.VUE_CONFIG_APP_API + "Result/RemoveTest",
        params: { code, pass, captcha },
      },
      { root: true }
    );
  },
  async SetResults({ dispatch }, { testCode, result }) {
    return await dispatch(
      "axios/post",
      {
        url: this.state.config.VUE_CONFIG_APP_API + "Result/SetResult",
        params: { testCode, result },
      },
      { root: true }
    );
  },
  async GetVisitor({ dispatch, commit }, { visitorCode }) {
    const ret = await dispatch(
      "axios/post",
      {
        url: this.state.config.VUE_CONFIG_APP_API + "Result/GetVisitor",
        params: { visitorCode },
      },
      { root: true }
    );
    commit("setLastVisitor", ret);
    return ret;
  },
  async VerifyResult({ dispatch }, { id }) {
    return await dispatch(
      "axios/post",
      {
        url: this.state.config.VUE_CONFIG_APP_API + "Result/VerifyResult",
        params: { id },
      },
      { root: true }
    );
  },
  async GetVisitorByRC({ dispatch, commit }, { rc }) {
    const ret = await dispatch(
      "axios/post",
      {
        url: this.state.config.VUE_CONFIG_APP_API + "Result/GetVisitorByRC",
        params: { rc },
      },
      { root: true }
    );

    commit("setLastVisitor", ret);
    return ret;
  },
  async LoadVisitorByEmployeeNumber({ dispatch, commit }, { employeeNumber }) {
    const ret = await dispatch(
      "axios/post",
      {
        url:
          this.state.config.VUE_CONFIG_APP_API +
          "Visitor/LoadVisitorByEmployeeNumber",
        params: { employeeNumber },
      },
      { root: true }
    );

    commit("setLastVisitor", ret);
    return ret;
  },

  async ConnectVisitorToTest({ dispatch }, { visitorCode, testCode }) {
    const data = await dispatch(
      "axios/post",
      {
        url:
          this.state.config.VUE_CONFIG_APP_API + "Result/ConnectVisitorToTest",
        params: { visitorCode, testCode },
      },
      { root: true }
    );
    if (data) {
      dispatch("snackbar/openSuccess", "Uložené", {
        root: true,
      });
      return true;
    }
    return false;
  },
};
export default {
  namespaced: true,
  actions,
  state,
  mutations,
};
