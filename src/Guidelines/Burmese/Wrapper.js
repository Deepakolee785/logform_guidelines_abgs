import React from 'react'
import MasterPage from '../../Components/common/MasterPage'

const Wrapper = ({ children }) => {
  const menuItems = [
    {
      label: 'Guiding Principle',
      path: '/burmese/guiding_principles',
    },
    {
      label: 'Long form generic rules',
      path: '',
      subMenus: [
        { label: 'Overview', path: '/burmese/longform_generic_rules' },
        {
          label: 'Unintelligible or foreign or singing',
          path:
            '/burmese/longform_generic_rules#unintelligible-or-foreign-or-singing',
        },
        {
          label: 'Segmentation',
          path: '/burmese/longform_generic_rules#segmentation',
        },
        {
          label: 'Speaker labelling',
          path: '/burmese/longform_generic_rules#speaker-labeling',
        },
        {
          label: 'Audio labels',
          path: '/burmese/longform_generic_rules#audio-labels',
        },
        { label: 'Pii', path: '/burmese/longform_generic_rules#pii' },
      ],
    },
    {
      label: 'Transcription Qualtiy',
      path: '',
      subMenus: [
        { label: 'Overview', path: '/burmese/transcription_quality' },
        { label: 'Typo', path: '/burmese/transcription_quality#typo' },
        {
          label: 'Context error',
          path: '/burmese/transcription_quality#context-error',
        },
        {
          label: 'Add or missing word',
          path: '/burmese/transcription_quality#adding-missing-words',
        },
        {
          label: 'Subsitution',
          path: '/burmese/transcription_quality#substitution',
        },
        { label: 'Spacing', path: '/burmese/transcription_quality#spacing' },
      ],
    },
    {
      label: 'Punctuation',
      path: '',
      subMenus: [
        { label: 'Overview', path: '/burmese/punctuation' },
        {
          label: 'Fragment versus sentence',
          path: '/burmese/punctuation#fragment-vrsus-sentences',
        },
        { label: 'Commas', path: '/burmese/punctuation#commas' },
        {
          label: 'Innotation marks',
          path: '/burmese/punctuation#intonation-marks',
        },
        {
          label: 'Colon and cotation',
          path: '/burmese/punctuation#colon-and-quotation',
        },
        { label: 'Other symbols ', path: '/burmese/punctuation#other-symbols' },
        {
          label: 'Spoken punctuation',
          path: '/burmese/punctuation#spoken-punctuation',
        },
      ],
    },
    {
      label: 'Format',
      path: '',
      subMenus: [
        { label: 'Overview', path: '/burmese/format' },
        { label: 'Number', path: '/burmese/format#number' },
        { label: 'Date and time', path: '/burmese/format#currency-and-unit' },
        { label: 'Commas', path: '/burmese/format#date-and-time' },
        { label: 'Address', path: '/burmese/format#address' },
        { label: 'Web', path: '/burmese/format#web' },
        { label: 'Abbreviation', path: '/burmese/format#abbreviation' },
      ],
    },
    {
      label: 'Agreed Spelling',
      path: '',
      subMenus: [
        { label: 'Overview', path: '/burmese/agreed_spelling' },
        {
          label: 'Spelling out ',
          path: '/burmese/agreed_spelling#spelling-out',
        },
        {
          label: 'Proper names',
          path: '/burmese/agreed_spelling#interjection',
        },
        {
          label: 'Brand and Product',
          path: '/burmese/agreed_spelling#brand-and-product',
        },
        { label: 'Media title ', path: '/burmese/agreed_spelling#media-title' },
        {
          label: 'Multiple spellings ',
          path: '/burmese/agreed_spelling#multiple-spelling',
        },
      ],
    },
    {
      label: 'Diffiicult Utterances',
      path: '',
      subMenus: [
        { label: 'Overview', path: '/burmese/difficult_utterances' },
        {
          label: 'Skipping a prompt',
          path: '/burmese/difficult_utterances#skipping-a-prompt',
        },
        {
          label: 'Hesitations and trancations',
          path: '/burmese/difficult_utterances#hesitations-and-truncations',
        },
        {
          label: 'Background and foreground speech',
          path:
            '/burmese/difficult_utterances#background-and-foreground-speech',
        },
        {
          label: 'Foreign Language',
          path: '/burmese/difficult_utterances#foreign-language',
        },
        {
          label: 'Accents ',
          path: '/burmese/difficult_utterances#accents',
        },
      ],
    },
  ]
  return (
    <MasterPage menuItems={menuItems} appTitle="Burmese">
      {children}
    </MasterPage>
  )
}

export default Wrapper
