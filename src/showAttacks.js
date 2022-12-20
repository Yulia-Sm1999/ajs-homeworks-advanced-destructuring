export default function showAttacks(givenArrOfObj) {
  const result = [];
  givenArrOfObj.forEach((obj) => {
    const {
      id, name, icon, description = 'Описание недоступно',
    } = obj;
    result.push({
      id, name, icon, description,
    });
  });
  return result;
}
