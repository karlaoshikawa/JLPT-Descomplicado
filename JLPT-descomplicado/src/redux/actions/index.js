export const USERLEVEL = 'USERLEVEL';
export const userLevelAction = (user) => ({
  type: USERLEVEL,
  ...user,
})

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