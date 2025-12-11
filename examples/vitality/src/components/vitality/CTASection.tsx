'use client';

import type { JSX } from 'react';
import {
  type TextField,
  Text,
  type RichTextField,
  RichText,
  type LinkField,
  Link as JssLink,
  type ComponentParams,
  type ComponentRendering,
} from '@sitecore-content-sdk/nextjs';

type Award = {
  fields: {
    Text: RichTextField;
  };
};

type Fields = {
  Heading: TextField;
  Subheading: TextField;
  Awards: Award[];
  LinkText: TextField;
  Link: LinkField;
};

type ComponentProps = {
  rendering: ComponentRendering & { params: ComponentParams };
  params: ComponentParams;
  fields: Fields;
};

const defaultFields: Fields = {
  Heading: { value: "We're proud to be top-rated" },
  Subheading: { value: 'Here are some of our recently earned awards:' },
  Awards: [
    {
      fields: {
        Text: {
          value:
            'Award-winning range - Our health and life cover have 5 out of 5 star Defaqto ratings',
        },
      },
    },
    {
      fields: {
        Text: { value: 'Policy servicing - Rated as excellent for all four key metrics in 2017' },
      },
    },
    {
      fields: {
        Text: {
          value:
            'Quality of products - Rated 5 stars for our Life Insurance and Health Insurance products',
        },
      },
    },
    {
      fields: {
        Text: {
          value:
            "Number of services - We're above 10 out of 10. We don't just send you policy premium but do so much more to help you live longer and healthier",
        },
      },
    },
  ],
  LinkText: { value: "Complete list of Vitality's many and Defaqto ratings Awards 2025" },
  Link: { value: { href: '/awards' } },
};

export const Default = (props: ComponentProps): JSX.Element => {
  const id = props.rendering.uid;
  const fields = props.fields || defaultFields;

  return (
    <section key={id} className="py-12 lg:py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1a1a4d] mb-4">
            <Text field={fields.Heading} />
          </h2>

          <p className="text-lg text-gray-600 mb-8">
            <Text field={fields.Subheading} />
          </p>

          <ul className="space-y-4 mb-8">
            {fields.Awards?.map((award, index) => (
              <li key={index} className="flex items-start gap-3">
                <svg
                  className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <div className="text-gray-700">
                  <RichText field={award.fields.Text} />
                </div>
              </li>
            ))}
          </ul>

          <JssLink
            field={fields.Link}
            className="inline-block border-2 border-[#e4003b] text-[#e4003b] px-6 py-3 rounded-md font-semibold hover:bg-[#e4003b] hover:text-white transition-colors"
          >
            <Text field={fields.LinkText} />
          </JssLink>
        </div>
      </div>
    </section>
  );
};

