import React from 'react'
import MasterPage from '../../Components/common/MasterPage'

const Wrapper = ({ children }) => {
  const menuItems = [
    {
      label: 'Guiding Principle',
      path: '/belarusian/guiding_principles',
    },
    {
      label: 'Long form generic rules',
      path: '',
      subMenus: [
        { label: 'Overview', path: '/belarusian/longform_generic_rules' },
        {
          label: 'Unintelligible or foreign or singing',
          path:
            '/belarusian/longform_generic_rules#unintelligible-or-foreign-or-singing',
        },
        {
          label: 'Segmentation',
          path: '/belarusian/longform_generic_rules#segmentation',
        },
        {
          label: 'Speaker labelling',
          path: '/belarusian/longform_generic_rules#speaker-labeling',
        },
        {
          label: 'Audio labels',
          path: '/belarusian/longform_generic_rules#audio-labels',
        },
        { label: 'Pii', path: '/belarusian/longform_generic_rules#pii' },
      ],
    },
    {
      label: 'Transcription Qualtiy',
      path: '',
      subMenus: [
        { label: 'Overview', path: '/belarusian/transcription_quality' },
        { label: 'Typo', path: '/belarusian/transcription_quality#typo' },
        {
          label: 'Context error',
          path: '/belarusian/transcription_quality#context-error',
        },
        {
          label: 'Add or missing word',
          path: '/belarusian/transcription_quality#adding-missing-words',
        },
        {
          label: 'Subsitution',
          path: '/belarusian/transcription_quality#substitution',
        },
        { label: 'Spacing', path: '/belarusian/transcription_quality#spacing' },
      ],
    },
    {
      label: 'Punctuation',
      path: '',
      subMenus: [
        { label: 'Overview', path: '/belarusian/punctuation' },
        {
          label: 'Fragment versus sentence',
          path: '/belarusian/punctuation#fragment-vrsus-sentences',
        },
        { label: 'Commas', path: '/belarusian/punctuation#commas' },
        {
          label: 'Innotation marks',
          path: '/belarusian/punctuation#intonation-marks',
        },
        {
          label: 'Colon and cotation',
          path: '/belarusian/punctuation#colon-and-quotation',
        },
        {
          label: 'Other symbols ',
          path: '/belarusian/punctuation#other-symbols',
        },
        {
          label: 'Spoken punctuation',
          path: '/belarusian/punctuation#spoken-punctuation',
        },
      ],
    },
    {
      label: 'Format',
      path: '',
      subMenus: [
        { label: 'Overview', path: '/belarusian/format' },
        { label: 'Number', path: '/belarusian/format#number' },
        {
          label: 'Date and time',
          path: '/belarusian/format#currency-and-unit',
        },
        { label: 'Commas', path: '/belarusian/format#date-and-time' },
        { label: 'Address', path: '/belarusian/format#address' },
        { label: 'Web', path: '/belarusian/format#web' },
        { label: 'Abbreviation', path: '/belarusian/format#abbreviation' },
      ],
    },
    {
      label: 'Agreed Spelling',
      path: '',
      subMenus: [
        { label: 'Overview', path: '/belarusian/agreed_spelling' },
        {
          label: 'Spelling out ',
          path: '/belarusian/agreed_spelling#spelling-out',
        },
        {
          label: 'Proper names',
          path: '/belarusian/agreed_spelling#interjection',
        },
        {
          label: 'Brand and Product',
          path: '/belarusian/agreed_spelling#brand-and-product',
        },
        {
          label: 'Media title ',
          path: '/belarusian/agreed_spelling#media-title',
        },
        {
          label: 'Multiple spellings ',
          path: '/belarusian/agreed_spelling#multiple-spelling',
        },
      ],
    },
    {
      label: 'Diffiicult Utterances',
      path: '',
      subMenus: [
        { label: 'Overview', path: '/belarusian/difficult_utterances' },
        {
          label: 'Skipping a prompt',
          path: '/belarusian/difficult_utterances#skipping-a-prompt',
        },
        {
          label: 'Hesitations and trancations',
          path: '/belarusian/difficult_utterances#hesitations-and-truncations',
        },
        {
          label: 'Background and foreground speech',
          path:
            '/belarusian/difficult_utterances#background-and-foreground-speech',
        },
        {
          label: 'Foreign Language',
          path: '/belarusian/difficult_utterances#foreign-language',
        },
        {
          label: 'Accents ',
          path: '/belarusian/difficult_utterances#accents',
        },
      ],
    },
  ]
  return (
    <MasterPage menuItems={menuItems} appTitle="Belarusian">
      {children}
    </MasterPage>
  )
}

export default Wrapper
