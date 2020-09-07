import React from 'react'
import MasterPage from '../../Components/common/MasterPage'

const Wrapper = ({ children }) => {
  const menuItems = [
    {
      label: 'Guiding Principle',
      path: '/armenian/guiding_principles',
    },
    {
      label: 'Long form generic rules',
      path: '',
      subMenus: [
        { label: 'Overview', path: '/armenian/longform_generic_rules' },
        {
          label: 'Unintelligible or foreign or singing',
          path:
            '/armenian/longform_generic_rules#unintelligible-or-foreign-or-singing',
        },
        {
          label: 'Segmentation',
          path: '/armenian/longform_generic_rules#segmentation',
        },
        {
          label: 'Speaker labelling',
          path: '/armenian/longform_generic_rules#speaker-labeling',
        },
        {
          label: 'Audio labels',
          path: '/armenian/longform_generic_rules#audio-labels',
        },
        { label: 'Pii', path: '/armenian/longform_generic_rules#pii' },
      ],
    },
    {
      label: 'Transcription Qualtiy',
      path: '',
      subMenus: [
        { label: 'Overview', path: '/armenian/transcription_quality' },
        { label: 'Typo', path: '/armenian/transcription_quality#typo' },
        {
          label: 'Context error',
          path: '/armenian/transcription_quality#context-error',
        },
        {
          label: 'Add or missing word',
          path: '/armenian/transcription_quality#adding-missing-words',
        },
        {
          label: 'Subsitution',
          path: '/armenian/transcription_quality#substitution',
        },
        { label: 'Spacing', path: '/armenian/transcription_quality#spacing' },
      ],
    },
    {
      label: 'Punctuation',
      path: '',
      subMenus: [
        { label: 'Overview', path: '/armenian/punctuation' },
        {
          label: 'Fragment versus sentence',
          path: '#fragment-versus-sentences',
        },
        { label: 'Commas', path: '/armenian/punctuation#commas' },
        {
          label: 'Innotation marks',
          path: '/armenian/punctuation#intonation-marks',
        },
        {
          label: 'Colon and cotation',
          path: '/armenian/punctuation#colon-and-quotation',
        },
        {
          label: 'Other symbols ',
          path: '/armenian/punctuation#other-symbols',
        },
        {
          label: 'Spoken punctuation',
          path: '/armenian/punctuation#spoken-punctuation',
        },
      ],
    },
    {
      label: 'Format',
      path: '',
      subMenus: [
        { label: 'Overview', path: '/armenian/format' },
        { label: 'Number', path: '/armenian/format#number' },
        { label: 'Date and time', path: '/armenian/format#currency-and-unit' },
        { label: 'Commas', path: '/armenian/format#date-and-time' },
        { label: 'Address', path: '/armenian/format#address' },
        { label: 'Web', path: '/armenian/format#web' },
        { label: 'Abbreviation', path: '/armenian/format#abbreviation' },
      ],
    },
    {
      label: 'Agreed Spelling',
      path: '',
      subMenus: [
        { label: 'Overview', path: '/armenian/agreed_spelling' },
        {
          label: 'Spelling out ',
          path: '/armenian/agreed_spelling#spelling-out',
        },
        {
          label: 'Proper names',
          path: '/armenian/agreed_spelling#interjection',
        },
        {
          label: 'Brand and Product',
          path: '/armenian/agreed_spelling#brand-and-product',
        },
        {
          label: 'Media title ',
          path: '/armenian/agreed_spelling#media-title',
        },
        {
          label: 'Multiple spellings ',
          path: '/armenian/agreed_spelling#multiple-spelling',
        },
      ],
    },
    {
      label: 'Diffiicult Utterances',
      path: '',
      subMenus: [
        { label: 'Overview', path: '/armenian/difficult_utterances' },
        {
          label: 'Skipping a prompt',
          path: '/armenian/difficult_utterances#skipping-a-prompt',
        },
        {
          label: 'Hesitations and trancations',
          path: '#hesitations-and-truncations',
        },
        {
          label: 'Background and foreground speech',
          path:
            '/armenian/difficult_utterances#background-and-foreground-speech',
        },
        {
          label: 'Foreign Language',
          path: '/armenian/difficult_utterances#foreign-language',
        },
        {
          label: 'Accents ',
          path: '/armenian/difficult_utterances#accents',
        },
      ],
    },
  ]
  return (
    <MasterPage menuItems={menuItems} appTitle="Armenian">
      {children}
    </MasterPage>
  )
}

export default Wrapper
