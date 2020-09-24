import React from 'react'
import MasterPage from '../../Components/common/MasterPage'

const Wrapper = ({ children }) => {
  const menuItems = [
    {
      label: 'Guiding Principle',
      path: '/croatian/guiding_principles',
    },
    {
      label: 'Long form generic rules',
      path: '',
      subMenus: [
        { label: 'Overview', path: '/croatian/longform_generic_rules' },
        {
          label: 'Unintelligible or foreign or singing',
          path:
            '/croatian/longform_generic_rules#unintelligible-or-foreign-or-singing',
        },
        {
          label: 'Segmentation',
          path: '/croatian/longform_generic_rules#segmentation',
        },
        {
          label: 'Speaker labelling',
          path: '/croatian/longform_generic_rules#speaker-labeling',
        },
        {
          label: 'Audio labels',
          path: '/croatian/longform_generic_rules#audio-labels',
        },
        { label: 'PII', path: '/croatian/longform_generic_rules#PII' },
      ],
    },
    {
      label: 'Transcription Qualtiy',
      path: '',
      subMenus: [
        { label: 'Overview', path: '/croatian/transcription_quality' },
        { label: 'Typo', path: '/croatian/transcription_quality#typo' },
        {
          label: 'Context error',
          path: '/croatian/transcription_quality#context-error',
        },
        {
          label: 'Add or missing word',
          path: '/croatian/transcription_quality#adding-missing-words',
        },
        {
          label: 'Subsitution',
          path: '/croatian/transcription_quality#substitution',
        },
        { label: 'Spacing', path: '/croatian/transcription_quality#spacing' },
      ],
    },
    {
      label: 'Punctuation',
      path: '',
      subMenus: [
        { label: 'Overview', path: '/croatian/punctuation' },
        {
          label: 'Fragment versus sentence',
          path: '#fragment-versus-sentences',
        },
        { label: 'Commas', path: '/croatian/punctuation#commas' },
        {
          label: 'Innotation marks',
          path: '/croatian/punctuation#intonation-marks',
        },
        {
          label: 'Colon and cotation',
          path: '/croatian/punctuation#colon-and-quotation',
        },
        {
          label: 'Other symbols ',
          path: '/croatian/punctuation#other-symbols',
        },
        {
          label: 'Spoken punctuation',
          path: '/croatian/punctuation#spoken-punctuation',
        },
      ],
    },
    {
      label: 'Format',
      path: '',
      subMenus: [
        { label: 'Overview', path: '/croatian/format' },
        { label: 'Number', path: '/croatian/format#number' },
        { label: 'Date and time', path: '/croatian/format#currency-and-unit' },
        { label: 'Commas', path: '/croatian/format#date-and-time' },
        { label: 'Address', path: '/croatian/format#address' },
        { label: 'Web', path: '/croatian/format#web' },
        { label: 'Abbreviation', path: '/croatian/format#abbreviation' },
      ],
    },
    {
      label: 'Agreed Spelling',
      path: '',
      subMenus: [
        { label: 'Overview', path: '/croatian/agreed_spelling' },
        {
          label: 'Spelling out ',
          path: '/croatian/agreed_spelling#spelling-out',
        },
        {
          label: 'Proper names',
          path: '/croatian/agreed_spelling#interjection',
        },
        {
          label: 'Brand and Product',
          path: '/croatian/agreed_spelling#brand-and-product',
        },
        {
          label: 'Media title ',
          path: '/croatian/agreed_spelling#media-title',
        },
        {
          label: 'Multiple spellings ',
          path: '/croatian/agreed_spelling#multiple-spelling',
        },
      ],
    },
    // {
    //       label: 'Diffiicult Utterances',
    //       path: '',
    //       subMenus: [
    //         { label: 'Overview', path: '/croatian/difficult_utterances' },
    //         {
    //           label: 'Skipping a prompt',
    //           path: '/croatian/difficult_utterances#skipping-a-prompt',
    //         },
    //         {
    //           label: 'Hesitations and trancations',
    //           path: '#hesitations-and-truncations',
    //         },
    //         {
    //           label: 'Background and foreground speech',
    //           path:
    //             '/croatian/difficult_utterances#background-and-foreground-speech',
    //         },
    //         {
    //           label: 'Foreign Language',
    //           path: '/croatian/difficult_utterances#foreign-language',
    //         },
    //         {
    //           label: 'Accents ',
    //           path: '/croatian/difficult_utterances#accents',
    //         },
    //       ],
    //     },
  ]
  return (
    <MasterPage menuItems={menuItems} appTitle="Croatian">
      {children}
    </MasterPage>
  )
}

export default Wrapper
