import React from 'react'
import MasterPage from '../../Components/common/MasterPage'

const Wrapper = ({ children }) => {
  const menuItems = [
    {
      label: 'Guiding Principle',
      path: '/mongolian/guiding_principles',
    },
    {
      label: 'Long form generic rules',
      path: '',
      subMenus: [
        { label: 'Overview', path: '/mongolian/longform_generic_rules' },
        {
          label: 'Unintelligible or foreign or singing',
          path:
            '/mongolian/longform_generic_rules#unintelligible-or-foreign-or-singing',
        },
        {
          label: 'Segmentation',
          path: '/mongolian/longform_generic_rules#segmentation',
        },
        {
          label: 'Speaker labelling',
          path: '/mongolian/longform_generic_rules#speaker-labeling',
        },
        {
          label: 'Audio labels',
          path: '/mongolian/longform_generic_rules#audio-labels',
        },
        { label: 'Pii', path: '/mongolian/longform_generic_rules#pii' },
      ],
    },
    {
      label: 'Transcription Qualtiy',
      path: '',
      subMenus: [
        { label: 'Overview', path: '/mongolian/transcription_quality' },
        { label: 'Typo', path: '/mongolian/transcription_quality#typo' },
        {
          label: 'Context error',
          path: '/mongolian/transcription_quality#context-error',
        },
        {
          label: 'Add or missing word',
          path: '/mongolian/transcription_quality#adding-missing-words',
        },
        {
          label: 'Subsitution',
          path: '/mongolian/transcription_quality#substitution',
        },
        { label: 'Spacing', path: '/mongolian/transcription_quality#spacing' },
      ],
    },
    {
      label: 'Punctuation',
      path: '',
      subMenus: [
        { label: 'Overview', path: '/mongolian/punctuation' },
        {
          label: 'Fragment versus sentence',
          path: '/mongolian/punctuation#fragment-vrsus-sentences',
        },
        { label: 'Commas', path: '/mongolian/punctuation#commas' },
        {
          label: 'Innotation marks',
          path: '/mongolian/punctuation#intonation-marks',
        },
        {
          label: 'Colon and cotation',
          path: '/mongolian/punctuation#colon-and-quotation',
        },
        {
          label: 'Other symbols ',
          path: '/mongolian/punctuation#other-symbols',
        },
        {
          label: 'Spoken punctuation',
          path: '/mongolian/punctuation#spoken-punctuation',
        },
      ],
    },
    {
      label: 'Format',
      path: '',
      subMenus: [
        { label: 'Overview', path: '/mongolian/format' },
        { label: 'Number', path: '/mongolian/format#number' },
        { label: 'Date and time', path: '/mongolian/format#currency-and-unit' },
        { label: 'Commas', path: '/mongolian/format#date-and-time' },
        { label: 'Address', path: '/mongolian/format#address' },
        { label: 'Web', path: '/mongolian/format#web' },
        { label: 'Abbreviation', path: '/mongolian/format#abbreviation' },
      ],
    },
    {
      label: 'Agreed Spelling',
      path: '',
      subMenus: [
        { label: 'Overview', path: '/mongolian/agreed_spelling' },
        {
          label: 'Spelling out ',
          path: '/mongolian/agreed_spelling#spelling-out',
        },
        {
          label: 'Proper names',
          path: '/mongolian/agreed_spelling#interjection',
        },
        {
          label: 'Brand and Product',
          path: '/mongolian/agreed_spelling#brand-and-product',
        },
        {
          label: 'Media title ',
          path: '/mongolian/agreed_spelling#media-title',
        },
        {
          label: 'Multiple spellings ',
          path: '/mongolian/agreed_spelling#multiple-spelling',
        },
      ],
    },
    {
      label: 'Diffiicult Utterances',
      path: '',
      subMenus: [
        { label: 'Overview', path: '/mongolian/difficult_utterances' },
        {
          label: 'Skipping a prompt',
          path: '/mongolian/difficult_utterances#skipping-a-prompt',
        },
        {
          label: 'Hesitations and trancations',
          path: '/mongolian/difficult_utterances#hesitations-and-truncations',
        },
        {
          label: 'Background and foreground speech',
          path:
            '/mongolian/difficult_utterances#background-and-foreground-speech',
        },
        {
          label: 'Foreign Language',
          path: '/mongolian/difficult_utterances#foreign-language',
        },
        {
          label: 'Accents ',
          path: '/mongolian/difficult_utterances#accents',
        },
      ],
    },
  ]
  return (
    <MasterPage menuItems={menuItems} appTitle="Mongolian">
      {children}
    </MasterPage>
  )
}

export default Wrapper
