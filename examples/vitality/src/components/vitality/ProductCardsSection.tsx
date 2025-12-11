'use client';

import type { JSX } from 'react';
import {
  type TextField,
  Text,
  type ComponentParams,
  type ComponentRendering,
} from '@sitecore-content-sdk/nextjs';
import { Default as ProductCard, type Fields as ProductCardFields } from './ProductCard';

type Fields = {
  Heading: TextField;
  Subheading: TextField;
  Products: ProductCardFields[];
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
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1a1a4d] mb-4">
            <Text field={props.fields.Heading} />
          </h2>
          <p className="text-lg text-gray-600">
            <Text field={props.fields.Subheading} />
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 max-w-6xl mx-auto">
          {props.fields.Products?.map((product, index) => (
            <ProductCard
              key={index}
              fields={product}
              rendering={props.rendering}
              params={props.params}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

