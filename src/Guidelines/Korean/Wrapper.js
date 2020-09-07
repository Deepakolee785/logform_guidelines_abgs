import React from 'react'
import MasterPage from '../../Components/common/MasterPage'

const Wrapper = ({ children }) => {
  const menuItems = [
    {
      label: 'Guiding Principle',
      path: '/korean/guiding_principles',
    },
    {
      label: 'Long form generic rules',
      path: '',
      subMenus: [
        { label: 'Overview', path: '/korean/longform_generic_rules' },
        {
          label: 'Unintelligible or foreign or singing',
          path:
            '/korean/longform_generic_rules#unintelligible-or-foreign-or-singing',
        },
        {
          label: 'Segmentation',
          path: '/korean/longform_generic_rules#segmentation',
        },
        {
          label: 'Speaker labelling',
          path: '/korean/longform_generic_rules#speaker-labeling',
        },
        {
          label: 'Audio labels',
          path: '/korean/longform_generic_rules#audio-labels',
        },
        { label: 'Pii', path: '/korean/longform_generic_rules#pii' },
      ],
    },
    {
      label: 'Transcription Qualtiy',
      path: '',
      subMenus: [
        { label: 'Overview', path: '/korean/transcription_quality' },
        { label: 'Typo', path: '/korean/transcription_quality#typo' },
        {
          label: 'Context error',
          path: '/korean/transcription_quality#context-error',
        },
        {
          label: 'Add or missing word',
          path: '/korean/transcription_quality#adding-missing-words',
        },
        {
          label: 'Subsitution',
          path: '/korean/transcription_quality#substitution',
        },
        { label: 'Spacing', path: '/korean/transcription_quality#spacing' },
      ],
    },
    {
      label: 'Punctuation',
      path: '',
      subMenus: [
        { label: 'Overview', path: '/korean/punctuation' },
        {
          label: 'Fragment versus sentence',
          path: '/korean/punctuation#fragment-vrsus-sentences',
        },
        { label: 'Commas', path: '/korean/punctuation#commas' },
        {
          label: 'Innotation marks',
          path: '/korean/punctuation#intonation-marks',
        },
        {
          label: 'Colon and cotation',
          path: '/korean/punctuation#colon-and-quotation',
        },
        { label: 'Other symbols ', path: '/korean/punctuation#other-symbols' },
        {
          label: 'Spoken punctuation',
          path: '/korean/punctuation#spoken-punctuation',
        },
      ],
    },
    {
      label: 'Format',
      path: '',
      subMenus: [
        { label: 'Overview', path: '/korean/format' },
        { label: 'Number', path: '/korean/format#number' },
        { label: 'Date and time', path: '/korean/format#currency-and-unit' },
        { label: 'Commas', path: '/korean/format#date-and-time' },
        { label: 'Address', path: '/korean/format#address' },
        { label: 'Web', path: '/korean/format#web' },
        { label: 'Abbreviation', path: '/korean/format#abbreviation' },
      ],
    },
    {
      label: 'Agreed Spelling',
      path: '',
      subMenus: [
        { label: 'Overview', path: '/korean/agreed_spelling' },
        {
          label: 'Spelling out ',
          path: '/korean/agreed_spelling#spelling-out',
        },
        { label: 'Proper names', path: '/korean/agreed_spelling#interjection' },
        {
          label: 'Brand and Product',
          path: '/korean/agreed_spelling#brand-and-product',
        },
        { label: 'Media title ', path: '/korean/agreed_spelling#media-title' },
        {
          label: 'Multiple spellings ',
          path: '/korean/agreed_spelling#multiple-spelling',
        },
      ],
    },
    {
      label: 'Diffiicult Utterances',
      path: '',
      subMenus: [
        { label: 'Overview', path: '/korean/difficult_utterances' },
        {
          label: 'Skipping a prompt',
          path: '/korean/difficult_utterances#skipping-a-prompt',
        },
        {
          label: 'Hesitations and trancations',
          path: '/korean/difficult_utterances#hesitations-and-truncations',
        },
        {
          label: 'Background and foreground speech',
          path: '/korean/difficult_utterances#background-and-foreground-speech',
        },
        {
          label: 'Foreign Language',
          path: '/korean/difficult_utterances#foreign-language',
        },
        {
          label: 'Accents ',
          path: '/korean/difficult_utterances#accents',
        },
      ],
    },
  ]
  return (
    <MasterPage menuItems={menuItems} appTitle="Korean">
      {children}
    </MasterPage>
  )
}

export default Wrapper
