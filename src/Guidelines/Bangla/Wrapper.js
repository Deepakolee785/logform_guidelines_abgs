import React from 'react'
import MasterPage from '../../Components/common/MasterPage'

const Wrapper = ({ children }) => {
  const menuItems = [
    {
      label: 'Guiding Principle',
      path: '/bangla/guiding_principles',
    },
    {
      label: 'Long form generic rules',
      path: '',
      subMenus: [
        { label: 'Overview', path: '/bangla/longform_generic_rules' },
        {
          label: 'Unintelligible or foreign or singing',
          path:
            '/bangla/longform_generic_rules#unintelligible-or-foreign-or-singing',
        },
        {
          label: 'Segmentation',
          path: '/bangla/longform_generic_rules#segmentation',
        },
        {
          label: 'Speaker labelling',
          path: '/bangla/longform_generic_rules#speaker-labeling',
        },
        {
          label: 'Audio labels',
          path: '/bangla/longform_generic_rules#audio-labels',
        },
        { label: 'Pii', path: '/bangla/longform_generic_rules#pii' },
      ],
    },
    {
      label: 'Transcription Qualtiy',
      path: '',
      subMenus: [
        { label: 'Overview', path: '/bangla/transcription_quality' },
        { label: 'Typo', path: '/bangla/transcription_quality#typo' },
        {
          label: 'Context error',
          path: '/bangla/transcription_quality#context-error',
        },
        {
          label: 'Add or missing word',
          path: '/bangla/transcription_quality#adding-missing-words',
        },
        {
          label: 'Subsitution',
          path: '/bangla/transcription_quality#substitution',
        },
        { label: 'Spacing', path: '/bangla/transcription_quality#spacing' },
      ],
    },
    {
      label: 'Punctuation',
      path: '',
      subMenus: [
        { label: 'Overview', path: '/bangla/punctuation' },
        {
          label: 'Fragment versus sentence',
          path: '/bangla/punctuation#fragment-vrsus-sentences',
        },
        { label: 'Commas', path: '/bangla/punctuation#commas' },
        {
          label: 'Innotation marks',
          path: '/bangla/punctuation#intonation-marks',
        },
        {
          label: 'Colon and cotation',
          path: '/bangla/punctuation#colon-and-quotation',
        },
        { label: 'Other symbols ', path: '/bangla/punctuation#other-symbols' },
        {
          label: 'Spoken punctuation',
          path: '/bangla/punctuation#spoken-punctuation',
        },
      ],
    },
    {
      label: 'Format',
      path: '',
      subMenus: [
        { label: 'Overview', path: '/bangla/format' },
        { label: 'Number', path: '/bangla/format#number' },
        { label: 'Date and time', path: '/bangla/format#currency-and-unit' },
        { label: 'Commas', path: '/bangla/format#date-and-time' },
        { label: 'Address', path: '/bangla/format#address' },
        { label: 'Web', path: '/bangla/format#web' },
        { label: 'Abbreviation', path: '/bangla/format#abbreviation' },
      ],
    },
    {
      label: 'Agreed Spelling',
      path: '',
      subMenus: [
        { label: 'Overview', path: '/bangla/agreed_spelling' },
        {
          label: 'Spelling out ',
          path: '/bangla/agreed_spelling#spelling-out',
        },
        { label: 'Proper names', path: '/bangla/agreed_spelling#interjection' },
        {
          label: 'Brand and Product',
          path: '/bangla/agreed_spelling#brand-and-product',
        },
        { label: 'Media title ', path: '/bangla/agreed_spelling#media-title' },
        {
          label: 'Multiple spellings ',
          path: '/bangla/agreed_spelling#multiple-spelling',
        },
      ],
    },
    {
      label: 'Diffiicult Utterances',
      path: '',
      subMenus: [
        { label: 'Overview', path: '/bangla/difficult_utterances' },
        {
          label: 'Skipping a prompt',
          path: '/bangla/difficult_utterances#skipping-a-prompt',
        },
        {
          label: 'Hesitations and trancations',
          path: '/bangla/difficult_utterances#hesitations-and-truncations',
        },
        {
          label: 'Background and foreground speech',
          path: '/bangla/difficult_utterances#background-and-foreground-speech',
        },
        // {
        //   label: 'Foreign Language',
        //   path: '/bangla/difficult_utterances#foreign-language',
        // },
        // {
        //   label: 'Accents ',
        //   path: '/bangla/difficult_utterances#accents',
        // },
      ],
    },
  ]
  return (
    <MasterPage menuItems={menuItems} appTitle="Bangla">
      {children}
    </MasterPage>
  )
}

export default Wrapper
