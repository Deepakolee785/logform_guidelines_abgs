import React from 'react'
import MasterPage from '../../Components/common/MasterPage'

const Wrapper = ({ children }) => {
  const menuItems = [
    {
      label: 'Guiding Principle',
      path: '/uk_ua_test_set/guiding_principles',
    },
    {
      label: 'Long form generic rules',
      path: '',
      subMenus: [
        { label: 'Overview', path: '/uk_ua_test_set/longform_generic_rules' },
        {
          label: 'Unintelligible or foreign or singing',
          path:
            '/uk_ua_test_set/longform_generic_rules#unintelligible-or-foreign-or-singing',
        },
        {
          label: 'Segmentation',
          path: '/uk_ua_test_set/longform_generic_rules#segmentation',
        },
        {
          label: 'Speaker labelling',
          path: '/uk_ua_test_set/longform_generic_rules#speaker-labeling',
        },
        {
          label: 'Audio labels',
          path: '/uk_ua_test_set/longform_generic_rules#audio-labels',
        },
        { label: 'Pii', path: '/uk_ua_test_set/longform_generic_rules#pii' },
      ],
    },
    {
      label: 'Transcription Qualtiy',
      path: '',
      subMenus: [
        { label: 'Overview', path: '/uk_ua_test_set/transcription_quality' },
        { label: 'Typo', path: '/uk_ua_test_set/transcription_quality#typo' },
        {
          label: 'Context error',
          path: '/uk_ua_test_set/transcription_quality#context-error',
        },
        {
          label: 'Add or missing word',
          path: '/uk_ua_test_set/transcription_quality#adding-missing-words',
        },
        {
          label: 'Subsitution',
          path: '/uk_ua_test_set/transcription_quality#substitution',
        },
        {
          label: 'Spacing',
          path: '/uk_ua_test_set/transcription_quality#spacing',
        },
      ],
    },
    {
      label: 'Punctuation',
      path: '',
      subMenus: [
        { label: 'Overview', path: '/uk_ua_test_set/punctuation' },
        {
          label: 'Fragment versus sentence',
          path: '/uk_ua_test_set/punctuation#fragment-vrsus-sentences',
        },
        { label: 'Commas', path: '/uk_ua_test_set/punctuation#commas' },
        {
          label: 'Innotation marks',
          path: '/uk_ua_test_set/punctuation#intonation-marks',
        },
        {
          label: 'Colon and cotation',
          path: '/uk_ua_test_set/punctuation#colon-and-quotation',
        },
        {
          label: 'Other symbols ',
          path: '/uk_ua_test_set/punctuation#other-symbols',
        },
        {
          label: 'Spoken punctuation',
          path: '/uk_ua_test_set/punctuation#spoken-punctuation',
        },
      ],
    },
    {
      label: 'Format',
      path: '',
      subMenus: [
        { label: 'Overview', path: '/uk_ua_test_set/format' },
        { label: 'Number', path: '/uk_ua_test_set/format#number' },
        {
          label: 'Date and time',
          path: '/uk_ua_test_set/format#currency-and-unit',
        },
        { label: 'Commas', path: '/uk_ua_test_set/format#date-and-time' },
        { label: 'Address', path: '/uk_ua_test_set/format#address' },
        { label: 'Web', path: '/uk_ua_test_set/format#web' },
        { label: 'Abbreviation', path: '/uk_ua_test_set/format#abbreviation' },
      ],
    },
    {
      label: 'Agreed Spelling',
      path: '',
      subMenus: [
        { label: 'Overview', path: '/uk_ua_test_set/agreed_spelling' },
        {
          label: 'Spelling out ',
          path: '/uk_ua_test_set/agreed_spelling#spelling-out',
        },
        {
          label: 'Proper names',
          path: '/uk_ua_test_set/agreed_spelling#interjection',
        },
        {
          label: 'Brand and Product',
          path: '/uk_ua_test_set/agreed_spelling#brand-and-product',
        },
        {
          label: 'Media title ',
          path: '/uk_ua_test_set/agreed_spelling#media-title',
        },
        {
          label: 'Multiple spellings ',
          path: '/uk_ua_test_set/agreed_spelling#multiple-spelling',
        },
      ],
    },
    {
      label: 'Diffiicult Utterances',
      path: '',
      subMenus: [
        { label: 'Overview', path: '/uk_ua_test_set/difficult_utterances' },
        {
          label: 'Skipping a prompt',
          path: '/uk_ua_test_set/difficult_utterances#skipping-a-prompt',
        },
        {
          label: 'Hesitations and trancations',
          path:
            '/uk_ua_test_set/difficult_utterances#hesitations-and-truncations',
        },
        {
          label: 'Background and foreground speech',
          path:
            '/uk_ua_test_set/difficult_utterances#background-and-foreground-speech',
        },
        {
          label: 'Foreign Language',
          path: '/uk_ua_test_set/difficult_utterances#foreign-language',
        },
        {
          label: 'Accents ',
          path: '/uk_ua_test_set/difficult_utterances#accents',
        },
      ],
    },
  ]
  return (
    <MasterPage menuItems={menuItems} appTitle="uk_ua_test_set">
      {children}
    </MasterPage>
  )
}

export default Wrapper
