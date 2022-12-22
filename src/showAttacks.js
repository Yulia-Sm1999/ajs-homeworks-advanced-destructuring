export default function showAttacks(object) {
  const arrayOfAttacks = object.special;
  const result = [];
  arrayOfAttacks.forEach((obj) => {
    const {
      id, name, icon, description = 'Описание недоступно',
    } = obj;
    result.push({
      id, name, icon, description,
    });
  });
  return result;
}
