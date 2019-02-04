export const required = (fieldName = 'This Field') => `${fieldName} is required`;
export const lengthMin = (fieldName = 'This Field', number) =>  `${fieldName} should at least ${number} character`;
export const lengthMax = (fieldName = 'This Field', number) =>  `${fieldName} should not greater than ${number} character`;
