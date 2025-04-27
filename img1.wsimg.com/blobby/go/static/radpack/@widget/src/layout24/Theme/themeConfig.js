import { constants } from '@wsb/guac-widget-core';
import { FILL, FIT, INSET, BLUR, WIDE_INSET } from '../../common/constants/headerTreatments';
import { COMMON_BUTTON_CONFIG } from '../../common/constants';
import imageToHeaderTreatments from '../../common/utils/imageToHeaderTreatments';

const { colorPackCategories, buttons } = constants;
const { LIGHT, LIGHT_ALT, DARK, DARK_ALT, DARK_COLORFUL, COLORFUL, CUSTOM } = constants.paintJobs;

const id = 'layout24';
const imageTreatments = {
  [FILL]: 'category-default',
  [FIT]: 'category-default',
  [INSET]: 'category-solid',
  [BLUR]: 'category-overlay',
  [WIDE_INSET]: 'category-solid'
};

const headerTreatmentsConfig = {
  defaultHeaderTreatment: FILL,
  imageTreatments,
  headerTreatments: imageToHeaderTreatments(imageTreatments)
};
const defaultPaintJob = CUSTOM;

export default {
  id,
  name: 'spaces',
  packs: {
    color: '#D8CCC8',
    font: 'muli'
  },
  logo: {
    font: 'primary'
  },
  packCategories: {
    color: colorPackCategories.PRIMARY
  },
  headerProperties: {
    alignmentOption: 'center'
  },
  headerTreatmentsConfig,
  showSlideshowTab: true,
  paintJobs: [LIGHT, LIGHT_ALT, CUSTOM, COLORFUL, DARK_COLORFUL, DARK_ALT, DARK],
  defaultPaintJob,
  applyDefaultPaintJob: true,
  useSocialLinks: true,
  buttons: {
    primary: {
      fill: buttons.fills.GHOST,
      shape: buttons.shapes.SQUARE,
      decoration: buttons.decorations.LINES,
      shadow: buttons.shadows.NONE,
      color: buttons.colors.PRIMARY
    },
    secondary: {
      fill: buttons.fills.GHOST,
      decoration: buttons.decorations.LINES,
      shadow: buttons.shadows.NONE,
      color: buttons.colors.PRIMARY
    },
    ...COMMON_BUTTON_CONFIG
  }
};
