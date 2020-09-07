import React from 'react'
import MasterPage from '../../Components/common/MasterPage'

const Wrapper = ({ children }) => {
  const menuItems = [
    {
      label: 'Guiding Principle',
      path: '/russian/guiding_principles',
    },
    {
      label: 'Long form generic rules',
      path: '',
      subMenus: [
        { label: 'Overview', path: '/russian/longform_generic_rules' },
        {
          label: 'Unintelligible or foreign or singing',
          path:
            '/russian/longform_generic_rules#unintelligible-or-foreign-or-singing',
        },
        {
          label: 'Segmentation',
          path: '/russian/longform_generic_rules#segmentation',
        },
        {
          label: 'Speaker labelling',
          path: '/russian/longform_generic_rules#speaker-labeling',
        },
        {
          label: 'Audio labels',
          path: '/russian/longform_generic_rules#audio-labels',
        },
        { label: 'Pii', path: '/russian/longform_generic_rules#pii' },
      ],
    },
    {
      label: 'Transcription Qualtiy',
      path: '',
      subMenus: [
        { label: 'Overview', path: '/russian/transcription_quality' },
        { label: 'Typo', path: '#typo' },
        {
          label: 'Context error',
          path: '/russian/transcription_quality#context-error',
        },
        {
          label: 'Add or missing word',
          path: '/russian/transcription_quality#adding-missing-words',
        },
        {
          label: 'Subsitution',
          path: '/russian/transcription_quality#substitution',
        },
        { label: 'Spacing', path: '/russian/transcription_quality#spacing' },
      ],
    },
    {
      label: 'Punctuation',
      path: '',
      subMenus: [
        { label: 'Overview', path: '/russian/punctuation' },
        {
          label: 'Fragment versus sentence',
          path: '/russian/punctuation#fragment-vrsus-sentences',
        },
        { label: 'Commas', path: '/russian/punctuation#commas' },
        {
          label: 'Innotation marks',
          path: '/russian/punctuation#intonation-marks',
        },
        {
          label: 'Colon and cotation',
          path: '/russian/punctuation#colon-and-quotation',
        },
        { label: 'Other symbols ', path: '/russian/punctuation#other-symbols' },
        {
          label: 'Spoken punctuation',
          path: '/russian/punctuation#spoken-punctuation',
        },
      ],
    },
    {
      label: 'Format',
      path: '',
      subMenus: [
        { label: 'Overview', path: '/russian/format' },
        { label: 'Number', path: '#number' },
        { label: 'Date and time', path: '/russian/format#currency-and-unit' },
        { label: 'Commas', path: '/russian/format#date-and-time' },
        { label: 'Address', path: '/russian/format#address' },
        { label: 'Web', path: '/russian/format#web' },
        { label: 'Abbreviation', path: '/russian/format#abbreviation' },
      ],
    },
    // {
    //   label: 'Agreed Spelling',
    //   path: '',
    //   subMenus: [
    //     { label: 'Overview', path: '/russian/agreed_spelling' },
    //     { label: 'Spelling out ', path: '#spelling-out' },
    //     { label: 'Proper names', path: '#interjection' },
    //     { label: 'Brand and Product', path: '#brand-and-product' },
    //     { label: 'Media title ', path: '#media-title' },
    //     { label: 'Multiple spellings ', path: '#multiple-spelling' },
    //   ],
    // },
    // {
    //   label: 'Diffiicult Utterances',
    //   path: '',
    //   subMenus: [
    //     { label: 'Overview', path: '/russian/difficult_utterances' },
    //     { label: 'Skipping a prompt', path: '#skipping-a-prompt' },
    //     {
    //       label: 'Hesitations and trancations',
    //       path: '#hesitations-and-truncations',
    //     },
    //     {
    //       label: 'Background and foreground speech',
    //       path: '#background-and-foreground-speech',
    //     },
    //     { label: 'Foreign Language', path: '#foreign-language' },
    //     {
    //       label: 'Accents ',
    //       path: '/russian/difficult_utterances#accents',
    //     },
    //   ],
    // },
  ]
  return (
    <MasterPage menuItems={menuItems} appTitle="Russian">
      {children}
    </MasterPage>
  )
}

export default Wrapper
