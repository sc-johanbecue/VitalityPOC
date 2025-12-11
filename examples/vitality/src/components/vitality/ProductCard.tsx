'use client';

import type { JSX } from 'react';
import {
  type TextField,
  Text,
  type RichTextField,
  RichText,
  type ImageField,
  Image as JssImage,
  type LinkField,
  Link as JssLink,
  ComponentRendering,
  ComponentParams,
} from '@sitecore-content-sdk/nextjs';

export type Fields = {
  Icon: ImageField;
  Title: TextField;
  Description: RichTextField;
  LinkText: TextField;
  Link: LinkField;
};

type ComponentProps = {
  rendering: ComponentRendering & { params: ComponentParams };
  params: ComponentParams;
  fields: Fields;
};

export const Default = (props: ComponentProps): JSX.Element => {
  return (
    <div className="text-center space-y-6">
      <div className="flex justify-center">
        <div className="w-20 h-20 md:w-24 md:h-24 bg-pink-50 rounded-full flex items-center justify-center">
          <JssImage field={props.fields.Icon} className="w-10 h-10 md:w-12 md:h-12" />
        </div>
      </div>

      <h3 className="text-xl font-bold text-[#1a1a4d] px-4">
        <Text field={props.fields.Title} />
      </h3>

      <div className="text-gray-600 px-4">
        <RichText field={props.fields.Description} />
      </div>

      <JssLink
        field={props.fields.Link}
        className="inline-block text-[#e4003b] font-semibold hover:underline"
      >
        <Text field={props.fields.LinkText} />
      </JssLink>
    </div>
  );
};

