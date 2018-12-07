// @flow
type State = {
  menu: {
    menuIsOpen: boolean,
  },
};

export default ({ menu }: State) => ({ ...menu });
