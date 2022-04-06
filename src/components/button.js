import {TouchableOpacity} from 'react-native';
import styled from 'styled-components/native';
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

const Button = styled(TouchableOpacity)(
  compose(
    border,
    color,
    size,
    space,
    flexbox,
    position,
    layout,
    grid,
    borderRadius,
  ),
);

Button.defaultProps = {
  activeOpacity: 0.9,
  alignItems: 'center',
  justifyContent: 'center',
};

export default Button;
