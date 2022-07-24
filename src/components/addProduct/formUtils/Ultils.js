const selectedFormItem = (state) => {
  let selectedValue = '';
  for (const key in state) {
    if (state[key] === true) {
      selectedValue = key;
    }
  }
  return selectedValue;
};

export const getFormValue = (selectedValue, e) => {
  console.log(selectedValue);
  switch (selectedValue) {
    case 'DVD':
      return {
        DVD: e.target.DVD.value,
      };
    case 'Book':
      return {
        Book: e.target.book.value,
      };

    case 'Furniture':
      return {
        height: e.target.height.value,
        weight: e.target.weight.value,
        length: e.target.length.value,
      };
    default:
      return {};
  }
};

export default selectedFormItem;
