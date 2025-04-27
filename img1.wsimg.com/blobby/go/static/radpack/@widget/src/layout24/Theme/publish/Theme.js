import Default from '../../../common/Themes/Default/Theme';
import { UX2, constants } from '@wsb/guac-widget-core';
import { sectionHrTypes } from '../../../common/constants';
import DataAid from '../../../common/Components/Internal/Header/constants/dataAids.js';
import * as utils from '../../../common/Themes/Default/Dials/Colors/utils';
import { getMenuHeadingStyle } from '../../../common/utils/legacyOverrides';
import * as modernIcons from '../../../common/IconPacks/modernThinRound';
import * as socialIconPack from '../../../common/IconPacks/SocialIcons/defaultSocialIconPack';
import { Balance } from '../../../common/loaders';
import { levelFilter } from '../../../common/utils/text';
import { getIndicatorStyle, getIndicatorActiveStyle } from '../../../common/utils/linkIndicator';
import themeConfig from '../themeConfig';
import { WIDGETS_WITH_CIRCULAR_IMAGES } from '../../../common/constants';

const Color = UX2.utils.Color;
const { NONE } = sectionHrTypes;
const {
  buttons,
  categoryTypes: { ACCENT, PRIMARY, NEUTRAL },
  sectionTypes: { ALT }
} = constants;

const spacesGrey = '#aaa';
const spacesBrightGrey = '#EEE';
const spacesDarkGrey = '#333';
const spacesDark = '#222';
const spacesBlack = '#000';

const typographyShared1 = {
  style: {
    font: 'alternate',
    color: 'lowContrast',
    fontSize: 'large',
    textTransform: 'uppercase',
    fontWeight: 'normal',
    letterSpacing: '0.091em'
  }
};

class Theme24 extends Default {
  static config = themeConfig;

  static get displayName() {
    return 'Theme24';
  }

  static excludedProps = Default.excludedProps.concat('phone');

  static getMutatorDefaultProps(widgetType, widgetPreset) {
    const defaultProps = super.getMutatorDefaultProps(widgetType, widgetPreset);
    const enableCircularImage =
      WIDGETS_WITH_CIRCULAR_IMAGES[widgetPreset] || defaultProps.enableCircularImage;

    return widgetType === 'HEADER'
      ? {
        ...defaultProps,
        usePhone: false,
        useSlideshow: true,
        hasLogoBackground: true,
        useSocialLinks: true,
        hasLogoAlign: true,
        headerTreatmentsConfig: {
          ...defaultProps.headerTreatmentsConfig,
          ...themeConfig.headerTreatmentsConfig
        },
        renderParallaxToggle: false
      }
      : {
        ...defaultProps,
        enableCircularImage
      };
  }

  constructor() {
    super();
    this.mappedValues = {
      ...this.mappedValues,
      colorSpacesGrey: spacesGrey,
      colorSpacesBrightGrey: spacesBrightGrey,
      colorSpacesDark: spacesDark,
      colorSpacesBlack: spacesBlack,
      backgroundColorSpacesGrey: spacesGrey,
      // eslint-disable-next-line id-length
      backgroundColorSpacesBrightGrey: spacesBrightGrey,
      backgroundColorSpacesDark: spacesDark,
      backgroundColorSpacesDarkGrey: spacesDarkGrey,
      borderColorSpacesGrey: spacesGrey,
      backgroundColorSection() {
        const { category, section } = this.base;
        if (category === ACCENT) {
          if (section && section.includes(ALT)) {
            return new Color(spacesDark);
          }
          return new Color(spacesDarkGrey);
        }
        if (category === NEUTRAL && section && section.includes(ALT)) {
          const [primary] = utils.getDial(this, [PRIMARY]);
          return primary.setLightness(98).setAlpha(100);
        }
        return utils.getDial(this, 'background');
      },
      colorTextAction: () => {
        const [background, accent, neutral, multiplier] = utils.getDial(this, [
          'background',
          'accent',
          'neutral',
          'multiplier'
        ]);
        const bgColorAction = utils.getBackgroundColor(this, 'action');

        if (background === neutral && bgColorAction.lightness > 30) {
          return bgColorAction.contrastWith(background, 50 * multiplier, true);
        }
        if (background === accent && bgColorAction.lightness < 60) {
          return bgColorAction.contrastWith(background, 35 * multiplier, true);
        }
        return bgColorAction;
      },
      colorSectionAction: () => {
        const sectionColor = utils.getColor(this, 'section');
        const multiplier = utils.getDial(this, 'multiplier');
        return sectionColor.contrast(80 * multiplier);
      },
      borderColorWeakContrast: () => {
        const lowContrast = utils.getBorderColor(this, 'lowContrast');
        return lowContrast.setAlpha(50);
      },
      typographyOverrides: {
        LogoAlpha: {
          ...typographyShared1
        },
        HeadingAlpha: {
          style: {
            font: 'primary',
            color: 'highlight',
            fontSize: 'xxlarge',
            fontWeight: 'normal',
            letterSpacing: '0.023em',
            textTransform: 'none'
          }
        },
        HeadingBeta: {
          ...typographyShared1
        },
        HeadingGamma: {
          style: {
            font: 'alternate',
            color: 'highlight',
            fontSize: 'xlarge',
            fontWeight: 'normal',
            letterSpacing: 'normal',
            textTransform: 'none'
          }
        },
        HeadingDelta: {
          style: {
            font: 'alternate',
            color: 'highContrast',
            fontSize: 'medium',
            fontWeight: 'bold',
            letterSpacing: 'normal',
            textTransform: 'none'
          }
        },
        HeadingEpsilon: {
          style: {
            font: 'primary',
            color: 'highContrast',
            fontSize: 'xxxlarge',
            fontWeight: 'normal',
            letterSpacing: '0.023em',
            textTransform: 'none'
          }
        },
        DetailsGamma: {
          style: {
            font: 'alternate',
            color: 'lowContrast',
            fontSize: 'xsmall',
            fontWeight: 'normal',
            letterSpacing: '0.167em',
            textTransform: 'uppercase'
          }
        },
        NavAlpha: {
          style: {
            font: 'alternate',
            color: 'lowContrast',
            fontSize: 'xsmall',
            fontWeight: 'normal',
            textTransform: 'uppercase',
            letterSpacing: '0.167em',
            [':hover']: {
              color: 'highlightHover'
            },
            [':active']: {
              color: 'highlight'
            }
          },
          active: {
            style: {
              fontWeight: 'normal',
              color: 'highlight',
              [':hover']: {
                color: 'highlightHover'
              }
            }
          }
        },
        SubNavAlpha: {
          style: {
            font: 'alternate',
            color: 'spacesGrey',
            fontSize: 'small',
            fontWeight: 'normal',
            letterSpacing: 'normal',
            textTransform: 'none',
            [':hover']: {
              color: 'spacesBrightGrey'
            },
            [':active']: {
              color: 'highlight'
            }
          },
          active: {
            style: {
              fontWeight: 'bold',
              color: 'highlight',
              [':hover']: {
                color: 'highlightHover'
              }
            }
          }
        },
        NavBeta: {
          style: {
            font: 'alternate',
            color: 'spacesGrey',
            fontSize: 'medium',
            fontWeight: 'normal',
            letterSpacing: '0.167em',
            textTransform: 'uppercase',
            [':hover']: {
              color: 'spacesBrightGrey'
            },
            [':active']: {
              fontWeight: 'bold',
              color: 'spacesBrightGrey'
            }
          }
        },
        SubNavBeta: {
          style: {
            font: 'alternate',
            color: 'spacesGrey',
            fontSize: 'medium',
            fontWeight: 'normal',
            letterSpacing: 'normal',
            textTransform: 'none',
            [':active']: {
              color: 'highlight'
            }
          }
        },
        ButtonAlpha: props => {
          const { size = 'default' } = props;
          const sizes = {
            small: {
              fontSize: 'xsmall'
            },
            default: {
              fontSize: 'small'
            },
            large: {
              fontSize: 'small'
            }
          };
          return {
            style: {
              font: 'alternate',
              textTransform: 'uppercase',
              letterSpacing: 2,
              ...sizes[size]
            }
          };
        }
      }
    };
  }

  /* Basic elements */
  Heading(props) {
    const { tag, level } = props;
    const { widgetType, widgetPreset } = this.base;
    const levelFilterValue = levelFilter({ tag, level });
    const typographyMapping = {
      5: 'DetailsBeta'
    };

    return super.Heading(
      this.merge(
        {
          typography: typographyMapping[levelFilterValue]
        },
        { style: getMenuHeadingStyle(tag, widgetType, widgetPreset) },
        props
      )
    );
  }

  generateInputStyle() {
    const { section } = this.base;

    return {
      borderRadius: 0,
      borderWidth: 1,
      borderStyle: 'solid',
      paddingVertical: 'small',
      paddingHorizontal: 'small',
      ...(section === 'overlay'
        ? {
          borderColor: 'lowContrast'
        }
        : {
          borderColor: 'weakContrast'
        })
    };
  }

  HeadingMajor(props) {
    return super.HeadingMajor(
      this.merge(
        {
          typography: 'HeadingAlpha'
        },
        props
      )
    );
  }

  HeadingProduct(props) {
    return this.HeadingMinor(
      this.merge(
        {
          typography: 'BodyBeta',
          featured: true
        },
        props
      )
    );
  }

  Table(props) {
    return super.Table(
      this.merge(
        {
          style: {
            borderRadius: 0
          }
        },
        props
      )
    );
  }

  Button(props) {
    const { fill = this.getButtonDefaults().fill } = props;
    const ghostOverride =
      fill === buttons.fills.GHOST
        ? {
          style: {
            borderWidth: 1.3
          }
        }
        : {};

    return super.Button(this.merge(ghostOverride, props));
  }

  /* Logo */
  ImageLogo(props) {
    return super.Image(
      this.merge(
        {
          style: {
            zIndex: 2
          }
        },
        props
      )
    );
  }

  /* Nav */
  NavLink(props) {
    return super.NavLink(
      this.merge(
        {
          style: {
            display: 'flex',
            alignItems: 'center',
            ...getIndicatorStyle()
          }
        },
        props
      )
    );
  }

  NavLinkActive(props) {
    return this.NavLink(
      this.merge(
        {
          style: getIndicatorActiveStyle({
            backgroundColor: 'sectionLowContrast',
            transform: 'translateY(-100%)'
          })
        },
        props
      )
    );
  }

  FormSearch(props) {
    return super.FormSearch(
      this.merge(
        {
          style: {
            'width': '100%',
            'marginHorizontal': 0,
            '@md': {
              paddingRight: 65
            }
          }
        },
        props
      )
    );
  }

  InputSearch(props) {
    return super.InputSearch(
      this.merge(
        {
          style: {
            borderStyle: 'solid',
            borderColor: 'spacesGrey',
            borderWidth: 0,
            borderBottomWidth: '0.5px !important',
            borderRadius: 0,
            backgroundColor: 'section',
            ['::placeholder']: {
              color: 'spacesGrey'
            }
          }
        },
        props
      )
    );
  }

  Icon(props) {
    return super.Icon(
      this.merge(
        {
          iconPack: { ...modernIcons, ...socialIconPack }
        },
        props
      )
    );
  }

  Loader(props) {
    return Balance.apply(this, [props]);
  }

  NavIcon(props) {
    return super.Icon(
      this.merge(props, {
        style: {
          height: '10px',
          top: '1px',
          position: 'relative',
          marginLeft: 'xxsmall'
        }
      })
    );
  }

  UtilitiesMenuIcon(props) {
    return super.UtilitiesMenuIcon(
      this.merge(
        {
          style: {
            display: props.icon === 'magGlass' ? 'none' : 'initial',
            ['@md']: {
              display: 'initial'
            }
          }
        },
        props
      )
    );
  }

  CloseIcon(props) {
    return super.CloseIcon(
      this.merge(
        {
          style: {
            ...(props['data-aid'] === DataAid.SEARCH_CLOSE_RENDERED
              ? {
                color: 'spacesGrey',
                [':hover']: {
                  color: 'spacesBrightGrey'
                }
              }
              : {})
          }
        },
        props
      )
    );
  }

  NavDropdown(props) {
    return super.Dropdown(
      this.merge(
        {
          style: {
            paddingHorizontal: 'medium',
            paddingVertical: 'small',
            borderRadius: 0,
            backgroundColor: 'section'
          }
        },
        props
      )
    );
  }

  /* Hero */

  Tagline(props) {
    return super.Tagline(
      this.merge(
        {
          style: {
            ['@xs-only']: {
              maxWidth: '100%'
            }
          }
        },
        props
      )
    );
  }

  HeroText(props) {
    return super.SubTagline(
      this.merge(
        {
          typography: 'BodyAlpha',
          featured: false
        },
        props
      )
    );
  }

  /* Section */
  SectionHeading(props) {
    const { widgetPreset } = this.base;
    return super.SectionHeading(
      this.merge(
        {
          style: {
            'textAlign': 'center',
            'marginLeft': 'auto',
            '@md': {
              textAlign: 'center',
              marginLeft: 'auto',
              ...(widgetPreset === 'payment3' ||
                (widgetPreset === 'contact4' && {
                  textAlign: 'left'
                }))
            }
          },
          sectionHeadingHR: NONE
        },
        props
      )
    );
  }

  SectionContainer(props) {
    let style = {};

    if (this.base.widgetType === 'FOOTER') {
      style = {
        paddingHorizontal: 'xlarge',
        minWidth: '100%'
      };
    }
    return super.Container(this.merge({ style }, props));
  }

  /* Widgets */
  ContentCard(props) {
    const styles = this.base.widgetPreset === 'about1' ? { style: { alignItems: 'center' } } : {};
    return super.ContentCard(this.merge(styles, props));
  }

  ContentHeading(props) {
    const { level, tag } = props;

    if (level === 2 || tag === 'h2') {
      return super.Heading(props);
    }

    return super.Heading(
      this.merge(
        {
          typography: 'HeadingDelta'
        },
        props
      )
    );
  }

  ContentBigHeading(props) {
    return super.ContentBigHeading(
      this.merge(
        {
          typography: 'HeadingDelta'
        },
        props
      )
    );
  }

  ContentText(props) {
    return super.ContentText(
      this.merge(
        {
          typography: 'BodyAlpha'
        },
        props
      )
    );
  }

  ContentBigText(props) {
    return super.ContentBigText(
      this.merge(
        {
          typography: 'BodyAlpha'
        },
        props
      )
    );
  }

  CardBanner(props) {
    const { section } = this.base;

    return super.CardBanner(
      this.merge(
        {
          style: {
            flexDirection: 'column !important'
          },
          ...(section === 'overlay' && {
            category: 'accent'
          })
        },
        props
      )
    );
  }

  CardBannerHeading(props) {
    return super.CardBannerHeading(
      this.merge(
        {
          style: {
            paddingBottom: 25
          },
          typography: 'HeadingEpsilon'
        },
        props
      )
    );
  }

  CardBannerBlock(props) {
    return super.CardBannerBlock(
      this.merge(
        {
          style: {
            ...(this.base.widgetPreset === 'content5'
              ? {
                paddingHorizontal: '0 !important'
              }
              : {}),
            ['@md']: {
              textAlign: 'center'
            }
          }
        },
        props
      )
    );
  }

  FeaturedHeading(props) {
    return super.FeaturedHeading(
      this.merge(
        {
          typography: 'HeadingDelta'
        },
        props
      )
    );
  }

  PriceMajor(props) {
    return super.PriceMajor(
      this.merge(
        {
          typography: 'HeadingBeta'
        },
        props
      )
    );
  }

  /* Mobile */
  NavigationDrawer(props) {
    return super.NavigationDrawer(
      this.merge(
        {
          style: {
            width: '88%',
            backgroundColor: 'section'
          }
        },
        props
      )
    );
  }

  NavigationDrawerInputSearch(props) {
    return super.NavigationDrawerInputSearch(
      this.merge(
        {
          style: {
            borderStyle: 'solid',
            borderColor: 'spacesGrey',
            ['::placeholder']: {
              color: 'spacesGrey'
            }
          }
        },
        props
      )
    );
  }

  NavigationDrawerLink(props) {
    return super.NavigationDrawerLink(
      this.merge(
        {
          style: {
            'justifyContent': 'initial',
            'paddingLeft': 0,
            'display': 'flex',
            'alignItems': 'center',
            ':hover:before': {
              backgroundColor: 'spacesBrightGrey'
            },
            '@md': {
              minWidth: 'initial'
            }
          }
        },
        props
      )
    );
  }

  NavigationDrawerList(props) {
    return super.List(
      this.merge(
        {
          style: {
            paddingBottom: 0
          }
        },
        props
      )
    );
  }

  NavigationDrawerListItem(props) {
    return super.NavigationDrawerListItem(
      this.merge(
        {
          style: {
            borderBottomWidth: 0
          }
        },
        props
      )
    );
  }

  NavigationDrawerContainer(props) {
    return super.Container(
      this.merge(
        {
          style: {
            paddingHorizontal: 'large'
          }
        },
        props
      )
    );
  }

  NavigationDrawerCloseIcon(props) {
    return super.CloseIcon(
      this.merge(
        {
          style: {
            'color': 'spacesGrey',
            ':hover': {
              color: 'spacesBrightGrey'
            }
          }
        },
        props
      )
    );
  }

  NavigationDrawerIcon(props) {
    return super.Icon(
      this.merge(
        {
          style: {
            ...(props.icon === 'magGlass'
              ? {
                'left': 9,
                'fontSize': 'large',
                'color': 'spacesGrey',
                ':hover': {
                  color: 'spacesBrightGrey'
                }
              }
              : {})
          }
        },
        props
      )
    );
  }

  ContentOverlayCardHeading(props) {
    return super.CardHeading(
      this.merge(
        {
          typography: 'HeadingDelta'
        },
        props
      )
    );
  }

  Input(props) {
    return super.Input(
      this.merge(
        {
          style: this.generateInputStyle()
        },
        props
      )
    );
  }

  InputSelect(props) {
    return super.InputSelect(
      this.merge(
        {
          style: {
            ...this.generateInputStyle(),
            padding: 0,
            ['@xs-only']: {
              fontSize: 'medium' // 16px
            }
          }
        },
        props
      )
    );
  }

  InputSelectElement(props) {
    return super.InputSelectElement(
      this.merge(
        {
          style: {
            paddingVertical: 'small',
            paddingHorizontal: 'small',
            ['@xs-only']: {
              fontSize: 'medium' // 16px
            }
          }
        },
        props
      )
    );
  }

  InputFloatLabelLabel(props) {
    return super.InputFloatLabelLabel(
      this.merge(
        {
          style: {
            left: '16px',
            top: '33%'
          }
        },
        props
      )
    );
  }

  InputTextArea(props) {
    return super.InputTextArea(
      this.merge(
        {
          rows: 6
        },
        props
      )
    );
  }

  MediaObjectBackground(props) {
    return super.MediaObjectBackground(
      this.merge(
        {
          style: {
            borderRadius: 'medium'
          }
        },
        props
      )
    );
  }

  Intro(props) {
    return super.Intro(this.merge({ alignment: 'center' }, props));
  }

  MembershipHeading(props) {
    return super.MembershipHeading(
      this.merge(
        {
          style: {
            paddingHorizontal: 0
          }
        },
        props
      )
    );
  }

  FooterText(props) {
    return super.FooterText(
      this.merge(
        {
          typography: 'DetailsGamma'
        },
        props
      )
    );
  }

  FooterDetails(props) {
    return super.FooterDetails(
      this.merge(
        {
          typography: 'DetailsGamma'
        },
        props
      )
    );
  }

  SlideshowArrows(props) {
    return super.SlideshowArrows(
      this.merge(
        {
          style: {
            'paddingHorizontal': 'small',
            '@sm': {
              paddingHorizontal: 'medium',
              marginHorizontal: 'medium'
            }
          }
        },
        props
      )
    );
  }

  Dot(props) {
    return super.Dot(
      this.merge(
        {
          style: {
            borderColor: 'lowContrast',
            color: 'section'
          }
        },
        props
      )
    );
  }

  Pipe(props) {
    return super.Pipe(
      this.merge(
        {
          style: {
            position: 'inherit',
            top: 0,
            left: 0,
            width: 1,
            height: '100%',
            opacity: 0.25,
            borderColor: 'spacesGrey',
            borderRightStyle: 'solid',
            borderRightWidth: '1px'
          }
        },
        props
      )
    );
  }

  EmbedVideo({ isVerticalVideo, ...props }) {
    if (isVerticalVideo) {
      return super.EmbedVideo(this.merge({ style: { maxHeight: '680px' } }, props));
    }
    return super.EmbedVideo(props);
  }

  WrapperInsetEmbedVideo({ isVerticalVideo, ...props }) {
    if (isVerticalVideo) {
      return super.WrapperInsetEmbedVideo(this.merge({ style: { maxHeight: '680px' } }, props));
    }
    return super.WrapperInsetEmbedVideo(props);
  }
}

export default Theme24;
