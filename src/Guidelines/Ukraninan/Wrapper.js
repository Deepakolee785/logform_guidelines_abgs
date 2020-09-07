import React from 'react'
import MasterPage from '../../Components/common/MasterPage'

const Wrapper = ({ children }) => {
  const menuItems = [
    {
      label: 'Guiding Principle',
      path: '/ukraninan/guiding_principles',
    },
    {
      label: 'Long form generic rules',
      path: '',
      subMenus: [
        { label: 'Overview', path: '/ukraninan/longform_generic_rules' },
        {
          label: 'Unintelligible or foreign or singing',
          path:
            '/ukraninan/longform_generic_rules#unintelligible-or-foreign-or-singing',
        },
        {
          label: 'Segmentation',
          path: '/ukraninan/longform_generic_rules#segmentation',
        },
        {
          label: 'Speaker labelling',
          path: '/ukraninan/longform_generic_rules#speaker-labeling',
        },
        {
          label: 'Audio labels',
          path: '/ukraninan/longform_generic_rules#audio-labels',
        },
        { label: 'Pii', path: '/ukraninan/longform_generic_rules#pii' },
      ],
    },
    {
      label: 'Transcription Qualtiy',
      path: '',
      subMenus: [
        { label: 'Overview', path: '/ukraninan/transcription_quality' },
        { label: 'Typo', path: '/ukraninan/transcription_quality#typo' },
        {
          label: 'Context error',
          path: '/ukraninan/transcription_quality#context-error',
        },
        {
          label: 'Add or missing word',
          path: '/ukraninan/transcription_quality#adding-missing-words',
        },
        {
          label: 'Subsitution',
          path: '/ukraninan/transcription_quality#substitution',
        },
        { label: 'Spacing', path: '/ukraninan/transcription_quality#spacing' },
      ],
    },
    {
      label: 'Punctuation',
      path: '',
      subMenus: [
        { label: 'Overview', path: '/ukraninan/punctuation' },
        {
          label: 'Fragment versus sentence',
          path: '/ukraninan/punctuation#fragment-vrsus-sentences',
        },
        { label: 'Commas', path: '/ukraninan/punctuation#commas' },
        {
          label: 'Innotation marks',
          path: '/ukraninan/punctuation#intonation-marks',
        },
        {
          label: 'Colon and cotation',
          path: '/ukraninan/punctuation#colon-and-quotation',
        },
        {
          label: 'Other symbols ',
          path: '/ukraninan/punctuation#other-symbols',
        },
        {
          label: 'Spoken punctuation',
          path: '/ukraninan/punctuation#spoken-punctuation',
        },
      ],
    },
    {
      label: 'Format',
      path: '',
      subMenus: [
        { label: 'Overview', path: '/ukraninan/format' },
        { label: 'Number', path: '/ukraninan/format#number' },
        { label: 'Date and time', path: '/ukraninan/format#currency-and-unit' },
        { label: 'Commas', path: '/ukraninan/format#date-and-time' },
        { label: 'Address', path: '/ukraninan/format#address' },
        { label: 'Web', path: '/ukraninan/format#web' },
        { label: 'Abbreviation', path: '/ukraninan/format#abbreviation' },
      ],
    },
    {
      label: 'Agreed Spelling',
      path: '',
      subMenus: [
        { label: 'Overview', path: '/ukraninan/agreed_spelling' },
        {
          label: 'Spelling out ',
          path: '/ukraninan/agreed_spelling#spelling-out',
        },
        {
          label: 'Proper names',
          path: '/ukraninan/agreed_spelling#interjection',
        },
        {
          label: 'Brand and Product',
          path: '/ukraninan/agreed_spelling#brand-and-product',
        },
        {
          label: 'Media title ',
          path: '/ukraninan/agreed_spelling#media-title',
        },
        {
          label: 'Multiple spellings ',
          path: '/ukraninan/agreed_spelling#multiple-spelling',
        },
      ],
    },
    {
      label: 'Diffiicult Utterances',
      path: '',
      subMenus: [
        { label: 'Overview', path: '/ukraninan/difficult_utterances' },
        {
          label: 'Skipping a prompt',
          path: '/ukraninan/difficult_utterances#skipping-a-prompt',
        },
        {
          label: 'Hesitations and trancations',
          path: '/ukraninan/difficult_utterances#hesitations-and-truncations',
        },
        {
          label: 'Background and foreground speech',
          path:
            '/ukraninan/difficult_utterances#background-and-foreground-speech',
        },
        {
          label: 'Foreign Language',
          path: '/ukraninan/difficult_utterances#foreign-language',
        },
        {
          label: 'Accents ',
          path: '/ukraninan/difficult_utterances#accents',
        },
      ],
    },
  ]
  return (
    <MasterPage menuItems={menuItems} appTitle="Ukraninan">
      {children}
    </MasterPage>
  )
}

export default Wrapper
