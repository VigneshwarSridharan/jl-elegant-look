import type { Schema, Attribute } from '@strapi/strapi';

export interface CommonSeo extends Schema.Component {
  collectionName: 'components_common_seos';
  info: {
    displayName: 'seo';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.Text;
    image: Attribute.Media;
  };
}

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
      'common.seo': CommonSeo;
      'common.single-text': CommonSingleText;
      'common.social-media': CommonSocialMedia;
    }
  }
}
