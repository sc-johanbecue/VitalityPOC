'use client';

import { type JSX } from 'react';
import type { ComponentParams, ComponentRendering } from '@sitecore-content-sdk/nextjs';
import { type LinkField } from '@sitecore-content-sdk/nextjs';

type Fields = {
  Link: LinkField;
};

type ComponentProps = {
  rendering: ComponentRendering & { params: ComponentParams };
  params: ComponentParams;
  fields: Fields;
};

export const Default = (props: ComponentProps): JSX.Element => {
  const id = props.rendering.uid;

  return (
    <section key={id} className="py-12 lg:py-16 bg-white">
      <div
        className="trustpilot-widget"
        data-locale="en-GB"
        data-template-id="54ad5defc6454f065c28af8b"
        data-businessunit-id="558c201c0000ff0005807a97"
        data-style-height="240px"
        data-style-width="100%"
        data-theme="light"
        data-stars="4,5"
        data-review-languages="en"
        data-font-family="Hind Siliguri"
        style={{ position: 'relative' }}
      >
        <iframe
          title="Customer reviews powered by Trustpilot"
          loading="lazy"
          src={props.fields.Link.value?.href}
          style={{
            position: 'relative',
            height: '240px',
            width: '100%',
            borderStyle: 'none',
            display: 'block',
            overflow: 'hidden',
          }}
        ></iframe>
      </div>
    </section>
  );
};

