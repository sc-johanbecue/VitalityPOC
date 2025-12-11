'use client';

import type { JSX } from 'react';
import {
  type TextField,
  Text,
  type RichTextField,
  RichText,
  type LinkField,
  Link as JssLink,
  ComponentParams,
  ComponentRendering,
} from '@sitecore-content-sdk/nextjs';

export type Fields = {
  Icon: TextField;
  Title: TextField;
  Description: RichTextField;
  LinkText: TextField;
  Link: LinkField;
  SecondaryLinkText: TextField;
  SecondaryLink: LinkField;
};

type ComponentProps = {
  rendering: ComponentRendering & { params: ComponentParams };
  params: ComponentParams;
  fields: Fields;
};

export const Default = (props: ComponentProps): JSX.Element => {
  return (
    <div className="bg-white rounded-lg p-6 md:p-8 shadow-sm">
      <div className="mb-4 md:mb-6">
        <div>
          <div>
            <i
              className={`fa-solid ${props.fields.Icon.value} fa-3x text-[#f41c5e] text-2xl md:text-3xl`}
              aria-hidden="true"
            />
          </div>
        </div>
      </div>

      <Text
        tag="h3"
        field={props.fields.Title}
        className="text-xl md:text-2xl font-bold text-gray-900 mb-3 md:mb-4"
      />

      <RichText
        field={props.fields.Description}
        className="text-gray-700 text-base leading-relaxed mb-4 content-sdk-rich-text"
      />

      <div className="flex flex-col items-center space-y-4 w-full mt-auto">
        <JssLink
          field={props.fields.Link}
          className="w-full max-w-sm text-center bg-[#e71757] text-white px-8 py-4 rounded font-semibold hover:bg-[#c91349] transition-colors text-base"
        >
          <Text field={props.fields.LinkText} />
        </JssLink>

        <JssLink
          field={props.fields.SecondaryLink}
          className="text-[#e71757] font-semibold hover:underline text-base"
        >
          <Text field={props.fields.SecondaryLinkText} />
        </JssLink>
      </div>
    </div>
  );
};

export const WithoutButton = (props: ComponentProps): JSX.Element => {
  return (
    <div className="bg-white rounded-lg p-6 md:p-8 shadow-sm">
      <div className="mb-4 md:mb-6">
        <div>
          <div>
            <i
              className={`fa-solid ${props.fields.Icon.value} fa-3x text-[#f41c5e] text-2xl md:text-3xl`}
              aria-hidden="true"
            />
          </div>
        </div>
      </div>

      <Text
        tag="h3"
        field={props.fields.Title}
        className="text-xl md:text-2xl font-bold text-gray-900 mb-3 md:mb-4"
      />

      <RichText
        field={props.fields.Description}
        className="text-gray-700 text-base leading-relaxed mb-4 content-sdk-rich-text"
      />

      <div className="flex flex-col items-center space-y-4 w-full mt-auto">
        <JssLink
          field={props.fields.SecondaryLink}
          className="text-[#e71757] font-semibold hover:underline text-base"
        >
          <Text field={props.fields.SecondaryLinkText} />
        </JssLink>
      </div>
    </div>
  );
};

export const WithoutLink = (props: ComponentProps): JSX.Element => {
  return (
    <div className="bg-white rounded-lg p-6 md:p-8 shadow-sm">
      <div className="mb-4 md:mb-6">
        <div>
          <div>
            <i
              className={`fa-solid ${props.fields.Icon.value} fa-3x text-[#f41c5e] text-2xl md:text-3xl`}
              aria-hidden="true"
            />
          </div>
        </div>
      </div>

      <Text
        tag="h3"
        field={props.fields.Title}
        className="text-xl md:text-2xl font-bold text-gray-900 mb-3 md:mb-4"
      />

      <RichText
        field={props.fields.Description}
        className="text-gray-700 text-base leading-relaxed mb-4 content-sdk-rich-text"
      />

      <div className="flex flex-col items-center space-y-4 w-full mt-auto">
        <JssLink
          field={props.fields.Link}
          className="w-full max-w-sm text-center bg-[#e71757] text-white px-8 py-4 rounded font-semibold hover:bg-[#c91349] transition-colors text-base"
        >
          <Text field={props.fields.LinkText} />
        </JssLink>
      </div>
    </div>
  );
};

export const WithoutButtonAndLink = (props: ComponentProps): JSX.Element => {
  const iconClass = 'fa-piggy-bank fa-3x';
  return (
    <div className="bg-white rounded-lg p-6 md:p-8 shadow-sm">
      <div className="mb-4 md:mb-6">
        <div>
          <div>
            <i
              className={`fa-solid ${iconClass} text-[#f41c5e] text-2xl md:text-3xl`}
              aria-hidden="true"
            />
          </div>
        </div>
      </div>

      <Text
        tag="h3"
        field={props.fields.Title}
        className="text-xl md:text-2xl font-bold text-gray-900 mb-3 md:mb-4"
      />

      <RichText
        field={props.fields.Description}
        className="text-gray-700 text-base leading-relaxed mb-4 content-sdk-rich-text"
      />
    </div>
  );
};
