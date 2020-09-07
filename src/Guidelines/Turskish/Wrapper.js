import React from 'react'
import MasterPage from '../../Components/common/MasterPage'

const Wrapper = ({ children }) => {
  const menuItems = [
    {
      label: 'Guiding Principle',
      path: '/turskish/guiding_principles',
    },
    {
      label: 'Long form generic rules',
      path: '',
      subMenus: [
        { label: 'Overview', path: '/turskish/longform_generic_rules' },
        {
          label: 'Unintelligible or foreign or singing',
          path:
            '/turskish/longform_generic_rules#unintelligible-or-foreign-or-singing',
        },
        {
          label: 'Segmentation',
          path: '/turskish/longform_generic_rules#segmentation',
        },
        {
          label: 'Speaker labelling',
          path: '/turskish/longform_generic_rules#speaker-labeling',
        },
        {
          label: 'Audio labels',
          path: '/turskish/longform_generic_rules#audio-labels',
        },
        { label: 'Pii', path: '/turskish/longform_generic_rules#pii' },
      ],
    },
    {
      label: 'Transcription Qualtiy',
      path: '',
      subMenus: [
        { label: 'Overview', path: '/turskish/transcription_quality' },
        { label: 'Typo', path: '/turskish/transcription_quality#typo' },
        {
          label: 'Context error',
          path: '/turskish/transcription_quality#context-error',
        },
        {
          label: 'Add or missing word',
          path: '/turskish/transcription_quality#adding-missing-words',
        },
        {
          label: 'Subsitution',
          path: '/turskish/transcription_quality#substitution',
        },
        { label: 'Spacing', path: '/turskish/transcription_quality#spacing' },
      ],
    },
    {
      label: 'Punctuation',
      path: '',
      subMenus: [
        { label: 'Overview', path: '/turskish/punctuation' },
        {
          label: 'Fragment versus sentence',
          path: '/turskish/punctuation#fragment-vrsus-sentences',
        },
        { label: 'Commas', path: '/turskish/punctuation#commas' },
        {
          label: 'Innotation marks',
          path: '/turskish/punctuation#intonation-marks',
        },
        {
          label: 'Colon and cotation',
          path: '/turskish/punctuation#colon-and-quotation',
        },
        {
          label: 'Other symbols ',
          path: '/turskish/punctuation#other-symbols',
        },
        {
          label: 'Spoken punctuation',
          path: '/turskish/punctuation#spoken-punctuation',
        },
      ],
    },
    {
      label: 'Format',
      path: '',
      subMenus: [
        { label: 'Overview', path: '/turskish/format' },
        { label: 'Number', path: '/turskish/format#number' },
        { label: 'Date and time', path: '/turskish/format#currency-and-unit' },
        { label: 'Commas', path: '/turskish/format#date-and-time' },
        { label: 'Address', path: '/turskish/format#address' },
        { label: 'Web', path: '/turskish/format#web' },
        { label: 'Abbreviation', path: '/turskish/format#abbreviation' },
      ],
    },
    {
      label: 'Agreed Spelling',
      path: '',
      subMenus: [
        { label: 'Overview', path: '/turskish/agreed_spelling' },
        {
          label: 'Spelling out ',
          path: '/turskish/agreed_spelling#spelling-out',
        },
        {
          label: 'Proper names',
          path: '/turskish/agreed_spelling#interjection',
        },
        {
          label: 'Brand and Product',
          path: '/turskish/agreed_spelling#brand-and-product',
        },
        {
          label: 'Media title ',
          path: '/turskish/agreed_spelling#media-title',
        },
        {
          label: 'Multiple spellings ',
          path: '/turskish/agreed_spelling#multiple-spelling',
        },
      ],
    },
    {
      label: 'Diffiicult Utterances',
      path: '',
      subMenus: [
        { label: 'Overview', path: '/turskish/difficult_utterances' },
        {
          label: 'Skipping a prompt',
          path: '/turskish/difficult_utterances#skipping-a-prompt',
        },
        {
          label: 'Hesitations and trancations',
          path: '/turskish/difficult_utterances#hesitations-and-truncations',
        },
        {
          label: 'Background and foreground speech',
          path:
            '/turskish/difficult_utterances#background-and-foreground-speech',
        },
        {
          label: 'Foreign Language',
          path: '/turskish/difficult_utterances#foreign-language',
        },
        {
          label: 'Accents ',
          path: '/turskish/difficult_utterances#accents',
        },
      ],
    },
  ]
  return (
    <MasterPage menuItems={menuItems} appTitle="Turskish">
      {children}
    </MasterPage>
  )
}

export default Wrapper
