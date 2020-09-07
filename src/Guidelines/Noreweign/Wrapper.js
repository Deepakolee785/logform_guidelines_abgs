import React from 'react'
import MasterPage from '../../Components/common/MasterPage'

const Wrapper = ({ children }) => {
  const menuItems = [
    {
      label: 'Guiding Principle',
      path: '/noreweign/guiding_principles',
    },
    {
      label: 'Long form generic rules',
      path: '',
      subMenus: [
        { label: 'Overview', path: '/noreweign/longform_generic_rules' },
        {
          label: 'Unintelligible or foreign or singing',
          path:
            '/noreweign/longform_generic_rules#unintelligible-or-foreign-or-singing',
        },
        {
          label: 'Segmentation',
          path: '/noreweign/longform_generic_rules#segmentation',
        },
        {
          label: 'Speaker labelling',
          path: '/noreweign/longform_generic_rules#speaker-labeling',
        },
        {
          label: 'Audio labels',
          path: '/noreweign/longform_generic_rules#audio-labels',
        },
        { label: 'Pii', path: '/noreweign/longform_generic_rules#pii' },
      ],
    },
    {
      label: 'Transcription Qualtiy',
      path: '',
      subMenus: [
        { label: 'Overview', path: '/noreweign/transcription_quality' },
        { label: 'Typo', path: '/noreweign/transcription_quality#typo' },
        {
          label: 'Context error',
          path: '/noreweign/transcription_quality#context-error',
        },
        {
          label: 'Add or missing word',
          path: '/noreweign/transcription_quality#adding-missing-words',
        },
        {
          label: 'Subsitution',
          path: '/noreweign/transcription_quality#substitution',
        },
        { label: 'Spacing', path: '/noreweign/transcription_quality#spacing' },
      ],
    },
    {
      label: 'Punctuation',
      path: '',
      subMenus: [
        { label: 'Overview', path: '/noreweign/punctuation' },
        {
          label: 'Fragment versus sentence',
          path: '/noreweign/punctuation#fragment-vrsus-sentences',
        },
        { label: 'Commas', path: '/noreweign/punctuation#commas' },
        {
          label: 'Innotation marks',
          path: '/noreweign/punctuation#intonation-marks',
        },
        {
          label: 'Colon and cotation',
          path: '/noreweign/punctuation#colon-and-quotation',
        },
        {
          label: 'Other symbols ',
          path: '/noreweign/punctuation#other-symbols',
        },
        {
          label: 'Spoken punctuation',
          path: '/noreweign/punctuation#spoken-punctuation',
        },
      ],
    },
    {
      label: 'Format',
      path: '',
      subMenus: [
        { label: 'Overview', path: '/noreweign/format' },
        { label: 'Number', path: '/noreweign/format#number' },
        { label: 'Date and time', path: '/noreweign/format#currency-and-unit' },
        { label: 'Commas', path: '/noreweign/format#date-and-time' },
        { label: 'Address', path: '/noreweign/format#address' },
        { label: 'Web', path: '/noreweign/format#web' },
        { label: 'Abbreviation', path: '/noreweign/format#abbreviation' },
      ],
    },
    {
      label: 'Agreed Spelling',
      path: '',
      subMenus: [
        { label: 'Overview', path: '/noreweign/agreed_spelling' },
        {
          label: 'Spelling out ',
          path: '/noreweign/agreed_spelling#spelling-out',
        },
        {
          label: 'Proper names',
          path: '/noreweign/agreed_spelling#interjection',
        },
        {
          label: 'Brand and Product',
          path: '/noreweign/agreed_spelling#brand-and-product',
        },
        {
          label: 'Media title ',
          path: '/noreweign/agreed_spelling#media-title',
        },
        {
          label: 'Multiple spellings ',
          path: '/noreweign/agreed_spelling#multiple-spelling',
        },
      ],
    },
    {
      label: 'Diffiicult Utterances',
      path: '',
      subMenus: [
        { label: 'Overview', path: '/noreweign/difficult_utterances' },
        {
          label: 'Skipping a prompt',
          path: '/noreweign/difficult_utterances#skipping-a-prompt',
        },
        {
          label: 'Hesitations and trancations',
          path: '/noreweign/difficult_utterances#hesitations-and-truncations',
        },
        {
          label: 'Background and foreground speech',
          path:
            '/noreweign/difficult_utterances#background-and-foreground-speech',
        },
        {
          label: 'Foreign Language',
          path: '/noreweign/difficult_utterances#foreign-language',
        },
        {
          label: 'Accents ',
          path: '/noreweign/difficult_utterances#accents',
        },
      ],
    },
  ]
  return (
    <MasterPage menuItems={menuItems} appTitle="Noreweign">
      {children}
    </MasterPage>
  )
}

export default Wrapper
