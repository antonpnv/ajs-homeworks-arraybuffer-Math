import { Character } from '../js/Character';
import { Magician } from '../js/Magician';
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

test('Сеттер stoned должен корректно устанавливать значение', () => {
  const magician = new Magician('Alexey', 3);
  magician.stoned = true;
  expect(magician.stoned).toBe(true);
  magician.stoned = false;
  expect(magician.stoned).toBe(false);
});

test('Сеттер attack не должен изменять значение, если stoned установлен в false', () => {
  const magician = new Magician('Semen', 3);
  magician.stoned = false;
  magician.attack = 15;
  expect(magician.attack).not.toBe(15);
});

test('Сеттер attack не должен изменять значение, если stoned установлен в true', () => {
  const magician = new Magician('Roman', 3);
  magician.stoned = true;
  magician.attack = 15;
  expect(magician.attack).not.toBe(15);
});

test('Изменение расстояния должно влиять на атаку без эффекта "stoned"', () => {
  const magician = new Magician('Nikita', 3);
  magician.distance = 5;
  expect(magician.attack).toBe(6);
});

test('Изменение расстояния должно влиять на атаку с эффектом "stoned"', () => {
  const magician = new Magician('Andrey', 3);
  magician.stoned = true;
  magician.distance = 5;
  expect(magician.attack).toBe(0);
});
