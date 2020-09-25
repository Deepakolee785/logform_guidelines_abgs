import React from 'react'
import MasterPage from '../../Components/common/MasterPage'

const Wrapper = ({ children }) => {
  const menuItems = [
    {
      label: 'Guiding Principle',
      path: '/polish/guiding_principles',
    },
    {
      label: 'Long form generic rules',
      path: '',
      subMenus: [
        { label: 'Overview', path: '/polish/longform_generic_rules' },
        {
          label: 'Unintelligible or foreign or singing',
          path:
            '/polish/longform_generic_rules#unintelligible-or-foreign-or-singing',
        },
        {
          label: 'Segmentation',
          path: '/polish/longform_generic_rules#segmentation',
        },
        {
          label: 'Speaker labelling',
          path: '/polish/longform_generic_rules#speaker-labeling',
        },
        {
          label: 'Audio labels',
          path: '/polish/longform_generic_rules#audio-labels',
        },
        { label: 'PII', path: '/polish/longform_generic_rules#PII' },
      ],
    },
    {
      label: 'Transcription Qualtiy',
      path: '',
      subMenus: [
        { label: 'Overview', path: '/polish/transcription_quality' },
        { label: 'Typo', path: '/polish/transcription_quality#typo' },
        {
          label: 'Context error',
          path: '/polish/transcription_quality#context-error',
        },
        {
          label: 'Add or missing word',
          path: '/polish/transcription_quality#adding-missing-words',
        },
        {
          label: 'Subsitution',
          path: '/polish/transcription_quality#substitution',
        },
        { label: 'Spacing', path: '/polish/transcription_quality#spacing' },
      ],
    },
    {
      label: 'Punctuation',
      path: '',
      subMenus: [
        { label: 'Overview', path: '/polish/punctuation' },
        {
          label: 'Fragment versus sentence',
          path: '#fragment-versus-sentences',
        },
        { label: 'Commas', path: '/polish/punctuation#commas' },
        {
          label: 'Innotation marks',
          path: '/polish/punctuation#intonation-marks',
        },
        {
          label: 'Colon and cotation',
          path: '/polish/punctuation#colon-and-quotation',
        },
        {
          label: 'Other symbols ',
          path: '/polish/punctuation#other-symbols',
        },
        {
          label: 'Spoken punctuation',
          path: '/polish/punctuation#spoken-punctuation',
        },
      ],
    },
    {
      label: 'Format',
      path: '',
      subMenus: [
        { label: 'Overview', path: '/polish/format' },
        { label: 'Number', path: '/polish/format#number' },
        { label: 'Date and time', path: '/polish/format#currency-and-unit' },
        { label: 'Commas', path: '/polish/format#date-and-time' },
        { label: 'Address', path: '/polish/format#address' },
        { label: 'Web', path: '/polish/format#web' },
        { label: 'Abbreviation', path: '/polish/format#abbreviation' },
      ],
    },
    {
      label: 'Agreed Spelling',
      path: '',
      subMenus: [
        { label: 'Overview', path: '/polish/agreed_spelling' },
        {
          label: 'Spelling out ',
          path: '/polish/agreed_spelling#spelling-out',
        },
        {
          label: 'Proper names',
          path: '/polish/agreed_spelling#interjection',
        },
        {
          label: 'Brand and Product',
          path: '/polish/agreed_spelling#brand-and-product',
        },
        {
          label: 'Media title ',
          path: '/polish/agreed_spelling#media-title',
        },
        {
          label: 'Multiple spellings ',
          path: '/polish/agreed_spelling#multiple-spelling',
        },
      ],
    },
    {
      label: 'Diffiicult Utterances',
      path: '',
      subMenus: [
        { label: 'Overview', path: '/polish/difficult_utterances' },
        // {
        //   label: 'Skipping a prompt',
        //   path: '/polish/difficult_utterances#skipping-a-prompt',
        // },
        {
          label: 'Hesitations and trancations',
          path: '#hesitations-and-truncations',
        },
        {
          label: 'Background and foreground speech',
          path: '/polish/difficult_utterances#background-and-foreground-speech',
        },
        {
          label: 'Foreign Language',
          path: '/polish/difficult_utterances#foreign-language',
        },
        {
          label: 'Accents ',
          path: '/polish/difficult_utterances#accents',
        },
      ],
    },
  ]
  return (
    <MasterPage menuItems={menuItems} appTitle="Polish">
      {children}
    </MasterPage>
  )
}

export default Wrapper
