'use client';

import type { JSX } from 'react';
import {
  type TextField,
  Text,
  type ComponentParams,
  type ComponentRendering,
  Placeholder,
} from '@sitecore-content-sdk/nextjs';

type Fields = {
  Heading: TextField;
};

type ComponentProps = {
  rendering: ComponentRendering & { params: ComponentParams };
  params: ComponentParams;
  fields: Fields;
};

export const Default = (props: ComponentProps): JSX.Element => {
  const id = props.rendering.uid;
  const phFeatureCardsContainer = `VitalityFeatureCardsContainer-${props.params.DynamicPlaceholderId}`;

  return (
    <section key={id} className="py-12 lg:py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <Text
            tag="h2"
            field={props.fields.Heading}
            className="text-3xl md:text-4xl font-bold text-[#1a1a4d] mb-4"
          />
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto">
          <Placeholder name={phFeatureCardsContainer} rendering={props.rendering} />
        </div>
      </div>
    </section>
  );
};

