import React from 'react';
import { Columns } from '../../../components/Columns/Columns';
import { Description } from '../../../components/Description/Description';
import { Block, cn } from '../../../utils/bem';
import { StorageSet } from './StorageSet';
import './StorageSettings.styl';

export const StorageSettings = () => {
  const rootClass = cn("storage-settings");

  return (
    <Block name="storage-settings">
      <Description style={{marginTop: 0}}>
        Use cloud or database storage as the source for your labeling tasks or the target of your completed annotations.
      </Description>

      <Columns count={2} gap="40px" size="320px" className={rootClass}>
        <StorageSet
          title="Source Cloud Storage"
          buttonLabel="添加源存储"
          rootClass={rootClass}
        />

        <StorageSet
          title="Target Cloud Storage"
          target="export"
          buttonLabel="添加目标存储"
          rootClass={rootClass}
        />
      </Columns>
    </Block>
  );
};

StorageSettings.title = "云存储";
StorageSettings.path = "/storage";
