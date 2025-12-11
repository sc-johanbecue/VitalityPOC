'use client';

import type { JSX } from 'react';
import {
  type TextField,
  Text,
  type RichTextField,
  RichText,
  type ComponentParams,
  type ComponentRendering,
} from '@sitecore-content-sdk/nextjs';

import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

type Fields = {
  Question: TextField;
  Answer: RichTextField;
};

type ComponentProps = {
  rendering: ComponentRendering & { params: ComponentParams };
  params: ComponentParams;
  fields: Fields;
};

export const Default = (props: ComponentProps): JSX.Element => {
  const id = props.rendering.uid;
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div key={id} className="border-b border-gray-200 group">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-start justify-between py-5 text-left"
        aria-expanded={isOpen}
      >
        <span className="text-[#333333] font-medium text-base pr-8 group-hover:text-[#e71757]">
          <Text field={props.fields.Question} />
        </span>
        {isOpen ? (
          <ChevronUp className="w-5 h-5 text-[#333333] shrink-0 mt-0.5" />
        ) : (
          <ChevronDown className="w-5 h-5 text-[#333333] shrink-0 mt-0.5" />
        )}
      </button>
      {isOpen && (
        <div className="pb-6 pr-12">
          <div className="text-gray-700 leading-relaxed space-y-4">
            <RichText field={props.fields.Answer} />
          </div>
        </div>
      )}
    </div>
  );
};
