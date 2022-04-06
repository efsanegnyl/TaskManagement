import styled from 'styled-components';
import {
  compose,
  border,
  color,
  size,
  space,
  flexbox,
  position,
  layout,
  grid,
  borderRadius,
} from 'styled-system';
import {View} from 'react-native';

const Box = styled(View)(
  compose(
    border,
    color,
    size,
    position,
    space,
    flexbox,
    layout,
    borderRadius,
    grid,
  ),
);

export default Box;
