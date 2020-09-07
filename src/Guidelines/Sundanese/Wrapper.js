import React from 'react'
import MasterPage from '../../Components/common/MasterPage'

const Wrapper = ({ children }) => {
  const menuItems = [
    {
      label: 'Guiding Principle',
      path: '/sundanese/guiding_principles',
    },
    {
      label: 'Long form generic rules',
      path: '',
      subMenus: [
        { label: 'Overview', path: '/sundanese/longform_generic_rules' },
        {
          label: 'Unintelligible or foreign or singing',
          path:
            '/sundanese/longform_generic_rules#unintelligible-or-foreign-or-singing',
        },
        {
          label: 'Segmentation',
          path: '/sundanese/longform_generic_rules#segmentation',
        },
        {
          label: 'Speaker labelling',
          path: '/sundanese/longform_generic_rules#speaker-labeling',
        },
        {
          label: 'Audio labels',
          path: '/sundanese/longform_generic_rules#audio-labels',
        },
        { label: 'Pii', path: '/sundanese/longform_generic_rules#pii' },
      ],
    },
    {
      label: 'Transcription Qualtiy',
      path: '',
      subMenus: [
        { label: 'Overview', path: '/sundanese/transcription_quality' },
        { label: 'Typo', path: '/sundanese/transcription_quality#typo' },
        {
          label: 'Context error',
          path: '/sundanese/transcription_quality#context-error',
        },
        {
          label: 'Add or missing word',
          path: '/sundanese/transcription_quality#adding-missing-words',
        },
        {
          label: 'Subsitution',
          path: '/sundanese/transcription_quality#substitution',
        },
        { label: 'Spacing', path: '/sundanese/transcription_quality#spacing' },
      ],
    },
    {
      label: 'Punctuation',
      path: '',
      subMenus: [
        { label: 'Overview', path: '/sundanese/punctuation' },
        {
          label: 'Fragment versus sentence',
          path: '/sundanese/punctuation#fragment-vrsus-sentences',
        },
        { label: 'Commas', path: '/sundanese/punctuation#commas' },
        {
          label: 'Innotation marks',
          path: '/sundanese/punctuation#intonation-marks',
        },
        {
          label: 'Colon and cotation',
          path: '/sundanese/punctuation#colon-and-quotation',
        },
        {
          label: 'Other symbols ',
          path: '/sundanese/punctuation#other-symbols',
        },
        {
          label: 'Spoken punctuation',
          path: '/sundanese/punctuation#spoken-punctuation',
        },
      ],
    },
    {
      label: 'Format',
      path: '',
      subMenus: [
        { label: 'Overview', path: '/sundanese/format' },
        { label: 'Number', path: '#number' },
        { label: 'Date and time', path: '#currency-and-unit' },
        { label: 'Commas', path: '#date-and-time' },
        { label: 'Address', path: '#address' },
        { label: 'Web', path: '#web' },
        { label: 'Abbreviation', path: '#abbreviation' },
      ],
    },
    {
      label: 'Agreed Spelling',
      path: '',
      subMenus: [
        { label: 'Overview', path: '/sundanese/agreed_spelling' },
        {
          label: 'Spelling out ',
          path: '/sundanese/agreed_spelling#spelling-out',
        },
        {
          label: 'Proper names',
          path: '/sundanese/agreed_spelling#interjection',
        },
        {
          label: 'Brand and Product',
          path: '/sundanese/agreed_spelling#brand-and-product',
        },
        {
          label: 'Media title ',
          path: '/sundanese/agreed_spelling#media-title',
        },
        {
          label: 'Multiple spellings ',
          path: '/sundanese/agreed_spelling#multiple-spelling',
        },
      ],
    },
    {
      label: 'Diffiicult Utterances',
      path: '',
      subMenus: [
        { label: 'Overview', path: '/sundanese/difficult_utterances' },
        {
          label: 'Skipping a prompt',
          path: '/sundanese/difficult_utterances#skipping-a-prompt',
        },
        {
          label: 'Hesitations and trancations',
          path: '/sundanese/difficult_utterances#hesitations-and-truncations',
        },
        {
          label: 'Background and foreground speech',
          path:
            '/sundanese/difficult_utterances#background-and-foreground-speech',
        },
        {
          label: 'Foreign Language',
          path: '/sundanese/difficult_utterances#foreign-language',
        },
        {
          label: 'Accents ',
          path: '/sundanese/difficult_utterances#accents',
        },
      ],
    },
  ]
  return (
    <MasterPage menuItems={menuItems} appTitle="Sundanese">
      {children}
    </MasterPage>
  )
}

export default Wrapper
