'use client';

import type { JSX } from 'react';
import {
  type RichTextField,
  RichText,
  type ComponentParams,
  type ComponentRendering,
} from '@sitecore-content-sdk/nextjs';

type Fields = {
  Message: RichTextField;
};

type ComponentProps = {
  rendering: ComponentRendering & { params: ComponentParams };
  params: ComponentParams;
  fields: Fields;
};

export const Default = (props: ComponentProps): JSX.Element => {
  const id = props.rendering.uid;

  return (
    <div key={id} className="bg-[#2b2b2b] text-white py-3 text-center text-sm">
      <div className="container mx-auto px-4">
        <RichText field={props.fields.Message} className="leading-relaxed" />
      </div>
    </div>
  );
};
