'use client';

import React, { JSX } from 'react';
import {
  Text,
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
    <div>
      <Text
        tag="h3"
        field={props.fields.data.datasource.field.title}
        className="text-white font-semibold mb-4"
      />

      <nav className="space-y-3">
        {props.fields.data.datasource.children.results?.map((item, linkIndex) => (
          <JssLink
            key={linkIndex}
            field={item.field.link}
            className="block text-white/80 hover:text-white text-sm"
          />
        ))}
      </nav>
    </div>
  );
};
