import React from 'react';
import { UX2 } from '@wsb/guac-widget-core';

export function CommerceCardRibbon({
  children,
  dataAids = {},
  cardSize,
  ribbonType = 'default',
  ...props
}) {
  const content = (
    <UX2.Element.Label data-aid={ dataAids.ribbon } size={ cardSize } ribbonType={ ribbonType }>
      { children }
    </UX2.Element.Label>
  );

  return this.merge(
    {
      children: content
    },
    props
  );
}
