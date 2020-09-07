import React from 'react'
import MasterPage from '../../Components/common/MasterPage'

const Wrapper = ({ children }) => {
  const menuItems = [
    {
      label: 'Guiding Principle',
      path: '/vietnamese/guiding_principles',
    },
    {
      label: 'Long form generic rules',
      path: '',
      subMenus: [
        { label: 'Overview', path: '/vietnamese/longform_generic_rules' },
        {
          label: 'Unintelligible or foreign or singing',
          path:
            '/vietnamese/longform_generic_rules#unintelligible-or-foreign-or-singing',
        },
        {
          label: 'Segmentation',
          path: '/vietnamese/longform_generic_rules#segmentation',
        },
        {
          label: 'Speaker labelling',
          path: '/vietnamese/longform_generic_rules#speaker-labeling',
        },
        // {
        //   label: 'Audio labels',
        //   path: '/vietnamese/longform_generic_rules#audio-labels',
        // },
        { label: 'Pii', path: '/vietnamese/longform_generic_rules#pii' },
      ],
    },
    {
      label: 'Transcription Qualtiy',
      path: '',
      subMenus: [
        { label: 'Overview', path: '/vietnamese/transcription_quality' },
        { label: 'Typo', path: '/vietnamese/transcription_quality#typo' },
        {
          label: 'Context error',
          path: '/vietnamese/transcription_quality#context-error',
        },
        {
          label: 'Add or missing word',
          path: '/vietnamese/transcription_quality#adding-missing-words',
        },
        {
          label: 'Subsitution',
          path: '/vietnamese/transcription_quality#substitution',
        },
        { label: 'Spacing', path: '/vietnamese/transcription_quality#spacing' },
      ],
    },
    {
      label: 'Punctuation',
      path: '',
      subMenus: [
        { label: 'Overview', path: '/vietnamese/punctuation' },
        {
          label: 'Fragment versus sentence',
          path: '/vietnamese/punctuation#fragment-vrsus-sentences',
        },
        { label: 'Commas', path: '/vietnamese/punctuation#commas' },
        {
          label: 'Innotation marks',
          path: '/vietnamese/punctuation#intonation-marks',
        },
        {
          label: 'Colon and cotation',
          path: '/vietnamese/punctuation#colon-and-quotation',
        },
        {
          label: 'Other symbols ',
          path: '/vietnamese/punctuation#other-symbols',
        },
        {
          label: 'Spoken punctuation',
          path: '/vietnamese/punctuation#spoken-punctuation',
        },
      ],
    },
    {
      label: 'Format',
      path: '',
      subMenus: [
        { label: 'Overview', path: '/vietnamese/format' },
        { label: 'Number', path: '/vietnamese/format#number' },
        {
          label: 'Date and time',
          path: '/vietnamese/format#currency-and-unit',
        },
        { label: 'Commas', path: '/vietnamese/format#date-and-time' },
        { label: 'Address', path: '/vietnamese/format#address' },
        { label: 'Web', path: '/vietnamese/format#web' },
        { label: 'Abbreviation', path: '/vietnamese/format#abbreviation' },
      ],
    },
    {
      label: 'Agreed Spelling',
      path: '',
      subMenus: [
        { label: 'Overview', path: '/vietnamese/agreed_spelling' },
        {
          label: 'Spelling out ',
          path: '/vietnamese/agreed_spelling#spelling-out',
        },
        {
          label: 'Proper names',
          path: '/vietnamese/agreed_spelling#interjection',
        },
        {
          label: 'Brand and Product',
          path: '/vietnamese/agreed_spelling#brand-and-product',
        },
        {
          label: 'Media title ',
          path: '/vietnamese/agreed_spelling#media-title',
        },
        {
          label: 'Multiple spellings ',
          path: '/vietnamese/agreed_spelling#multiple-spelling',
        },
      ],
    },
    {
      label: 'Diffiicult Utterances',
      path: '',
      subMenus: [
        { label: 'Overview', path: '/vietnamese/difficult_utterances' },
        {
          label: 'Skipping a prompt',
          path: '/vietnamese/difficult_utterances#skipping-a-prompt',
        },
        {
          label: 'Hesitations and trancations',
          path: '/vietnamese/difficult_utterances#hesitations-and-truncations',
        },
        {
          label: 'Background and foreground speech',
          path:
            '/vietnamese/difficult_utterances#background-and-foreground-speech',
        },
        {
          label: 'Foreign Language',
          path: '/vietnamese/difficult_utterances#foreign-language',
        },
        {
          label: 'Accents ',
          path: '/vietnamese/difficult_utterances#accents',
        },
      ],
    },
  ]
  return (
    <MasterPage menuItems={menuItems} appTitle="Vietnamese">
      {children}
    </MasterPage>
  )
}

export default Wrapper
