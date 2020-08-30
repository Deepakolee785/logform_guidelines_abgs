import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Paper, Grid, Toolbar, Hidden } from '@material-ui/core'
import PageContentHeader from '../../../Components/common/PageContentHeader'
import RightContentNav from '../../../Components/layouts/RightContentNav'
import Wrapper from '../Wrapper'
import styles from '../css/styles.module.css'

const AgreedSpelling = () => {
  const classes = useStyles()

  const headingIds = [
    'spelling-out',
    'interjection',
    'brand-and-product',
    'media-title',
    'multiple-spelling',
  ]

  return (
    <Wrapper>
      <Grid container>
        <Grid sm={12} md={9} item>
          <Paper className={classes.content}>
            <Toolbar />
            {/*  */}
            <PageContentHeader currentPage="longform Burmese" />
            <div className="content text">
              <p className={'large-heading'}>Agreed spelling </p>
              <p className={'text'}>
                Spelling conventions for words where several options are
                thinkable, as well as proper names.{' '}
              </p>
              <div id="spelling-out">
                <p className={'heading'}>Spelling out </p>
                <p className={'text'}>
                  If a word is spelled or obvious pauses are made between
                  letters, spell it into letters as it is said (often done for
                  foreign names or businesses, for example). Use lowercase
                  letters for the spelled-out portion. This rule does not apply
                  to acronyms or initialisms, or to spelled-out web or email
                  addresses.{' '}
                </p>
                <p className={styles.block_652}>
                  <span className={styles.text_18}>Correct: </span>
                  <span className={styles.text_19}>သ ဝထ မရရစ မ </span>
                  <span className={styles.text_8}>Example audio: " </span>
                  <span className={styles.text_20}>သ ဝထ မရရစ မ </span>
                  <span className={styles.text_8}>" </span>
                </p>
                <p className={styles.block_319}>
                  <span className={styles.text_13}>Correct: </span>
                  <span className={styles.text_14}>က က ခ က ဂငယ ဃ က င </span>
                  <span className={styles.text_15}>
                    Explanation: spelled out the consonants{' '}
                  </span>
                </p>
                <p className={styles.block_653}>
                  <span className={styles.text_18}>Correct: CEO </span>
                  <span className={styles.text_8}>Example audio: " </span>
                  <span className={styles.text_20}>စ အ အ </span>
                  <span className={styles.text_8}>" </span>
                </p>
                <p className={styles.block_654}>
                  Explanation: Transcribe common acronyms{' '}
                </p>
                <p className={styles.block_655}>with Latin letters. </p>
                <p className={styles.block_656}>
                  <span className={styles.text_4}>Correct: VIP </span>
                  <span className={styles.text_5}>တ </span>
                </p>
                <p className={styles.block_221}>
                  <span className={styles.text_4}>Incorrect: </span>
                  <span className={styles.text_5}>ဗ အ င ပ တ </span>
                </p>
                <p className={styles.block_657}>
                  <span className={styles.text_6}>Example audio: " </span>
                  <span className={styles.text_27}>vip </span>
                  <span className={styles.text_7}>တ </span>
                  <span className={styles.text_6}>" </span>
                </p>
                <p className={styles.block_658}>
                  Explanation: When it is plural, add the{' '}
                </p>
                <p className={styles.block_659}>
                  plural-indicator as pronounced.{' '}
                </p>
              </div>
              <div id="interjection">
                <p className={'heading'}>Interjections </p>
                <p className={'text'}>
                  Transcribe words representing laughter or other non-speech
                  vocalizations with up to three syllables, but no more.{' '}
                </p>
                <p className={styles.block_662}>
                  <span className={styles.text_4}>Correct: </span>
                  <span className={styles.text_5}>ဟ ဟ ဟ ဟ </span>
                </p>
                <p className={styles.block_663}>
                  <span className={styles.text_4}>Correct: </span>
                  <span className={styles.text_5}>ဟ ဟ ဟ </span>
                </p>
                <p className={styles.block_664}>
                  <span className={styles.text_4}>Incorrect: </span>
                  <span className={styles.text_5}>ဟ ဟ ဟ ဟ ဟ </span>
                </p>
                <p className={styles.block_665}>
                  <span className={styles.text_6}>Example audio: " </span>
                  <span className={styles.text_7}>ဟ ဟ ဟ ဟ ဟ </span>
                  <span className={styles.text_6}>" </span>
                </p>
                <p className={styles.block_666}>
                  Explanation: Do not transcribe more than three{' '}
                </p>
                <p className={styles.block_223}>syllables. </p>
              </div>
              <div id="proper-name">
                <p className={'heading'}>Proper names </p>
                <p className={'text'}>
                  use official spelling and punctuation for proper names. Google
                  them and pay attention to the correct format. Official format
                  and spelling of a proper name may supersede the usual written
                  transcription conventions detailed in this document.{' '}
                </p>
                <p className={styles.block_669}>
                  If a personal name could have multiple spellings and context
                  does not help choose a spelling, use the spelling that yields
                  the most Google search hits when you search for the name
                  followed by the word "name" (without quotation marks) (e.g.
                  "Anna name").{' '}
                </p>
                <p className={styles.block_670}>
                  <span className={styles.text_4}>Correct: </span>
                  <span className={styles.text_5}>သ န လ င </span>
                </p>
                <p className={styles.block_671}>
                  <span className={styles.text_4}>Incorrect: </span>
                  <span className={styles.text_5}>သ ဏ လ င </span>
                </p>
                <p className={styles.block_672}>
                  <span className={styles.text_4}>Explanation: Although "</span>
                  <span className={styles.text_5}>သ န </span>
                  <span className={styles.text_4}>", "</span>
                  <span className={styles.text_5}>သ ဏ </span>
                  <span className={styles.text_4}>" and "</span>
                  <span className={styles.text_5}>သ မ </span>
                  <span className={styles.text_4}>" </span>
                </p>
                <p className={styles.block_673}>
                  <span className={styles.text_4}>
                    have the same pronunciation, "
                  </span>
                  <span className={styles.text_5}>သ န </span>
                  <span className={styles.text_4}>" is the most </span>
                </p>
                <p className={styles.block_674}>common spelling. </p>
                <p className={styles.block_675}>
                  <span className={styles.text_4}>Correct: </span>
                  <span className={styles.text_5}>ဦ က က လ </span>
                </p>
                <p className={styles.block_664}>
                  <span className={styles.text_4}>Incorrect: </span>
                  <span className={styles.text_5}>ဦ က က လ </span>
                </p>
                <p className={styles.block_676}>
                  <span className={styles.text_4}>Explanation: "</span>
                  <span className={styles.text_5}>ဦ က က လ </span>
                  <span className={styles.text_4}>" is the most common </span>
                </p>
                <p className={styles.block_677}>spelling. </p>
                <p className={styles.block_678}>
                  <span className={styles.text_4}>Correct: </span>
                  <span className={styles.text_5}>အဘအမည ဦ မင ဆ </span>
                  <span className={styles.text_4}>(</span>
                  <span className={styles.text_5}>ခ</span>
                  <span className={styles.text_4}>) </span>
                  <span className={styles.text_5}>ဦ သ က </span>
                </p>
                <p className={styles.block_679}>
                  <span className={styles.text_4}>Incorrect: </span>
                  <span className={styles.text_5}>အဘအမည ဦ မင ဆ </span>
                  <span className={styles.text_4}>( </span>
                  <span className={styles.text_5}>ခ </span>
                  <span className={styles.text_4}>) </span>
                  <span className={styles.text_5}>ဦ သ က </span>
                </p>
                <p className={styles.block_680}>
                  <span className={styles.text_6}>Example audio: " </span>
                  <span className={styles.text_7}>အဘအမည ဦ မင ဆ ခ ဦ သ က </span>
                </p>
                <p className={styles.block_681}>" </p>
                <p className={styles.block_682}>
                  <span className={styles.text_28}>
                    Correct: Sophia MacDonald{' '}
                  </span>
                  <span className={styles.text_29}>
                    Explanation: Search full names to see if they{' '}
                  </span>
                </p>
                <p className={styles.block_683}>
                  refer to a celebrity. If the full name does not{' '}
                </p>
                <p className={styles.block_684}>
                  belong to a celebrity, use the most common{' '}
                </p>
                <p className={styles.block_685}>
                  spelling for each part of the name (e.g. search{' '}
                </p>
                <p className={styles.block_686}>
                  "Sophia name" and "MacDonald name").{' '}
                </p>
                <p className={styles.block_687}>
                  Please follow the standard spelling when you transliterate
                  toBurmese. For names constituted of a first name and last
                  name, there shouldn't be a space between the first name and
                  the surname. Look them up to check their standard spelling.{' '}
                </p>
                <p className={styles.block_688}>
                  <span className={styles.text_13}>Correct: </span>
                  <span className={styles.text_14}>အဒ လ </span>
                  <span className={styles.text_15}>
                    Explanation: If the name is only one word (in{' '}
                  </span>
                </p>
                <p className={styles.block_370}>
                  this example: Adele), transliterate to Burmese.{' '}
                </p>
                <p className={styles.block_689}>
                  Please follow the standard spelling.{' '}
                </p>
                <p className={styles.block_690}>
                  <span className={styles.text_4}>Correct: </span>
                  <span className={styles.text_5}>အ န ဂ လ န ဂ လ </span>
                </p>
                <p className={styles.block_691}>
                  <span className={styles.text_4}>Incorrect: </span>
                  <span className={styles.text_5}>အ န ဂ လ န ဂ လ </span>
                </p>
                <p className={styles.block_692}>
                  <span className={styles.text_6}>Example audio: " </span>
                  <span className={styles.text_7}>အ န ဂ လ န ဂ လ </span>
                  <span className={styles.text_6}>" </span>
                </p>
                <p className={styles.block_693}>
                  Explanation: Some names constituted of a first{' '}
                </p>
                <p className={styles.block_637}>
                  name and last name are fully transliterated. In{' '}
                </p>
                <p className={styles.block_694}>
                  that case, there shouldn't be a space between{' '}
                </p>
                <p className={styles.block_381}>
                  the first name and the surname. Look them up{' '}
                </p>
                <p className={styles.block_695}>
                  to check their standard spelling.{' '}
                </p>
                <p className={styles.block_696}>
                  <span className={styles.text_4}>Correct: </span>
                  <span className={styles.text_5}>ဂ က က ခ န </span>
                </p>
                <p className={styles.block_697}>
                  <span className={styles.text_6}>Example audio: " </span>
                  <span className={styles.text_7}>ဂ က က ခ န </span>
                  <span className={styles.text_6}>" </span>
                </p>
                <p className={styles.block_698}>
                  <span className={styles.text_4}>Incorrect: </span>
                  <span className={styles.text_5}>ဂ က က ခ န </span>
                </p>
                <p className={styles.block_699}>
                  Explanation: Some names constituted of a first{' '}
                </p>
                <p className={styles.block_637}>
                  name and last name are fully transliterated. In{' '}
                </p>
                <p className={styles.block_700}>
                  that case, there shouldn't be a space between{' '}
                </p>
                <p className={styles.block_701}>
                  the first name and the surname. Look them up{' '}
                </p>
                <p className={styles.block_702}>
                  to check their standard spelling.{' '}
                </p>
                <p className={styles.block_703}>
                  <span className={styles.text_13}>Correct: </span>
                  <span className={styles.text_14}>က င ဝ </span>
                  <span className={styles.text_15}>
                    Explanation: Some names constituted of a first{' '}
                  </span>
                </p>
                <p className={styles.block_704}>
                  name and last name are fully transliterated. In{' '}
                </p>
                <p className={styles.block_705}>
                  that case, there shouldn't be a space between{' '}
                </p>
                <p className={styles.block_706}>
                  the first name and the surname. Look them up{' '}
                </p>
                <p className={styles.block_702}>
                  to check their standard spelling.{' '}
                </p>
                <p className={styles.block_703}>
                  <span className={styles.text_13}>Correct: </span>
                  <span className={styles.text_14}>လ မင ဟ </span>
                  <span className={styles.text_15}>
                    Explanation: Some names constituted of a first{' '}
                  </span>
                </p>
                <p className={styles.block_704}>
                  name and last name are fully transliterated. In{' '}
                </p>
                <p className={styles.block_705}>
                  that case, there shouldn't be a space between{' '}
                </p>
                <p className={styles.block_706}>
                  the first name and the surname. Look them up{' '}
                </p>
                <p className={styles.block_702}>
                  to check their standard spelling.{' '}
                </p>
                <p className={styles.block_707}>
                  If a speaker makes a small mistake in a proper name,
                  transcribe it anyway as long as the difference is minimal.
                  "Minimal differences" refers to adding or dropping articles,
                  possessives, and plurals.{' '}
                </p>
                <p className={styles.block_708}>
                  <span className={styles.text_4}>Correct: </span>
                  <span className={styles.text_5}>
                    ည မ လ က အခ စ က က က ယ တယ တ လ{' '}
                  </span>
                </p>
                <p className={styles.block_709}>
                  <span className={styles.text_4}>Incorrect: </span>
                  <span className={styles.text_5}>
                    ည မ လ က အခ စ က က က ယ သတ လ{' '}
                  </span>
                </p>
                <p className={styles.block_710}>
                  <span className={styles.text_6}>Example audio: " </span>
                  <span className={styles.text_7}>
                    ည မ လ က အခ စ က က က ယ တယ တ လ{' '}
                  </span>
                  <span className={styles.text_6}>" </span>
                </p>
                <p className={styles.block_682}>
                  <span className={styles.text_28}>
                    Correct: The Lord of the Ring{' '}
                  </span>
                  <span className={styles.text_29}>
                    Explanation: Actual name is "The Lord of the{' '}
                  </span>
                </p>
                <p className={styles.block_711}>Rings". </p>
                <p className={styles.block_712}>
                  <span className={styles.text_4}>Correct: </span>
                  <span className={styles.text_5}>သမ န အ မမ </span>
                </p>
                <p className={styles.block_713}>
                  <span className={styles.text_4}>Incorrect: </span>
                  <span className={styles.text_5}>သမ င အ မမ </span>
                </p>
                <p className={styles.block_714}>
                  <span className={styles.text_6}>Example audio: " </span>
                  <span className={styles.text_7}>သမ န အ မမ </span>
                  <span className={styles.text_6}>" </span>
                </p>
              </div>
              <div id="brand-and-product">
                <p className={'heading'}>Brand and product </p>
                <p className={'text'}>
                  Format proper names as they are most commonly formatted on the
                  entity's website (especially official documents), if
                  available, or the Wikipedia or IMDb page. In cases of
                  ambiguity, defer to their privacy policy. If no other sources,
                  use top Google hits.{' '}
                </p>
                <p className={styles.block_717}>
                  <span className={styles.text_4}>Correct: </span>
                  <span className={styles.text_5}>
                    အလ ပ က ပတ မ အက ဖမ မ ပ ။{' '}
                  </span>
                </p>
                <p className={styles.block_718}>
                  <span className={styles.text_4}>Correct: </span>
                  <span className={styles.text_5}>က လ တ က </span>
                  <span className={styles.text_4}>Xbox </span>
                  <span className={styles.text_5}>လ ခ င ၊ </span>
                  <span className={styles.text_4}>Wii </span>
                  <span className={styles.text_5}>လ ခ င တယ ။ </span>
                </p>
                <p className={styles.block_719}>
                  <span className={styles.text_4}>Correct: </span>
                  <span className={styles.text_5}>ယ က </span>
                </p>
                <p className={styles.block_720}>
                  <span className={styles.text_4}>Correct: </span>
                  <span className={styles.text_5}>ဂ သ န </span>
                </p>
                <p className={styles.block_721}>
                  <span className={styles.text_4}>Incorrect: </span>
                  <span className={styles.text_5}>ခ သ န </span>
                </p>
                <p className={styles.block_722}>
                  <span className={styles.text_13}>Correct: </span>
                  <span className={styles.text_14}>မထသ </span>
                  <span className={styles.text_15}>
                    Explanation: Officially "
                  </span>
                  <span className={styles.text_16}>မထသ</span>
                  <span className={styles.text_15}>" and is based on </span>
                </p>
                <p className={styles.block_723}>an acronym. </p>
                <p className={styles.block_724}>
                  <span className={styles.text_13}>Correct: </span>
                  <span className={styles.text_14}>အ င တ ရပ က က </span>
                  <span className={styles.text_15}>
                    Explanation: Comes from english acronym "IT"{' '}
                  </span>
                </p>
                <p className={styles.block_725}>
                  <span className={styles.text_4}>followed by "</span>
                  <span className={styles.text_5}>ရပ က က </span>
                  <span className={styles.text_4}>
                    ". Usually, English acronyms{' '}
                  </span>
                </p>
                <p className={styles.block_726}>
                  are transliterated according to Burmese{' '}
                </p>
                <p className={styles.block_727}>
                  pronunciation. The whole product name is{' '}
                </p>
                <p className={styles.block_728}>
                  <span className={styles.text_4}>"</span>
                  <span className={styles.text_5}>အ င တ ရပ က က </span>
                  <span className={styles.text_4}>". </span>
                </p>
                <p className={styles.block_729}>Correct: LEGO </p>
                <p className={styles.block_730}>Incorrect: Lego </p>
                <p className={styles.block_731}>Correct: KFC </p>
                <p className={styles.block_732}>
                  <span className={styles.text_4}>Incorrect: </span>
                  <span className={styles.text_5}>ကအက ဖ စ </span>
                </p>
                <p className={styles.block_733}>
                  Explanation: Do not transliterate well known{' '}
                </p>
                <p className={styles.block_734}>
                  names based on acronyms like KFC, DHL,{' '}
                </p>
                <p className={styles.block_735}>
                  ACCA. Look them up to check whether they{' '}
                </p>
                <p className={styles.block_736}>
                  should be transliterated or not.{' '}
                </p>
                <p className={styles.block_737}>
                  <span className={styles.text_4}>Correct: United Vision </span>
                  <span className={styles.text_5}>မ က မ န ဆ င </span>
                </p>
                <p className={styles.block_738}>
                  The phrase "Ok Google", as well as possible derivatives such
                  as "Ok Google Now" and "Ok Glass", require their own
                  particular spelling of "okay". This spelling is unique to
                  these cases.{' '}
                </p>
                <p className={styles.block_739}>Correct: Ok Google </p>
                <p className={styles.block_740}>
                  <span className={styles.text_4}>Correct: Ok Google </span>
                  <span className={styles.text_5}>ဖ င ပ </span>
                </p>
                <p className={styles.block_741}>
                  <span className={styles.text_4}>Correct: Ok Google, </span>
                  <span className={styles.text_5}>ရ၊ က ဖ ဆ င ဘယ န မ လ ။ </span>
                </p>
                <p className={styles.block_742}>
                  <span className={styles.text_4}>Correct: Ok Google, </span>
                  <span className={styles.text_5}>အ ခ က ကင </span>
                </p>
                <p className={styles.block_743}>
                  <span className={styles.text_4}>Correct: </span>
                  <span className={styles.text_5}>အ က </span>
                </p>
                <p className={styles.block_744}>
                  <span className={styles.text_4}>Correct: </span>
                  <span className={styles.text_5}>အ က၊ ဆက လ ပ ။ </span>
                </p>
                <p className={styles.block_745}>
                  <span className={styles.text_4}>Correct: </span>
                  <span className={styles.text_5}>
                    အ က၊ န လည ပ ။ ဆက လ ပ ကစ ။{' '}
                  </span>
                </p>
              </div>
              <div id="media-title">
                <p className={'heading'}>Media title </p>
                <p className={'text'}>
                  Refer to the Google Play Store for official spellings of media
                  titles. For film/television, IMDb is also available. If an
                  utterance is ambiguous between a media title and a sentence or
                  web search, use your judgment for which is more likely; if
                  truly unclear, default to media title.{' '}
                </p>
                <p className={styles.block_748}>
                  Do not use quotation marks for media titles.{' '}
                </p>
                <p className={styles.block_749}>
                  <span className={styles.text_4}>Correct: </span>
                  <span className={styles.text_5}>
                    သ န ဖ မင ရ အ ရ က နဝန ထ က သည ပမ{' '}
                  </span>
                </p>
                <p className={styles.block_750}>စ အ ပ </p>
                <p className={styles.block_751}>
                  <span className={styles.text_4}>Correct: </span>
                  <span className={styles.text_5}>
                    က န ရ က က ခ စ သ ခ င ဖ င ပ ။{' '}
                  </span>
                </p>
                <p className={styles.block_752}>
                  <span className={styles.text_4}>Correct: </span>
                  <span className={styles.text_5}>ပ လက ရင ခ င ကည မယ ။ </span>
                </p>
                <p className={styles.block_753}>
                  Sometimes, media titles can include numbers or digits. Please
                  transcribe as full words.{' '}
                </p>
                <p className={styles.block_754}>
                  <span className={styles.text_4}>Correct: </span>
                  <span className={styles.text_5}>သ တ ခ နစ တန </span>
                </p>
                <p className={styles.block_755}>
                  <span className={styles.text_4}>Incorrect: </span>
                  <span className={styles.text_5}>သ တ ၇ တန </span>
                </p>
                <p className={styles.block_756}>
                  <span className={styles.text_6}>Example audio: " </span>
                  <span className={styles.text_7}>သ တ ခ နစ တန </span>
                  <span className={styles.text_6}>" </span>
                </p>
                <p className={styles.block_757}>
                  Explanation: For media titles, the whole title{' '}
                </p>
                <p className={styles.block_758}>
                  should be transcribed including numbers.{' '}
                </p>
                <p className={styles.block_759}>
                  <span className={styles.text_4}>Correct: </span>
                  <span className={styles.text_5}>ခ က ဒသမ သ ညတစ စ အ ပ </span>
                </p>
                <p className={styles.block_760}>
                  <span className={styles.text_4}>Incorrect: </span>
                  <span className={styles.text_5}>၆</span>
                  <span className={styles.text_4}>.</span>
                  <span className={styles.text_5}>၀၁ စ အ ပ </span>
                </p>
                <p className={styles.block_761}>
                  <span className={styles.text_6}>Example audio: " </span>
                  <span className={styles.text_7}>ခ က ဒသမ သ ညတစ စ အ ပ </span>
                  <span className={styles.text_6}>" </span>
                </p>
                <p className={styles.block_757}>
                  Explanation: For media titles, the whole title{' '}
                </p>
                <p className={styles.block_758}>
                  should be transcribed including numbers.{' '}
                </p>
              </div>
              <div id="multiple-spelling">
                <p className={'heading'}>Multiple spellings </p>
                <p className={'text'}>
                  When multiple spellings are attested, use the first spelling
                  used in the reference dictionary for your language. If there
                  is no entry, Google the word and use the form with the most
                  hits.{' '}
                </p>
                <p className={styles.block_764}>
                  <span className={styles.text_4}>Correct: </span>
                  <span className={styles.text_5}>ဖည ဖည </span>
                </p>
                <p className={styles.block_765}>
                  <span className={styles.text_4}>Incorrect: </span>
                  <span className={styles.text_5}>ဖ ဖ </span>
                </p>
                <p className={styles.block_766}>
                  <span className={styles.text_4}>Explanation: " </span>
                  <span className={styles.text_5}>ဖည ဖည </span>
                  <span className={styles.text_4}>" is preferred by </span>
                </p>
                <p className={styles.block_767}>
                  Myanmar Language Commission (MLC){' '}
                </p>
                <p className={styles.block_768}>Dictionary. </p>
                <p className={styles.block_769}>
                  <span className={styles.text_18}>Correct: </span>
                  <span className={styles.text_19}>သ ခည ဥ </span>
                  <span className={styles.text_8}>Example audio: " </span>
                  <span className={styles.text_20}>သ ဂ ဥ </span>
                  <span className={styles.text_30}>or </span>
                  <span className={styles.text_20}>သ ဂ ဥ </span>
                  <span className={styles.text_8}>" </span>
                </p>
                <p className={styles.block_770}>
                  <span className={styles.text_4}>Incorrect: </span>
                  <span className={styles.text_5}>သ ခ ည ဥ </span>
                  <span className={styles.text_4}>or </span>
                  <span className={styles.text_5}>သ ခဥ </span>
                  <span className={styles.text_4}>
                    Explanation: Although it is spoken as "{' '}
                  </span>
                  <span className={styles.text_5}>သ ဂ ဥ</span>
                  <span className={styles.text_4}>" </span>
                </p>
                <p className={styles.block_771}>
                  <span className={styles.text_4}>or " </span>
                  <span className={styles.text_5}>သ ဂ ဥ</span>
                  <span className={styles.text_4}>
                    ", please use the standard spelling{' '}
                  </span>
                </p>
                <p className={styles.block_772}>
                  <span className={styles.text_4}>" </span>
                  <span className={styles.text_5}>သ ခည ဥ</span>
                  <span className={styles.text_4}>" by MLC Dictionary. </span>
                </p>
                <p className={styles.block_773}>
                  <span className={styles.text_4}>Correct: </span>
                  <span className={styles.text_5}>မင အ </span>
                </p>
                <p className={styles.block_774}>
                  <span className={styles.text_4}>Incorrect: </span>
                  <span className={styles.text_5}>မ င အ </span>
                </p>
                <p className={styles.block_775}>
                  <span className={styles.text_6}>Example audio: " </span>
                  <span className={styles.text_7}>မ င အ </span>
                  <span className={styles.text_6}>" </span>
                </p>
                <p className={styles.block_776}>
                  Explanation: Certain words are pronounced{' '}
                </p>
                <p className={styles.block_777}>
                  differently than their spelling, such as the words{' '}
                </p>
                <p className={styles.block_778}>
                  <span className={styles.text_4}>" </span>
                  <span className={styles.text_5}>မတ </span>
                  <span className={styles.text_4}>", "</span>
                  <span className={styles.text_5}>မင အ </span>
                  <span className={styles.text_4}>
                    ". Please use the standard{' '}
                  </span>
                </p>
                <p className={styles.block_779}>spelling by MLC Dictionary. </p>
                <p className={styles.block_780}>
                  Transcribe slang and colloquialisms as spoken according to the
                  appendix on this page. Do not alter non-standard speech that
                  the speaker probably wouldn't want corrected.{' '}
                </p>
                <p className={styles.block_781}>
                  <span className={styles.text_4}>Correct: </span>
                  <span className={styles.text_5}>မသ ဘ </span>
                </p>
                <p className={styles.block_782}>
                  <span className={styles.text_4}>Incorrect: </span>
                  <span className={styles.text_5}>မသ ဘ </span>
                </p>
                <p className={styles.block_783}>
                  <span className={styles.text_6}>Example audio: " </span>
                  <span className={styles.text_7}>မသ ဘ </span>
                  <span className={styles.text_6}>" </span>
                </p>
                <p className={styles.block_784}>
                  <span className={styles.text_4}>Correct: </span>
                  <span className={styles.text_5}>ခဏ လ က </span>
                </p>
                <p className={styles.block_785}>
                  <span className={styles.text_4}>Incorrect: </span>
                  <span className={styles.text_5}>ခဏ လ က က </span>
                </p>
                <p className={styles.block_786}>
                  <span className={styles.text_6}>Example audio: " </span>
                  <span className={styles.text_7}>ခဏ လ က </span>
                  <span className={styles.text_6}>" </span>
                </p>
                <p className={styles.block_787}>
                  <span className={styles.text_4}>Correct: </span>
                  <span className={styles.text_5}>က ဖ သ က ဦ မယ </span>
                </p>
                <p className={styles.block_788}>
                  <span className={styles.text_4}>Incorrect: </span>
                  <span className={styles.text_5}>က ဖ သ က ဦ မယ </span>
                </p>
                <p className={styles.block_789}>
                  <span className={styles.text_6}>Example audio: " </span>
                  <span className={styles.text_7}>က ဖ သ က ဦ မယ </span>
                  <span className={styles.text_6}>" </span>
                </p>
                <p className={styles.block_790}>
                  Write commonly accepted contractions as usual. Transcribe
                  contractions when you hear them spoken.{' '}
                </p>
                <p className={styles.block_791}>
                  <span className={styles.text_4}>Correct: </span>
                  <span className={styles.text_5}>ပန လ မယ မ တ လ </span>
                </p>
                <p className={styles.block_788}>
                  <span className={styles.text_4}>Incorrect: </span>
                  <span className={styles.text_5}>ပန လ မယ မဟ တ လ </span>
                </p>
                <p className={styles.block_792}>
                  <span className={styles.text_6}>Example audio: " </span>
                  <span className={styles.text_7}>ပန လ မယ မ တ လ </span>
                  <span className={styles.text_6}>" </span>
                </p>
                <p className={styles.block_793}>
                  <span className={styles.text_4}>
                    Explanation: The speaker said "
                  </span>
                  <span className={styles.text_5}>မ တ လ </span>
                  <span className={styles.text_4}>" which </span>
                </p>
                <p className={styles.block_794}>
                  <span className={styles.text_4}>actually means "</span>
                  <span className={styles.text_5}>မဟ တ လ </span>
                  <span className={styles.text_4}>", please write the </span>
                </p>
                <p className={styles.block_795}>utterance as pronounced. </p>
                <p className={styles.block_796}>
                  <span className={styles.text_17}>Example </span>
                  <span className={styles.text_13}>Correct: </span>
                  <span className={styles.text_14}>ဟတ က လ </span>
                </p>
                <p className={styles.block_797}>
                  <span className={styles.text_6}>audio: " </span>
                  <span className={styles.text_7}>ဟတ က လ </span>
                  <span className={styles.text_6}>" </span>
                </p>
                <p className={styles.block_671}>
                  <span className={styles.text_4}>Incorrect: </span>
                  <span className={styles.text_5}>ဟ တ က လ </span>
                </p>
                <p className={styles.block_798}>
                  <span className={styles.text_4}>
                    Explanation: The speaker said "
                  </span>
                  <span className={styles.text_5}>ဟတ က လ </span>
                  <span className={styles.text_4}>" </span>
                </p>
                <p className={styles.block_799}>
                  <span className={styles.text_4}>which actually means "</span>
                  <span className={styles.text_5}>ဟ တ က လ </span>
                  <span className={styles.text_4}>", please write </span>
                </p>
                <p className={styles.block_800}>
                  the utterance as pronounced.{' '}
                </p>
                <p className={styles.block_801}>
                  <span className={styles.text_4}>
                    Use standard spelling for reductions that commonly occur in
                    normal running speech, like "
                  </span>
                  <span className={styles.text_5}>သ တ မလ </span>
                  <span className={styles.text_4}>" and "</span>
                  <span className={styles.text_5}>စ မလ </span>
                  <span className={styles.text_4}>", for "</span>
                  <span className={styles.text_5}>သ တ မ </span>
                  <span className={styles.text_4}>" and "</span>
                  <span className={styles.text_5}>စ မ </span>
                  <span className={styles.text_4}>" respectively. </span>
                </p>
                <p className={styles.block_802}>
                  <span className={styles.text_18}>Correct: </span>
                  <span className={styles.text_19}>ဘယ သ တ န </span>
                  <span className={styles.text_8}>Example audio: " </span>
                  <span className={styles.text_20}>ဘသ တ န </span>
                  <span className={styles.text_8}>" </span>
                </p>
                <p className={styles.block_803}>
                  <span className={styles.text_18}>Correct: </span>
                  <span className={styles.text_19}>သ မ ပ </span>
                  <span className={styles.text_8}>Example audio: " </span>
                  <span className={styles.text_20}>သ မ ဘ </span>
                  <span className={styles.text_8}>" </span>
                </p>
                <p className={styles.block_804}>
                  <span className={styles.text_18}>Correct: </span>
                  <span className={styles.text_19}>ဟ တ ရ လ </span>
                  <span className={styles.text_8}>Example audio: " </span>
                  <span className={styles.text_20}>ဟ တ က လ </span>
                  <span className={styles.text_8}>" </span>
                </p>
                <p className={styles.block_805}>
                  <span className={styles.text_18}>Correct: </span>
                  <span className={styles.text_19}>သ ရ သ လ </span>
                  <span className={styles.text_8}>Example audio: " </span>
                  <span className={styles.text_20}>သ က သ လ </span>
                  <span className={styles.text_8}>" </span>
                </p>
                <p className={styles.block_806}>
                  If you hear a word that does not sound like a standard word of
                  your language, but it is obviously based on real words,
                  suffixes, or prefixes, transcribe as is.{' '}
                </p>
                <p className={styles.block_807}>
                  <span className={styles.text_13}>Correct: </span>
                  <span className={styles.text_14}>ဥ ရ ဩ </span>
                  <span className={styles.text_15}>
                    Explanation: Speaker meant "
                  </span>
                  <span className={styles.text_16}>ဥဩ</span>
                  <span className={styles.text_15}>" but added </span>
                </p>
                <p className={styles.block_808}>
                  <span className={styles.text_4}>
                    one extra middle-infix "{' '}
                  </span>
                  <span className={styles.text_5}>ရ </span>
                  <span className={styles.text_4}>". </span>
                </p>
                <p className={styles.block_724}>
                  <span className={styles.text_13}>Correct: </span>
                  <span className={styles.text_14}>ပ ဈ က ရခ ရမ န က င တယ </span>
                  <span className={styles.text_15}>
                    Explanation: Unsure whether speaker intended{' '}
                  </span>
                </p>
                <p className={styles.block_809}>
                  <span className={styles.text_4}>to say " </span>
                  <span className={styles.text_5}>ရခ မ န </span>
                  <span className={styles.text_4}>" or " </span>
                  <span className={styles.text_5}>ရမ န </span>
                  <span className={styles.text_4}>
                    ", but clearly articulated{' '}
                  </span>
                </p>
                <p className={styles.block_655}>and easy to spell. </p>
                <p className={styles.block_810}>
                  <span className={styles.text_11}>
                    Transcribe onomatopoeia when clearly spoken. Otherwise, use
                    the Unintelligible label as instructed in: Longform generic
                    rules &gt; Unintelligible or foreign or singing.{' '}
                  </span>
                </p>
              </div>
            </div>
          </Paper>
        </Grid>
        <Hidden smDown>
          <Grid sm={3} item className={classes.rightNav}>
            <RightContentNav title="Agreed Spelling" headingIds={headingIds} />
          </Grid>
        </Hidden>
      </Grid>
    </Wrapper>
  )
}

export default AgreedSpelling

const useStyles = makeStyles((theme) => ({
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    margin: '1rem',
  },
  rightNav: {
    position: 'fixed',
    top: '5rem',
    right: '2rem',
    [theme.breakpoints.down('md')]: {
      right: '0.4rem',
      fontSize: '0.75rem',
    },
  },
}))
