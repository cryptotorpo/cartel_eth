import PropTypes from 'prop-types';
import { UX2 } from '@wsb/guac-widget-core';

export class CommerceCardRibbon extends UX2.utils.createElement('CommerceCard', 'Ribbon') {
  static propTypes = {
    children: PropTypes.string,
    dataAids: PropTypes.objectOf(PropTypes.string),
    cardSize: PropTypes.object,
    ribbonType: PropTypes.string
  };
}
