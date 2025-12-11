import type { JSX } from 'react';
import { FaFacebookF, FaLinkedin, FaInstagram, FaYoutube, FaTwitter } from "react-icons/fa"

import {
  type TextField,
  Text,
  type ImageField,
  Image as JssImage,
  type ComponentParams,
  type ComponentRendering,
  type LinkField,
  Link as JssLink,
  Placeholder,
} from '@sitecore-content-sdk/nextjs';

type Fields = {
  CopyrightText: TextField;
  MobileImage: ImageField;
  DesktopImage: ImageField;
  YoutubeLink: LinkField;
  InstagramLink: LinkField;
  FacebookLink: LinkField;
  XLink: LinkField;
  LinkedInLink: LinkField;
};

type ComponentProps = {
  rendering: ComponentRendering & { params: ComponentParams };
  params: ComponentParams;
  fields: Fields;
};

export const Default = (props: ComponentProps): JSX.Element => {
  const id = props.params.RenderingIdentifier;
  const phFooterLeftColumn = `VitalityLeftFooterColumnContainer-${props.params.DynamicPlaceholderId}`;
  const phFooterMiddleLeftColumn = `VitalityMiddleLeftFooterColumnContainer-${props.params.DynamicPlaceholderId}`;
  const phFooterMiddleRightColumn = `VitalityMiddleRightFooterColumnContainer-${props.params.DynamicPlaceholderId}`;
  const phFooterRightColumn = `VitalityRightFooterColumnContainer-${props.params.DynamicPlaceholderId}`;
  const phFooterLegalLinks = `VitalityFooterLegalLinksContainer-${props.params.DynamicPlaceholderId}`;
  const phFooterPriorityLinks = `VitalityFooterPriorityLinksContainer-${props.params.DynamicPlaceholderId}`;

  return (
    <div className={`component footer-graphic ${props.params.styles}`} id={id ? id : undefined}>
      <div className="relative w-full bg-[#eaeff4]">
        {/* Mobile SVG (320px) */}
        <JssImage field={props.fields.MobileImage} className="w-full h-auto md:hidden" />
        {/* Desktop/Tablet SVG (768px) */}
        <JssImage field={props.fields.DesktopImage} className="hidden md:block w-full h-auto" />
      </div>

      <footer className="bg-[#34404D] text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          {/* Mobile: vertical list of main links */}
          <div className="md:hidden mb-8">
            <Placeholder name={phFooterPriorityLinks} rendering={props.rendering} />
          </div>

          {/* Desktop: horizontal main links with social icons on right */}
          <div className="hidden md:flex justify-between items-start mb-12 pb-8 border-b border-[#4F738A]">
            <Placeholder name={phFooterPriorityLinks} rendering={props.rendering} />

            {/* Social icons for desktop */}
            <div className="flex gap-3">
              <JssLink
                field={props.fields.FacebookLink}
                className="w-10 h-10 rounded-full bg-[#4F738A] flex items-center justify-center hover:bg-[#5F839A] transition-colors"
                aria-label="Facebook"
              >
                <FaFacebookF className="w-5 h-5 text-white" />
              </JssLink>
              <JssLink
                field={props.fields.LinkedInLink}
                className="w-10 h-10 rounded-full bg-[#4F738A] flex items-center justify-center hover:bg-[#5F839A] transition-colors"
                aria-label="LinkedIn"
              >
                <FaLinkedin className="w-5 h-5 text-white" />
              </JssLink>
              <JssLink
                field={props.fields.InstagramLink}
                className="w-10 h-10 rounded-full bg-[#4F738A] flex items-center justify-center hover:bg-[#5F839A] transition-colors"
                aria-label="Instagram"
              >
                <FaInstagram className="w-5 h-5 text-white" />
              </JssLink>
              <JssLink
                field={props.fields.YoutubeLink}
                className="w-10 h-10 rounded-full bg-[#4F738A] flex items-center justify-center hover:bg-[#5F839A] transition-colors"
                aria-label="YouTube"
              >
                <FaYoutube className="w-5 h-5 text-white" />
              </JssLink>
              <JssLink
                field={props.fields.XLink}
                className="w-10 h-10 rounded-full bg-[#4F738A] flex items-center justify-center hover:bg-[#5F839A] transition-colors"
                aria-label="Twitter"
              > 
                <FaTwitter className="w-5 h-5 text-white" />
              </JssLink>
            </div>
          </div>

          {/* Footer columns */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
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

          <div className="border-t border-[#4F738A] pt-8">
            {/* Mobile: vertical stack */}
            <div className="md:hidden">
              <Placeholder name={phFooterLegalLinks} rendering={props.rendering} />
              <Text tag="p" field={props.fields.CopyrightText} className="text-white/60 text-sm" />
            </div>

            {/* Desktop: copyright left, legal links right on same line */}
            <div className="hidden md:flex justify-between items-center">
              <Text tag="p" field={props.fields.CopyrightText} className="text-white/60 text-sm" />
              <Placeholder name={phFooterLegalLinks} rendering={props.rendering} />
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};
