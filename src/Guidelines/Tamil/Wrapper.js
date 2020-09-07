import React from 'react'
import MasterPage from '../../Components/common/MasterPage'

const Wrapper = ({ children }) => {
  const menuItems = [
    {
      label: 'Guiding Principle',
      path: '/tamil/guiding_principles',
    },
    {
      label: 'Long form generic rules',
      path: '',
      subMenus: [
        { label: 'Overview', path: '/tamil/longform_generic_rules' },
        {
          label: 'Unintelligible or foreign or singing',
          path:
            '/tamil/longform_generic_rules#unintelligible-or-foreign-or-singing',
        },
        {
          label: 'Segmentation',
          path: '/tamil/longform_generic_rules#segmentation',
        },
        {
          label: 'Speaker labelling',
          path: '/tamil/longform_generic_rules#speaker-labeling',
        },
        {
          label: 'Audio labels',
          path: '/tamil/longform_generic_rules#audio-labels',
        },
        { label: 'Pii', path: '/tamil/longform_generic_rules#pii' },
      ],
    },
    {
      label: 'Transcription Qualtiy',
      path: '',
      subMenus: [
        { label: 'Overview', path: '/tamil/transcription_quality' },
        { label: 'Typo', path: '/tamil/transcription_quality#typo' },
        {
          label: 'Context error',
          path: '/tamil/transcription_quality#context-error',
        },
        {
          label: 'Add or missing word',
          path: '/tamil/transcription_quality#adding-missing-words',
        },
        {
          label: 'Subsitution',
          path: '/tamil/transcription_quality#substitution',
        },
        { label: 'Spacing', path: '/tamil/transcription_quality#spacing' },
      ],
    },
    {
      label: 'Punctuation',
      path: '',
      subMenus: [
        { label: 'Overview', path: '/tamil/punctuation' },
        {
          label: 'Fragment versus sentence',
          path: '/tamil/punctuation#fragment-vrsus-sentences',
        },
        { label: 'Commas', path: '/tamil/punctuation#commas' },
        {
          label: 'Innotation marks',
          path: '/tamil/punctuation#intonation-marks',
        },
        {
          label: 'Colon and cotation',
          path: '/tamil/punctuation#colon-and-quotation',
        },
        { label: 'Other symbols ', path: '/tamil/punctuation#other-symbols' },
        {
          label: 'Spoken punctuation',
          path: '/tamil/punctuation#spoken-punctuation',
        },
      ],
    },
    {
      label: 'Format',
      path: '',
      subMenus: [
        { label: 'Overview', path: '/tamil/format' },
        { label: 'Number', path: '/tamil/format#number' },
        { label: 'Date and time', path: '/tamil/format#currency-and-unit' },
        { label: 'Commas', path: '/tamil/format#date-and-time' },
        { label: 'Address', path: '/tamil/format#address' },
        { label: 'Web', path: '/tamil/format#web' },
        { label: 'Abbreviation', path: '/tamil/format#abbreviation' },
      ],
    },
    {
      label: 'Agreed Spelling',
      path: '',
      subMenus: [
        { label: 'Overview', path: '/tamil/agreed_spelling' },
        { label: 'Spelling out ', path: '/tamil/agreed_spelling#spelling-out' },
        { label: 'Proper names', path: '/tamil/agreed_spelling#interjection' },
        {
          label: 'Brand and Product',
          path: '/tamil/agreed_spelling#brand-and-product',
        },
        { label: 'Media title ', path: '/tamil/agreed_spelling#media-title' },
        {
          label: 'Multiple spellings ',
          path: '/tamil/agreed_spelling#multiple-spelling',
        },
      ],
    },
    {
      label: 'Diffiicult Utterances',
      path: '',
      subMenus: [
        { label: 'Overview', path: '/tamil/difficult_utterances' },
        {
          label: 'Skipping a prompt',
          path: '/tamil/difficult_utterances#skipping-a-prompt',
        },
        {
          label: 'Hesitations and trancations',
          path: '/tamil/difficult_utterances#hesitations-and-truncations',
        },
        {
          label: 'Background and foreground speech',
          path: '/tamil/difficult_utterances#background-and-foreground-speech',
        },
        {
          label: 'Foreign Language',
          path: '/tamil/difficult_utterances#foreign-language',
        },
        {
          label: 'Accents ',
          path: '/tamil/difficult_utterances#accents',
        },
      ],
    },
  ]
  return (
    <MasterPage menuItems={menuItems} appTitle="tamil">
      {children}
    </MasterPage>
  )
}

export default Wrapper
