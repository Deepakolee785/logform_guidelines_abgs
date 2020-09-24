import React from 'react'
import MasterPage from '../../Components/common/MasterPage'

const Wrapper = ({ children }) => {
  const menuItems = [
    {
      label: 'Guiding Principle',
      path: '/french/guiding_principles',
    },
    {
      label: 'Long form generic rules',
      path: '',
      subMenus: [
        { label: 'Overview', path: '/french/longform_generic_rules' },
        {
          label: 'Unintelligible or foreign or singing',
          path:
            '/french/longform_generic_rules#unintelligible-or-foreign-or-singing',
        },
        {
          label: 'Segmentation',
          path: '/french/longform_generic_rules#segmentation',
        },
        {
          label: 'Speaker labelling',
          path: '/french/longform_generic_rules#speaker-labeling',
        },
        {
          label: 'Audio labels',
          path: '/french/longform_generic_rules#audio-labels',
        },
        { label: 'PII', path: '/french/longform_generic_rules#PII' },
      ],
    },
    {
      label: 'Transcription Qualtiy',
      path: '',
      subMenus: [
        { label: 'Overview', path: '/french/transcription_quality' },
        { label: 'Typo', path: '/french/transcription_quality#typo' },
        {
          label: 'Context error',
          path: '/french/transcription_quality#context-error',
        },
        {
          label: 'Add or missing word',
          path: '/french/transcription_quality#adding-missing-words',
        },
        {
          label: 'Subsitution',
          path: '/french/transcription_quality#substitution',
        },
        { label: 'Spacing', path: '/french/transcription_quality#spacing' },
      ],
    },
    {
      label: 'Punctuation',
      path: '',
      subMenus: [
        { label: 'Overview', path: '/french/punctuation' },
        {
          label: 'Fragment versus sentence',
          path: '#fragment-versus-sentences',
        },
        { label: 'Commas', path: '/french/punctuation#commas' },
        {
          label: 'Innotation marks',
          path: '/french/punctuation#intonation-marks',
        },
        {
          label: 'Colon and cotation',
          path: '/french/punctuation#colon-and-quotation',
        },
        {
          label: 'Other symbols ',
          path: '/french/punctuation#other-symbols',
        },
        {
          label: 'Spoken punctuation',
          path: '/french/punctuation#spoken-punctuation',
        },
      ],
    },
    {
      label: 'Format',
      path: '',
      subMenus: [
        { label: 'Overview', path: '/french/format' },
        { label: 'Number', path: '/french/format#number' },
        { label: 'Date and time', path: '/french/format#currency-and-unit' },
        { label: 'Commas', path: '/french/format#date-and-time' },
        { label: 'Address', path: '/french/format#address' },
        { label: 'Web', path: '/french/format#web' },
        { label: 'Abbreviation', path: '/french/format#abbreviation' },
      ],
    },
    {
      label: 'Agreed Spelling',
      path: '',
      subMenus: [
        { label: 'Overview', path: '/french/agreed_spelling' },
        {
          label: 'Spelling out ',
          path: '/french/agreed_spelling#spelling-out',
        },
        {
          label: 'Proper names',
          path: '/french/agreed_spelling#interjection',
        },
        {
          label: 'Brand and Product',
          path: '/french/agreed_spelling#brand-and-product',
        },
        {
          label: 'Media title ',
          path: '/french/agreed_spelling#media-title',
        },
        {
          label: 'Multiple spellings ',
          path: '/french/agreed_spelling#multiple-spelling',
        },
      ],
    },
    {
      label: 'Diffiicult Utterances',
      path: '',
      subMenus: [
        { label: 'Overview', path: '/french/difficult_utterances' },
        {
          label: 'Skipping a prompt',
          path: '/french/difficult_utterances#skipping-a-prompt',
        },
        {
          label: 'Hesitations and trancations',
          path: '#hesitations-and-truncations',
        },
        {
          label: 'Background and foreground speech',
          path: '/french/difficult_utterances#background-and-foreground-speech',
        },
        {
          label: 'Foreign Language',
          path: '/french/difficult_utterances#foreign-language',
        },
        {
          label: 'Accents ',
          path: '/french/difficult_utterances#accents',
        },
      ],
    },
  ]
  return (
    <MasterPage menuItems={menuItems} appTitle="French">
      {children}
    </MasterPage>
  )
}

export default Wrapper
