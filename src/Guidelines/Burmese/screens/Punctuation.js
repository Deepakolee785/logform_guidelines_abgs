import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Paper, Grid, Toolbar, Hidden } from '@material-ui/core'
import PageContentHeader from '../../../Components/common/PageContentHeader'
import RightContentNav from '../../../Components/layouts/RightContentNav'
import Wrapper from '../Wrapper'
import styles from '../css/styles.module.css'

const Punctuation = () => {
  const classes = useStyles()

  const headingIds = [
    'fragment-vrsus-sentences',
    'commas',
    'intonation-marks',
    'colon-and-quotation',
    'other-symbols',
    'spoken-punctuation',
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
              <p className={'large-heading'}>Punctuation </p>

              <p className={'text'}>
                <span className={styles.text_11}>
                  For quotation marks and similar punctuation, put a space
                  before the opening punctuation, but not necessarily after the
                  closing punctuation.{' '}
                </span>
              </p>
              <p className={styles.block_287}>
                Follow the punctuation regulations of your locale. Additional
                conventions are outlined in this section.{' '}
              </p>
              <div id="fragment-vrsus-sentences">
                <p className={'heading'}>Fragments versus sentences </p>
                <p className={'text'}>
                  Add punctuation where needed, but err on the side of keeping
                  it minimal.{' '}
                </p>
                <p className={styles.block_290}>
                  Sometimes a phrase which is not obviously grammatically a
                  sentence should nevertheless be treated as a sentence because
                  of its context, e.g. if it's an answer to a specific question,
                  or if it's an example where dropping the subject sounds
                  completely natural as a complete sentence.{' '}
                </p>
                <p className={styles.block_291}>
                  <span className={styles.text_13}>Correct: </span>
                  <span className={styles.text_14}>ဘယ သ ပ နတ လ ။ ဟ ဘ က ။ </span>
                  <span className={styles.text_15}>
                    Explanation: Two speakers. "
                  </span>
                  <span className={styles.text_16}>ဟ ဘ က ။</span>
                  <span className={styles.text_15}>" is an </span>
                </p>
                <p className={styles.block_292}>
                  answer to a specific question.{' '}
                </p>
                <p className={styles.block_293}>
                  <span className={styles.text_13}>Correct: </span>
                  <span className={styles.text_14}>ဟ ဘ က </span>
                  <span className={styles.text_15}>
                    Explanation: No context to suggest this is a{' '}
                  </span>
                </p>
                <p className={styles.block_292}>
                  sentence; treat as a fragment.{' '}
                </p>
                <p className={styles.block_294}>
                  <span className={styles.text_13}>Correct: </span>
                  <span className={styles.text_14}>မနက ဖန က အလ သ မ လ ။ </span>
                  <span className={styles.text_15}>
                    Explanation: Dropping the subject and main{' '}
                  </span>
                </p>
                <p className={styles.block_295}>
                  verb here sounds natural as a complete{' '}
                </p>
                <p className={styles.block_296}>
                  sentence. Punctuate as a sentence.{' '}
                </p>
                <p className={styles.block_297}>
                  <span className={styles.text_13}>Correct: </span>
                  <span className={styles.text_14}>ခ မ န စ နပ </span>
                  <span className={styles.text_15}>
                    Explanation: Sounds like a web search as{' '}
                  </span>
                </p>
                <p className={styles.block_298}>
                  opposed to a dropped subject. Treat as a{' '}
                </p>
                <p className={styles.block_299}>fragment. </p>
                <p className={styles.block_300}>
                  Interjections, greetings, and farewells said in isolation
                  should be considered complete sentences and punctuated as
                  such.{' '}
                </p>
                <p className={styles.block_301}>
                  <span className={styles.text_13}>Correct: </span>
                  <span className={styles.text_14}>သဟ။ </span>
                  <span className={styles.text_15}>
                    Explanation: interjection{' '}
                  </span>
                </p>
                <p className={styles.block_302}>
                  <span className={styles.text_13}>Correct: </span>
                  <span className={styles.text_14}>ဟ လ ။ </span>
                  <span className={styles.text_15}>Explanation: greeting </span>
                </p>
                <p className={styles.block_303}>
                  <span className={styles.text_13}>Correct: </span>
                  <span className={styles.text_14}>သ ပ ပ က ။ </span>
                  <span className={styles.text_15}>
                    Explanation: Entire phrase is being used as an{' '}
                  </span>
                </p>
                <p className={styles.block_304}>interjection. </p>
                <p className={styles.block_305}>
                  Add end punctuation to sentence fragments that sound like the
                  end of a sentence. For fragments that do not clearly sound
                  like the end of a sentence, leave out punctuation. Note that
                  sentence fragments may be a result of cut-off audio samples.{' '}
                </p>
                <p className={styles.block_306}>
                  <span className={styles.text_13}>Correct: </span>
                  <span className={styles.text_14}>ဘယ လ လ ပ မလ ။ တကယ လ မ </span>
                  <span className={styles.text_15}>
                    Explanation: Sentence-initial fragment ends{' '}
                  </span>
                </p>
                <p className={styles.block_307}>mid-stream. </p>
                <p className={styles.block_308}>
                  <span className={styles.text_13}>Correct: </span>
                  <span className={styles.text_14}>
                    ပ ဆ တ မ ။ အဓ ပ ယ တ မရ ဘ ။{' '}
                  </span>
                  <span className={styles.text_15}>
                    Explanation: Sentence-final fragment begins{' '}
                  </span>
                </p>
                <p className={styles.block_307}>mid-stream. </p>
                <p className={styles.block_309}>
                  <span className={styles.text_13}>Correct: </span>
                  <span className={styles.text_14}>
                    ဆ တ ပ ခက နရင သ မလ ပ န ။{' '}
                  </span>
                  <span className={styles.text_15}>
                    Explanation: Audio was cut off at the beginning.{' '}
                  </span>
                </p>
                <p className={styles.block_310}>
                  <span className={styles.text_4}>Correct: </span>
                  <span className={styles.text_5}>
                    လက ဘက ရည ဆ င သ လ က ဦ မယ ။ ခဏ လ{' '}
                  </span>
                </p>
                <p className={styles.block_311}>ဆရ လ က ဦ မလ ။ </p>
                <p className={styles.block_312}>
                  Explanation: Do not use a punctuation, hyphen,{' '}
                </p>
                <p className={styles.block_313}>
                  or ellipsis after a fragment even if another{' '}
                </p>
                <p className={styles.block_314}>sentence follows. </p>
                <p className={styles.block_315}>
                  <span className={styles.text_13}>Correct: </span>
                  <span className={styles.text_14}>
                    ဘယ က န ဘ ဖစ လ ဘယ လ က င{' '}
                  </span>
                  <span className={styles.text_15}>
                    Explanation: Both sound like beginnings of{' '}
                  </span>
                </p>
                <p className={styles.block_316}>sentences. </p>
                <p className={styles.block_317}>
                  <span className={styles.text_13}>Correct: </span>
                  <span className={styles.text_14}>ဘယ လ ဘယ လ ပန ပ ပ ဦ ။ </span>
                  <span className={styles.text_15}>
                    Explanation: Repeated beginning of the{' '}
                  </span>
                </p>
                <p className={styles.block_318}>sentence. </p>
                <p className={styles.block_319}>
                  <span className={styles.text_13}>Correct: </span>
                  <span className={styles.text_14}>ဆ ပမ တကယ တမ က တ </span>
                  <span className={styles.text_15}>
                    Explanation: Sounds like the middle of a{' '}
                  </span>
                </p>
                <p className={styles.block_320}>
                  sentence; beginning and end were cut off.{' '}
                </p>
                <p className={styles.block_321}>
                  <span className={styles.text_4}>Correct: </span>
                  <span className={styles.text_5}>က က န ခ က ရ ထ ပ ။ </span>
                </p>
                <p className={styles.block_322}>
                  <span className={styles.text_4}>Incorrect: </span>
                  <span className={styles.text_5}>က က န ခ က ရ ထ ပ ။ </span>
                </p>
                <p className={styles.block_323}>
                  <span className={styles.text_6}>Example audio: " </span>
                  <span className={styles.text_7}>က က န ခ က ရ ထ ပ </span>
                  <span className={styles.text_6}>" </span>
                </p>
                <p className={styles.block_324}>
                  Explanation: Burmese does not use a space{' '}
                </p>
                <p className={styles.block_325}>
                  between words. When two items are mentioned{' '}
                </p>
                <p className={styles.block_326}>
                  together, do not use a space between the first{' '}
                </p>
                <p className={styles.block_327}>
                  <span className={styles.text_4}>item and "</span>
                  <span className={styles.text_5}>န </span>
                  <span className={styles.text_4}>" or " </span>
                  <span className={styles.text_5}>င </span>
                  <span className={styles.text_4}>
                    ". Use a space only between{' '}
                  </span>
                </p>
                <p className={styles.block_328}>
                  <span className={styles.text_4}>"</span>
                  <span className={styles.text_5}>န </span>
                  <span className={styles.text_4}>" or " </span>
                  <span className={styles.text_5}>င </span>
                  <span className={styles.text_4}>" and second item. </span>
                </p>
                <p className={styles.block_329}>
                  If an utterance is not clearly a sentence according to the
                  above rules and examples, do not punctuate it as a sentence.{' '}
                </p>
              </div>
              <div id="commas">
                <p className={'heading'}>Commas </p>
                <p className={'text'}>
                  <span className={styles.text_4}>
                    Only use downward stroke "
                  </span>
                  <span className={styles.text_5}>၊</span>
                  <span className={styles.text_4}>
                    " where required. Err on the side of minimal punctuation. Do
                    not rely on intonation.{' '}
                  </span>
                </p>
                <p className={styles.block_332}>
                  <span className={styles.text_13}>Correct: </span>
                  <span className={styles.text_14}>
                    ဓ တ ဆ ဖည ဖ နရ က ဘယ န မ လ ။{' '}
                  </span>
                  <span className={styles.text_15}>
                    Explanation: Even if the speaker uses long{' '}
                  </span>
                </p>
                <p className={styles.block_333}>
                  pauses, do not use commas to show those{' '}
                </p>
                <p className={styles.block_334}>
                  pauses. There are places where commas are{' '}
                </p>
                <p className={styles.block_335}>
                  <span className={styles.text_4}>Incorrect: </span>
                  <span className={styles.text_5}>
                    ဓ တ ဆ ဖည ဖ ၊ နရ က၊ ဘယ န မ လ ။{' '}
                  </span>
                  <span className={styles.text_4}>
                    allowed or required, but this example contains{' '}
                  </span>
                </p>
                <p className={styles.block_336}>neither. </p>
                <p className={styles.block_337}>
                  <span className={styles.text_4}>Use a downward stroke "</span>
                  <span className={styles.text_5}>၊</span>
                  <span className={styles.text_4}>
                    " when a sentence begins with a discourse word,
                    interjection, or yes/no word. If there is a long pause
                    between a discourse word, interjection, or yes/no word and a
                    full sentence that follows it, treat that initial word as a
                    separate sentence.{' '}
                  </span>
                </p>
                <p className={styles.block_338}>
                  <span className={styles.text_13}>Correct: </span>
                  <span className={styles.text_14}>
                    သ ဓ က ယ ၊ က န မ ခ မ သ ပ စ။{' '}
                  </span>
                  <span className={styles.text_15}>
                    Explanation: Discourse word. Other examples of{' '}
                  </span>
                </p>
                <p className={styles.block_339}>
                  <span className={styles.text_4}>
                    discourse words in Burmese include "
                  </span>
                  <span className={styles.text_5}>ခင ဗ </span>
                  <span className={styles.text_4}>", </span>
                </p>
                <p className={styles.block_340}>
                  <span className={styles.text_4}>"</span>
                  <span className={styles.text_5}>တင ပ </span>
                  <span className={styles.text_4}>", "</span>
                  <span className={styles.text_5}>မ န လ ပ </span>
                  <span className={styles.text_4}>", and "</span>
                  <span className={styles.text_5}>ဟင အင </span>
                  <span className={styles.text_4}>". </span>
                </p>
                <p className={styles.block_341}>
                  <span className={styles.text_13}>Correct: </span>
                  <span className={styles.text_14}>အ က ယ ၊ လ လ က တ ။ </span>
                  <span className={styles.text_15}>
                    Explanation: Interjection. Other examples of{' '}
                  </span>
                </p>
                <p className={styles.block_342}>
                  <span className={styles.text_4}>interjections include "</span>
                  <span className={styles.text_5}>အ တ </span>
                  <span className={styles.text_4}>", "</span>
                  <span className={styles.text_5}>ဟ ဟ </span>
                  <span className={styles.text_4}>", </span>
                </p>
                <p className={styles.block_343}>
                  <span className={styles.text_4}>" </span>
                  <span className={styles.text_5}>မတ စ ဘ ရ </span>
                  <span className={styles.text_4}>", and others. </span>
                </p>
                <p className={styles.block_344}>
                  <span className={styles.text_13}>Correct: </span>
                  <span className={styles.text_14}>အ ၊ သ ပ တယ ။ </span>
                  <span className={styles.text_15}>
                    Explanation: yes/no word{' '}
                  </span>
                </p>
                <p className={styles.block_345}>
                  <span className={styles.text_13}>Correct: </span>
                  <span className={styles.text_14}>ဟ တ ပ ၊ လ ပ ပ မယ ။ </span>
                  <span className={styles.text_15}>
                    Explanation: yes/no word{' '}
                  </span>
                </p>
                <p className={styles.block_346}>
                  <span className={styles.text_13}>Correct: </span>
                  <span className={styles.text_14}>ဟ တ ပ ။ လ ပ ပ မယ ။ </span>
                  <span className={styles.text_15}>
                    Explanation: substantial pause after "
                  </span>
                  <span className={styles.text_16}>ဟ တ ပ </span>
                  <span className={styles.text_15}>" </span>
                </p>
                <p className={styles.block_347}>
                  <span className={styles.text_13}>Correct: </span>
                  <span className={styles.text_14}>
                    သ ဓ က ယ ။ က သ လ အမ က ရတ ပ ။{' '}
                  </span>
                  <span className={styles.text_15}>
                    Explanation: substantial pause after "
                  </span>
                  <span className={styles.text_16}>သ ဓ က ယ </span>
                  <span className={styles.text_15}>" </span>
                </p>
                <p className={styles.block_348}>
                  <span className={styles.text_4}>Correct: </span>
                  <span className={styles.text_5}>
                    ဇ က က ရယ ၊ ပစ တ င ထ င ရယ ၊ ဖ ဝ ပ ရယ{' '}
                  </span>
                </p>
                <p className={styles.block_349}>အက န ဝယ ခ ။ </p>
                <p className={styles.block_350}>
                  <span className={styles.text_4}>Incorrect: </span>
                  <span className={styles.text_5}>
                    ဇ က က ရယ ပစ တ င ထ င ရယ ဖ ဝ ပ ရယ{' '}
                  </span>
                </p>
                <p className={styles.block_351}>အက န ဝယ ခ ။ </p>
                <p className={styles.block_352}>
                  Explanation: A series of items shall be{' '}
                </p>
                <p className={styles.block_353}>
                  <span className={styles.text_4}>
                    separated by little section sign "
                  </span>
                  <span className={styles.text_5}>၊</span>
                  <span className={styles.text_4}>". </span>
                </p>
                <p className={styles.block_354}>
                  <span className={styles.text_4}>
                    Except in greetings, sentence-initial and sentence-final
                    addressees should be separated by downward stroke "
                  </span>
                  <span className={styles.text_5}>၊</span>
                  <span className={styles.text_4}>". </span>
                </p>
                <p className={styles.block_355}>
                  <span className={styles.text_4}>Correct: </span>
                  <span className={styles.text_5}>မ မ၊ သ အ မ စ ပ လ တယ ။ </span>
                </p>
                <p className={styles.block_356}>
                  <span className={styles.text_4}>Incorrect: </span>
                  <span className={styles.text_5}>မ မ။ သ အ မ စ ပ လ တယ ။ </span>
                </p>
                <p className={styles.block_357}>
                  The phrase "Ok Google" in isolation is transcribed without a
                  comma or end punctuation. When the phrase appears before
                  longer utterances, place a comma after "Google".{' '}
                </p>
                <p className={styles.block_358}>Correct: Ok Google </p>
                <p className={styles.block_359}>
                  <span className={styles.text_4}>Incorrect: </span>
                  <span className={styles.text_5}>အ က၊ ဂ ဂ ။ </span>
                </p>
                <p className={styles.block_360}>
                  <span className={styles.text_13}>Correct: Ok Google, </span>
                  <span className={styles.text_14}>သ လ င ပင ပ ပ </span>
                  <span className={styles.text_15}>
                    Explanation: Always use a comma "," after{' '}
                  </span>
                </p>
                <p className={styles.block_361}>
                  Google even when followed by an utterance in{' '}
                </p>
                <p className={styles.block_299}>Burmese. </p>
                <p className={styles.block_362}>
                  <span className={styles.text_4}>Correct: Ok Google, </span>
                  <span className={styles.text_5}>က င အ ပ က လ ပ စ ပပ ။ </span>
                </p>
                <p className={styles.block_363}>
                  <span className={styles.text_4}>
                    Correct: Ok Google, Saint Patric Day{' '}
                  </span>
                  <span className={styles.text_5}>ဆ တ </span>
                </p>
                <p className={styles.block_364}>ဘ လ ။ </p>
              </div>
              <div id="intonation-marks">
                <p className={styles.block_365}>Intonation marks </p>
                <p className={styles.block_366}>
                  Questions should be punctuated as sentences. In the case of a
                  question in another language (English for instance), the
                  sentence should be capitalized and punctuated with a question
                  mark.{' '}
                </p>
                <p className={styles.block_367}>
                  <span className={styles.text_13}>Correct: </span>
                  <span className={styles.text_14}>သခ တယ လ ။ </span>
                  <span className={styles.text_15}>Explanation: "</span>
                  <span className={styles.text_16}>လ </span>
                  <span className={styles.text_15}>
                    " is a question word in{' '}
                  </span>
                </p>
                <p className={styles.block_368}>Burmese. </p>
                <p className={styles.block_369}>
                  <span className={styles.text_13}>Correct: </span>
                  <span className={styles.text_14}>မနက ၃</span>
                  <span className={styles.text_13}>:</span>
                  <span className={styles.text_14}>၀၀ လ ။ </span>
                  <span className={styles.text_15}>
                    Explanation: Regardless of rising tone, it is{' '}
                  </span>
                </p>
                <p className={styles.block_370}>
                  most likely a question when an utterance ends{' '}
                </p>
                <p className={styles.block_371}>
                  <span className={styles.text_4}>with "</span>
                  <span className={styles.text_5}>လ </span>
                  <span className={styles.text_4}>". </span>
                </p>
                <p className={styles.block_372}>
                  <span className={styles.text_4}>
                    Exclamation marks should not be used in Burmese script. Use
                    a double downward stroke "
                  </span>
                  <span className={styles.text_5}>။</span>
                  <span className={styles.text_4}>
                    " even if the speaker uses an exclamatory intonation.{' '}
                  </span>
                </p>
                <p className={styles.block_373}>
                  <span className={styles.text_13}>Correct: </span>
                  <span className={styles.text_14}>ဟ ။ </span>
                  <span className={styles.text_15}>
                    Explanation: Speaker sounds enthusiastic.{' '}
                  </span>
                </p>
                <p className={styles.block_360}>
                  <span className={styles.text_13}>Correct: </span>
                  <span className={styles.text_14}>ဟ ။ </span>
                  <span className={styles.text_15}>
                    Explanation: Speaker sounds unenthused.{' '}
                  </span>
                </p>
              </div>
              <div id="colon-and-quotation">
                <p className={'heading'}>Colon and quotation </p>
                <p className={'text'}>
                  Do not put punctuation between reported speech verbs and
                  direct quotations. Do not put punctuation within quotation
                  marks unless the punctuation belongs to the reported speech.{' '}
                </p>
                <p className={styles.block_376}>
                  <span className={styles.text_4}>Correct: </span>
                  <span className={styles.text_5}>သ ဇ က </span>
                  <span className={styles.text_4}>" </span>
                  <span className={styles.text_5}>ပည က သ လည မယ </span>
                  <span className={styles.text_4}>" </span>
                  <span className={styles.text_5}>တ ။ </span>
                </p>
                <p className={styles.block_377}>
                  <span className={styles.text_4}>Incorrect: </span>
                  <span className={styles.text_5}>သ ဇ က၊ </span>
                  <span className={styles.text_4}>" </span>
                  <span className={styles.text_5}>ပည က သ လည မယ </span>
                  <span className={styles.text_4}>" </span>
                  <span className={styles.text_5}>တ ။ </span>
                </p>
                <p className={styles.block_378}>
                  <span className={styles.text_4}>Incorrect: </span>
                  <span className={styles.text_5}>သ ဇ က </span>
                  <span className={styles.text_4}>" </span>
                  <span className={styles.text_5}>ပည က သ လည မယ ။</span>
                  <span className={styles.text_4}>" </span>
                  <span className={styles.text_5}>တ ။ </span>
                </p>
                <p className={styles.block_379}>
                  <span className={styles.text_4}>Incorrect: </span>
                  <span className={styles.text_5}>သ ဇ က </span>
                  <span className={styles.text_4}>- " </span>
                  <span className={styles.text_5}>ပည က သ လည မယ </span>
                  <span className={styles.text_4}>" </span>
                  <span className={styles.text_5}>တ ။ </span>
                </p>
                <p className={styles.block_380}>
                  <span className={styles.text_4}>Explanation: The word "</span>
                  <span className={styles.text_5}>တ </span>
                  <span className={styles.text_4}>" is the most common </span>
                </p>
                <p className={styles.block_381}>
                  reported speech particle in Burmese, but other{' '}
                </p>
                <p className={styles.block_382}>
                  <span className={styles.text_4}>words such as "</span>
                  <span className={styles.text_5}>ဆ ပ </span>
                  <span className={styles.text_4}>", " </span>
                  <span className={styles.text_5}>ပ တယ </span>
                  <span className={styles.text_4}>", "</span>
                  <span className={styles.text_5}>လ </span>
                  <span className={styles.text_4}>" can be used </span>
                </p>
                <p className={styles.block_383}>
                  for reported speech. No need to use comma or{' '}
                </p>
                <p className={styles.block_384}>
                  section sign before quotation.{' '}
                </p>
                <p className={styles.block_385}>
                  <span className={styles.text_4}>Correct: " </span>
                  <span className={styles.text_5}>က အ သ စ မယ </span>
                  <span className={styles.text_4}>" </span>
                  <span className={styles.text_5}>လ ပ ။ </span>
                </p>
                <p className={styles.block_386}>
                  <span className={styles.text_4}>Incorrect: " </span>
                  <span className={styles.text_5}>က အ သ စ မယ ။</span>
                  <span className={styles.text_4}>" </span>
                  <span className={styles.text_5}>လ ပ ။ </span>
                </p>
                <p className={styles.block_387}>
                  Explanation: Do not punctuate if the quotation{' '}
                </p>
                <p className={styles.block_388}>is only one word. </p>
                <p className={styles.block_389}>
                  If the text in quotation marks qualifies as a sentence,
                  punctuate as if it were its own utterance. Do not alter its
                  end punctuation even if the quote is within a sentence. Do not
                  add excess punctuation after end quotation marks.{' '}
                </p>
                <p className={styles.block_390}>
                  <span className={styles.text_4}>Correct: </span>
                  <span className={styles.text_5}>အဘက ဆ သည မ </span>
                  <span className={styles.text_4}>"</span>
                  <span className={styles.text_5}>သ သရ င မ စသတည ။</span>
                  <span className={styles.text_4}>" </span>
                </p>
                <p className={styles.block_391}>
                  <span className={styles.text_4}>Incorrect: </span>
                  <span className={styles.text_5}>အဘက ဆ သည မ </span>
                  <span className={styles.text_4}>"</span>
                  <span className={styles.text_5}>သ သရ </span>
                </p>
                <p className={styles.block_392}>
                  <span className={styles.text_5}>င မ စသတည ။</span>
                  <span className={styles.text_4}>"</span>
                  <span className={styles.text_5}>။ </span>
                </p>
                <p className={styles.block_393}>
                  Explanation: Text in quotation marks qualifies{' '}
                </p>
                <p className={styles.block_394}>as a sentence. </p>
                <p className={styles.block_395}>
                  <span className={styles.text_4}>Correct: </span>
                  <span className={styles.text_5}>မ မက မ တ </span>
                  <span className={styles.text_4}>"</span>
                  <span className={styles.text_5}>၃ န ရ ဆ မ လ ။</span>
                  <span className={styles.text_4}>" </span>
                </p>
                <p className={styles.block_396}>
                  <span className={styles.text_4}>Incorrect: </span>
                  <span className={styles.text_5}>မ မက မ တ ၊ </span>
                  <span className={styles.text_4}>"</span>
                  <span className={styles.text_5}>၃ န ရ ဆ မ လ ။</span>
                  <span className={styles.text_4}>"</span>
                  <span className={styles.text_5}>။ </span>
                </p>
                <p className={styles.block_397}>
                  <span className={styles.text_4}>Incorrect: </span>
                  <span className={styles.text_5}>မ မက မ တ ၊ </span>
                  <span className={styles.text_4}>"</span>
                  <span className={styles.text_5}>၃ န ရ ဆ မ လ ။</span>
                  <span className={styles.text_4}>" </span>
                </p>
                <p className={styles.block_393}>
                  Explanation: Text in quotation marks qualifies{' '}
                </p>
                <p className={styles.block_398}>
                  as a sentence. Do not add excess punctuation.{' '}
                </p>
                <p className={styles.block_399}>
                  Do not put a comma or section sign before the{' '}
                </p>
                <p className={styles.block_400}>quotation. </p>
                <p className={styles.block_401}>
                  <span className={styles.text_4}>Correct: </span>
                  <span className={styles.text_5}>စ ပ လ က တ </span>
                  <span className={styles.text_4}>"</span>
                  <span className={styles.text_5}>ဟ ရ က မ တ မယ ။</span>
                  <span className={styles.text_4}>" </span>
                </p>
                <p className={styles.block_402}>
                  <span className={styles.text_4}>Incorrect: </span>
                  <span className={styles.text_5}>စ က ပ လ က တ ၊ </span>
                  <span className={styles.text_4}>"</span>
                  <span className={styles.text_5}>ဟ ရ က မ တ မယ ။</span>
                  <span className={styles.text_4}>" </span>
                </p>
                <p className={styles.block_403}>။ </p>
                <p className={styles.block_393}>
                  Explanation: Text in quotation marks qualifies{' '}
                </p>
                <p className={styles.block_398}>
                  as a sentence. Do not add excess punctuation.{' '}
                </p>
                <p className={styles.block_399}>
                  Do not put a comma or section sign before the{' '}
                </p>
                <p className={styles.block_400}>quotation. </p>
                <p className={styles.block_404}>
                  <span className={styles.text_4}>Correct: </span>
                  <span className={styles.text_5}>တဇ က </span>
                  <span className={styles.text_4}>"</span>
                  <span className={styles.text_5}>ရန က န ဆင လ မယ ။</span>
                  <span className={styles.text_4}>" </span>
                  <span className={styles.text_5}>ဆ ပ </span>
                </p>
                <p className={styles.block_405}>န ရက အတ အက မ ပ ဘ ။ </p>
                <p className={styles.block_393}>
                  Explanation: Text in quotation marks qualifies{' '}
                </p>
                <p className={styles.block_406}>as a sentence. </p>
                <p className={styles.block_407}>
                  <span className={styles.text_4}>Correct: "</span>
                  <span className={styles.text_5}>
                    ကစ ရမယ ။ စ က က ရမယ ။ မ ဘက{' '}
                  </span>
                </p>
                <p className={styles.block_408}>
                  <span className={styles.text_5}>က ည ရမယ ။</span>
                  <span className={styles.text_4}>" </span>
                  <span className={styles.text_5}>ဟ ဆရ ကဆ သည ။ </span>
                </p>
                <p className={styles.block_409}>
                  Use a hyphen in quotative voice actions when the quote follows
                  the command. Use quotation marks when the quote is in the
                  middle of the sentence.{' '}
                </p>
                <p className={styles.block_410}>
                  <span className={styles.text_13}>Correct: </span>
                  <span className={styles.text_14}>ပင သစ ဘ သ ပန ရန </span>
                  <span className={styles.text_13}>- </span>
                  <span className={styles.text_14}>န က င လ ။ </span>
                  <span className={styles.text_15}>
                    Explanation: The quote follows the command,{' '}
                  </span>
                </p>
                <p className={styles.block_411}>
                  so use a hyphen not quotation marks.{' '}
                </p>
                <p className={styles.block_346}>
                  <span className={styles.text_13}>Correct: " </span>
                  <span className={styles.text_14}>န က င လ </span>
                  <span className={styles.text_13}>" </span>
                  <span className={styles.text_14}>က ပင သစ ဘ သ သ ပန ပ ။ </span>
                  <span className={styles.text_15}>
                    Explanation: The quote is in the middle of a{' '}
                  </span>
                </p>
                <p className={styles.block_412}>
                  sentence, so use quotation marks not a{' '}
                </p>
                <p className={styles.block_413}>hyphen. </p>
                <p className={styles.block_414}>
                  <span className={styles.text_4}>Correct: </span>
                  <span className={styles.text_5}>ပင သစ လ </span>
                  <span className={styles.text_4}>"</span>
                  <span className={styles.text_5}>ခ စ တယ </span>
                  <span className={styles.text_4}>" </span>
                  <span className={styles.text_5}>လ ဘယ လ ပ မလ ။ </span>
                </p>
                <p className={styles.block_415}>
                  <span className={styles.text_4}>Incorrect: </span>
                  <span className={styles.text_5}>ပင သစ လ </span>
                  <span className={styles.text_4}>- "</span>
                  <span className={styles.text_5}>ခ စ တယ </span>
                  <span className={styles.text_4}>" </span>
                  <span className={styles.text_5}>လ ဘယ လ ပ မလ ။ </span>
                </p>
                <p className={styles.block_416}>
                  <span className={styles.text_4}>
                    Explanation: Do not use a hyphen after "{' '}
                  </span>
                  <span className={styles.text_5}>ပ </span>
                  <span className={styles.text_4}>" </span>
                </p>
                <p className={styles.block_417}>
                  verbs in translation requests.{' '}
                </p>
                <p className={styles.block_418}>
                  <span className={styles.text_4}>
                    Correct: example@gmail.com{' '}
                  </span>
                  <span className={styles.text_5}>သ </span>
                  <span className={styles.text_4}>- </span>
                  <span className={styles.text_5}>ဟ ၊ </span>
                </p>
                <p className={styles.block_419}>န က င ကလ ။ </p>
                <p className={styles.block_420}>
                  <span className={styles.text_4}>
                    Correct: example@gmail.com{' '}
                  </span>
                  <span className={styles.text_5}>ဆ က </span>
                  <span className={styles.text_4}>" </span>
                  <span className={styles.text_5}>ဟ ၊ </span>
                </p>
                <p className={styles.block_421}>
                  <span className={styles.text_5}>န က င ကလ </span>
                  <span className={styles.text_4}>" </span>
                  <span className={styles.text_5}>လ စ ပ လ က ။ </span>
                </p>
                <p className={styles.block_422}>
                  Do not use quotation marks for metalinguistic uses of words or
                  phrases. These uses include defining the word, talking about
                  the spelling of the word, or any other type of reference to
                  the word itself as a thing.{' '}
                </p>
              </div>
              <div id="other-symbols">
                <p className={'heading'}>Other symbols </p>
                <p className={'text'}>
                  <span className={styles.text_4}>
                    Apart from the Burmese letters and the Latin letters a
                    through z, you should not use any other symbol than: 0-9{' '}
                  </span>
                  <span className={styles.text_5}>၀</span>
                  <span className={styles.text_4}>-</span>
                  <span className={styles.text_5}>၉ </span>
                  <span className={styles.text_4}>
                    äâàáāçčćđéèéëêēïîíīñóôöüőōšûùúűūÿȳžÄÂÀÁĀÇČĆĐÉÈÉËÊĒÏÎÍĪÑÓÔÖŌŠÜÛÙÚŪŸȲŽ23,?
                    !~^\'"_°:.()&lt;&gt;{}[]√/@#$€£+=%*&amp;-.;{' '}
                  </span>
                </p>
              </div>
              <div id="spoken-punctuation">
                <p className={'heading'}>Spoken punctuation </p>
                <p className={'text'}>
                  For sentence-level spoken punctuation, write out the full word
                  or words between curly brackets. Do not add punctuation
                  symbols after spoken punctuation. Be careful with homonyms.
                  (See exceptions in the next rule.){' '}
                </p>
                <p className={styles.block_426}>
                  Correct: Okay {`{dot} {dot} {dot}`}{' '}
                </p>
                <p className={styles.block_427}>Incorrect: Okay... </p>
                <p className={styles.block_428}>
                  <span className={styles.text_}>Example audio: " </span>
                  <span className={styles.text_1}>okay dot dot dot </span>
                  <span className={styles.text_}>" </span>
                </p>
                <p className={styles.block_429}>
                  <span className={styles.text_17}>Example </span>
                  <span className={styles.text_13}>Correct: </span>
                  <span className={styles.text_14}>ဇ ဇဝ </span>
                  <span className={styles.text_13}>{`{`}</span>
                  <span className={styles.text_14}>ပ ဒ က လ </span>
                  <span className={styles.text_13}>{`}`} </span>
                  <span className={styles.text_14}>ခတ </span>
                  <span className={styles.text_13}>{`{`}</span>
                  <span className={styles.text_14}>ပ ဒ က လ </span>
                  <span className={styles.text_13}>{`}`} </span>
                  <span className={styles.text_14}>ပ န ညက </span>
                </p>
                <p className={styles.block_430}>
                  <span className={styles.text_6}>audio: " </span>
                  <span className={styles.text_7}>
                    ဇ ဇဝ ပ ဒ က လ ခတ ပ ဒ က လ{' '}
                  </span>
                </p>
                <p className={styles.block_431}>
                  <span className={styles.text_5}>ဝယ လ ပ </span>
                  <span className={styles.text_4}>{`{`}</span>
                  <span className={styles.text_5}>ပ ဒ မ</span>
                  <span className={styles.text_4}>{`}`} </span>
                </p>
                <p className={styles.block_432}>
                  <span className={styles.text_7}>ပ န ညက ဝယ လ ပ ပ ဒ မ </span>
                  <span className={styles.text_6}>" </span>
                </p>
                <p className={styles.block_433}>
                  <span className={styles.text_4}>Incorrect: </span>
                  <span className={styles.text_5}>
                    ဇ ဇဝ ၊ ခတ ၊ ပ န ညက ဝယ လ ပ ။{' '}
                  </span>
                </p>
                <p className={styles.block_434}>
                  <span className={styles.text_4}>Correct: </span>
                  <span className={styles.text_5}>ဦ ဘ န င </span>
                  <span className={styles.text_4}>{`{`}</span>
                  <span className={styles.text_5}>က င စ</span>
                  <span className={styles.text_4}>{`}`} </span>
                  <span className={styles.text_5}>တက သ လ </span>
                  <span className={styles.text_4}>{`{`}</span>
                  <span className={styles.text_5}>က င ပ </span>
                  <span className={styles.text_4}>{`}`} </span>
                </p>
                <p className={styles.block_435}>
                  <span className={styles.text_4}>Incorrect: </span>
                  <span className={styles.text_5}>ဦ ဘ န င </span>
                  <span className={styles.text_4}>(</span>
                  <span className={styles.text_5}>တက သ လ </span>
                  <span className={styles.text_4}>) </span>
                </p>
                <p className={styles.block_436}>
                  <span className={styles.text_6}>Example audio: " </span>
                  <span className={styles.text_7}>
                    ဦ ဘ န င က င စ တက သ လ က င ပ တ{' '}
                  </span>
                  <span className={styles.text_6}>" </span>
                </p>
                <p className={styles.block_437}>Correct: {`{smiley face}`} </p>
                <p className={styles.block_438}>Incorrect: :-) </p>
                <p className={styles.block_439}>Incorrect: smiley face </p>
                <p className={styles.block_440}>
                  <span className={styles.text_}>Example audio: " </span>
                  <span className={styles.text_1}>smiley face </span>
                  <span className={styles.text_}>" </span>
                </p>
                <p className={styles.block_441}>
                  Don't spell out internal punctuation like hyphens in web
                  pages, email addresses, addresses, phone numbers, or other
                  word-level punctuation.{' '}
                </p>
                <p className={styles.block_442}>
                  <span className={styles.text_4}>Correct: </span>
                  <span className={styles.text_5}>အခန န ပ တ ၉၈</span>
                  <span className={styles.text_4}>/</span>
                  <span className={styles.text_5}>၉၉ </span>
                </p>
                <p className={styles.block_443}>
                  <span className={styles.text_4}>Incorrect: </span>
                  <span className={styles.text_5}>အခန န ပ တ ၉၈ မ စ င ၉၉ </span>
                </p>
                <p className={styles.block_444}>
                  <span className={styles.text_6}>Example audio: " </span>
                  <span className={styles.text_7}>
                    အခန န ပ တ က ဆယ ရ စ မ စ င{' '}
                  </span>
                </p>
                <p className={styles.block_445}>
                  <span className={styles.text_7}>က ဆယ က </span>
                  <span className={styles.text_6}>" </span>
                </p>
                <p className={styles.block_446}>Correct: www.abc.com </p>
                <p className={styles.block_447}>
                  Incorrect: www {`{dot}`} abc{` {dot}`} com{' '}
                </p>
                <p className={styles.block_448}>
                  <span className={styles.text_6}>Example audio: " </span>
                  <span className={styles.text_7}>ဒဘလ ဒဘလ ဒဘလ ဒ </span>
                </p>
                <p className={styles.block_449}>
                  <span className={styles.text_7}>အဘ စ ဒ က န </span>
                  <span className={styles.text_6}>" </span>
                </p>
                <p className={styles.block_450}>
                  <span className={styles.text_4}>Correct: </span>
                  <span className={styles.text_5}>သ က ဆရ ဝန </span>
                  <span className={styles.text_4}>/</span>
                  <span className={styles.text_5}>အဆ တ </span>
                  <span className={styles.text_4}>/</span>
                  <span className={styles.text_5}>စ ရ ဆရ ။ </span>
                </p>
                <p className={styles.block_451}>
                  <span className={styles.text_4}>Incorrect: </span>
                  <span className={styles.text_5}>သ က ဆရ ဝန </span>
                  <span className={styles.text_4}>{`{`}</span>
                  <span className={styles.text_5}>မ စ င </span>
                  <span className={styles.text_4}>{`}`} </span>
                  <span className={styles.text_5}>အဆ တ </span>
                </p>
                <p className={styles.block_452}>
                  <span className={styles.text_4}>{`{`}</span>
                  <span className={styles.text_5}>မ စ င </span>
                  <span className={styles.text_4}>{`}`} </span>
                  <span className={styles.text_5}>စ ရ ဆရ ။ </span>
                </p>
                <p className={styles.block_453}>
                  <span className={styles.text_6}>Example audio: " </span>
                  <span className={styles.text_7}>
                    သ က ဆရ ဝန မ စ င အဆ တ မ စ င စ ရ ဆရ{' '}
                  </span>
                  <span className={styles.text_6}>" </span>
                </p>
                <p className={styles.block_454}>
                  Explanation: Slash is a word-level punctuation.{' '}
                </p>
                <p className={styles.block_455}>
                  <span className={styles.text_4}>Correct: </span>
                  <span className={styles.text_5}>ယ န ပတ ၄က</span>
                  <span className={styles.text_4}>/</span>
                  <span className={styles.text_5}>၅၈၇၂ </span>
                </p>
                <p className={styles.block_456}>
                  <span className={styles.text_4}>Incorrect: </span>
                  <span className={styles.text_5}>ယ န ပ တ ၄က မ စ င ၅၈၇၂ </span>
                </p>
                <p className={styles.block_457}>
                  <span className={styles.text_6}>Example audio: " </span>
                  <span className={styles.text_7}>
                    ယ န ပ တ လ က က မ စ င င ရ စ ခ န စ{' '}
                  </span>
                  <span className={styles.text_6}>" </span>
                </p>
                <br />
                <p className={styles.block_458}>
                  If a word that can refer to a punctuation mark is spoken in
                  isolation, it should be written out between curly brackets.{' '}
                </p>
                <p className={styles.block_459}>
                  <span className={styles.text_4}>Correct: {`{`}</span>
                  <span className={styles.text_5}>ပ ဒ မ</span>
                  <span className={styles.text_4}>{`}`} </span>
                </p>
                <p className={styles.block_460}>
                  <span className={styles.text_4}>Correct:{` {`}</span>
                  <span className={styles.text_5}>က င စက င ပ တ </span>
                  <span className={styles.text_4}>{`}`} </span>
                </p>
                <p className={styles.block_461}>
                  <span className={styles.text_4}>Correct:{` {`}</span>
                  <span className={styles.text_5}>မ စ င </span>
                  <span className={styles.text_4}>{`}`} </span>
                </p>
              </div>
            </div>
          </Paper>
        </Grid>
        <Hidden smDown>
          <Grid sm={3} item className={classes.rightNav}>
            <RightContentNav title="Punctuation" headingIds={headingIds} />
          </Grid>
        </Hidden>
      </Grid>
    </Wrapper>
  )
}

export default Punctuation

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
