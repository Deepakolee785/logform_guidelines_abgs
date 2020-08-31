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
              <p className={'large-heading'}>Transcription quality </p>
              <p className={'text'}>
                The following general rules must be obeyed at all times when
                transcribing.{' '}
              </p>
              <div id="typo">
                <p className={'heading'}>Typo </p>
                <p className={'text'}>
                  Avoid making any typographical errors. Carefully check your
                  work before marking items as "complete".{' '}
                </p>
                <p className={'text'}>
                  Include ending punctuation at the end of sentences, unless it
                  would contradict a rule in these guidelines.{' '}
                </p>
                <p className={'text'}>
                  Transcribe what is actually spoken. Use context to help with
                  spelling and homophone disambiguation. Look up words if you
                  are unsure.{' '}
                </p>
                <p className={'text'}>
                  Do not correct the grammar of the speakers in the audio.
                  Transcribe what they say.{' '}
                </p>
                <p className={'text'}>
                  Do not transcribe words that the speaker does not say, unless
                  it would contradict a rule in these guidelines.{' '}
                </p>
                <p className={'text'}>
                  Transcribe all words the speaker says, even if the speaker did
                  not mean to say them.{' '}
                </p>
                <p className={styles.block_223}>
                  Use only one space between words and sentences.{' '}
                </p>
              </div>
              <div id="foreign-language">
                <p className={'heading'}>Foreign language </p>
                <p className={'text'}>
                  Do not skip audio that contains foreign words. First indicate
                  whether it contains English or another language, then
                  transcribe the utterance according to the following rules.{' '}
                </p>
                <p className={'text'}>English </p>
                <p className={styles.block_227}>
                  Please transliterate all English media titles.{' '}
                </p>
                <p className={styles.block_228}>
                  <span className={styles.text_4}>C</span>
                  <span className={styles.text_5}>ORRECT</span>
                  <span className={styles.text_6}>
                    : ગમ ઓફ થ્રોનસ એક ટીવી શો છ.{' '}
                  </span>
                </p>
                <p className={styles.block_229}>
                  <span className={styles.text_4}>I</span>
                  <span className={styles.text_5}>NCORRECT</span>
                  <span className={styles.text_6}>
                    : Game of Thrones એક ટીવી શો છ.{' '}
                  </span>
                </p>
                <p className={styles.block_230}>
                  <span className={styles.text_4}>E</span>
                  <span className={styles.text_5}>XPLANATION</span>
                  <span className={styles.text_6}>
                    : "ગમ ઓફ થ્રોનસ" એક અગ્રજ ટીવી શોન શીર્ છ, કપા કરી એન
                    ટન્સ્લિટરટ કરો.{' '}
                  </span>
                </p>
                <p className={styles.block_231}>
                  <span className={styles.text_4}>C</span>
                  <span className={styles.text_5}>ORRECT</span>
                  <span className={styles.text_6}>
                    : બ્રાડ પીટ એક અમરીકી સપન્સસદ્ધ વ્યન્સિ છ.{' '}
                  </span>
                </p>
                <p className={styles.block_232}>
                  <span className={styles.text_4}>I</span>
                  <span className={styles.text_5}>NCORRECT</span>
                  <span className={styles.text_6}>
                    : Brad Pitt એક અમરીકી સપન્સસદ્ધ વ્યન્સિ છ.{' '}
                  </span>
                </p>
                <p className={styles.block_233}>
                  <span className={styles.text_4}>E</span>
                  <span className={styles.text_5}>XPLANATION</span>
                  <span className={styles.text_6}>
                    : "બ્રાડ પીટ" એક અમરીકી સપન્સસદ્ધ વ્યન્સિ છ. કપા કરી નામન
                    તમારી ન્સિન્સપમા ટન્સ્લિટરટ કરો.{' '}
                  </span>
                </p>
                <p className={styles.block_234}>
                  <span className={styles.text_4}>C</span>
                  <span className={styles.text_5}>ORRECT</span>
                  <span className={styles.text_6}>
                    : શપ ઑફ ય એક સરસ ગીત છ.{' '}
                  </span>
                </p>
                <p className={styles.block_235}>
                  <span className={styles.text_4}>I</span>
                  <span className={styles.text_5}>NCORRECT</span>
                  <span className={styles.text_6}>
                    : Shape of you એક સરસ ગીત છ.{' '}
                  </span>
                </p>
                <p className={styles.block_236}>
                  <span className={styles.text_4}>E</span>
                  <span className={styles.text_5}>XPLANATION</span>
                  <span className={styles.text_6}>
                    : "શેપ ઑફ ય " એક અગ્રજી ગીત છ, કપા કરી ગીતન તમારી ન્સિન્સપમા
                    ટન્સ્લિટરટ કરો.{' '}
                  </span>
                </p>
                <p className={styles.block_237}>Keep URLs in Latin script. </p>
                <p className={styles.block_238}>
                  <span className={styles.text_3}>C</span>
                  <span className={styles.text_}>ORRECT</span>
                  <span className={styles.text_3}>: www.google.co.in </span>
                </p>
                <p className={styles.block_239}>
                  Transcribe English companies in English. Do not transliterate.{' '}
                </p>
                <p className={styles.block_240}>
                  <span className={styles.text_4}>C</span>
                  <span className={styles.text_5}>ORRECT</span>
                  <span className={styles.text_6}>
                    : YouTube એક સારી વબસાઈટ છ.{' '}
                  </span>
                </p>
                <p className={styles.block_241}>
                  <span className={styles.text_4}>I</span>
                  <span className={styles.text_5}>NCORRECT</span>
                  <span className={styles.text_6}>
                    : યટબ એક સારી વબસાઈટ છ.{' '}
                  </span>
                </p>
                <p className={styles.block_242}>
                  <span className={styles.text_4}>E</span>
                  <span className={styles.text_5}>XPLANATION</span>
                  <span className={styles.text_6}>
                    : "YouTube" એક અગ્રજી કપની છ. એન અગ્રજીમા િટીન િીપીમા
                    ટ્લરાઇબ કરવી.{' '}
                  </span>
                </p>
                <p className={styles.block_243}>
                  Below are some common company names that should be transcribed
                  in English with Latin characters{' '}
                </p>
                <p className={styles.block_244}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_1}>Apple </span>
                </p>
                <p className={styles.block_245}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_1}>Facebook </span>
                </p>
                <p className={styles.block_246}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_1}>Instagram </span>
                </p>
                <p className={styles.block_247}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_1}>Netflix </span>
                </p>
                <p className={styles.block_248}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_1}>Skype </span>
                </p>
                <p className={styles.block_249}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_1}>Snapchat </span>
                </p>
                <p className={styles.block_250}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_1}>Twitter </span>
                </p>
                <p className={styles.block_251}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_1}>WhatsApp </span>
                </p>
                <p className={styles.block_252}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_1}>Yahoo </span>
                </p>
                <p className={styles.block_253}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_1}>YouTube </span>
                </p>
                <p className={styles.block_254}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_1}>Google </span>
                </p>
                <p className={styles.block_255}>
                  Use the spelling "Ok" for the phrase "Ok Google", as well as
                  related phrases like "Ok Google Now" and "Ok Glass". For all
                  other cases, transliterate the word as "ઓક".{' '}
                </p>
                <p className={styles.block_256}>
                  <span className={styles.text_3}>C</span>
                  <span className={styles.text_}>ORRECT</span>
                  <span className={styles.text_3}>: Ok Google </span>
                </p>
                <p className={styles.block_257}>
                  <span className={styles.text_3}>I</span>
                  <span className={styles.text_}>NCORRECT</span>
                  <span className={styles.text_3}>: Okay Google. </span>
                </p>
                <p className={styles.block_258}>
                  <span className={styles.text_4}>I</span>
                  <span className={styles.text_5}>NCORRECT</span>
                  <span className={styles.text_6}>: ઓક Google </span>
                </p>
                <p className={styles.block_259}>
                  <span className={styles.text_3}>E</span>
                  <span className={styles.text_}>XPLANATION</span>
                  <span className={styles.text_3}>
                    : "Ok" appears before "Google", it is spelled "Ok" and not
                    "okay".{' '}
                  </span>
                </p>
                <p className={styles.block_260}>
                  <span className={styles.text_7}>C</span>
                  <span className={styles.text_8}>ORRECT</span>
                  <span className={styles.text_7}>: Ok Google Now </span>
                  <span className={styles.text_9}>E</span>
                  <span className={styles.text_10}>XPLANATION</span>
                  <span className={styles.text_9}>
                    : The phrase Ok Google Now is a{' '}
                  </span>
                </p>
                <p className={styles.block_261}>
                  derivation of "Ok Google" and must be transcribed exactly like
                  this.{' '}
                </p>
                <p className={styles.block_262}>
                  <span className={styles.text_4}>C</span>
                  <span className={styles.text_5}>ORRECT</span>
                  <span className={styles.text_6}>
                    : Ok Google, આગળની બસ ક્યાર છ?{' '}
                  </span>
                </p>
                <p className={styles.block_263}>
                  <span className={styles.text_4}>I</span>
                  <span className={styles.text_5}>NCORRECT</span>
                  <span className={styles.text_6}>
                    : Ok Google આગળની બસ ક્યાર છ?{' '}
                  </span>
                </p>
                <p className={styles.block_264}>
                  <span className={styles.text_3}>E</span>
                  <span className={styles.text_}>XPLANATION</span>
                  <span className={styles.text_3}>
                    : The correct transcription includes a comma after the
                    phrase "Ok Google" since it comes before a phrase.{' '}
                  </span>
                </p>
                <p className={styles.block_265}>
                  <span className={styles.text_4}>C</span>
                  <span className={styles.text_5}>ORRECT</span>
                  <span className={styles.text_6}>: ઓક, કૌન્સશક. </span>
                </p>
                <p className={styles.block_266}>
                  <span className={styles.text_4}>I</span>
                  <span className={styles.text_5}>NCORRECT</span>
                  <span className={styles.text_6}>: Ok કૌન્સશક. </span>
                </p>
                <p className={styles.block_267}>
                  <span className={styles.text_4}>E</span>
                  <span className={styles.text_5}>XPLANATION</span>
                  <span className={styles.text_6}>
                    : The word "ઓક" is only transcribed as "Ok" when it appears
                    before "Google".{' '}
                  </span>
                </p>
                <p className={styles.block_268}>
                  Transliterate common English words into your language.{' '}
                </p>
                <p className={styles.block_269}>
                  <span className={styles.text_4}>C</span>
                  <span className={styles.text_5}>ORRECT</span>
                  <span className={styles.text_6}>: હલ્િો </span>
                </p>
                <p className={styles.block_270}>
                  <span className={styles.text_3}>I</span>
                  <span className={styles.text_}>NCORRECT</span>
                  <span className={styles.text_3}>: hello </span>
                </p>
                <p className={styles.block_271}>
                  <span className={styles.text_4}>E</span>
                  <span className={styles.text_5}>XPLANATION</span>
                  <span className={styles.text_6}>
                    : પ્રચિીત અગ્રજી શબ્દો ટન્સ્લિટરટ કરવા ગ જરાતી િીપી વાપરવી.{' '}
                  </span>
                </p>
                <p className={styles.block_272}>
                  If someone says an English texting initialism, abbreviation,
                  or acronym, transcribe it in English with lowercase letters.{' '}
                </p>
                <p className={styles.block_273}>
                  <span className={styles.text_3}>C</span>
                  <span className={styles.text_}>ORRECT</span>
                  <span className={styles.text_3}>: jk, wtf, rofl </span>
                </p>
                <p className={styles.block_274}>
                  <span className={styles.text_3}>I</span>
                  <span className={styles.text_}>NCORRECT</span>
                  <span className={styles.text_3}>: JK, WTF, ROFL </span>
                </p>
                <p className={styles.block_275}>
                  If the speaker in the audio is speaking in English and says a
                  word in your language transliterate it to English.{' '}
                </p>
                <p className={styles.block_276}>
                  <span className={styles.text_3}>C</span>
                  <span className={styles.text_}>ORRECT</span>
                  <span className={styles.text_3}>
                    : I need a receipt for Bandhani Sari.{' '}
                  </span>
                </p>
                <p className={styles.block_277}>
                  <span className={styles.text_4}>I</span>
                  <span className={styles.text_5}>NCORRECT</span>
                  <span className={styles.text_6}>
                    : i need a receipt for બાધણી સાડી.{' '}
                  </span>
                </p>
                <p className={styles.block_278}>
                  <span className={styles.text_4}>E</span>
                  <span className={styles.text_5}>XPLANATION</span>
                  <span className={styles.text_6}>
                    : વિા અગ્રજી બોિ છ પણ વચ્ચ ગ જરાતી શબ્દો વાપર છ. "બાધણી
                    સાડી". ગ જરાતી શબ્દોન અગ્રજીમા ટન્સ્લિટરટ કરો, ગ જરાતી િીપી
                    વાપરવી નહી.{' '}
                  </span>
                </p>
                <p className={'heading'}>Other foreign languages </p>
                <p className={'text'}>
                  If you hear a foreign word (besides English) that is commonly
                  understood by speakers of your language, transcribe it in your
                  script.{' '}
                </p>
                <p className={styles.block_281}>
                  <span className={styles.text_11}>C</span>
                  <span className={styles.text_12}>ORRECT</span>
                  <span className={styles.text_13}>: નમલત </span>
                  <span className={styles.text_14}>E</span>
                  <span className={styles.text_15}>XPLANATION</span>
                  <span className={styles.text_16}>
                    : આ એક પ્રચિીત ન્સહદી શબ્દ છ, જના ન્સવશ{' '}
                  </span>
                </p>
                <p className={styles.block_282}>
                  મોટાભાગના ગ જરાતી વિાઓન જાણ હશ. ભિ તમન ન્સહદી{' '}
                </p>
                <p className={styles.block_283}>
                  <span className={styles.text_4}>I</span>
                  <span className={styles.text_5}>NCORRECT</span>
                  <span className={styles.text_17}>
                    : नमस्त િીપી આવડતી હોય, તો પણ તમ ગ જરાતીમા ટન્સ્લિટરટ{' '}
                  </span>
                </p>
                <p className={styles.block_284}>કરશો. </p>
                <p className={styles.block_285}>
                  <span className={styles.text_4}>C</span>
                  <span className={styles.text_5}>ORRECT</span>
                  <span className={styles.text_6}>: ઇદ મબારક </span>
                </p>
                <p className={styles.block_286}>
                  <span className={styles.text_9}>I</span>
                  <span className={styles.text_10}>NCORRECT</span>
                  <span className={styles.text_18}></span>
                  <span className={styles.text_9}>: </span>
                  <span dir="rtl" className={styles.text_9}>
                    کرابم دیع
                  </span>
                  <span className={styles.text_9}> </span>
                </p>
                <p className={styles.block_287}>
                  <span className={styles.text_4}>E</span>
                  <span className={styles.text_5}>XPLANATION</span>
                  <span className={styles.text_6}>
                    : આ એક પ્રચિીત ઉદ શબ્દ છ, જના ન્સવશ મોટાભાગના ગ જરાતી વિાઓન
                    જાણ હશ. ભિ તમન ઉદ િીપી આવડતી હોય, તો પણ તમ ગ જરાતીમા
                    ટન્સ્લિટરટ કરશો.{' '}
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
