export const USERLEVEL = 'USERLEVEL';
export const userLevelAction = (user) => ({
  type: USERLEVEL,
  ...user,
})

// hiragana e katakana
export const GETCARACTER = 'GETCARACTER';
export const getcaracter = (caracter) => ({
  type: GETCARACTER,
  ...caracter,
})

export const GETNEXTCARACTER = 'GETNEXTCARACTER';
export const getnextcaracter = (caracter) => ({
  type: GETNEXTCARACTER,
  ...caracter,
})

// JLPT N Level
export const ITEMLENGHT = "ITEMLENGHT";
export const itemlenght = (caracter) => ({
  type: ITEMLENGHT,
  ...caracter,
});