// src/utils/auth.js
export const USERS_KEY = 'users_v1'; // name in localStorage
export const CURRENT_USER_KEY = 'currentUser_v1';

export function getUsers() {
  try {
    const raw = localStorage.getItem(USERS_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

export function saveUser(user) {
  const users = getUsers();
  users.push(user);
  localStorage.setItem(USERS_KEY, JSON.stringify(users));
}

export function findUserByEmail(email) {
  if (!email) return null;
  const users = getUsers();
  return users.find(u => u.email && u.email.toLowerCase() === email.toLowerCase());
}

export function findUserByPhone(phone) {
  if (!phone) return null;
  const users = getUsers();
  return users.find(u => u.phone && u.phone === phone);
}

export function findUserByEmailOrPhone(value) {
  if (!value) return null;
  const users = getUsers();
  const isPhone = /^\d{10}$/.test(value);
  if (isPhone) return users.find(u => u.phone === value);
  return users.find(u => u.email && u.email.toLowerCase() === value.toLowerCase());
}

export function setCurrentUser(user) {
  localStorage.setItem(CURRENT_USER_KEY, JSON.stringify(user));
}

export function getCurrentUser() {
  try {
    const raw = localStorage.getItem(CURRENT_USER_KEY);
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
}

export function clearCurrentUser() {
  localStorage.removeItem(CURRENT_USER_KEY);
}
