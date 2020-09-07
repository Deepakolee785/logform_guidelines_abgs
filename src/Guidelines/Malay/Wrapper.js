import React from 'react'
import MasterPage from '../../Components/common/MasterPage'

const Wrapper = ({ children }) => {
  const menuItems = [
    {
      label: 'Guiding Principle',
      path: '/malay/guiding_principles',
    },
    {
      label: 'Long form generic rules',
      path: '',
      subMenus: [
        { label: 'Overview', path: '/malay/longform_generic_rules' },
        {
          label: 'Unintelligible or foreign or singing',
          path:
            '/malay/longform_generic_rules#unintelligible-or-foreign-or-singing',
        },
        {
          label: 'Segmentation',
          path: '/malay/longform_generic_rules#segmentation',
        },
        {
          label: 'Speaker labelling',
          path: '/malay/longform_generic_rules#speaker-labeling',
        },
        {
          label: 'Audio labels',
          path: '/malay/longform_generic_rules#audio-labels',
        },
        { label: 'Pii', path: '/malay/longform_generic_rules#pii' },
      ],
    },
    {
      label: 'Transcription Qualtiy',
      path: '',
      subMenus: [
        { label: 'Overview', path: '/malay/transcription_quality' },
        { label: 'Typo', path: '/malay/transcription_quality#typo' },
        {
          label: 'Context error',
          path: '/malay/transcription_quality#context-error',
        },
        {
          label: 'Add or missing word',
          path: '/malay/transcription_quality#adding-missing-words',
        },
        {
          label: 'Subsitution',
          path: '/malay/transcription_quality#substitution',
        },
        { label: 'Spacing', path: '/malay/transcription_quality#spacing' },
      ],
    },
    {
      label: 'Punctuation',
      path: '',
      subMenus: [
        { label: 'Overview', path: '/malay/punctuation' },
        {
          label: 'Fragment versus sentence',
          path: '/malay/punctuation#fragment-vrsus-sentences',
        },
        { label: 'Commas', path: '/malay/punctuation#commas' },
        {
          label: 'Innotation marks',
          path: '/malay/punctuation#intonation-marks',
        },
        {
          label: 'Colon and cotation',
          path: '/malay/punctuation#colon-and-quotation',
        },
        { label: 'Other symbols ', path: '/malay/punctuation#other-symbols' },
        {
          label: 'Spoken punctuation',
          path: '/malay/punctuation#spoken-punctuation',
        },
      ],
    },
    {
      label: 'Format',
      path: '',
      subMenus: [
        { label: 'Overview', path: '/malay/format' },
        { label: 'Number', path: '/malay/format#number' },
        { label: 'Date and time', path: '/malay/format#currency-and-unit' },
        { label: 'Commas', path: '/malay/format#date-and-time' },
        { label: 'Address', path: '/malay/format#address' },
        { label: 'Web', path: '/malay/format#web' },
        { label: 'Abbreviation', path: '/malay/format#abbreviation' },
      ],
    },
    {
      label: 'Agreed Spelling',
      path: '',
      subMenus: [
        { label: 'Overview', path: '/malay/agreed_spelling' },
        { label: 'Spelling out ', path: '/malay/agreed_spelling#spelling-out' },
        { label: 'Proper names', path: '/malay/agreed_spelling#interjection' },
        {
          label: 'Brand and Product',
          path: '/malay/agreed_spelling#brand-and-product',
        },
        { label: 'Media title ', path: '/malay/agreed_spelling#media-title' },
        {
          label: 'Multiple spellings ',
          path: '/malay/agreed_spelling#multiple-spelling',
        },
      ],
    },
    {
      label: 'Diffiicult Utterances',
      path: '',
      subMenus: [
        { label: 'Overview', path: '/malay/difficult_utterances' },
        {
          label: 'Skipping a prompt',
          path: '/malay/difficult_utterances#skipping-a-prompt',
        },
        {
          label: 'Hesitations and trancations',
          path: '/malay/difficult_utterances#hesitations-and-truncations',
        },
        {
          label: 'Background and foreground speech',
          path: '/malay/difficult_utterances#background-and-foreground-speech',
        },
        {
          label: 'Foreign Language',
          path: '/malay/difficult_utterances#foreign-language',
        },
        {
          label: 'Accents ',
          path: '/malay/difficult_utterances#accents',
        },
      ],
    },
  ]
  return (
    <MasterPage menuItems={menuItems} appTitle="Malay">
      {children}
    </MasterPage>
  )
}

export default Wrapper
