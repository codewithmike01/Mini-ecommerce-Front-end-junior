/*================================

Helper Functions for Util function

==================================*/
// Reg check

export const checkValue = (data, val) => {
  let regEx = '';

  if (
    val === 'price' ||
    val === 'height' ||
    val === 'length' ||
    val === 'width' ||
    val === 'weight' ||
    val === 'size'
  ) {
    regEx = /(^[0-9])\d*(.?\d+)?$/;
  } else {
    return true;
  }

  return regEx.test(data);
};

/*=====================================

Direct Functions to React Form (Util)

=======================================*/

// Select Product Type
export const productType = (itemSelected, state) => {
  switch (itemSelected) {
    case 'DVD':
      return {
        Furniture: false,
        Book: false,
        DVD: !state['DVD'],
      };
    case 'Furniture':
      return {
        DVD: false,
        Book: false,
        Furniture: !state['Furniture'],
      };
    case 'Book':
      return {
        Furniture: false,
        DVD: false,
        Book: !state['Book'],
      };
    default:
      return {
        DVD: false,
        Furniture: false,
        Book: false,
      };
  }
};

// SelectedFormItem for Form Switcher
// Pick product with true
const selectedFormItem = (state) => {
  let selectedValue = '';
  for (const key in state) {
    if (state[key] === true) {
      selectedValue = key;
    }
  }
  return selectedValue;
};

// getFormValue and format properly
export const getFormValue = (selectedValue, e) => {
  const defaultFormValues = {
    sku: e.target.sku.value,
    name: e.target.name.value,
    price: e.target.price.value,
  };

  switch (selectedValue) {
    case 'DVD':
      return {
        ...defaultFormValues,
        size: e.target.DVD.value,
      };
    case 'Book':
      return {
        ...defaultFormValues,
        weight: e.target.book.value,
      };

    case 'Furniture':
      return {
        ...defaultFormValues,
        height: e.target.height.value,
        width: e.target.width.value,
        length: e.target.length.value,
      };
    default:
      return {};
  }
};

// Empty form checker
export const isValid = (inputValue) => {
  let resultValidity = '';
  // Base case
  if (Object.keys(inputValue).length === 0) {
    return [true, 'Please, submit required data'];
  }

  for (const val in inputValue) {
    if (inputValue[val] === '') {
      return [true, `${val}: Please, submit required data`];
    }
    resultValidity = checkValue(inputValue[val], val);
    if (resultValidity === false) {
      return [true, `${val}: Please, provide the data of indicated type`];
    }
  }

  return [false, ''];
};

export default selectedFormItem;
