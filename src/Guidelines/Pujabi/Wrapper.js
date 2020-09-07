import React from 'react'
import MasterPage from '../../Components/common/MasterPage'

const Wrapper = ({ children }) => {
  const menuItems = [
    {
      label: 'Guiding Principle',
      path: '/pujabi/guiding_principles',
    },
    {
      label: 'Long form generic rules',
      path: '',
      subMenus: [
        { label: 'Overview', path: '/pujabi/longform_generic_rules' },
        {
          label: 'Unintelligible or foreign or singing',
          path:
            '/pujabi/longform_generic_rules#unintelligible-or-foreign-or-singing',
        },
        {
          label: 'Segmentation',
          path: '/pujabi/longform_generic_rules#segmentation',
        },
        {
          label: 'Speaker labelling',
          path: '/pujabi/longform_generic_rules#speaker-labeling',
        },
        {
          label: 'Audio labels',
          path: '/pujabi/longform_generic_rules#audio-labels',
        },
        { label: 'Pii', path: '/pujabi/longform_generic_rules#pii' },
      ],
    },
    {
      label: 'Transcription Qualtiy',
      path: '',
      subMenus: [
        { label: 'Overview', path: '/pujabi/transcription_quality' },
        { label: 'Typo', path: '/pujabi/transcription_quality#typo' },
        {
          label: 'Context error',
          path: '/pujabi/transcription_quality#context-error',
        },
        {
          label: 'Add or missing word',
          path: '/pujabi/transcription_quality#adding-missing-words',
        },
        {
          label: 'Subsitution',
          path: '/pujabi/transcription_quality#substitution',
        },
        { label: 'Spacing', path: '/pujabi/transcription_quality#spacing' },
      ],
    },
    {
      label: 'Punctuation',
      path: '',
      subMenus: [
        { label: 'Overview', path: '/pujabi/punctuation' },
        {
          label: 'Fragment versus sentence',
          path: '/pujabi/punctuation#fragment-vrsus-sentences',
        },
        { label: 'Commas', path: '/pujabi/punctuation#commas' },
        {
          label: 'Innotation marks',
          path: '/pujabi/punctuation#intonation-marks',
        },
        {
          label: 'Colon and cotation',
          path: '/pujabi/punctuation#colon-and-quotation',
        },
        { label: 'Other symbols ', path: '/pujabi/punctuation#other-symbols' },
        {
          label: 'Spoken punctuation',
          path: '/pujabi/punctuation#spoken-punctuation',
        },
      ],
    },
    {
      label: 'Format',
      path: '',
      subMenus: [
        { label: 'Overview', path: '/pujabi/format' },
        { label: 'Number', path: '/pujabi/format#number' },
        { label: 'Date and time', path: '/pujabi/format#currency-and-unit' },
        { label: 'Commas', path: '/pujabi/format#date-and-time' },
        { label: 'Address', path: '/pujabi/format#address' },
        { label: 'Web', path: '/pujabi/format#web' },
        { label: 'Abbreviation', path: '/pujabi/format#abbreviation' },
      ],
    },
    {
      label: 'Agreed Spelling',
      path: '',
      subMenus: [
        { label: 'Overview', path: '/pujabi/agreed_spelling' },
        {
          label: 'Spelling out ',
          path: '/pujabi/agreed_spelling#spelling-out',
        },
        { label: 'Proper names', path: '/pujabi/agreed_spelling#interjection' },
        {
          label: 'Brand and Product',
          path: '/pujabi/agreed_spelling#brand-and-product',
        },
        { label: 'Media title ', path: '/pujabi/agreed_spelling#media-title' },
        {
          label: 'Multiple spellings ',
          path: '/pujabi/agreed_spelling#multiple-spelling',
        },
      ],
    },
    // {
    //   label: 'Diffiicult Utterances',
    //   path: '',
    //   subMenus: [
    //     { label: 'Overview', path: '/pujabi/difficult_utterances' },
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
    //       path: '/pujabi/difficult_utterances#accents',
    //     },
    //   ],
    // },
  ]
  return (
    <MasterPage menuItems={menuItems} appTitle="Punjabi">
      {children}
    </MasterPage>
  )
}

export default Wrapper
