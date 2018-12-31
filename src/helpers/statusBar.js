// @flow
import {
  STATUS_BLUE,
  STATUS_BLUE_OPACITY,
  STATUS_BROWN, STATUS_BROWN_OPACITY,
  STATUS_GREEN,
  STATUS_GREEN_OPACITY,
  STATUS_YELLOW,
  STATUS_YELLOW_OPACITY,
} from '../constants/Styles';
import {
  STATUS_AVAILABLE, STATUS_NEW, STATUS_PLACED, STATUS_RESERVED,
} from '../constants/Strings';

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

export const statusBackgroundColorOpacity = (status: number) => {
  switch (status) {
    case 1:
      return STATUS_GREEN_OPACITY;
    case 2:
      return STATUS_BLUE_OPACITY;
    case 3:
      return STATUS_YELLOW_OPACITY;
    case 4:
      return STATUS_BROWN_OPACITY;
    default:
      return STATUS_GREEN_OPACITY;
  }
};
