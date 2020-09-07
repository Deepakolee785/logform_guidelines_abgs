import React from 'react'
import MasterPage from '../../Components/common/MasterPage'

const Wrapper = ({ children }) => {
  const menuItems = [
    {
      label: 'Guiding Principle',
      path: '/macedonian/guiding_principles',
    },
    {
      label: 'Long form generic rules',
      path: '',
      subMenus: [
        { label: 'Overview', path: '/macedonian/longform_generic_rules' },
        {
          label: 'Unintelligible or foreign or singing',
          path:
            '/macedonian/longform_generic_rules#unintelligible-or-foreign-or-singing',
        },
        {
          label: 'Segmentation',
          path: '/macedonian/longform_generic_rules#segmentation',
        },
        {
          label: 'Speaker labelling',
          path: '/macedonian/longform_generic_rules#speaker-labeling',
        },
        {
          label: 'Audio labels',
          path: '/macedonian/longform_generic_rules#audio-labels',
        },
        { label: 'Pii', path: '/macedonian/longform_generic_rules#pii' },
      ],
    },
    {
      label: 'Transcription Qualtiy',
      path: '',
      subMenus: [
        { label: 'Overview', path: '/macedonian/transcription_quality' },
        { label: 'Typo', path: '/macedonian/transcription_quality#typo' },
        {
          label: 'Context error',
          path: '/macedonian/transcription_quality#context-error',
        },
        {
          label: 'Add or missing word',
          path: '/macedonian/transcription_quality#adding-missing-words',
        },
        {
          label: 'Subsitution',
          path: '/macedonian/transcription_quality#substitution',
        },
        { label: 'Spacing', path: '/macedonian/transcription_quality#spacing' },
      ],
    },
    {
      label: 'Punctuation',
      path: '',
      subMenus: [
        { label: 'Overview', path: '/macedonian/punctuation' },
        {
          label: 'Fragment versus sentence',
          path: '/macedonian/punctuation#fragment-vrsus-sentences',
        },
        { label: 'Commas', path: '/macedonian/punctuation#commas' },
        {
          label: 'Innotation marks',
          path: '/macedonian/punctuation#intonation-marks',
        },
        {
          label: 'Colon and cotation',
          path: '/macedonian/punctuation#colon-and-quotation',
        },
        {
          label: 'Other symbols ',
          path: '/macedonian/punctuation#other-symbols',
        },
        {
          label: 'Spoken punctuation',
          path: '/macedonian/punctuation#spoken-punctuation',
        },
      ],
    },
    {
      label: 'Format',
      path: '',
      subMenus: [
        { label: 'Overview', path: '/macedonian/format' },
        { label: 'Number', path: '/macedonian/format#number' },
        // { label: 'Date and time', path: '#currency-and-unit' },
        // { label: 'Commas', path: '#date-and-time' },
        // { label: 'Address', path: '#address' },
        // { label: 'Web', path: '#web' },
        // { label: 'Abbreviation', path: '#abbreviation' },
      ],
    },
    {
      label: 'Agreed Spelling',
      path: '',
      subMenus: [
        { label: 'Overview', path: '/macedonian/agreed_spelling' },
        {
          label: 'Spelling out ',
          path: '/macedonian/agreed_spelling#spelling-out',
        },
        {
          label: 'Proper names',
          path: '/macedonian/agreed_spelling#interjection',
        },
        {
          label: 'Brand and Product',
          path: '/macedonian/agreed_spelling#brand-and-product',
        },
        {
          label: 'Media title ',
          path: '/macedonian/agreed_spelling#media-title',
        },
        {
          label: 'Multiple spellings ',
          path: '/macedonian/agreed_spelling#multiple-spelling',
        },
      ],
    },
    // {
    //   label: 'Diffiicult Utterances',
    //   path: '',
    //   subMenus: [
    //     { label: 'Overview', path: '/macedonian/difficult_utterances' },
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
    //       path: '/macedonian/difficult_utterances#accents',
    //     },
    //   ],
    // },
  ]
  return (
    <MasterPage menuItems={menuItems} appTitle="Macedonian">
      {children}
    </MasterPage>
  )
}

export default Wrapper
