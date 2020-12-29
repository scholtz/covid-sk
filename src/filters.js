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

export const formatGps = coordinate => {
  if (typeof coordinate !== "number") {
    return coordinate;
  }
  const absolute = Math.abs(coordinate);
  const degrees = Math.floor(absolute);
  const minutesNotTruncated = (absolute - degrees) * 60;
  const minutes = Math.floor(minutesNotTruncated);
  const seconds = Math.floor((minutesNotTruncated - minutes) * 60);
  return degrees + "°\xa0" + minutes + "'\xa0" + seconds + '"';
};

Vue.filter("formatDateTime", formatDateTime);
Vue.filter("formatDate", formatDate);
Vue.filter("formatGps", formatGps);
