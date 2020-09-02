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
            <PageContentHeader currentPage="longform Marathi" />
            <div className="content text">
              <p class="block_318">Difficult utterances</p>
              <p class="block_319">
                This section covers how to transcribe audio samples that include
                non human speech, laughter, filler words, profanity, false
                starts, repetitions, speech from multiple speakers.
              </p>
              <p class="block_320">Things to ignore</p>
              <p class="block_321">
                Do not transcribe filler words unless intended by the speaker to
                be transcribed. Never lengthen them.
              </p>
              <p class="block_322">
                <span class="text_10">Correct: तो तजा प क आह का? </span>
                <span class="text_11">Example audio: " </span>
                <span class="text_12">तो उच तजा प क आह का </span>
                <span class="text_11">" </span>
              </p>
              <p class="block_323">
                <span class="text_10">Correct: त असा णतोस तर ठ क आह. </span>
                <span class="text_11">Example audio: " </span>
                <span class="text_12">[sigh or loud breath] त असा </span>
              </p>
              <p class="block_324">
                <span class="text_9">णतोस तर ठ क आह </span>
                <span class="text_8">" </span>
              </p>
              <p class="block_325">
                Transcribe any filler words that are applicable and used in the
                target language. Below are examples of filler words in the
                English language. These may or may not be applicable in the
                target language. Again, only transcribe filler words that exist
                in and are used in the target language.
              </p>
              <p class="block_326">● um</p>
              <p class="block_327">● uh</p>
              <p class="block_328">● right</p>
              <p class="block_329">● you know</p>
              <p class="block_327">● so</p>
              <p class="block_330">● like</p>
              <p class="block_331">Hesitations truncations and repetitions</p>
              <p class="block_332">
                If a speaker says only the beginning part of the word,
                transcribe it if it can be considered a word on its own.
                Otherwise do not transcribe the false start.
              </p>
              <p class="block_333">Correct: काय करतोस?</p>
              <p class="block_334">Incorrect: क- काय करतोस</p>
              <p class="block_335">
                <span class="text_8">Example audio: " </span>
                <span class="text_9">क- काय करतोस </span>
                <span class="text_8">" </span>
              </p>
              <p class="block_336">
                Explanation: Since क is not a word on its own, do
              </p>
              <p class="block_337">not transcribe it.</p>
              <p class="block_338">Correct: सम सम ात जात आहो</p>
              <p class="block_339">Incorrect: सम ात जात आहो</p>
              <p class="block_340">
                <span class="text_8">Example audio: " </span>
                <span class="text_9">सम [pause] सम ात जात आहो </span>
                <span class="text_8">" </span>
              </p>
              <p class="block_341">
                Explanation: Since "सम" is a word on its own, it is
              </p>
              <p class="block_342">transcribed without "-" or "..."</p>
              <p class="block_343">
                If a speaker repeats part of the end of a sentence, add ending
                punctuation before the repeated phrase. Do not include ending
                punctuation after the repeated phrase (unless the repeated part
                is a complete sentence).
              </p>
              <p class="block_344">Correct: राम घरी आला का? राम</p>
              <p class="block_345">Incorrect: राम घरी आला का राम?</p>
              <p class="block_346">
                <span class="text_8">Example audio: " </span>
                <span class="text_9">राम घरी आला का राम </span>
                <span class="text_8">" </span>
              </p>
              <p class="block_347">Explanation: The ending punctuation is</p>
              <p class="block_348">
                transcribed before the repeated phrase "राम ".
              </p>
              <p class="block_349">
                Note, "राम " by itself is not a complete sentence
              </p>
              <p class="block_350">so there is no punctuation after it.</p>
              <p class="block_351">
                If a very small part of a word (at most one syllable) has been
                cut off, and you know what the word is supposed to be,
                transcribe the entire word.
              </p>
              <p class="block_352">Correct: तच घर कोकणात आह</p>
              <p class="block_353">Incorrect: तच घर कोकण-</p>
              <p class="block_354">Incorrect: तच घर कोक</p>
              <p class="block_355">
                <span class="text_8">Example audio: " </span>
                <span class="text_9">तच घर कोकणात </span>
                <span class="text_8">" </span>
              </p>
              <p class="block_356">
                Explanation: "आह" चा उ ार नाही झाला कारण तो
              </p>
              <p class="block_357">truncated होता. पण श ाि ब कला, आह ला</p>
              <p class="block_358">सोडन.</p>
              <p class="block_359">
                <span class="text_10">Correct: ि कट चा गम </span>
                <span class="text_11">Example audio: " </span>
                <span class="text_12">कट चा गम </span>
                <span class="text_11">" </span>
              </p>
              <p class="block_360">
                Explanation: Initial "ि " was cut off, but since it is
              </p>
              <p class="block_361">
                only one letter, the whole word, "ि कट" is
              </p>
              <p class="block_362">transcribed with the missing "ि " added.</p>
              <p class="block_363">
                If you are not sure what the word should be, do not transcribe
                the word at all. Do not put punctuation after words that have
                been cut off.
              </p>
              <p class="block_364">
                <span class="text_10">Correct: मी राहतो तम ा </span>
                <span class="text_11">Example audio: " </span>
                <span class="text_12">मी राहतो तम ा स- </span>
                <span class="text_11">" </span>
              </p>
              <p class="block_365">
                Explanation: There are multiple possible words
              </p>
              <p class="block_366">
                the last word could be and there is no way to
              </p>
              <p class="block_367">
                tell what the speaker meant to say for it. In this
              </p>
              <p class="block_368">
                case, do not transcribe the word and do not
              </p>
              <p class="block_369">include ending punctuation.</p>
              <p class="block_370">
                If a quotation is cut off in the middle, use an end quotation
                mark anyway.
              </p>
              <p class="block_371">
                <span class="text_10">Correct: तो णल, "मी उ ा" </span>
                <span class="text_11">Example audio: " </span>
                <span class="text_12">तो णल मी उ ा </span>
                <span class="text_11">" </span>
              </p>
              <p class="block_372">
                Explanation: The speaker's quotation was cut off.
              </p>
              <p class="block_373">Even though the "मी उ ा" isn't a complete</p>
              <p class="block_374">
                sentence, it is still transcribed with an ending
              </p>
              <p class="block_375">quotation mark.</p>
              <p class="block_376">
                If a speaker repeats a word five times or less, transcribe each
                repetition (without fillers). But if a word is repeated more
                than five times, skip the prompt.
              </p>
              <p class="block_377">Correct: मला एक साडी साडी ायची आह.</p>
              <p class="block_378">Incorrect: मला एक साडी व साडी ायची आह.</p>
              <p class="block_379">
                <span class="text_8">Example audio: " </span>
                <span class="text_9">मला एक साडी व साडी ायची </span>
              </p>
              <p class="block_380">
                <span class="text_9">आह </span>
                <span class="text_8">" </span>
              </p>
              <p class="block_381">
                Explanation: Since speaker said "साडी" twice,
              </p>
              <p class="block_382">
                transcribe it twice. Do not include the filler "व".
              </p>
              <p class="block_383">
                <span class="text_13">Correct: [skip] </span>
                <span class="text_11">Example audio: " </span>
                <span class="text_12">हलो हलो हलो हलो हलो </span>
                <span class="text_11">" </span>
              </p>
              <p class="block_384">
                Transcribe only numbers that you hear even if the speaker didn't
                finish saying the entire number.
              </p>
              <p class="block_385">
                <span class="text_14">Example </span>
                <span class="text_15">
                  Correct: 568 नारायण पठ टीळकवाडा पण तीन.{' '}
                </span>
              </p>
              <p class="block_386">
                <span class="text_11">audio: " </span>
                <span class="text_12">
                  पाचश साठ आठ नारायण पठ टीळकवाडा पण तीन-{' '}
                </span>
                <span class="text_11">" </span>
                <span class="text_16">
                  Incorrect: 568 नारायण पठ टीळकवाडा पण 30.{' '}
                </span>
              </p>
              <p class="block_387">
                Explanation: The speaker meant to say "पाचश
              </p>
              <p class="block_387">साठ आठ नारायण पठ टीळकवाडा पण तीस" but the</p>
              <p class="block_387">microphone only recorded "पाचश साठ आठ</p>
              <p class="block_387">नारायण पठ टीळकवाडा पण तीन-" . Even if you</p>
              <p class="block_388">
                know based on context it should be "30" and not
              </p>
              <p class="block_388">
                "3", transcribe the number 3 and not 30 since that
              </p>
              <p class="block_388">
                is what you hear. Since 3 is less than 10, it should
              </p>
              <p class="block_387">be spelled out as "तीन"</p>
              <p class="block_389">Background and foreground speech</p>
              <p class="block_390">
                Only transcribe foreground speech. A user's speech may go from
                the foreground to the background based on the volume of their
                speech and who they are speaking to.
              </p>
              <p class="block_391">
                <span class="text_10">Correct: िपरा ास </span>
                <span class="text_11">Example audio: " </span>
                <span class="text_12">िपरा ास बोला आ ण त िपरा ास </span>
              </p>
              <p class="block_392">
                <span class="text_9">आपोआप शअरच करणार </span>
                <span class="text_8">" </span>
              </p>
              <p class="block_387">
                Explanation: The word "िपरा ास" is said loudly in
              </p>
              <p class="block_388">
                the foreground. The rest of the speech is quiet
              </p>
              <p class="block_388">
                and in the background so it is not transcribed.
              </p>
              <p class="block_393">Correct: फा ड चतळ शॉप इन पण. ततच चाललो</p>
              <p class="block_393">आहोत ना?</p>
              <p class="block_392">
                <span class="text_8">Example audio: " </span>
                <span class="text_9">
                  फा ड चतळ शॉप इन पण ततच चाललो आहोत ना{' '}
                </span>
                <span class="text_8">" </span>
              </p>
              <p class="block_388">
                Explanation: The speaker's first sentence is
              </p>
              <p class="block_388">
                spoken to the phone. The second sentence is
              </p>
              <p class="block_388">
                spoken to another person, but it is still loud, so
              </p>
              <p class="block_388">it is also transcribed.</p>
              <p class="block_394">
                If one person clearly speaks in the foreground and someone
                speaks in the background, transcribe the foreground speaker and
                ignore the rest.
              </p>
              <p class="block_395">
                <span class="text_10">Correct: िडरकशन मबई </span>
                <span class="text_11">Example audio: " </span>
                <span class="text_12">[speaker one] िडरकशन मबई </span>
                <span class="text_11">" </span>
              </p>
              <p class="block_396">
                <span class="text_8">Example audio: " </span>
                <span class="text_9">[speaker two] इन महारा </span>
                <span class="text_8">" </span>
              </p>
              <p class="block_397">Explanation: The second speaker is in the</p>
              <p class="block_398">background, so only transcribe the first</p>
              <p class="block_399">speaker.</p>
              <p class="block_400">
                If two people take turns speaking, are not speaking at the same
                time, and are both in the foreground at approximately the same
                volume, transcribe the speech of both speakers as different
                sentences. Separate different speakers' sentences with end
                punctuation.
              </p>
              <p class="block_401">
                <span class="text_10">Correct: त यतोस का? हो. </span>
                <span class="text_11">Example audio: " </span>
                <span class="text_12">[speaker one] त यतोस का </span>
                <span class="text_11">" </span>
              </p>
              <p class="block_402">
                <span class="text_8">Example audio: " </span>
                <span class="text_9">[speaker two] हो </span>
                <span class="text_8">" </span>
              </p>
              <p class="block_403">Explanation: Both speakers are in the</p>
              <p class="block_404">
                foreground so both sentences are transcribed.
              </p>
              <p class="block_405">
                The speech of the two speakers is separated by
              </p>
              <p class="block_406">punctuation.</p>
              <p class="block_407">
                <span class="text_10">Correct: इस म. पण मला िप झा हवा. </span>
                <span class="text_11">Example audio: " </span>
                <span class="text_12">इस म पण मला िप झा हवा </span>
                <span class="text_11">" </span>
              </p>
              <p class="block_408">Explanation: Even though "इस म" is not a</p>
              <p class="block_409">
                complete sentence, a period is used in order to
              </p>
              <p class="block_410">separate the speech of the two speakers.</p>
              <p class="block_411">
                <span class="text_10">
                  Correct: तला बारा वाटाय? हो. बर ठ क आह.{' '}
                </span>
                <span class="text_11">Example audio: " </span>
                <span class="text_12">[speaker one] तला बारा वाटाय </span>
                <span class="text_11">" </span>
              </p>
              <p class="block_412">
                <span class="text_8">Example audio: " </span>
                <span class="text_9">[speaker two] हो </span>
                <span class="text_8">" </span>
              </p>
              <p class="block_413">
                <span class="text_8">Example audio: " </span>
                <span class="text_9">[speaker one] बर ठ क आह </span>
                <span class="text_8">" </span>
              </p>
              <p class="block_414">
                Explanation: The speech alternates between
              </p>
              <p class="block_415">
                two speakers in the foreground. The speech of
              </p>
              <p class="block_416">
                both speakers is transcribed, separated by
              </p>
              <p class="block_406">punctuation.</p>
              <p class="block_417">
                If one person clearly speaks in the foreground and someone
                interrupts at the same volume with a brief (less than a second)
                overlapping speech segment, transcribe the main speaker and
                ignore the rest.
              </p>
              <p class="block_418">
                <span class="text_10">
                  Correct: त यतोस का? मला एक साडी ायची आह.{' '}
                </span>
                <span class="text_11">Example audio: " </span>
                <span class="text_12">[speaker one] त यतोस का </span>
                <span class="text_11">" </span>
              </p>
              <p class="block_412">
                <span class="text_8">Example audio: " </span>
                <span class="text_9">[speaker two] हो </span>
                <span class="text_8">" </span>
              </p>
              <p class="block_419">
                <span class="text_8">Example audio: " </span>
                <span class="text_9">[speaker one] मला एक साडी </span>
              </p>
              <p class="block_420">
                <span class="text_9">ायची आह </span>
                <span class="text_8">" </span>
              </p>
              <p class="block_421">
                Explanation: The second speaker interrupts with
              </p>
              <p class="block_422">
                a brief "हो" (less than a second) while the first
              </p>
              <p class="block_423">
                speaker is still speaking. The short "हो" from the
              </p>
              <p class="block_424">second speaker is not transcribed.</p>
              <p class="block_425">
                If there are two or more people speaking, one talking to the
                device and the other not, transcribe only the speaker speaking
                to the device.
              </p>
              <p class="block_426">Skipping a prompt</p>
              <p class="block_427">
                For Loft 1.0: If you can't understand part of the audio,
                transcribe only the part you can understand. For the part you
                cannot understand, create a separate speaker segment and add the
                Unintelligible label as instructed in: Longform generic rules
                &gt; Unintelligible or foreign or singing.
              </p>
              <p class="block_428">
                For Loft 2.0: Below is a list of reasons to skip the audio that
                may be available for you to choose from. Each contain a
                description of when is an appropriate time to use it.
              </p>
              <p class="block_429">● No Audio: The audio doesn't load.</p>
              <p class="block_430">
                ● No Sound: The waveform indicates there is audio but I can't
                hear anything.
              </p>
              <p class="block_431">
                ● Other Locale: All of the speech is in a different language.
              </p>
              <p class="block_432">
                ● Silent Audio: The entire utterance is silent
              </p>
              <p class="block_433">
                ● Noisy Audio: The entire utterance is too noisy.
              </p>
              <p class="block_434">● Other: Other reason (Please explain).</p>
              <p class="block_435">
                <span class="text_4">
                  For utterances that contain speech that is user-generated,
                  pre-recorded, or synthesized, transcribe all of it.{' '}
                </span>
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
