import React from 'react'
import MasterPage from '../../Components/common/MasterPage'

const Wrapper = ({ children }) => {
  const menuItems = [
    {
      label: 'Guiding Principle',
      path: '/hindi/guiding_principles',
    },
    // {
    //   label: 'Long form generic rules',
    //   path: '',
    //   subMenus: [
    //     { label: 'Overview', path: '/hindi/longform_generic_rules' },
    //     {
    //       label: 'Unintelligible or foreign or singing',
    //       path:
    //         '/hindi/longform_generic_rules#unintelligible-or-foreign-or-singing',
    //     },
    //     {
    //       label: 'Segmentation',
    //       path: '/hindi/longform_generic_rules#segmentation',
    //     },
    //     {
    //       label: 'Speaker labelling',
    //       path: '/hindi/longform_generic_rules#speaker-labeling',
    //     },
    //     {
    //       label: 'Audio labels',
    //       path: '/hindi/longform_generic_rules#audio-labels',
    //     },
    //     { label: 'Pii', path: '/hindi/longform_generic_rules#pii' },
    //   ],
    // },
    {
      label: 'Transcription Qualtiy',
      path: '',
      subMenus: [
        { label: 'Overview', path: '/hindi/transcription_quality' },
        { label: 'Typo', path: '/hindi/transcription_quality#typo' },
        {
          label: 'Context error',
          path: '/hindi/transcription_quality#context-error',
        },
        {
          label: 'Add or missing word',
          path: '/hindi/transcription_quality#adding-missing-words',
        },
        {
          label: 'Subsitution',
          path: '/hindi/transcription_quality#substitution',
        },
        { label: 'Spacing', path: '/hindi/transcription_quality#spacing' },
      ],
    },
    {
      label: 'Punctuation',
      path: '',
      subMenus: [
        { label: 'Overview', path: '/hindi/punctuation' },
        {
          label: 'Fragment versus sentence',
          path: '/hindi/punctuation#fragment-vrsus-sentences',
        },
        { label: 'Commas', path: '/hindi/punctuation#commas' },
        {
          label: 'Innotation marks',
          path: '/hindi/punctuation#intonation-marks',
        },
        {
          label: 'Colon and cotation',
          path: '/hindi/punctuation#colon-and-quotation',
        },
        { label: 'Other symbols ', path: '/hindi/punctuation#other-symbols' },
        {
          label: 'Spoken punctuation',
          path: '/hindi/punctuation#spoken-punctuation',
        },
      ],
    },
    {
      label: 'Format',
      path: '',
      subMenus: [
        { label: 'Overview', path: '/hindi/format' },
        { label: 'Number', path: '/hindi/format#number' },
        { label: 'Date and time', path: '/hindi/format#currency-and-unit' },
        { label: 'Commas', path: '/hindi/format#date-and-time' },
        { label: 'Address', path: '/hindi/format#address' },
        { label: 'Web', path: '/hindi/format#web' },
        { label: 'Abbreviation', path: '/hindi/format#abbreviation' },
      ],
    },
    {
      label: 'Agreed Spelling',
      path: '',
      subMenus: [
        { label: 'Overview', path: '/hindi/agreed_spelling' },
        { label: 'Spelling out ', path: '/hindi/agreed_spelling#spelling-out' },
        { label: 'Proper names', path: '/hindi/agreed_spelling#interjection' },
        {
          label: 'Brand and Product',
          path: '/hindi/agreed_spelling#brand-and-product',
        },
        { label: 'Media title ', path: '/hindi/agreed_spelling#media-title' },
        {
          label: 'Multiple spellings ',
          path: '/hindi/agreed_spelling#multiple-spelling',
        },
      ],
    },
    {
      label: 'Diffiicult Utterances',
      path: '',
      subMenus: [
        { label: 'Overview', path: '/hindi/difficult_utterances' },
        {
          label: 'Skipping a prompt',
          path: '/hindi/difficult_utterances#skipping-a-prompt',
        },
        {
          label: 'Hesitations and trancations',
          path: '/hindi/difficult_utterances#hesitations-and-truncations',
        },
        {
          label: 'Background and foreground speech',
          path: '/hindi/difficult_utterances#background-and-foreground-speech',
        },
        {
          label: 'Foreign Language',
          path: '/hindi/difficult_utterances#foreign-language',
        },
        {
          label: 'Accents ',
          path: '/hindi/difficult_utterances#accents',
        },
      ],
    },
  ]
  return (
    <MasterPage menuItems={menuItems} appTitle="Hindi">
      {children}
    </MasterPage>
  )
}

export default Wrapper
