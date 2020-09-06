import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Paper, Grid, Toolbar, Hidden } from '@material-ui/core'
import PageContentHeader from '../../../Components/common/PageContentHeader'
import RightContentNav from '../../../Components/layouts/RightContentNav'
import Wrapper from '../Wrapper'
import styles from '../css/styles.module.css'

const TranscriptionQuality = () => {
  const classes = useStyles()

  const headingIds = [
    'typo',
    'context-error',
    'adding-missing-words',
    'substitution',
    'spacing',
  ]

  return (
    <Wrapper>
      <Grid container>
        <Grid sm={12} md={9} item>
          <Paper className={classes.content}>
            <Toolbar />
            {/*  */}
            <PageContentHeader currentPage="longform Thai" />
            <div className="content text">
              {' '}
              <p className={'large-heading'}>Transcription quality</p>
              <div id="typo">
                <p className={'heading'}>Typo</p>
                <p className={'text'}>
                  A typo results in the unintentional creation of a non-word.
                </p>
                <p className={'text'}>
                  Avoid making any typographical errors. Carefully check your
                  work before marking items as "complete".
                </p>
                <p className={styles.block_392}>
                  <span className={styles.text_4}>C</span>
                  <span className={styles.text_5}>ORRECT</span>
                  <span className={styles.text_6}>: เพชรบบรร </span>
                </p>
                <p className={styles.block_393}>
                  <span className={styles.text_4}>I</span>
                  <span className={styles.text_5}>NCORRECT</span>
                  <span className={styles.text_6}>: เพขรบบรร </span>
                </p>
                <p className={styles.block_394}>
                  <span className={styles.text_4}>C</span>
                  <span className={styles.text_5}>ORRECT</span>
                  <span className={styles.text_6}>: จรรนนนทท มะโนแจจม </span>
                </p>
                <p className={styles.block_395}>
                  <span className={styles.text_4}>I</span>
                  <span className={styles.text_5}>NCORRECT</span>
                  <span className={styles.text_6}>: จรระนนนทท มโนแจจม </span>
                </p>
                <p className={styles.block_396}>
                  The key sequence or order of typing is also important when
                  typing Thai. However, there are issues displaying some tone
                  marks on Mac OS. This is expected. Please ignore.
                </p>
                <p className={styles.block_397}>
                  <span className={styles.text_8}>C</span>
                  <span className={styles.text_9}>ORRECT</span>
                  <span className={styles.text_10}>: ธบท </span>
                  <span className={styles.text_11}>E</span>
                  <span className={styles.text_12}>XAMPLE AUDIO</span>
                  <span className={styles.text_11}>: " </span>
                  <span className={styles.text_13}>as in </span>
                  <span className={styles.text_14}>กาฬสสนธบท </span>
                  <span className={styles.text_11}>" </span>
                </p>
                <p className={styles.block_398}>
                  <span className={styles.text_4}>E</span>
                  <span className={styles.text_5}>XPLANATION</span>
                  <span className={styles.text_6}>
                    : Type upper/lower vowels ( ) before tone mark ( ) or
                    Thanthakhat ( ). e.g. ธ &gt; &gt;
                  </span>
                </p>
                <p className={styles.block_399}>
                  <span className={styles.text_8}>C</span>
                  <span className={styles.text_9}>ORRECT</span>
                  <span className={styles.text_10}>: สส น </span>
                  <span className={styles.text_11}>E</span>
                  <span className={styles.text_12}>XAMPLE AUDIO</span>
                  <span className={styles.text_11}>: " </span>
                  <span className={styles.text_13}>as in </span>
                  <span className={styles.text_14}>สส น </span>
                  <span className={styles.text_11}>" </span>
                </p>
                <p className={styles.block_400}>
                  <span className={styles.text_4}>E</span>
                  <span className={styles.text_5}>XPLANATION</span>
                  <span className={styles.text_6}>
                    : Type upper/lower vowels ( ) before tone mark ( ) or
                    Thanthakhat ( ). e.g. ส &gt; &gt; &gt; น
                  </span>
                </p>
                <p className={styles.block_401}>
                  <span className={styles.text_8}>C</span>
                  <span className={styles.text_9}>ORRECT</span>
                  <span className={styles.text_10}>: นน า </span>
                  <span className={styles.text_11}>E</span>
                  <span className={styles.text_12}>XAMPLE AUDIO</span>
                  <span className={styles.text_11}>: " </span>
                  <span className={styles.text_13}>as in </span>
                  <span className={styles.text_14}>นน า </span>
                  <span className={styles.text_11}>" </span>
                </p>
                <p className={styles.block_402}>
                  <span className={styles.text_4}>E</span>
                  <span className={styles.text_5}>XPLANATION</span>
                  <span className={styles.text_6}>
                    : Type tone mark before Sara Am ( าน{' '}
                  </span>
                </p>
                <p className={styles.block_403}>
                  <span className={styles.text_4}>C</span>
                  <span className={styles.text_5}>ORRECT</span>
                  <span className={styles.text_6}>: ฤๅษร / ฦๅชา </span>
                </p>
                <p className={styles.block_404}>
                  <span className={styles.text_4}>I</span>
                  <span className={styles.text_5}>NCORRECT</span>
                  <span className={styles.text_6}>: ฤ าษร / ฦ าชา </span>
                </p>
                <p className={styles.block_405}>
                  <span className={styles.text_4}>E</span>
                  <span className={styles.text_5}>XPLANATION</span>
                  <span className={styles.text_6}>
                    : Use Lakkhangyao (ๅ) instead of Sara Aa ( ฤ/ฦ.
                  </span>
                </p>
                <p className={styles.block_406}>
                  Use the proper capitalization for standard words that require
                  it.
                </p>
                <p className={styles.block_407}>
                  <span className={styles.text_2}>C</span>
                  <span className={styles.text_3}>ORRECT</span>
                  <span className={styles.text_2}>: She is Australian. </span>
                </p>
                <p className={styles.block_408}>
                  <span className={styles.text_2}>I</span>
                  <span className={styles.text_3}>NCORRECT</span>
                  <span className={styles.text_2}>: She is australian. </span>
                </p>
                <p className={styles.block_409}>
                  <span className={styles.text_2}>C</span>
                  <span className={styles.text_3}>ORRECT</span>
                  <span className={styles.text_2}>: Navigate home. </span>
                </p>
                <p className={styles.block_410}>
                  <span className={styles.text_2}>I</span>
                  <span className={styles.text_3}>NCORRECT</span>
                  <span className={styles.text_2}>: Navigate Home. </span>
                </p>
                <p className={styles.block_411}>
                  Use the standard spelling as Royal Institute would do. If you
                  are unsure, please DO research. If not found, you can also
                  check what major news publications do. You can compare Google
                  search results but don't forget to add the quotation mark to
                  the query in order that it can search what you typed exactly.
                  For instance if variation A produces 3 million search results
                  but variation B produces only 1 million, you might want to opt
                  for variation A. If you cannot decide, ask yourself: what
                  would you expect to see transcribed if you were writing that
                  audio to your university professor? If you cannot find any
                  terms in the glossary (which means this is not standardized
                  enough in the culture), you should use your best judgement to
                  consider which words should be transliterated according to the
                  rules and which can be transliterated according to popular
                  usage.
                </p>
                <p className={styles.block_412}>
                  <span className={styles.text_4}>C</span>
                  <span className={styles.text_5}>ORRECT</span>
                  <span className={styles.text_6}>
                    : คลสกเมาสท ลายเซซน ประสบการณท เส อเชส ต กสโลเฮสรตซท
                  </span>
                </p>
                <p className={styles.block_413}>
                  <span className={styles.text_4}>I</span>
                  <span className={styles.text_5}>NCORRECT</span>
                  <span className={styles.text_6}>
                    : คลส กเมาสท ลายเซซนตท ประสพการณท เส อเชส รทต กสโลเฮสรทตซท
                  </span>
                </p>
                <p className={styles.block_414}>
                  <span className={styles.text_4}>C</span>
                  <span className={styles.text_5}>ORRECT</span>
                  <span className={styles.text_6}>
                    : ฟสตเนส ออฟฟสศ อสนเทอรทเนซต เกม อรเมล{' '}
                  </span>
                </p>
                <p className={styles.block_415}>
                  <span className={styles.text_4}>I</span>
                  <span className={styles.text_5}>NCORRECT</span>
                  <span className={styles.text_6}>
                    : ฟสตเนต ออฟฟสต อสนเตอรทเนซต เกมสท อรเมลท{' '}
                  </span>
                </p>
                <p className={styles.block_416}>
                  <span className={styles.text_2}>E</span>
                  <span className={styles.text_3}>XPLANATION</span>
                  <span className={styles.text_2}>
                    : Although the word is widely misspelled, please stick on
                    the rules from Royal Institute.
                  </span>
                </p>
                <p className={styles.block_417}>
                  <span className={styles.text_8}>C</span>
                  <span className={styles.text_9}>ORRECT</span>
                  <span className={styles.text_10}>: แอปเลจนเกมบนม อถ อ </span>
                  <span className={styles.text_15}>E</span>
                  <span className={styles.text_16}>XPLANATION</span>
                  <span className={styles.text_15}>
                    : According to Royal Institute's guideline, the
                  </span>
                </p>
                <p className={styles.block_418}>
                  transliteration of "app" and "game" is "แอป" and "เกม
                  respectively.
                </p>
                <p className={styles.block_419}>
                  <span className={styles.text_8}>C</span>
                  <span className={styles.text_9}>ORRECT</span>
                  <span className={styles.text_10}>: อาภาพร </span>
                  <span className={styles.text_15}>E</span>
                  <span className={styles.text_16}>XPLANATION</span>
                  <span className={styles.text_17}>
                    : "อาภาพร" has more hits than "อาภาภรณท{' '}
                  </span>
                </p>
                <p className={styles.block_420}>
                  Here's the list of useful s for Thai transcription.
                </p>
                <p className={styles.block_421}>
                  <span className={styles.text_2}>• </span>
                  <span className={styles.text_18}>
                    Royal Institute website - www.royin.go.th{' '}
                  </span>
                </p>
                <p className={styles.block_422}>
                  <span className={styles.text_2}>• </span>
                  <span className={styles.text_18}>
                    dictionary - goo.gl/kSW4y1{' '}
                  </span>
                </p>
                <p className={styles.block_423}>
                  <span className={styles.text_2}>• </span>
                  <span className={styles.text_18}>
                    newly coined terms - goo.gl/SfShtI{' '}
                  </span>
                </p>
                <p className={styles.block_424}>
                  <span className={styles.text_2}>• </span>
                  <span className={styles.text_18}>
                    English transliteration - goo.gl/WYTYct{' '}
                  </span>
                </p>
                <p className={styles.block_425}>
                  <span className={styles.text_2}>• </span>
                  <span className={styles.text_18}>
                    people's names from some countries - goo.gl/CeZymb
                  </span>
                </p>
                <p className={styles.block_426}>
                  <span className={styles.text_2}>• </span>
                  <span className={styles.text_18}>
                    city and country names - goo.gl/KMhNnO{' '}
                  </span>
                </p>
                <p className={styles.block_427}>
                  <span className={styles.text_2}>• </span>
                  <span className={styles.text_18}>
                    acronyms and abbreviations - goo.gl/S1TyRS
                  </span>
                </p>
                <p className={styles.block_428}>
                  <span className={styles.text_2}>• </span>
                  <span className={styles.text_18}>
                    Romanization - goo.gl/ltXAtU{' '}
                  </span>
                </p>
                <p className={styles.block_429}>
                  Use either Thai or Latin scripts including special characters
                  if necessary. If you have to type any special character that
                  is not available in a physical keyboard, google it and
                  copy-and-paste it. Diacritics are fine as long as they are not
                  too exotic.
                </p>
                <p className={styles.block_430}>
                  <span className={styles.text_4}>C</span>
                  <span className={styles.text_5}>ORRECT</span>
                  <span className={styles.text_6}>: อนนยองฮาเซโย </span>
                </p>
                <p className={styles.block_431}>
                  <span className={styles.text_4}>I</span>
                  <span className={styles.text_5}>NCORRECT</span>
                  <span className={styles.text_6}>: 안녕하세요 </span>
                </p>
                <p className={styles.block_432}>
                  <span className={styles.text_2}>C</span>
                  <span className={styles.text_3}>ORRECT</span>
                  <span className={styles.text_2}>: España </span>
                </p>
                <p className={styles.block_433}>
                  <span className={styles.text_2}>I</span>
                  <span className={styles.text_3}>NCORRECT</span>
                  <span className={styles.text_2}>: Espanya </span>
                </p>
                <p className={styles.block_434}>
                  <span className={styles.text_2}>I</span>
                  <span className={styles.text_3}>NCORRECT</span>
                  <span className={styles.text_2}>: Espana </span>
                </p>
                <p className={styles.block_435}>
                  <span className={styles.text_2}>E</span>
                  <span className={styles.text_3}>XPLANATION</span>
                  <span className={styles.text_2}>
                    : Ñ's are likely to be found e.g. El Niño.{' '}
                  </span>
                </p>
                <p className={styles.block_436}>
                  <span className={styles.text_2}>C</span>
                  <span className={styles.text_3}>ORRECT</span>
                  <span className={styles.text_2}>: 100° C </span>
                </p>
                <p className={styles.block_437}>
                  <span className={styles.text_4}>I</span>
                  <span className={styles.text_5}>NCORRECT</span>
                  <span className={styles.text_6}>: 100 องศา C </span>
                </p>
                <p className={styles.block_438}>
                  <span className={styles.text_4}>E</span>
                  <span className={styles.text_5}>XAMPLE AUDIO</span>
                  <span className={styles.text_4}>: " </span>
                  <span className={styles.text_19}>ร อยองศาซร </span>
                  <span className={styles.text_4}>" </span>
                </p>
                <p className={styles.block_439}>
                  <span className={styles.text_2}>C</span>
                  <span className={styles.text_3}>ORRECT</span>
                  <span className={styles.text_2}>: Poznan </span>
                </p>
                <p className={styles.block_434}>
                  <span className={styles.text_2}>I</span>
                  <span className={styles.text_3}>NCORRECT</span>
                  <span className={styles.text_2}>: Poznań </span>
                </p>
                <p className={styles.block_440}>
                  <span className={styles.text_2}>E</span>
                  <span className={styles.text_3}>XPLANATION</span>
                  <span className={styles.text_2}>: a town in Poland </span>
                </p>
                <p className={styles.block_441}>
                  List of valid foreign characters
                </p>
                <p className={styles.block_442}>
                  <span className={styles.text_2}>• </span>
                  <span className={styles.text_18}>à </span>
                </p>
                <p className={styles.block_443}>
                  <span className={styles.text_2}>• </span>
                  <span className={styles.text_18}>â </span>
                </p>
                <p className={styles.block_444}>
                  <span className={styles.text_2}>• </span>
                  <span className={styles.text_18}>á </span>
                </p>
                <p className={styles.block_445}>
                  <span className={styles.text_2}>• </span>
                  <span className={styles.text_18}>ä </span>
                </p>
                <p className={styles.block_446}>
                  <span className={styles.text_2}>• </span>
                  <span className={styles.text_18}>ç </span>
                </p>
                <p className={styles.block_445}>
                  <span className={styles.text_2}>• </span>
                  <span className={styles.text_18}>é </span>
                </p>
                <p className={styles.block_445}>
                  <span className={styles.text_2}>• </span>
                  <span className={styles.text_18}>è </span>
                </p>
                <p className={styles.block_445}>
                  <span className={styles.text_2}>• </span>
                  <span className={styles.text_18}>ê </span>
                </p>
                <p className={styles.block_445}>
                  <span className={styles.text_2}>• </span>
                  <span className={styles.text_18}>ë </span>
                </p>
                <p className={styles.block_447}>
                  <span className={styles.text_2}>• </span>
                  <span className={styles.text_18}>ï </span>
                </p>
                <p className={styles.block_448}>
                  <span className={styles.text_2}>• </span>
                  <span className={styles.text_18}>î </span>
                </p>
                <p className={styles.block_447}>
                  <span className={styles.text_2}>• </span>
                  <span className={styles.text_18}>í </span>
                </p>
                <p className={styles.block_449}>
                  <span className={styles.text_2}>• </span>
                  <span className={styles.text_18}>ô </span>
                </p>
                <p className={styles.block_445}>
                  <span className={styles.text_2}>• </span>
                  <span className={styles.text_18}>ö </span>
                </p>
                <p className={styles.block_449}>
                  <span className={styles.text_2}>• </span>
                  <span className={styles.text_18}>ó </span>
                </p>
                <p className={styles.block_445}>
                  <span className={styles.text_2}>• </span>
                  <span className={styles.text_18}>ù </span>
                </p>
                <p className={styles.block_449}>
                  <span className={styles.text_2}>• </span>
                  <span className={styles.text_18}>û </span>
                </p>
                <p className={styles.block_445}>
                  <span className={styles.text_2}>• </span>
                  <span className={styles.text_18}>ü </span>
                </p>
                <p className={styles.block_445}>
                  <span className={styles.text_2}>• </span>
                  <span className={styles.text_18}>ñ </span>
                </p>
              </div>
              <div id="context-error">
                <p className={'heading'}>Context error</p>
                <p className={'text'}>
                  A context error occurs when a real word is used incorrectly or
                  when the incorrect form of a word is used. This includes
                  homophones and punctuation, among other things.
                </p>
                <p className={styles.block_452}>
                  <span className={styles.text_4}>C</span>
                  <span className={styles.text_5}>ORRECT</span>
                  <span className={styles.text_6}>
                    : นรจเปซนทรจทรจฉนนเคยถ กโจรขโมยกระเป า{' '}
                  </span>
                </p>
                <p className={styles.block_453}>
                  <span className={styles.text_4}>I</span>
                  <span className={styles.text_5}>NCORRECT</span>
                  <span className={styles.text_6}>
                    : นรจเปซนทรจๆ ฉนนเคยถ กโจรขโมยกระเป า{' '}
                  </span>
                </p>
                <p className={styles.block_454}>
                  <span className={styles.text_4}>C</span>
                  <span className={styles.text_5}>ORRECT</span>
                  <span className={styles.text_6}>
                    : แฟ มบนโตะเปซนของของลบงทรจฝากฉนนไว เม จอวาน
                  </span>
                </p>
                <p className={styles.block_455}>
                  <span className={styles.text_4}>I</span>
                  <span className={styles.text_5}>NCORRECT</span>
                  <span className={styles.text_6}>
                    : แฟ มบนโต ะเปซนของๆ ลบงทรจฝากฉนนไว เม จอวาน
                  </span>
                </p>
                <p className={styles.block_456}>
                  <span className={styles.text_2}>C</span>
                  <span className={styles.text_3}>ORRECT</span>
                  <span className={styles.text_2}>: your favorite movie </span>
                </p>
                <p className={styles.block_457}>
                  <span className={styles.text_2}>I</span>
                  <span className={styles.text_3}>NCORRECT</span>
                  <span className={styles.text_2}>
                    : you're favorite movie{' '}
                  </span>
                </p>
                <p className={styles.block_458}>
                  <span className={styles.text_2}>C</span>
                  <span className={styles.text_3}>ORRECT</span>
                  <span className={styles.text_2}>
                    : You're my best friend.{' '}
                  </span>
                </p>
                <p className={styles.block_459}>
                  <span className={styles.text_2}>I</span>
                  <span className={styles.text_3}>NCORRECT</span>
                  <span className={styles.text_2}>
                    : You re my best friend.{' '}
                  </span>
                </p>
                <p className={styles.block_460}>
                  Transcribe what is actually spoken. Use context to help with
                  spelling and homophone disambiguation. Look up words if you
                  are unsure.
                </p>
                <p className={styles.block_461}>
                  <span className={styles.text_4}>C</span>
                  <span className={styles.text_5}>ORRECT</span>
                  <span className={styles.text_6}>: ขอส อม 3 คนน </span>
                </p>
                <p className={styles.block_462}>
                  <span className={styles.text_4}>I</span>
                  <span className={styles.text_5}>NCORRECT</span>
                  <span className={styles.text_6}>: ขอซจอม 3 คนน </span>
                </p>
                <p className={styles.block_463}>
                  <span className={styles.text_4}>C</span>
                  <span className={styles.text_5}>ORRECT</span>
                  <span className={styles.text_6}>: ตลกนะ ฮจาๆๆ </span>
                </p>
                <p className={styles.block_464}>
                  <span className={styles.text_4}>I</span>
                  <span className={styles.text_5}>NCORRECT</span>
                  <span className={styles.text_6}>: ตลกนะ 555 </span>
                </p>
                <p className={styles.block_465}>
                  <span className={styles.text_2}>C</span>
                  <span className={styles.text_3}>ORRECT</span>
                  <span className={styles.text_2}>: He went over there. </span>
                </p>
                <p className={styles.block_466}>
                  <span className={styles.text_2}>I</span>
                  <span className={styles.text_3}>NCORRECT</span>
                  <span className={styles.text_2}>: He went over their. </span>
                </p>
                <p className={styles.block_467}>
                  Do not correct speaker's grammar if they intentionally say
                  something, even if what they say does not follow the standard
                  grammatical rules of the transcription language.
                </p>
                <p className={styles.block_468}>
                  <span className={styles.text_4}>C</span>
                  <span className={styles.text_5}>ORRECT</span>
                  <span className={styles.text_6}>: หวานช </span>
                  <span className={styles.text_20}>
                    <sup className={styles.calibre1}>จ</sup>
                  </span>
                  <span className={styles.text_6}>นอกตรม </span>
                </p>
                <p className={styles.block_469}>
                  <span className={styles.text_4}>I</span>
                  <span className={styles.text_5}>NCORRECT</span>
                  <span className={styles.text_6}>: หน าช </span>
                  <span className={styles.text_20}>
                    <sup className={styles.calibre1}>จ</sup>
                  </span>
                  <span className={styles.text_6}>นอกตรม </span>
                </p>
                <p className={styles.block_470}>
                  <span className={styles.text_4}>E</span>
                  <span className={styles.text_5}>XAMPLE AUDIO</span>
                  <span className={styles.text_4}>: " </span>
                  <span className={styles.text_19}>หวานช จนอกตรม </span>
                  <span className={styles.text_4}>" </span>
                </p>
                <p className={styles.block_471}>
                  <span className={styles.text_4}>C</span>
                  <span className={styles.text_5}>ORRECT</span>
                  <span className={styles.text_6}>: ไขจ 3 ล ก </span>
                </p>
                <p className={styles.block_472}>
                  <span className={styles.text_4}>I</span>
                  <span className={styles.text_5}>NCORRECT</span>
                  <span className={styles.text_6}>: ไขจ 3 ฟอง </span>
                </p>
                <p className={styles.block_473}>
                  <span className={styles.text_4}>E</span>
                  <span className={styles.text_5}>XAMPLE AUDIO</span>
                  <span className={styles.text_4}>: " </span>
                  <span className={styles.text_19}>ไขจสามล ก </span>
                  <span className={styles.text_4}>" </span>
                </p>
              </div>
              <div id="adding-missing-words">
                <p className={'heading'}>Added or missing words</p>
                <p className={'text'}>
                  Do not transcribe words that are not spoken, even if they are
                  obviously intended by the speaker. Avoid putting words in the
                  speaker's mouth. However, do transcribe implied times and
                  units of currency.
                </p>
                <p className={styles.block_476}>
                  <span className={styles.text_21}>C</span>
                  <span className={styles.text_22}>ORRECT</span>
                  <span className={styles.text_21}>
                    : I want to go see X-Men movie.{' '}
                  </span>
                  <span className={styles.text_23}>E</span>
                  <span className={styles.text_24}>XPLANATION</span>
                  <span className={styles.text_23}>
                    : Do not add the omitted article "the".{' '}
                  </span>
                </p>
                <p className={styles.block_477}>
                  <span className={styles.text_8}>C</span>
                  <span className={styles.text_9}>ORRECT</span>
                  <span className={styles.text_10}>: 7.50 บาท </span>
                  <span className={styles.text_11}>E</span>
                  <span className={styles.text_12}>XAMPLE AUDIO</span>
                  <span className={styles.text_11}>: " </span>
                  <span className={styles.text_14}>เจซดบาทห าสสบ </span>
                  <span className={styles.text_11}>" </span>
                </p>
                <p className={styles.block_478}>
                  <span className={styles.text_8}>C</span>
                  <span className={styles.text_9}>ORRECT</span>
                  <span className={styles.text_10}>: ตน งปลบก 7:00 น. </span>
                  <span className={styles.text_11}>E</span>
                  <span className={styles.text_12}>XAMPLE AUDIO</span>
                  <span className={styles.text_11}>: " </span>
                  <span className={styles.text_14}>ตน งปลบกเจซดโมงเช า </span>
                  <span className={styles.text_11}>" </span>
                </p>
                <p className={styles.block_479}>
                  Transcribe all words spoken, even if they are not intended by
                  the speaker. For interjections and non-speech vocalizations,
                  refer to Agreed Spelling &gt; Interjections and Difficult
                  Utterances &gt; Hesitations and Truncations.
                </p>
                <p className={styles.block_480}>
                  <span className={styles.text_21}>C</span>
                  <span className={styles.text_22}>ORRECT</span>
                  <span className={styles.text_21}>
                    : YouTube YouTube YouTube{' '}
                  </span>
                  <span className={styles.text_23}>E</span>
                  <span className={styles.text_24}>XPLANATION</span>
                  <span className={styles.text_23}>
                    : Speaker made a pause between each word.{' '}
                  </span>
                </p>
                <p className={styles.block_481}>
                  <span className={styles.text_8}>C</span>
                  <span className={styles.text_9}>ORRECT</span>
                  <span className={styles.text_10}>: ปากหมาลจาท าแมจนาค </span>
                  <span className={styles.text_15}>E</span>
                  <span className={styles.text_16}>XPLANATION</span>
                  <span className={styles.text_17}>
                    : Although the movie title is "ปากหมาท าแมจนาค
                  </span>
                </p>
                <p className={styles.block_482}>
                  clearly spoken, you still need to transcribe "ลจา"
                </p>
                <p className={styles.block_483}>
                  <span className={styles.text_21}>C</span>
                  <span className={styles.text_22}>ORRECT</span>
                  <span className={styles.text_21}>
                    : How many raspberries blueberries are there?{' '}
                  </span>
                  <span className={styles.text_23}>E</span>
                  <span className={styles.text_24}>XPLANATION</span>
                  <span className={styles.text_23}>
                    : Speaker clearly corrected themselves after
                  </span>
                </p>
                <p className={styles.block_484}>"raspberries".</p>
                <p className={styles.block_485}>
                  A false start occurs only when the speaker says part of a word
                  and then stops. A false start does not happen if the speaker
                  re-directs their speech mid sentence. False starts should be
                  marked with a dash “-” wherever the false start is happening
                </p>
                <p className={styles.block_486}>
                  <span className={styles.text_2}>C</span>
                  <span className={styles.text_3}>ORRECT</span>
                  <span className={styles.text_2}>
                    : I need to get a new tele- telephone{' '}
                  </span>
                </p>
                <p className={styles.block_487}>
                  <span className={styles.text_2}>C</span>
                  <span className={styles.text_3}>ORRECT</span>
                  <span className={styles.text_2}>
                    : The driver got out of the driver got into the car.
                  </span>
                </p>
                <p className={styles.block_488}>
                  <span className={styles.text_2}>C</span>
                  <span className={styles.text_3}>ORRECT</span>
                  <span className={styles.text_2}>
                    : I really don't think Hey that's a good idea, let's do
                    that!
                  </span>
                </p>
              </div>
              <div id="substitution">
                <p className={'heading'}>Substitution</p>
                <p className={'text'}>
                  A substitution error occurs when another standard word is
                  transcribed instead of what was meant by the speaker. If what
                  the speaker said falls into another category (Context Error,
                  Proper Name, Media Title, etc.), see the relevant section.
                </p>
                <p className={styles.block_491}>
                  <span className={styles.text_4}>C</span>
                  <span className={styles.text_5}>ORRECT</span>
                  <span className={styles.text_6}>: เค กเนยสด </span>
                </p>
                <p className={styles.block_492}>
                  <span className={styles.text_4}>I</span>
                  <span className={styles.text_5}>NCORRECT</span>
                  <span className={styles.text_6}>: เค กนมสด </span>
                </p>
                <p className={styles.block_493}>
                  <span className={styles.text_4}>E</span>
                  <span className={styles.text_5}>XAMPLE AUDIO</span>
                  <span className={styles.text_4}>: " </span>
                  <span className={styles.text_19}>เค กเนยสด </span>
                  <span className={styles.text_4}>" </span>
                </p>
                <p className={styles.block_494}>
                  <span className={styles.text_4}>C</span>
                  <span className={styles.text_5}>ORRECT</span>
                  <span className={styles.text_6}>: อยากรนก อยจากน กเลย </span>
                </p>
                <p className={styles.block_495}>
                  <span className={styles.text_4}>I</span>
                  <span className={styles.text_5}>NCORRECT</span>
                  <span className={styles.text_6}>: อยากกน ก อยจารนกเลย </span>
                </p>
                <p className={styles.block_496}>
                  <span className={styles.text_4}>E</span>
                  <span className={styles.text_5}>XAMPLE AUDIO</span>
                  <span className={styles.text_4}>: " </span>
                  <span className={styles.text_19}>อยากรนก อยจากน กเลย </span>
                  <span className={styles.text_4}>" </span>
                </p>
                <p className={styles.block_497}>
                  <span className={styles.text_2}>E</span>
                  <span className={styles.text_3}>XPLANATION</span>
                  <span className={styles.text_2}>
                    : This falls into another category - Media Titles.
                  </span>
                </p>
              </div>
              <div id="spacing">
                <p className={'heading'}>Spacing</p>
                <p className={'text'}>
                  Use only one space between words and sentences.
                </p>
                <p className={styles.block_500}>
                  <span className={styles.text_4}>C</span>
                  <span className={styles.text_5}>ORRECT</span>
                  <span className={styles.text_6}>: กล วย ส ม มะละกอ </span>
                </p>
                <p className={styles.block_501}>
                  <span className={styles.text_4}>I</span>
                  <span className={styles.text_5}>NCORRECT</span>
                  <span className={styles.text_6}>: กล วย ส ม _มะละกอ </span>
                </p>
                <p className={styles.block_502}>
                  <span className={styles.text_4}>C</span>
                  <span className={styles.text_5}>ORRECT</span>
                  <span className={styles.text_6}>
                    : เธอจะไปไหน แมจไมจอย จนะ{' '}
                  </span>
                </p>
                <p className={styles.block_503}>
                  <span className={styles.text_4}>I</span>
                  <span className={styles.text_5}>NCORRECT</span>
                  <span className={styles.text_6}>
                    : เธอจะไปไหน _แมจไมจอย จนะ{' '}
                  </span>
                </p>
                <p className={styles.block_504}>
                  For most types of punctuation, do not put a space between the
                  preceding word and the punctuation.
                </p>
                <p className={styles.block_505}>
                  <span className={styles.text_2}>C</span>
                  <span className={styles.text_3}>ORRECT</span>
                  <span className={styles.text_2}>: Are you coming? </span>
                </p>
                <p className={styles.block_506}>
                  <span className={styles.text_2}>I</span>
                  <span className={styles.text_3}>NCORRECT</span>
                  <span className={styles.text_2}>: Are you coming ? </span>
                </p>
                <p className={styles.block_507}>
                  <span className={styles.text_2}>C</span>
                  <span className={styles.text_3}>ORRECT</span>
                  <span className={styles.text_2}>: Shut up! </span>
                </p>
                <p className={styles.block_508}>
                  <span className={styles.text_2}>I</span>
                  <span className={styles.text_3}>NCORRECT</span>
                  <span className={styles.text_2}>: Shut up ! </span>
                </p>
                <p className={styles.block_509}>
                  <span className={styles.text_4}>C</span>
                  <span className={styles.text_5}>ORRECT</span>
                  <span className={styles.text_6}>
                    : ขอต อนรนบ ดร. สมศนกดสท{' '}
                  </span>
                </p>
                <p className={styles.block_510}>
                  <span className={styles.text_4}>I</span>
                  <span className={styles.text_5}>NCORRECT</span>
                  <span className={styles.text_6}>
                    : ขอต อนรนบ ดร . สมศนกดสท{' '}
                  </span>
                </p>
                <p className={styles.block_511}>
                  <span className={styles.text_4}>I</span>
                  <span className={styles.text_5}>NCORRECT</span>
                  <span className={styles.text_6}>: ขอต อนรนบดร.สมศนกดสท </span>
                </p>
                <p className={styles.block_512}>
                  For quotation marks and similar punctuation, put a space
                  before the opening punctuation, but not necessarily after the
                  closing punctuation.
                </p>
                <p className={styles.block_513}>
                  <span className={styles.text_4}>C</span>
                  <span className={styles.text_5}>ORRECT</span>
                  <span className={styles.text_6}>
                    : แปลคนาวจา "รนก" เปซนภาษาสเปน{' '}
                  </span>
                </p>
                <p className={styles.block_514}>
                  <span className={styles.text_4}>I</span>
                  <span className={styles.text_5}>NCORRECT</span>
                  <span className={styles.text_6}>
                    : แปลคนาวจา "รนก"เปซนภาษาสเปน{' '}
                  </span>
                </p>
                <p className={styles.block_515}>
                  <span className={styles.text_2}>C</span>
                  <span className={styles.text_3}>ORRECT</span>
                  <span className={styles.text_2}>
                    : Antonio said, "I love you."{' '}
                  </span>
                </p>
                <p className={styles.block_516}>
                  <span className={styles.text_2}>I</span>
                  <span className={styles.text_3}>NCORRECT</span>
                  <span className={styles.text_2}>
                    : Antonio said, " I love you. "{' '}
                  </span>
                </p>
                <p className={styles.block_517}>
                  Add space when there is an audible pause to correctly separate
                  words, phrases, and sentences.
                </p>
                <p className={styles.block_518}>
                  <span className={styles.text_4}>C</span>
                  <span className={styles.text_5}>ORRECT</span>
                  <span className={styles.text_6}>
                    : เพลงของหญสงลรมรเพลงอะไรบ าง ขอฟนงหนจอย{' '}
                  </span>
                </p>
                <p className={styles.block_519}>
                  Use the appropriate spacing even if the speaker speaks
                  unnaturally or with lots of pauses.
                </p>
                <p className={styles.block_520}>
                  <span className={styles.text_8}>C</span>
                  <span className={styles.text_9}>ORRECT</span>
                  <span className={styles.text_10}>
                    : รรสอรทตทรจหนวหสน ประจวบครรรขนนธท{' '}
                  </span>
                  <span className={styles.text_11}>E</span>
                  <span className={styles.text_12}>XAMPLE AUDIO</span>
                  <span className={styles.text_11}>: " </span>
                  <span className={styles.text_14}>
                    รร สอรทต ทรจ หนว หสน ประ จวบ คร รร ขนนธท{' '}
                  </span>
                  <span className={styles.text_11}>" </span>
                </p>
                <p className={styles.block_521}>
                  <span className={styles.text_8}>C</span>
                  <span className={styles.text_9}>ORRECT</span>
                  <span className={styles.text_10}>: การจราจรหน าสยาม </span>
                  <span className={styles.text_11}>E</span>
                  <span className={styles.text_12}>XAMPLE AUDIO</span>
                  <span className={styles.text_11}>: " </span>
                  <span className={styles.text_14}>
                    การ จะ รา จร หน า สะ หยาม{' '}
                  </span>
                  <span className={styles.text_11}>" </span>
                </p>
                <p className={styles.block_522}>
                  Add space to syntactically break words, phrases or sentences
                  properly. Conjunctions, e.g. แตจ แม วจา กระนน น ดนงนน น แล วจ
                  ง, can be used as a hint.
                </p>
                <p className={styles.block_523}>
                  <span className={styles.text_4}>C</span>
                  <span className={styles.text_5}>ORRECT</span>
                  <span className={styles.text_6}>
                    : ฉนนรนกเธอไมจใชจเร จองฐานะหร อหน าตา
                    แตจเพราะจสตใจทรจดรงามของเธอ แม วจาจะมรคนรอบตนวฉนนคนดค
                    านกซตาม
                  </span>
                </p>
                <p className={styles.block_524}>
                  <span className={styles.text_4}>C</span>
                  <span className={styles.text_5}>ORRECT</span>
                  <span className={styles.text_6}>: ดสฉนนช </span>
                  <span className={styles.text_20}>
                    <sup className={styles.calibre1}>จ</sup>
                  </span>
                  <span className={styles.text_6}>
                    อ ด.ญ. สบดา ประเสรสฐศรร บ านอย จชลบบรร มรพรจน อง 2 คน ทรจบ
                    าน ทนาอาชรพค าขาย
                  </span>
                </p>
                <p className={styles.block_525}>
                  Add space for web search or queries that is not in a
                  grammatical order.
                </p>
                <p className={styles.block_526}>
                  <span className={styles.text_4}>C</span>
                  <span className={styles.text_5}>ORRECT</span>
                  <span className={styles.text_6}>: เพลงรนก คอรทดกรตารท </span>
                </p>
                <p className={styles.block_527}>
                  <span className={styles.text_4}>I</span>
                  <span className={styles.text_5}>NCORRECT</span>
                  <span className={styles.text_6}>: เพลงรนกคอรทดกรตารท </span>
                </p>
                <p className={styles.block_528}>
                  <span className={styles.text_4}>C</span>
                  <span className={styles.text_5}>ORRECT</span>
                  <span className={styles.text_6}>: คอรทดกรตารทเพลงรนก </span>
                </p>
                <p className={styles.block_529}>
                  Space only after a repetition marker (ๆ) and an ellipsis
                  marker (ฯ)
                </p>
                <p className={styles.block_530}>
                  <span className={styles.text_4}>C</span>
                  <span className={styles.text_5}>ORRECT</span>
                  <span className={styles.text_6}>: ตจางๆ นานา </span>
                </p>
                <p className={styles.block_531}>
                  <span className={styles.text_4}>I</span>
                  <span className={styles.text_5}>NCORRECT</span>
                  <span className={styles.text_6}>: ตจาง ๆ นานา </span>
                </p>
                <p className={styles.block_532}>
                  <span className={styles.text_2}>E</span>
                  <span className={styles.text_3}>XPLANATION</span>
                  <span className={styles.text_2}>: repetition marker </span>
                </p>
                <p className={styles.block_533}>
                  <span className={styles.text_8}>C</span>
                  <span className={styles.text_9}>ORRECT</span>
                  <span className={styles.text_10}>
                    : กรบงเทพฯ เปซนเขตการปกครองพสเศษ{' '}
                  </span>
                  <span className={styles.text_15}>E</span>
                  <span className={styles.text_16}>XPLANATION</span>
                  <span className={styles.text_15}>: ellipsis marker </span>
                </p>
                <p className={styles.block_534}>
                  <span className={styles.text_8}>C</span>
                  <span className={styles.text_9}>ORRECT</span>
                  <span className={styles.text_10}>
                    : รถไฟเทรจยวจากกรบงเทพฯ-เชรยงใหมจ{' '}
                  </span>
                  <span className={styles.text_15}>E</span>
                  <span className={styles.text_16}>XPLANATION</span>
                  <span className={styles.text_15}>
                    : One exception for ellipsis marker: no space
                  </span>
                </p>
                <p className={styles.block_535}>
                  required if it is followed by other punctuation.
                </p>
                <p className={styles.block_536}>
                  Space before and after an et cetera marker (ฯลฯ) and
                  one-character-long word ("ธ" and "ณ").
                </p>
                <p className={styles.block_537}>
                  <span className={styles.text_8}>C</span>
                  <span className={styles.text_9}>ORRECT</span>
                  <span className={styles.text_10}>
                    : ตะหลสว หม อ ทนพพร ฯลฯ{' '}
                  </span>
                  <span className={styles.text_15}>E</span>
                  <span className={styles.text_16}>XPLANATION</span>
                  <span className={styles.text_15}>: "et cetera" marker </span>
                </p>
                <p className={styles.block_538}>
                  <span className={styles.text_4}>C</span>
                  <span className={styles.text_5}>ORRECT</span>
                  <span className={styles.text_6}>: ลง ณ วนนทรจ </span>
                </p>
                <p className={styles.block_539}>
                  <span className={styles.text_4}>I</span>
                  <span className={styles.text_5}>NCORRECT</span>
                  <span className={styles.text_6}>: ลงณ วนนทรจ </span>
                </p>
                <p className={styles.block_540}>
                  <span className={styles.text_4}>I</span>
                  <span className={styles.text_5}>NCORRECT</span>
                  <span className={styles.text_6}>: ลง ณ. วนนทรจ </span>
                </p>
                <p className={styles.block_541}>
                  <span className={styles.text_4}>I</span>
                  <span className={styles.text_5}>NCORRECT</span>
                  <span className={styles.text_6}>: ลงณ. วนนทรจ </span>
                </p>
                <p className={styles.block_542}>
                  <span className={styles.text_4}>E</span>
                  <span className={styles.text_5}>XPLANATION</span>
                  <span className={styles.text_6}>
                    : "ณ" is a word deriving from "ใน", not an abrreviation.
                    Period must not be inserted.
                  </span>
                </p>
                <p className={styles.block_543}>
                  <span className={styles.text_4}>C</span>
                  <span className={styles.text_5}>ORRECT</span>
                  <span className={styles.text_6}>: ผลพระคบณ ธ รนกษา </span>
                </p>
                <p className={styles.block_544}>
                  <span className={styles.text_4}>I</span>
                  <span className={styles.text_5}>NCORRECT</span>
                  <span className={styles.text_6}>: ผลพระคบณธ รนกษา </span>
                </p>
                <p className={styles.block_545}>
                  <span className={styles.text_4}>I</span>
                  <span className={styles.text_5}>NCORRECT</span>
                  <span className={styles.text_6}>: ผลพระคบณ ธ.รนกษา </span>
                </p>
                <p className={styles.block_546}>
                  <span className={styles.text_4}>I</span>
                  <span className={styles.text_5}>NCORRECT</span>
                  <span className={styles.text_6}>: ผลพระคบณธ. รนกษา </span>
                </p>
                <p className={styles.block_547}>
                  <span className={styles.text_4}>E</span>
                  <span className={styles.text_5}>XPLANATION</span>
                  <span className={styles.text_6}>
                    : "ธ" is a word deriving from "เธอ", not an abrreviation.
                    Period must not be inserted.
                  </span>
                </p>
                <p className={styles.block_548}>
                  Space before and after Latin script, numeric script and
                  websites/URLs.
                </p>
                <p className={styles.block_549}>
                  <span className={styles.text_4}>C</span>
                  <span className={styles.text_5}>ORRECT</span>
                  <span className={styles.text_6}>
                    : ดาวนทโหลดเพลงอ ายตายสสไห นนาบจ 4shared{' '}
                  </span>
                </p>
                <p className={styles.block_550}>
                  <span className={styles.text_4}>C</span>
                  <span className={styles.text_5}>ORRECT</span>
                  <span className={styles.text_6}>
                    : ด รรวสว iPhone 5s เปรรยบเทรยบกนบ Samsung Galaxy S5
                  </span>
                </p>
                <p className={styles.block_551}>
                  <span className={styles.text_4}>C</span>
                  <span className={styles.text_5}>ORRECT</span>
                  <span className={styles.text_6}>: ทองคนาหนนก 30 บาท </span>
                </p>
                <p className={styles.block_552}>
                  Space between First name and Last name, nobles, and royalties.
                  For foreign names from China, Korea, and Vietnam, spacing is
                  NOT required unless you feel it is more common to add a space.
                </p>
                <p className={styles.block_553}>
                  <span className={styles.text_4}>C</span>
                  <span className={styles.text_5}>ORRECT</span>
                  <span className={styles.text_6}>: นายมานะ รนกเรรยน </span>
                </p>
                <p className={styles.block_554}>
                  <span className={styles.text_4}>C</span>
                  <span className={styles.text_5}>ORRECT</span>
                  <span className={styles.text_6}>
                    : สมเดซจฯ เจ าฟ าจาตบรนตทรนศมร กรมพระจนกรพรรดสพงศท
                  </span>
                </p>
                <p className={styles.block_555}>
                  <span className={styles.text_4}>I</span>
                  <span className={styles.text_5}>NCORRECT</span>
                  <span className={styles.text_6}>
                    : สมเดซจฯ เจ าฟ าจาตบรนตทรนศมรกรมพระจนกรพรรดสพงศท
                  </span>
                </p>
                <p className={styles.block_556}>
                  <span className={styles.text_4}>C</span>
                  <span className={styles.text_5}>ORRECT</span>
                  <span className={styles.text_6}>
                    : เหลรยงเฉาเหวจย ลรยองอา เหงรยนวนนเทรยว{' '}
                  </span>
                </p>
                <p className={styles.block_557}>
                  Space after "Nickname + First name" and "First name + Last
                  name".
                </p>
                <p className={styles.block_558}>
                  <span className={styles.text_4}>C</span>
                  <span className={styles.text_5}>ORRECT</span>
                  <span className={styles.text_6}>
                    : อยากร วจาพรช พชร กนาลนงคบอย จกนบใคร{' '}
                  </span>
                </p>
                <p className={styles.block_559}>
                  <span className={styles.text_4}>I</span>
                  <span className={styles.text_5}>NCORRECT</span>
                  <span className={styles.text_6}>
                    : อยากร วจาพรช พชรกนาลนงคบอย จกนบใคร{' '}
                  </span>
                </p>
                <p className={styles.block_560}>
                  <span className={styles.text_4}>C</span>
                  <span className={styles.text_5}>ORRECT</span>
                  <span className={styles.text_6}>
                    : ฟนงเพลงของใบเตย อารท สยาม อนลบนมใหมจลจาสบด
                  </span>
                </p>
                <p className={styles.block_561}>
                  Space before and after each set of abbreviation.
                </p>
                <p className={styles.block_562}>
                  <span className={styles.text_4}>C</span>
                  <span className={styles.text_5}>ORRECT</span>
                  <span className={styles.text_6}>
                    : นนกเรรยนชน น ม. 3 กนาลนงนนจงรถ บขส. ไปสอบในตนวเม อง
                  </span>
                </p>
                <p className={styles.block_563}>
                  <span className={styles.text_4}>I</span>
                  <span className={styles.text_5}>NCORRECT</span>
                  <span className={styles.text_6}>
                    : นนกเรรยนชน นม. 3 กนาลนงนนจงรถบขส. ไปสอบในตนวเม อง
                  </span>
                </p>
                <p className={styles.block_564}>
                  <span className={styles.text_4}>C</span>
                  <span className={styles.text_5}>ORRECT</span>
                  <span className={styles.text_6}>
                    : รางวนลนนกวสจนยแหจงปรเปซนของ ดร. สมคสด อาจหาญ
                  </span>
                </p>
                <p className={styles.block_565}>
                  <span className={styles.text_4}>I</span>
                  <span className={styles.text_5}>NCORRECT</span>
                  <span className={styles.text_6}>
                    : รางวนลนนกวสจนยแหจงปรเปซนของ ดร.สมคสด อาจหาญ
                  </span>
                </p>
                <p className={styles.block_565}>
                  <span className={styles.text_4}>I</span>
                  <span className={styles.text_5}>NCORRECT</span>
                  <span className={styles.text_6}>
                    : รางวนลนนกวสจนยแหจงปรเปซนของดร. สมคสด อาจหาญ
                  </span>
                </p>
                <p className={styles.block_566}>
                  <span className={styles.text_4}>I</span>
                  <span className={styles.text_5}>NCORRECT</span>
                  <span className={styles.text_6}>
                    : รางวนลนนกวสจนยแหจงปรเปซนของดร.สมคสด อาจหาญ
                  </span>
                </p>
                <p className={styles.block_567}>
                  <span className={styles.text_4}>C</span>
                  <span className={styles.text_5}>ORRECT</span>
                  <span className={styles.text_6}>
                    : พ.ต.อ._ม.ร.ว._ดร._สมชาย{' '}
                  </span>
                </p>
                <p className={styles.block_568}>
                  <span className={styles.text_4}>I</span>
                  <span className={styles.text_5}>NCORRECT</span>
                  <span className={styles.text_6}>
                    : พ.ต.อ.ม.ร.ว.ดร._สมชาย{' '}
                  </span>
                </p>
                <p className={styles.block_569}>
                  <span className={styles.text_4}>I</span>
                  <span className={styles.text_5}>NCORRECT</span>
                  <span className={styles.text_6}>
                    : พ.ต.อ._ม.ร.ว._ดร.สมชาย{' '}
                  </span>
                </p>
                <p className={styles.block_570}>
                  <span className={styles.text_2}>E</span>
                  <span className={styles.text_3}>XPLANATION</span>
                  <span className={styles.text_2}>
                    : Underscores in this example denote a space.
                  </span>
                </p>
                <p className={styles.block_571}>
                  Space before and after date/place when it is used to describe
                  properties/qualifications. But NO space before วนนทรจ/ปร if it
                  is used as verb/prepositional complements.
                </p>
                <p className={styles.block_572}>
                  <span className={styles.text_4}>C</span>
                  <span className={styles.text_5}>ORRECT</span>
                  <span className={styles.text_6}>
                    : พระเคร จองหลวงป จทสม เน อผง วนดละหารไรจ จนงหวนดระยอง ปร 30
                  </span>
                </p>
                <p className={styles.block_573}>
                  <span className={styles.text_4}>I</span>
                  <span className={styles.text_5}>NCORRECT</span>
                  <span className={styles.text_6}>
                    : พระเคร จองหลวงป จทสม เน อผง วนดละหารไรจ จนงหวนดระยองปร 30
                  </span>
                </p>
                <p className={styles.block_574}>
                  <span className={styles.text_2}>E</span>
                  <span className={styles.text_3}>XPLANATION</span>
                  <span className={styles.text_2}>
                    : describe properties/qualifications - space required
                  </span>
                </p>
                <p className={styles.block_575}>
                  <span className={styles.text_8}>C</span>
                  <span className={styles.text_9}>ORRECT</span>
                  <span className={styles.text_10}>
                    : ด เปซนตจอย อนหลนง วนนทรจ 2 มกราคม 57{' '}
                  </span>
                  <span className={styles.text_15}>E</span>
                  <span className={styles.text_16}>XPLANATION</span>
                  <span className={styles.text_15}>
                    : describe properties/qualifications - space
                  </span>
                </p>
                <p className={styles.block_576}>
                  <span className={styles.text_4}>I</span>
                  <span className={styles.text_5}>NCORRECT</span>
                  <span className={styles.text_6}>
                    : ด เปซนตจอย อนหลนงวนนทรจ 2 มกราคม 57 required
                  </span>
                </p>
                <p className={styles.block_577}>
                  <span className={styles.text_4}>C</span>
                  <span className={styles.text_5}>ORRECT</span>
                  <span className={styles.text_6}>
                    : ตรวจหวยประจนาวนนทรจ 16 กรกฎาคม 57{' '}
                  </span>
                </p>
                <p className={styles.block_578}>
                  <span className={styles.text_4}>I</span>
                  <span className={styles.text_5}>NCORRECT</span>
                  <span className={styles.text_6}>
                    : ตรวจหวยประจนา วนนทรจ 16 กรกฎาคม 57{' '}
                  </span>
                </p>
                <p className={styles.block_579}>
                  <span className={styles.text_2}>E</span>
                  <span className={styles.text_3}>XPLANATION</span>
                  <span className={styles.text_2}>
                    : used as verb/prepositional complements - no space
                  </span>
                </p>
                <p className={styles.block_580}>
                  <span className={styles.text_4}>C</span>
                  <span className={styles.text_5}>ORRECT</span>
                  <span className={styles.text_6}>
                    : โรงเรรยนเปสดวนนทรจ 1 มกราคม{' '}
                  </span>
                </p>
                <p className={styles.block_581}>
                  <span className={styles.text_4}>I</span>
                  <span className={styles.text_5}>NCORRECT</span>
                  <span className={styles.text_6}>
                    : โรงเรรยนเปสด วนนทรจ 1 มกราคม{' '}
                  </span>
                </p>
                <p className={styles.block_579}>
                  <span className={styles.text_2}>E</span>
                  <span className={styles.text_3}>XPLANATION</span>
                  <span className={styles.text_2}>
                    : used as verb/prepositional complements - no space
                  </span>
                </p>
                <p className={styles.block_582}>
                  <span className={styles.text_4}>C</span>
                  <span className={styles.text_5}>ORRECT</span>
                  <span className={styles.text_6}>
                    : ทนางานเปซน อบต. มาตน งแตจปร 2555{' '}
                  </span>
                </p>
                <p className={styles.block_583}>
                  <span className={styles.text_4}>I</span>
                  <span className={styles.text_5}>NCORRECT</span>
                  <span className={styles.text_6}>
                    : ทนางานเปซน อบต. มาตน งแตจ ปร 2555{' '}
                  </span>
                </p>
                <p className={styles.block_584}>
                  {' '}
                  <span className={styles.text_2}>E</span>
                  <span className={styles.text_3}>XPLANATION</span>
                  <span className={styles.text_2}>
                    : used as verb/prepositional complements - no space
                  </span>
                </p>
              </div>
            </div>
          </Paper>
        </Grid>
        <Hidden smDown>
          <Grid sm={3} item className={classes.rightNav}>
            <RightContentNav
              title="Transcription Quality"
              headingIds={headingIds}
            />
          </Grid>
        </Hidden>
      </Grid>
    </Wrapper>
  )
}

export default TranscriptionQuality

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
