import React from 'react'
import MasterPage from '../../Components/common/MasterPage'

const Wrapper = ({ children }) => {
  const menuItems = [
    {
      label: 'Guiding Principle',
      path: '/gujarati/guiding_principles',
    },
    {
      label: 'Long form generic rules',
      path: '',
      subMenus: [
        { label: 'Overview', path: '/gujarati/longform_generic_rules' },
        {
          label: 'Unintelligible or foreign or singing',
          path:
            '/gujarati/longform_generic_rules#unintelligible-or-foreign-or-singing',
        },
        {
          label: 'Segmentation',
          path: '/gujarati/longform_generic_rules#segmentation',
        },
        {
          label: 'Speaker labelling',
          path: '/gujarati/longform_generic_rules#speaker-labeling',
        },
        {
          label: 'Audio labels',
          path: '/gujarati/longform_generic_rules#audio-labels',
        },
        { label: 'Pii', path: '/gujarati/longform_generic_rules#pii' },
      ],
    },
    {
      label: 'Transcription Qualtiy',
      path: '',
      subMenus: [
        { label: 'Overview', path: '/gujarati/transcription_quality' },
        { label: 'Typo', path: '/gujarati/transcription_quality#typo' },
        {
          label: 'Context error',
          path: '/gujarati/transcription_quality#context-error',
        },
        {
          label: 'Add or missing word',
          path: '/gujarati/transcription_quality#adding-missing-words',
        },
        {
          label: 'Subsitution',
          path: '/gujarati/transcription_quality#substitution',
        },
        { label: 'Spacing', path: '/gujarati/transcription_quality#spacing' },
      ],
    },
    {
      label: 'Punctuation',
      path: '',
      subMenus: [
        { label: 'Overview', path: '/gujarati/punctuation' },
        {
          label: 'Fragment versus sentence',
          path: '/gujarati/punctuation#fragment-vrsus-sentences',
        },
        { label: 'Commas', path: '/gujarati/punctuation#commas' },
        {
          label: 'Innotation marks',
          path: '/gujarati/punctuation#intonation-marks',
        },
        {
          label: 'Colon and cotation',
          path: '/gujarati/punctuation#colon-and-quotation',
        },
        {
          label: 'Other symbols ',
          path: '/gujarati/punctuation#other-symbols',
        },
        {
          label: 'Spoken punctuation',
          path: '/gujarati/punctuation#spoken-punctuation',
        },
      ],
    },
    {
      label: 'Format',
      path: '',
      subMenus: [
        { label: 'Overview', path: '/gujarati/format' },
        { label: 'Number', path: '/gujarati/format#number' },
        { label: 'Date and time', path: '/gujarati/format#currency-and-unit' },
        { label: 'Commas', path: '/gujarati/format#date-and-time' },
        { label: 'Address', path: '/gujarati/format#address' },
        { label: 'Web', path: '/gujarati/format#web' },
        { label: 'Abbreviation', path: '/gujarati/format#abbreviation' },
      ],
    },
    {
      label: 'Agreed Spelling',
      path: '',
      subMenus: [
        { label: 'Overview', path: '/gujarati/agreed_spelling' },
        {
          label: 'Spelling out ',
          path: '/gujarati/agreed_spelling#spelling-out',
        },
        {
          label: 'Proper names',
          path: '/gujarati/agreed_spelling#interjection',
        },
        {
          label: 'Brand and Product',
          path: '/gujarati/agreed_spelling#brand-and-product',
        },
        {
          label: 'Media title ',
          path: '/gujarati/agreed_spelling#media-title',
        },
        {
          label: 'Multiple spellings ',
          path: '/gujarati/agreed_spelling#multiple-spelling',
        },
      ],
    },
    {
      label: 'Diffiicult Utterances',
      path: '',
      subMenus: [
        { label: 'Overview', path: '/gujarati/difficult_utterances' },
        {
          label: 'Skipping a prompt',
          path: '/gujarati/difficult_utterances#skipping-a-prompt',
        },
        {
          label: 'Hesitations and trancations',
          path: '/gujarati/difficult_utterances#hesitations-and-truncations',
        },
        {
          label: 'Background and foreground speech',
          path:
            '/gujarati/difficult_utterances#background-and-foreground-speech',
        },
        {
          label: 'Foreign Language',
          path: '/gujarati/difficult_utterances#foreign-language',
        },
        {
          label: 'Accents ',
          path: '/gujarati/difficult_utterances#accents',
        },
      ],
    },
  ]
  return (
    <MasterPage menuItems={menuItems} appTitle="Gujarati">
      {children}
    </MasterPage>
  )
}

export default Wrapper
