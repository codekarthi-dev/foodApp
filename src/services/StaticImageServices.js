import { ApiConstants } from "../constants";

const getFlagIcon = (code = "in") =>
  `${ApiConstants.COUNTRY_FLAG.BASE_URL}/${code}.png`;

export default { getFlagIcon };
