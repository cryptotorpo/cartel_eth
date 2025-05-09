/*
  This registers all of the components available to UX2
  since UX2 no longer exports components directly.
*/

import { utils } from '@wsb/guac-widget-core';
import { FILL, FIT, INSET, BLUR, LEGACY_BLUR } from './constants/headerTreatments';
import * as Components from './Components/Theme';

export default function register(ThemeComponents = {}) {
  utils.register({
    Group: {
      Blog: ['List', 'Main', 'Aside', 'Content'],
      Card: ['Link', 'Banner'],
      Carousel: [],
      Clock: ['Value'],
      ContactBar: [],
      Content: ['Big', 'Card', 'OverlayCard'],
      Featured: [],
      Form: ['Search'],
      GoogleTranslate: [],
      Group: [],
      Hero: ['Left', 'Center', 'Right', 'Header1'],
      Layout: [],
      Logo: ['Heading'],
      Map: ['Banner'],
      Media: ['Object'],
      Membership: [],
      Menu: [],
      MobileNav: ['Link', 'SubLink'],
      Nav: ['Footer', 'Menu', 'Vertical', 'Horizontal', 'MoreMenu'],
      NavigationDrawer: ['Sub'],
      DrawerPanel: [],
      Product: ['Asset', 'Banner', 'Label', 'Name', 'Prices'],
      CommerceOverlay: ['Major', 'Medium', 'Mobile', 'Heading', 'Icon', 'Wrapper', 'MoreLink'],
      CommerceItem: ['Heading', 'Icon', 'Label', 'Price', 'Button', 'Wrapper'],
      PromoBanner: ['Seasonal'],
      SearchPopout: [],
      Section: ['Banner', 'Split'],
      SlideshowArrows: [],
      SocialLinks: ['Drawer'],
      SplitItem: ['Image'],
      UtilitiesMenu: [],
      HeaderMedia: [FILL, FIT, INSET, BLUR, LEGACY_BLUR],
      Sidebar: [],
      SubMenu: []
    },
    Element: {
      Address: [],
      Background: [],
      Block: [],
      Button: ['Previous', 'Next', 'FullWidth', 'Primary', 'Secondary', 'Spotlight', 'External'],
      CloseIcon: [],
      Container: ['Fluid', 'Split'],
      Details: ['Minor'],
      DisplayHeading: ['Sub'],
      Divider: [],
      Dot: ['Active'],
      Dropdown: [],
      Element: [],
      Embed: ['Container', 'Video'],
      Error: [],
      FigCaption: ['Overlay'],
      Figure: [],
      FooterLink: [],
      FooterDetails: [],
      FooterText: [],
      Heading: ['Sub', 'Major', 'Minor', 'Middle', 'Product'],
      HR: [],
      Icon: ['Hamburger', 'Search', 'Social', 'Airo'],
      Image: ['Thumbnail', 'Logo'],
      Input: ['FloatLabel', 'TextArea', 'Checkbox', 'Select', 'Radio', 'Search'],
      Label: ['Minor'],
      Link: [
        'Arrow',
        'Active',
        'Content',
        'Icon',
        'Nested',
        'NestedActive',
        'Dropdown',
        'DropdownActive'
      ],
      List: ['Nested'],
      ListItem: ['Inline'],
      Loader: [],
      MoreLink: ['Expand', 'Forward', 'Backward', 'Menu'],
      Option: [],
      Phone: [],
      Pipe: [],
      Price: ['Major'],
      Ribbon: [],
      SVG: [],
      Table: ['Header', 'Row', 'Cell'],
      Tagline: [],
      SubTagline: [],
      SupTagline: [],
      Text: ['Major', 'Action'],
      Wrapper: ['Image', 'Video', 'InsetEmbedVideo'],
      Video: []
    },
    Component: {
      ...Components,
      ...ThemeComponents
    }
  });
}
// Preregister to enable global destructuring
register();
