import React from 'react'
import MasterPage from '../../Components/common/MasterPage'

const Wrapper = ({ children }) => {
  const menuItems = [
    {
      label: 'Guiding Principle',
      path: '/thai/guiding_principles',
    },
    {
      label: 'Long form generic rules',
      path: '',
      subMenus: [
        { label: 'Overview', path: '/thai/longform_generic_rules' },
        {
          label: 'Unintelligible or foreign or singing',
          path:
            '/thai/longform_generic_rules#unintelligible-or-foreign-or-singing',
        },
        {
          label: 'Segmentation',
          path: '/thai/longform_generic_rules#segmentation',
        },
        {
          label: 'Speaker labelling',
          path: '/thai/longform_generic_rules#speaker-labeling',
        },
        {
          label: 'Audio labels',
          path: '/thai/longform_generic_rules#audio-labels',
        },
        { label: 'Pii', path: '/thai/longform_generic_rules#pii' },
      ],
    },
    {
      label: 'Transcription Qualtiy',
      path: '',
      subMenus: [
        { label: 'Overview', path: '/thai/transcription_quality' },
        { label: 'Typo', path: '/thai/transcription_quality#typo' },
        {
          label: 'Context error',
          path: '/thai/transcription_quality#context-error',
        },
        {
          label: 'Add or missing word',
          path: '/thai/transcription_quality#adding-missing-words',
        },
        {
          label: 'Subsitution',
          path: '/thai/transcription_quality#substitution',
        },
        { label: 'Spacing', path: '/thai/transcription_quality#spacing' },
      ],
    },
    // {
    //   label: 'Punctuation',
    //   path: '',
    //   subMenus: [
    //     { label: 'Overview', path: '/thai/punctuation' },
    //     {
    //       label: 'Fragment versus sentence',
    //       path: '#fragment-vrsus-sentences',
    //     },
    //     { label: 'Commas', path: '#commas' },
    //     { label: 'Innotation marks', path: '#intonation-marks' },
    //     { label: 'Colon and cotation', path: '#colon-and-quotation' },
    //     { label: 'Other symbols ', path: '#other-symbols' },
    //     { label: 'Spoken punctuation', path: '#spoken-punctuation' },
    //   ],
    // },
    // {
    //   label: 'Format',
    //   path: '',
    //   subMenus: [
    //     { label: 'Overview', path: '/thai/format' },
    //     { label: 'Number', path: '#number' },
    //     { label: 'Date and time', path: '#currency-and-unit' },
    //     { label: 'Commas', path: '#date-and-time' },
    //     { label: 'Address', path: '#address' },
    //     { label: 'Web', path: '#web' },
    //     { label: 'Abbreviation', path: '#abbreviation' },
    //   ],
    // },
    // {
    //   label: 'Agreed Spelling',
    //   path: '',
    //   subMenus: [
    //     { label: 'Overview', path: '/thai/agreed_spelling' },
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
    //     { label: 'Overview', path: '/thai/difficult_utterances' },
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
    //       path: '/thai/difficult_utterances#accents',
    //     },
    //   ],
    // },
  ]
  return (
    <MasterPage menuItems={menuItems} appTitle="Thai">
      {children}
    </MasterPage>
  )
}

export default Wrapper
