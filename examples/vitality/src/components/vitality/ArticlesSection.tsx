'use client';

import type { JSX } from 'react';
import {
  type TextField,
  Text,
  type RichTextField,
  RichText,
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
  const phArticleCardsContainer = `VitalityArticleCardsContainer-${props.params.DynamicPlaceholderId}`;

  return (
    <section key={id} className="py-16 lg:py-20 bg-[#eaeff4]">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-16">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-700 mb-4 text-balance">
            <Text field={props.fields.Heading} />
          </h2>
          <RichText
            field={props.fields.Subheading}
            className="text-base md:text-lg text-gray-700"
          />
        </div>

        {/* Articles Grid - Single column mobile, 2 columns tablet, 4 columns desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          <Placeholder name={phArticleCardsContainer} rendering={props.rendering} />
        </div>
      </div>
    </section>
  );
};

