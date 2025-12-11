'use client';

import type { JSX } from 'react';
import { useState, useEffect } from 'react';
import {
  type TextField,
  Text,
  type LinkField,
  Link as JssLink,
  type ImageField,
  Image as JssImage,
  type ComponentParams,
  type ComponentRendering,
  Placeholder,
} from '@sitecore-content-sdk/react';
import { Search, User, X } from 'lucide-react';

type Fields = {
  Logo: ImageField;
  LoginLink: LinkField;
  QuoteLink: LinkField;
  SearchText: TextField;
};

type ComponentProps = {
  rendering: ComponentRendering & { params: ComponentParams };
  params: ComponentParams;
  fields: Fields;
};

export const Default = (props: ComponentProps): JSX.Element => {
  const id = props.rendering.uid;
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const phTopNavigation = `VitalityTopNavigationContainer-${props.params.DynamicPlaceholderId}`;
  const phTopNavigationMobile = `VitalityTopNavigationMobileContainer-${props.params.DynamicPlaceholderId}`;
  const phMainNavigation = `VitalityMainNavigationContainer-${props.params.DynamicPlaceholderId}`;
  const phMainNavigationMobile = `VitalityMainNavigationMobileContainer-${props.params.DynamicPlaceholderId}`;

  useEffect(() => {
    const handleScroll = () => {
      // Sticky when scrolled past the top nav bar (~40px)
      setIsSticky(window.scrollY > 40);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Top Navigation Bar - Desktop Only */}
      <div className="hidden lg:block bg-[#3d3d3d] text-white">
        <div className="container mx-auto">
          <div className="flex items-center justify-between h-13">
            <Placeholder name={phTopNavigation} rendering={props.rendering} />
            <button className="flex items-center gap-2 text-sm hover:text-gray-300 transition-colors">
              <Search className="w-4 h-4" />
              <Text tag="span" field={props.fields.SearchText}/>
            </button>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav
        key={id}
        className={`bg-[#f0f3f6] border-b border-gray-200 transition-all ${
          isSticky ? 'fixed top-0 left-0 right-0 z-50 shadow-md' : ''
        }`}
      >
        <div className="container mx-auto px-2 lg:px-3">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 -ml-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>

            {/* Logo */}
            <div className="shrink-0 lg:pl-5">
              <JssImage field={props.fields.Logo} className="h-10 lg:h-12 w-auto" />
            </div>

            <div className="hidden lg:flex flex-auto p-10 gap-6">
              <Placeholder name={phMainNavigation} rendering={props.rendering} />
              {/* {fields.MainNavigationItems?.map((item, index) => (
                <JssLink
                  key={index}
                  field={item.fields.Link}
                  className="text-base font-medium text-gray-900 hover:text-[#e71757] transition-colors"
                >
                  <Text field={item.fields.Label} />
                </JssLink>
              ))} */}
            </div>

            <div className="flex items-center gap-1">
              <button className="lg:hidden p-2">
                <Search className="w-5 h-5 text-[#e71757]" />
              </button>
              <button className="lg:hidden p-2">
                <User className="w-5 h-5 text-[#e71757]" />
              </button>
              <JssLink
                field={props.fields.LoginLink}
                className="hidden lg:block px-4 py-2 border-4 border-[#e71757] text-[#e71757] rounded-sm font-semibold hover:shadow transition-colors"
              />
              <JssLink
                field={props.fields.QuoteLink}
                className="bg-[#e71757] border-4 border-[#e71757] text-white px-4 lg:px-5 py-2 rounded-sm font-semibold hover:shadow transition-colors text-sm lg:text-base"
              />
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 bg-white z-50 lg:hidden overflow-y-auto">
          <div className="container mx-auto px-4">
            {/* Mobile Menu Header */}
            <div className="flex items-center justify-between h-16 border-b border-gray-200">
              <button className="p-2 -ml-2" onClick={() => setMobileMenuOpen(false)}>
                <X className="w-6 h-6" />
              </button>
              <JssImage field={props.fields.Logo} className="h-10 w-auto" />
              <div className="flex items-center gap-2">
                <button className="p-2">
                  <Search className="w-5 h-5 text-[#e71757]" />
                </button>
                <JssLink field={props.fields.LoginLink} className="p-2">
                  <User className="w-5 h-5 text-[#e71757]" />
                </JssLink>

                <JssLink
                  field={props.fields.QuoteLink}
                  className="bg-[#e71757] text-white px-4 py-2 rounded font-semibold text-sm"
                />
              </div>
            </div>

            {/* Top Nav Items as Tabs */}
            <Placeholder name={phTopNavigationMobile} rendering={props.rendering} />

            <div className="py-6 space-y-1">
              <Placeholder name={phMainNavigationMobile} rendering={props.rendering} />
              {/* {fields.MainNavigationItems?.map((item, index) => (
                <JssLink
                  key={index}
                  field={item.fields.Link}
                  className="block py-4 text-xl font-medium text-gray-900 border-b border-gray-200"
                >
                  <Text field={item.fields.Label} />
                </JssLink>
              ))} */}
              <JssLink
                field={props.fields.LoginLink}
                className="block py-4 text-xl font-medium text-gray-900"
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

