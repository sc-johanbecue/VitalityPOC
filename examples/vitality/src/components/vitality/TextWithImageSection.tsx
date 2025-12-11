'use client';

import type { JSX } from 'react';
import {
  type TextField,
  Text,
  type RichTextField,
  RichText,
  type LinkField,
  Link as JssLink,
  type ImageField,
  Image as JssImage,
  type ComponentParams,
  type ComponentRendering,
} from '@sitecore-content-sdk/nextjs';

type Fields = {
  Heading: TextField;
  Description: RichTextField;
  Image: ImageField;
  LinkText: TextField;
  Link: LinkField;
};

type ComponentProps = {
  rendering: ComponentRendering & { params: ComponentParams };
  params: ComponentParams;
  fields: Fields;
};

export const Default = (props: ComponentProps): JSX.Element => {
  const id = props.rendering.uid;

  return (
    <section key={id} className="py-12 lg:py-16 bg-white">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="flex flex-col lg:flex-row lg:items-center lg:gap-12">
          {/* Image - Shows on top for mobile, on right for desktop */}
          <div className="order-1 lg:order-2 flex justify-center mb-8 lg:mb-0 lg:w-1/2">
            <div className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 relative">
              <JssImage
                field={props.fields.Image}
                width={400}
                height={400}
                className="w-full h-full object-contain"
              />
            </div>
          </div>

          {/* Content - Shows below image on mobile, on left for desktop */}
          <div className="order-2 lg:order-1 lg:w-1/2">
            <Text
              tag="h2"
              field={props.fields.Heading}
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#3d3d4e] mb-4 lg:mb-6"
            />

            <RichText
              field={props.fields.Description}
              className="text-base md:text-lg text-[#5a5a6d] mb-6 lg:mb-8 content-sdk-rich-text"
            />

            <JssLink
              field={props.fields.Link}
              className="inline-block bg-[#e71757] text-white px-8 py-3.5 rounded font-semibold text-base hover:bg-[#c40f47] transition-colors"
            >
              <Text field={props.fields.LinkText} />
            </JssLink>
          </div>
        </div>
      </div>
    </section>
  );
};

export const Reversed = (props: ComponentProps): JSX.Element => {
  const id = props.rendering.uid;

  return (
    <section key={id} className="py-12 lg:py-16 bg-[#eaeff4]">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="flex flex-col lg:flex-row lg:items-center lg:gap-12">
          {/* Image - Shows on top for mobile, on right for desktop */}
          <div className="order-1 lg:order-1 flex justify-center mb-8 lg:mb-0 lg:w-1/2">
            <div className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 relative">
              <JssImage
                field={props.fields.Image}
                width={400}
                height={400}
                className="w-full h-full object-contain"
              />
            </div>
          </div>

          {/* Content - Shows below image on mobile, on left for desktop */}
          <div className="order-2 lg:order-2 lg:w-1/2">
            <Text
              tag="h2"
              field={props.fields.Heading}
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#3d3d4e] mb-4 lg:mb-6"
            />

            <RichText
              field={props.fields.Description}
              className="text-base md:text-lg text-[#5a5a6d] mb-6 lg:mb-8 content-sdk-rich-text"
            />

            <JssLink
              field={props.fields.Link}
              className="inline-block border-[#e71757] border-4 text-[#e71757] px-8 py-3.5 rounded-sm font-semibold text-base hover:border-[#c40f47] transition-colors"
            >
              <Text field={props.fields.LinkText} />
            </JssLink>
          </div>
        </div>
      </div>
    </section>
  );
};
