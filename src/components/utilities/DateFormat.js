import enUS from "date-fns/locale/en-US/index.js";
import pkg from "date-fns-tz";
const { formatInTimeZone } = pkg;

const postPattern = "eeee, dd MMM yyyy";
const tz = "America/Los_Angeles";

export function rfc2822(date) {
  const pattern = "eee, dd MMM yyyy HH:mm:ss zzz";

  return formatInTimeZone(date, tz, pattern, { locale: enUS });
}

export function postdate(date) {
  return formatInTimeZone(date, tz, postPattern, { locale: enUS });
}

export function utcdate(date) {
  return formatInTimeZone(date, "UTC", postPattern, { locale: enUS });
}
