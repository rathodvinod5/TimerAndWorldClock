import { Dimensions, PixelRatio } from 'react-native';

const {
  width: SCREEN_WIDTH,
  height: SCREEN_HEIGHT
} = Dimensions.get('window');

const widthBaseScale = SCREEN_WIDTH / 414;
const heightBaseScale = SCREEN_HEIGHT / 896;

function normalize(size: number, based = 'width') {
  const newSize = (based === 'height') ?
    size * heightBaseScale : size * widthBaseScale;
  return Math.round(PixelRatio.roundToNearestPixel(newSize));
}

const FONT_SIZE = {
  '10': normalize(10),
  '11': normalize(11),
  '12': normalize(12),
  '13': normalize(13),
  '14': normalize(14),
  '15': normalize(15),
  '16': normalize(16),
  '17': normalize(17),
  '18': normalize(18),
  '19': normalize(19),
  '20': normalize(20),
  '22': normalize(22),
  '24': normalize(24),
  '26': normalize(26),
  '28': normalize(28),
  '30': normalize(30),
}

export default FONT_SIZE;