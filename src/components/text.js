import {Text as T} from 'react-native';
import styled from 'styled-components';
import {
  compose,
  border,
  color,
  size,
  space,
  flexbox,
  typography,
} from 'styled-system';

const Text = styled(T)(
  compose(typography, space, color, size, border, flexbox),
);

export default Text;
