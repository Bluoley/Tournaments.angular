export const PHONE_PATTERN = new RegExp(
    /([0-9]{2})[-. /]?([0-9]{2})[-. /]?([0-9]{2})[-. /]?([0-9]{2})[-. /]?([0-9]{2})$/
  );
  export const PERCENTAGE_PATTERN = new RegExp(
    /(^$)|(^100(\.0{1,2})?$)|(^([1-9]([0-9])?|0)\.(\.[0-9]{1,2})?$)|(^([1-9]([0-9])?|0)(\.[0-9]{1,2})?$)/
  );
  export const EMAIL_PATTERN = new RegExp(
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  );
  export const TEXT_ONLY = new RegExp(/^[A-Za-zÀ-ÖØ-öø-ÿ ]*$/);
  export const NUMBER_ONLY = new RegExp(/^[0-9]*$/);
  export const TEXT_NUMBER = new RegExp(/^[A-Za-zÀ-ÖØ-öø-ÿ0-9 ,.!]*$/);

  