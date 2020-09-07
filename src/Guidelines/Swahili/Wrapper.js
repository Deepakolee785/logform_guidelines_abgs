import React from 'react'
import MasterPage from '../../Components/common/MasterPage'

const Wrapper = ({ children }) => {
  const menuItems = [
    {
      label: 'Guiding Principle',
      path: '/swahili/guiding_principles',
    },
    {
      label: 'Long form generic rules',
      path: '',
      subMenus: [
        { label: 'Overview', path: '/swahili/longform_generic_rules' },
        {
          label: 'Unintelligible or foreign or singing',
          path:
            '/swahili/longform_generic_rules#unintelligible-or-foreign-or-singing',
        },
        {
          label: 'Segmentation',
          path: '/swahili/longform_generic_rules#segmentation',
        },
        {
          label: 'Speaker labelling',
          path: '/swahili/longform_generic_rules#speaker-labeling',
        },
        {
          label: 'Audio labels',
          path: '/swahili/longform_generic_rules#audio-labels',
        },
        { label: 'Pii', path: '/swahili/longform_generic_rules#pii' },
      ],
    },
    {
      label: 'Transcription Qualtiy',
      path: '',
      subMenus: [
        { label: 'Overview', path: '/swahili/transcription_quality' },
        { label: 'Typo', path: '/swahili/transcription_quality#typo' },
        {
          label: 'Context error',
          path: '/swahili/transcription_quality#context-error',
        },
        {
          label: 'Add or missing word',
          path: '/swahili/transcription_quality#adding-missing-words',
        },
        {
          label: 'Subsitution',
          path: '/swahili/transcription_quality#substitution',
        },
        { label: 'Spacing', path: '/swahili/transcription_quality#spacing' },
      ],
    },
    {
      label: 'Punctuation',
      path: '',
      subMenus: [
        { label: 'Overview', path: '/swahili/punctuation' },
        {
          label: 'Fragment versus sentence',
          path: '/swahili/punctuation#fragment-vrsus-sentences',
        },
        { label: 'Commas', path: '/swahili/punctuation#commas' },
        {
          label: 'Innotation marks',
          path: '/swahili/punctuation#intonation-marks',
        },
        {
          label: 'Colon and cotation',
          path: '/swahili/punctuation#colon-and-quotation',
        },
        { label: 'Other symbols ', path: '/swahili/punctuation#other-symbols' },
        {
          label: 'Spoken punctuation',
          path: '/swahili/punctuation#spoken-punctuation',
        },
      ],
    },
    {
      label: 'Format',
      path: '',
      subMenus: [
        { label: 'Overview', path: '/swahili/format' },
        { label: 'Number', path: '/swahili/format#number' },
        { label: 'Date and time', path: '/swahili/format#currency-and-unit' },
        { label: 'Commas', path: '/swahili/format#date-and-time' },
        { label: 'Address', path: '/swahili/format#address' },
        { label: 'Web', path: '/swahili/format#web' },
        { label: 'Abbreviation', path: '/swahili/format#abbreviation' },
      ],
    },
    {
      label: 'Agreed Spelling',
      path: '',
      subMenus: [
        { label: 'Overview', path: '/swahili/agreed_spelling' },
        {
          label: 'Spelling out ',
          path: '/swahili/agreed_spelling#spelling-out',
        },
        {
          label: 'Proper names',
          path: '/swahili/agreed_spelling#interjection',
        },
        {
          label: 'Brand and Product',
          path: '/swahili/agreed_spelling#brand-and-product',
        },
        { label: 'Media title ', path: '/swahili/agreed_spelling#media-title' },
        {
          label: 'Multiple spellings ',
          path: '/swahili/agreed_spelling#multiple-spelling',
        },
      ],
    },
    {
      label: 'Diffiicult Utterances',
      path: '',
      subMenus: [
        { label: 'Overview', path: '/swahili/difficult_utterances' },
        {
          label: 'Skipping a prompt',
          path: '/swahili/difficult_utterances#skipping-a-prompt',
        },
        {
          label: 'Hesitations and trancations',
          path: '/swahili/difficult_utterances#hesitations-and-truncations',
        },
        {
          label: 'Background and foreground speech',
          path:
            '/swahili/difficult_utterances#background-and-foreground-speech',
        },
        {
          label: 'Foreign Language',
          path: '/swahili/difficult_utterances#foreign-language',
        },
        {
          label: 'Accents ',
          path: '/swahili/difficult_utterances#accents',
        },
      ],
    },
  ]
  return (
    <MasterPage menuItems={menuItems} appTitle="Swahili">
      {children}
    </MasterPage>
  )
}

export default Wrapper
