export default function getSpecialAttacks({ special }) {
  const result = special.map(({
    id, name, description = 'Описание недоступно', icon,
  }) => ({
    id, name, description, icon,
  }));
  return result;
}
