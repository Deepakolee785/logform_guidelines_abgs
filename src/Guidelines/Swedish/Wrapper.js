import React from 'react'
import MasterPage from '../../Components/common/MasterPage'

const Wrapper = ({ children }) => {
  const menuItems = [
    {
      label: 'Guiding Principle',
      path: '/swedish/guiding_principles',
    },
    {
      label: 'Long form generic rules',
      path: '',
      subMenus: [
        { label: 'Overview', path: '/swedish/longform_generic_rules' },
        {
          label: 'Unintelligible or foreign or singing',
          path:
            '/swedish/longform_generic_rules#unintelligible-or-foreign-or-singing',
        },
        {
          label: 'Segmentation',
          path: '/swedish/longform_generic_rules#segmentation',
        },
        {
          label: 'Speaker labelling',
          path: '/swedish/longform_generic_rules#speaker-labeling',
        },
        {
          label: 'Audio labels',
          path: '/swedish/longform_generic_rules#audio-labels',
        },
        { label: 'Pii', path: '/swedish/longform_generic_rules#pii' },
      ],
    },
    {
      label: 'Transcription Qualtiy',
      path: '',
      subMenus: [
        { label: 'Overview', path: '/swedish/transcription_quality' },
        { label: 'Typo', path: '/swedish/transcription_quality#typo' },
        {
          label: 'Context error',
          path: '/swedish/transcription_quality#context-error',
        },
        {
          label: 'Add or missing word',
          path: '/swedish/transcription_quality#adding-missing-words',
        },
        {
          label: 'Subsitution',
          path: '/swedish/transcription_quality#substitution',
        },
        { label: 'Spacing', path: '/swedish/transcription_quality#spacing' },
      ],
    },
    {
      label: 'Punctuation',
      path: '',
      subMenus: [
        { label: 'Overview', path: '/swedish/punctuation' },
        {
          label: 'Fragment versus sentence',
          path: '/swedish/punctuation#fragment-vrsus-sentences',
        },
        { label: 'Commas', path: '/swedish/punctuation#commas' },
        {
          label: 'Innotation marks',
          path: '/swedish/punctuation#intonation-marks',
        },
        {
          label: 'Colon and cotation',
          path: '/swedish/punctuation#colon-and-quotation',
        },
        { label: 'Other symbols ', path: '/swedish/punctuation#other-symbols' },
        {
          label: 'Spoken punctuation',
          path: '/swedish/punctuation#spoken-punctuation',
        },
      ],
    },
    {
      label: 'Format',
      path: '',
      subMenus: [
        { label: 'Overview', path: '/swedish/format' },
        { label: 'Number', path: '/swedish/punctuation#number' },
        {
          label: 'Date and time',
          path: '/swedish/punctuation#currency-and-unit',
        },
        { label: 'Commas', path: '/swedish/punctuation#date-and-time' },
        { label: 'Address', path: '/swedish/punctuation#address' },
        { label: 'Web', path: '/swedish/punctuation#web' },
        { label: 'Abbreviation', path: '/swedish/punctuation#abbreviation' },
      ],
    },
    {
      label: 'Agreed Spelling',
      path: '',
      subMenus: [
        { label: 'Overview', path: '/swedish/agreed_spelling' },
        {
          label: 'Spelling out ',
          path: '/swedish/agreed_spelling#spelling-out',
        },
        {
          label: 'Proper names',
          path: '/swedish/agreed_spelling#interjection',
        },
        {
          label: 'Brand and Product',
          path: '/swedish/agreed_spelling#brand-and-product',
        },
        { label: 'Media title ', path: '/swedish/agreed_spelling#media-title' },
        {
          label: 'Multiple spellings ',
          path: '/swedish/agreed_spelling#multiple-spelling',
        },
      ],
    },
    {
      label: 'Diffiicult Utterances',
      path: '',
      subMenus: [
        { label: 'Overview', path: '/swedish/difficult_utterances' },
        {
          label: 'Skipping a prompt',
          path: '/swedish/difficult_utterances#skipping-a-prompt',
        },
        {
          label: 'Hesitations and trancations',
          path: '/swedish/difficult_utterances#hesitations-and-truncations',
        },
        {
          label: 'Background and foreground speech',
          path:
            '/swedish/difficult_utterances#background-and-foreground-speech',
        },
        {
          label: 'Foreign Language',
          path: '/swedish/difficult_utterances#foreign-language',
        },
        {
          label: 'Accents ',
          path: '/swedish/difficult_utterances#accents',
        },
      ],
    },
  ]
  return (
    <MasterPage menuItems={menuItems} appTitle="Swedish">
      {children}
    </MasterPage>
  )
}

export default Wrapper
