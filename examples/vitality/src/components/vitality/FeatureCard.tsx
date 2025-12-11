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
  Category: TextField;
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
    <div className="flex gap-6">
      <div className="shrink-0">
        <div className="h-40 md:h-40 flex items-center justify-center">
          <JssImage
            field={props.fields.Icon}
            className="w-24 h-24 md:w-24 md:h-24 object-cover pt-0"
          />
        </div>
      </div>

      <div className="space-y-3">
        <Text
          tag="p"
          field={props.fields.Category}
          className="text-base font-semibold text-gray-500 uppercase tracking-wider mb-3"
        />
        <Text tag="h3" field={props.fields.Title} className="text-xl font-bold text-[#1a1a4d]" />

        <RichText
          field={props.fields.Description}
          className="text-gray-600 text-base leading-relaxed"
        />

        <JssLink
          field={props.fields.Link}
          className="inline-block text-[#e4003b] font-semibold hover:underline"
        >
          <Text field={props.fields.LinkText} />
        </JssLink>
      </div>
    </div>
  );
};

