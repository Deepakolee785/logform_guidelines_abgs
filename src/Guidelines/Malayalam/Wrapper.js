import React from 'react'
import MasterPage from '../../Components/common/MasterPage'

const Wrapper = ({ children }) => {
  const menuItems = [
    {
      label: 'Guiding Principle',
      path: '/malayalam/guiding_principles',
    },
    {
      label: 'Long form generic rules',
      path: '',
      subMenus: [
        { label: 'Overview', path: '/malayalam/longform_generic_rules' },
        {
          label: 'Unintelligible or foreign or singing',
          path:
            '/malayalam/longform_generic_rules#unintelligible-or-foreign-or-singing',
        },
        {
          label: 'Segmentation',
          path: '/malayalam/longform_generic_rules#segmentation',
        },
        {
          label: 'Speaker labelling',
          path: '/malayalam/longform_generic_rules#speaker-labeling',
        },
        {
          label: 'Audio labels',
          path: '/malayalam/longform_generic_rules#audio-labels',
        },
        { label: 'Pii', path: '/malayalam/longform_generic_rules#pii' },
      ],
    },
    {
      label: 'Transcription Qualtiy',
      path: '',
      subMenus: [
        { label: 'Overview', path: '/malayalam/transcription_quality' },
        { label: 'Typo', path: '/malayalam/transcription_quality#typo' },
        {
          label: 'Context error',
          path: '/malayalam/transcription_quality#context-error',
        },
        {
          label: 'Add or missing word',
          path: '/malayalam/transcription_quality#adding-missing-words',
        },
        {
          label: 'Subsitution',
          path: '/malayalam/transcription_quality#substitution',
        },
        { label: 'Spacing', path: '/malayalam/transcription_quality#spacing' },
      ],
    },
    {
      label: 'Punctuation',
      path: '',
      subMenus: [
        { label: 'Overview', path: '/malayalam/punctuation' },
        {
          label: 'Fragment versus sentence',
          path: '#fragment-vrsus-sentences',
        },
        { label: 'Commas', path: '/malayalam/punctuation#commas' },
        {
          label: 'Innotation marks',
          path: '/malayalam/punctuation#intonation-marks',
        },
        {
          label: 'Colon and cotation',
          path: '/malayalam/punctuation#colon-and-quotation',
        },
        {
          label: 'Other symbols ',
          path: '/malayalam/punctuation#other-symbols',
        },
        {
          label: 'Spoken punctuation',
          path: '/malayalam/punctuation#spoken-punctuation',
        },
      ],
    },
    {
      label: 'Format',
      path: '',
      subMenus: [
        { label: 'Overview', path: '/malayalam/format' },
        { label: 'Number', path: '/malayalam/format#number' },
        { label: 'Date and time', path: '/malayalam/format#currency-and-unit' },
        { label: 'Commas', path: '/malayalam/format#date-and-time' },
        { label: 'Address', path: '/malayalam/format#address' },
        { label: 'Web', path: '/malayalam/format#web' },
        { label: 'Abbreviation', path: '/malayalam/format#abbreviation' },
      ],
    },
    {
      label: 'Agreed Spelling',
      path: '',
      subMenus: [
        { label: 'Overview', path: '/malayalam/agreed_spelling' },
        {
          label: 'Spelling out ',
          path: '/malayalam/agreed_spelling#spelling-out',
        },
        {
          label: 'Proper names',
          path: '/malayalam/agreed_spelling#interjection',
        },
        {
          label: 'Brand and Product',
          path: '/malayalam/agreed_spelling#brand-and-product',
        },
        {
          label: 'Media title ',
          path: '/malayalam/agreed_spelling#media-title',
        },
        {
          label: 'Multiple spellings ',
          path: '/malayalam/agreed_spelling#multiple-spelling',
        },
      ],
    },
    {
      label: 'Diffiicult Utterances',
      path: '',
      subMenus: [
        { label: 'Overview', path: '/malayalam/difficult_utterances' },
        {
          label: 'Skipping a prompt',
          path: '/malayalam/difficult_utterances#skipping-a-prompt',
        },
        {
          label: 'Hesitations and trancations',
          path: '/malayalam/difficult_utterances#hesitations-and-truncations',
        },
        {
          label: 'Background and foreground speech',
          path:
            '/malayalam/difficult_utterances#background-and-foreground-speech',
        },
        {
          label: 'Foreign Language',
          path: '/malayalam/difficult_utterances#foreign-language',
        },
        {
          label: 'Accents ',
          path: '/malayalam/difficult_utterances#accents',
        },
      ],
    },
  ]
  return (
    <MasterPage menuItems={menuItems} appTitle="Malayalam">
      {children}
    </MasterPage>
  )
}

export default Wrapper
