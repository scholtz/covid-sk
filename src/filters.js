import Vue from "vue";
import moment from "moment";

export const formatDateTime = (value, { separator, showSeconds } = {}) => {
  if (!value) return "";
  const valueMoment = moment(value);
  if (!valueMoment.isValid()) return value;
  const separatorString = separator ? `${separator} ` : "";
  return valueMoment.format(
    `DD.MM.YYYY ${separatorString}HH:mm${showSeconds ? ":ss" : ""}`
  );
};

export const formatDate = value => {
  if (!value) return "";
  const valueMoment = moment(value);
  if (!valueMoment.isValid()) return value;
  return valueMoment.format("DD.MM.YYYY");
};

Vue.filter("formatDateTime", formatDateTime);
Vue.filter("formatDate", formatDate);
