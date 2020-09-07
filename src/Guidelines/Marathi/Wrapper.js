import React from 'react'
import MasterPage from '../../Components/common/MasterPage'

const Wrapper = ({ children }) => {
  const menuItems = [
    {
      label: 'Guiding Principle',
      path: '/marathi/guiding_principles',
    },
    {
      label: 'Long form generic rules',
      path: '',
      subMenus: [
        { label: 'Overview', path: '/marathi/longform_generic_rules' },
        {
          label: 'Unintelligible or foreign or singing',
          path:
            '/marathi/longform_generic_rules#unintelligible-or-foreign-or-singing',
        },
        {
          label: 'Segmentation',
          path: '/marathi/longform_generic_rules#segmentation',
        },
        {
          label: 'Speaker labelling',
          path: '/marathi/longform_generic_rules#speaker-labeling',
        },
        {
          label: 'Audio labels',
          path: '/marathi/longform_generic_rules#audio-labels',
        },
        { label: 'Pii', path: '/marathi/longform_generic_rules#pii' },
      ],
    },
    {
      label: 'Transcription Qualtiy',
      path: '',
      subMenus: [
        { label: 'Overview', path: '/marathi/transcription_quality' },
        { label: 'Typo', path: '/marathi/transcription_quality#typo' },
        {
          label: 'Context error',
          path: '/marathi/transcription_quality#context-error',
        },
        {
          label: 'Add or missing word',
          path: '/marathi/transcription_quality#adding-missing-words',
        },
        {
          label: 'Subsitution',
          path: '/marathi/transcription_quality#substitution',
        },
        { label: 'Spacing', path: '/marathi/transcription_quality#spacing' },
      ],
    },
    {
      label: 'Punctuation',
      path: '',
      subMenus: [
        { label: 'Overview', path: '/marathi/punctuation' },
        {
          label: 'Fragment versus sentence',
          path: '/marathi/punctuation#fragment-vrsus-sentences',
        },
        { label: 'Commas', path: '/marathi/punctuation#commas' },
        {
          label: 'Innotation marks',
          path: '/marathi/punctuation#intonation-marks',
        },
        {
          label: 'Colon and cotation',
          path: '/marathi/punctuation#colon-and-quotation',
        },
        { label: 'Other symbols ', path: '/marathi/punctuation#other-symbols' },
        {
          label: 'Spoken punctuation',
          path: '/marathi/punctuation#spoken-punctuation',
        },
      ],
    },
    {
      label: 'Format',
      path: '',
      subMenus: [
        { label: 'Overview', path: '/marathi/format' },
        { label: 'Number', path: '/marathi/format#number' },
        { label: 'Date and time', path: '/marathi/format#currency-and-unit' },
        { label: 'Commas', path: '/marathi/format#date-and-time' },
        { label: 'Address', path: '/marathi/format#address' },
        { label: 'Web', path: '/marathi/format#web' },
        { label: 'Abbreviation', path: '/marathi/format#abbreviation' },
      ],
    },
    // {
    //   label: 'Agreed Spelling',
    //   path: '',
    //   subMenus: [
    //     { label: 'Overview', path: '/marathi/agreed_spelling' },
    //     { label: 'Spelling out ', path: '#spelling-out' },
    //     { label: 'Proper names', path: '#interjection' },
    //     { label: 'Brand and Product', path: '#brand-and-product' },
    //     { label: 'Media title ', path: '#media-title' },
    //     { label: 'Multiple spellings ', path: '#multiple-spelling' },
    //   ],
    // },
    {
      label: 'Diffiicult Utterances',
      path: '',
      subMenus: [
        { label: 'Overview', path: '/marathi/difficult_utterances' },
        {
          label: 'Skipping a prompt',
          path: '/marathi/difficult_utterances#skipping-a-prompt',
        },
        {
          label: 'Hesitations and trancations',
          path: '/marathi/difficult_utterances#hesitations-and-truncations',
        },
        {
          label: 'Background and foreground speech',
          path:
            '/marathi/difficult_utterances#background-and-foreground-speech',
        },
        {
          label: 'Foreign Language',
          path: '/marathi/difficult_utterances#foreign-language',
        },
        {
          label: 'Accents ',
          path: '/marathi/difficult_utterances#accents',
        },
      ],
    },
  ]
  return (
    <MasterPage menuItems={menuItems} appTitle="Marathi">
      {children}
    </MasterPage>
  )
}

export default Wrapper
