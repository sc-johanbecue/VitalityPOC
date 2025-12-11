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
    <div className="flex gap-4 py-4 overflow-x-auto border-b border-gray-200">
      {props.fields.data.datasource.children.results?.map((item, linkIndex) => {
        return (
          <JssLink
            key={linkIndex}
            field={item.field.link}
            className="text-sm font-medium text-gray-900 whitespace-nowrap px-2 py-1"
          />
        );
      })}
    </div>
  );
};
