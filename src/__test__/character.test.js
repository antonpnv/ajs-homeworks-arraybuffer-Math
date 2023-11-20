import { Character } from '../js/Character';
import { Magician } from '../js/Magican';
import { Daemon } from '../js/Daemon';

test('Должен выдать ошибку, если указано неверное имя', () => {
  expect(() => {
    new Character('J', 'Magician');
  }).toThrow('Имя должно содержать от 2 до 10 символов');
});

test('Должен выдать ошибку, если указан неверный тип', () => {
  expect(() => {
    new Character('Mike', 'InvalidType');
  }).toThrow('Недопустимый тип персонажа');
});

test('Расчет атаки без эффекта "stoned"', () => {
  const character = new Magician('Andrey', 2);
  expect(character.attack).toBe(9);
});

test('Расчет атаки с эффектом "stoned"', () => {
  const magician = new Magician('Ivan', 3);
  magician.stoned = true;
  expect(magician.attack).toBe(0);
});

test('Расчет атаки для Daemon', () => {
  const daemon = new Daemon('Artem', 5);
  expect(daemon.attack).toBe(6);
});

test('Расчет атаки для Magician', () => {
  const magician = new Magician('Sergey', 4);
  expect(magician.attack).toBe(7);
});
