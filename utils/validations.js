export const phoneNumberValidation = (value) => {
  if (value === '') {
    return 'pending';
  }

  if (value !== '') {
    if (!new RegExp(/^\d+$/).test(value)) {
      return 'wrong';
    }

    // if (value.substring(0, 1) !== '0') {
    //   return 'wrong';
    // }

    if (value.length > 1 && value.substring(0, 2) !== '07') {
      return 'wrong';
    }

    if (value.length >= 12) {
      return 'wrong';
    }

    if (
      value.length >= 10 &&
      value.length <= 12 &&
      value.substring(0, 2) === '07'
    ) {
      return 'valid';
    }
  }
};

export const codeValidation = (value) => {

  if (!new RegExp(/^\d+$/).test(value)) {
    return 'wrong';
  }
  if (value === '') {
    return 'wrong';
  }

  if (value.length > 6) {
    return 'wrong';
  }

  if (value.length < 6) {
    return 'wrong';
  } else {
    return 'valid';
  }
};
