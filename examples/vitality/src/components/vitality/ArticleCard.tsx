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
import { Clock } from 'lucide-react';

export type Fields = {
  Image: ImageField;
  Title: TextField;
  Description: RichTextField;
  Link: LinkField;
  Category: TextField;
  ReadTime: TextField;
};

type ComponentProps = {
  rendering: ComponentRendering & { params: ComponentParams };
  params: ComponentParams;
  fields: Fields;
};

export const Default = (props: ComponentProps): JSX.Element => {
  return (
    <JssLink field={props.fields.Link} className="group block">
      <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow h-full flex flex-col">
        {/* Image Section */}
        <div className="aspect-[4/3] bg-gray-200 overflow-hidden">
          <JssImage
            field={props.fields.Image}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </div>

        {/* Content Section */}
        <div className="p-6 flex-1 flex flex-col text-center">
          {/* Category Label */}
          <Text
            tag="p"
            field={props.fields.Category}
            className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3"
          />

          {/* Title */}
          <Text
            tag="h3"
            field={props.fields.Title}
            className="text-xl md:text-2xl font-bold text-gray-900 mb-3 leading-tight group-hover:text-[rgb(231,23,87)] transition-colors duration-300  tracking-tight"
          />

          {/* Description */}
          <RichText
            field={props.fields.Description}
            className="text-sm md:text-base text-gray-600 mb-4 flex-1 leading-relaxed"
          />

          {/* Read Time */}
          <div className="flex items-center justify-center gap-2 text-sm text-gray-500">
            <Clock className="w-4 h-4" />
            <span>
              <Text field={props.fields.ReadTime} />
            </span>
          </div>
        </div>
      </div>
    </JssLink>
  );
};

