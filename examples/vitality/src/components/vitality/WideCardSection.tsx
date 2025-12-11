import type { JSX } from 'react';
import {
  Text,
  RichText,
  Link as JssLink,
  Image as JssImage,
  type TextField,
  type RichTextField,
  type LinkField,
  type ImageField,
  ComponentRendering,
  ComponentParams,
} from '@sitecore-content-sdk/nextjs';

interface Fields {
  Heading: TextField;
  Description: RichTextField;
  Image: ImageField;
  Link: LinkField;
  LinkText: TextField;
  SecondaryLink: LinkField;
  SecondaryLinkText: TextField;
  Footnote: RichTextField;
}

type ComponentProps = {
  rendering: ComponentRendering & { params: ComponentParams };
  params: ComponentParams;
  fields: Fields;
};

export const Default = (props: ComponentProps): JSX.Element => {
  const id = props.params.RenderingIdentifier;

  return (
    <div
      className={`component callout-section ${props.params.styles} bg-gray-100 py-8 md:py-12`}
      id={id ? id : undefined}
    >
      <div className="component-content container mx-auto px-4">
        <div className="bg-[#3d4f5f] rounded-2xl overflow-hidden">
          {/* Mobile Layout */}
          <div className="md:hidden">
            {/* Image at top on mobile */}
            <div className="flex justify-center py-8">
              <div className="w-64 h-64 rounded-full overflow-hidden">
                <JssImage field={props.fields.Image} className="w-full h-full object-cover" />
              </div>
            </div>

            {/* Content below image on mobile */}
            <div className="px-6 pb-8 text-white">
              <h2 className="text-2xl font-bold mb-4 text-balance">
                <Text field={props.fields.Heading} />
              </h2>
              <div className="text-base leading-relaxed mb-6">
                <RichText field={props.fields.Description} />
              </div>
              <div className="flex flex-col gap-4 mb-6">
                <JssLink
                  field={props.fields.Link}
                  className="block text-center bg-white text-[#3d4f5f] px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  <Text field={props.fields.LinkText} />
                </JssLink>
                <JssLink
                  field={props.fields.SecondaryLink}
                  className="block text-center border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-[#3d4f5f] transition-colors"
                >
                  <Text field={props.fields.SecondaryLinkText} />
                </JssLink>
              </div>
            </div>
          </div>

          {/* Tablet and Desktop Layout */}
          <div className="hidden md:grid md:grid-cols-2 md:gap-8 lg:gap-12 items-center p-8 lg:p-12">
            {/* Text content on left */}
            <div className="text-white">
              <Text
                tag="h2"
                field={props.fields.Heading}
                className="text-3xl lg:text-4xl font-bold mb-6 text-balance"
              />
              <RichText
                field={props.fields.Description}
                className="text-base lg:text-lg leading-relaxed mb-8"
              />
              <div className="flex flex-col sm:flex-row gap-4">
                <JssLink
                  field={props.fields.Link}
                  className="inline-block text-center bg-white text-[#3d4f5f] px-8 py-3 rounded-sm font-semibold hover:bg-gray-100 transition-colors"
                >
                  <Text field={props.fields.LinkText} />
                </JssLink>
                <JssLink
                  field={props.fields.SecondaryLink}
                  className="inline-block text-center border-4 border-white text-white px-8 py-3 rounded-sm font-semibold hover:bg-white hover:text-[#3d4f5f] transition-colors"
                >
                  <Text field={props.fields.SecondaryLinkText} />
                </JssLink>
              </div>
            </div>

            {/* Image on right */}
            <div className="flex justify-center items-center">
              <div className="w-72 h-72 lg:w-80 lg:h-80 rounded-full overflow-hidden">
                <JssImage field={props.fields.Image} className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </div>

        {/* Footer text below the card */}
        <div className="text-xs text-gray-600 mt-4 px-4">
          <RichText field={props.fields.Footnote} />
        </div>
      </div>
    </div>
  );
};

