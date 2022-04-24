import { TFunction } from 'react-i18next'
// available name list: https://github.com/iamkun/dayjs/tree/dev/src/locale
// should match dayjs and react-i18-next

export enum Language {
  'EN' = 'en',
  'ZH' = 'zh',
}

export const getLanguageLabel = ({
  t,
}: {
  t: TFunction
}): { [key: string]: string } => ({
  [Language.EN]: t('language.en'),
  [Language.ZH]: t('language.zh'),
})
