'use client';

const VitCard = 'vit-card' as any;

import type { JSX } from 'react';
import {
  type TextField,
  Text,
  type RichTextField,
  RichText,
  type ComponentParams,
  type ComponentRendering,
  ImageField,
  LinkField,
  type Field,
  Image as JssImage,
} from '@sitecore-content-sdk/nextjs';

type Fields = {
  image: ImageField;
  kicker: TextField;
  title: TextField;
  supportingText: RichTextField;
  readTime: Field<number>;
  link: LinkField;
};

type ComponentProps = {
  rendering: ComponentRendering & { params: ComponentParams };
  params: ComponentParams;
  fields: Fields;
};

export const Default = (props: ComponentProps): JSX.Element => {
  const id = props.rendering.uid;
  

  return (
    <div key={id} className="vds-grid__column vds-grid__column--sm-6 vds-grid__column--lg-3">
      <VitCard href={props.fields.link.value?.href || '#'}>
        <JssImage slot="image" field={props.fields.image} />

        <span slot="kicker">
          <Text field={props.fields.kicker} />
        </span>

        <h4 slot="title">
          <Text field={props.fields.title} />
        </h4>

        <RichText field={props.fields.supportingText} />

        <span slot="footer">
          <i className="fa-regular fa-clock"></i>
          Read time: <Text field={props.fields.readTime} /> minutes
        </span>
      </VitCard>
    </div>
  );
};
