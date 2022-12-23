export default function showAttacks({ special = [] }) {
  let result = [];
  if (special.length > 0) {
    special.forEach((obj) => {
      const {
        id, name, icon, description = 'Описание недоступно',
      } = obj;
      result.push({
        id, name, icon, description,
      });
    });
  } else {
    result = 'This player have no attacks!';
  }
  return result;
}
