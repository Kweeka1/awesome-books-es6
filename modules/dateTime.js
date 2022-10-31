import * as luxon from '../node_modules/luxon/build/es6/luxon.js';

const showDateTime = (currentDateEl) => {
  const dateTimeNow = luxon.DateTime.now();
  currentDateEl.textContent = dateTimeNow.toLocaleString(luxon.DateTime.DATETIME_MED_WITH_SECONDS);
};

export default showDateTime;
