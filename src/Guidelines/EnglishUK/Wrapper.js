import React from 'react'
import MasterPage from '../../Components/common/MasterPage'

const Wrapper = ({ children }) => {
  const menuItems = [
    {
      label: 'Guiding Principle',
      path: '/englishUK/guiding_principles',
    },
    {
      label: 'Long form generic rules',
      path: '',
      subMenus: [
        { label: 'Overview', path: '/englishUK/longform_generic_rules' },
        {
          label: 'Unintelligible or foreign or singing',
          path:
            '/englishUK/longform_generic_rules#unintelligible-or-foreign-or-singing',
        },
        {
          label: 'Segmentation',
          path: '/englishUK/longform_generic_rules#segmentation',
        },
        {
          label: 'Speaker labelling',
          path: '/englishUK/longform_generic_rules#speaker-labeling',
        },
        {
          label: 'Audio labels',
          path: '/englishUK/longform_generic_rules#audio-labels',
        },
        { label: 'PII', path: '/englishUK/longform_generic_rules#PII' },
      ],
    },
    {
      label: 'Transcription Qualtiy',
      path: '',
      subMenus: [
        { label: 'Overview', path: '/englishUK/transcription_quality' },
        { label: 'Typo', path: '/englishUK/transcription_quality#typo' },
        {
          label: 'Context error',
          path: '/englishUK/transcription_quality#context-error',
        },
        {
          label: 'Add or missing word',
          path: '/englishUK/transcription_quality#adding-missing-words',
        },
        {
          label: 'Subsitution',
          path: '/englishUK/transcription_quality#substitution',
        },
        { label: 'Spacing', path: '/englishUK/transcription_quality#spacing' },
      ],
    },
    {
      label: 'Punctuation',
      path: '',
      subMenus: [
        { label: 'Overview', path: '/englishUK/punctuation' },
        {
          label: 'Fragment versus sentence',
          path: '#fragment-versus-sentences',
        },
        { label: 'Commas', path: '/englishUK/punctuation#commas' },
        {
          label: 'Innotation marks',
          path: '/englishUK/punctuation#intonation-marks',
        },
        {
          label: 'Colon and cotation',
          path: '/englishUK/punctuation#colon-and-quotation',
        },
        {
          label: 'Other symbols ',
          path: '/englishUK/punctuation#other-symbols',
        },
        {
          label: 'Spoken punctuation',
          path: '/englishUK/punctuation#spoken-punctuation',
        },
      ],
    },
    {
      label: 'Format',
      path: '',
      subMenus: [
        { label: 'Overview', path: '/englishUK/format' },
        { label: 'Number', path: '/englishUK/format#number' },
        { label: 'Date and time', path: '/englishUK/format#currency-and-unit' },
        { label: 'Commas', path: '/englishUK/format#date-and-time' },
        { label: 'Address', path: '/englishUK/format#address' },
        { label: 'Web', path: '/englishUK/format#web' },
        { label: 'Abbreviation', path: '/englishUK/format#abbreviation' },
      ],
    },
    {
      label: 'Agreed Spelling',
      path: '',
      subMenus: [
        { label: 'Overview', path: '/englishUK/agreed_spelling' },
        {
          label: 'Spelling out ',
          path: '/englishUK/agreed_spelling#spelling-out',
        },
        {
          label: 'Proper names',
          path: '/englishUK/agreed_spelling#interjection',
        },
        {
          label: 'Brand and Product',
          path: '/englishUK/agreed_spelling#brand-and-product',
        },
        {
          label: 'Media title ',
          path: '/englishUK/agreed_spelling#media-title',
        },
        {
          label: 'Multiple spellings ',
          path: '/englishUK/agreed_spelling#multiple-spelling',
        },
      ],
    },
    {
      label: 'Diffiicult Utterances',
      path: '',
      subMenus: [
        { label: 'Overview', path: '/englishUK/difficult_utterances' },
        {
          label: 'Skipping a prompt',
          path: '/englishUK/difficult_utterances#skipping-a-prompt',
        },
        {
          label: 'Hesitations and trancations',
          path: '#hesitations-and-truncations',
        },
        {
          label: 'Background and foreground speech',
          path:
            '/englishUK/difficult_utterances#background-and-foreground-speech',
        },
        {
          label: 'Foreign Language',
          path: '/englishUK/difficult_utterances#foreign-language',
        },
        {
          label: 'Accents ',
          path: '/englishUK/difficult_utterances#accents',
        },
      ],
    },
  ]
  return (
    <MasterPage menuItems={menuItems} appTitle="EnglishUK">
      {children}
    </MasterPage>
  )
}

export default Wrapper
