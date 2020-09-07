import React from 'react'
import MasterPage from '../../Components/common/MasterPage'

const Wrapper = ({ children }) => {
  const menuItems = [
    {
      label: 'Guiding Principle',
      path: '/greek/guiding_principles',
    },
    {
      label: 'Long form generic rules',
      path: '',
      subMenus: [
        { label: 'Overview', path: '/greek/longform_generic_rules' },
        {
          label: 'Unintelligible or foreign or singing',
          path:
            '/greek/longform_generic_rules#unintelligible-or-foreign-or-singing',
        },
        {
          label: 'Segmentation',
          path: '/greek/longform_generic_rules#segmentation',
        },
        {
          label: 'Speaker labelling',
          path: '/greek/longform_generic_rules#speaker-labeling',
        },
        {
          label: 'Audio labels',
          path: '/greek/longform_generic_rules#audio-labels',
        },
        { label: 'Pii', path: '/greek/longform_generic_rules#pii' },
      ],
    },
    {
      label: 'Transcription Qualtiy',
      path: '',
      subMenus: [
        { label: 'Overview', path: '/greek/transcription_quality' },
        { label: 'Typo', path: '/greek/transcription_quality#typo' },
        {
          label: 'Context error',
          path: '/greek/transcription_quality#context-error',
        },
        {
          label: 'Add or missing word',
          path: '/greek/transcription_quality#adding-missing-words',
        },
        {
          label: 'Subsitution',
          path: '/greek/transcription_quality#substitution',
        },
        { label: 'Spacing', path: '/greek/transcription_quality#spacing' },
      ],
    },
    {
      label: 'Punctuation',
      path: '',
      subMenus: [
        { label: 'Overview', path: '/greek/punctuation' },
        {
          label: 'Fragment versus sentence',
          path: '/greek/punctuation#fragment-vrsus-sentences',
        },
        { label: 'Commas', path: '/greek/punctuation#commas' },
        {
          label: 'Innotation marks',
          path: '/greek/punctuation#intonation-marks',
        },
        {
          label: 'Colon and cotation',
          path: '/greek/punctuation#colon-and-quotation',
        },
        { label: 'Other symbols ', path: '/greek/punctuation#other-symbols' },
        {
          label: 'Spoken punctuation',
          path: '/greek/punctuation#spoken-punctuation',
        },
      ],
    },
    {
      label: 'Format',
      path: '',
      subMenus: [
        { label: 'Overview', path: '/greek/format' },
        { label: 'Number', path: '/greek/format#number' },
        { label: 'Date and time', path: '/greek/format#currency-and-unit' },
        { label: 'Commas', path: '/greek/format#date-and-time' },
        { label: 'Address', path: '/greek/format#address' },
        { label: 'Web', path: '/greek/format#web' },
        { label: 'Abbreviation', path: '/greek/format#abbreviation' },
      ],
    },
    {
      label: 'Agreed Spelling',
      path: '',
      subMenus: [
        { label: 'Overview', path: '/greek/agreed_spelling' },
        { label: 'Spelling out ', path: '/greek/agreed_spelling#spelling-out' },
        { label: 'Proper names', path: '/greek/agreed_spelling#interjection' },
        {
          label: 'Brand and Product',
          path: '/greek/agreed_spelling#brand-and-product',
        },
        { label: 'Media title ', path: '/greek/agreed_spelling#media-title' },
        {
          label: 'Multiple spellings ',
          path: '/greek/agreed_spelling#multiple-spelling',
        },
      ],
    },
    {
      label: 'Diffiicult Utterances',
      path: '',
      subMenus: [
        { label: 'Overview', path: '/greek/difficult_utterances' },
        {
          label: 'Skipping a prompt',
          path: '/greek/difficult_utterances#skipping-a-prompt',
        },
        {
          label: 'Hesitations and trancations',
          path: '/greek/difficult_utterances#hesitations-and-truncations',
        },
        {
          label: 'Background and foreground speech',
          path: '/greek/difficult_utterances#background-and-foreground-speech',
        },
        {
          label: 'Foreign Language',
          path: '/greek/difficult_utterances#foreign-language',
        },
        {
          label: 'Accents ',
          path: '/greek/difficult_utterances#accents',
        },
      ],
    },
  ]
  return (
    <MasterPage menuItems={menuItems} appTitle="Greek">
      {children}
    </MasterPage>
  )
}

export default Wrapper
