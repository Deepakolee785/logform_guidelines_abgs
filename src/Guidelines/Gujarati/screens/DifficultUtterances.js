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
              <p className={'large-heading'}>Difficult utterances</p>
              <p className={'text'}>
                This section covers how to transcribe audio samples that include
                non human speech, laughter, filler words, profanity, false
                starts, repetitions, speech from multiple speakers.
              </p>
              <div id="skipping-a-prompt">
                <p className={'heading'}>Skipping a prompt</p>
                <p className={'text'}>
                  For Loft 1.0: If you can't understand part of the audio,
                  transcribe only the part you can understand. For the part you
                  cannot understand, create a separate speaker segment and add
                  the Unintelligible label as instructed in: Longform generic
                  rules &gt; Unintelligible or foreign or singing.
                </p>
                <p className={styles.block_362}>
                  For Loft 2.0: Below is a list of reasons to skip the audio
                  that may be available for you to choose from. Each contain a
                  description of when is an appropriate time to use it.
                </p>
                <p className={styles.block_363}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_1}>
                    No Audio: The audio doesn't load.{' '}
                  </span>
                </p>
                <p className={styles.block_364}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_1}>
                    No Sound: The waveform indicates there is audio but I can't
                    hear anything.
                  </span>
                </p>
                <p className={styles.block_365}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_1}>
                    Other Locale: All of the speech is in a different language.
                  </span>
                </p>
                <p className={styles.block_366}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_1}>
                    Silent Audio: The entire utterance is silent
                  </span>
                </p>
                <p className={styles.block_367}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_1}>
                    Noisy Audio: The entire utterance is too noisy.
                  </span>
                </p>
                <p className={styles.block_368}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_1}>
                    Other: Other reason (Please explain).{' '}
                  </span>
                </p>
                <p className={styles.block_369}>
                  For utterances that contain speech that is user-generated,
                  pre-recorded, or synthesized, transcribe all of it.
                </p>
                <br />
                <p className={'heading'}>Things to ignore</p>
                <p className={'text'}>
                  Do not transcribe filler words unless intended by the speaker
                  to be transcribed. Never lengthen them.
                </p>
                <p className={styles.block_296}>
                  <span className={styles.text_11}>C</span>
                  <span className={styles.text_12}>ORRECT</span>
                  <span className={styles.text_13}>: ભિી ગયો. </span>
                  <span className={styles.text_19}>E</span>
                  <span className={styles.text_20}>XAMPLE AUDIO</span>
                  <span className={styles.text_19}>: " </span>
                  <span className={styles.text_22}>[sigh or loud breath] </span>
                  <span className={styles.text_21}>ભિી ગયો </span>
                  <span className={styles.text_19}>" </span>
                </p>
                <p className={styles.block_297}>
                  Transcribe any filler words that are applicable and used in
                  the target language. Below are examples of filler words in the
                  English language. These may or may not be applicable in the
                </p>
                <p className={styles.block_298}>
                  target language. Again, only transcribe filler words that
                  exist in and are used in the target language.
                </p>
                <p className={styles.block_299}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_1}>um </span>
                </p>
                <p className={styles.block_300}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_1}>uh </span>
                </p>
                <p className={styles.block_301}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_1}>right </span>
                </p>
                <p className={styles.block_302}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_1}>you know </span>
                </p>
                <p className={styles.block_300}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_1}>so </span>
                </p>
                <p className={styles.block_303}>
                  <span className={styles.text_8}>• </span>
                  <span className={styles.text_23}>like </span>
                  <span className={styles.text_24}></span>
                </p>
              </div>
              <div id="hesitations-and-truncations">
                <p className={'heading'}>
                  Hesitations truncations and repetitions
                </p>
                <p className={'text'}>
                  If a speaker says only the beginning part of the word,
                  transcribe it if it can be considered a word on its own.
                  Otherwise do not transcribe the false start.
                </p>
                <p className={styles.block_305}>
                  <span className={styles.text_4}>C</span>
                  <span className={styles.text_5}>ORRECT</span>
                  <span className={styles.text_6}>
                    : અન્સભનદન. હ તન પ્રમ કરુ છ .{' '}
                  </span>
                </p>
                <p className={styles.block_306}>
                  <span className={styles.text_4}>I</span>
                  <span className={styles.text_5}>NCORRECT</span>
                  <span className={styles.text_6}>
                    : અન્સભ અન્સભનદન હ તન પ્રમ કરુ છ ?{' '}
                  </span>
                </p>
                <p className={styles.block_307}>
                  <span className={styles.text_4}>E</span>
                  <span className={styles.text_5}>XAMPLE AUDIO</span>
                  <span className={styles.text_4}>: " </span>
                  <span className={styles.text_6}>અન્સભ </span>
                  <span className={styles.text_25}>[pause] </span>
                  <span className={styles.text_6}>
                    અન્સભનદન હ તન પ્રમ કરુ છ{' '}
                  </span>
                  <span className={styles.text_4}>" </span>
                </p>
                <p className={styles.block_308}>
                  <span className={styles.text_4}>E</span>
                  <span className={styles.text_5}>XPLANATION</span>
                  <span className={styles.text_6}>
                    : Since "અન્સભ" is not a word, do not transcribe this false
                    start.
                  </span>
                </p>
                <p className={styles.block_309}>
                  <span className={styles.text_4}>C</span>
                  <span className={styles.text_5}>ORRECT</span>
                  <span className={styles.text_6}>: જોડ જોડણી સધારો </span>
                </p>
                <p className={styles.block_310}>
                  <span className={styles.text_4}>I</span>
                  <span className={styles.text_5}>NCORRECT</span>
                  <span className={styles.text_6}>: જોડણી સધારો </span>
                </p>
                <p className={styles.block_311}>
                  <span className={styles.text_4}>E</span>
                  <span className={styles.text_5}>XAMPLE AUDIO</span>
                  <span className={styles.text_4}>: " </span>
                  <span className={styles.text_6}>જોડ </span>
                  <span className={styles.text_25}>[pause] </span>
                  <span className={styles.text_6}>જોડણી સધારો </span>
                  <span className={styles.text_4}>" </span>
                </p>
                <p className={styles.block_312}>
                  <span className={styles.text_4}>E</span>
                  <span className={styles.text_5}>XPLANATION</span>
                  <span className={styles.text_6}>
                    : Since "જોડ" is a word on its own it is transcribed before
                    "જોડણી" without "-" or "..."
                  </span>
                </p>
                <p className={styles.block_313}>
                  If a speaker repeats part of the end of a sentence, add ending
                  punctuation before the repeated phrase. Do not include ending
                  punctuation after the repeated phrase (unless the repeated
                  part is a complete sentence).
                </p>
                <p className={styles.block_314}>
                  <span className={styles.text_4}>C</span>
                  <span className={styles.text_5}>ORRECT</span>
                  <span className={styles.text_6}>
                    : આ ખબ જ મોઘ છ. જ મોઘ છ{' '}
                  </span>
                </p>
                <p className={styles.block_315}>
                  <span className={styles.text_4}>I</span>
                  <span className={styles.text_5}>NCORRECT</span>
                  <span className={styles.text_6}>
                    : આ ખબ જ મોઘ છ જ મોઘ છ.{' '}
                  </span>
                </p>
                <p className={styles.block_316}>
                  <span className={styles.text_4}>E</span>
                  <span className={styles.text_5}>XAMPLE AUDIO</span>
                  <span className={styles.text_4}>: " </span>
                  <span className={styles.text_6}>આ ખબ જ મોઘ છ જ મોઘ છ </span>
                  <span className={styles.text_4}>" </span>
                </p>
                <p className={styles.block_317}>
                  <span className={styles.text_4}>E</span>
                  <span className={styles.text_5}>XPLANATION</span>
                  <span className={styles.text_6}>
                    : The ending punctuation is transcribed before the repeated
                    phrase "જ મોઘ છ". Note, "જ મોઘ
                  </span>
                </p>
                <p className={styles.block_318}>
                  છ" by itself is not a complete sentence so there is no
                  punctuation after it.
                </p>
                <p className={styles.block_319}>
                  If a very small part of a word (at most one syllable) has been
                  cut off, and you know what the word is supposed to be,
                  transcribe the entire word.
                </p>
                <p className={styles.block_320}>
                  <span className={styles.text_4}>C</span>
                  <span className={styles.text_5}>ORRECT</span>
                  <span className={styles.text_6}>: આ પ્રયોગ રાત્ર </span>
                </p>
                <p className={styles.block_321}>
                  <span className={styles.text_4}>I</span>
                  <span className={styles.text_5}>NCORRECT</span>
                  <span className={styles.text_6}>: આ પ્રયોગ રાત- </span>
                </p>
                <p className={styles.block_322}>
                  <span className={styles.text_4}>I</span>
                  <span className={styles.text_5}>NCORRECT</span>
                  <span className={styles.text_6}>: આ પ્રયોગ </span>
                </p>
                <p className={styles.block_323}>
                  <span className={styles.text_4}>E</span>
                  <span className={styles.text_5}>XAMPLE AUDIO</span>
                  <span className={styles.text_4}>: " </span>
                  <span className={styles.text_6}>આ પ્રયોગ રાત </span>
                  <span className={styles.text_4}>" </span>
                </p>
                <p className={styles.block_324}>
                  <span className={styles.text_4}>E</span>
                  <span className={styles.text_5}>XPLANATION</span>
                  <span className={styles.text_6}>
                    : Final "ર" was truncated, but since only one syllable was
                    cut off, the full word is transcribed with the missing "ર".
                  </span>
                </p>
                <p className={styles.block_325}>
                  <span className={styles.text_11}>C</span>
                  <span className={styles.text_12}>ORRECT</span>
                  <span className={styles.text_13}>
                    : ગ જરાતીમા તન શ કહવાય છ?{' '}
                  </span>
                  <span className={styles.text_19}>E</span>
                  <span className={styles.text_20}>XAMPLE AUDIO</span>
                  <span className={styles.text_19}>: " </span>
                  <span className={styles.text_21}>જરાતીમા તન શ કહવાય છ </span>
                  <span className={styles.text_19}>" </span>
                </p>
                <p className={styles.block_326}>
                  <span className={styles.text_4}>E</span>
                  <span className={styles.text_5}>XPLANATION</span>
                  <span className={styles.text_6}>
                    : Initial "ગ " was cut off, but since it is only one letter,
                    the whole word, "ગ જરાતીમા" is transcribed with the missing
                    "ગ " added.
                  </span>
                </p>
                <p className={styles.block_327}>
                  If you are not sure what the word should be, do not transcribe
                  the word at all. Do not put punctuation after words that have
                  been cut off.
                </p>
                <p className={styles.block_328}>
                  <span className={styles.text_11}>C</span>
                  <span className={styles.text_12}>ORRECT</span>
                  <span className={styles.text_13}>: હ કામની </span>
                  <span className={styles.text_19}>E</span>
                  <span className={styles.text_20}>XAMPLE AUDIO</span>
                  <span className={styles.text_19}>: " </span>
                  <span className={styles.text_21}>હ કામની શો</span>
                  <span className={styles.text_22}>- </span>
                  <span className={styles.text_19}>" </span>
                </p>
                <p className={styles.block_329}>
                  <span className={styles.text_4}>E</span>
                  <span className={styles.text_5}>XPLANATION</span>
                  <span className={styles.text_6}>
                    : "શોધ" was cut off, but since there is no way to tell what
                    word the speaker meant to say, the word is not transcribed
                    at all.
                  </span>
                </p>
                <p className={styles.block_330}>
                  If a quotation is cut off in the middle, use an end quotation
                  mark anyway.
                </p>
                <p className={styles.block_331}>
                  <span className={styles.text_11}>C</span>
                  <span className={styles.text_12}>ORRECT</span>
                  <span className={styles.text_13}>
                    : નરશ કહ્, "તમારી સાથ વાત"{' '}
                  </span>
                  <span className={styles.text_19}>E</span>
                  <span className={styles.text_20}>XAMPLE AUDIO</span>
                  <span className={styles.text_19}>: " </span>
                  <span className={styles.text_21}>નરશ કહ્ તમારી સાથ વાત </span>
                  <span className={styles.text_19}>" </span>
                </p>
                <p className={styles.block_332}>
                  <span className={styles.text_4}>E</span>
                  <span className={styles.text_5}>XPLANATION</span>
                  <span className={styles.text_6}>
                    : The speaker's quotation of નરશ was truncated. Even though
                    the end of the quotation was not recorded, an end quotation
                    mark must be transcribed at the end of the quote. Since
                    "તમારી સાથ વાત" is not a complete sentence, it is not
                    transcribed with a period at the end.
                  </span>
                </p>
                <p className={styles.block_333}>
                  If a speaker repeats a word five times or less, transcribe
                  each repetition (without fillers). But if a word is repeated
                  more than five times, skip the prompt.
                </p>
                <p className={styles.block_334}>
                  <span className={styles.text_4}>C</span>
                  <span className={styles.text_5}>ORRECT</span>
                  <span className={styles.text_6}>: વધ એક રોટી રોટી આપો. </span>
                </p>
                <p className={styles.block_335}>
                  <span className={styles.text_4}>I</span>
                  <span className={styles.text_5}>NCORRECT</span>
                  <span className={styles.text_6}>: વધ એક રોટી આપો. </span>
                </p>
                <p className={styles.block_336}>
                  <span className={styles.text_4}>E</span>
                  <span className={styles.text_5}>XAMPLE AUDIO</span>
                  <span className={styles.text_4}>: " </span>
                  <span className={styles.text_6}>વધ એક રોટી રોટી આપો </span>
                  <span className={styles.text_4}>" </span>
                </p>
                <p className={styles.block_337}>
                  <span className={styles.text_4}>E</span>
                  <span className={styles.text_5}>XPLANATION</span>
                  <span className={styles.text_6}>
                    : Since speaker said "રોટી" twice, transcribe it twice.
                  </span>
                </p>
                <p className={styles.block_338}>
                  <span className={styles.text_11}>C</span>
                  <span className={styles.text_12}>ORRECT</span>
                  <span className={styles.text_11}>: [skip] </span>
                  <span className={styles.text_19}>E</span>
                  <span className={styles.text_20}>XAMPLE AUDIO</span>
                  <span className={styles.text_19}>: " </span>
                  <span className={styles.text_21}>
                    બરાબર બરાબર બરાબર બરાબર બરાબર{' '}
                  </span>
                </p>
                <p className={styles.block_339}>
                  <span className={styles.text_6}>બરાબ </span>
                  <span className={styles.text_4}>" </span>
                </p>
                <p className={styles.block_340}>
                  Transcribe only numbers that you hear even if the speaker
                  didn't finish saying the entire number.
                </p>
                <p className={styles.block_341}>
                  <span className={styles.text_4}>C</span>
                  <span className={styles.text_5}>ORRECT</span>
                  <span className={styles.text_6}>: મારી ઉમર 100 </span>
                </p>
                <p className={styles.block_342}>
                  <span className={styles.text_4}>I</span>
                  <span className={styles.text_5}>NCORRECT</span>
                  <span className={styles.text_6}>: મારી ઉમર 101 </span>
                </p>
                <p className={styles.block_343}>
                  <span className={styles.text_4}>E</span>
                  <span className={styles.text_5}>XAMPLE AUDIO</span>
                  <span className={styles.text_4}>: " </span>
                  <span className={styles.text_6}>મારી ઉમર એકસો</span>
                  <span className={styles.text_25}>- </span>
                  <span className={styles.text_4}>" </span>
                </p>
                <p className={styles.block_344}>
                  <span className={styles.text_4}>E</span>
                  <span className={styles.text_5}>XPLANATION</span>
                  <span className={styles.text_6}>
                    : The speaker said "એકસો એક", but the microphone only
                    recorded "એકસો-", so transcribe "100" instead of "101" since
                    that is what you hear.
                  </span>
                </p>
              </div>
              <div id="background-and-foreground-speech">
                <p className={'heading'}>Background and foreground speech</p>
                <p className={'text'}>
                  Only transcribe foreground speech. A user's speech may go from
                  the foreground to the background based on the volume of their
                  speech and who they are speaking to.
                </p>
                <p className={styles.block_347}>
                  <span className={styles.text_11}>C</span>
                  <span className={styles.text_12}>ORRECT</span>
                  <span className={styles.text_13}>: ગાય </span>
                  <span className={styles.text_19}>E</span>
                  <span className={styles.text_20}>XAMPLE AUDIO</span>
                  <span className={styles.text_19}>: " </span>
                  <span className={styles.text_21}>ગાય બરાબર </span>
                  <span className={styles.text_19}>" </span>
                </p>
                <p className={styles.block_348}>
                  <span className={styles.text_4}>E</span>
                  <span className={styles.text_5}>XPLANATION</span>
                  <span className={styles.text_6}>
                    : The word "ગાય" is said loudly, in the foreground. The rest
                    of the speech is said in a lower volume in the background to
                    another person. The background speech is not transcribed.
                  </span>
                </p>
                <p className={styles.block_349}>
                  <span className={styles.text_4}>C</span>
                  <span className={styles.text_5}>ORRECT</span>
                  <span className={styles.text_6}>
                    : માર કોથરૂડ, બાણર જવ છ. હ ભગવાન. હજી અડધો કિાક છ.
                  </span>
                </p>
                <p className={styles.block_350}>
                  <span className={styles.text_3}>E</span>
                  <span className={styles.text_}>XPLANATION</span>
                  <span className={styles.text_3}>
                    : The speaker's first sentence is spoken to someone. The
                    second sentence is spoken to another person, but it is still
                    loud, so it is also transcribed.
                  </span>
                </p>
                <p className={styles.block_351}>
                  If one person clearly speaks in the foreground and someone
                  speaks in the background, transcribe the foreground speaker
                  and ignore the rest.
                </p>
                <p className={styles.block_352}>
                  <span className={styles.text_11}>C</span>
                  <span className={styles.text_12}>ORRECT</span>
                  <span className={styles.text_13}>: સૌચાિય ક્યા છ? </span>
                  <span className={styles.text_19}>E</span>
                  <span className={styles.text_20}>XAMPLE AUDIO</span>
                  <span className={styles.text_19}>: " </span>
                  <span className={styles.text_21}>સૌચાિય ક્યા છ </span>
                  <span className={styles.text_19}>" </span>
                </p>
                <p className={styles.block_353}>
                  <span className={styles.text_4}>E</span>
                  <span className={styles.text_5}>XAMPLE AUDIO</span>
                  <span className={styles.text_4}>: " </span>
                  <span className={styles.text_6}>ન્સદવાળી મબારક </span>
                  <span className={styles.text_4}>" </span>
                </p>
                <p className={styles.block_354}>
                  <span className={styles.text_3}>E</span>
                  <span className={styles.text_}>XPLANATION</span>
                  <span className={styles.text_3}>
                    : The second speaker is in the background. Do not transcribe
                    what the second speaker says.
                  </span>
                </p>
                <p className={styles.block_355}>
                  If two people take turns speaking, are not speaking at the
                  same time, and are both in the foreground at approximately the
                  same volume, transcribe the speech of both speakers as
                  different sentences. Separate different speakers' sentences
                  with end punctuation.
                </p>
                <p className={styles.block_356}>
                  <span className={styles.text_11}>C</span>
                  <span className={styles.text_12}>ORRECT</span>
                  <span className={styles.text_13}>
                    : ભાવ સચકર મ જબ ભાડ િશો ન? હા.{' '}
                  </span>
                  <span className={styles.text_19}>E</span>
                  <span className={styles.text_20}>XAMPLE AUDIO</span>
                  <span className={styles.text_19}>: " </span>
                  <span className={styles.text_21}>
                    ભાવ સચકર મ જબ ભાડ િશો ન હા{' '}
                  </span>
                  <span className={styles.text_19}>" </span>
                </p>
                <p className={styles.block_357}>
                  <span className={styles.text_3}>E</span>
                  <span className={styles.text_}>XPLANATION</span>
                  <span className={styles.text_3}>
                    : Both speakers are in the foreground so both sentences are
                    transcribed. The speech of the two speakers is separated by
                    punctuation.
                  </span>
                </p>
                <p className={styles.block_358}>
                  If one person clearly speaks in the foreground and someone
                  interrupts at the same volume with a brief (less than a
                  second) overlapping speech segment, transcribe the main
                  speaker and ignore the rest.
                </p>
                <p className={styles.block_359}>
                  If there are two or more people speaking, one talking to the
                  device and the other not, transcribe only the speaker speaking
                  to the device.
                </p>
              </div>
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
