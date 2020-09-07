import React from 'react'
import MasterPage from '../../Components/common/MasterPage'

const Wrapper = ({ children }) => {
  const menuItems = [
    {
      label: 'Guiding Principle',
      path: '/nepali/guiding_principles',
    },
    {
      label: 'Long form generic rules',
      path: '',
      subMenus: [
        { label: 'Overview', path: '/nepali/longform_generic_rules' },
        {
          label: 'Unintelligible or foreign or singing',
          path:
            '/nepali/longform_generic_rules#unintelligible-or-foreign-or-singing',
        },
        {
          label: 'Segmentation',
          path: '/nepali/longform_generic_rules#segmentation',
        },
        {
          label: 'Speaker labelling',
          path: '/nepali/longform_generic_rules#speaker-labeling',
        },
        {
          label: 'Audio labels',
          path: '/nepali/longform_generic_rules#audio-labels',
        },
        { label: 'Pii', path: '/nepali/longform_generic_rules#pii' },
      ],
    },
    {
      label: 'Transcription Qualtiy',
      path: '',
      subMenus: [
        { label: 'Overview', path: '/nepali/transcription_quality' },
        { label: 'Typo', path: '/nepali/transcription_quality#typo' },
        {
          label: 'Context error',
          path: '/nepali/transcription_quality#context-error',
        },
        {
          label: 'Add or missing word',
          path: '/nepali/transcription_quality#adding-missing-words',
        },
        {
          label: 'Subsitution',
          path: '/nepali/transcription_quality#substitution',
        },
        { label: 'Spacing', path: '/nepali/transcription_quality#spacing' },
      ],
    },
    {
      label: 'Punctuation',
      path: '',
      subMenus: [
        { label: 'Overview', path: '/nepali/punctuation' },
        {
          label: 'Fragment versus sentence',
          path: '/nepali/punctuation#fragment-vrsus-sentences',
        },
        { label: 'Commas', path: '/nepali/punctuation#commas' },
        {
          label: 'Innotation marks',
          path: '/nepali/punctuation#intonation-marks',
        },
        {
          label: 'Colon and cotation',
          path: '/nepali/punctuation#colon-and-quotation',
        },
        { label: 'Other symbols ', path: '/nepali/punctuation#other-symbols' },
        {
          label: 'Spoken punctuation',
          path: '/nepali/punctuation#spoken-punctuation',
        },
      ],
    },
    {
      label: 'Format',
      path: '',
      subMenus: [
        { label: 'Overview', path: '/nepali/format' },
        { label: 'Number', path: '/nepali/format#number' },
        { label: 'Date and time', path: '/nepali/format#currency-and-unit' },
        { label: 'Commas', path: '/nepali/format#date-and-time' },
        { label: 'Address', path: '/nepali/format#address' },
        { label: 'Web', path: '/nepali/format#web' },
        { label: 'Abbreviation', path: '/nepali/format#abbreviation' },
      ],
    },
    {
      label: 'Agreed Spelling',
      path: '',
      subMenus: [
        { label: 'Overview', path: '/nepali/agreed_spelling' },
        {
          label: 'Spelling out ',
          path: '/nepali/agreed_spelling#spelling-out',
        },
        { label: 'Proper names', path: '/nepali/agreed_spelling#interjection' },
        {
          label: 'Brand and Product',
          path: '/nepali/agreed_spelling#brand-and-product',
        },
        { label: 'Media title ', path: '/nepali/agreed_spelling#media-title' },
        {
          label: 'Multiple spellings ',
          path: '/nepali/agreed_spelling#multiple-spelling',
        },
      ],
    },
    {
      label: 'Diffiicult Utterances',
      path: '',
      subMenus: [
        { label: 'Overview', path: '/nepali/difficult_utterances' },
        {
          label: 'Skipping a prompt',
          path: '/nepali/difficult_utterances#skipping-a-prompt',
        },
        {
          label: 'Hesitations and trancations',
          path: '/nepali/difficult_utterances#hesitations-and-truncations',
        },
        {
          label: 'Background and foreground speech',
          path: '/nepali/difficult_utterances#background-and-foreground-speech',
        },
        {
          label: 'Foreign Language',
          path: '/nepali/difficult_utterances#foreign-language',
        },
        {
          label: 'Accents ',
          path: '/nepali/difficult_utterances#accents',
        },
      ],
    },
  ]
  return (
    <MasterPage menuItems={menuItems} appTitle="Nepali">
      {children}
    </MasterPage>
  )
}

export default Wrapper
