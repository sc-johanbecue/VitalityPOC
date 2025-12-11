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
  type ComponentParams,
  type ComponentRendering,
} from '@sitecore-content-sdk/nextjs';

type Fields = {
  Heading: TextField;
  Description: RichTextField;
  LinkText: TextField;
  Link: LinkField;
  Image: ImageField;
  BackgroundColor: TextField;
};

type ComponentProps = {
  rendering: ComponentRendering & { params: ComponentParams };
  params: ComponentParams;
  fields: Fields;
};

const defaultFields: Fields = {
  Heading: { value: 'Live longer with Vitality insurance' },
  Description: {
    value:
      'Get covered and healthier. And get lots – you could live up to 5 years longer when you get active with Vitality',
  },
  LinkText: { value: 'Get a quote in minutes' },
  Link: { value: { href: '/quote' } },
  Image: {
    value: { src: '/dog-portrait-circle.jpg', alt: 'Dog' },
  },
  BackgroundColor: { value: '#e4003b' },
};

export const Default = (props: ComponentProps): JSX.Element => {
  const id = props.rendering.uid;
  const fields = props.fields || defaultFields;

  return (
    <section
      key={id}
      className="relative overflow-hidden"
      style={{ backgroundColor: (fields.BackgroundColor?.value as string) || '#e4003b' }}
    >
      <div className="container mx-auto px-4 py-12 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center max-w-6xl">
          {/* Content */}
          <div className="text-white space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              <Text field={fields.Heading} />
            </h1>
            <div className="text-lg md:text-xl leading-relaxed">
              <RichText field={fields.Description} />
            </div>
            <JssLink
              field={fields.Link}
              className="inline-block bg-white text-[#e4003b] px-6 py-3 rounded-md font-semibold hover:bg-gray-100 transition-colors"
            >
              <Text field={fields.LinkText} />
            </JssLink>
          </div>

          {/* Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
              <div className="absolute inset-0 rounded-full overflow-hidden">
                <JssImage field={fields.Image} className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

