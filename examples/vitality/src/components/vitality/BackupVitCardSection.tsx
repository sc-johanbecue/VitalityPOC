import type { JSX } from 'react';
import { ComponentParams, ComponentRendering, Placeholder } from '@sitecore-content-sdk/nextjs';

interface Fields {}

type ComponentProps = {
  rendering: ComponentRendering & { params: ComponentParams };
  params: ComponentParams;
  fields: Fields;
};

export const Default = (props: ComponentProps): JSX.Element => {
  const id = props.rendering.uid;
  const phBackupVitCards = `VitalityBackupVitCardsContainer-${props.params.DynamicPlaceholderId}`;

  return (
    <div key={id} className="vds-grid">
      <Placeholder name={phBackupVitCards} rendering={props.rendering} />
    </div>
  );
};

