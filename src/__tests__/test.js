import getSpecialAttacks from '../getSpecialAttacks';

describe('getSpecialAttacks', () => {
  it('returns an array of objects with id, name, description, and icon properties', () => {
    const withSpecialAttacks = {
      name: 'Лучник',
      type: 'Bowman',
      health: 50,
      level: 3,
      attack: 40,
      defence: 10,
      special: [
        {
          id: 8,
          name: 'Двойной выстрел',
          icon: 'http://...',
          description: 'Двойной выстрел наносит двойной урон',
        },
        {
          id: 9,
          name: 'Нокаутирующий удар',
          icon: 'http://...',
        },
      ],
    };
    const expected = [
      {
        id: 8, name: 'Двойной выстрел', description: 'Двойной выстрел наносит двойной урон', icon: 'http://...',
      },
      {
        id: 9, name: 'Нокаутирующий удар', description: 'Описание недоступно', icon: 'http://...',
      },
    ];

    const result = getSpecialAttacks(withSpecialAttacks);
    expect(result).toEqual(expected);
  });

  it('возвращает пустой массив, если нет специальных атак', () => {
    const withoutSpecialAttacks = {
      name: 'Лучник',
      type: 'Bowman',
      health: 50,
      level: 3,
      attack: 40,
      defence: 10,
      special: [],
    };
    const expected = [];
    const result = getSpecialAttacks(withoutSpecialAttacks);
    expect(result).toEqual(expected);
  });
});
