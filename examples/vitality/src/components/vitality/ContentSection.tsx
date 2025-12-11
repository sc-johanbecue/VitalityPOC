'use client';

import type { JSX } from 'react';
import {
  Text,
  Link as JssLink,
  type TextField,
  type LinkField,
  ComponentRendering,
  ComponentParams,
  Placeholder,
} from '@sitecore-content-sdk/nextjs';

export type Fields = {
  Heading: TextField;
  LinkText: TextField;
  Link: LinkField;
  ButtonLinkText: TextField;
  ButtonLink: LinkField;
};

type ComponentProps = {
  rendering: ComponentRendering & { params: ComponentParams };
  params: ComponentParams;
  fields: Fields;
};

export const Default = (props: ComponentProps): JSX.Element => {
  const id = props.params.RenderingIdentifier;
  const phContentCardsContainer1 = `VitalityContentCardsContainer1-${props.params.DynamicPlaceholderId}`;

  return (
    <section key={id} className="bg-gray-100 py-8 md:py-10 lg:py-12">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
        {!props.rendering.params['HideTitle'] ? (
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 text-center mb-8 md:mb-12">
            <Text field={props.fields.Heading} />
          </h2>
        ) : null}
        <div className="grid grid-cols-1 md:grid-cols-1 gap-6 md:gap-8 mb-8 md:mb-12">
          <Placeholder name={phContentCardsContainer1} rendering={props.rendering} />
        </div>

        <div className="flex flex-col items-center gap-4 md:gap-6">
          <JssLink
            field={props.fields.ButtonLink}
            className="bg-[#e71757] text-white px-8 py-3 rounded font-semibold hover:bg-[#e71757] transition-colors"
          >
            <Text field={props.fields.ButtonLinkText} />
          </JssLink>

          <JssLink
            field={props.fields.Link}
            className="text-[#e71757] font-semibold hover:underline"
          >
            <Text field={props.fields.LinkText} />
          </JssLink>
        </div>
      </div>
    </section>
  );
};

export const TwoColumns = (props: ComponentProps): JSX.Element => {
  const id = props.params.RenderingIdentifier;
  const phContentCardsContainer1 = `VitalityContentCardsContainer1-${props.params.DynamicPlaceholderId}`;
  const phContentCardsContainer2 = `VitalityContentCardsContainer2-${props.params.DynamicPlaceholderId}`;

  return (
    <section key={id} className="bg-gray-100 py-8 md:py-10 lg:py-12">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
        {!props.rendering.params['HideTitle'] ? (
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 text-center mb-8 md:mb-12">
            <Text field={props.fields.Heading} />
          </h2>
        ) : null}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-8 md:mb-12">
          <Placeholder name={phContentCardsContainer1} rendering={props.rendering} />
          <Placeholder name={phContentCardsContainer2} rendering={props.rendering} />
        </div>

        <div className="flex flex-col items-center gap-4 md:gap-6">
          <JssLink
            field={props.fields.ButtonLink}
            className="bg-[#e71757] text-white px-8 py-3 rounded font-semibold hover:bg-[#e71757] transition-colors"
          >
            <Text field={props.fields.ButtonLinkText} />
          </JssLink>

          <JssLink
            field={props.fields.Link}
            className="text-[#e71757] font-semibold hover:underline"
          >
            <Text field={props.fields.LinkText} />
          </JssLink>
        </div>
      </div>
    </section>
  );
};

export const ThreeColumns = (props: ComponentProps): JSX.Element => {
  const id = props.params.RenderingIdentifier;
  const phContentCardsContainer1 = `VitalityContentCardsContainer1-${props.params.DynamicPlaceholderId}`;
  const phContentCardsContainer2 = `VitalityContentCardsContainer2-${props.params.DynamicPlaceholderId}`;
  const phContentCardsContainer3 = `VitalityContentCardsContainer3-${props.params.DynamicPlaceholderId}`;

  return (
    <section key={id} className="bg-gray-100 py-8 md:py-10 lg:py-12">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
        {!props.rendering.params['HideTitle'] ? (
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 text-center mb-8 md:mb-12">
            <Text field={props.fields.Heading} />
          </h2>
        ) : null}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-8 md:mb-12">
          <Placeholder name={phContentCardsContainer1} rendering={props.rendering} />
          <Placeholder name={phContentCardsContainer2} rendering={props.rendering} />
          <Placeholder name={phContentCardsContainer3} rendering={props.rendering} />
        </div>

        <div className="flex flex-col items-center gap-4 md:gap-6">
          <JssLink
            field={props.fields.ButtonLink}
            className="bg-[#e71757] text-white px-8 py-3 rounded font-semibold hover:bg-[#e71757] transition-colors"
          >
            <Text field={props.fields.ButtonLinkText} />
          </JssLink>

          <JssLink
            field={props.fields.Link}
            className="text-[#e71757] font-semibold hover:underline"
          >
            <Text field={props.fields.LinkText} />
          </JssLink>
        </div>
      </div>
    </section>
  );
};
