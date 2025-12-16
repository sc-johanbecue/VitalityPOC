// Below are built-in components that are available in the app, it's recommended to keep them as is

import { BYOCWrapper, NextjsContentSdkComponent, FEaaSWrapper } from '@sitecore-content-sdk/nextjs';
import { Form } from '@sitecore-content-sdk/nextjs';

// end of built-in components
import * as WideCardSection from 'src/components/vitality/WideCardSection';
import * as VitalityCardsSection from 'src/components/vitality/VitalityCardsSection';
import * as VitalityCard from 'src/componencomponents/vitality/VitalityCard
import * as TopNavigationMobile from 'src/components/vitality/TopNavigationMobile';
import * as TopNavigation from 'src/components/vitality/TopNavigation';
import * as TextWithImageSection from 'src/components/vitality/TextWithImageSection';
import * as TestimonialsSection from 'src/components/vitality/TestimonialsSection';
import * as ProductCardsSection from 'src/components/vitality/ProductCardsSection';
import * as ProductCard from 'src/components/vitality/ProductCard';
import * as PartialDesignDynamicPlaceholder from 'src/components/vitality/PartialDesignDynamicPlaceholder';
import * as NotificationSection from 'src/components/vitality/NotificationSection';
import * as MainNavigation from 'src/components/vitality/MainNavigation';
import * as HeroSection from 'src/components/vitality/HeroSection';
import * as Header from 'src/components/vitality/Header';
import * as FooterVitality from 'src/components/vitality/FooterVitality';
import * as FooterPriorityLinks from 'src/components/vitality/FooterPriorityLinks';
import * as FooterLegalLinks from 'src/components/vitality/FooterLegalLinks';
import * as FooterColumn from 'src/components/vitality/FooterColumn';
import * as Footer from 'src/components/vitality/Footer';
import * as FeaturesSection from 'src/components/vitality/FeaturesSection';
import * as FeatureCard from 'src/components/vitality/FeatureCard';
import * as FAQSection from 'src/components/vitality/FAQSection';
import * as FAQQuestionAndAnswer from 'src/components/vitality/FAQQuestionAndAnswer';
import * as CTASection from 'src/components/vitality/CTASection';
import * as CoversSection from 'src/components/vitality/CoversSection';
import * as CoverCard from 'src/components/vitality/CoverCard';
import * as ContentSection from 'src/components/vitality/ContentSection';
import * as ContentCard from 'src/components/vitality/ContentCard';
import * as BrandAssuranceSection from 'src/components/vitality/BrandAssuranceSection';
import * as BackupVitCardSection from 'src/components/vitality/BackupVitCardSection';
import * as BackupVitCard from 'src/components/vitality/BackupVitCard';
import * as ArticlesSection from 'src/components/vitality/ArticlesSection';
import * as ArticleCard from 'src/components/vitality/ArticleCard';
import * as sheet from 'src/components/ui/sheet';
import * as input from 'src/components/ui/input';
import * as dropdownmenu from 'src/components/ui/dropdown-menu';
import * as button from 'src/components/ui/button';

export const componentMap = new Map<string, NextjsContentSdkComponent>([
  ['BYOCWrapper', BYOCWrapper],
  ['FEaaSWrapper', FEaaSWrapper],
  ['Form', Form],
  ['WideCardSection', { ...WideCardSection }],
  ['VitalityCardsSection', { ...VitalityCardsSection, componentType: 'client' }],
  ['VitalityCard', { ...VitalityCard, componentType: 'client' }],
  ['TopNavigationMobile', { ...TopNavigationMobile, componentType: 'client' }],
  ['TopNavigation', { ...TopNavigation, componentType: 'client' }],
  ['TextWithImageSection', { ...TextWithImageSection, componentType: 'client' }],
  ['TestimonialsSection', { ...TestimonialsSection, componentType: 'client' }],
  ['ProductCardsSection', { ...ProductCardsSection, componentType: 'client' }],
  ['ProductCard', { ...ProductCard, componentType: 'client' }],
  ['PartialDesignDynamicPlaceholder', { ...PartialDesignDynamicPlaceholder }],
  ['NotificationSection', { ...NotificationSection, componentType: 'client' }],
  ['MainNavigation', { ...MainNavigation }],
  ['HeroSection', { ...HeroSection, componentType: 'client' }],
  ['Header', { ...Header, componentType: 'client' }],
  ['FooterVitality', { ...FooterVitality }],
  ['FooterPriorityLinks', { ...FooterPriorityLinks, componentType: 'client' }],
  ['FooterLegalLinks', { ...FooterLegalLinks, componentType: 'client' }],
  ['FooterColumn', { ...FooterColumn, componentType: 'client' }],
  ['Footer', { ...Footer }],
  ['FeaturesSection', { ...FeaturesSection, componentType: 'client' }],
  ['FeatureCard', { ...FeatureCard, componentType: 'client' }],
  ['FAQSection', { ...FAQSection, componentType: 'client' }],
  ['FAQQuestionAndAnswer', { ...FAQQuestionAndAnswer, componentType: 'client' }],
  ['CTASection', { ...CTASection, componentType: 'client' }],
  ['CoversSection', { ...CoversSection, componentType: 'client' }],
  ['CoverCard', { ...CoverCard, componentType: 'client' }],
  ['ContentSection', { ...ContentSection, componentType: 'client' }],
  ['ContentCard', { ...ContentCard, componentType: 'client' }],
  ['BrandAssuranceSection', { ...BrandAssuranceSection, componentType: 'client' }],
  ['BackupVitCardSection', { ...BackupVitCardSection }],
  ['BackupVitCard', { ...BackupVitCard }],
  ['ArticlesSection', { ...ArticlesSection, componentType: 'client' }],
  ['ArticleCard', { ...ArticleCard, componentType: 'client' }],
  ['sheet', { ...sheet, componentType: 'client' }],
  ['input', { ...input }],
  ['dropdown-menu', { ...dropdownmenu }],
  ['button', { ...button }],
]);

export default componentMap;
