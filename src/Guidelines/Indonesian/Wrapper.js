import React from 'react'
import MasterPage from '../../Components/common/MasterPage'

const Wrapper = ({ children }) => {
  const menuItems = [
    {
      label: 'Guiding Principle',
      path: '/indonesian/guiding_principles',
    },
    {
      label: 'Long form generic rules',
      path: '',
      subMenus: [
        { label: 'Overview', path: '/indonesian/longform_generic_rules' },
        {
          label: 'Unintelligible or foreign or singing',
          path:
            '/indonesian/longform_generic_rules#unintelligible-or-foreign-or-singing',
        },
        {
          label: 'Segmentation',
          path: '/indonesian/longform_generic_rules#segmentation',
        },
        {
          label: 'Speaker labelling',
          path: '/indonesian/longform_generic_rules#speaker-labeling',
        },
        {
          label: 'Audio labels',
          path: '/indonesian/longform_generic_rules#audio-labels',
        },
        { label: 'Pii', path: '/indonesian/longform_generic_rules#pii' },
      ],
    },
    {
      label: 'Transcription Qualtiy',
      path: '',
      subMenus: [
        { label: 'Overview', path: '/indonesian/transcription_quality' },
        { label: 'Typo', path: '/indonesian/transcription_quality#typo' },
        {
          label: 'Context error',
          path: '/indonesian/transcription_quality#context-error',
        },
        {
          label: 'Add or missing word',
          path: '/indonesian/transcription_quality#adding-missing-words',
        },
        {
          label: 'Subsitution',
          path: '/indonesian/transcription_quality#substitution',
        },
        { label: 'Spacing', path: '/indonesian/transcription_quality#spacing' },
      ],
    },
    {
      label: 'Punctuation',
      path: '',
      subMenus: [
        { label: 'Overview', path: '/indonesian/punctuation' },
        {
          label: 'Fragment versus sentence',
          path: '/indonesian/punctuation#fragment-vrsus-sentences',
        },
        { label: 'Commas', path: '/indonesian/punctuation#commas' },
        {
          label: 'Innotation marks',
          path: '/indonesian/punctuation#intonation-marks',
        },
        {
          label: 'Colon and cotation',
          path: '/indonesian/punctuation#colon-and-quotation',
        },
        {
          label: 'Other symbols ',
          path: '/indonesian/punctuation#other-symbols',
        },
        {
          label: 'Spoken punctuation',
          path: '/indonesian/punctuation#spoken-punctuation',
        },
      ],
    },
    {
      label: 'Format',
      path: '',
      subMenus: [
        { label: 'Overview', path: '/indonesian/format' },
        { label: 'Number', path: '/indonesian/format#number' },
        {
          label: 'Date and time',
          path: '/indonesian/format#currency-and-unit',
        },
        { label: 'Commas', path: '/indonesian/format#date-and-time' },
        { label: 'Address', path: '/indonesian/format#address' },
        { label: 'Web', path: '/indonesian/format#web' },
        { label: 'Abbreviation', path: '/indonesian/format#abbreviation' },
      ],
    },
    {
      label: 'Agreed Spelling',
      path: '',
      subMenus: [
        { label: 'Overview', path: '/indonesian/agreed_spelling' },
        {
          label: 'Spelling out ',
          path: '/indonesian/agreed_spelling#spelling-out',
        },
        {
          label: 'Proper names',
          path: '/indonesian/agreed_spelling#interjection',
        },
        {
          label: 'Brand and Product',
          path: '/indonesian/agreed_spelling#brand-and-product',
        },
        {
          label: 'Media title ',
          path: '/indonesian/agreed_spelling#media-title',
        },
        {
          label: 'Multiple spellings ',
          path: '/indonesian/agreed_spelling#multiple-spelling',
        },
      ],
    },
    {
      label: 'Diffiicult Utterances',
      path: '',
      subMenus: [
        { label: 'Overview', path: '/indonesian/difficult_utterances' },
        {
          label: 'Skipping a prompt',
          path: '/indonesian/difficult_utterances#skipping-a-prompt',
        },
        {
          label: 'Hesitations and trancations',
          path: '/indonesian/difficult_utterances#hesitations-and-truncations',
        },
        {
          label: 'Background and foreground speech',
          path:
            '/indonesian/difficult_utterances#background-and-foreground-speech',
        },
        {
          label: 'Foreign Language',
          path: '/indonesian/difficult_utterances#foreign-language',
        },
        {
          label: 'Accents ',
          path: '/indonesian/difficult_utterances#accents',
        },
      ],
    },
  ]
  return (
    <MasterPage menuItems={menuItems} appTitle="Indonesian">
      {children}
    </MasterPage>
  )
}

export default Wrapper
