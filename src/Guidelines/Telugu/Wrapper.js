import React from 'react'
import MasterPage from '../../Components/common/MasterPage'

const Wrapper = ({ children }) => {
  const menuItems = [
    {
      label: 'Guiding Principle',
      path: '/telugu/guiding_principles',
    },
    {
      label: 'Long form generic rules',
      path: '',
      subMenus: [
        { label: 'Overview', path: '/telugu/longform_generic_rules' },
        {
          label: 'Unintelligible or foreign or singing',
          path:
            '/telugu/longform_generic_rules#unintelligible-or-foreign-or-singing',
        },
        {
          label: 'Segmentation',
          path: '/telugu/longform_generic_rules#segmentation',
        },
        {
          label: 'Speaker labelling',
          path: '/telugu/longform_generic_rules#speaker-labeling',
        },
        {
          label: 'Audio labels',
          path: '/telugu/longform_generic_rules#audio-labels',
        },
        { label: 'Pii', path: '/telugu/longform_generic_rules#pii' },
      ],
    },
    {
      label: 'Transcription Qualtiy',
      path: '',
      subMenus: [
        { label: 'Overview', path: '/telugu/transcription_quality' },
        { label: 'Typo', path: '/telugu/transcription_quality#typo' },
        // { label: 'Context error', path: '#context-error' },
        // { label: 'Add or missing word', path: '#adding-missing-words' },
        // { label: 'Subsitution', path: '#substitution' },
        // { label: 'Spacing', path: '#spacing' },
      ],
    },
    {
      label: 'Punctuation',
      path: '',
      subMenus: [
        { label: 'Overview', path: '/telugu/punctuation' },
        {
          label: 'Fragment versus sentence',
          path: '/telugu/punctuation#fragment-vrsus-sentences',
        },
        { label: 'Commas', path: '/telugu/punctuation#commas' },
        {
          label: 'Innotation marks',
          path: '/telugu/punctuation#intonation-marks',
        },
        {
          label: 'Colon and cotation',
          path: '/telugu/punctuation#colon-and-quotation',
        },
        { label: 'Other symbols ', path: '/telugu/punctuation#other-symbols' },
        {
          label: 'Spoken punctuation',
          path: '/telugu/punctuation#spoken-punctuation',
        },
      ],
    },
    {
      label: 'Format',
      path: '',
      subMenus: [
        { label: 'Overview', path: '/telugu/format' },
        { label: 'Number', path: '/telugu/format#number' },
        { label: 'Date and time', path: '/telugu/format#currency-and-unit' },
        { label: 'Commas', path: '/telugu/format#date-and-time' },
        { label: 'Address', path: '/telugu/format#address' },
        { label: 'Web', path: '/telugu/format#web' },
        { label: 'Abbreviation', path: '/telugu/format#abbreviation' },
      ],
    },
    {
      label: 'Agreed Spelling',
      path: '',
      subMenus: [
        { label: 'Overview', path: '/telugu/agreed_spelling' },
        {
          label: 'Spelling out ',
          path: '/telugu/agreed_spelling#spelling-out',
        },
        { label: 'Proper names', path: '/telugu/agreed_spelling#interjection' },
        {
          label: 'Brand and Product',
          path: '/telugu/agreed_spelling#brand-and-product',
        },
        { label: 'Media title ', path: '/telugu/agreed_spelling#media-title' },
        {
          label: 'Multiple spellings ',
          path: '/telugu/agreed_spelling#multiple-spelling',
        },
      ],
    },
    {
      label: 'Diffiicult Utterances',
      path: '',
      subMenus: [
        { label: 'Overview', path: '/telugu/difficult_utterances' },
        {
          label: 'Skipping a prompt',
          path: '/telugu/difficult_utterances#skipping-a-prompt',
        },
        {
          label: 'Hesitations and trancations',
          path: '/telugu/difficult_utterances#hesitations-and-truncations',
        },
        {
          label: 'Background and foreground speech',
          path: '/telugu/difficult_utterances#background-and-foreground-speech',
        },
        {
          label: 'Foreign Language',
          path: '/telugu/difficult_utterances#foreign-language',
        },
        {
          label: 'Accents ',
          path: '/telugu/difficult_utterances#accents',
        },
      ],
    },
  ]
  return (
    <MasterPage menuItems={menuItems} appTitle="telugu">
      {children}
    </MasterPage>
  )
}

export default Wrapper
