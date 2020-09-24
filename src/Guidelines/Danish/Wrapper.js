import React from 'react'
import MasterPage from '../../Components/common/MasterPage'

const Wrapper = ({ children }) => {
  const menuItems = [
    {
      label: 'Guiding Principle',
      path: '/danish/guiding_principles',
    },
    {
      label: 'Long form generic rules',
      path: '',
      subMenus: [
        { label: 'Overview', path: '/danish/longform_generic_rules' },
        {
          label: 'Unintelligible or foreign or singing',
          path:
            '/danish/longform_generic_rules#unintelligible-or-foreign-or-singing',
        },
        {
          label: 'Segmentation',
          path: '/danish/longform_generic_rules#segmentation',
        },
        {
          label: 'Speaker labelling',
          path: '/danish/longform_generic_rules#speaker-labeling',
        },
        {
          label: 'Audio labels',
          path: '/danish/longform_generic_rules#audio-labels',
        },
        { label: 'PII', path: '/danish/longform_generic_rules#PII' },
      ],
    },
    {
      label: 'Transcription Qualtiy',
      path: '',
      subMenus: [
        { label: 'Overview', path: '/danish/transcription_quality' },
        { label: 'Typo', path: '/danish/transcription_quality#typo' },
        {
          label: 'Context error',
          path: '/danish/transcription_quality#context-error',
        },
        {
          label: 'Add or missing word',
          path: '/danish/transcription_quality#adding-missing-words',
        },
        {
          label: 'Subsitution',
          path: '/danish/transcription_quality#substitution',
        },
        { label: 'Spacing', path: '/danish/transcription_quality#spacing' },
      ],
    },
    {
      label: 'Punctuation',
      path: '',
      subMenus: [
        { label: 'Overview', path: '/danish/punctuation' },
        {
          label: 'Fragment versus sentence',
          path: '#fragment-versus-sentences',
        },
        { label: 'Commas', path: '/danish/punctuation#commas' },
        {
          label: 'Innotation marks',
          path: '/danish/punctuation#intonation-marks',
        },
        {
          label: 'Colon and cotation',
          path: '/danish/punctuation#colon-and-quotation',
        },
        {
          label: 'Other symbols ',
          path: '/danish/punctuation#other-symbols',
        },
        {
          label: 'Spoken punctuation',
          path: '/danish/punctuation#spoken-punctuation',
        },
      ],
    },
    {
      label: 'Format',
      path: '',
      subMenus: [
        { label: 'Overview', path: '/danish/format' },
        { label: 'Number', path: '/danish/format#number' },
        { label: 'Date and time', path: '/danish/format#currency-and-unit' },
        { label: 'Commas', path: '/danish/format#date-and-time' },
        { label: 'Address', path: '/danish/format#address' },
        { label: 'Web', path: '/danish/format#web' },
        { label: 'Abbreviation', path: '/danish/format#abbreviation' },
      ],
    },
    {
      label: 'Agreed Spelling',
      path: '',
      subMenus: [
        { label: 'Overview', path: '/danish/agreed_spelling' },
        {
          label: 'Spelling out ',
          path: '/danish/agreed_spelling#spelling-out',
        },
        {
          label: 'Proper names',
          path: '/danish/agreed_spelling#interjection',
        },
        {
          label: 'Brand and Product',
          path: '/danish/agreed_spelling#brand-and-product',
        },
        {
          label: 'Media title ',
          path: '/danish/agreed_spelling#media-title',
        },
        {
          label: 'Multiple spellings ',
          path: '/danish/agreed_spelling#multiple-spelling',
        },
      ],
    },
    {
      label: 'Diffiicult Utterances',
      path: '',
      subMenus: [
        { label: 'Overview', path: '/danish/difficult_utterances' },
        {
          label: 'Skipping a prompt',
          path: '/danish/difficult_utterances#skipping-a-prompt',
        },
        {
          label: 'Hesitations and trancations',
          path: '#hesitations-and-truncations',
        },
        {
          label: 'Background and foreground speech',
          path: '/danish/difficult_utterances#background-and-foreground-speech',
        },
        {
          label: 'Foreign Language',
          path: '/danish/difficult_utterances#foreign-language',
        },
        {
          label: 'Accents ',
          path: '/danish/difficult_utterances#accents',
        },
      ],
    },
  ]
  return (
    <MasterPage menuItems={menuItems} appTitle="Danish">
      {children}
    </MasterPage>
  )
}

export default Wrapper
