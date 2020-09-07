import React from 'react'
import MasterPage from '../../Components/common/MasterPage'

const Wrapper = ({ children }) => {
  const menuItems = [
    {
      label: 'Guiding Principle',
      path: '/kannada/guiding_principles',
    },
    {
      label: 'Long form generic rules',
      path: '',
      subMenus: [
        { label: 'Overview', path: '/kannada/longform_generic_rules' },
        {
          label: 'Unintelligible or foreign or singing',
          path:
            '/kannada/longform_generic_rules#unintelligible-or-foreign-or-singing',
        },
        {
          label: 'Segmentation',
          path: '/kannada/longform_generic_rules#segmentation',
        },
        {
          label: 'Speaker labelling',
          path: '/kannada/longform_generic_rules#speaker-labeling',
        },
        {
          label: 'Audio labels',
          path: '/kannada/longform_generic_rules#audio-labels',
        },
        { label: 'Pii', path: '/kannada/longform_generic_rules#pii' },
      ],
    },
    {
      label: 'Transcription Qualtiy',
      path: '',
      subMenus: [
        { label: 'Overview', path: '/kannada/transcription_quality' },
        { label: 'Typo', path: '/kannada/transcription_quality#typo' },
        {
          label: 'Context error',
          path: '/kannada/transcription_quality#context-error',
        },
        {
          label: 'Add or missing word',
          path: '/kannada/transcription_quality#adding-missing-words',
        },
        {
          label: 'Subsitution',
          path: '/kannada/transcription_quality#substitution',
        },
        { label: 'Spacing', path: '/kannada/transcription_quality#spacing' },
      ],
    },
    {
      label: 'Punctuation',
      path: '',
      subMenus: [
        { label: 'Overview', path: '/kannada/punctuation' },
        {
          label: 'Fragment versus sentence',
          path: '/kannada/punctuation#fragment-vrsus-sentences',
        },
        { label: 'Commas', path: '/kannada/punctuation#commas' },
        {
          label: 'Innotation marks',
          path: '/kannada/punctuation#intonation-marks',
        },
        {
          label: 'Colon and cotation',
          path: '/kannada/punctuation#colon-and-quotation',
        },
        { label: 'Other symbols ', path: '/kannada/punctuation#other-symbols' },
        {
          label: 'Spoken punctuation',
          path: '/kannada/punctuation#spoken-punctuation',
        },
      ],
    },
    {
      label: 'Format',
      path: '',
      subMenus: [
        { label: 'Overview', path: '/kannada/format' },
        { label: 'Number', path: '/kannada/format#number' },
        { label: 'Date and time', path: '/kannada/format#currency-and-unit' },
        { label: 'Commas', path: '/kannada/format#date-and-time' },
        { label: 'Address', path: '/kannada/format#address' },
        { label: 'Web', path: '/kannada/format#web' },
        { label: 'Abbreviation', path: '/kannada/format#abbreviation' },
      ],
    },
    {
      label: 'Agreed Spelling',
      path: '',
      subMenus: [
        { label: 'Overview', path: '/kannada/agreed_spelling' },
        {
          label: 'Spelling out ',
          path: '/kannada/agreed_spelling#spelling-out',
        },
        {
          label: 'Proper names',
          path: '/kannada/agreed_spelling#interjection',
        },
        {
          label: 'Brand and Product',
          path: '/kannada/agreed_spelling#brand-and-product',
        },
        { label: 'Media title ', path: '/kannada/agreed_spelling#media-title' },
        {
          label: 'Multiple spellings ',
          path: '/kannada/agreed_spelling#multiple-spelling',
        },
      ],
    },
    {
      label: 'Diffiicult Utterances',
      path: '',
      subMenus: [
        { label: 'Overview', path: '/kannada/difficult_utterances' },
        {
          label: 'Skipping a prompt',
          path: '/kannada/difficult_utterances#skipping-a-prompt',
        },
        {
          label: 'Hesitations and trancations',
          path: '/kannada/difficult_utterances#hesitations-and-truncations',
        },
        {
          label: 'Background and foreground speech',
          path:
            '/kannada/difficult_utterances#background-and-foreground-speech',
        },
        {
          label: 'Foreign Language',
          path: '/kannada/difficult_utterances#foreign-language',
        },
        {
          label: 'Accents ',
          path: '/kannada/difficult_utterances#accents',
        },
      ],
    },
  ]
  return (
    <MasterPage menuItems={menuItems} appTitle="Kannada">
      {children}
    </MasterPage>
  )
}

export default Wrapper
