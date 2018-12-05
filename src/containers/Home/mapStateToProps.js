// @flow
export default (state) => {
  console.log('state', state);
  const { menu } = state;
  return { ...menu };
};
