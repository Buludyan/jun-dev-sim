export const changeFromNameToEndpoint = (name: string) => {
  const splittedName = name.split('');
  splittedName[0] = name[0].toLowerCase();
  name = splittedName.join('').split(' ').join('-');

  return name;
};
