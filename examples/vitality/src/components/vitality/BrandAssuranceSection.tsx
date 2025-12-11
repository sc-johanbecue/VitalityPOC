'use client';

import type { JSX } from 'react';
import {
  type TextField,
  Text,
  type ImageField,
  Image as JssImage,
  type ComponentParams,
  type ComponentRendering,
} from '@sitecore-content-sdk/nextjs';

type Fields = {
  Text: TextField;
  Image: ImageField;
};

type ComponentProps = {
  rendering: ComponentRendering & { params: ComponentParams };
  params: ComponentParams;
  fields: Fields;
};

export const Default = (props: ComponentProps): JSX.Element => {
  const id = props.rendering.uid;

  return (
    <div key={id} className="py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center gap-4 lg:flex-row lg:justify-between lg:items-center md:flex-col md:justify-center">
          <h2 className="text-xl md:text-xl lg:text-2xl font-bold text-gray-900 text-center lg:text-left md:text-center">
            <Text field={props.fields.Text} />
          </h2>
          <div className="shrink-0">
            <JssImage field={props.fields.Image} className="h-20 md:h-16 lg:h-20 w-auto" />
          </div>
        </div>
      </div>
    </div>
  );
};

