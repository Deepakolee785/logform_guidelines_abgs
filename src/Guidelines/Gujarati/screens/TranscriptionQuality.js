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
            <PageContentHeader currentPage="longform Gujarati" />
            <div className="content text">
              <p class="block_214">Transcription quality </p>
              <p class="block_215">
                The following general rules must be obeyed at all times when
                transcribing.{' '}
              </p>
              <p class="block_216">Typo </p>
              <p class="block_217">
                Avoid making any typographical errors. Carefully check your work
                before marking items as "complete".{' '}
              </p>
              <p class="block_218">
                Include ending punctuation at the end of sentences, unless it
                would contradict a rule in these guidelines.{' '}
              </p>
              <p class="block_219">
                Transcribe what is actually spoken. Use context to help with
                spelling and homophone disambiguation. Look up words if you are
                unsure.{' '}
              </p>
              <p class="block_220">
                Do not correct the grammar of the speakers in the audio.
                Transcribe what they say.{' '}
              </p>
              <p class="block_221">
                Do not transcribe words that the speaker does not say, unless it
                would contradict a rule in these guidelines.{' '}
              </p>
              <p class="block_222">
                Transcribe all words the speaker says, even if the speaker did
                not mean to say them.{' '}
              </p>
              <p class="block_223">
                Use only one space between words and sentences.{' '}
              </p>
              <p class="block_224">Foreign language </p>
              <p class="block_225">
                Do not skip audio that contains foreign words. First indicate
                whether it contains English or another language, then transcribe
                the utterance according to the following rules.{' '}
              </p>
              <p class="block_226">English </p>
              <p class="block_227">
                Please transliterate all English media titles.{' '}
              </p>
              <p class="block_228">
                <span class="text_4">C</span>
                <span class="text_5">ORRECT</span>
                <span class="text_6">: ગમ ઓફ થ્રોનસ એક ટીવી શો છ. </span>
              </p>
              <p class="block_229">
                <span class="text_4">I</span>
                <span class="text_5">NCORRECT</span>
                <span class="text_6">: Game of Thrones એક ટીવી શો છ. </span>
              </p>
              <p class="block_230">
                <span class="text_4">E</span>
                <span class="text_5">XPLANATION</span>
                <span class="text_6">
                  : "ગમ ઓફ થ્રોનસ" એક અગ્રજ ટીવી શોન શીર્ છ, કપા કરી એન
                  ટન્સ્લિટરટ કરો.{' '}
                </span>
              </p>
              <p class="block_231">
                <span class="text_4">C</span>
                <span class="text_5">ORRECT</span>
                <span class="text_6">
                  : બ્રાડ પીટ એક અમરીકી સપન્સસદ્ધ વ્યન્સિ છ.{' '}
                </span>
              </p>
              <p class="block_232">
                <span class="text_4">I</span>
                <span class="text_5">NCORRECT</span>
                <span class="text_6">
                  : Brad Pitt એક અમરીકી સપન્સસદ્ધ વ્યન્સિ છ.{' '}
                </span>
              </p>
              <p class="block_233">
                <span class="text_4">E</span>
                <span class="text_5">XPLANATION</span>
                <span class="text_6">
                  : "બ્રાડ પીટ" એક અમરીકી સપન્સસદ્ધ વ્યન્સિ છ. કપા કરી નામન
                  તમારી ન્સિન્સપમા ટન્સ્લિટરટ કરો.{' '}
                </span>
              </p>
              <p class="block_234">
                <span class="text_4">C</span>
                <span class="text_5">ORRECT</span>
                <span class="text_6">: શપ ઑફ ય એક સરસ ગીત છ. </span>
              </p>
              <p class="block_235">
                <span class="text_4">I</span>
                <span class="text_5">NCORRECT</span>
                <span class="text_6">: Shape of you એક સરસ ગીત છ. </span>
              </p>
              <p class="block_236">
                <span class="text_4">E</span>
                <span class="text_5">XPLANATION</span>
                <span class="text_6">
                  : "શેપ ઑફ ય " એક અગ્રજી ગીત છ, કપા કરી ગીતન તમારી ન્સિન્સપમા
                  ટન્સ્લિટરટ કરો.{' '}
                </span>
              </p>
              <p class="block_237">Keep URLs in Latin script. </p>
              <p class="block_238">
                <span class="text_3">C</span>
                <span class="text_">ORRECT</span>
                <span class="text_3">: www.google.co.in </span>
              </p>
              <p class="block_239">
                Transcribe English companies in English. Do not transliterate.{' '}
              </p>
              <p class="block_240">
                <span class="text_4">C</span>
                <span class="text_5">ORRECT</span>
                <span class="text_6">: YouTube એક સારી વબસાઈટ છ. </span>
              </p>
              <p class="block_241">
                <span class="text_4">I</span>
                <span class="text_5">NCORRECT</span>
                <span class="text_6">: યટબ એક સારી વબસાઈટ છ. </span>
              </p>
              <p class="block_242">
                <span class="text_4">E</span>
                <span class="text_5">XPLANATION</span>
                <span class="text_6">
                  : "YouTube" એક અગ્રજી કપની છ. એન અગ્રજીમા િટીન િીપીમા ટ્લરાઇબ
                  કરવી.{' '}
                </span>
              </p>
              <p class="block_243">
                Below are some common company names that should be transcribed
                in English with Latin characters{' '}
              </p>
              <p class="block_244">
                <span class="text_">• </span>
                <span class="text_1">Apple </span>
              </p>
              <p class="block_245">
                <span class="text_">• </span>
                <span class="text_1">Facebook </span>
              </p>
              <p class="block_246">
                <span class="text_">• </span>
                <span class="text_1">Instagram </span>
              </p>
              <p class="block_247">
                <span class="text_">• </span>
                <span class="text_1">Netflix </span>
              </p>
              <p class="block_248">
                <span class="text_">• </span>
                <span class="text_1">Skype </span>
              </p>
              <p class="block_249">
                <span class="text_">• </span>
                <span class="text_1">Snapchat </span>
              </p>
              <p class="block_250">
                <span class="text_">• </span>
                <span class="text_1">Twitter </span>
              </p>
              <p class="block_251">
                <span class="text_">• </span>
                <span class="text_1">WhatsApp </span>
              </p>
              <p class="block_252">
                <span class="text_">• </span>
                <span class="text_1">Yahoo </span>
              </p>
              <p class="block_253">
                <span class="text_">• </span>
                <span class="text_1">YouTube </span>
              </p>
              <p class="block_254">
                <span class="text_">• </span>
                <span class="text_1">Google </span>
              </p>
              <p class="block_255">
                Use the spelling "Ok" for the phrase "Ok Google", as well as
                related phrases like "Ok Google Now" and "Ok Glass". For all
                other cases, transliterate the word as "ઓક".{' '}
              </p>
              <p class="block_256">
                <span class="text_3">C</span>
                <span class="text_">ORRECT</span>
                <span class="text_3">: Ok Google </span>
              </p>
              <p class="block_257">
                <span class="text_3">I</span>
                <span class="text_">NCORRECT</span>
                <span class="text_3">: Okay Google. </span>
              </p>
              <p class="block_258">
                <span class="text_4">I</span>
                <span class="text_5">NCORRECT</span>
                <span class="text_6">: ઓક Google </span>
              </p>
              <p class="block_259">
                <span class="text_3">E</span>
                <span class="text_">XPLANATION</span>
                <span class="text_3">
                  : "Ok" appears before "Google", it is spelled "Ok" and not
                  "okay".{' '}
                </span>
              </p>
              <p class="block_260">
                <span class="text_7">C</span>
                <span class="text_8">ORRECT</span>
                <span class="text_7">: Ok Google Now </span>
                <span class="text_9">E</span>
                <span class="text_10">XPLANATION</span>
                <span class="text_9">: The phrase Ok Google Now is a </span>
              </p>
              <p class="block_261">
                derivation of "Ok Google" and must be transcribed exactly like
                this.{' '}
              </p>
              <p class="block_262">
                <span class="text_4">C</span>
                <span class="text_5">ORRECT</span>
                <span class="text_6">: Ok Google, આગળની બસ ક્યાર છ? </span>
              </p>
              <p class="block_263">
                <span class="text_4">I</span>
                <span class="text_5">NCORRECT</span>
                <span class="text_6">: Ok Google આગળની બસ ક્યાર છ? </span>
              </p>
              <p class="block_264">
                <span class="text_3">E</span>
                <span class="text_">XPLANATION</span>
                <span class="text_3">
                  : The correct transcription includes a comma after the phrase
                  "Ok Google" since it comes before a phrase.{' '}
                </span>
              </p>
              <p class="block_265">
                <span class="text_4">C</span>
                <span class="text_5">ORRECT</span>
                <span class="text_6">: ઓક, કૌન્સશક. </span>
              </p>
              <p class="block_266">
                <span class="text_4">I</span>
                <span class="text_5">NCORRECT</span>
                <span class="text_6">: Ok કૌન્સશક. </span>
              </p>
              <p class="block_267">
                <span class="text_4">E</span>
                <span class="text_5">XPLANATION</span>
                <span class="text_6">
                  : The word "ઓક" is only transcribed as "Ok" when it appears
                  before "Google".{' '}
                </span>
              </p>
              <p class="block_268">
                Transliterate common English words into your language.{' '}
              </p>
              <p class="block_269">
                <span class="text_4">C</span>
                <span class="text_5">ORRECT</span>
                <span class="text_6">: હલ્િો </span>
              </p>
              <p class="block_270">
                <span class="text_3">I</span>
                <span class="text_">NCORRECT</span>
                <span class="text_3">: hello </span>
              </p>
              <p class="block_271">
                <span class="text_4">E</span>
                <span class="text_5">XPLANATION</span>
                <span class="text_6">
                  : પ્રચિીત અગ્રજી શબ્દો ટન્સ્લિટરટ કરવા ગ જરાતી િીપી વાપરવી.{' '}
                </span>
              </p>
              <p class="block_272">
                If someone says an English texting initialism, abbreviation, or
                acronym, transcribe it in English with lowercase letters.{' '}
              </p>
              <p class="block_273">
                <span class="text_3">C</span>
                <span class="text_">ORRECT</span>
                <span class="text_3">: jk, wtf, rofl </span>
              </p>
              <p class="block_274">
                <span class="text_3">I</span>
                <span class="text_">NCORRECT</span>
                <span class="text_3">: JK, WTF, ROFL </span>
              </p>
              <p class="block_275">
                If the speaker in the audio is speaking in English and says a
                word in your language transliterate it to English.{' '}
              </p>
              <p class="block_276">
                <span class="text_3">C</span>
                <span class="text_">ORRECT</span>
                <span class="text_3">
                  : I need a receipt for Bandhani Sari.{' '}
                </span>
              </p>
              <p class="block_277">
                <span class="text_4">I</span>
                <span class="text_5">NCORRECT</span>
                <span class="text_6">: i need a receipt for બાધણી સાડી. </span>
              </p>
              <p class="block_278">
                <span class="text_4">E</span>
                <span class="text_5">XPLANATION</span>
                <span class="text_6">
                  : વિા અગ્રજી બોિ છ પણ વચ્ચ ગ જરાતી શબ્દો વાપર છ. "બાધણી સાડી".
                  ગ જરાતી શબ્દોન અગ્રજીમા ટન્સ્લિટરટ કરો, ગ જરાતી િીપી વાપરવી
                  નહી.{' '}
                </span>
              </p>
              <p class="block_279">Other foreign languages </p>
              <p class="block_280">
                If you hear a foreign word (besides English) that is commonly
                understood by speakers of your language, transcribe it in your
                script.{' '}
              </p>
              <p class="block_281">
                <span class="text_11">C</span>
                <span class="text_12">ORRECT</span>
                <span class="text_13">: નમલત </span>
                <span class="text_14">E</span>
                <span class="text_15">XPLANATION</span>
                <span class="text_16">
                  : આ એક પ્રચિીત ન્સહદી શબ્દ છ, જના ન્સવશ{' '}
                </span>
              </p>
              <p class="block_282">
                મોટાભાગના ગ જરાતી વિાઓન જાણ હશ. ભિ તમન ન્સહદી{' '}
              </p>
              <p class="block_283">
                <span class="text_4">I</span>
                <span class="text_5">NCORRECT</span>
                <span class="text_17">
                  : नमस्त િીપી આવડતી હોય, તો પણ તમ ગ જરાતીમા ટન્સ્લિટરટ{' '}
                </span>
              </p>
              <p class="block_284">કરશો. </p>
              <p class="block_285">
                <span class="text_4">C</span>
                <span class="text_5">ORRECT</span>
                <span class="text_6">: ઇદ મબારક </span>
              </p>
              <p class="block_286">
                <span class="text_9">I</span>
                <span class="text_10">NCORRECT</span>
                <span class="text_18"></span>
                <span class="text_9">: </span>
                <span dir="rtl" class="text_9">
                  کرابم دیع
                </span>
                <span class="text_9"> </span>
              </p>
              <p class="block_287">
                <span class="text_4">E</span>
                <span class="text_5">XPLANATION</span>
                <span class="text_6">
                  : આ એક પ્રચિીત ઉદ શબ્દ છ, જના ન્સવશ મોટાભાગના ગ જરાતી વિાઓન
                  જાણ હશ. ભિ તમન ઉદ િીપી આવડતી હોય, તો પણ તમ ગ જરાતીમા
                  ટન્સ્લિટરટ કરશો.{' '}
                </span>
              </p>
              <p class="block_288">Accents </p>
              <p class="block_289">
                If you hear a word with non-standard pronunciation, transcribe
                the word using the standard spelling according to your
                language's official dictionary.{' '}
              </p>
              <p class="block_290">
                <span class="text_11">C</span>
                <span class="text_12">ORRECT</span>
                <span class="text_13">: ન્સચત્રોડ </span>
                <span class="text_19">E</span>
                <span class="text_20">XAMPLE AUDIO</span>
                <span class="text_19">: " </span>
                <span class="text_21">ન્સચત્રોદ </span>
                <span class="text_19">" </span>
              </p>
              <p class="block_291">
                <span class="text_4">E</span>
                <span class="text_5">XPLANATION</span>
                <span class="text_6">
                  : Speaker said "ન્સચત્રોદ" instead of "ન્સચત્રોડ". It should
                  be transcribed as the standard word "ન્સચત્રોડ".{' '}
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
