import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Paper, Grid, Toolbar, Hidden } from '@material-ui/core'
import PageContentHeader from '../../../Components/common/PageContentHeader'
import RightContentNav from '../../../Components/layouts/RightContentNav'
import Wrapper from '../Wrapper'
import styles from '../css/styles.module.css'

const DifficultUtterances = () => {
  const classes = useStyles()

  const headingIds = [
    'skipping-a-prompt',
    'hesitations-and-truncations',
    'background-and-foreground-speech',
    'foreign-language',
    'accents',
  ]

  return (
    <Wrapper>
      <Grid container>
        <Grid sm={12} md={9} item>
          <Paper className={classes.content}>
            <Toolbar />
            {/*  */}
            <PageContentHeader currentPage="longform Gujarati" />
            <div className="content text">
              <p class="block_292">Difficult utterances </p>
              <p class="block_293">
                This section covers how to transcribe audio samples that include
                non human speech, laughter, filler words, profanity, false
                starts, repetitions, speech from multiple speakers.{' '}
              </p>
              <p class="block_294">Things to ignore </p>
              <p class="block_295">
                Do not transcribe filler words unless intended by the speaker to
                be transcribed. Never lengthen them.{' '}
              </p>
              <p class="block_296">
                <span class="text_11">C</span>
                <span class="text_12">ORRECT</span>
                <span class="text_13">: ભિી ગયો. </span>
                <span class="text_19">E</span>
                <span class="text_20">XAMPLE AUDIO</span>
                <span class="text_19">: " </span>
                <span class="text_22">[sigh or loud breath] </span>
                <span class="text_21">ભિી ગયો </span>
                <span class="text_19">" </span>
              </p>
              <p class="block_297">
                Transcribe any filler words that are applicable and used in the
                target language. Below are examples of filler words in the
                English language. These may or may not be applicable in the{' '}
              </p>
              <p class="block_298">
                target language. Again, only transcribe filler words that exist
                in and are used in the target language.{' '}
              </p>
              <p class="block_299">
                <span class="text_">• </span>
                <span class="text_1">um </span>
              </p>
              <p class="block_300">
                <span class="text_">• </span>
                <span class="text_1">uh </span>
              </p>
              <p class="block_301">
                <span class="text_">• </span>
                <span class="text_1">right </span>
              </p>
              <p class="block_302">
                <span class="text_">• </span>
                <span class="text_1">you know </span>
              </p>
              <p class="block_300">
                <span class="text_">• </span>
                <span class="text_1">so </span>
              </p>
              <p class="block_303">
                <span class="text_8">• </span>
                <span class="text_23">like </span>
                <span class="text_24">
                  <sub class="calibre1">
                    Hesitations truncations and repetitions{' '}
                  </sub>
                </span>
              </p>
              <p class="block_304">
                If a speaker says only the beginning part of the word,
                transcribe it if it can be considered a word on its own.
                Otherwise do not transcribe the false start.{' '}
              </p>
              <p class="block_305">
                <span class="text_4">C</span>
                <span class="text_5">ORRECT</span>
                <span class="text_6">: અન્સભનદન. હ તન પ્રમ કરુ છ . </span>
              </p>
              <p class="block_306">
                <span class="text_4">I</span>
                <span class="text_5">NCORRECT</span>
                <span class="text_6">: અન્સભ અન્સભનદન હ તન પ્રમ કરુ છ ? </span>
              </p>
              <p class="block_307">
                <span class="text_4">E</span>
                <span class="text_5">XAMPLE AUDIO</span>
                <span class="text_4">: " </span>
                <span class="text_6">અન્સભ </span>
                <span class="text_25">[pause] </span>
                <span class="text_6">અન્સભનદન હ તન પ્રમ કરુ છ </span>
                <span class="text_4">" </span>
              </p>
              <p class="block_308">
                <span class="text_4">E</span>
                <span class="text_5">XPLANATION</span>
                <span class="text_6">
                  : Since "અન્સભ" is not a word, do not transcribe this false
                  start.{' '}
                </span>
              </p>
              <p class="block_309">
                <span class="text_4">C</span>
                <span class="text_5">ORRECT</span>
                <span class="text_6">: જોડ જોડણી સધારો </span>
              </p>
              <p class="block_310">
                <span class="text_4">I</span>
                <span class="text_5">NCORRECT</span>
                <span class="text_6">: જોડણી સધારો </span>
              </p>
              <p class="block_311">
                <span class="text_4">E</span>
                <span class="text_5">XAMPLE AUDIO</span>
                <span class="text_4">: " </span>
                <span class="text_6">જોડ </span>
                <span class="text_25">[pause] </span>
                <span class="text_6">જોડણી સધારો </span>
                <span class="text_4">" </span>
              </p>
              <p class="block_312">
                <span class="text_4">E</span>
                <span class="text_5">XPLANATION</span>
                <span class="text_6">
                  : Since "જોડ" is a word on its own it is transcribed before
                  "જોડણી" without "-" or "..."{' '}
                </span>
              </p>
              <p class="block_313">
                If a speaker repeats part of the end of a sentence, add ending
                punctuation before the repeated phrase. Do not include ending
                punctuation after the repeated phrase (unless the repeated part
                is a complete sentence).{' '}
              </p>
              <p class="block_314">
                <span class="text_4">C</span>
                <span class="text_5">ORRECT</span>
                <span class="text_6">: આ ખબ જ મોઘ છ. જ મોઘ છ </span>
              </p>
              <p class="block_315">
                <span class="text_4">I</span>
                <span class="text_5">NCORRECT</span>
                <span class="text_6">: આ ખબ જ મોઘ છ જ મોઘ છ. </span>
              </p>
              <p class="block_316">
                <span class="text_4">E</span>
                <span class="text_5">XAMPLE AUDIO</span>
                <span class="text_4">: " </span>
                <span class="text_6">આ ખબ જ મોઘ છ જ મોઘ છ </span>
                <span class="text_4">" </span>
              </p>
              <p class="block_317">
                <span class="text_4">E</span>
                <span class="text_5">XPLANATION</span>
                <span class="text_6">
                  : The ending punctuation is transcribed before the repeated
                  phrase "જ મોઘ છ". Note, "જ મોઘ{' '}
                </span>
              </p>
              <p class="block_318">
                છ" by itself is not a complete sentence so there is no
                punctuation after it.{' '}
              </p>
              <p class="block_319">
                If a very small part of a word (at most one syllable) has been
                cut off, and you know what the word is supposed to be,
                transcribe the entire word.{' '}
              </p>
              <p class="block_320">
                <span class="text_4">C</span>
                <span class="text_5">ORRECT</span>
                <span class="text_6">: આ પ્રયોગ રાત્ર </span>
              </p>
              <p class="block_321">
                <span class="text_4">I</span>
                <span class="text_5">NCORRECT</span>
                <span class="text_6">: આ પ્રયોગ રાત- </span>
              </p>
              <p class="block_322">
                <span class="text_4">I</span>
                <span class="text_5">NCORRECT</span>
                <span class="text_6">: આ પ્રયોગ </span>
              </p>
              <p class="block_323">
                <span class="text_4">E</span>
                <span class="text_5">XAMPLE AUDIO</span>
                <span class="text_4">: " </span>
                <span class="text_6">આ પ્રયોગ રાત </span>
                <span class="text_4">" </span>
              </p>
              <p class="block_324">
                <span class="text_4">E</span>
                <span class="text_5">XPLANATION</span>
                <span class="text_6">
                  : Final "ર" was truncated, but since only one syllable was cut
                  off, the full word is transcribed with the missing "ર".{' '}
                </span>
              </p>
              <p class="block_325">
                <span class="text_11">C</span>
                <span class="text_12">ORRECT</span>
                <span class="text_13">: ગ જરાતીમા તન શ કહવાય છ? </span>
                <span class="text_19">E</span>
                <span class="text_20">XAMPLE AUDIO</span>
                <span class="text_19">: " </span>
                <span class="text_21">જરાતીમા તન શ કહવાય છ </span>
                <span class="text_19">" </span>
              </p>
              <p class="block_326">
                <span class="text_4">E</span>
                <span class="text_5">XPLANATION</span>
                <span class="text_6">
                  : Initial "ગ " was cut off, but since it is only one letter,
                  the whole word, "ગ જરાતીમા" is transcribed with the missing "ગ
                  " added.{' '}
                </span>
              </p>
              <p class="block_327">
                If you are not sure what the word should be, do not transcribe
                the word at all. Do not put punctuation after words that have
                been cut off.{' '}
              </p>
              <p class="block_328">
                <span class="text_11">C</span>
                <span class="text_12">ORRECT</span>
                <span class="text_13">: હ કામની </span>
                <span class="text_19">E</span>
                <span class="text_20">XAMPLE AUDIO</span>
                <span class="text_19">: " </span>
                <span class="text_21">હ કામની શો</span>
                <span class="text_22">- </span>
                <span class="text_19">" </span>
              </p>
              <p class="block_329">
                <span class="text_4">E</span>
                <span class="text_5">XPLANATION</span>
                <span class="text_6">
                  : "શોધ" was cut off, but since there is no way to tell what
                  word the speaker meant to say, the word is not transcribed at
                  all.{' '}
                </span>
              </p>
              <p class="block_330">
                If a quotation is cut off in the middle, use an end quotation
                mark anyway.{' '}
              </p>
              <p class="block_331">
                <span class="text_11">C</span>
                <span class="text_12">ORRECT</span>
                <span class="text_13">: નરશ કહ્, "તમારી સાથ વાત" </span>
                <span class="text_19">E</span>
                <span class="text_20">XAMPLE AUDIO</span>
                <span class="text_19">: " </span>
                <span class="text_21">નરશ કહ્ તમારી સાથ વાત </span>
                <span class="text_19">" </span>
              </p>
              <p class="block_332">
                <span class="text_4">E</span>
                <span class="text_5">XPLANATION</span>
                <span class="text_6">
                  : The speaker's quotation of નરશ was truncated. Even though
                  the end of the quotation was not recorded, an end quotation
                  mark must be transcribed at the end of the quote. Since "તમારી
                  સાથ વાત" is not a complete sentence, it is not transcribed
                  with a period at the end.{' '}
                </span>
              </p>
              <p class="block_333">
                If a speaker repeats a word five times or less, transcribe each
                repetition (without fillers). But if a word is repeated more
                than five times, skip the prompt.{' '}
              </p>
              <p class="block_334">
                <span class="text_4">C</span>
                <span class="text_5">ORRECT</span>
                <span class="text_6">: વધ એક રોટી રોટી આપો. </span>
              </p>
              <p class="block_335">
                <span class="text_4">I</span>
                <span class="text_5">NCORRECT</span>
                <span class="text_6">: વધ એક રોટી આપો. </span>
              </p>
              <p class="block_336">
                <span class="text_4">E</span>
                <span class="text_5">XAMPLE AUDIO</span>
                <span class="text_4">: " </span>
                <span class="text_6">વધ એક રોટી રોટી આપો </span>
                <span class="text_4">" </span>
              </p>
              <p class="block_337">
                <span class="text_4">E</span>
                <span class="text_5">XPLANATION</span>
                <span class="text_6">
                  : Since speaker said "રોટી" twice, transcribe it twice.{' '}
                </span>
              </p>
              <p class="block_338">
                <span class="text_11">C</span>
                <span class="text_12">ORRECT</span>
                <span class="text_11">: [skip] </span>
                <span class="text_19">E</span>
                <span class="text_20">XAMPLE AUDIO</span>
                <span class="text_19">: " </span>
                <span class="text_21">બરાબર બરાબર બરાબર બરાબર બરાબર </span>
              </p>
              <p class="block_339">
                <span class="text_6">બરાબ </span>
                <span class="text_4">" </span>
              </p>
              <p class="block_340">
                Transcribe only numbers that you hear even if the speaker didn't
                finish saying the entire number.{' '}
              </p>
              <p class="block_341">
                <span class="text_4">C</span>
                <span class="text_5">ORRECT</span>
                <span class="text_6">: મારી ઉમર 100 </span>
              </p>
              <p class="block_342">
                <span class="text_4">I</span>
                <span class="text_5">NCORRECT</span>
                <span class="text_6">: મારી ઉમર 101 </span>
              </p>
              <p class="block_343">
                <span class="text_4">E</span>
                <span class="text_5">XAMPLE AUDIO</span>
                <span class="text_4">: " </span>
                <span class="text_6">મારી ઉમર એકસો</span>
                <span class="text_25">- </span>
                <span class="text_4">" </span>
              </p>
              <p class="block_344">
                <span class="text_4">E</span>
                <span class="text_5">XPLANATION</span>
                <span class="text_6">
                  : The speaker said "એકસો એક", but the microphone only recorded
                  "એકસો-", so transcribe "100" instead of "101" since that is
                  what you hear.{' '}
                </span>
              </p>
              <p class="block_345">Background and foreground speech </p>
              <p class="block_346">
                Only transcribe foreground speech. A user's speech may go from
                the foreground to the background based on the volume of their
                speech and who they are speaking to.{' '}
              </p>
              <p class="block_347">
                <span class="text_11">C</span>
                <span class="text_12">ORRECT</span>
                <span class="text_13">: ગાય </span>
                <span class="text_19">E</span>
                <span class="text_20">XAMPLE AUDIO</span>
                <span class="text_19">: " </span>
                <span class="text_21">ગાય બરાબર </span>
                <span class="text_19">" </span>
              </p>
              <p class="block_348">
                <span class="text_4">E</span>
                <span class="text_5">XPLANATION</span>
                <span class="text_6">
                  : The word "ગાય" is said loudly, in the foreground. The rest
                  of the speech is said in a lower volume in the background to
                  another person. The background speech is not transcribed.{' '}
                </span>
              </p>
              <p class="block_349">
                <span class="text_4">C</span>
                <span class="text_5">ORRECT</span>
                <span class="text_6">
                  : માર કોથરૂડ, બાણર જવ છ. હ ભગવાન. હજી અડધો કિાક છ.{' '}
                </span>
              </p>
              <p class="block_350">
                <span class="text_3">E</span>
                <span class="text_">XPLANATION</span>
                <span class="text_3">
                  : The speaker's first sentence is spoken to someone. The
                  second sentence is spoken to another person, but it is still
                  loud, so it is also transcribed.{' '}
                </span>
              </p>
              <p class="block_351">
                If one person clearly speaks in the foreground and someone
                speaks in the background, transcribe the foreground speaker and
                ignore the rest.{' '}
              </p>
              <p class="block_352">
                <span class="text_11">C</span>
                <span class="text_12">ORRECT</span>
                <span class="text_13">: સૌચાિય ક્યા છ? </span>
                <span class="text_19">E</span>
                <span class="text_20">XAMPLE AUDIO</span>
                <span class="text_19">: " </span>
                <span class="text_21">સૌચાિય ક્યા છ </span>
                <span class="text_19">" </span>
              </p>
              <p class="block_353">
                <span class="text_4">E</span>
                <span class="text_5">XAMPLE AUDIO</span>
                <span class="text_4">: " </span>
                <span class="text_6">ન્સદવાળી મબારક </span>
                <span class="text_4">" </span>
              </p>
              <p class="block_354">
                <span class="text_3">E</span>
                <span class="text_">XPLANATION</span>
                <span class="text_3">
                  : The second speaker is in the background. Do not transcribe
                  what the second speaker says.{' '}
                </span>
              </p>
              <p class="block_355">
                If two people take turns speaking, are not speaking at the same
                time, and are both in the foreground at approximately the same
                volume, transcribe the speech of both speakers as different
                sentences. Separate different speakers' sentences with end
                punctuation.{' '}
              </p>
              <p class="block_356">
                <span class="text_11">C</span>
                <span class="text_12">ORRECT</span>
                <span class="text_13">: ભાવ સચકર મ જબ ભાડ િશો ન? હા. </span>
                <span class="text_19">E</span>
                <span class="text_20">XAMPLE AUDIO</span>
                <span class="text_19">: " </span>
                <span class="text_21">ભાવ સચકર મ જબ ભાડ િશો ન હા </span>
                <span class="text_19">" </span>
              </p>
              <p class="block_357">
                <span class="text_3">E</span>
                <span class="text_">XPLANATION</span>
                <span class="text_3">
                  : Both speakers are in the foreground so both sentences are
                  transcribed. The speech of the two speakers is separated by
                  punctuation.{' '}
                </span>
              </p>
              <p class="block_358">
                If one person clearly speaks in the foreground and someone
                interrupts at the same volume with a brief (less than a second)
                overlapping speech segment, transcribe the main speaker and
                ignore the rest.{' '}
              </p>
              <p class="block_359">
                If there are two or more people speaking, one talking to the
                device and the other not, transcribe only the speaker speaking
                to the device.{' '}
              </p>
              <p class="block_360">Skipping a prompt </p>
              <p class="block_361">
                For Loft 1.0: If you can't understand part of the audio,
                transcribe only the part you can understand. For the part you
                cannot understand, create a separate speaker segment and add the
                Unintelligible label as instructed in: Longform generic rules
                &gt; Unintelligible or foreign or singing.{' '}
              </p>
              <p class="block_362">
                For Loft 2.0: Below is a list of reasons to skip the audio that
                may be available for you to choose from. Each contain a
                description of when is an appropriate time to use it.{' '}
              </p>
              <p class="block_363">
                <span class="text_">• </span>
                <span class="text_1">No Audio: The audio doesn't load. </span>
              </p>
              <p class="block_364">
                <span class="text_">• </span>
                <span class="text_1">
                  No Sound: The waveform indicates there is audio but I can't
                  hear anything.{' '}
                </span>
              </p>
              <p class="block_365">
                <span class="text_">• </span>
                <span class="text_1">
                  Other Locale: All of the speech is in a different language.{' '}
                </span>
              </p>
              <p class="block_366">
                <span class="text_">• </span>
                <span class="text_1">
                  Silent Audio: The entire utterance is silent{' '}
                </span>
              </p>
              <p class="block_367">
                <span class="text_">• </span>
                <span class="text_1">
                  Noisy Audio: The entire utterance is too noisy.{' '}
                </span>
              </p>
              <p class="block_368">
                <span class="text_">• </span>
                <span class="text_1">
                  Other: Other reason (Please explain).{' '}
                </span>
              </p>
              <p class="block_369">
                For utterances that contain speech that is user-generated,
                pre-recorded, or synthesized, transcribe all of it.{' '}
              </p>
              <p class="block_370">Format </p>
              <p class="block_371">
                Transcribe numbers, abbreviations etc. following the formatting
                conventions in this section.{' '}
              </p>
              <p class="block_372">Number </p>
              <p class="block_373">
                Only Western Arabic numerals should be used.{' '}
              </p>
              <p class="block_374">
                Cardinals and ordinals from 0 to 9 are written with letters
                (except for measures and currency - see Currency and Unit).{' '}
              </p>
              <p class="block_375">
                <span class="text_4">C</span>
                <span class="text_5">ORRECT</span>
                <span class="text_6">: વગમા નવ ન્સવદ્યાથીઓ છ. </span>
              </p>
              <p class="block_376">
                <span class="text_4">I</span>
                <span class="text_5">NCORRECT</span>
                <span class="text_6">: વગમા 9 ન્સવદ્યાથીઓ છ. </span>
              </p>
              <p class="block_377">
                <span class="text_4">E</span>
                <span class="text_5">XPLANATION</span>
                <span class="text_6">
                  : 10થી ઓછી સખ્યાના આકડા શબ્દોમા િખવા. એટિ 9ન નવ તરીક િખાશ.{' '}
                </span>
              </p>
              <p class="block_378">
                <span class="text_4">C</span>
                <span class="text_5">ORRECT</span>
                <span class="text_6">: વગમા 13 ન્સવદ્યાથીઓ છ. </span>
              </p>
              <p class="block_379">
                <span class="text_4">I</span>
                <span class="text_5">NCORRECT</span>
                <span class="text_6">: વગમા તર ન્સવદ્યાથીઓ છ. </span>
              </p>
              <p class="block_380">
                <span class="text_4">E</span>
                <span class="text_5">XPLANATION</span>
                <span class="text_6">
                  : 10થી વધારની સખ્યા આકડાઓમા જ િખવી. એટિ તરન 13 તરીક િખાશ.{' '}
                </span>
              </p>
              <p class="block_381">
                Use digits for cardinals and ordinals 10 and above, even if they
                are coordinated with numbers under 10.{' '}
              </p>
              <p class="block_382">
                <span class="text_4">C</span>
                <span class="text_5">ORRECT</span>
                <span class="text_6">: મારી પાસ છ ક તરા અન 12 પોપટ છ. </span>
              </p>
              <p class="block_383">
                <span class="text_4">I</span>
                <span class="text_5">NCORRECT</span>
                <span class="text_6">: મારી પાસ 6 ક તરા અન 12 પોપટ છ. </span>
              </p>
              <p class="block_384">
                <span class="text_4">I</span>
                <span class="text_5">NCORRECT</span>
                <span class="text_6">: મારી પાસ છ ક તરા અન બાર પોપટ છ. </span>
              </p>
              <p class="block_385">
                <span class="text_4">E</span>
                <span class="text_5">XPLANATION</span>
                <span class="text_6">
                  : ભિ વાક્યામા "ક તરા અન પોપટ" છ. 6 10થી ઓછો આક છ તથી ત છ િખાશ
                  અન 12 10થી મોટો આક છ તથી ત 12 િખાશ.{' '}
                </span>
              </p>
              <p class="block_386">
                Transcribe all decimal numbers as digits.{' '}
              </p>
              <p class="block_387">
                <span class="text_3">C</span>
                <span class="text_">ORRECT</span>
                <span class="text_3">: 7.89 </span>
              </p>
              <p class="block_388">
                <span class="text_4">I</span>
                <span class="text_5">NCORRECT</span>
                <span class="text_6">: સાત દશાશ નવ્યાસી </span>
              </p>
              <p class="block_389">
                <span class="text_4">E</span>
                <span class="text_5">XAMPLE AUDIO</span>
                <span class="text_4">: " </span>
                <span class="text_6">સાત દશાશ નવ્યાસી </span>
                <span class="text_4">" </span>
              </p>
              <p class="block_390">
                <span class="text_4">E</span>
                <span class="text_5">XPLANATION</span>
                <span class="text_6">
                  : Even though 7.89 is less than 10, the correct transcription
                  uses digits and does not spell out "7.89" as "સાત દશાશ
                  નવ્યાસી" because decimal numbers always use digits.{' '}
                </span>
              </p>
              <p class="block_391">
                When two or more numbers refer to the same noun, and one number
                is 10 or greater, transcribe both as numerals.{' '}
              </p>
              <p class="block_392">
                <span class="text_4">C</span>
                <span class="text_5">ORRECT</span>
                <span class="text_6">
                  : તઓ પટ લટોરમાથી 9 ક 10 ગોલ્ડફીશ િાવ્યા.{' '}
                </span>
              </p>
              <p class="block_393">
                <span class="text_4">I</span>
                <span class="text_5">NCORRECT</span>
                <span class="text_6">
                  : તઓ પટ લટોરમાથી નિ ક 10 ગોલ્ડફીશ િાવ્યા.{' '}
                </span>
              </p>
              <p class="block_394">
                <span class="text_4">E</span>
                <span class="text_5">XPLANATION</span>
                <span class="text_6">
                  : ભિ 9, 10થી નાનો આક છ અન બન્ન ગોલ્ડફીશની વાત કર છ જમા એક
                  સખ્યા 10 છ તથી બન્ન આકડામા જ િખાશ.{' '}
                </span>
              </p>
              <p class="block_395">
                Write lists of numbers with digits and without commas.{' '}
              </p>
              <p class="block_396">
                <span class="text_3">C</span>
                <span class="text_">ORRECT</span>
                <span class="text_3">: 1 1 2 3 5 13 </span>
              </p>
              <p class="block_397">
                <span class="text_3">I</span>
                <span class="text_">NCORRECT</span>
                <span class="text_3">: 1, 1, 2, 3, 5, 13 </span>
              </p>
              <p class="block_398">
                <span class="text_4">E</span>
                <span class="text_5">XAMPLE AUDIO</span>
                <span class="text_4">: " </span>
                <span class="text_6">એક એક બ ત્રણ પાચ તર </span>
                <span class="text_4">" </span>
              </p>
              <p class="block_399">
                <span class="text_3">E</span>
                <span class="text_">XPLANATION</span>
                <span class="text_3">
                  : Because the numbers are listed, all of them are transcribed
                  as numbers even though some are less than 10 and there are no
                  commas used.{' '}
                </span>
              </p>
              <p class="block_400">
                If the speaker in the audio says one number followed by
                "ન્સમન્સિયન", "ન્સબન્સિયન", "ન્સટન્સિયન", "િાખ", "કરોડ", "અબજ",
                or higher, then transcribe it as a numeral followed by the word.
                Otherwise, transcribe it as numerals following the rules below.{' '}
              </p>
              <p class="block_401">
                <span class="text_4">C</span>
                <span class="text_5">ORRECT</span>
                <span class="text_6">: 7 ન્સમન્સિયન </span>
              </p>
              <p class="block_402">
                <span class="text_3">I</span>
                <span class="text_">NCORRECT</span>
                <span class="text_3">: 7,000,000 </span>
              </p>
              <p class="block_403">
                <span class="text_4">E</span>
                <span class="text_5">XAMPLE AUDIO</span>
                <span class="text_4">: " </span>
                <span class="text_6">સાત ન્સમન્સિયન </span>
                <span class="text_4">" </span>
              </p>
              <p class="block_404">
                <span class="text_4">E</span>
                <span class="text_5">XPLANATION</span>
                <span class="text_6">
                  : Here, the number 7 is followed by a "ન્સમન્સિયન" so it
                  should be transcribed as the numeral "7" with the word
                  "ન્સમન્સિયન" written out after it.{' '}
                </span>
              </p>
              <p class="block_405">
                <span class="text_4">C</span>
                <span class="text_5">ORRECT</span>
                <span class="text_6">: 7 કરોડ </span>
              </p>
              <p class="block_406">
                <span class="text_3">I</span>
                <span class="text_">NCORRECT</span>
                <span class="text_3">: 7,00,00,000 </span>
              </p>
              <p class="block_407">
                <span class="text_4">E</span>
                <span class="text_5">XAMPLE AUDIO</span>
                <span class="text_4">: " </span>
                <span class="text_6">સાત કરોડ </span>
                <span class="text_4">" </span>
              </p>
              <p class="block_408">
                <span class="text_4">E</span>
                <span class="text_5">XPLANATION</span>
                <span class="text_6">
                  : Here, the number 7 is followed by a "કરોડ" so it should be
                  transcribed as the numeral "7" with the word "કરોડ" written
                  out after it.{' '}
                </span>
              </p>
              <p class="block_409">
                <span class="text_4">C</span>
                <span class="text_5">ORRECT</span>
                <span class="text_6">: 1,000 ફિો </span>
              </p>
              <p class="block_410">
                <span class="text_4">I</span>
                <span class="text_5">NCORRECT</span>
                <span class="text_6">: 1 હજાર ફિો </span>
              </p>
              <p class="block_411">
                <span class="text_4">E</span>
                <span class="text_5">XAMPLE AUDIO</span>
                <span class="text_4">: " </span>
                <span class="text_6">એક હજાર ફિો </span>
                <span class="text_4">" </span>
              </p>
              <p class="block_412">
                <span class="text_4">E</span>
                <span class="text_5">XPLANATION</span>
                <span class="text_6">
                  : Only write out "િાખ" or any higher amount. In this example,
                  "એક હજાર" is small enough to be transcribed using digits
                  "1,000".{' '}
                </span>
              </p>
              <p class="block_413">
                <span class="text_4">C</span>
                <span class="text_5">ORRECT</span>
                <span class="text_6">: 7.89 અબજ </span>
              </p>
              <p class="block_414">
                <span class="text_3">I</span>
                <span class="text_">NCORRECT</span>
                <span class="text_3">: 789,00,00,000 </span>
              </p>
              <p class="block_415">
                <span class="text_4">E</span>
                <span class="text_5">XAMPLE AUDIO</span>
                <span class="text_4">: " </span>
                <span class="text_6">સાત દશાશ નવ્યાસી અબજ </span>
                <span class="text_4">" </span>
              </p>
              <p class="block_416">
                <span class="text_4">E</span>
                <span class="text_5">XPLANATION</span>
                <span class="text_6">
                  : The speaker says the number at the beginning as a decimal so
                  just write "સાત દશાશ નવ્યાસી" using digits "7.89" and then
                  write out "અબજ" after it.{' '}
                </span>
              </p>
              <p class="block_417">
                <span class="text_11">C</span>
                <span class="text_12">ORRECT</span>
                <span class="text_11">: 987,65,43,291 </span>
                <span class="text_19">E</span>
                <span class="text_20">XAMPLE AUDIO</span>
                <span class="text_19">: " </span>
                <span class="text_21">નવ અબજ ન્સસત્યાસી કરોડ પાસઠ િાખ </span>
              </p>
              <p class="block_418">
                <span class="text_6">ત્રતાિીસ હજાર બલસો એકાણ </span>
                <span class="text_4">" </span>
              </p>
              <p class="block_419">
                <span class="text_4">E</span>
                <span class="text_5">XPLANATION</span>
                <span class="text_6">
                  : Here the number is in crores where number 9 is followed by
                  "કરોડ", but it's further specified, so write out the whole
                  number with numerals as "987,65,43,291".{' '}
                </span>
              </p>
              <p class="block_420">
                <span class="text_4">C</span>
                <span class="text_5">ORRECT</span>
                <span class="text_6">: 9 અબજ આઠ </span>
              </p>
              <p class="block_421">
                <span class="text_4">I</span>
                <span class="text_5">NCORRECT</span>
                <span class="text_6">: 9 અબજ 8 </span>
              </p>
              <p class="block_422">
                <span class="text_4">E</span>
                <span class="text_5">XAMPLE AUDIO</span>
                <span class="text_4">: " </span>
                <span class="text_6">નવ અબજ આઠ </span>
                <span class="text_4">" </span>
              </p>
              <p class="block_423">
                <span class="text_4">E</span>
                <span class="text_5">XPLANATION</span>
                <span class="text_6">
                  : Speaker gets cut off. Since the number is not complete, do
                  not write it out as numerals but transcribe the initial number
                  with digits "9" then write out "અબજ" and the number 8 as "આઠ".{' '}
                </span>
              </p>
              <p class="block_424">
                Use the Indian numbering system to format large numbers when the
                speaker says "િાખ", "કરોડ", or "અબજ".{' '}
              </p>
              <p class="block_425">
                <span class="text_3">C</span>
                <span class="text_">ORRECT</span>
                <span class="text_3">: 12,12,12,123 </span>
              </p>
              <p class="block_426">
                <span class="text_3">I</span>
                <span class="text_">NCORRECT</span>
                <span class="text_3">: 121,212,123 </span>
              </p>
              <p class="block_427">
                <span class="text_4">E</span>
                <span class="text_5">XAMPLE AUDIO</span>
                <span class="text_4">: " </span>
                <span class="text_6">
                  બાર કરોડ બાર િાખ બાર હજાર એકસો ત્રવીસ{' '}
                </span>
                <span class="text_4">" </span>
              </p>
              <p class="block_428">
                <span class="text_4">E</span>
                <span class="text_5">XPLANATION</span>
                <span class="text_6">
                  : This number is transcribed following the formatting rules of
                  the Indian numbering system because the speaker said "કરોડ"
                  and "િાખ".{' '}
                </span>
              </p>
              <p class="block_429">
                For all other long numbers (4+ digits), transcribe a comma
                between groups of three digits.{' '}
              </p>
              <p class="block_430">
                <span class="text_3">C</span>
                <span class="text_">ORRECT</span>
                <span class="text_3">: 10,000 </span>
              </p>
              <p class="block_431">
                <span class="text_3">I</span>
                <span class="text_">NCORRECT</span>
                <span class="text_3">: 10000 </span>
              </p>
              <p class="block_432">
                <span class="text_4">E</span>
                <span class="text_5">XAMPLE AUDIO</span>
                <span class="text_4">: " </span>
                <span class="text_6">દસ હજાર </span>
                <span class="text_4">" </span>
              </p>
              <p class="block_433">
                <span class="text_4">E</span>
                <span class="text_5">XPLANATION</span>
                <span class="text_6">
                  : Long numbers of 4 or more digits use a comma as a separator
                  between groups of three digits. So "દસ હજાર" should be written
                  as "10,000" with a comma before the last three digits.{' '}
                </span>
              </p>
              <p class="block_434">
                In math expressions or units &amp; measures, transcribe fraction
                words using numerals and slashes.{' '}
              </p>
              <p class="block_435">
                <span class="text_4">C</span>
                <span class="text_5">ORRECT</span>
                <span class="text_6">: 1/4 ન્સકિો ખાડ આપો. </span>
              </p>
              <p class="block_436">
                <span class="text_4">I</span>
                <span class="text_5">NCORRECT</span>
                <span class="text_6">: 1⁄4 ન્સકિો ખાડ આપો. </span>
              </p>
              <p class="block_437">
                <span class="text_4">I</span>
                <span class="text_5">NCORRECT</span>
                <span class="text_6">: 0.25 ન્સકિો ખાડ આપો. </span>
              </p>
              <p class="block_438">
                <span class="text_4">E</span>
                <span class="text_5">XAMPLE AUDIO</span>
                <span class="text_4">: " </span>
                <span class="text_6">અડધો ન્સકિો ખાડ આપો </span>
                <span class="text_4">" </span>
              </p>
              <p class="block_439">
                <span class="text_4">E</span>
                <span class="text_5">XPLANATION</span>
                <span class="text_6">
                  : "અડધો" here is a fraction meaning "1/4". Be careful not to
                  include spaces between numbers and slashes or pre-combined
                  fraction characters (e.g. "1/4" not "1⁄4" ).{' '}
                </span>
              </p>
              <p class="block_440">
                <span class="text_4">C</span>
                <span class="text_5">ORRECT</span>
                <span class="text_6">: 3/4 km મા ડાબી બાજ વળો. </span>
              </p>
              <p class="block_441">
                <span class="text_4">I</span>
                <span class="text_5">NCORRECT</span>
                <span class="text_6">: 3/4 ન્સકિોમીટર મા ડાબી બાજ વળો. </span>
              </p>
              <p class="block_442">
                <span class="text_4">E</span>
                <span class="text_5">XAMPLE AUDIO</span>
                <span class="text_4">: " </span>
                <span class="text_6">પોણા ન્સકિોમીટર મા ડાબી બાજ વળો </span>
                <span class="text_4">" </span>
              </p>
              <p class="block_443">
                <span class="text_4">E</span>
                <span class="text_5">XPLANATION</span>
                <span class="text_6">
                  : The fraction should be transcribed as "3/4". Do not write
                  out "km" as "ન્સકિોમીટર".{' '}
                </span>
              </p>
              <p class="block_444">
                <span class="text_3">C</span>
                <span class="text_">ORRECT</span>
                <span class="text_3">: 1/2 * 3/4 </span>
              </p>
              <p class="block_445">
                <span class="text_4">I</span>
                <span class="text_5">NCORRECT</span>
                <span class="text_6">: 1/2 ગણા 3/4 </span>
              </p>
              <p class="block_446">
                <span class="text_4">E</span>
                <span class="text_5">XAMPLE AUDIO</span>
                <span class="text_4">: " </span>
                <span class="text_6">અડધ ગણા પોણા </span>
                <span class="text_4">" </span>
              </p>
              <p class="block_447">
                <span class="text_3">E</span>
                <span class="text_">XPLANATION</span>
                <span class="text_3">
                  : This is a math expression so transcribe the numbers using
                  slashes and numerals.{' '}
                </span>
              </p>
              <p class="block_448">
                For mixed numbers in math and units &amp; measures, use numerals
                with a space between the numeral and fraction.{' '}
              </p>
              <p class="block_449">
                <span class="text_11">C</span>
                <span class="text_12">ORRECT</span>
                <span class="text_11">: 3 1/2 km </span>
                <span class="text_19">E</span>
                <span class="text_20">XAMPLE AUDIO</span>
                <span class="text_19">: " </span>
                <span class="text_21">સાડા ત્રણ ન્સકિોમીટર </span>
                <span class="text_19">" </span>
              </p>
              <p class="block_212">
                <span class="text_3">C</span>
                <span class="text_">ORRECT</span>
                <span class="text_3">: 1/3 + 3 1/2 </span>
              </p>
              <p class="block_450">
                If a fraction is referring to items (not measurement units or
                math equations), transcribe the fraction in words.{' '}
              </p>
              <p class="block_451">
                <span class="text_4">C</span>
                <span class="text_5">ORRECT</span>
                <span class="text_6">: પોણા સફરજન </span>
              </p>
              <p class="block_452">
                <span class="text_4">I</span>
                <span class="text_5">NCORRECT</span>
                <span class="text_6">: 3/4 સફરજન </span>
              </p>
              <p class="block_453">
                <span class="text_4">E</span>
                <span class="text_5">XAMPLE AUDIO</span>
                <span class="text_4">: " </span>
                <span class="text_6">પોણા સફરજન </span>
                <span class="text_4">" </span>
              </p>
              <p class="block_454">
                <span class="text_4">E</span>
                <span class="text_5">XPLANATION</span>
                <span class="text_6">
                  : "પોણા" is a fraction that represents part of an item (સફરજન)
                  so do not use numerals and slashes to transcribe. Write the
                  fraction out.{' '}
                </span>
              </p>
              <p class="block_455">
                Mixed numbers that refer to items should be written out in words
                if it's under 10, otherwise write it with numerals.{' '}
              </p>
              <p class="block_456">
                <span class="text_4">C</span>
                <span class="text_5">ORRECT</span>
                <span class="text_6">: દોઢ નારગી </span>
              </p>
              <p class="block_457">
                <span class="text_4">I</span>
                <span class="text_5">NCORRECT</span>
                <span class="text_6">: 1 1/2 નારગી </span>
              </p>
              <p class="block_458">
                <span class="text_4">E</span>
                <span class="text_5">XPLANATION</span>
                <span class="text_6">
                  : Mixed numbers that refer to items (here, it refers to
                  "નારગી") should be written out in words as in this example
                  "દોઢ".{' '}
                </span>
              </p>
              <p class="block_459">
                <span class="text_4">C</span>
                <span class="text_5">ORRECT</span>
                <span class="text_6">: 16 પણાક ત્રણ ભાગ્યા ચાર સફરજન </span>
              </p>
              <p class="block_460">
                <span class="text_4">I</span>
                <span class="text_5">NCORRECT</span>
                <span class="text_6">: સોળ પણાક ત્રણ ભાગ્યા ચાર સફરજન </span>
              </p>
              <p class="block_461">
                <span class="text_3">E</span>
                <span class="text_">XPLANATION</span>
                <span class="text_3">
                  : Even though this is a mixed number, you should follow the
                  rule about using numerals for numbers greater than 9. 16 is
                  greater than 9 so use numerals but for the fraction part of
                  the mixed number, write it out in words.{' '}
                </span>
              </p>
              <p class="block_462">
                For mixed numbers that represent currency amounts, always use
                decimals.{' '}
              </p>
              <p class="block_463">
                <span class="text_4">C</span>
                <span class="text_5">ORRECT</span>
                <span class="text_6">: શ તમ મન ₹2.50 િોન આપશો? </span>
              </p>
              <p class="block_464">
                <span class="text_4">I</span>
                <span class="text_5">NCORRECT</span>
                <span class="text_6">: શ તમ મન 2 1/2 રૂપીયાની િોન આપશો? </span>
              </p>
              <p class="block_465">
                <span class="text_4">E</span>
                <span class="text_5">XAMPLE AUDIO</span>
                <span class="text_4">: " </span>
                <span class="text_6">શ તમ મન અઢી રૂપીયાની િોન આપશો </span>
                <span class="text_4">" </span>
              </p>
              <p class="block_466">
                <span class="text_4">E</span>
                <span class="text_5">XPLANATION</span>
                <span class="text_6">
                  : "અઢી" is a mixed number but since it refers to currency, use
                  the standard currency format "₹2.50".{' '}
                </span>
              </p>
              <p class="block_467">
                Transcribe percentages using numerals followed by the % sign. In
                the unlikely case that you encounter a number of a million or
                greater used as a percentage, spell it out.{' '}
              </p>
              <p class="block_468">
                <span class="text_19">E</span>
                <span class="text_20">XAMPLE </span>
                <span class="text_11">C</span>
                <span class="text_12">ORRECT</span>
                <span class="text_13">: 2% દધ </span>
              </p>
              <p class="block_469">
                <span class="text_5">AUDIO</span>
                <span class="text_4">: " </span>
                <span class="text_6">બ ટકા દધ </span>
                <span class="text_4">" </span>
              </p>
              <p class="block_470">
                <span class="text_4">I</span>
                <span class="text_5">NCORRECT</span>
                <span class="text_6">: 2 ટકા દધ </span>
              </p>
              <p class="block_471">
                <span class="text_3">E</span>
                <span class="text_">XPLANATION</span>
                <span class="text_3">
                  : Amount has percentages so use numerals and the percent sign
                  "2%", don't write out the words.{' '}
                </span>
              </p>
              <p class="block_472">
                <span class="text_4">C</span>
                <span class="text_5">ORRECT</span>
                <span class="text_6">: 1 કરોડ ટકા </span>
              </p>
              <p class="block_473">
                <span class="text_4">I</span>
                <span class="text_5">NCORRECT</span>
                <span class="text_6">: 1 કરો% </span>
              </p>
              <p class="block_474">
                <span class="text_4">E</span>
                <span class="text_5">XAMPLE AUDIO</span>
                <span class="text_4">: " </span>
                <span class="text_6">એક કરોડ ટકા </span>
                <span class="text_4">" </span>
              </p>
              <p class="block_475">
                <span class="text_4">E</span>
                <span class="text_5">XPLANATION</span>
                <span class="text_6">
                  : The rule regarding amounts in the lakhs or greater applies
                  here so spell out "કરોડ" and "ટકા" but use digits for the
                  number in front ("1" not "એક").{' '}
                </span>
              </p>
              <p class="block_476">
                Use Roman numerals only when part of an official name or title.{' '}
              </p>
              <p class="block_477">
                <span class="text_4">C</span>
                <span class="text_5">ORRECT</span>
                <span class="text_6">: સપર બાઉિ XLVII </span>
              </p>
              <p class="block_478">
                <span class="text_4">I</span>
                <span class="text_5">NCORRECT</span>
                <span class="text_6">: સપર બાઉિ 47 </span>
              </p>
              <p class="block_479">
                <span class="text_4">E</span>
                <span class="text_5">XAMPLE AUDIO</span>
                <span class="text_4">: " </span>
                <span class="text_6">સપર બાઉિ સડતાિીસ </span>
                <span class="text_4">" </span>
              </p>
              <p class="block_480">
                <span class="text_4">E</span>
                <span class="text_5">XPLANATION</span>
                <span class="text_6">
                  : The Super Bowl refers to an official name of a sports game
                  and is stylized by using Roman numerals for the game number so
                  write "સડતાિીસ" as "XLVII".{' '}
                </span>
              </p>
              <p class="block_481">
                Transcribe seasons and episodes of television shows with
                numerals.{' '}
              </p>
              <p class="block_482">
                <span class="text_11">C</span>
                <span class="text_12">ORRECT</span>
                <span class="text_13">: ન્સસઝન 3 એન્સપસોડની 2 </span>
                <span class="text_19">E</span>
                <span class="text_20">XAMPLE AUDIO</span>
                <span class="text_19">: " </span>
                <span class="text_21">ન્સસઝન ત્રણ એન્સપસોડની બ </span>
                <span class="text_19">" </span>
              </p>
              <p class="block_483">
                <span class="text_3">E</span>
                <span class="text_">XPLANATION</span>
                <span class="text_3">
                  : Even though "3" and "2" are less than 10, they should be
                  transcribed as numerals here since they refer to the season
                  and episode of a television show.{' '}
                </span>
              </p>
              <p class="block_484">
                For landline phone numbers, transcribe a space after the
                operating code then transcribe the remaining digits together
                with no spaces. For mobile numbers, transcribe a space after the
                country code, and a space after the fourth digit of the phone
                number. Only transcribe a "+" is the speaker says "પ્િસ".{' '}
              </p>
              <p class="block_485">
                <span class="text_3">C</span>
                <span class="text_">ORRECT</span>
                <span class="text_3">: 079 22683721 </span>
              </p>
              <p class="block_486">
                <span class="text_3">I</span>
                <span class="text_">NCORRECT</span>
                <span class="text_3">: 07922683721 </span>
              </p>
              <p class="block_487">
                <span class="text_4">E</span>
                <span class="text_5">XAMPLE AUDIO</span>
                <span class="text_4">: " </span>
                <span class="text_6">શ્ય સાત નવ બ બ છ આઠ ત્રણ સાત બ એક </span>
                <span class="text_4">" </span>
              </p>
              <p class="block_488">
                <span class="text_3">E</span>
                <span class="text_">XPLANATION</span>
                <span class="text_3">
                  : The correct transcription of this landline number includes a
                  space between the operating code and the rest of the number.{' '}
                </span>
              </p>
              <p class="block_489">
                <span class="text_3">C</span>
                <span class="text_">ORRECT</span>
                <span class="text_3">: 91 9897 334241 </span>
              </p>
              <p class="block_490">
                <span class="text_3">I</span>
                <span class="text_">NCORRECT</span>
                <span class="text_3">: 91-9897-334241 </span>
              </p>
              <p class="block_491">
                <span class="text_4">E</span>
                <span class="text_5">XAMPLE AUDIO</span>
                <span class="text_4">: " </span>
                <span class="text_6">
                  પ્િસ નવ એક નવ આઠ નવ સાત ત્રણ ત્રણ ચાર બ ચાર એક{' '}
                </span>
                <span class="text_4">" </span>
              </p>
              <p class="block_492">
                <span class="text_3">E</span>
                <span class="text_">XPLANATION</span>
                <span class="text_3">
                  : The correct transcription of this mobile number includes a
                  space after the country calling code and the next four digits.{' '}
                </span>
              </p>
              <p class="block_493">
                <span class="text_11">C</span>
                <span class="text_12">ORRECT</span>
                <span class="text_11">: +91 9897 334241 </span>
                <span class="text_19">E</span>
                <span class="text_20">XAMPLE AUDIO</span>
                <span class="text_19">: " </span>
                <span class="text_21">પ્િસ નવ એક નવ આઠ નવ સાત ત્રણ ત્રણ </span>
              </p>
              <p class="block_494">
                <span class="text_6">ચાર બ ચાર એક </span>
                <span class="text_4">" </span>
              </p>
              <p class="block_495">
                <span class="text_4">E</span>
                <span class="text_5">XPLANATION</span>
                <span class="text_6">
                  : Since the speaker said the country calling code with a
                  "પ્િસ" before the number, transcribe the spoken "પ્િસ" as the
                  plus symbol, "+".{' '}
                </span>
              </p>
              <p class="block_496">
                Transcribe alpha-digit sequences (product codes, car models,
                etc.) in their most natural way (there may be more than one way
                to transcribe). Do not transcribe credit card numbers or any
                other personal information numbers.{' '}
              </p>
              <p class="block_497">
                <span class="text_11">C</span>
                <span class="text_12">ORRECT</span>
                <span class="text_11">: XT660 or XT 660 </span>
                <span class="text_19">E</span>
                <span class="text_20">XAMPLE AUDIO</span>
                <span class="text_19">: " </span>
                <span class="text_22">x t </span>
                <span class="text_21">છ સાઈઠ </span>
                <span class="text_19">" </span>
              </p>
              <p class="block_498">
                <span class="text_3">E</span>
                <span class="text_">XPLANATION</span>
                <span class="text_3">
                  : Here the letter sequence followed by digits can be
                  transcribed either all together "XT660" or with a space
                  between the letters and numbers "XT 660".{' '}
                </span>
              </p>
              <p class="block_499">
                Math expressions should be transcribed with numerals and math
                symbols with spaces in between them.{' '}
              </p>
              <p class="block_500">
                <span class="text_3">C</span>
                <span class="text_">ORRECT</span>
                <span class="text_3">: 5 / 6 </span>
              </p>
              <p class="block_501">
                <span class="text_3">I</span>
                <span class="text_">NCORRECT</span>
                <span class="text_3">: 5/6 </span>
              </p>
              <p class="block_502">
                <span class="text_4">E</span>
                <span class="text_5">XAMPLE AUDIO</span>
                <span class="text_4">: " </span>
                <span class="text_6">પાચ ભાગ્યા છ </span>
                <span class="text_4">" </span>
              </p>
              <p class="block_503">
                <span class="text_3">E</span>
                <span class="text_">XPLANATION</span>
                <span class="text_3">
                  : The spoken sentence sounds like a math expression so the
                  corresponding math symbols and numerals are used to transcribe
                  it.{' '}
                </span>
              </p>
              <p class="block_504">
                <span class="text_4">C</span>
                <span class="text_5">ORRECT</span>
                <span class="text_6">: 5 * 6 કટિા થાય? </span>
              </p>
              <p class="block_505">
                <span class="text_4">I</span>
                <span class="text_5">NCORRECT</span>
                <span class="text_6">: 5 ગણા 6 કટિા થાય? </span>
              </p>
              <p class="block_506">
                <span class="text_4">E</span>
                <span class="text_5">XAMPLE AUDIO</span>
                <span class="text_4">: " </span>
                <span class="text_6">પાચ ગણા છ કટિા થાય </span>
                <span class="text_4">" </span>
              </p>
              <p class="block_507">
                <span class="text_3">E</span>
                <span class="text_">XPLANATION</span>
                <span class="text_3">
                  : The correct transcription uses the asterisk symbol for
                  multiplication "*", and not "x".{' '}
                </span>
              </p>
              <p class="block_508">Currency and unit </p>
              <p class="block_509">
                Transcribe currencies with the rupee symbol "₹" followed by
                digits. Do not add a space or period between the rupee symbol
                and number.{' '}
              </p>
              <p class="block_510">
                <span class="text_11">C</span>
                <span class="text_12">ORRECT</span>
                <span class="text_11">: ₹220 </span>
                <span class="text_19">E</span>
                <span class="text_20">XAMPLE AUDIO</span>
                <span class="text_19">: " </span>
                <span class="text_21">બલસો વીસ રૂપીયાની </span>
                <span class="text_19">" </span>
              </p>
              <p class="block_511">
                <span class="text_4">E</span>
                <span class="text_5">XPLANATION</span>
                <span class="text_6">
                  : "બલસો વીસ રૂપીયાની" is an amount of currency. Transcribe it
                  using "₹" followed by "220".{' '}
                </span>
              </p>
              <p class="block_512">
                If it is obvious from context that a number reflects an amount
                of currency, transcribe with a currency symbol.{' '}
              </p>
              <p class="block_513">
                For paisa-only quantities, the word "પસા" should follow the
                amount.{' '}
              </p>
              <p class="block_514">
                <span class="text_4">C</span>
                <span class="text_5">ORRECT</span>
                <span class="text_6">: 20 પસા </span>
              </p>
              <p class="block_515">
                <span class="text_3">I</span>
                <span class="text_">NCORRECT</span>
                <span class="text_3">: 20 p </span>
              </p>
              <p class="block_516">
                <span class="text_4">E</span>
                <span class="text_5">XAMPLE AUDIO</span>
                <span class="text_4">: " </span>
                <span class="text_6">વીસ પસા </span>
                <span class="text_4">" </span>
              </p>
              <p class="block_517">
                For all other currencies and slang terms for money, spell out
                the words.{' '}
              </p>
              <p class="block_518">
                <span class="text_4">C</span>
                <span class="text_5">ORRECT</span>
                <span class="text_6">: 100 યઆન </span>
              </p>
              <p class="block_519">
                <span class="text_4">I</span>
                <span class="text_5">NCORRECT</span>
                <span class="text_17">: 100元 </span>
              </p>
              <p class="block_520">
                <span class="text_4">E</span>
                <span class="text_5">XAMPLE AUDIO</span>
                <span class="text_4">: " </span>
                <span class="text_6">એકસો યઆન </span>
                <span class="text_4">" </span>
              </p>
              <p class="block_521">
                <span class="text_4">E</span>
                <span class="text_5">XPLANATION</span>
                <span class="text_6">
                  : "યઆન" refers to a foreign currency. Transcribe the numbers
                  as digits "100" and write out the word "યઆન". Don't use the
                  yuan symbol.{' '}
                </span>
              </p>
              <p class="block_522">
                When a speaker uses a currency name without specifying a
                quantity, spell it out.{' '}
              </p>
              <p class="block_523">
                <span class="text_11">C</span>
                <span class="text_12">ORRECT</span>
                <span class="text_13">: આ ભાઈ તના રૂન્સપયા આપી દશ. </span>
                <span class="text_14">E</span>
                <span class="text_15">XPLANATION</span>
                <span class="text_14">
                  : The speaker is referring to rupees in{' '}
                </span>
              </p>
              <p class="block_524">
                general with no specific amounts, so write out the word
                "રૂન્સપયા".{' '}
              </p>
              <p class="block_525">
                For ranges or non-specific currency quantities, write everything
                out as spoken.{' '}
              </p>
              <p class="block_526">
                Keep units of measurement in English. Do not transliterate.{' '}
              </p>
              <p class="block_527">
                <span class="text_3">C</span>
                <span class="text_">ORRECT</span>
                <span class="text_3">: MB </span>
              </p>
              <p class="block_528">
                <span class="text_4">I</span>
                <span class="text_5">NCORRECT</span>
                <span class="text_6">: મગાબાઈટ </span>
              </p>
              <p class="block_529">
                <span class="text_3">E</span>
                <span class="text_">XPLANATION</span>
                <span class="text_3">
                  : Please use the abbreviation "MB" instead of writing out the
                  whole word.{' '}
                </span>
              </p>
              <p class="block_530">
                <span class="text_3">C</span>
                <span class="text_">ORRECT</span>
                <span class="text_3">: km </span>
              </p>
              <p class="block_531">
                <span class="text_4">I</span>
                <span class="text_5">NCORRECT</span>
                <span class="text_6">: ન્સકિોમીટર </span>
              </p>
              <p class="block_532">
                <span class="text_3">E</span>
                <span class="text_">XPLANATION</span>
                <span class="text_3">
                  : Please use the abbreviation "km" instead of writing out the
                  whole word.{' '}
                </span>
              </p>
              <p class="block_533">
                <span class="text_3">C</span>
                <span class="text_">ORRECT</span>
                <span class="text_3">: cm2 </span>
              </p>
              <p class="block_534">
                <span class="text_4">I</span>
                <span class="text_5">NCORRECT</span>
                <span class="text_6">: ચોરસ સટીમીટર </span>
              </p>
              <p class="block_535">
                <span class="text_3">E</span>
                <span class="text_">XPLANATION</span>
                <span class="text_3">
                  : Please use the abbreviation "cm2" instead of writing out the
                  whole word.{' '}
                </span>
              </p>
              <p class="block_536">
                <span class="text_3">C</span>
                <span class="text_">ORRECT</span>
                <span class="text_3">: g </span>
              </p>
              <p class="block_537">
                <span class="text_4">I</span>
                <span class="text_5">NCORRECT</span>
                <span class="text_6">: ગ્રામ </span>
              </p>
              <p class="block_538">
                <span class="text_3">E</span>
                <span class="text_">XPLANATION</span>
                <span class="text_3">
                  : Please use the abbreviation "g" instead of writing out the
                  whole word.{' '}
                </span>
              </p>
              <p class="block_539">Common technical abbreviations </p>
              <p class="block_540">
                <span class="text_">• </span>
                <span class="text_1">MB </span>
              </p>
              <p class="block_541">
                <span class="text_">• </span>
                <span class="text_1">KB </span>
              </p>
              <p class="block_542">
                <span class="text_">• </span>
                <span class="text_1">GB </span>
              </p>
              <p class="block_543">
                <span class="text_8">• </span>
                <span class="text_23">TB </span>
                <span class="text_26">
                  <sub class="calibre2">
                    Common measurements of distance and rate{' '}
                  </sub>
                </span>
              </p>
              <p class="block_544">
                <span class="text_">• </span>
                <span class="text_1">in </span>
              </p>
              <p class="block_545">
                <span class="text_">• </span>
                <span class="text_1">ft </span>
              </p>
              <p class="block_546">
                <span class="text_">• </span>
                <span class="text_1">yd </span>
              </p>
              <p class="block_547">
                <span class="text_">• </span>
                <span class="text_1">mi </span>
              </p>
              <p class="block_548">
                <span class="text_">• </span>
                <span class="text_1">mm </span>
              </p>
              <p class="block_549">
                <span class="text_">• </span>
                <span class="text_1">cm </span>
              </p>
              <p class="block_550">
                <span class="text_">• </span>
                <span class="text_1">m </span>
              </p>
              <p class="block_551">
                <span class="text_">• </span>
                <span class="text_1">km </span>
              </p>
              <p class="block_552">
                <span class="text_">• </span>
                <span class="text_1">mph </span>
              </p>
              <p class="block_553">
                <span class="text_">• </span>
                <span class="text_1">km/h </span>
              </p>
              <p class="block_554">Common measurements of area </p>
              <p class="block_555">
                <span class="text_">• </span>
                <span class="text_1">km2 </span>
              </p>
              <p class="block_556">
                <span class="text_">• </span>
                <span class="text_1">in2 </span>
              </p>
              <p class="block_557">
                <span class="text_">• </span>
                <span class="text_1">ft2 </span>
              </p>
              <p class="block_558">
                <span class="text_">• </span>
                <span class="text_1">mi2 </span>
              </p>
              <p class="block_548">
                <span class="text_">• </span>
                <span class="text_1">cm2 </span>
              </p>
              <p class="block_559">
                <span class="text_">• </span>
                <span class="text_1">m2 </span>
              </p>
              <p class="block_548">
                <span class="text_">• </span>
                <span class="text_1">km2 </span>
              </p>
              <p class="block_560">Common measurements of weight and volume </p>
              <p class="block_561">
                <span class="text_">• </span>
                <span class="text_1">g </span>
              </p>
              <p class="block_562">
                <span class="text_">• </span>
                <span class="text_1">mg </span>
              </p>
              <p class="block_547">
                <span class="text_">• </span>
                <span class="text_1">kg </span>
              </p>
              <p class="block_563">
                <span class="text_">• </span>
                <span class="text_1">L </span>
              </p>
              <p class="block_564">
                <span class="text_">• </span>
                <span class="text_1">m3 </span>
              </p>
              <p class="block_565">
                <span class="text_">• </span>
                <span class="text_1">in3 </span>
              </p>
              <p class="block_566">For degrees, use the ° symbol. </p>
              <p class="block_567">
                <span class="text_3">C</span>
                <span class="text_">ORRECT</span>
                <span class="text_3">: 20° C </span>
              </p>
              <p class="block_568">
                <span class="text_4">I</span>
                <span class="text_5">NCORRECT</span>
                <span class="text_6">: 20 ન્સડગ્રી સલ્સીઅસ </span>
              </p>
              <p class="block_569">
                <span class="text_4">E</span>
                <span class="text_5">XAMPLE AUDIO</span>
                <span class="text_4">: " </span>
                <span class="text_6">વીસ ન્સડગ્રી સલ્સીઅસ </span>
                <span class="text_4">" </span>
              </p>
              <p class="block_570">
                <span class="text_4">E</span>
                <span class="text_5">XPLANATION</span>
                <span class="text_6">
                  : The speaker explicitly says "સલ્સીઅસ" here so use the symbol
                  for celsius "C" after the degree symbol.{' '}
                </span>
              </p>
              <p class="block_571">
                <span class="text_3">C</span>
                <span class="text_">ORRECT</span>
                <span class="text_3">: 20 C </span>
              </p>
              <p class="block_572">
                <span class="text_3">I</span>
                <span class="text_">NCORRECT</span>
                <span class="text_3">: 20° C </span>
              </p>
              <p class="block_573">
                <span class="text_4">E</span>
                <span class="text_5">XAMPLE AUDIO</span>
                <span class="text_4">: " </span>
                <span class="text_6">વીસ સલ્સીઅસ </span>
                <span class="text_4">" </span>
              </p>
              <p class="block_574">
                <span class="text_4">E</span>
                <span class="text_5">XPLANATION</span>
                <span class="text_6">
                  : If the speaker refers to the temperature in degrees, but
                  does not actually say the word "ન્સડગ્રી", do not transcribe
                  the word or the degree symbol.{' '}
                </span>
              </p>
              <p class="block_575">
                Abbreviate all units of measurement that are after numbers.{' '}
              </p>
              <p class="block_576">
                <span class="text_4">C</span>
                <span class="text_5">ORRECT</span>
                <span class="text_6">
                  : મારા પન્સરવાર ઍ 10 L નારગી નો રસ ખન્સરન્સદયો.{' '}
                </span>
              </p>
              <p class="block_577">
                <span class="text_4">I</span>
                <span class="text_5">NCORRECT</span>
                <span class="text_6">
                  : મારા પન્સરવાર ઍ 10 િીટર નારગી નો રસ ખન્સરન્સદયો.{' '}
                </span>
              </p>
              <p class="block_487">
                <span class="text_4">E</span>
                <span class="text_5">XAMPLE AUDIO</span>
                <span class="text_4">: " </span>
                <span class="text_6">
                  મારા પન્સરવાર ઍ દસ િીટર નારગી નો રસ ખન્સરન્સદયો{' '}
                </span>
                <span class="text_4">" </span>
              </p>
              <p class="block_578">
                <span class="text_4">E</span>
                <span class="text_5">XPLANATION</span>
                <span class="text_6">
                  : Since "િીટર" appears after the number 10, it is abbreviated
                  as "L" with a space between "10" and "L".{' '}
                </span>
              </p>
              <p class="block_579">
                Transcribe all numeric values preceding units in numeral form,
                even if under 10.{' '}
              </p>
              <p class="block_580">
                <span class="text_3">C</span>
                <span class="text_">ORRECT</span>
                <span class="text_3">: 5 g </span>
              </p>
              <p class="block_581">
                <span class="text_4">I</span>
                <span class="text_5">NCORRECT</span>
                <span class="text_6">: પાચ g </span>
              </p>
              <p class="block_582">
                <span class="text_4">E</span>
                <span class="text_5">XAMPLE AUDIO</span>
                <span class="text_4">: " </span>
                <span class="text_6">પાચ ગ્રામ </span>
                <span class="text_4">" </span>
              </p>
              <p class="block_583">
                <span class="text_11">C</span>
                <span class="text_12">ORRECT</span>
                <span class="text_13">: 3 મન્સહના </span>
                <span class="text_19">E</span>
                <span class="text_20">XAMPLE AUDIO</span>
                <span class="text_19">: " </span>
                <span class="text_21">ત્રણ મન્સહના </span>
                <span class="text_19">" </span>
              </p>
              <p class="block_584">
                For lengths, widths, and heights: use "x" instead of any
                preposition.{' '}
              </p>
              <p class="block_585">
                If a speaker says a number without saying "વાગ્યો", "વાગ" or any
                other time words, format it as time if it is obvious that the
                number refers to a time.{' '}
              </p>
              <p class="block_468">
                <span class="text_19">E</span>
                <span class="text_20">XAMPLE </span>
                <span class="text_11">C</span>
                <span class="text_12">ORRECT</span>
                <span class="text_13">: કાયરમ બપોર 2:00 છ. </span>
              </p>
              <p class="block_586">
                <span class="text_5">AUDIO</span>
                <span class="text_4">: " </span>
                <span class="text_6">કાયરમ બપોર બ છ </span>
                <span class="text_4">" </span>
              </p>
              <p class="block_587">
                <span class="text_4">I</span>
                <span class="text_5">NCORRECT</span>
                <span class="text_6">: કાયરમ બપોર 2 છ </span>
              </p>
              <p class="block_588">
                <span class="text_4">E</span>
                <span class="text_5">XPLANATION</span>
                <span class="text_6">
                  : Although the speaker did not say "વાગ", it is obvious from
                  the context that the speaker is referring to the time. "બ"
                  should be transcribed using time format with a ":" between the
                  "2" and "00"{' '}
                </span>
              </p>
              <p class="block_589">Date and time </p>
              <p class="block_590">
                When transcribing dates, write the date in numeral form followed
                by the month written out in words, then the year in numeral
                form.{' '}
              </p>
              <p class="block_591">
                <span class="text_4">C</span>
                <span class="text_5">ORRECT</span>
                <span class="text_6">: 3 ઑક્ટોબર 2001 </span>
              </p>
              <p class="block_592">
                <span class="text_4">I</span>
                <span class="text_5">NCORRECT</span>
                <span class="text_6">: 3મી ઑક્ટોબર 2001 </span>
              </p>
              <p class="block_593">
                <span class="text_4">E</span>
                <span class="text_5">XAMPLE AUDIO</span>
                <span class="text_4">: " </span>
                <span class="text_6">ત્રણ ઑક્ટોબર બ હજાર એક </span>
                <span class="text_4">" </span>
              </p>
              <p class="block_423">
                <span class="text_4">E</span>
                <span class="text_5">XPLANATION</span>
                <span class="text_6">
                  : Write the date as the number "3", spell the month out as
                  "ઑક્ટોબર", and use 4 digits to write the year out as "2001".{' '}
                </span>
              </p>
              <p class="block_594">
                <span class="text_4">C</span>
                <span class="text_5">ORRECT</span>
                <span class="text_6">: બધવાર, 6 માચ </span>
              </p>
              <p class="block_595">
                <span class="text_4">I</span>
                <span class="text_5">NCORRECT</span>
                <span class="text_6">: બધવાર 6 માચ </span>
              </p>
              <p class="block_596">
                <span class="text_4">E</span>
                <span class="text_5">XAMPLE AUDIO</span>
                <span class="text_4">: " </span>
                <span class="text_6">બધવાર છઠ્ઠી માચ </span>
                <span class="text_4">" </span>
              </p>
              <p class="block_597">
                <span class="text_4">E</span>
                <span class="text_5">XPLANATION</span>
                <span class="text_6">
                  : There should be a comma between "બધવાર" and the date in
                  numeral form "6".{' '}
                </span>
              </p>
              <p class="block_598">
                Exception: When the date is spoken as a sequence of numbers,
                transcribe it as numerals with the proper punctuation separating
                the date, month, and year.{' '}
              </p>
              <p class="block_599">
                <span class="text_11">C</span>
                <span class="text_12">ORRECT</span>
                <span class="text_11">: 12/7/2000 </span>
                <span class="text_19">E</span>
                <span class="text_20">XAMPLE AUDIO</span>
                <span class="text_19">: " </span>
                <span class="text_21">બાર લિશ સાત લિશ બ હજાર </span>
                <span class="text_19">" </span>
              </p>
              <p class="block_600">
                <span class="text_4">E</span>
                <span class="text_5">XPLANATION</span>
                <span class="text_6">
                  : The speaker is saying the date aloud so transcribe the
                  numbers and numerals and the "લિશ" as the symbol "/".{' '}
                </span>
              </p>
              <p class="block_601">
                Write times in hh:mm format whenever possible, unless it would
                look unnatural to do so.{' '}
              </p>
              <p class="block_602">
                <span class="text_3">C</span>
                <span class="text_">ORRECT</span>
                <span class="text_3">: 2:00 </span>
              </p>
              <p class="block_603">
                <span class="text_4">I</span>
                <span class="text_5">NCORRECT</span>
                <span class="text_6">: 2 વાગ </span>
              </p>
              <p class="block_604">
                <span class="text_4">E</span>
                <span class="text_5">XAMPLE AUDIO</span>
                <span class="text_4">: " </span>
                <span class="text_6">બ વાગ </span>
                <span class="text_4">" </span>
              </p>
              <p class="block_605">
                <span class="text_19">E</span>
                <span class="text_20">XAMPLE </span>
                <span class="text_11">C</span>
                <span class="text_12">ORRECT</span>
                <span class="text_13">: એ 4:00 આવશ </span>
              </p>
              <p class="block_606">
                <span class="text_5">AUDIO</span>
                <span class="text_4">: " </span>
                <span class="text_6">એ ચાર આવશ </span>
                <span class="text_4">" </span>
              </p>
              <p class="block_607">
                <span class="text_4">I</span>
                <span class="text_5">NCORRECT</span>
                <span class="text_6">: એ 4 આવશ </span>
              </p>
              <p class="block_608">
                <span class="text_11">C</span>
                <span class="text_12">ORRECT</span>
                <span class="text_13">: 11:40 થઈ ગયા </span>
                <span class="text_19">E</span>
                <span class="text_20">XAMPLE AUDIO</span>
                <span class="text_19">: " </span>
                <span class="text_21">અન્સગયાર વાગીન ચાિીસ થઈ ગયા </span>
                <span class="text_19">" </span>
              </p>
              <p class="block_609">
                <span class="text_11">C</span>
                <span class="text_12">ORRECT</span>
                <span class="text_11">: 1:45 </span>
                <span class="text_19">E</span>
                <span class="text_20">XAMPLE AUDIO</span>
                <span class="text_19">: " </span>
                <span class="text_21">પોના બ </span>
                <span class="text_19">" </span>
              </p>
              <p class="block_610">
                For "બપોર" and "મધરાત", use the written form.{' '}
              </p>
              <p class="block_611">
                <span class="text_4">C</span>
                <span class="text_5">ORRECT</span>
                <span class="text_6">: બપોર </span>
              </p>
              <p class="block_612">
                <span class="text_3">I</span>
                <span class="text_">NCORRECT</span>
                <span class="text_3">: 12:00 </span>
              </p>
              <p class="block_613">
                <span class="text_4">E</span>
                <span class="text_5">XAMPLE AUDIO</span>
                <span class="text_4">: " </span>
                <span class="text_6">બપોર </span>
                <span class="text_4">" </span>
              </p>
              <p class="block_614">
                <span class="text_4">C</span>
                <span class="text_5">ORRECT</span>
                <span class="text_6">: મધરાત </span>
              </p>
              <p class="block_615">
                <span class="text_3">I</span>
                <span class="text_">NCORRECT</span>
                <span class="text_3">: 12:00 </span>
              </p>
              <p class="block_616">
                <span class="text_4">E</span>
                <span class="text_5">XAMPLE AUDIO</span>
                <span class="text_4">: " </span>
                <span class="text_6">મધરાત </span>
                <span class="text_4">" </span>
              </p>
              <p class="block_617">Address </p>
              <p class="block_618">
                Write out the full names of locations, roads, states, etc. Only
                use abbreviations when explicitly spoken.{' '}
              </p>
              <p class="block_175">Use commas for ENTITY, LOCATION. </p>
              <p class="block_619">
                <span class="text_4">C</span>
                <span class="text_5">ORRECT</span>
                <span class="text_6">: કૌન્સશક જનરિ લટોસ, પણ </span>
              </p>
              <p class="block_620">
                <span class="text_4">C</span>
                <span class="text_5">ORRECT</span>
                <span class="text_6">: કૉફી શોપ, 400001 </span>
              </p>
              <p class="block_621">
                <span class="text_4">C</span>
                <span class="text_5">ORRECT</span>
                <span class="text_6">: ન્સવવકાનદ ન્સનશાળ, ન્સટળક રોડ </span>
              </p>
              <p class="block_622">
                <span class="text_4">C</span>
                <span class="text_5">ORRECT</span>
                <span class="text_6">: બન્સરલતા િવાઝા, મઝબાન રોડ </span>
              </p>
              <p class="block_623">Web </p>
              <p class="block_624">
                Write URLs, email addresses, and Twitter hashtags as they are
                spoken and don't capitalize them.{' '}
              </p>
              <p class="block_625">
                <span class="text_3">C</span>
                <span class="text_">ORRECT</span>
                <span class="text_3">: www.google.com </span>
              </p>
              <p class="block_626">
                <span class="text_4">I</span>
                <span class="text_5">NCORRECT</span>
                <span class="text_6">
                  : www {`{ટપક}`} Google {`{ટપક}`} com{' '}
                </span>
              </p>
              <p class="block_627">
                <span class="text_4">E</span>
                <span class="text_5">XAMPLE AUDIO</span>
                <span class="text_4">: " </span>
                <span class="text_6">
                  ડબ્લ્ય ડબ્લ્ય ડબ્લ્ય ટપક ગગિ ટપક કોમ{' '}
                </span>
                <span class="text_4">" </span>
              </p>
              <p class="block_628">
                <span class="text_4">E</span>
                <span class="text_5">XPLANATION</span>
                <span class="text_6">
                  : Although the speaker said "ટપક " aloud, these are symbols
                  that are associated with URLs and should be transcribed as "."
                  and not spelled out in curly brackets.{' '}
                </span>
              </p>
              <p class="block_629">
                <span class="text_11">C</span>
                <span class="text_12">ORRECT</span>
                <span class="text_11">: http://amazon.com </span>
                <span class="text_19">E</span>
                <span class="text_20">XAMPLE AUDIO</span>
                <span class="text_19">: " </span>
                <span class="text_21">એચ ટી ટી પી અપણ ન્સવરામ લિશ લિશ </span>
              </p>
              <p class="block_630">
                <span class="text_6">એમઝોન ટપક કોમ </span>
                <span class="text_4">" </span>
              </p>
              <p class="block_631">
                <span class="text_4">E</span>
                <span class="text_5">XPLANATION</span>
                <span class="text_6">
                  : The "એચ ટી ટી પી અપણ ન્સવરામ લિશ લિશ" is part of the web URL
                  format and should be written using punctuation symbols
                  "http://".{' '}
                </span>
              </p>
              <p class="block_632">
                <span class="text_7">C</span>
                <span class="text_8">ORRECT</span>
                <span class="text_7">: mike@example.org </span>
                <span class="text_27">E</span>
                <span class="text_28">XAMPLE AUDIO</span>
                <span class="text_27">: " </span>
                <span class="text_29">mike at example dot org </span>
                <span class="text_27">" </span>
              </p>
              <p class="block_633">
                <span class="text_4">C</span>
                <span class="text_5">ORRECT</span>
                <span class="text_6">: #ઈન્સ્ડયા આજ વરસાદ જવ વાતાવરણ છ. </span>
              </p>
              <p class="block_634">
                <span class="text_4">I</span>
                <span class="text_5">NCORRECT</span>
                <span class="text_6">: #ઈન્સ્ડયા. આજ વરસાદ જવ વાતાવરણ છ. </span>
              </p>
              <p class="block_635">
                <span class="text_4">E</span>
                <span class="text_5">XAMPLE AUDIO</span>
                <span class="text_4">: " </span>
                <span class="text_6">
                  હશ ટગ ઈન્સ્ડયા આજ વરસાદ જવ વાતાવરણ છ{' '}
                </span>
                <span class="text_4">" </span>
              </p>
              <p class="block_636">
                Do not correct speaker errors such as transcribing a slash when
                the user actually says "બક લિશ".{' '}
              </p>
              <p class="block_637">
                <span class="text_3">C</span>
                <span class="text_">ORRECT</span>
                <span class="text_3">: http:\\mail.yahoo.com </span>
              </p>
              <p class="block_638">
                <span class="text_3">I</span>
                <span class="text_">NCORRECT</span>
                <span class="text_3">: http://mail.yahoo.com </span>
              </p>
              <p class="block_639">
                <span class="text_4">E</span>
                <span class="text_5">XAMPLE AUDIO</span>
                <span class="text_4">: " </span>
                <span class="text_6">
                  એચ ટી ટી પી અપણ ન્સવરામ બક લિશ બક લિશ મિ ટપક યાહ ટપક કોમ{' '}
                </span>
                <span class="text_4">" </span>
              </p>
              <p class="block_640">
                <span class="text_4">E</span>
                <span class="text_5">XPLANATION</span>
                <span class="text_6">
                  : Even though the correct format should have the forward slash
                  "/", the speaker says "બક લિશ" here so transcribe it using the
                  backslash symbol "\".{' '}
                </span>
              </p>
              <p class="block_641">
                If the speaker drops a "ડબલ્ય " or "ટપક " and it's an obvious
                URL, you should correct these errors. If the speaker doesn't say
                "ડબલ્ય " at all, do not add them.{' '}
              </p>
              <p class="block_642">
                <span class="text_27">E</span>
                <span class="text_28">XAMPLE </span>
                <span class="text_7">C</span>
                <span class="text_8">ORRECT</span>
                <span class="text_7">: www.facebook.com </span>
              </p>
              <p class="block_643">
                <span class="text_5">AUDIO</span>
                <span class="text_4">: " </span>
                <span class="text_6">ડબલ્ય ડબલ્ય ફસબક ટપક કોમ </span>
                <span class="text_4">" </span>
              </p>
              <p class="block_644">
                <span class="text_3">I</span>
                <span class="text_">NCORRECT</span>
                <span class="text_3">: ww facebook.com </span>
              </p>
              <p class="block_645">
                <span class="text_4">E</span>
                <span class="text_5">XPLANATION</span>
                <span class="text_6">
                  : The speaker doesn't say the "ટપક " before "ફસબક" and only
                  says two "ડબલ્ય "s so add the missing dot and missing "ડબલ્ય "
                  when transcribing.{' '}
                </span>
              </p>
              <p class="block_646">
                If a URL is spelled out in individual letters, transcribe
                without spaces between individual letters.{' '}
              </p>
              <p class="block_647">Abbreviation </p>
              <p class="block_648">
                Do not transcribe abbreviated forms of words unless the speaker
                says an abbreviated form.{' '}
              </p>
              <p class="block_649">
                <span class="text_4">C</span>
                <span class="text_5">ORRECT</span>
                <span class="text_6">: અન્સતમ તારીખ 3 ઑક્ટોબર 2001 </span>
              </p>
              <p class="block_315">
                <span class="text_4">I</span>
                <span class="text_5">NCORRECT</span>
                <span class="text_6">: અન્સતમ તા. 3 ઑક્ટોબર 2001 </span>
              </p>
              <p class="block_650">
                <span class="text_4">E</span>
                <span class="text_5">XAMPLE AUDIO</span>
                <span class="text_4">: " </span>
                <span class="text_6">અન્સતમ તારીખ ત્રણ ઑક્ટોબર બ હજાર એક </span>
                <span class="text_4">" </span>
              </p>
              <p class="block_651">
                <span class="text_4">E</span>
                <span class="text_5">XPLANATION</span>
                <span class="text_6">
                  : The speaker said "તારીખ" aloud and not "તા" so write out the
                  whole word and do not transcribe the abbreviated form.{' '}
                </span>
              </p>
              <p class="block_652">
                For other proper names involving titles, use the official
                spelling of the proper name. If you are not sure, do not
                abbreviate the title.{' '}
              </p>
              <p class="block_653">Punctuation </p>
              <p class="block_654">
                Follow the punctuation regulations of your locale. Additional
                conventions are outlined in this section.{' '}
              </p>
              <p class="block_655">Fragments versus sentences </p>
              <p class="block_656">
                Answers to questions and sentences with dropped subjects should
                be transcribed as complete sentences.{' '}
              </p>
              <p class="block_657">
                <span class="text_11">C</span>
                <span class="text_12">ORRECT</span>
                <span class="text_13">: બસ ક્યાથી મળશ? અહીયા નથી. </span>
                <span class="text_14">E</span>
                <span class="text_15">XPLANATION</span>
                <span class="text_16">: Even though "અહીયા નથી" is not a </span>
              </p>
              <p class="block_658">
                complete sentence, it should be transcribed as one since it is a
                natural response to the question.{' '}
              </p>
              <p class="block_659">
                <span class="text_4">C</span>
                <span class="text_5">ORRECT</span>
                <span class="text_6">: અહીયા નથી </span>
              </p>
              <p class="block_660">
                <span class="text_4">I</span>
                <span class="text_5">NCORRECT</span>
                <span class="text_6">: અહીયા નથી. </span>
              </p>
              <p class="block_661">
                <span class="text_4">E</span>
                <span class="text_5">XPLANATION</span>
                <span class="text_6">
                  : "અહીયા નથી" is not a response to any question and is not a
                  complete sentence, so it is not treated as a complete
                  sentence.{' '}
                </span>
              </p>
              <p class="block_662">
                Interjections, greetings, and farewells said in isolation should
                include ending punctuation.{' '}
              </p>
              <p class="block_663">
                <span class="text_4">C</span>
                <span class="text_5">ORRECT</span>
                <span class="text_6">: માફ કરશો. </span>
              </p>
              <p class="block_664">
                <span class="text_4">I</span>
                <span class="text_5">NCORRECT</span>
                <span class="text_6">: માફ કરશો </span>
              </p>
              <p class="block_665">
                <span class="text_4">E</span>
                <span class="text_5">XPLANATION</span>
                <span class="text_6">
                  : Interjections such as "માફ કરશો" can be used alone as a
                  sentence with proper punctuation.{' '}
                </span>
              </p>
              <p class="block_666">
                <span class="text_4">C</span>
                <span class="text_5">ORRECT</span>
                <span class="text_6">: નમલત. </span>
              </p>
              <p class="block_667">
                <span class="text_4">I</span>
                <span class="text_5">NCORRECT</span>
                <span class="text_6">: નમલત </span>
              </p>
              <p class="block_668">
                <span class="text_4">E</span>
                <span class="text_5">XPLANATION</span>
                <span class="text_6">
                  : Greetings and farewells such as "નમલત", etc. can also be
                  used alone as a sentence with proper punctuation.{' '}
                </span>
              </p>
              <p class="block_669">
                Below are some examples of common interjections.{' '}
              </p>
              <p class="block_670">
                <span class="text_5">• </span>
                <span class="text_30">માફ કરશો </span>
              </p>
              <p class="block_671">
                <span class="text_5">• </span>
                <span class="text_30">નમલત </span>
              </p>
              <p class="block_672">
                <span class="text_5">• </span>
                <span class="text_30">બરાબર </span>
              </p>
              <p class="block_673">
                <span class="text_5">• </span>
                <span class="text_30">ભિ </span>
              </p>
              <p class="block_674">
                <span class="text_5">• </span>
                <span class="text_30">ભિ પધાયા </span>
              </p>
              <p class="block_675">
                <span class="text_5">• </span>
                <span class="text_30">હા </span>
              </p>
              <p class="block_676">
                <span class="text_5">• </span>
                <span class="text_30">ઓહો </span>
              </p>
              <p class="block_677">
                <span class="text_5">• </span>
                <span class="text_30">કપાળ </span>
              </p>
              <p class="block_675">
                <span class="text_5">• </span>
                <span class="text_30">ના </span>
              </p>
              <p class="block_678">
                Do not add ending punctuation to web search queries. Web search
                queries are spoken versions of what a person might type into a
                Google search bar. Note: Web search queries are different from
                voice action requests because they do not include a command
                directed to a device.{' '}
              </p>
              <p class="block_679">
                <span class="text_4">C</span>
                <span class="text_5">ORRECT</span>
                <span class="text_6">: પીઝા બનાવવાની રીત </span>
              </p>
              <p class="block_680">
                <span class="text_4">I</span>
                <span class="text_5">NCORRECT</span>
                <span class="text_6">: પીઝા બનાવવાની રીત. </span>
              </p>
              <p class="block_681">
                <span class="text_3">E</span>
                <span class="text_">XPLANATION</span>
                <span class="text_3">
                  : This phrase is a web search, so don't add any punctuation at
                  the end.{' '}
                </span>
              </p>
              <p class="block_682">
                Add ending punctuation to phrases that sound like the end of a
                sentence. If they do not clearly sound like the end of a
                sentence, leave out ending punctuation. Remember that some
                sentences may sound incomplete because the audio has been cut
                off.{' '}
              </p>
              <p class="block_683">
                <span class="text_4">C</span>
                <span class="text_5">ORRECT</span>
                <span class="text_6">: અન સાફ હવા છ. </span>
              </p>
              <p class="block_684">
                <span class="text_4">I</span>
                <span class="text_5">NCORRECT</span>
                <span class="text_6">: અન સાફ હવા છ </span>
              </p>
              <p class="block_685">
                <span class="text_3">E</span>
                <span class="text_">XPLANATION</span>
                <span class="text_3">
                  : This sounds like the end of a sentence. Add punctuation at
                  the end.{' '}
                </span>
              </p>
              <p class="block_686">
                <span class="text_4">C</span>
                <span class="text_5">ORRECT</span>
                <span class="text_6">: સાથ કમ વાત નથી </span>
              </p>
              <p class="block_687">
                <span class="text_4">I</span>
                <span class="text_5">NCORRECT</span>
                <span class="text_6">: સાથ કમ વાત નથી. </span>
              </p>
              <p class="block_688">
                <span class="text_3">E</span>
                <span class="text_">XPLANATION</span>
                <span class="text_3">
                  : This sounds like an incomplete sentence that is missing a
                  beginning and end. No need to add punctuation.{' '}
                </span>
              </p>
              <p class="block_689">
                A voice action is a request or command spoken to a device and
                includes a command verb. Transcribe all voice actions as
                complete sentences.{' '}
              </p>
              <p class="block_690">Commas </p>
              <p class="block_691">
                Use commas only when necessary. If you are unsure whether to use
                a comma, leave it out.{' '}
              </p>
              <p class="block_692">Do not transcribe pauses with commas. </p>
              <p class="block_693">
                <span class="text_4">C</span>
                <span class="text_5">ORRECT</span>
                <span class="text_6">: ન્સટળક રોડ િઈ જશો? </span>
              </p>
              <p class="block_694">
                <span class="text_4">I</span>
                <span class="text_5">NCORRECT</span>
                <span class="text_6">: ન્સટળક રોડ...િઈ જશો? </span>
              </p>
              <p class="block_695">
                <span class="text_4">I</span>
                <span class="text_5">NCORRECT</span>
                <span class="text_6">: ન્સટળક રોડ, િઈ જશો? </span>
              </p>
              <p class="block_696">
                <span class="text_4">E</span>
                <span class="text_5">XAMPLE AUDIO</span>
                <span class="text_4">: " </span>
                <span class="text_6">ન્સટળક રોડ </span>
                <span class="text_25">[</span>
                <span class="text_6">થોભો</span>
                <span class="text_25">] </span>
                <span class="text_6">િઈ જશો </span>
                <span class="text_4">" </span>
              </p>
              <p class="block_697">
                <span class="text_3">E</span>
                <span class="text_">XPLANATION</span>
                <span class="text_3">
                  : Even if the speaker uses long pauses, do not use a comma.
                  There are places where commas{' '}
                </span>
              </p>
              <p class="block_698">
                are allowed or required, but this example contains neither.{' '}
              </p>
              <p class="block_699">
                Put a comma after common sentence openers such as prepositional
                phrases, adverbials, and introductory clauses.{' '}
              </p>
              <p class="block_700">
                <span class="text_4">C</span>
                <span class="text_5">ORRECT</span>
                <span class="text_6">: ટકમા, ગમ ત કરો. </span>
              </p>
              <p class="block_701">
                <span class="text_4">I</span>
                <span class="text_5">NCORRECT</span>
                <span class="text_6">: ટકમા ગમ ત કરો. </span>
              </p>
              <p class="block_702">
                <span class="text_4">E</span>
                <span class="text_5">XPLANATION</span>
                <span class="text_6">
                  : "ટકમા" is a common sentence opener so include a comma
                  between it and the rest of the sentence.{' '}
                </span>
              </p>
              <p class="block_703">
                Use a comma when a sentence starts with a discourse word,
                interjection, or yes/no word. However, if there is a long pause
                after a discourse word, interjection, or yes/no word, transcribe
                it as a complete sentence.{' '}
              </p>
              <p class="block_704">
                <span class="text_4">C</span>
                <span class="text_5">ORRECT</span>
                <span class="text_6">: પણ, માર ઈકવ છ. </span>
              </p>
              <p class="block_705">
                <span class="text_4">I</span>
                <span class="text_5">NCORRECT</span>
                <span class="text_6">: પણ માર ઈકવ છ. </span>
              </p>
              <p class="block_706">
                <span class="text_4">E</span>
                <span class="text_5">XPLANATION</span>
                <span class="text_6">
                  : "પણ" is a discourse word, so it should appear with a comma
                  even if there is no obvious pause after the discourse word.
                  Other examples of discourse words in English include "તોહ" and
                  "વાલતવ".{' '}
                </span>
              </p>
              <p class="block_707">
                <span class="text_4">C</span>
                <span class="text_5">ORRECT</span>
                <span class="text_6">: અર હા, ભિી ગયો. </span>
              </p>
              <p class="block_708">
                <span class="text_4">I</span>
                <span class="text_5">NCORRECT</span>
                <span class="text_6">: અર હા ભિી ગયો. </span>
              </p>
              <p class="block_709">
                <span class="text_4">E</span>
                <span class="text_5">XPLANATION</span>
                <span class="text_6">
                  : "અર હા" is an interjection so it should have a comma after
                  it, before the rest of the sentence.{' '}
                </span>
              </p>
              <p class="block_710">
                <span class="text_4">C</span>
                <span class="text_5">ORRECT</span>
                <span class="text_6">: હા, દસ દસ ની છ. </span>
              </p>
              <p class="block_711">
                <span class="text_4">I</span>
                <span class="text_5">NCORRECT</span>
                <span class="text_6">: હા દસ દસ ની છ. </span>
              </p>
              <p class="block_712">
                <span class="text_4">E</span>
                <span class="text_5">XAMPLE AUDIO</span>
                <span class="text_4">: " </span>
                <span class="text_6">હા દસ દસ ની છ </span>
                <span class="text_4">" </span>
              </p>
              <p class="block_713">
                <span class="text_4">C</span>
                <span class="text_5">ORRECT</span>
                <span class="text_6">: હા. દસ દસ ની છ. </span>
              </p>
              <p class="block_714">
                <span class="text_4">I</span>
                <span class="text_5">NCORRECT</span>
                <span class="text_6">: હા, દસ દસ ની છ. </span>
              </p>
              <p class="block_715">
                <span class="text_4">E</span>
                <span class="text_5">XAMPLE AUDIO</span>
                <span class="text_4">: " </span>
                <span class="text_6">હા </span>
                <span class="text_25">[</span>
                <span class="text_6">િાબ થોભો</span>
                <span class="text_25">] </span>
                <span class="text_6">દસ દસ ની છ </span>
                <span class="text_4">" </span>
              </p>
              <p class="block_716">Use commas in lists. </p>
              <p class="block_717">
                <span class="text_4">C</span>
                <span class="text_5">ORRECT</span>
                <span class="text_6">
                  : ત્યાની સામાન્સજક, આન્સથક, રાજકીય અન ધાન્સમક વ્યવ્લથા તન સહજ
                  સમજાતી જાય છ.{' '}
                </span>
              </p>
              <p class="block_718">
                <span class="text_4">I</span>
                <span class="text_5">NCORRECT</span>
                <span class="text_6">
                  : ત્યાની સામાન્સજક આન્સથક રાજકીય અન ધાન્સમક વ્યવ્લથા તન સહજ
                  સમજાતી જાય છ.{' '}
                </span>
              </p>
              <p class="block_719">
                <span class="text_4">E</span>
                <span class="text_5">XPLANATION</span>
                <span class="text_6">
                  : The sentence contains a list of adjectives "સામાન્સજક"
                  "આન્સથક" "રાજકીય" which should be separated with commas but
                  don't use a comma after the last list item.{' '}
                </span>
              </p>
              <p class="block_720">
                <span class="text_4">I</span>
                <span class="text_5">NCORRECT</span>
                <span class="text_6">
                  : ત્યાની સામાન્સજક, આન્સથક, રાજકીય, અન ધાન્સમક વ્યવ્લથા તન સહજ
                  સમજાતી જાય છ.{' '}
                </span>
              </p>
              <p class="block_721">
                Use commas in sign-offs, such as those at the end of a message.
                Do not use end punctuation.{' '}
              </p>
              <p class="block_722">
                Do not use commas in sentences that contain only a greeting and
                an addressee. If a greeting occurs at the beginning of a
                sentence or fragment, place a comma after the greeting. If the
                greeting includes an addressee, place the comma after the
                addressee.{' '}
              </p>
              <p class="block_723">
                Except in greetings, sentence-initial and sentence-final
                addressees should be separated by a comma.{' '}
              </p>
              <p class="block_724">
                <span class="text_11">C</span>
                <span class="text_12">ORRECT</span>
                <span class="text_13">: રમણ, અહી આવ. </span>
                <span class="text_14">E</span>
                <span class="text_15">XPLANATION</span>
                <span class="text_16">
                  : "રમણ" is a sentence initial addressee so{' '}
                </span>
              </p>
              <p class="block_725">
                transcribe a comma after it to separate it from the sentence.{' '}
              </p>
              <p class="block_726">
                The phrase "Ok Google" by itself is transcribed without a comma
                or end punctuation. When the phrase appears before longer
                sentences, place a comma after "Google".{' '}
              </p>
              <p class="block_256">
                <span class="text_3">C</span>
                <span class="text_">ORRECT</span>
                <span class="text_3">: Ok Google </span>
              </p>
              <p class="block_727">
                <span class="text_3">I</span>
                <span class="text_">NCORRECT</span>
                <span class="text_3">: Ok, Google </span>
              </p>
              <p class="block_728">
                <span class="text_3">I</span>
                <span class="text_">NCORRECT</span>
                <span class="text_3">: Ok Google. </span>
              </p>
              <p class="block_729">
                <span class="text_3">E</span>
                <span class="text_">XPLANATION</span>
                <span class="text_3">
                  : "Ok Google" was spoken in isolation, so do not transcribe a
                  comma or period.{' '}
                </span>
              </p>
              <p class="block_730">
                <span class="text_11">C</span>
                <span class="text_12">ORRECT</span>
                <span class="text_13">: Ok Google, સમય શ છ? </span>
                <span class="text_14">E</span>
                <span class="text_15">XPLANATION</span>
                <span class="text_14">: "Ok Google" appears before the </span>
              </p>
              <p class="block_731">
                question "સમય શ છ?", so transcribe a comma after "Ok Google".{' '}
              </p>
              <p class="block_732">
                <span class="text_11">C</span>
                <span class="text_12">ORRECT</span>
                <span class="text_13">: Ok Google, તમ આ કરી શકો મન મદદ? </span>
                <span class="text_14">E</span>
                <span class="text_15">XPLANATION</span>
                <span class="text_14">: "Ok Google" appears before the </span>
              </p>
              <p class="block_733">
                question "તમ આ કરી શકો મન મદદ?", so transcribe a comma after "Ok
                Google".{' '}
              </p>
              <p class="block_734">Question marks </p>
              <p class="block_735">
                Transcribe a sentence as a question if it is structured
                grammatically as a sentence, or if it sounds like a question
                because of its intonation.{' '}
              </p>
              <p class="block_736">
                <span class="text_4">C</span>
                <span class="text_5">ORRECT</span>
                <span class="text_6">: અન પછી? </span>
              </p>
              <p class="block_737">
                <span class="text_4">I</span>
                <span class="text_5">NCORRECT</span>
                <span class="text_6">: અન પછી </span>
              </p>
              <p class="block_738">
                <span class="text_3">E</span>
                <span class="text_">XPLANATION</span>
                <span class="text_3">
                  : Since the sentence has question intonation, it is
                  transcribed as a question, even though it is not structured
                  like a typical sentence.{' '}
                </span>
              </p>
              <p class="block_739">Colon and quotation </p>
              <p class="block_740">
                Use a comma between reported speech verbs and direct quotations,
                unless the speech verb is being used as a voice command. Do not
                put punctuation within quotation marks unless the punctuation
                belongs to the reported speech.{' '}
              </p>
              <p class="block_741">
                <span class="text_4">C</span>
                <span class="text_5">ORRECT</span>
                <span class="text_6">: મારા દોલત ઍ કહ્, "આિગટર રૉકડાઇિ". </span>
              </p>
              <p class="block_742">
                <span class="text_4">I</span>
                <span class="text_5">NCORRECT</span>
                <span class="text_6">: મારા દોલત ઍ કહ્, "આિગટર રૉકડાઇિ." </span>
              </p>
              <p class="block_743">
                <span class="text_4">I</span>
                <span class="text_5">NCORRECT</span>
                <span class="text_6">: મારા દોલત ઍ કહ્ "આિગટર રૉકડાઇિ." </span>
              </p>
              <p class="block_702">
                <span class="text_4">E</span>
                <span class="text_5">XPLANATION</span>
                <span class="text_6">
                  : Since "કહવ" is a verb that reports the exact words of a
                  speaker, quotation marks are used. There is no period within
                  the quotation because the phrase "આિગટર રૉકડાઇિ" is not a
                  complete sentence.{' '}
                </span>
              </p>
              <p class="block_744">
                <span class="text_4">C</span>
                <span class="text_5">ORRECT</span>
                <span class="text_6">: "ઘોડો" બોિો. </span>
              </p>
              <p class="block_745">
                <span class="text_4">I</span>
                <span class="text_5">NCORRECT</span>
                <span class="text_6">: "ઘોડો", બોિો. </span>
              </p>
              <p class="block_746">
                <span class="text_4">E</span>
                <span class="text_5">XPLANATION</span>
                <span class="text_6">
                  : "બોિો" is being used as a command here, do not transcribe a
                  comma.{' '}
                </span>
              </p>
              <p class="block_747">
                If the text in quotation marks is a complete sentence,
                transcribe it as a complete sentence. Do not change the
                punctuation of the quotation, and do not add punctuation
                immediately after the quotation marks.{' '}
              </p>
              <p class="block_748">
                <span class="text_4">C</span>
                <span class="text_5">ORRECT</span>
                <span class="text_6">: કૌન્સશક કહ્, "હ ખાઈશ." </span>
              </p>
              <p class="block_749">
                <span class="text_4">I</span>
                <span class="text_5">NCORRECT</span>
                <span class="text_6">: કૌન્સશક કહ્, "હ ખાઈશ.". </span>
              </p>
              <p class="block_750">
                <span class="text_4">E</span>
                <span class="text_5">XPLANATION</span>
                <span class="text_6">
                  : Since "હ ખાઈશ." is a complete sentence, there should be a
                  period inside the quotation marks. Because of this, do not
                  transcribe a period outside the quotation marks.{' '}
                </span>
              </p>
              <p class="block_751">
                <span class="text_11">C</span>
                <span class="text_12">ORRECT</span>
                <span class="text_13">: રોન્સહત પછ, "આપણ 3 વાગ મળીય છ?" </span>
                <span class="text_14">E</span>
                <span class="text_15">XPLANATION</span>
                <span class="text_16">
                  : "આપણ 3 વાગ મળીય છ?" is a complete{' '}
                </span>
              </p>
              <p class="block_752">
                question, so transcribe a question mark inside the{' '}
              </p>
              <p class="block_753">
                <span class="text_4">I</span>
                <span class="text_5">NCORRECT</span>
                <span class="text_6">
                  : રોન્સહત પછ, "આપણ 3 વાગ મળીય છ?". quotation. Again, do not
                  transcribe a period after the{' '}
                </span>
              </p>
              <p class="block_754">quotation marks. </p>
              <p class="block_755">
                <span class="text_11">C</span>
                <span class="text_12">ORRECT</span>
                <span class="text_13">: શ રોહીત એ "ત્યા મળવાન." કહ્ હત ? </span>
                <span class="text_14">E</span>
                <span class="text_15">XPLANATION</span>
                <span class="text_16">
                  : Even though રોહીત's statement appears{' '}
                </span>
              </p>
              <p class="block_756">
                in the middle of a larger sentence, final punctuation needs to
                be transcribed within the quotation.{' '}
              </p>
              <p class="block_757">
                Use a colon instead of quotation marks in voice actions when the
                quote follows the command.{' '}
              </p>
              <p class="block_758">
                <span class="text_4">C</span>
                <span class="text_5">ORRECT</span>
                <span class="text_6">: ફ્રચ મા અનવાદ કરો: તમ કમ છો? </span>
              </p>
              <p class="block_759">
                <span class="text_4">I</span>
                <span class="text_5">NCORRECT</span>
                <span class="text_6">: ફ્રચ મા અનવાદ કરો: "તમ કમ છો?" </span>
              </p>
              <p class="block_760">
                <span class="text_4">E</span>
                <span class="text_5">XPLANATION</span>
                <span class="text_6">
                  : "તમ કમ છો" follows the command "અનવાદ કરો", so a colon is
                  used before the phrase without any quotation marks.{' '}
                </span>
              </p>
              <p class="block_761">
                <span class="text_4">C</span>
                <span class="text_5">ORRECT</span>
                <span class="text_6">
                  : example@gmail.com ન ઇમિ મોકિો: તમારો ન્સદવસ કવો હતો?{' '}
                </span>
              </p>
              <p class="block_762">
                Use quotation marks when the quote is in the middle of the
                sentence.{' '}
              </p>
              <p class="block_763">
                Don't punctuate text after colons unless it is a complete
                sentence.{' '}
              </p>
              <p class="block_723">
                When speakers make a request for single words to be translated
                into another language, don't punctuate the words, even if you'd
                consider the words as sentences in other situations.{' '}
              </p>
              <p class="block_764">
                Do not use quotation marks when the speaker is using a word to
                say something about the word itself.{' '}
              </p>
              <p class="block_765">
                <span class="text_4">C</span>
                <span class="text_5">ORRECT</span>
                <span class="text_6">: પ જા કહ્ ન્સનયમ શબ્દન. </span>
              </p>
              <p class="block_749">
                <span class="text_4">I</span>
                <span class="text_5">NCORRECT</span>
                <span class="text_6">: પ જા કહ્ "ન્સનયમ" શબ્દન. </span>
              </p>
              <p class="block_766">
                <span class="text_4">E</span>
                <span class="text_5">XPLANATION</span>
                <span class="text_6">
                  : The speaker is referring to the word "ન્સનયમ", do not use
                  quotation marks.{' '}
                </span>
              </p>
              <p class="block_767">Other symbols </p>
              <p class="block_768">
                Apart from Gujarati letters and the Latin letters a through z,
                you should not use any other symbol than: 0-9
                äâàæÆçÇéèëêïîñÑôöŒœüûùμÿÄÂÀÉÈËÊÏÎÔÖÜÛÙŸ23,?!'"_°:.()&lt;&gt;{}
                []√/@#₹+=%*&amp;-.;{' '}
              </p>
              <p class="block_769">
                When two opposing teams are mentioned, include a hyphen between
                their names.{' '}
              </p>
              <p class="block_770">
                <span class="text_4">C</span>
                <span class="text_5">ORRECT</span>
                <span class="text_6">
                  : ગ જરાત િાય્સ-મબઈ ઇન્સ્ડય્સ વચ્ચની પહિી મચમા શ થય હત?{' '}
                </span>
              </p>
              <p class="block_771">
                Include a hyphen between locations in flight itineraries.{' '}
              </p>
              <p class="block_772">
                <span class="text_4">C</span>
                <span class="text_5">ORRECT</span>
                <span class="text_6">: હદરાબાદ-કોિકાતા ફ્િાઇટ </span>
              </p>
              <p class="block_773">
                <span class="text_4">I</span>
                <span class="text_5">NCORRECT</span>
                <span class="text_6">: હદરાબાદ કોિકાતા ફ્િાઇટ </span>
              </p>
              <p class="block_774">Spoken punctuation </p>
              <p class="block_775">
                If a speaker says the name of a punctuation mark, write out the
                full word or words between curly brackets. Do not add
                punctuation symbols after spoken punctuation.{' '}
              </p>
              <p class="block_776">
                <span class="text_4">C</span>
                <span class="text_5">ORRECT</span>
                <span class="text_6">: તમ કમ છો {`{પ્રશ્ન ન્સચ્હ}`} </span>
              </p>
              <p class="block_777">
                <span class="text_4">I</span>
                <span class="text_5">NCORRECT</span>
                <span class="text_6">: તમ કમ છો? </span>
              </p>
              <p class="block_778">
                <span class="text_4">I</span>
                <span class="text_5">NCORRECT</span>
                <span class="text_6">: તમ કમ છો પ્રશ્ન ન્સચ્હ? </span>
              </p>
              <p class="block_779">
                <span class="text_4">E</span>
                <span class="text_5">XAMPLE AUDIO</span>
                <span class="text_4">: " </span>
                <span class="text_6">તમ કમ છો પ્રશ્ન ન્સચ્હ </span>
                <span class="text_4">" </span>
              </p>
              <p class="block_780">
                <span class="text_4">C</span>
                <span class="text_5">ORRECT</span>
                <span class="text_6">: બરાબર {`{ટપક} {ટપક} {ટપક}`} </span>
              </p>
              <p class="block_781">
                <span class="text_4">I</span>
                <span class="text_5">NCORRECT</span>
                <span class="text_6">: બરાબર... </span>
              </p>
              <p class="block_506">
                <span class="text_4">E</span>
                <span class="text_5">XAMPLE AUDIO</span>
                <span class="text_4">: " </span>
                <span class="text_6">બરાબર ટપક ટપક ટપક </span>
                <span class="text_4">" </span>
              </p>
              <p class="block_782">
                However, don't spell out punctuation if it contradicts the
                established transcription conventions of a certain phrase like
                web pages, email addresses, addresses, phone numbers, etc.{' '}
              </p>
              <p class="block_783">
                <span class="text_3">C</span>
                <span class="text_">ORRECT</span>
                <span class="text_3">: www.google.com </span>
              </p>
              <p class="block_784">
                <span class="text_4">I</span>
                <span class="text_5">NCORRECT</span>
                <span class="text_6">
                  : www {`{ટપક}`} google {`{ટપક}`} com{' '}
                </span>
              </p>
              <p class="block_627">
                <span class="text_4">E</span>
                <span class="text_5">XAMPLE AUDIO</span>
                <span class="text_4">: " </span>
                <span class="text_6">
                  ડબ્લ્ય ડબ્લ્ય ડબ્લ્ય ટપક ગગિ ટપક કોમ{' '}
                </span>
                <span class="text_4">" </span>
              </p>
              <p class="block_785">
                <span class="text_4">E</span>
                <span class="text_5">XPLANATION</span>
                <span class="text_6">
                  : Although the speaker said "ટપક ", URLs have an established
                  transcription convention that require the use of the symbols.
                  So use a "." instead of spelling it out as {`{ટપક}`}.{' '}
                </span>
              </p>
              <p class="block_786">
                If a word that can refer to a punctuation mark is spoken in
                isolation, it should be written out between curly brackets.{' '}
              </p>
              <p class="block_787">
                <span class="text_4">C</span>
                <span class="text_5">ORRECT</span>
                <span class="text_6">: {`{ઉદ્ગારવાચક ન્સચ્હ}`} </span>
              </p>
              <p class="block_788">
                <span class="text_3">I</span>
                <span class="text_">NCORRECT</span>
                <span class="text_3">: ! </span>
              </p>
              <p class="block_446">
                <span class="text_4">E</span>
                <span class="text_5">XAMPLE AUDIO</span>
                <span class="text_4">: " </span>
                <span class="text_6">ઉદ્ગારવાચક ન્સચ્હ </span>
                <span class="text_4">" </span>
              </p>
              <p class="block_789">
                <span class="text_4">E</span>
                <span class="text_5">XPLANATION</span>
                <span class="text_6">
                  : The actual spelling "ઉદ્ગારવાચક ન્સચ્હ" is transcribed in
                  curly brackets and not as the symbol "!" because it is spoken
                  in isolation.{' '}
                </span>
              </p>
              <p class="block_790">
                <span class="text_4">C</span>
                <span class="text_5">ORRECT</span>
                <span class="text_6">: {`{અધ ન્સવરામ}`} </span>
              </p>
              <p class="block_788">
                <span class="text_3">I</span>
                <span class="text_">NCORRECT</span>
                <span class="text_3">: ; </span>
              </p>
              <p class="block_791">
                <span class="text_4">E</span>
                <span class="text_5">XAMPLE AUDIO</span>
                <span class="text_4">: " </span>
                <span class="text_6">અધ ન્સવરામ </span>
                <span class="text_4">" </span>
              </p>
              <p class="block_792">
                <span class="text_4">E</span>
                <span class="text_5">XPLANATION</span>
                <span class="text_6">
                  : The actual spelling "અધ ન્સવરામ" is transcribed in curly
                  brackets and not as the symbol ";" because it is spoken in
                  isolation.{' '}
                </span>
              </p>
              <p class="block_793">Agreed spelling </p>
              <p class="block_794">
                This section covers spelling conventions for things such as
                proper names, media titles, acronyms, slang words, and more.{' '}
              </p>
              <p class="block_795">Spelling out </p>
              <p class="block_796">
                If a word is spelled out, write it with spaces in between. This
                rule does not apply to acronyms, URLs or email addresses.{' '}
              </p>
              <p class="block_797">
                <span class="text_11">C</span>
                <span class="text_12">ORRECT</span>
                <span class="text_13">: આગળીઓ આ ગ ળી ઓ </span>
                <span class="text_19">E</span>
                <span class="text_20">XAMPLE AUDIO</span>
                <span class="text_19">: " </span>
                <span class="text_21">આગળીઓ આ ગ ળી ઓ </span>
                <span class="text_19">" </span>
              </p>
              <p class="block_798">
                <span class="text_4">E</span>
                <span class="text_5">XPLANATION</span>
                <span class="text_6">
                  : The speaker says "આગળીઓ" aloud so transcribe the word
                  without spaces. The spelled out portion should have spaces
                  between the letters.{' '}
                </span>
              </p>
              <p class="block_799">
                <span class="text_4">C</span>
                <span class="text_5">ORRECT</span>
                <span class="text_6">
                  : અ આ ઇ ઈ ઉ ઊ ઋ ઍ એ ઐ ઑ ઓ ઔ ક ખ ગ ઘ ઙ ચ છ જ ઝ ઞ ટ ઠ ડ ઢ ણ ત થ
                  દ ધ ન પ ફ બ ભ મ ય ર િ ળ વ શ ર્ સ હ ૠ ૡ{' '}
                </span>
              </p>
              <p class="block_800">
                <span class="text_4">E</span>
                <span class="text_5">XAMPLE AUDIO</span>
                <span class="text_4">: " </span>
                <span class="text_6">
                  અ આ ઇ ઈ ઉ ઊ ઋ ઍ એ ઐ ઑ ઓ ઔ ક ખ ગ ઘ ઙ ચ છ જ ઝ ઞ ટ ઠ ડ ઢ ણ ત થ દ
                  ધ ન પ ફ બ ભ મ ય ર િ ળ વ શ ર્ સ હ ૠ ૡ{' '}
                </span>
                <span class="text_4">" </span>
              </p>
              <p class="block_801">
                <span class="text_3">E</span>
                <span class="text_">XPLANATION</span>
                <span class="text_3">
                  : The speaker spells out the alphabet so it is transcribed
                  with spaces.{' '}
                </span>
              </p>
              <p class="block_802">
                Transcribe all acronyms and initialisms with no spaces. Do not
                include periods between letters.{' '}
              </p>
              <p class="block_803">
                <span class="text_11">C</span>
                <span class="text_12">ORRECT</span>
                <span class="text_13">: એમબીએ </span>
                <span class="text_19">E</span>
                <span class="text_20">XAMPLE AUDIO</span>
                <span class="text_19">: " </span>
                <span class="text_21">એમ બી એ </span>
                <span class="text_19">" </span>
              </p>
              <p class="block_804">
                <span class="text_4">E</span>
                <span class="text_5">XPLANATION</span>
                <span class="text_6">
                  : Since એમબીએ is an initialism, it is transcribed with no
                  spaces.{' '}
                </span>
              </p>
              <p class="block_805">
                <span class="text_4">C</span>
                <span class="text_5">ORRECT</span>
                <span class="text_6">: ટીવી, એટીએમ </span>
              </p>
              <p class="block_806">
                <span class="text_4">I</span>
                <span class="text_5">NCORRECT</span>
                <span class="text_6">: ટી.વી., એ.ટી.એમ. </span>
              </p>
              <p class="block_807">
                <span class="text_4">C</span>
                <span class="text_5">ORRECT</span>
                <span class="text_6">: સોમ </span>
              </p>
              <p class="block_808">
                <span class="text_4">I</span>
                <span class="text_5">NCORRECT</span>
                <span class="text_6">: સો.મ. </span>
              </p>
              <p class="block_809">
                If you are unsure whether a word should be written with a
                hyphen, check your language's standard dictionary for the
                official spelling.{' '}
              </p>
              <p class="block_810">
                Single letters should be transcribed without quotes.{' '}
              </p>
              <p class="block_811">Interjections </p>
              <p class="block_812">
                If the speaker uses words representing laughter, crying,
                singing, etc. transcribe them up to three syllables. Do not
                transcribe actual laughter.{' '}
              </p>
              <p class="block_813">
                <span class="text_11">C</span>
                <span class="text_12">ORRECT</span>
                <span class="text_13">: હાહાહા </span>
                <span class="text_19">E</span>
                <span class="text_20">XAMPLE AUDIO</span>
                <span class="text_19">: " </span>
                <span class="text_21">હા હા હા હા હા </span>
                <span class="text_19">" </span>
              </p>
              <p class="block_814">
                <span class="text_4">E</span>
                <span class="text_5">XPLANATION</span>
                <span class="text_6">
                  : Even if the speaker says "હા" five times, only transcribe
                  three without spaces.{' '}
                </span>
              </p>
              <p class="block_815">Proper names </p>
              <p class="block_816">
                If you're not sure about the spelling for certain celebrity or
                band names or for names with unique formatting, look it up. For
                Gujarati names, use the Gujarati Wikipedia, for names in other
                languages, please refer to the Foreign Language section.{' '}
              </p>
              <p class="block_817">
                <span class="text_11">C</span>
                <span class="text_12">ORRECT</span>
                <span class="text_13">: એ. આર. રહમાન </span>
                <span class="text_14">E</span>
                <span class="text_15">XPLANATION</span>
                <span class="text_16">
                  : "એ. આર. રહમાન" is a musician whose{' '}
                </span>
              </p>
              <p class="block_818">
                official name should be transcribed with periods.{' '}
              </p>
              <p class="block_819">
                If a personal name could have multiple spellings, use the
                spelling that has the most Google search hits when you search
                for the name followed by the word "નામ" (e.g. "પરવીન નામ").{' '}
              </p>
              <p class="block_820">
                If a speaker makes a small mistake in a proper name, transcribe
                what the speaker says as long as the difference is minimal.
                Minimal differences include adding or dropping articles,
                possessives, and plurals.{' '}
              </p>
              <p class="block_821">Brand and product </p>
              <p class="block_822">
                Always use the official spelling and formatting for the
                following types of terms. If you are not sure about the spelling
                or formatting, transcribe them as they are spelled and formatted
                on their Wikipedia page in your country. Note, this only applies
                to terms in your language. For instruction on transcribing
                English terms, refer to the English subsection in Foreign
                Language.{' '}
              </p>
              <p class="block_823">
                <span class="text_">• </span>
                <span class="text_1">Technical terms </span>
              </p>
              <p class="block_824">
                <span class="text_">• </span>
                <span class="text_1">Proper names </span>
              </p>
              <p class="block_825">
                <span class="text_">• </span>
                <span class="text_1">Celebrity names </span>
              </p>
              <p class="block_826">
                <span class="text_">• </span>
                <span class="text_1">Holidays </span>
              </p>
              <p class="block_827">
                <span class="text_">• </span>
                <span class="text_1">Brand names </span>
              </p>
              <p class="block_828">
                <span class="text_">• </span>
                <span class="text_1">Product names </span>
              </p>
              <p class="block_829">Media title </p>
              <p class="block_830">
                Do not use quotation marks for media titles.{' '}
              </p>
              <p class="block_831">
                <span class="text_4">C</span>
                <span class="text_5">ORRECT</span>
                <span class="text_6">: ગીતા રબારી એક સરસ ગીત છ. </span>
              </p>
              <p class="block_832">
                <span class="text_4">I</span>
                <span class="text_5">NCORRECT</span>
                <span class="text_6">: "ગીતા રબારી" એક સરસ ગીત છ. </span>
              </p>
              <p class="block_833">
                <span class="text_3">E</span>
                <span class="text_">XPLANATION</span>
                <span class="text_3">
                  : Quotation marks are not used to transcribe song names.{' '}
                </span>
              </p>
              <p class="block_834">
                Transcribe all media titles with their original punctuation. If
                punctuation from the title occurs at the end of a sentence, do
                not transcribe another punctuation mark (a period, question
                mark, or exclamation mark) for end of the sentence.{' '}
              </p>
              <p class="block_835">
                <span class="text_4">C</span>
                <span class="text_5">ORRECT</span>
                <span class="text_6">: શ તમ થઇ જશ! પહિા જોય છ? </span>
              </p>
              <p class="block_836">
                <span class="text_4">I</span>
                <span class="text_5">NCORRECT</span>
                <span class="text_6">: શ તમ થઇ જશ પહિા જોય છ? </span>
              </p>
              <p class="block_709">
                <span class="text_4">E</span>
                <span class="text_5">XPLANATION</span>
                <span class="text_6">
                  : "થઇ જશ!" is a movie with punctuation in the title. Even
                  though the title is in the middle of a sentence, the
                  exclamation point should be transcribed along with the
                  question mark at the end of the sentence.{' '}
                </span>
              </p>
              <p class="block_837">Multiple spellings </p>
              <p class="block_838">
                If a word has multiple correct spellings, use the first spelling
                in your language's standard dictionary. If there is no entry,
                Google the word and use the spelling with the most results.{' '}
              </p>
              <p class="block_839">
                Use official spelling for technical and scientific terms. Google
                them and pay attention to the correct format.{' '}
              </p>
              <p class="block_840">
                Transcribe slang and colloquialisms as they are commonly written
                in your language. Do not change non-standard speech that the
                speaker wouldn't want corrected.{' '}
              </p>
              <p class="block_841">
                If you hear a word that does not sound like a standard word of
                your language because there is a small sound change (i.e.
                accent, speech error, speech impairment, etc), transcribe the
                intended word.{' '}
              </p>
              <p class="block_842">
                If you hear a word that does not sound like a standard word of
                your language, but it is obviously based on real words,
                suffixes, or prefixes, transcribe as is.{' '}
              </p>
              <p class="block_843">
                If you hear a word that does not sound like a standard word of
                your language because it appears to be nonsense, do a Google
                search for the word. If there is a clear candidate, transcribe
                that word.{' '}
              </p>
              <p class="block_146">
                If a word appears to be nonsense and a Google search returns no
                clear results but it is easy to spell and articulated clearly,
                transcribe it anyway.{' '}
              </p>
              <p class="block_844">
                Transcribe onomatopoeia when clearly spoken. Otherwise, use the
                Unintelligible label as instructed in: Longform generic rules
                &gt; Unintelligible or foreign or singing.{' '}
              </p>
            </div>
          </Paper>
        </Grid>
        <Hidden smDown>
          <Grid sm={3} item className={classes.rightNav}>
            <RightContentNav
              title="Difficult Utterances"
              headingIds={headingIds}
            />
          </Grid>
        </Hidden>
      </Grid>
    </Wrapper>
  )
}

export default DifficultUtterances

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
