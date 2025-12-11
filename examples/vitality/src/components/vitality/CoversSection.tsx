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
  const phCoverCardsContainer = `VitalityCoverCardsContainer-${props.params.DynamicPlaceholderId}`;

  return (
    <section key={id} className="py-12 lg:py-16 bg-[#eaeff4]">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <Text
            tag="h2"
            field={props.fields.Heading}
            className="text-3xl md:text-4xl font-bold text-[#1a1a4d] mb-4"
          />
          <RichText field={props.fields.Subheading} className="text-lg text-gray-600" />
        </div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-10 max-w-3xl mx-auto">
          <Placeholder name={phCoverCardsContainer} rendering={props.rendering} />
        </div>
      </div>
    </section>
  );
};

export const ThreeColumns = (props: ComponentProps): JSX.Element => {
  const id = props.rendering.uid;
  const phCoverCardsContainer = `VitalityCoverCardsContainer-${props.params.DynamicPlaceholderId}`;

  return (
    <section key={id} className="py-12 lg:py-16 bg-[#eaeff4]">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <Text
            tag="h2"
            field={props.fields.Heading}
            className="text-3xl md:text-4xl font-bold text-[#1a1a4d] mb-4"
          />
          <RichText field={props.fields.Subheading} className="text-lg text-gray-600" />
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-10 max-w-6xl mx-auto">
          <Placeholder name={phCoverCardsContainer} rendering={props.rendering} />
        </div>
      </div>
    </section>
  );
};

