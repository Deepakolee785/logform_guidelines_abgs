import React from 'react'
import MasterPage from '../../Components/common/MasterPage'

const Wrapper = ({ children }) => {
  const menuItems = [
    {
      label: 'Guiding Principle',
      path: '/spanish/guiding_principles',
    },
    {
      label: 'Long form generic rules',
      path: '',
      subMenus: [
        { label: 'Overview', path: '/spanish/longform_generic_rules' },
        {
          label: 'Unintelligible or foreign or singing',
          path:
            '/spanish/longform_generic_rules#unintelligible-or-foreign-or-singing',
        },
        {
          label: 'Segmentation',
          path: '/spanish/longform_generic_rules#segmentation',
        },
        {
          label: 'Speaker labelling',
          path: '/spanish/longform_generic_rules#speaker-labeling',
        },
        {
          label: 'Audio labels',
          path: '/spanish/longform_generic_rules#audio-labels',
        },
        { label: 'PII', path: '/spanish/longform_generic_rules#PII' },
      ],
    },
    {
      label: 'Transcription Qualtiy',
      path: '',
      subMenus: [
        { label: 'Overview', path: '/spanish/transcription_quality' },
        { label: 'Typo', path: '/spanish/transcription_quality#typo' },
        {
          label: 'Context error',
          path: '/spanish/transcription_quality#context-error',
        },
        {
          label: 'Add or missing word',
          path: '/spanish/transcription_quality#adding-missing-words',
        },
        {
          label: 'Subsitution',
          path: '/spanish/transcription_quality#substitution',
        },
        { label: 'Spacing', path: '/spanish/transcription_quality#spacing' },
      ],
    },
    {
      label: 'Punctuation',
      path: '',
      subMenus: [
        { label: 'Overview', path: '/spanish/punctuation' },
        {
          label: 'Fragment versus sentence',
          path: '#fragment-versus-sentences',
        },
        { label: 'Commas', path: '/spanish/punctuation#commas' },
        {
          label: 'Innotation marks',
          path: '/spanish/punctuation#intonation-marks',
        },
        {
          label: 'Colon and cotation',
          path: '/spanish/punctuation#colon-and-quotation',
        },
        {
          label: 'Other symbols ',
          path: '/spanish/punctuation#other-symbols',
        },
        {
          label: 'Spoken punctuation',
          path: '/spanish/punctuation#spoken-punctuation',
        },
      ],
    },
    {
      label: 'Format',
      path: '',
      subMenus: [
        { label: 'Overview', path: '/spanish/format' },
        { label: 'Number', path: '/spanish/format#number' },
        { label: 'Date and time', path: '/spanish/format#currency-and-unit' },
        { label: 'Commas', path: '/spanish/format#date-and-time' },
        { label: 'Address', path: '/spanish/format#address' },
        { label: 'Web', path: '/spanish/format#web' },
        { label: 'Abbreviation', path: '/spanish/format#abbreviation' },
      ],
    },
    {
      label: 'Agreed Spelling',
      path: '',
      subMenus: [
        { label: 'Overview', path: '/spanish/agreed_spelling' },
        {
          label: 'Spelling out ',
          path: '/spanish/agreed_spelling#spelling-out',
        },
        {
          label: 'Proper names',
          path: '/spanish/agreed_spelling#interjection',
        },
        {
          label: 'Brand and Product',
          path: '/spanish/agreed_spelling#brand-and-product',
        },
        {
          label: 'Media title ',
          path: '/spanish/agreed_spelling#media-title',
        },
        {
          label: 'Multiple spellings ',
          path: '/spanish/agreed_spelling#multiple-spelling',
        },
      ],
    },
    {
      label: 'Diffiicult Utterances',
      path: '',
      subMenus: [
        { label: 'Overview', path: '/spanish/difficult_utterances' },
        {
          label: 'Skipping a prompt',
          path: '/spanish/difficult_utterances#skipping-a-prompt',
        },
        {
          label: 'Hesitations and trancations',
          path: '#hesitations-and-truncations',
        },
        {
          label: 'Background and foreground speech',
          path:
            '/spanish/difficult_utterances#background-and-foreground-speech',
        },
        {
          label: 'Foreign Language',
          path: '/spanish/difficult_utterances#foreign-language',
        },
        {
          label: 'Accents ',
          path: '/spanish/difficult_utterances#accents',
        },
      ],
    },
  ]
  return (
    <MasterPage menuItems={menuItems} appTitle="Spanish">
      {children}
    </MasterPage>
  )
}

export default Wrapper
