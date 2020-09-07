import React from 'react'
import MasterPage from '../../Components/common/MasterPage'

const Wrapper = ({ children }) => {
  const menuItems = [
    {
      label: 'Guiding Principle',
      path: '/dutch/guiding_principles',
    },
    {
      label: 'Long form generic rules',
      path: '',
      subMenus: [
        { label: 'Overview', path: '/dutch/longform_generic_rules' },
        {
          label: 'Unintelligible or foreign or singing',
          path:
            '/dutch/longform_generic_rules#unintelligible-or-foreign-or-singing',
        },
        {
          label: 'Segmentation',
          path: '/dutch/longform_generic_rules#segmentation',
        },
        {
          label: 'Speaker labelling',
          path: '/dutch/longform_generic_rules#speaker-labeling',
        },
        {
          label: 'Audio labels',
          path: '/dutch/longform_generic_rules#audio-labels',
        },
        { label: 'Pii', path: '/dutch/longform_generic_rules#pii' },
      ],
    },
    {
      label: 'Transcription Qualtiy',
      path: '',
      subMenus: [
        { label: 'Overview', path: '/dutch/transcription_quality' },
        { label: 'Typo', path: '/dutch/transcription_quality#typo' },
        {
          label: 'Context error',
          path: '/dutch/transcription_quality#context-error',
        },
        {
          label: 'Add or missing word',
          path: '/dutch/transcription_quality#adding-missing-words',
        },
        {
          label: 'Subsitution',
          path: '/dutch/transcription_quality#substitution',
        },
        { label: 'Spacing', path: '/dutch/transcription_quality#spacing' },
      ],
    },
    {
      label: 'Punctuation',
      path: '',
      subMenus: [
        { label: 'Overview', path: '/dutch/punctuation' },
        {
          label: 'Fragment versus sentence',
          path: '/dutch/punctuation#fragment-vrsus-sentences',
        },
        { label: 'Commas', path: '/dutch/punctuation#commas' },
        {
          label: 'Innotation marks',
          path: '/dutch/punctuation#intonation-marks',
        },
        {
          label: 'Colon and cotation',
          path: '/dutch/punctuation#colon-and-quotation',
        },
        { label: 'Other symbols ', path: '/dutch/punctuation#other-symbols' },
        {
          label: 'Spoken punctuation',
          path: '/dutch/punctuation#spoken-punctuation',
        },
      ],
    },
    {
      label: 'Format',
      path: '',
      subMenus: [
        { label: 'Overview', path: '/dutch/format' },
        { label: 'Number', path: '/dutch/format#number' },
        { label: 'Date and time', path: '/dutch/format#currency-and-unit' },
        { label: 'Commas', path: '/dutch/format#date-and-time' },
        { label: 'Address', path: '/dutch/format#address' },
        { label: 'Web', path: '/dutch/format#web' },
        { label: 'Abbreviation', path: '/dutch/format#abbreviation' },
      ],
    },
    {
      label: 'Agreed Spelling',
      path: '',
      subMenus: [
        { label: 'Overview', path: '/dutch/agreed_spelling' },
        { label: 'Spelling out ', path: '/dutch/agreed_spelling#spelling-out' },
        { label: 'Proper names', path: '/dutch/agreed_spelling#interjection' },
        {
          label: 'Brand and Product',
          path: '/dutch/agreed_spelling#brand-and-product',
        },
        { label: 'Media title ', path: '/dutch/agreed_spelling#media-title' },
        {
          label: 'Multiple spellings ',
          path: '/dutch/agreed_spelling#multiple-spelling',
        },
      ],
    },
    {
      label: 'Diffiicult Utterances',
      path: '',
      subMenus: [
        { label: 'Overview', path: '/dutch/difficult_utterances' },
        {
          label: 'Skipping a prompt',
          path: '/dutch/difficult_utterances#skipping-a-prompt',
        },
        {
          label: 'Hesitations and trancations',
          path: '/dutch/difficult_utterances#hesitations-and-truncations',
        },
        {
          label: 'Background and foreground speech',
          path: '/dutch/difficult_utterances#background-and-foreground-speech',
        },
        {
          label: 'Foreign Language',
          path: '/dutch/difficult_utterances#foreign-language',
        },
        {
          label: 'Accents ',
          path: '/dutch/difficult_utterances#accents',
        },
      ],
    },
  ]
  return (
    <MasterPage menuItems={menuItems} appTitle="Dutch">
      {children}
    </MasterPage>
  )
}

export default Wrapper
