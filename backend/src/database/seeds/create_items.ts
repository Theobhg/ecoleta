import Knex from 'knex';

export async function seed(knex: Knex) {
  return knex('items').insert([
    { title: 'Lamp', image: 'lampadas.svg' },
    { title: 'Batteries', image: 'baterias.svg' },
    { title: 'Papers and Cardboards', image: 'papeis-papelao.svg' },
    { title: 'Electronic waste', image: 'eletronicos.svg' },
    { title: 'organic waste', image: 'organicos.svg' },
    { title: 'Kitchen oil', image: 'oleo.svg' },
  ]);
}