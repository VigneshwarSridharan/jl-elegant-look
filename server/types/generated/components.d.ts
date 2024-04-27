import type { Schema, Attribute } from '@strapi/strapi';

export interface CommonSingleText extends Schema.Component {
  collectionName: 'components_common_single_texts';
  info: {
    displayName: 'Single Text';
  };
  attributes: {
    value: Attribute.String;
  };
}

export interface CommonSocialMedia extends Schema.Component {
  collectionName: 'components_common_social_medias';
  info: {
    displayName: 'Social Media';
  };
  attributes: {
    icon: Attribute.String;
    link: Attribute.String;
    active: Attribute.Boolean;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'common.single-text': CommonSingleText;
      'common.social-media': CommonSocialMedia;
    }
  }
}
