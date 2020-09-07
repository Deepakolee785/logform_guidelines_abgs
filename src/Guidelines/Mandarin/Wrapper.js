import React from 'react'
import MasterPage from '../../Components/common/MasterPage'

const Wrapper = ({ children }) => {
  const menuItems = [
    {
      label: 'Guiding Principle',
      path: '/mandarin/guiding_principles',
    },
    {
      label: 'Long form generic rules',
      path: '',
      subMenus: [
        { label: 'Overview', path: '/mandarin/longform_generic_rules' },
        {
          label: 'Unintelligible or foreign or singing',
          path:
            '/mandarin/longform_generic_rules#unintelligible-or-foreign-or-singing',
        },
        {
          label: 'Segmentation',
          path: '/mandarin/longform_generic_rules#segmentation',
        },
        {
          label: 'Speaker labelling',
          path: '/mandarin/longform_generic_rules#speaker-labeling',
        },
        {
          label: 'Audio labels',
          path: '/mandarin/longform_generic_rules#audio-labels',
        },
        { label: 'Pii', path: '/mandarin/longform_generic_rules#pii' },
      ],
    },
    {
      label: 'Transcription Qualtiy',
      path: '',
      subMenus: [
        { label: 'Overview', path: '/mandarin/transcription_quality' },
        { label: 'Typo', path: '/mandarin/transcription_quality#typo' },
        {
          label: 'Context error',
          path: '/mandarin/transcription_quality#context-error',
        },
        {
          label: 'Add or missing word',
          path: '/mandarin/transcription_quality#adding-missing-words',
        },
        {
          label: 'Subsitution',
          path: '/mandarin/transcription_quality#substitution',
        },
        { label: 'Spacing', path: '/mandarin/transcription_quality#spacing' },
      ],
    },
    {
      label: 'Punctuation',
      path: '',
      subMenus: [
        { label: 'Overview', path: '/mandarin/punctuation' },
        {
          label: 'Fragment versus sentence',
          path: '/mandarin/punctuation#fragment-vrsus-sentences',
        },
        { label: 'Commas', path: '/mandarin/punctuation#commas' },
        {
          label: 'Innotation marks',
          path: '/mandarin/punctuation#intonation-marks',
        },
        {
          label: 'Colon and cotation',
          path: '/mandarin/punctuation#colon-and-quotation',
        },
        {
          label: 'Other symbols ',
          path: '/mandarin/punctuation#other-symbols',
        },
        {
          label: 'Spoken punctuation',
          path: '/mandarin/punctuation#spoken-punctuation',
        },
      ],
    },
    {
      label: 'Format',
      path: '',
      subMenus: [
        { label: 'Overview', path: '/mandarin/format' },
        { label: 'Number', path: '/mandarin/format#number' },
        { label: 'Date and time', path: '/mandarin/format#currency-and-unit' },
        { label: 'Commas', path: '/mandarin/format#date-and-time' },
        { label: 'Address', path: '/mandarin/format#address' },
        { label: 'Web', path: '/mandarin/format#web' },
        { label: 'Abbreviation', path: '/mandarin/format#abbreviation' },
      ],
    },
    {
      label: 'Agreed Spelling',
      path: '',
      subMenus: [
        { label: 'Overview', path: '/mandarin/agreed_spelling' },
        {
          label: 'Spelling out ',
          path: '/mandarin/agreed_spelling#spelling-out',
        },
        {
          label: 'Proper names',
          path: '/mandarin/agreed_spelling#interjection',
        },
        {
          label: 'Brand and Product',
          path: '/mandarin/agreed_spelling#brand-and-product',
        },
        {
          label: 'Media title ',
          path: '/mandarin/agreed_spelling#media-title',
        },
        {
          label: 'Multiple spellings ',
          path: '/mandarin/agreed_spelling#multiple-spelling',
        },
      ],
    },
    {
      label: 'Diffiicult Utterances',
      path: '',
      subMenus: [
        { label: 'Overview', path: '/mandarin/difficult_utterances' },
        {
          label: 'Skipping a prompt',
          path: '/mandarin/difficult_utterances#skipping-a-prompt',
        },
        {
          label: 'Hesitations and trancations',
          path: '/mandarin/difficult_utterances#hesitations-and-truncations',
        },
        {
          label: 'Background and foreground speech',
          path:
            '/mandarin/difficult_utterances#background-and-foreground-speech',
        },
        {
          label: 'Foreign Language',
          path: '/mandarin/difficult_utterances#foreign-language',
        },
        {
          label: 'Accents ',
          path: '/mandarin/difficult_utterances#accents',
        },
      ],
    },
  ]
  return (
    <MasterPage menuItems={menuItems} appTitle="Mandarin">
      {children}
    </MasterPage>
  )
}

export default Wrapper
