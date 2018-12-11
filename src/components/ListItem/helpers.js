// @flow
import {
  STATUS_BLUE, STATUS_BROWN, STATUS_GREEN, STATUS_YELLOW,
} from '../../constants/Styles';
import {
  STATUS_AVAILABLE, STATUS_NEW, STATUS_PLACED, STATUS_RESERVED,
} from '../../constants/Strings';

export const statusBackgroundColor = (status: number) => {
  switch (status) {
    case 1:
      return STATUS_GREEN;
    case 2:
      return STATUS_BLUE;
    case 3:
      return STATUS_YELLOW;
    case 4:
      return STATUS_BROWN;
    default:
      return STATUS_GREEN;
  }
};

export const statusLabel = (status: number) => {
  switch (status) {
    case 1:
      return STATUS_AVAILABLE;
    case 2:
      return STATUS_NEW;
    case 3:
      return STATUS_RESERVED;
    case 4:
      return STATUS_PLACED;
    default:
      return STATUS_AVAILABLE;
  }
};
