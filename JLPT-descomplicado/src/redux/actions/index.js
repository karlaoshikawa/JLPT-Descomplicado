export const USERLEVEL = 'USERLEVEL';

export const userLevelAction = (user) => ({
  type: USERLEVEL,
  ...user,
})