import type { JSX } from 'react';
import {
  type TextField,
  Text,
  type ImageField,
  Image as JssImage,
  type ComponentParams,
  type ComponentRendering,
  Placeholder,
  RichTextField,
  RichText,
} from '@sitecore-content-sdk/nextjs';

type Fields = {
  Logo: ImageField;
  Description: RichTextField;
  CopyrightText: TextField;
};

type ComponentProps = {
  rendering: ComponentRendering & { params: ComponentParams };
  params: ComponentParams;
  fields: Fields;
};

export const Default = (props: ComponentProps): JSX.Element => {
  const id = props.rendering.uid;
  const fields = props.fields;
  const phFooterLeftColumn = `VitalityLeftFooterColumnContainer-${props.params.DynamicPlaceholderId}`;
  const phFooterMiddleLeftColumn = `VitalityMiddleLeftFooterColumnContainer-${props.params.DynamicPlaceholderId}`;
  const phFooterMiddleRightColumn = `VitalityMiddleRightFooterColumnContainer-${props.params.DynamicPlaceholderId}`;
  const phFooterRightColumn = `VitalityRightFooterColumnContainer-${props.params.DynamicPlaceholderId}`;
  const phFooterLegalLinks = `VitalityFooterLegalLinksContainer-${props.params.DynamicPlaceholderId}`;
  const phFooterPriorityLinks = `VitalityFooterPriorityLinksContainer-${props.params.DynamicPlaceholderId}`;

  return (
    <footer key={id} className="border-t bg-gray-50 mt-auto">
      <div className="container py-12 px-4">
          <div>
            <Placeholder name={phFooterPriorityLinks} rendering={props.rendering} />
          </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="px-3 py-1 text-white font-bold text-lg inline-block mb-4">
              <JssImage field={fields.Logo} />
            </div>
            <RichText field={fields.Description} className="text-sm text-muted-foreground" />
          </div>

          <div>
            <Placeholder name={phFooterLeftColumn} rendering={props.rendering} />
          </div>
          <div>
            <Placeholder name={phFooterMiddleLeftColumn} rendering={props.rendering} />
          </div>
          <div>
            <Placeholder name={phFooterMiddleRightColumn} rendering={props.rendering} />
          </div>
          <div>
            <Placeholder name={phFooterRightColumn} rendering={props.rendering} />
          </div>
        </div>

        <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
          <Text field={fields.CopyrightText} />
        </div>
        <div>
            <Placeholder name={phFooterLegalLinks} rendering={props.rendering} />
          </div>
      </div>
    </footer>
  );
};

export default Default;
