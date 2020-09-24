import React from 'react'
import MasterPage from '../../Components/common/MasterPage'

const Wrapper = ({ children }) => {
  const menuItems = [
    {
      label: 'Guiding Principle',
      path: '/englishKE/guiding_principles',
    },
    {
      label: 'Long form generic rules',
      path: '',
      subMenus: [
        { label: 'Overview', path: '/englishKE/longform_generic_rules' },
        {
          label: 'Unintelligible or foreign or singing',
          path:
            '/englishKE/longform_generic_rules#unintelligible-or-foreign-or-singing',
        },
        {
          label: 'Segmentation',
          path: '/englishKE/longform_generic_rules#segmentation',
        },
        {
          label: 'Speaker labelling',
          path: '/englishKE/longform_generic_rules#speaker-labeling',
        },
        {
          label: 'Audio labels',
          path: '/englishKE/longform_generic_rules#audio-labels',
        },
        { label: 'PII', path: '/englishKE/longform_generic_rules#PII' },
      ],
    },
    {
      label: 'Transcription Qualtiy',
      path: '',
      subMenus: [
        { label: 'Overview', path: '/englishKE/transcription_quality' },
        { label: 'Typo', path: '/englishKE/transcription_quality#typo' },
        {
          label: 'Context error',
          path: '/englishKE/transcription_quality#context-error',
        },
        {
          label: 'Add or missing word',
          path: '/englishKE/transcription_quality#adding-missing-words',
        },
        {
          label: 'Subsitution',
          path: '/englishKE/transcription_quality#substitution',
        },
        { label: 'Spacing', path: '/englishKE/transcription_quality#spacing' },
      ],
    },
    {
      label: 'Punctuation',
      path: '',
      subMenus: [
        { label: 'Overview', path: '/englishKE/punctuation' },
        {
          label: 'Fragment versus sentence',
          path: '#fragment-versus-sentences',
        },
        { label: 'Commas', path: '/englishKE/punctuation#commas' },
        {
          label: 'Innotation marks',
          path: '/englishKE/punctuation#intonation-marks',
        },
        {
          label: 'Colon and cotation',
          path: '/englishKE/punctuation#colon-and-quotation',
        },
        {
          label: 'Other symbols ',
          path: '/englishKE/punctuation#other-symbols',
        },
        {
          label: 'Spoken punctuation',
          path: '/englishKE/punctuation#spoken-punctuation',
        },
      ],
    },
    {
      label: 'Format',
      path: '',
      subMenus: [
        { label: 'Overview', path: '/englishKE/format' },
        { label: 'Number', path: '/englishKE/format#number' },
        { label: 'Date and time', path: '/englishKE/format#currency-and-unit' },
        { label: 'Commas', path: '/englishKE/format#date-and-time' },
        { label: 'Address', path: '/englishKE/format#address' },
        { label: 'Web', path: '/englishKE/format#web' },
        { label: 'Abbreviation', path: '/englishKE/format#abbreviation' },
      ],
    },
    {
      label: 'Agreed Spelling',
      path: '',
      subMenus: [
        { label: 'Overview', path: '/englishKE/agreed_spelling' },
        {
          label: 'Spelling out ',
          path: '/englishKE/agreed_spelling#spelling-out',
        },
        {
          label: 'Proper names',
          path: '/englishKE/agreed_spelling#interjection',
        },
        {
          label: 'Brand and Product',
          path: '/englishKE/agreed_spelling#brand-and-product',
        },
        {
          label: 'Media title ',
          path: '/englishKE/agreed_spelling#media-title',
        },
        {
          label: 'Multiple spellings ',
          path: '/englishKE/agreed_spelling#multiple-spelling',
        },
      ],
    },
    {
      label: 'Diffiicult Utterances',
      path: '',
      subMenus: [
        { label: 'Overview', path: '/englishKE/difficult_utterances' },
        {
          label: 'Skipping a prompt',
          path: '/englishKE/difficult_utterances#skipping-a-prompt',
        },
        {
          label: 'Hesitations and trancations',
          path: '#hesitations-and-truncations',
        },
        {
          label: 'Background and foreground speech',
          path:
            '/englishKE/difficult_utterances#background-and-foreground-speech',
        },
        {
          label: 'Foreign Language',
          path: '/englishKE/difficult_utterances#foreign-language',
        },
        {
          label: 'Accents ',
          path: '/englishKE/difficult_utterances#accents',
        },
      ],
    },
  ]
  return (
    <MasterPage menuItems={menuItems} appTitle="EnglishKE">
      {children}
    </MasterPage>
  )
}

export default Wrapper
