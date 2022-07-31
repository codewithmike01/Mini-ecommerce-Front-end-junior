// SelectedFormItem for Form Switcher
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
        DVD: e.target.DVD.value,
      };
    case 'Book':
      return {
        ...defaultFormValues,
        Book: e.target.book.value,
      };

    case 'Furniture':
      return {
        ...defaultFormValues,
        height: e.target.height.value,
        weight: e.target.weight.value,
        length: e.target.length.value,
      };
    default:
      return {};
  }
};

// Empty form checker
export const isEmpty = (inputValue) => {
  // Base case
  if (Object.keys(inputValue).length === 0) {
    return [true, 'Please, submit required data'];
  }

  for (const val in inputValue) {
    if (inputValue[val] === '') {
      return [true, 'Please, submit required data'];
    }
  }

  return [false, ''];
};

// Validate date type

export const validateData = (data) => {
  console.log(data);
};

export default selectedFormItem;
