import luxon from './luxon-lib.js';

const showDateTime = (currentDateEl) => {
  const dateTimeNow = luxon.DateTime.now();
  currentDateEl.textContent = dateTimeNow.toLocaleString(luxon.DateTime.DATETIME_MED_WITH_SECONDS);
};

export default showDateTime;
