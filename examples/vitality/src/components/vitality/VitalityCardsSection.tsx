'use client';

import type { JSX } from 'react';
import {
  type TextField,
  type RichTextField,
  type ComponentParams,
  type ComponentRendering,
  Placeholder,
} from '@sitecore-content-sdk/nextjs';

type Fields = {
  Heading: TextField;
  Subheading: RichTextField;
};

type ComponentProps = {
  rendering: ComponentRendering & { params: ComponentParams };
  params: ComponentParams;
  fields: Fields;
};

export const Default = (props: ComponentProps): JSX.Element => {
  const id = props.rendering.uid;
  const phArticleCardsContainer = `VitalityCardsContainer-${props.params.DynamicPlaceholderId}`;

  return (
      <div className="vds-grid" key={id}>
        <Placeholder name={phArticleCardsContainer} rendering={props.rendering} />
      </div>
  );
};

