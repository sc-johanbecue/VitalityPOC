'use client';

import React, { JSX } from 'react';
import {
  Link as JssLink,
  TextField,
  LinkField,
  ComponentParams,
  ComponentRendering,
} from '@sitecore-content-sdk/nextjs';

type ResultsFieldLink = {
  field: {
    link: LinkField;
  };
};

interface Fields {
  data: {
    datasource: {
      children: {
        results: ResultsFieldLink[];
      };
      field: {
        title: TextField;
      };
    };
  };
}

type ComponentProps = {
  rendering: ComponentRendering & { params: ComponentParams };
  params: ComponentParams;
  fields: Fields;
};

export const Default = (props: ComponentProps): JSX.Element => {
  return (
    <nav className="space-y-4 md:flex md:gap-8">
        {props.fields.data.datasource.children.results?.map((item, linkIndex) => (
            <JssLink
              key={linkIndex}
              field={item.field.link}
              className="block text-white hover:text-[#E20074] font-medium"
            />
        ))}
    </nav>
  );
};
