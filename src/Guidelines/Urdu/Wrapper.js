import React from 'react'
import MasterPage from '../../Components/common/MasterPage'

const Wrapper = ({ children }) => {
  const menuItems = [
    {
      label: 'Guiding Principle',
      path: '/urdu/guiding_principles',
    },
    {
      label: 'Long form generic rules',
      path: '',
      subMenus: [
        { label: 'Overview', path: '/urdu/longform_generic_rules' },
        {
          label: 'Unintelligible or foreign or singing',
          path:
            '/urdu/longform_generic_rules#unintelligible-or-foreign-or-singing',
        },
        {
          label: 'Segmentation',
          path: '/urdu/longform_generic_rules#segmentation',
        },
        {
          label: 'Speaker labelling',
          path: '/urdu/longform_generic_rules#speaker-labeling',
        },
        {
          label: 'Audio labels',
          path: '/urdu/longform_generic_rules#audio-labels',
        },
        { label: 'Pii', path: '/urdu/longform_generic_rules#pii' },
      ],
    },
    {
      label: 'Transcription Qualtiy',
      path: '',
      subMenus: [
        { label: 'Overview', path: '/urdu/transcription_quality' },
        { label: 'Typo', path: '/urdu/transcription_quality#typo' },
        {
          label: 'Context error',
          path: '/urdu/transcription_quality#context-error',
        },
        {
          label: 'Add or missing word',
          path: '/urdu/transcription_quality#adding-missing-words',
        },
        {
          label: 'Subsitution',
          path: '/urdu/transcription_quality#substitution',
        },
        { label: 'Spacing', path: '/urdu/transcription_quality#spacing' },
      ],
    },
    {
      label: 'Punctuation',
      path: '',
      subMenus: [
        { label: 'Overview', path: '/urdu/punctuation' },
        {
          label: 'Fragment versus sentence',
          path: '/urdu/punctuation#fragment-vrsus-sentences',
        },
        { label: 'Commas', path: '/urdu/punctuation#commas' },
        {
          label: 'Innotation marks',
          path: '/urdu/punctuation#intonation-marks',
        },
        {
          label: 'Colon and cotation',
          path: '/urdu/punctuation#colon-and-quotation',
        },
        { label: 'Other symbols ', path: '/urdu/punctuation#other-symbols' },
        {
          label: 'Spoken punctuation',
          path: '/urdu/punctuation#spoken-punctuation',
        },
      ],
    },
    {
      label: 'Format',
      path: '',
      subMenus: [
        { label: 'Overview', path: '/urdu/format' },
        { label: 'Number', path: '/urdu/format#number' },
        { label: 'Date and time', path: '/urdu/format#currency-and-unit' },
        { label: 'Commas', path: '/urdu/format#date-and-time' },
        { label: 'Address', path: '/urdu/format#address' },
        { label: 'Web', path: '/urdu/format#web' },
        { label: 'Abbreviation', path: '/urdu/format#abbreviation' },
      ],
    },
    {
      label: 'Agreed Spelling',
      path: '',
      subMenus: [
        { label: 'Overview', path: '/urdu/agreed_spelling' },
        { label: 'Spelling out ', path: '/urdu/agreed_spelling#spelling-out' },
        { label: 'Proper names', path: '/urdu/agreed_spelling#interjection' },
        {
          label: 'Brand and Product',
          path: '/urdu/agreed_spelling#brand-and-product',
        },
        { label: 'Media title ', path: '/urdu/agreed_spelling#media-title' },
        {
          label: 'Multiple spellings ',
          path: '/urdu/agreed_spelling#multiple-spelling',
        },
      ],
    },
    {
      label: 'Diffiicult Utterances',
      path: '',
      subMenus: [
        { label: 'Overview', path: '/urdu/difficult_utterances' },
        {
          label: 'Skipping a prompt',
          path: '/urdu/difficult_utterances#skipping-a-prompt',
        },
        {
          label: 'Hesitations and trancations',
          path: '/urdu/difficult_utterances#hesitations-and-truncations',
        },
        {
          label: 'Background and foreground speech',
          path: '/urdu/difficult_utterances#background-and-foreground-speech',
        },
        {
          label: 'Foreign Language',
          path: '/urdu/difficult_utterances#foreign-language',
        },
        {
          label: 'Accents ',
          path: '/urdu/difficult_utterances#accents',
        },
      ],
    },
  ]
  return (
    <MasterPage menuItems={menuItems} appTitle="Urdu">
      {children}
    </MasterPage>
  )
}

export default Wrapper
