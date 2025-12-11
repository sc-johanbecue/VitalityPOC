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
    <nav className="flex items-center gap-1 p-3">
      {props.fields.data.datasource.children.results?.map((item, linkIndex) => {
        return (
          <div className={`h-max items-center p-3 hover:border-b-[#e71757] hover:border-b-2`}>
            <JssLink
              key={linkIndex}
              field={item.field.link}
              className={`text-base font-bolder transition-colors relative pb-2 `}
            />
          </div>
        );
      })}
    </nav>
  );
};
