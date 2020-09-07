import React from 'react'
import MasterPage from '../../Components/common/MasterPage'

const Wrapper = ({ children }) => {
  const menuItems = [
    {
      label: 'Guiding Principle',
      path: '/slovene/guiding_principles',
    },
    {
      label: 'Long form generic rules',
      path: '',
      subMenus: [
        { label: 'Overview', path: '/slovene/longform_generic_rules' },
        {
          label: 'Unintelligible or foreign or singing',
          path:
            '/slovene/longform_generic_rules#unintelligible-or-foreign-or-singing',
        },
        {
          label: 'Segmentation',
          path: '/slovene/longform_generic_rules#segmentation',
        },
        {
          label: 'Speaker labelling',
          path: '/slovene/longform_generic_rules#speaker-labeling',
        },
        {
          label: 'Audio labels',
          path: '/slovene/longform_generic_rules#audio-labels',
        },
        { label: 'Pii', path: '/slovene/longform_generic_rules#pii' },
      ],
    },
    {
      label: 'Transcription Qualtiy',
      path: '',
      subMenus: [
        { label: 'Overview', path: '/slovene/transcription_quality' },
        { label: 'Typo', path: '/slovene/transcription_quality#typo' },
        {
          label: 'Context error',
          path: '/slovene/transcription_quality#context-error',
        },
        {
          label: 'Add or missing word',
          path: '/slovene/transcription_quality#adding-missing-words',
        },
        {
          label: 'Subsitution',
          path: '/slovene/transcription_quality#substitution',
        },
        { label: 'Spacing', path: '/slovene/transcription_quality#spacing' },
      ],
    },
    {
      label: 'Punctuation',
      path: '',
      subMenus: [
        { label: 'Overview', path: '/slovene/punctuation' },
        {
          label: 'Fragment versus sentence',
          path: '/slovene/punctuation#fragment-vrsus-sentences',
        },
        { label: 'Commas', path: '/slovene/punctuation#commas' },
        {
          label: 'Innotation marks',
          path: '/slovene/punctuation#intonation-marks',
        },
        {
          label: 'Colon and cotation',
          path: '/slovene/punctuation#colon-and-quotation',
        },
        { label: 'Other symbols ', path: '/slovene/punctuation#other-symbols' },
        {
          label: 'Spoken punctuation',
          path: '/slovene/punctuation#spoken-punctuation',
        },
      ],
    },
    {
      label: 'Format',
      path: '',
      subMenus: [
        { label: 'Overview', path: '/slovene/format' },
        { label: 'Number', path: '/slovene/format#number' },
        { label: 'Date and time', path: '/slovene/format#currency-and-unit' },
        { label: 'Commas', path: '/slovene/format#date-and-time' },
        { label: 'Address', path: '/slovene/format#address' },
        { label: 'Web', path: '/slovene/format#web' },
        { label: 'Abbreviation', path: '/slovene/format#abbreviation' },
      ],
    },
    {
      label: 'Agreed Spelling',
      path: '',
      subMenus: [
        { label: 'Overview', path: '/slovene/agreed_spelling' },
        {
          label: 'Spelling out ',
          path: '/slovene/agreed_spelling#spelling-out',
        },
        {
          label: 'Proper names',
          path: '/slovene/agreed_spelling#interjection',
        },
        {
          label: 'Brand and Product',
          path: '/slovene/agreed_spelling#brand-and-product',
        },
        { label: 'Media title ', path: '/slovene/agreed_spelling#media-title' },
        {
          label: 'Multiple spellings ',
          path: '/slovene/agreed_spelling#multiple-spelling',
        },
      ],
    },
    {
      label: 'Diffiicult Utterances',
      path: '',
      subMenus: [
        { label: 'Overview', path: '/slovene/difficult_utterances' },
        {
          label: 'Skipping a prompt',
          path: '/slovene/difficult_utterances#skipping-a-prompt',
        },
        {
          label: 'Hesitations and trancations',
          path: '/slovene/difficult_utterances#hesitations-and-truncations',
        },
        {
          label: 'Background and foreground speech',
          path:
            '/slovene/difficult_utterances#background-and-foreground-speech',
        },
        {
          label: 'Foreign Language',
          path: '/slovene/difficult_utterances#foreign-language',
        },
        {
          label: 'Accents ',
          path: '/slovene/difficult_utterances#accents',
        },
      ],
    },
  ]
  return (
    <MasterPage menuItems={menuItems} appTitle="Slovene">
      {children}
    </MasterPage>
  )
}

export default Wrapper
