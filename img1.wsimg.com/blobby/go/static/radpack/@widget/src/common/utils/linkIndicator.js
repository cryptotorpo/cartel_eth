export function getIndicatorStyle(styleOverrides) {
  return {
    [':before']: {
      content: `""`,
      marginRight: '0.5em',
      display: 'inline-block',
      height: 1,
      width: '0.5em',
      backgroundColor: 'sectionContrast',
      transition: 'inherit',
      verticalAlign: 'middle',
      opacity: 0,
      ...styleOverrides
    }
  };
}

export function getIndicatorActiveStyle(styleOverrides) {
  return getIndicatorStyle({ opacity: 1, ...styleOverrides });
}

export function getAbsoluteIndicatorStyle(styleOverrides) {
  return getIndicatorActiveStyle({
    position: 'absolute',
    right: '100%',
    top: '50%',
    ...styleOverrides
  });
}
