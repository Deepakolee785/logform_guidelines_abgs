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
            <PageContentHeader currentPage="longform Bangla" />
            <div className="content text">
              <p className={styles.block_215}>Transcription quality </p>
              <p className={styles.block_216}>
                The following general rules must be obeyed at all times when
                transcribing.{' '}
              </p>
              <p className={styles.block_217}>Typo </p>
              <p className={styles.block_218}>
                Avoid making any typographical errors. Carefully check your work
                before marking items as "complete".{' '}
              </p>
              <p className={styles.block_219}>
                Use proper capitalization for proper nouns, names and titles,
                unless it would contradict a rule in these guidelines.{' '}
              </p>
              <p className={styles.block_145}>
                Include ending punctuation at the end of sentences, unless it
                would contradict a rule in these guidelines.{' '}
              </p>
              <p className={styles.block_220}>
                Transcribe what is actually spoken. Use context to help with
                spelling and homophone disambiguation. Look up words if you are
                unsure.{' '}
              </p>
              <p className={styles.block_221}>
                Do not correct the grammar of the speakers in the audio.
                Transcribe what they say.{' '}
              </p>
              <p className={styles.block_222}>
                Do not transcribe words that the speaker does not say, unless it
                would contradict a rule in these guidelines.{' '}
              </p>
              <p className={styles.block_223}>
                Transcribe all words the speaker says, even if the speaker did
                not mean to say them.{' '}
              </p>
              <p className={styles.block_224}>
                <span className={styles.text_4}>
                  Use only one space between words and sentences.{' '}
                </span>
                <span className={styles.text_5}>Foreign language </span>
              </p>
              <p className={styles.block_225}>
                Do not skip audio that contains foreign words. First indicate
                whether it contains English or another language, then transcribe
                the utterance according to the following rules.{' '}
              </p>
              <p className={styles.block_226}>English </p>
              <p className={styles.block_227}>
                Please transliterate all English media titles.{' '}
              </p>
              <p className={styles.block_228}>Keep URLs in Latin script. </p>
              <p className={styles.block_229}>Correct: www.google.co.in </p>
              <p className={styles.block_230}>
                Transcribe English companies in English. Do not transliterate.{' '}
              </p>
              <p className={styles.block_231}>
                Below are some common company names that should be transcribed
                in English with Latin characters{' '}
              </p>
              <p className={styles.block_232}>● Apple </p>
              <p className={styles.block_233}>● Facebook </p>
              <p className={styles.block_234}>● Google </p>
              <p className={styles.block_235}>● Instagram </p>
              <p className={styles.block_236}>● Netflix </p>
              <p className={styles.block_237}>● Skype </p>
              <p className={styles.block_238}>● Snapchat </p>
              <p className={styles.block_239}>● Twitter </p>
              <p className={styles.block_240}>● WhatsApp </p>
              <p className={styles.block_241}>● Yahoo </p>
              <p className={styles.block_242}>● YouTube </p>
              <p className={styles.block_243}>
                Transliterate common English words into your language.{' '}
              </p>
              <p className={styles.block_244}>Correct: হ ােলা। </p>
              <p className={styles.block_245}>Incorrect: Hello. </p>
              <p className={styles.block_246}>
                If the speaker in the audio is speaking in English and says a
                word in your language transliterate it to English.{' '}
              </p>
              <p className={styles.block_247}>
                If someone says an English texting initialism, abbreviation, or
                acronym, transcribe it in English with lowercase letters.{' '}
              </p>
              <p className={styles.block_248}>Correct: jk, wtf, lol </p>
              <p className={styles.block_249}>Incorrect: JK, WTF, LOL </p>
              <p className={styles.block_250}>
                Use the spelling "Ok" for the phrase "Ok Google", as well as
                related phrases like "Ok Google Now" and "Ok Glass". For all
                other cases, transcribe the word as "ওেক".{' '}
              </p>
              <p className={styles.block_251}>Correct: Ok Google </p>
              <p className={styles.block_252}>Incorrect: OK Google। </p>
              <p className={styles.block_253}>
                Explanation: "Ok" appears before "Google", it is spelled{' '}
              </p>
              <p className={styles.block_254}>"Ok" and not "ওেক". </p>
              <p className={styles.block_255}>Correct: Ok Google Now </p>
              <p className={styles.block_256}>Other foreign languages </p>
              <p className={styles.block_257}>
                If you hear a foreign word (besides English) that is commonly
                understood by speakers of your language, transcribe it in your
                script.{' '}
              </p>
              <p className={styles.block_258}>Accents </p>
              <p className={styles.block_259}>
                <span className={styles.text_4}>
                  If you hear a word with non-standard pronunciation, transcribe
                  the word using the standard spelling according to your
                  language's official dictionary.{' '}
                </span>
                <span className={styles.text_5}>Difficult utterances </span>
              </p>
              <p className={styles.block_260}>
                This section covers how to transcribe audio samples that include
                non human speech, laughter, filler words, profanity, false
                starts, repetitions, speech from multiple speakers.{' '}
              </p>
              <p className={styles.block_261}>Things to ignore </p>
              <p className={styles.block_262}>
                Do not transcribe filler words unless intended by the speaker to
                be transcribed. Never lengthen them.{' '}
              </p>
              <p className={styles.block_263}>
                <span className={styles.text_6}>
                  Correct: এটা িক আপনার াট েফান?{' '}
                </span>
                <span className={styles.text_7}>Example audio: " </span>
                <span className={styles.text_8}>এটা িক আপনার অ া াট েফান </span>
                <span className={styles.text_7}>" </span>
              </p>
              <p className={styles.block_264}>
                <span className={styles.text_9}>
                  Correct: যিদ তিম তাই ভােবা।{' '}
                </span>
                <span className={styles.text_7}>Example audio: " </span>
                <span className={styles.text_8}>
                  [sigh or loud breath] যিদ ত িম তাই{' '}
                </span>
              </p>
              <p className={styles.block_265}>
                <span className={styles.text_10}>ভােবা </span>
                <span className={styles.text_11}>" </span>
              </p>
              <p className={styles.block_266}>
                <span className={styles.text_9}>Correct: আিম যাব না। </span>
                <span className={styles.text_7}>Example audio: " </span>
                <span className={styles.text_8}>আিম উম যাব না </span>
                <span className={styles.text_7}>" </span>
              </p>
              <p className={styles.block_267}>
                Transcribe any filler words that are applicable and used in the
                target language. Below are examples of filler words in the
                English language. These may or may not be applicable in the
                target language. Again, only transcribe filler words that exist
                in and are used in the target language.{' '}
              </p>
              <p className={styles.block_268}>● um </p>
              <p className={styles.block_269}>● uh </p>
              <p className={styles.block_270}>● right </p>
              <p className={styles.block_271}>● you know </p>
              <p className={styles.block_269}>● so </p>
              <p className={styles.block_272}>● like </p>
              <p className={styles.block_273}>
                Hesitations truncations and repetitions{' '}
              </p>
              <p className={styles.block_274}>
                If a speaker says only the beginning part of the word,
                transcribe it if it can be considered a word on its own.
                Otherwise do not transcribe the false start.{' '}
              </p>
              <p className={styles.block_275}>Correct: উৎক মােনর </p>
              <p className={styles.block_276}>Incorrect: উ- উৎক মােনর </p>
              <p className={styles.block_277}>
                <span className={styles.text_11}>Example audio: " </span>
                <span className={styles.text_10}>উ উৎক মােনর </span>
                <span className={styles.text_11}>" </span>
              </p>
              <p className={styles.block_278}>
                Explanation: Since "উ" is not a word by itself, it should{' '}
              </p>
              <p className={styles.block_279}>not be transcribed. </p>
              <p className={styles.block_280}>Correct: কত াকিতক িবপয য় </p>
              <p className={styles.block_276}>Incorrect: াকিতক িবপয য় </p>
              <p className={styles.block_281}>
                <span className={styles.text_11}>Example audio: " </span>
                <span className={styles.text_10}>কত াকিতক িবপয য় </span>
                <span className={styles.text_11}>" </span>
              </p>
              <p className={styles.block_282}>
                Explanation: Since " কত" is a word by itself, it should be{' '}
              </p>
              <p className={styles.block_283}>transcribed. </p>
              <p className={styles.block_284}>
                If a speaker repeats part of the end of a sentence, add ending
                punctuation before the repeated phrase. Do not include ending
                punctuation after the repeated phrase (unless the repeated part
                is a complete sentence).{' '}
              </p>
              <p className={styles.block_285}>
                If a very small part of a word (at most one syllable) has been
                cut off, and you know what the word is supposed to be,
                transcribe the entire word.{' '}
              </p>
              <p className={styles.block_286}>Correct: আমার বাসা গা জপর </p>
              <p className={styles.block_287}>Incorrect: আমার বাসা গা জপ- </p>
              <p className={styles.block_288}>Incorrect: আমার বাসা </p>
              <p className={styles.block_289}>
                <span className={styles.text_11}>Example audio: " </span>
                <span className={styles.text_10}>আমার বাসা গা জপ </span>
                <span className={styles.text_11}>" </span>
              </p>
              <p className={styles.block_290}>
                If you are not sure what the word should be, do not transcribe
                the word at all. Do not put punctuation after words that have
                been cut off.{' '}
              </p>
              <p className={styles.block_291}>Correct: িব িবদ ালেয় </p>
              <p className={styles.block_292}>Incorrect: িব িবদ ালেয় যাব </p>
              <p className={styles.block_276}>Incorrect: িব িবদ ালেয় যা </p>
              <p className={styles.block_293}>
                <span className={styles.text_11}>Example audio: " </span>
                <span className={styles.text_10}>িব িবদ ালেয় যা </span>
                <span className={styles.text_11}>" </span>
              </p>
              <p className={styles.block_294}>
                Explanation: It is not certain whether the speaker{' '}
              </p>
              <p className={styles.block_295}>
                meant to say "যা " or "যাব", so the last word has not{' '}
              </p>
              <p className={styles.block_296}>been transcribed. </p>
              <p className={styles.block_297}>
                If a quotation is cut off in the middle, use an end quotation
                mark anyway.{' '}
              </p>
              <p className={styles.block_298}>
                If a speaker repeats a word five times or less, transcribe each
                repetition (without fillers). But if a word is repeated more
                than five times, skip the prompt.{' '}
              </p>
              <p className={styles.block_299}>
                Correct: আিম বই িকনেবা উমম িকনেবা বইটা।{' '}
              </p>
              <p className={styles.block_300}>
                Incorrect: আিম বই িকনেবা বইটা।{' '}
              </p>
              <p className={styles.block_301}>
                <span className={styles.text_11}>Example audio: " </span>
                <span className={styles.text_10}>
                  আিম বই ট িকনেবা উমম িকনেবা বইটা{' '}
                </span>
                <span className={styles.text_11}>" </span>
              </p>
              <p className={styles.block_302}>
                Explanation: The speaker repeated "িকনেবা বইটা". The{' '}
              </p>
              <p className={styles.block_303}>
                repetition should be transcribed.{' '}
              </p>
              <p className={styles.block_304}>
                <span className={styles.text_12}>Correct: [skip] </span>
                <span className={styles.text_7}>Example audio: " </span>
                <span className={styles.text_8}>
                  হ ােলা হ ােলা হ ােলা হ ােলা হ ােলা হ ােলা{' '}
                </span>
              </p>
              <p className={styles.block_305}>
                <span className={styles.text_10}>হ ােলা </span>
                <span className={styles.text_11}>" </span>
              </p>
              <p className={styles.block_306}>
                Transcribe only numbers that you hear even if the speaker didn't
                finish saying the entire number.{' '}
              </p>
              <p className={styles.block_307}>
                Background and foreground speech{' '}
              </p>
              <p className={styles.block_308}>
                Only transcribe foreground speech. A user's speech may go from
                the foreground to the background based on the volume of their
                speech and who they are speaking to.{' '}
              </p>
              <p className={styles.block_309}>
                <span className={styles.text_6}>
                  Correct: রাজা রামেমাহন রায়{' '}
                </span>
                <span className={styles.text_7}>Example audio: " </span>
                <span className={styles.text_8}>
                  [loudly] রাজা রামেমাহন রায় [quietly]{' '}
                </span>
              </p>
              <p className={styles.block_310}>
                <span className={styles.text_10}>
                  শধ এই শ টা বলেব তাহেলই ফলাফল চেল আসেব{' '}
                </span>
                <span className={styles.text_11}>" </span>
              </p>
              <p className={styles.block_311}>
                If one person clearly speaks in the foreground and someone
                speaks in the background, transcribe the foreground speaker and
                ignore the rest.{' '}
              </p>
              <p className={styles.block_312}>
                If two people take turns speaking, are not speaking at the same
                time, and are both in the foreground at approximately the same
                volume, transcribe the speech of both speakers as different
                sentences. Separate different speakers' sentences with end
                punctuation.{' '}
              </p>
              <p className={styles.block_313}>
                <span className={styles.text_9}>
                  Correct: আপিন িক আসেবন? হ া।{' '}
                </span>
                <span className={styles.text_7}>Example audio: " </span>
                <span className={styles.text_8}>আপিন িক আসেবন </span>
                <span className={styles.text_7}>" </span>
              </p>
              <p className={styles.block_314}>
                <span className={styles.text_11}>Example audio: " </span>
                <span className={styles.text_10}>হ া </span>
                <span className={styles.text_11}>" </span>
              </p>
              <p className={styles.block_315}>
                Explanation: First speaker asked "আপিন িক{' '}
              </p>
              <p className={styles.block_316}>
                আসেবন?", other person answered "হ া।". Both{' '}
              </p>
              <p className={styles.block_317}>
                speakers are speaking loudly and clearly, so{' '}
              </p>
              <p className={styles.block_318}>
                both of their sentences are transcribed.{' '}
              </p>
              <p className={styles.block_319}>
                If one person clearly speaks in the foreground and someone
                interrupts at the same volume with a brief (less than a second)
                overlapping speech segment, transcribe the main speaker and
                ignore the rest.{' '}
              </p>
              <p className={styles.block_320}>
                If there are two or more people speaking, one talking to the
                device and the other not, transcribe only the speaker speaking
                to the device.{' '}
              </p>
              <p className={styles.block_321}>Skipping a prompt </p>
              <p className={styles.block_322}>
                For Loft 1.0: If you can't understand part of the audio,
                transcribe only the part you can understand. For the part you
                cannot understand, create a separate speaker segment and add the
                Unintelligible label as instructed in: Longform generic rules
                &gt; Unintelligible or foreign or singing.{' '}
              </p>
              <p className={styles.block_323}>
                For Loft 2.0: Below is a list of reasons to skip the audio that
                may be available for you to choose from. Each contain a
                description of when is an appropriate time to use it.{' '}
              </p>
              <p className={styles.block_324}>
                ● No Audio: The audio doesn't load.{' '}
              </p>
              <p className={styles.block_325}>
                ● No Sound: The waveform indicates there is audio but I can't
                hear anything.{' '}
              </p>
              <p className={styles.block_326}>
                ● Other Locale: All of the speech is in a different language.{' '}
              </p>
              <p className={styles.block_327}>
                ● Silent Audio: The entire utterance is silent{' '}
              </p>
              <p className={styles.block_328}>
                ● Noisy Audio: The entire utterance is too noisy.{' '}
              </p>
              <p className={styles.block_329}>
                ● Other: Other reason (Please explain).{' '}
              </p>
              <p className={styles.block_330}>
                <span className={styles.text_4}>
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
