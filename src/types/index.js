// @flow
import type { Store as ReduxStore, Dispatch as ReduxDispatch } from 'redux';

import type { MenuState, MenuAction } from './menu';

export type ReduxInitAction = { type: '@@INIT' };

export type State = MenuState;

export type Action = ReduxInitAction | MenuAction;

export type Store = ReduxStore<State, Action>;

export type Dispatch = ReduxDispatch<Action>;
