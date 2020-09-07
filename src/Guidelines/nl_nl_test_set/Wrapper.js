import React from 'react'
import MasterPage from '../../Components/common/MasterPage'

const Wrapper = ({ children }) => {
  const menuItems = [
    {
      label: 'Guiding Principle',
      path: '/nl_nl_test_set/guiding_principles',
    },
    {
      label: 'Long form generic rules',
      path: '',
      subMenus: [
        { label: 'Overview', path: '/nl_nl_test_set/longform_generic_rules' },
        {
          label: 'Unintelligible or foreign or singing',
          path:
            '/nl_nl_test_set/longform_generic_rules#unintelligible-or-foreign-or-singing',
        },
        {
          label: 'Segmentation',
          path: '/nl_nl_test_set/longform_generic_rules#segmentation',
        },
        {
          label: 'Speaker labelling',
          path: '/nl_nl_test_set/longform_generic_rules#speaker-labeling',
        },
        {
          label: 'Audio labels',
          path: '/nl_nl_test_set/longform_generic_rules#audio-labels',
        },
        { label: 'Pii', path: '/nl_nl_test_set/longform_generic_rules#pii' },
      ],
    },
    {
      label: 'Transcription Qualtiy',
      path: '',
      subMenus: [
        { label: 'Overview', path: '/nl_nl_test_set/transcription_quality' },
        { label: 'Typo', path: '/nl_nl_test_set/transcription_quality#typo' },
        {
          label: 'Context error',
          path: '/nl_nl_test_set/transcription_quality#context-error',
        },
        {
          label: 'Add or missing word',
          path: '/nl_nl_test_set/transcription_quality#adding-missing-words',
        },
        {
          label: 'Subsitution',
          path: '/nl_nl_test_set/transcription_quality#substitution',
        },
        {
          label: 'Spacing',
          path: '/nl_nl_test_set/transcription_quality#spacing',
        },
      ],
    },
    {
      label: 'Punctuation',
      path: '',
      subMenus: [
        { label: 'Overview', path: '/nl_nl_test_set/punctuation' },
        {
          label: 'Fragment versus sentence',
          path: '/nl_nl_test_set/punctuation#fragment-vrsus-sentences',
        },
        { label: 'Commas', path: '/nl_nl_test_set/punctuation#commas' },
        {
          label: 'Innotation marks',
          path: '/nl_nl_test_set/punctuation#intonation-marks',
        },
        {
          label: 'Colon and cotation',
          path: '/nl_nl_test_set/punctuation#colon-and-quotation',
        },
        {
          label: 'Other symbols ',
          path: '/nl_nl_test_set/punctuation#other-symbols',
        },
        {
          label: 'Spoken punctuation',
          path: '/nl_nl_test_set/punctuation#spoken-punctuation',
        },
      ],
    },
    {
      label: 'Format',
      path: '',
      subMenus: [
        { label: 'Overview', path: '/nl_nl_test_set/format' },
        { label: 'Number', path: '/nl_nl_test_set/format#number' },
        {
          label: 'Date and time',
          path: '/nl_nl_test_set/format#currency-and-unit',
        },
        { label: 'Commas', path: '/nl_nl_test_set/format#date-and-time' },
        { label: 'Address', path: '/nl_nl_test_set/format#address' },
        { label: 'Web', path: '/nl_nl_test_set/format#web' },
        { label: 'Abbreviation', path: '/nl_nl_test_set/format#abbreviation' },
      ],
    },
    {
      label: 'Agreed Spelling',
      path: '',
      subMenus: [
        { label: 'Overview', path: '/nl_nl_test_set/agreed_spelling' },
        { label: 'Spelling out ', path: '/nl_nl_test_set#spelling-out' },
        { label: 'Proper names', path: '/nl_nl_test_set#interjection' },
        {
          label: 'Brand and Product',
          path: '/nl_nl_test_set#brand-and-product',
        },
        { label: 'Media title ', path: '/nl_nl_test_set#media-title' },
        {
          label: 'Multiple spellings ',
          path: '/nl_nl_test_set#multiple-spelling',
        },
      ],
    },
    {
      label: 'Diffiicult Utterances',
      path: '',
      subMenus: [
        { label: 'Overview', path: '/nl_nl_test_set/difficult_utterances' },
        {
          label: 'Skipping a prompt',
          path: '/nl_nl_test_set/difficult_utterances#skipping-a-prompt',
        },
        {
          label: 'Hesitations and trancations',
          path:
            '/nl_nl_test_set/difficult_utterances#hesitations-and-truncations',
        },
        {
          label: 'Background and foreground speech',
          path:
            '/nl_nl_test_set/difficult_utterances#background-and-foreground-speech',
        },
        {
          label: 'Foreign Language',
          path: '/nl_nl_test_set/difficult_utterances#foreign-language',
        },
        {
          label: 'Accents ',
          path: '/nl_nl_test_set/difficult_utterances#accents',
        },
      ],
    },
  ]
  return (
    <MasterPage menuItems={menuItems} appTitle="nl_nl_test_set">
      {children}
    </MasterPage>
  )
}

export default Wrapper
