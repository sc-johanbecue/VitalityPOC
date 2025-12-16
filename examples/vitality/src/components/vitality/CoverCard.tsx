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
  SecondaryLinkText: TextField;
  SecondaryLink: LinkField;
};

type ComponentProps = {
  rendering: ComponentRendering & { params: ComponentParams };
  params: ComponentParams;
  fields: Fields;
};

export const Default = (props: ComponentProps): JSX.Element => {
  return (
    <div className="bg-white rounded-2xl p-4 md:p-10 text-center flex flex-col items-center space-y-6 shadow-lg h-full">
      <div>
        <JssImage
          field={props.fields.Icon}
          className="w-32 h-32 md:w-40 md:h-40 object-cover pt-0"
        />
      </div>

      <h3 className="text-xl md:text-2xl font-semibold text-[#2d2d2d] tracking-tight">
        <Text field={props.fields.Title} />
      </h3>

      <div className="text-gray-700 text-base leading-relaxed min-h-[3rem]">
        <RichText field={props.fields.Description} />
      </div>

      <div className="flex flex-col items-center space-y-4 w-full mt-auto">
        <JssLink
          field={props.fields.Link}
          className="w-full max-w-sm bg-[#e71757] text-white px-8 py-4 rounded font-semibold hover:bg-[#c91349] transition-colors text-base"
        >
          <Text field={props.fields.LinkText} />
        </JssLink>

        <JssLink
          field={props.fields.SecondaryLink}
          className="text-[#e71757] font-semibold hover:underline text-base"
        >
          <Text field={props.fields.SecondaryLinkText} />
        </JssLink>
      </div>
    </div>
  );
};

export const Alternative = (props: ComponentProps): JSX.Element => {
  return (
    <div className="bg-white rounded-2xl p-4 md:p-10 text-center flex flex-col items-center space-y-6 shadow-lg h-full">
      <div>
        <JssImage
          field={props.fields.Icon}
          className="w-32 h-32 md:w-40 md:h-40 object-cover pt-0"
        />
      </div>
      <Text
        tag="p"
        field={props.fields.Category}
        className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3"
      />
      <h3 className="text-xl md:text-2xl font-semibold text-[#2d2d2d] tracking-tight">
        <Text field={props.fields.Title} />
      </h3>

      <div className="text-gray-700 text-base leading-relaxed min-h-12">
        <RichText field={props.fields.Description} />
      </div>

      <div className="flex flex-col items-center space-y-4 w-full mt-auto">
        <JssLink
          field={props.fields.Link}
          className="text-[#e71757] font-semibold hover:underline text-base"
        >
          <Text field={props.fields.LinkText} />
        </JssLink>
      </div>
    </div>
  );
};

