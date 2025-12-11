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
    <nav className="py-4" aria-label="Footer legal links">
      <ul className="flex flex-col gap-4 mb-4 text-sm sm:gap-6 md:flex-row">
        {props.fields.data.datasource.children.results?.map((item, linkIndex) => (
          <li key={linkIndex}>
            <JssLink
              field={item.field.link}
              className="text-white/80 hover:text-white"
            />
          </li>
        ))}
      </ul>
    </nav>
  );
};
