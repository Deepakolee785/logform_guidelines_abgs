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
              <p class="text_12">Punctuation </p>

              <p class="block_286">
                <span class="text_11">
                  For quotation marks and similar punctuation, put a space
                  before the opening punctuation, but not necessarily after the
                  closing punctuation.{' '}
                </span>
              </p>
              <p class="block_287">
                Follow the punctuation regulations of your locale. Additional
                conventions are outlined in this section.{' '}
              </p>
              <p class="block_288">Fragments versus sentences </p>
              <p class="block_289">
                Add punctuation where needed, but err on the side of keeping it
                minimal.{' '}
              </p>
              <p class="block_290">
                Sometimes a phrase which is not obviously grammatically a
                sentence should nevertheless be treated as a sentence because of
                its context, e.g. if it's an answer to a specific question, or
                if it's an example where dropping the subject sounds completely
                natural as a complete sentence.{' '}
              </p>
              <p class="block_291">
                <span class="text_13">Correct: </span>
                <span class="text_14">ဘယ သ ပ နတ လ ။ ဟ ဘ က ။ </span>
                <span class="text_15">Explanation: Two speakers. "</span>
                <span class="text_16">ဟ ဘ က ။</span>
                <span class="text_15">" is an </span>
              </p>
              <p class="block_292">answer to a specific question. </p>
              <p class="block_293">
                <span class="text_13">Correct: </span>
                <span class="text_14">ဟ ဘ က </span>
                <span class="text_15">
                  Explanation: No context to suggest this is a{' '}
                </span>
              </p>
              <p class="block_292">sentence; treat as a fragment. </p>
              <p class="block_294">
                <span class="text_13">Correct: </span>
                <span class="text_14">မနက ဖန က အလ သ မ လ ။ </span>
                <span class="text_15">
                  Explanation: Dropping the subject and main{' '}
                </span>
              </p>
              <p class="block_295">verb here sounds natural as a complete </p>
              <p class="block_296">sentence. Punctuate as a sentence. </p>
              <p class="block_297">
                <span class="text_13">Correct: </span>
                <span class="text_14">ခ မ န စ နပ </span>
                <span class="text_15">
                  Explanation: Sounds like a web search as{' '}
                </span>
              </p>
              <p class="block_298">opposed to a dropped subject. Treat as a </p>
              <p class="block_299">fragment. </p>
              <p class="block_300">
                Interjections, greetings, and farewells said in isolation should
                be considered complete sentences and punctuated as such.{' '}
              </p>
              <p class="block_301">
                <span class="text_13">Correct: </span>
                <span class="text_14">သဟ။ </span>
                <span class="text_15">Explanation: interjection </span>
              </p>
              <p class="block_302">
                <span class="text_13">Correct: </span>
                <span class="text_14">ဟ လ ။ </span>
                <span class="text_15">Explanation: greeting </span>
              </p>
              <p class="block_303">
                <span class="text_13">Correct: </span>
                <span class="text_14">သ ပ ပ က ။ </span>
                <span class="text_15">
                  Explanation: Entire phrase is being used as an{' '}
                </span>
              </p>
              <p class="block_304">interjection. </p>
              <p class="block_305">
                Add end punctuation to sentence fragments that sound like the
                end of a sentence. For fragments that do not clearly sound like
                the end of a sentence, leave out punctuation. Note that sentence
                fragments may be a result of cut-off audio samples.{' '}
              </p>
              <p class="block_306">
                <span class="text_13">Correct: </span>
                <span class="text_14">ဘယ လ လ ပ မလ ။ တကယ လ မ </span>
                <span class="text_15">
                  Explanation: Sentence-initial fragment ends{' '}
                </span>
              </p>
              <p class="block_307">mid-stream. </p>
              <p class="block_308">
                <span class="text_13">Correct: </span>
                <span class="text_14">ပ ဆ တ မ ။ အဓ ပ ယ တ မရ ဘ ။ </span>
                <span class="text_15">
                  Explanation: Sentence-final fragment begins{' '}
                </span>
              </p>
              <p class="block_307">mid-stream. </p>
              <p class="block_309">
                <span class="text_13">Correct: </span>
                <span class="text_14">ဆ တ ပ ခက နရင သ မလ ပ န ။ </span>
                <span class="text_15">
                  Explanation: Audio was cut off at the beginning.{' '}
                </span>
              </p>
              <p class="block_310">
                <span class="text_4">Correct: </span>
                <span class="text_5">လက ဘက ရည ဆ င သ လ က ဦ မယ ။ ခဏ လ </span>
              </p>
              <p class="block_311">ဆရ လ က ဦ မလ ။ </p>
              <p class="block_312">
                Explanation: Do not use a punctuation, hyphen,{' '}
              </p>
              <p class="block_313">
                or ellipsis after a fragment even if another{' '}
              </p>
              <p class="block_314">sentence follows. </p>
              <p class="block_315">
                <span class="text_13">Correct: </span>
                <span class="text_14">ဘယ က န ဘ ဖစ လ ဘယ လ က င </span>
                <span class="text_15">
                  Explanation: Both sound like beginnings of{' '}
                </span>
              </p>
              <p class="block_316">sentences. </p>
              <p class="block_317">
                <span class="text_13">Correct: </span>
                <span class="text_14">ဘယ လ ဘယ လ ပန ပ ပ ဦ ။ </span>
                <span class="text_15">
                  Explanation: Repeated beginning of the{' '}
                </span>
              </p>
              <p class="block_318">sentence. </p>
              <p class="block_319">
                <span class="text_13">Correct: </span>
                <span class="text_14">ဆ ပမ တကယ တမ က တ </span>
                <span class="text_15">
                  Explanation: Sounds like the middle of a{' '}
                </span>
              </p>
              <p class="block_320">
                sentence; beginning and end were cut off.{' '}
              </p>
              <p class="block_321">
                <span class="text_4">Correct: </span>
                <span class="text_5">က က န ခ က ရ ထ ပ ။ </span>
              </p>
              <p class="block_322">
                <span class="text_4">Incorrect: </span>
                <span class="text_5">က က န ခ က ရ ထ ပ ။ </span>
              </p>
              <p class="block_323">
                <span class="text_6">Example audio: " </span>
                <span class="text_7">က က န ခ က ရ ထ ပ </span>
                <span class="text_6">" </span>
              </p>
              <p class="block_324">
                Explanation: Burmese does not use a space{' '}
              </p>
              <p class="block_325">
                between words. When two items are mentioned{' '}
              </p>
              <p class="block_326">
                together, do not use a space between the first{' '}
              </p>
              <p class="block_327">
                <span class="text_4">item and "</span>
                <span class="text_5">န </span>
                <span class="text_4">" or " </span>
                <span class="text_5">င </span>
                <span class="text_4">". Use a space only between </span>
              </p>
              <p class="block_328">
                <span class="text_4">"</span>
                <span class="text_5">န </span>
                <span class="text_4">" or " </span>
                <span class="text_5">င </span>
                <span class="text_4">" and second item. </span>
              </p>
              <p class="block_329">
                If an utterance is not clearly a sentence according to the above
                rules and examples, do not punctuate it as a sentence.{' '}
              </p>
              <p class="block_330">Commas </p>
              <p class="block_331">
                <span class="text_4">Only use downward stroke "</span>
                <span class="text_5">၊</span>
                <span class="text_4">
                  " where required. Err on the side of minimal punctuation. Do
                  not rely on intonation.{' '}
                </span>
              </p>
              <p class="block_332">
                <span class="text_13">Correct: </span>
                <span class="text_14">ဓ တ ဆ ဖည ဖ နရ က ဘယ န မ လ ။ </span>
                <span class="text_15">
                  Explanation: Even if the speaker uses long{' '}
                </span>
              </p>
              <p class="block_333">pauses, do not use commas to show those </p>
              <p class="block_334">
                pauses. There are places where commas are{' '}
              </p>
              <p class="block_335">
                <span class="text_4">Incorrect: </span>
                <span class="text_5">ဓ တ ဆ ဖည ဖ ၊ နရ က၊ ဘယ န မ လ ။ </span>
                <span class="text_4">
                  allowed or required, but this example contains{' '}
                </span>
              </p>
              <p class="block_336">neither. </p>
              <p class="block_337">
                <span class="text_4">Use a downward stroke "</span>
                <span class="text_5">၊</span>
                <span class="text_4">
                  " when a sentence begins with a discourse word, interjection,
                  or yes/no word. If there is a long pause between a discourse
                  word, interjection, or yes/no word and a full sentence that
                  follows it, treat that initial word as a separate sentence.{' '}
                </span>
              </p>
              <p class="block_338">
                <span class="text_13">Correct: </span>
                <span class="text_14">သ ဓ က ယ ၊ က န မ ခ မ သ ပ စ။ </span>
                <span class="text_15">
                  Explanation: Discourse word. Other examples of{' '}
                </span>
              </p>
              <p class="block_339">
                <span class="text_4">discourse words in Burmese include "</span>
                <span class="text_5">ခင ဗ </span>
                <span class="text_4">", </span>
              </p>
              <p class="block_340">
                <span class="text_4">"</span>
                <span class="text_5">တင ပ </span>
                <span class="text_4">", "</span>
                <span class="text_5">မ န လ ပ </span>
                <span class="text_4">", and "</span>
                <span class="text_5">ဟင အင </span>
                <span class="text_4">". </span>
              </p>
              <p class="block_341">
                <span class="text_13">Correct: </span>
                <span class="text_14">အ က ယ ၊ လ လ က တ ။ </span>
                <span class="text_15">
                  Explanation: Interjection. Other examples of{' '}
                </span>
              </p>
              <p class="block_342">
                <span class="text_4">interjections include "</span>
                <span class="text_5">အ တ </span>
                <span class="text_4">", "</span>
                <span class="text_5">ဟ ဟ </span>
                <span class="text_4">", </span>
              </p>
              <p class="block_343">
                <span class="text_4">" </span>
                <span class="text_5">မတ စ ဘ ရ </span>
                <span class="text_4">", and others. </span>
              </p>
              <p class="block_344">
                <span class="text_13">Correct: </span>
                <span class="text_14">အ ၊ သ ပ တယ ။ </span>
                <span class="text_15">Explanation: yes/no word </span>
              </p>
              <p class="block_345">
                <span class="text_13">Correct: </span>
                <span class="text_14">ဟ တ ပ ၊ လ ပ ပ မယ ။ </span>
                <span class="text_15">Explanation: yes/no word </span>
              </p>
              <p class="block_346">
                <span class="text_13">Correct: </span>
                <span class="text_14">ဟ တ ပ ။ လ ပ ပ မယ ။ </span>
                <span class="text_15">
                  Explanation: substantial pause after "
                </span>
                <span class="text_16">ဟ တ ပ </span>
                <span class="text_15">" </span>
              </p>
              <p class="block_347">
                <span class="text_13">Correct: </span>
                <span class="text_14">သ ဓ က ယ ။ က သ လ အမ က ရတ ပ ။ </span>
                <span class="text_15">
                  Explanation: substantial pause after "
                </span>
                <span class="text_16">သ ဓ က ယ </span>
                <span class="text_15">" </span>
              </p>
              <p class="block_348">
                <span class="text_4">Correct: </span>
                <span class="text_5">ဇ က က ရယ ၊ ပစ တ င ထ င ရယ ၊ ဖ ဝ ပ ရယ </span>
              </p>
              <p class="block_349">အက န ဝယ ခ ။ </p>
              <p class="block_350">
                <span class="text_4">Incorrect: </span>
                <span class="text_5">ဇ က က ရယ ပစ တ င ထ င ရယ ဖ ဝ ပ ရယ </span>
              </p>
              <p class="block_351">အက န ဝယ ခ ။ </p>
              <p class="block_352">Explanation: A series of items shall be </p>
              <p class="block_353">
                <span class="text_4">separated by little section sign "</span>
                <span class="text_5">၊</span>
                <span class="text_4">". </span>
              </p>
              <p class="block_354">
                <span class="text_4">
                  Except in greetings, sentence-initial and sentence-final
                  addressees should be separated by downward stroke "
                </span>
                <span class="text_5">၊</span>
                <span class="text_4">". </span>
              </p>
              <p class="block_355">
                <span class="text_4">Correct: </span>
                <span class="text_5">မ မ၊ သ အ မ စ ပ လ တယ ။ </span>
              </p>
              <p class="block_356">
                <span class="text_4">Incorrect: </span>
                <span class="text_5">မ မ။ သ အ မ စ ပ လ တယ ။ </span>
              </p>
              <p class="block_357">
                The phrase "Ok Google" in isolation is transcribed without a
                comma or end punctuation. When the phrase appears before longer
                utterances, place a comma after "Google".{' '}
              </p>
              <p class="block_358">Correct: Ok Google </p>
              <p class="block_359">
                <span class="text_4">Incorrect: </span>
                <span class="text_5">အ က၊ ဂ ဂ ။ </span>
              </p>
              <p class="block_360">
                <span class="text_13">Correct: Ok Google, </span>
                <span class="text_14">သ လ င ပင ပ ပ </span>
                <span class="text_15">
                  Explanation: Always use a comma "," after{' '}
                </span>
              </p>
              <p class="block_361">
                Google even when followed by an utterance in{' '}
              </p>
              <p class="block_299">Burmese. </p>
              <p class="block_362">
                <span class="text_4">Correct: Ok Google, </span>
                <span class="text_5">က င အ ပ က လ ပ စ ပပ ။ </span>
              </p>
              <p class="block_363">
                <span class="text_4">
                  Correct: Ok Google, Saint Patric Day{' '}
                </span>
                <span class="text_5">ဆ တ </span>
              </p>
              <p class="block_364">ဘ လ ။ </p>
              <p class="block_365">Intonation marks </p>
              <p class="block_366">
                Questions should be punctuated as sentences. In the case of a
                question in another language (English for instance), the
                sentence should be capitalized and punctuated with a question
                mark.{' '}
              </p>
              <p class="block_367">
                <span class="text_13">Correct: </span>
                <span class="text_14">သခ တယ လ ။ </span>
                <span class="text_15">Explanation: "</span>
                <span class="text_16">လ </span>
                <span class="text_15">" is a question word in </span>
              </p>
              <p class="block_368">Burmese. </p>
              <p class="block_369">
                <span class="text_13">Correct: </span>
                <span class="text_14">မနက ၃</span>
                <span class="text_13">:</span>
                <span class="text_14">၀၀ လ ။ </span>
                <span class="text_15">
                  Explanation: Regardless of rising tone, it is{' '}
                </span>
              </p>
              <p class="block_370">
                most likely a question when an utterance ends{' '}
              </p>
              <p class="block_371">
                <span class="text_4">with "</span>
                <span class="text_5">လ </span>
                <span class="text_4">". </span>
              </p>
              <p class="block_372">
                <span class="text_4">
                  Exclamation marks should not be used in Burmese script. Use a
                  double downward stroke "
                </span>
                <span class="text_5">။</span>
                <span class="text_4">
                  " even if the speaker uses an exclamatory intonation.{' '}
                </span>
              </p>
              <p class="block_373">
                <span class="text_13">Correct: </span>
                <span class="text_14">ဟ ။ </span>
                <span class="text_15">
                  Explanation: Speaker sounds enthusiastic.{' '}
                </span>
              </p>
              <p class="block_360">
                <span class="text_13">Correct: </span>
                <span class="text_14">ဟ ။ </span>
                <span class="text_15">
                  Explanation: Speaker sounds unenthused.{' '}
                </span>
              </p>
              <p class="block_374">Colon and quotation </p>
              <p class="block_375">
                Do not put punctuation between reported speech verbs and direct
                quotations. Do not put punctuation within quotation marks unless
                the punctuation belongs to the reported speech.{' '}
              </p>
              <p class="block_376">
                <span class="text_4">Correct: </span>
                <span class="text_5">သ ဇ က </span>
                <span class="text_4">" </span>
                <span class="text_5">ပည က သ လည မယ </span>
                <span class="text_4">" </span>
                <span class="text_5">တ ။ </span>
              </p>
              <p class="block_377">
                <span class="text_4">Incorrect: </span>
                <span class="text_5">သ ဇ က၊ </span>
                <span class="text_4">" </span>
                <span class="text_5">ပည က သ လည မယ </span>
                <span class="text_4">" </span>
                <span class="text_5">တ ။ </span>
              </p>
              <p class="block_378">
                <span class="text_4">Incorrect: </span>
                <span class="text_5">သ ဇ က </span>
                <span class="text_4">" </span>
                <span class="text_5">ပည က သ လည မယ ။</span>
                <span class="text_4">" </span>
                <span class="text_5">တ ။ </span>
              </p>
              <p class="block_379">
                <span class="text_4">Incorrect: </span>
                <span class="text_5">သ ဇ က </span>
                <span class="text_4">- " </span>
                <span class="text_5">ပည က သ လည မယ </span>
                <span class="text_4">" </span>
                <span class="text_5">တ ။ </span>
              </p>
              <p class="block_380">
                <span class="text_4">Explanation: The word "</span>
                <span class="text_5">တ </span>
                <span class="text_4">" is the most common </span>
              </p>
              <p class="block_381">
                reported speech particle in Burmese, but other{' '}
              </p>
              <p class="block_382">
                <span class="text_4">words such as "</span>
                <span class="text_5">ဆ ပ </span>
                <span class="text_4">", " </span>
                <span class="text_5">ပ တယ </span>
                <span class="text_4">", "</span>
                <span class="text_5">လ </span>
                <span class="text_4">" can be used </span>
              </p>
              <p class="block_383">
                for reported speech. No need to use comma or{' '}
              </p>
              <p class="block_384">section sign before quotation. </p>
              <p class="block_385">
                <span class="text_4">Correct: " </span>
                <span class="text_5">က အ သ စ မယ </span>
                <span class="text_4">" </span>
                <span class="text_5">လ ပ ။ </span>
              </p>
              <p class="block_386">
                <span class="text_4">Incorrect: " </span>
                <span class="text_5">က အ သ စ မယ ။</span>
                <span class="text_4">" </span>
                <span class="text_5">လ ပ ။ </span>
              </p>
              <p class="block_387">
                Explanation: Do not punctuate if the quotation{' '}
              </p>
              <p class="block_388">is only one word. </p>
              <p class="block_389">
                If the text in quotation marks qualifies as a sentence,
                punctuate as if it were its own utterance. Do not alter its end
                punctuation even if the quote is within a sentence. Do not add
                excess punctuation after end quotation marks.{' '}
              </p>
              <p class="block_390">
                <span class="text_4">Correct: </span>
                <span class="text_5">အဘက ဆ သည မ </span>
                <span class="text_4">"</span>
                <span class="text_5">သ သရ င မ စသတည ။</span>
                <span class="text_4">" </span>
              </p>
              <p class="block_391">
                <span class="text_4">Incorrect: </span>
                <span class="text_5">အဘက ဆ သည မ </span>
                <span class="text_4">"</span>
                <span class="text_5">သ သရ </span>
              </p>
              <p class="block_392">
                <span class="text_5">င မ စသတည ။</span>
                <span class="text_4">"</span>
                <span class="text_5">။ </span>
              </p>
              <p class="block_393">
                Explanation: Text in quotation marks qualifies{' '}
              </p>
              <p class="block_394">as a sentence. </p>
              <p class="block_395">
                <span class="text_4">Correct: </span>
                <span class="text_5">မ မက မ တ </span>
                <span class="text_4">"</span>
                <span class="text_5">၃ န ရ ဆ မ လ ။</span>
                <span class="text_4">" </span>
              </p>
              <p class="block_396">
                <span class="text_4">Incorrect: </span>
                <span class="text_5">မ မက မ တ ၊ </span>
                <span class="text_4">"</span>
                <span class="text_5">၃ န ရ ဆ မ လ ။</span>
                <span class="text_4">"</span>
                <span class="text_5">။ </span>
              </p>
              <p class="block_397">
                <span class="text_4">Incorrect: </span>
                <span class="text_5">မ မက မ တ ၊ </span>
                <span class="text_4">"</span>
                <span class="text_5">၃ န ရ ဆ မ လ ။</span>
                <span class="text_4">" </span>
              </p>
              <p class="block_393">
                Explanation: Text in quotation marks qualifies{' '}
              </p>
              <p class="block_398">
                as a sentence. Do not add excess punctuation.{' '}
              </p>
              <p class="block_399">
                Do not put a comma or section sign before the{' '}
              </p>
              <p class="block_400">quotation. </p>
              <p class="block_401">
                <span class="text_4">Correct: </span>
                <span class="text_5">စ ပ လ က တ </span>
                <span class="text_4">"</span>
                <span class="text_5">ဟ ရ က မ တ မယ ။</span>
                <span class="text_4">" </span>
              </p>
              <p class="block_402">
                <span class="text_4">Incorrect: </span>
                <span class="text_5">စ က ပ လ က တ ၊ </span>
                <span class="text_4">"</span>
                <span class="text_5">ဟ ရ က မ တ မယ ။</span>
                <span class="text_4">" </span>
              </p>
              <p class="block_403">။ </p>
              <p class="block_393">
                Explanation: Text in quotation marks qualifies{' '}
              </p>
              <p class="block_398">
                as a sentence. Do not add excess punctuation.{' '}
              </p>
              <p class="block_399">
                Do not put a comma or section sign before the{' '}
              </p>
              <p class="block_400">quotation. </p>
              <p class="block_404">
                <span class="text_4">Correct: </span>
                <span class="text_5">တဇ က </span>
                <span class="text_4">"</span>
                <span class="text_5">ရန က န ဆင လ မယ ။</span>
                <span class="text_4">" </span>
                <span class="text_5">ဆ ပ </span>
              </p>
              <p class="block_405">န ရက အတ အက မ ပ ဘ ။ </p>
              <p class="block_393">
                Explanation: Text in quotation marks qualifies{' '}
              </p>
              <p class="block_406">as a sentence. </p>
              <p class="block_407">
                <span class="text_4">Correct: "</span>
                <span class="text_5">ကစ ရမယ ။ စ က က ရမယ ။ မ ဘက </span>
              </p>
              <p class="block_408">
                <span class="text_5">က ည ရမယ ။</span>
                <span class="text_4">" </span>
                <span class="text_5">ဟ ဆရ ကဆ သည ။ </span>
              </p>
              <p class="block_409">
                Use a hyphen in quotative voice actions when the quote follows
                the command. Use quotation marks when the quote is in the middle
                of the sentence.{' '}
              </p>
              <p class="block_410">
                <span class="text_13">Correct: </span>
                <span class="text_14">ပင သစ ဘ သ ပန ရန </span>
                <span class="text_13">- </span>
                <span class="text_14">န က င လ ။ </span>
                <span class="text_15">
                  Explanation: The quote follows the command,{' '}
                </span>
              </p>
              <p class="block_411">so use a hyphen not quotation marks. </p>
              <p class="block_346">
                <span class="text_13">Correct: " </span>
                <span class="text_14">န က င လ </span>
                <span class="text_13">" </span>
                <span class="text_14">က ပင သစ ဘ သ သ ပန ပ ။ </span>
                <span class="text_15">
                  Explanation: The quote is in the middle of a{' '}
                </span>
              </p>
              <p class="block_412">sentence, so use quotation marks not a </p>
              <p class="block_413">hyphen. </p>
              <p class="block_414">
                <span class="text_4">Correct: </span>
                <span class="text_5">ပင သစ လ </span>
                <span class="text_4">"</span>
                <span class="text_5">ခ စ တယ </span>
                <span class="text_4">" </span>
                <span class="text_5">လ ဘယ လ ပ မလ ။ </span>
              </p>
              <p class="block_415">
                <span class="text_4">Incorrect: </span>
                <span class="text_5">ပင သစ လ </span>
                <span class="text_4">- "</span>
                <span class="text_5">ခ စ တယ </span>
                <span class="text_4">" </span>
                <span class="text_5">လ ဘယ လ ပ မလ ။ </span>
              </p>
              <p class="block_416">
                <span class="text_4">
                  Explanation: Do not use a hyphen after "{' '}
                </span>
                <span class="text_5">ပ </span>
                <span class="text_4">" </span>
              </p>
              <p class="block_417">verbs in translation requests. </p>
              <p class="block_418">
                <span class="text_4">Correct: example@gmail.com </span>
                <span class="text_5">သ </span>
                <span class="text_4">- </span>
                <span class="text_5">ဟ ၊ </span>
              </p>
              <p class="block_419">န က င ကလ ။ </p>
              <p class="block_420">
                <span class="text_4">Correct: example@gmail.com </span>
                <span class="text_5">ဆ က </span>
                <span class="text_4">" </span>
                <span class="text_5">ဟ ၊ </span>
              </p>
              <p class="block_421">
                <span class="text_5">န က င ကလ </span>
                <span class="text_4">" </span>
                <span class="text_5">လ စ ပ လ က ။ </span>
              </p>
              <p class="block_422">
                Do not use quotation marks for metalinguistic uses of words or
                phrases. These uses include defining the word, talking about the
                spelling of the word, or any other type of reference to the word
                itself as a thing.{' '}
              </p>
              <p class="block_423">Other symbols </p>
              <p class="block_424">
                <span class="text_4">
                  Apart from the Burmese letters and the Latin letters a through
                  z, you should not use any other symbol than: 0-9{' '}
                </span>
                <span class="text_5">၀</span>
                <span class="text_4">-</span>
                <span class="text_5">၉ </span>
                <span class="text_4">
                  äâàáāçčćđéèéëêēïîíīñóôöüőōšûùúűūÿȳžÄÂÀÁĀÇČĆĐÉÈÉËÊĒÏÎÍĪÑÓÔÖŌŠÜÛÙÚŪŸȲŽ23,?
                  !~^\'"_°:.()&lt;&gt;{}[]√/@#$€£+=%*&amp;-.;{' '}
                </span>
              </p>
              <p class="block_425">Spoken punctuation </p>
              <p class="block_159">
                For sentence-level spoken punctuation, write out the full word
                or words between curly brackets. Do not add punctuation symbols
                after spoken punctuation. Be careful with homonyms. (See
                exceptions in the next rule.){' '}
              </p>
              <p class="block_426">Correct: Okay {`{dot} {dot} {dot}`} </p>
              <p class="block_427">Incorrect: Okay... </p>
              <p class="block_428">
                <span class="text_">Example audio: " </span>
                <span class="text_1">okay dot dot dot </span>
                <span class="text_">" </span>
              </p>
              <p class="block_429">
                <span class="text_17">Example </span>
                <span class="text_13">Correct: </span>
                <span class="text_14">ဇ ဇဝ </span>
                <span class="text_13">{`{`}</span>
                <span class="text_14">ပ ဒ က လ </span>
                <span class="text_13">{`}`} </span>
                <span class="text_14">ခတ </span>
                <span class="text_13">{`{`}</span>
                <span class="text_14">ပ ဒ က လ </span>
                <span class="text_13">{`}`} </span>
                <span class="text_14">ပ န ညက </span>
              </p>
              <p class="block_430">
                <span class="text_6">audio: " </span>
                <span class="text_7">ဇ ဇဝ ပ ဒ က လ ခတ ပ ဒ က လ </span>
              </p>
              <p class="block_431">
                <span class="text_5">ဝယ လ ပ </span>
                <span class="text_4">{`{`}</span>
                <span class="text_5">ပ ဒ မ</span>
                <span class="text_4">{`}`} </span>
              </p>
              <p class="block_432">
                <span class="text_7">ပ န ညက ဝယ လ ပ ပ ဒ မ </span>
                <span class="text_6">" </span>
              </p>
              <p class="block_433">
                <span class="text_4">Incorrect: </span>
                <span class="text_5">ဇ ဇဝ ၊ ခတ ၊ ပ န ညက ဝယ လ ပ ။ </span>
              </p>
              <p class="block_434">
                <span class="text_4">Correct: </span>
                <span class="text_5">ဦ ဘ န င </span>
                <span class="text_4">{`{`}</span>
                <span class="text_5">က င စ</span>
                <span class="text_4">{`}`} </span>
                <span class="text_5">တက သ လ </span>
                <span class="text_4">{`{`}</span>
                <span class="text_5">က င ပ </span>
                <span class="text_4">{`}`} </span>
              </p>
              <p class="block_435">
                <span class="text_4">Incorrect: </span>
                <span class="text_5">ဦ ဘ န င </span>
                <span class="text_4">(</span>
                <span class="text_5">တက သ လ </span>
                <span class="text_4">) </span>
              </p>
              <p class="block_436">
                <span class="text_6">Example audio: " </span>
                <span class="text_7">ဦ ဘ န င က င စ တက သ လ က င ပ တ </span>
                <span class="text_6">" </span>
              </p>
              <p class="block_437">Correct: {`{smiley face}`} </p>
              <p class="block_438">Incorrect: :-) </p>
              <p class="block_439">Incorrect: smiley face </p>
              <p class="block_440">
                <span class="text_">Example audio: " </span>
                <span class="text_1">smiley face </span>
                <span class="text_">" </span>
              </p>
              <p class="block_441">
                Don't spell out internal punctuation like hyphens in web pages,
                email addresses, addresses, phone numbers, or other word-level
                punctuation.{' '}
              </p>
              <p class="block_442">
                <span class="text_4">Correct: </span>
                <span class="text_5">အခန န ပ တ ၉၈</span>
                <span class="text_4">/</span>
                <span class="text_5">၉၉ </span>
              </p>
              <p class="block_443">
                <span class="text_4">Incorrect: </span>
                <span class="text_5">အခန န ပ တ ၉၈ မ စ င ၉၉ </span>
              </p>
              <p class="block_444">
                <span class="text_6">Example audio: " </span>
                <span class="text_7">အခန န ပ တ က ဆယ ရ စ မ စ င </span>
              </p>
              <p class="block_445">
                <span class="text_7">က ဆယ က </span>
                <span class="text_6">" </span>
              </p>
              <p class="block_446">Correct: www.abc.com </p>
              <p class="block_447">
                Incorrect: www {`{dot}`} abc{` {dot}`} com{' '}
              </p>
              <p class="block_448">
                <span class="text_6">Example audio: " </span>
                <span class="text_7">ဒဘလ ဒဘလ ဒဘလ ဒ </span>
              </p>
              <p class="block_449">
                <span class="text_7">အဘ စ ဒ က န </span>
                <span class="text_6">" </span>
              </p>
              <p class="block_450">
                <span class="text_4">Correct: </span>
                <span class="text_5">သ က ဆရ ဝန </span>
                <span class="text_4">/</span>
                <span class="text_5">အဆ တ </span>
                <span class="text_4">/</span>
                <span class="text_5">စ ရ ဆရ ။ </span>
              </p>
              <p class="block_451">
                <span class="text_4">Incorrect: </span>
                <span class="text_5">သ က ဆရ ဝန </span>
                <span class="text_4">{`{`}</span>
                <span class="text_5">မ စ င </span>
                <span class="text_4">{`}`} </span>
                <span class="text_5">အဆ တ </span>
              </p>
              <p class="block_452">
                <span class="text_4">{`{`}</span>
                <span class="text_5">မ စ င </span>
                <span class="text_4">{`}`} </span>
                <span class="text_5">စ ရ ဆရ ။ </span>
              </p>
              <p class="block_453">
                <span class="text_6">Example audio: " </span>
                <span class="text_7">သ က ဆရ ဝန မ စ င အဆ တ မ စ င စ ရ ဆရ </span>
                <span class="text_6">" </span>
              </p>
              <p class="block_454">
                Explanation: Slash is a word-level punctuation.{' '}
              </p>
              <p class="block_455">
                <span class="text_4">Correct: </span>
                <span class="text_5">ယ န ပတ ၄က</span>
                <span class="text_4">/</span>
                <span class="text_5">၅၈၇၂ </span>
              </p>
              <p class="block_456">
                <span class="text_4">Incorrect: </span>
                <span class="text_5">ယ န ပ တ ၄က မ စ င ၅၈၇၂ </span>
              </p>
              <p class="block_457">
                <span class="text_6">Example audio: " </span>
                <span class="text_7">ယ န ပ တ လ က က မ စ င င ရ စ ခ န စ </span>
                <span class="text_6">" </span>
              </p>
              <p class="block_458">
                If a word that can refer to a punctuation mark is spoken in
                isolation, it should be written out between curly brackets.{' '}
              </p>
              <p class="block_459">
                <span class="text_4">Correct: {`{`}</span>
                <span class="text_5">ပ ဒ မ</span>
                <span class="text_4">{`}`} </span>
              </p>
              <p class="block_460">
                <span class="text_4">Correct:{` {`}</span>
                <span class="text_5">က င စက င ပ တ </span>
                <span class="text_4">{`}`} </span>
              </p>
              <p class="block_461">
                <span class="text_4">Correct:{` {`}</span>
                <span class="text_5">မ စ င </span>
                <span class="text_4">{`}`} </span>
              </p>
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
