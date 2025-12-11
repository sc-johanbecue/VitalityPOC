'use client';

import type { JSX } from 'react';
import {
  type TextField,
  Text,
  type ComponentParams,
  type ComponentRendering,
} from '@sitecore-content-sdk/nextjs';
import { Placeholder } from '@sitecore-content-sdk/react';

type Fields = {
  Name: TextField;
};

type ComponentProps = {
  rendering: ComponentRendering & { params: ComponentParams };
  params: ComponentParams;
  fields: Fields;
};

export const Default = (props: ComponentProps): JSX.Element => {
  const id = props.rendering.uid;
  const phQuestionAndAnswers = `VitalityFAQQuestionAndAnswersContainer-${props.params.DynamicPlaceholderId}`;

  return (
    <div key={id} className="bg-gray-100 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="bg-white rounded-lg shadow-sm">
          <div className="px-6 md:px-8 lg:px-12 pt-8 pb-6">
            <Text
              tag="h2"
              field={props.fields.Name}
              className="text-2xl md:text-3xl font-semibold text-gray-900 border-b border-gray-200 pb-6"
            />
          </div>
          <div className="px-6 md:px-8 lg:px-12">
            <Placeholder name={phQuestionAndAnswers} rendering={props.rendering} />
          </div>
        </div>
      </div>
    </div>
  );
};
