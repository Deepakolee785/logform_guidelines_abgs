import React from 'react'
import MasterPage from '../../Components/common/MasterPage'

const Wrapper = ({ children }) => {
  const menuItems = [
    {
      label: 'Guiding Principle',
      path: '/filipino/guiding_principles',
    },
    {
      label: 'Long form generic rules',
      path: '',
      subMenus: [
        { label: 'Overview', path: '/filipino/longform_generic_rules' },
        {
          label: 'Unintelligible or foreign or singing',
          path:
            '/filipino/longform_generic_rules#unintelligible-or-foreign-or-singing',
        },
        {
          label: 'Segmentation',
          path: '/filipino/longform_generic_rules#segmentation',
        },
        {
          label: 'Speaker labelling',
          path: '/filipino/longform_generic_rules#speaker-labeling',
        },
        {
          label: 'Audio labels',
          path: '/filipino/longform_generic_rules#audio-labels',
        },
        { label: 'PII', path: '/filipino/longform_generic_rules#PII' },
      ],
    },
    {
      label: 'Transcription Qualtiy',
      path: '',
      subMenus: [
        { label: 'Overview', path: '/filipino/transcription_quality' },
        { label: 'Typo', path: '/filipino/transcription_quality#typo' },
        {
          label: 'Context error',
          path: '/filipino/transcription_quality#context-error',
        },
        {
          label: 'Add or missing word',
          path: '/filipino/transcription_quality#adding-missing-words',
        },
        {
          label: 'Subsitution',
          path: '/filipino/transcription_quality#substitution',
        },
        { label: 'Spacing', path: '/filipino/transcription_quality#spacing' },
      ],
    },
    {
      label: 'Punctuation',
      path: '',
      subMenus: [
        { label: 'Overview', path: '/filipino/punctuation' },
        {
          label: 'Fragment versus sentence',
          path: '#fragment-versus-sentences',
        },
        { label: 'Commas', path: '/filipino/punctuation#commas' },
        {
          label: 'Innotation marks',
          path: '/filipino/punctuation#intonation-marks',
        },
        {
          label: 'Colon and cotation',
          path: '/filipino/punctuation#colon-and-quotation',
        },
        {
          label: 'Other symbols ',
          path: '/filipino/punctuation#other-symbols',
        },
        {
          label: 'Spoken punctuation',
          path: '/filipino/punctuation#spoken-punctuation',
        },
      ],
    },
    {
      label: 'Format',
      path: '',
      subMenus: [
        { label: 'Overview', path: '/filipino/format' },
        { label: 'Number', path: '/filipino/format#number' },
        { label: 'Date and time', path: '/filipino/format#currency-and-unit' },
        { label: 'Commas', path: '/filipino/format#date-and-time' },
        { label: 'Address', path: '/filipino/format#address' },
        { label: 'Web', path: '/filipino/format#web' },
        { label: 'Abbreviation', path: '/filipino/format#abbreviation' },
      ],
    },
    {
      label: 'Agreed Spelling',
      path: '',
      subMenus: [
        { label: 'Overview', path: '/filipino/agreed_spelling' },
        {
          label: 'Spelling out ',
          path: '/filipino/agreed_spelling#spelling-out',
        },
        {
          label: 'Proper names',
          path: '/filipino/agreed_spelling#interjection',
        },
        {
          label: 'Brand and Product',
          path: '/filipino/agreed_spelling#brand-and-product',
        },
        {
          label: 'Media title ',
          path: '/filipino/agreed_spelling#media-title',
        },
        {
          label: 'Multiple spellings ',
          path: '/filipino/agreed_spelling#multiple-spelling',
        },
      ],
    },
    {
      label: 'Diffiicult Utterances',
      path: '',
      subMenus: [
        { label: 'Overview', path: '/filipino/difficult_utterances' },
        {
          label: 'Skipping a prompt',
          path: '/filipino/difficult_utterances#skipping-a-prompt',
        },
        {
          label: 'Hesitations and trancations',
          path: '#hesitations-and-truncations',
        },
        {
          label: 'Background and foreground speech',
          path:
            '/filipino/difficult_utterances#background-and-foreground-speech',
        },
        {
          label: 'Foreign Language',
          path: '/filipino/difficult_utterances#foreign-language',
        },
        {
          label: 'Accents ',
          path: '/filipino/difficult_utterances#accents',
        },
      ],
    },
  ]
  return (
    <MasterPage menuItems={menuItems} appTitle="Filipino">
      {children}
    </MasterPage>
  )
}

export default Wrapper
