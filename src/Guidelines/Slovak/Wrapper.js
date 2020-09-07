import React from 'react'
import MasterPage from '../../Components/common/MasterPage'

const Wrapper = ({ children }) => {
  const menuItems = [
    {
      label: 'Guiding Principle',
      path: '/slovak/guiding_principles',
    },
    {
      label: 'Long form generic rules',
      path: '',
      subMenus: [
        { label: 'Overview', path: '/slovak/longform_generic_rules' },
        {
          label: 'Unintelligible or foreign or singing',
          path:
            '/slovak/longform_generic_rules#unintelligible-or-foreign-or-singing',
        },
        {
          label: 'Segmentation',
          path: '/slovak/longform_generic_rules#segmentation',
        },
        {
          label: 'Speaker labelling',
          path: '/slovak/longform_generic_rules#speaker-labeling',
        },
        {
          label: 'Audio labels',
          path: '/slovak/longform_generic_rules#audio-labels',
        },
        { label: 'Pii', path: '/slovak/longform_generic_rules#pii' },
      ],
    },
    {
      label: 'Transcription Qualtiy',
      path: '',
      subMenus: [
        { label: 'Overview', path: '/slovak/transcription_quality' },
        { label: 'Typo', path: '/slovak/transcription_quality#typo' },
        {
          label: 'Context error',
          path: '/slovak/transcription_quality#context-error',
        },
        {
          label: 'Add or missing word',
          path: '/slovak/transcription_quality#adding-missing-words',
        },
        {
          label: 'Subsitution',
          path: '/slovak/transcription_quality#substitution',
        },
        { label: 'Spacing', path: '/slovak/transcription_quality#spacing' },
      ],
    },
    {
      label: 'Punctuation',
      path: '',
      subMenus: [
        { label: 'Overview', path: '/slovak/punctuation' },
        {
          label: 'Fragment versus sentence',
          path: '/slovak/punctuation#fragment-vrsus-sentences',
        },
        { label: 'Commas', path: '/slovak/punctuation#commas' },
        {
          label: 'Innotation marks',
          path: '/slovak/punctuation#intonation-marks',
        },
        {
          label: 'Colon and cotation',
          path: '/slovak/punctuation#colon-and-quotation',
        },
        { label: 'Other symbols ', path: '/slovak/punctuation#other-symbols' },
        {
          label: 'Spoken punctuation',
          path: '/slovak/punctuation#spoken-punctuation',
        },
      ],
    },
    {
      label: 'Format',
      path: '',
      subMenus: [
        { label: 'Overview', path: '/slovak/format' },
        { label: 'Number', path: '/slovak/format#number' },
        { label: 'Date and time', path: '/slovak/format#currency-and-unit' },
        { label: 'Commas', path: '/slovak/format#date-and-time' },
        { label: 'Address', path: '/slovak/format#address' },
        { label: 'Web', path: '/slovak/format#web' },
        { label: 'Abbreviation', path: '/slovak/format#abbreviation' },
      ],
    },
    {
      label: 'Agreed Spelling',
      path: '',
      subMenus: [
        { label: 'Overview', path: '/slovak/agreed_spelling' },
        {
          label: 'Spelling out ',
          path: '/slovak/agreed_spelling#spelling-out',
        },
        { label: 'Proper names', path: '/slovak/agreed_spelling#interjection' },
        {
          label: 'Brand and Product',
          path: '/slovak/agreed_spelling#brand-and-product',
        },
        { label: 'Media title ', path: '/slovak/agreed_spelling#media-title' },
        {
          label: 'Multiple spellings ',
          path: '/slovak/agreed_spelling#multiple-spelling',
        },
      ],
    },
    {
      label: 'Diffiicult Utterances',
      path: '',
      subMenus: [
        { label: 'Overview', path: '/slovak/difficult_utterances' },
        {
          label: 'Skipping a prompt',
          path: '/slovak/difficult_utterances#skipping-a-prompt',
        },
        {
          label: 'Hesitations and trancations',
          path: '/slovak/difficult_utterances#hesitations-and-truncations',
        },
        {
          label: 'Background and foreground speech',
          path: '/slovak/difficult_utterances#background-and-foreground-speech',
        },
        {
          label: 'Foreign Language',
          path: '/slovak/difficult_utterances#foreign-language',
        },
        {
          label: 'Accents ',
          path: '/slovak/difficult_utterances#accents',
        },
      ],
    },
  ]
  return (
    <MasterPage menuItems={menuItems} appTitle="Slovak">
      {children}
    </MasterPage>
  )
}

export default Wrapper
