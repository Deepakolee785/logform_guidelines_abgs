import React from 'react'
import MasterPage from '../../Components/common/MasterPage'

const Wrapper = ({ children }) => {
  const menuItems = [
    {
      label: 'Guiding Principle',
      path: '/javanese/guiding_principles',
    },
    {
      label: 'Long form generic rules',
      path: '',
      subMenus: [
        { label: 'Overview', path: '/javanese/longform_generic_rules' },
        {
          label: 'Unintelligible or foreign or singing',
          path:
            '/javanese/longform_generic_rules#unintelligible-or-foreign-or-singing',
        },
        {
          label: 'Segmentation',
          path: '/javanese/longform_generic_rules#segmentation',
        },
        {
          label: 'Speaker labelling',
          path: '/javanese/longform_generic_rules#speaker-labeling',
        },
        {
          label: 'Audio labels',
          path: '/javanese/longform_generic_rules#audio-labels',
        },
        { label: 'PII', path: '/javanese/longform_generic_rules#PII' },
      ],
    },
    {
      label: 'Transcription Qualtiy',
      path: '',
      subMenus: [
        { label: 'Overview', path: '/javanese/transcription_quality' },
        { label: 'Typo', path: '/javanese/transcription_quality#typo' },
        {
          label: 'Context error',
          path: '/javanese/transcription_quality#context-error',
        },
        {
          label: 'Add or missing word',
          path: '/javanese/transcription_quality#adding-missing-words',
        },
        {
          label: 'Subsitution',
          path: '/javanese/transcription_quality#substitution',
        },
        { label: 'Spacing', path: '/javanese/transcription_quality#spacing' },
      ],
    },
    {
      label: 'Punctuation',
      path: '',
      subMenus: [
        { label: 'Overview', path: '/javanese/punctuation' },
        {
          label: 'Fragment versus sentence',
          path: '#fragment-versus-sentences',
        },
        { label: 'Commas', path: '/javanese/punctuation#commas' },
        {
          label: 'Innotation marks',
          path: '/javanese/punctuation#intonation-marks',
        },
        {
          label: 'Colon and cotation',
          path: '/javanese/punctuation#colon-and-quotation',
        },
        {
          label: 'Other symbols ',
          path: '/javanese/punctuation#other-symbols',
        },
        {
          label: 'Spoken punctuation',
          path: '/javanese/punctuation#spoken-punctuation',
        },
      ],
    },
    {
      label: 'Format',
      path: '',
      subMenus: [
        { label: 'Overview', path: '/javanese/format' },
        { label: 'Number', path: '/javanese/format#number' },
        { label: 'Date and time', path: '/javanese/format#currency-and-unit' },
        { label: 'Commas', path: '/javanese/format#date-and-time' },
        { label: 'Address', path: '/javanese/format#address' },
        { label: 'Web', path: '/javanese/format#web' },
        { label: 'Abbreviation', path: '/javanese/format#abbreviation' },
      ],
    },
    {
      label: 'Agreed Spelling',
      path: '',
      subMenus: [
        { label: 'Overview', path: '/javanese/agreed_spelling' },
        {
          label: 'Spelling out ',
          path: '/javanese/agreed_spelling#spelling-out',
        },
        {
          label: 'Proper names',
          path: '/javanese/agreed_spelling#interjection',
        },
        {
          label: 'Brand and Product',
          path: '/javanese/agreed_spelling#brand-and-product',
        },
        {
          label: 'Media title ',
          path: '/javanese/agreed_spelling#media-title',
        },
        {
          label: 'Multiple spellings ',
          path: '/javanese/agreed_spelling#multiple-spelling',
        },
      ],
    },
    {
      label: 'Diffiicult Utterances',
      path: '',
      subMenus: [
        { label: 'Overview', path: '/javanese/difficult_utterances' },
        {
          label: 'Skipping a prompt',
          path: '/javanese/difficult_utterances#skipping-a-prompt',
        },
        {
          label: 'Hesitations and trancations',
          path: '#hesitations-and-truncations',
        },
        {
          label: 'Background and foreground speech',
          path:
            '/javanese/difficult_utterances#background-and-foreground-speech',
        },
        {
          label: 'Foreign Language',
          path: '/javanese/difficult_utterances#foreign-language',
        },
        {
          label: 'Accents ',
          path: '/javanese/difficult_utterances#accents',
        },
      ],
    },
  ]
  return (
    <MasterPage menuItems={menuItems} appTitle="Javanese">
      {children}
    </MasterPage>
  )
}

export default Wrapper
