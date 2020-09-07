import React from 'react'
import MasterPage from '../../Components/common/MasterPage'

const Wrapper = ({ children }) => {
  const menuItems = [
    {
      label: 'Guiding Principle',
      path: '/italian/guiding_principles',
    },
    {
      label: 'Long form generic rules',
      path: '',
      subMenus: [
        { label: 'Overview', path: '/italian/longform_generic_rules' },
        {
          label: 'Unintelligible or foreign or singing',
          path:
            '/italian/longform_generic_rules#unintelligible-or-foreign-or-singing',
        },
        {
          label: 'Segmentation',
          path: '/italian/longform_generic_rules#segmentation',
        },
        {
          label: 'Speaker labelling',
          path: '/italian/longform_generic_rules#speaker-labeling',
        },
        {
          label: 'Audio labels',
          path: '/italian/longform_generic_rules#audio-labels',
        },
        { label: 'Pii', path: '/italian/longform_generic_rules#pii' },
      ],
    },
    {
      label: 'Transcription Qualtiy',
      path: '',
      subMenus: [
        { label: 'Overview', path: '/italian/transcription_quality' },
        { label: 'Typo', path: '/italian/transcription_quality#typo' },
        {
          label: 'Context error',
          path: '/italian/transcription_quality#context-error',
        },
        {
          label: 'Add or missing word',
          path: '/italian/transcription_quality#adding-missing-words',
        },
        {
          label: 'Subsitution',
          path: '/italian/transcription_quality#substitution',
        },
        { label: 'Spacing', path: '/italian/transcription_quality#spacing' },
      ],
    },
    {
      label: 'Punctuation',
      path: '',
      subMenus: [
        { label: 'Overview', path: '/italian/punctuation' },
        {
          label: 'Fragment versus sentence',
          path: '/italian/punctuation#fragment-vrsus-sentences',
        },
        { label: 'Commas', path: '/italian/punctuation#commas' },
        {
          label: 'Innotation marks',
          path: '/italian/punctuation#intonation-marks',
        },
        {
          label: 'Colon and cotation',
          path: '/italian/punctuation#colon-and-quotation',
        },
        { label: 'Other symbols ', path: '/italian/punctuation#other-symbols' },
        {
          label: 'Spoken punctuation',
          path: '/italian/punctuation#spoken-punctuation',
        },
      ],
    },
    {
      label: 'Format',
      path: '',
      subMenus: [
        { label: 'Overview', path: '/italian/format' },
        { label: 'Number', path: '/italian/format#number' },
        { label: 'Date and time', path: '/italian/format#currency-and-unit' },
        { label: 'Commas', path: '/italian/format#date-and-time' },
        { label: 'Address', path: '/italian/format#address' },
        { label: 'Web', path: '/italian/format#web' },
        { label: 'Abbreviation', path: '/italian/format#abbreviation' },
      ],
    },
    {
      label: 'Agreed Spelling',
      path: '',
      subMenus: [
        { label: 'Overview', path: '/italian/agreed_spelling' },
        {
          label: 'Spelling out ',
          path: '/italian/agreed_spelling#spelling-out',
        },
        {
          label: 'Proper names',
          path: '/italian/agreed_spelling#interjection',
        },
        {
          label: 'Brand and Product',
          path: '/italian/agreed_spelling#brand-and-product',
        },
        { label: 'Media title ', path: '/italian/agreed_spelling#media-title' },
        {
          label: 'Multiple spellings ',
          path: '/italian/agreed_spelling#multiple-spelling',
        },
      ],
    },
    {
      label: 'Diffiicult Utterances',
      path: '',
      subMenus: [
        { label: 'Overview', path: '/italian/difficult_utterances' },
        {
          label: 'Skipping a prompt',
          path: '/italian/difficult_utterances#skipping-a-prompt',
        },
        {
          label: 'Hesitations and trancations',
          path: '/italian/difficult_utterances#hesitations-and-truncations',
        },
        {
          label: 'Background and foreground speech',
          path:
            '/italian/difficult_utterances#background-and-foreground-speech',
        },
        {
          label: 'Foreign Language',
          path: '/italian/difficult_utterances#foreign-language',
        },
        {
          label: 'Accents ',
          path: '/italian/difficult_utterances#accents',
        },
      ],
    },
  ]
  return (
    <MasterPage menuItems={menuItems} appTitle="Italian">
      {children}
    </MasterPage>
  )
}

export default Wrapper
