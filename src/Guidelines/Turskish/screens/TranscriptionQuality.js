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
            <PageContentHeader currentPage="longform Turskish" />
            <div className="content text">
              <p className={'large-heading'}>Transcription quality</p>
              <p className={'text'}>
                Comply with the standard rules of the writing system.
              </p>
              <div id="typo">
                <p className={'heading'}>Typo</p>
                <p className={'text'}>
                  A typo results in the unintentional creation of a non-word.
                </p>
                <p className={styles.block_199}>
                  Avoid making any typographical errors. Carefully check your
                  work before marking items as "complete".
                </p>
                <p className={styles.block_200}>
                  <span className={styles.text_3}>C</span>
                  <span className={styles.text_}>ORRECT</span>
                  <span className={styles.text_3}>
                    : Beni telefonla ararsın.{' '}
                  </span>
                </p>
                <p className={styles.block_201}>
                  <span className={styles.text_3}>I</span>
                  <span className={styles.text_}>NCORRECT</span>
                  <span className={styles.text_3}>
                    : Beni telfonla ararsın.{' '}
                  </span>
                </p>
                <p className={styles.block_202}>
                  <span className={styles.text_3}>C</span>
                  <span className={styles.text_}>ORRECT</span>
                  <span className={styles.text_3}>: Ahmet seni arıyor. </span>
                </p>
                <p className={styles.block_203}>
                  <span className={styles.text_3}>I</span>
                  <span className={styles.text_}>NCORRECT</span>
                  <span className={styles.text_3}>: Ahmet seni arıyo. </span>
                </p>
                <p className={styles.block_204}>
                  <span className={styles.text_3}>C</span>
                  <span className={styles.text_}>ORRECT</span>
                  <span className={styles.text_3}>: Nasılsın bugün? </span>
                </p>
                <p className={styles.block_205}>
                  <span className={styles.text_3}>I</span>
                  <span className={styles.text_}>NCORRECT</span>
                  <span className={styles.text_3}>: Nassın bugün? </span>
                </p>
                <p className={styles.block_206}>
                  <span className={styles.text_3}>C</span>
                  <span className={styles.text_}>ORRECT</span>
                  <span className={styles.text_3}>: Ne habersin bugün? </span>
                </p>
                <p className={styles.block_207}>
                  <span className={styles.text_3}>I</span>
                  <span className={styles.text_}>NCORRECT</span>
                  <span className={styles.text_3}>: Nabersin bugün? </span>
                </p>
                <p className={styles.block_208}>
                  <span className={styles.text_3}>E</span>
                  <span className={styles.text_}>XPLANATION</span>
                  <span className={styles.text_3}>
                    : If the speaker says "ne" and "habersin" separately, then
                    they should be written separately.
                  </span>
                </p>
                <p className={styles.block_209}>
                  Use the proper capitalization for standard words that require
                  it.
                </p>
                <p className={styles.block_210}>
                  <span className={styles.text_3}>C</span>
                  <span className={styles.text_}>ORRECT</span>
                  <span className={styles.text_3}>
                    : Selim bir Türk evladıdır.{' '}
                  </span>
                </p>
                <p className={styles.block_211}>
                  <span className={styles.text_3}>I</span>
                  <span className={styles.text_}>NCORRECT</span>
                  <span className={styles.text_3}>
                    : Selim bir türk evladıdır.{' '}
                  </span>
                </p>
                <p className={styles.block_212}>
                  <span className={styles.text_3}>C</span>
                  <span className={styles.text_}>ORRECT</span>
                  <span className={styles.text_3}>: Ben okula gidiyorum. </span>
                </p>
                <p className={styles.block_213}>
                  <span className={styles.text_3}>I</span>
                  <span className={styles.text_}>NCORRECT</span>
                  <span className={styles.text_3}>: Ben Okula gidiyorum. </span>
                </p>
                <p className={styles.block_214}>
                  <span className={styles.text_3}>C</span>
                  <span className={styles.text_}>ORRECT</span>
                  <span className={styles.text_3}>: Annemi ara. </span>
                </p>
                <p className={styles.block_215}>
                  <span className={styles.text_3}>I</span>
                  <span className={styles.text_}>NCORRECT</span>
                  <span className={styles.text_3}>: Annemi Ara. </span>
                </p>
              </div>
              <div id="context-error">
                <p className={'heading'}>Context error</p>
                <p className={'text'}>
                  A context error occurs when a real word is used incorrectly or
                  when the incorrect form of a word is used. This includes
                  homophones and punctuation, among other things.
                </p>
                <p className={styles.block_218}>
                  <span className={styles.text_3}>C</span>
                  <span className={styles.text_}>ORRECT</span>
                  <span className={styles.text_3}>: Şuraya bak. </span>
                </p>
                <p className={styles.block_219}>
                  <span className={styles.text_3}>I</span>
                  <span className={styles.text_}>NCORRECT</span>
                  <span className={styles.text_3}>: Şura'ya bak. </span>
                </p>
                <p className={styles.block_220}>
                  <span className={styles.text_3}>E</span>
                  <span className={styles.text_}>XPLANATION</span>
                  <span className={styles.text_3}>
                    : The speaker uses function word "şuraya" which should not
                    be used with an apostrophe as if the word is a person name
                    "Şura" inflected with dative case marker "(y)A".
                  </span>
                </p>
                <p className={styles.block_221}>
                  <span className={styles.text_3}>C</span>
                  <span className={styles.text_}>ORRECT</span>
                  <span className={styles.text_3}>: belirttiğin söz </span>
                </p>
                <p className={styles.block_222}>
                  <span className={styles.text_3}>I</span>
                  <span className={styles.text_}>NCORRECT</span>
                  <span className={styles.text_3}>: belirttiğim söz </span>
                </p>
                <p className={styles.block_223}>
                  <span className={styles.text_3}>C</span>
                  <span className={styles.text_}>ORRECT</span>
                  <span className={styles.text_3}>
                    : En sevdiğim program "Yetenek sizsiniz."{' '}
                  </span>
                </p>
                <p className={styles.block_224}>
                  <span className={styles.text_3}>I</span>
                  <span className={styles.text_}>NCORRECT</span>
                  <span className={styles.text_3}>: Yeteneksizsiniz. </span>
                </p>
                <p className={styles.block_225}>
                  <span className={styles.text_3}>E</span>
                  <span className={styles.text_}>XPLANATION</span>
                  <span className={styles.text_3}>
                    : The speaker gives a pause between "yetenek" and
                    "sizsiniz". That is why the words should not be written as
                    one word.
                  </span>
                </p>
                <p className={styles.block_226}>
                  <span className={styles.text_3}>C</span>
                  <span className={styles.text_}>ORRECT</span>
                  <span className={styles.text_3}>
                    : Oraya bakıp geleceğim.{' '}
                  </span>
                </p>
                <p className={styles.block_227}>
                  <span className={styles.text_3}>I</span>
                  <span className={styles.text_}>NCORRECT</span>
                  <span className={styles.text_3}>
                    : Oray'a bakıp geleceğim.{' '}
                  </span>
                </p>
                <p className={styles.block_228}>
                  <span className={styles.text_3}>E</span>
                  <span className={styles.text_}>XPLANATION</span>
                  <span className={styles.text_3}>
                    : The speaker uses the function word "oraya" which should
                    not be used with an apostrophe as if the word is a person
                    name "Oray" inflected with dative case marker "-A".
                  </span>
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
                <p className={styles.block_231}>
                  <span className={styles.text_3}>C</span>
                  <span className={styles.text_}>ORRECT</span>
                  <span className={styles.text_3}>
                    : Ben sinemada X-Men izlemek istiyorum.{' '}
                  </span>
                </p>
                <p className={styles.block_232}>
                  <span className={styles.text_3}>I</span>
                  <span className={styles.text_}>NCORRECT</span>
                  <span className={styles.text_3}>
                    : Ben sinemada X-Men filmini izlemek istiyorum.
                  </span>
                </p>
                <p className={styles.block_233}>
                  <span className={styles.text_3}>E</span>
                  <span className={styles.text_}>XAMPLE AUDIO</span>
                  <span className={styles.text_3}>: " </span>
                  <span className={styles.text_4}>
                    ben sinemada x-men izlemek istiyorum{' '}
                  </span>
                  <span className={styles.text_3}>" </span>
                </p>
                <p className={styles.block_234}>
                  <span className={styles.text_3}>C</span>
                  <span className={styles.text_}>ORRECT</span>
                  <span className={styles.text_3}>: facebook.com </span>
                </p>
                <p className={styles.block_235}>
                  <span className={styles.text_3}>I</span>
                  <span className={styles.text_}>NCORRECT</span>
                  <span className={styles.text_3}>: www.facebook.com </span>
                </p>
                <p className={styles.block_236}>
                  <span className={styles.text_3}>E</span>
                  <span className={styles.text_}>XAMPLE AUDIO</span>
                  <span className={styles.text_3}>: " </span>
                  <span className={styles.text_4}>facebook nokta com </span>
                  <span className={styles.text_3}>" </span>
                </p>
                <p className={styles.block_237}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_6}>ORRECT</span>
                  <span className={styles.text_5}>: Alarmı 6.50'ye kur. </span>
                  <span className={styles.text_7}>E</span>
                  <span className={styles.text_8}>XAMPLE AUDIO</span>
                  <span className={styles.text_7}>: " </span>
                  <span className={styles.text_9}>
                    alarmı yediye on kalaya kur{' '}
                  </span>
                  <span className={styles.text_7}>" </span>
                </p>
                <p className={styles.block_238}>
                  Transcribe all words spoken, even if they are not intended by
                  the speaker. For interjections and non-speech vocalizations,
                  refer to Agreed Spelling &gt; Interjections and Difficult
                  Utterances &gt; Hesitations and Truncations.
                </p>
                <p className={styles.block_239}>
                  <span className={styles.text_3}>C</span>
                  <span className={styles.text_}>ORRECT</span>
                  <span className={styles.text_3}>
                    : YouTube YouTube YouTube{' '}
                  </span>
                </p>
                <p className={styles.block_240}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_6}>ORRECT</span>
                  <span className={styles.text_5}>
                    : Öp beni, öp beni, öp beni.{' '}
                  </span>
                  <span className={styles.text_10}>E</span>
                  <span className={styles.text_11}>XPLANATION</span>
                  <span className={styles.text_10}>
                    : You can use "comma" since the{' '}
                  </span>
                </p>
                <p className={styles.block_241}>
                  repeated utterance is a sentence "Öp beni". Also, you can use
                  "period" at the end of the last repeated sentence.
                </p>
                <p className={styles.block_242}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_6}>ORRECT</span>
                  <span className={styles.text_5}>: kadın kadın kadın </span>
                  <span className={styles.text_10}>E</span>
                  <span className={styles.text_11}>XPLANATION</span>
                  <span className={styles.text_10}>
                    : There is no need to use "comma" after{' '}
                  </span>
                </p>
                <p className={styles.block_243}>
                  the repeated word since it is only a word but sentence.
                </p>
                <p className={styles.block_244}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_6}>ORRECT</span>
                  <span className={styles.text_5}>
                    : Kaç masaya tasaya daha ihtiyaç var?{' '}
                  </span>
                  <span className={styles.text_10}>E</span>
                  <span className={styles.text_11}>XPLANATION</span>
                  <span className={styles.text_10}>
                    : Speaker clearly corrected himself after{' '}
                  </span>
                </p>
                <p className={styles.block_245}>"masaya".</p>
                <p className={styles.block_246}>
                  A false start occurs only when the speaker says part of a word
                  and then stops. A false start does not happen if the speaker
                  re-directs their speech mid sentence. False starts should be
                  marked with a dash “-” wherever the false start is happening
                </p>
                <p className={styles.block_247}>
                  <span className={styles.text_3}>C</span>
                  <span className={styles.text_}>ORRECT</span>
                  <span className={styles.text_3}>
                    : I need to get a new tele- telephone{' '}
                  </span>
                </p>
                <p className={styles.block_248}>
                  <span className={styles.text_3}>C</span>
                  <span className={styles.text_}>ORRECT</span>
                  <span className={styles.text_3}>
                    : The driver got out of the driver got into the car.
                  </span>
                </p>
                <p className={styles.block_249}>
                  <span className={styles.text_3}>C</span>
                  <span className={styles.text_}>ORRECT</span>
                  <span className={styles.text_3}>
                    : I really don't think Hey that's a good idea, let's do
                    that!
                  </span>
                </p>
              </div>
              <div id="substitution">
                <p className={'heading'}>Substitution</p>
                <p className={'text'}>
                  A substitution error occurs when another standard word is
                  transcribed instead of what was
                </p>
                <p className={styles.block_252}>
                  meant by the speaker. If what the speaker said falls into
                  another
                </p>
                <p className={styles.block_253}>
                  category (Context Error, Proper Name, Media Title, etc.), see
                  the relevant section.
                </p>
                <p className={styles.block_254}>
                  <span className={styles.text_3}>C</span>
                  <span className={styles.text_}>ORRECT</span>
                  <span className={styles.text_3}>
                    : Yüreğinin götürdüğü yere git.{' '}
                  </span>
                </p>
                <p className={styles.block_255}>
                  <span className={styles.text_3}>I</span>
                  <span className={styles.text_}>NCORRECT</span>
                  <span className={styles.text_3}>
                    : Kalbinin götürdüğü yere git..{' '}
                  </span>
                </p>
                <p className={styles.block_256}>
                  <span className={styles.text_3}>E</span>
                  <span className={styles.text_}>XAMPLE AUDIO</span>
                  <span className={styles.text_3}>: " </span>
                  <span className={styles.text_4}>
                    yüreğinin götürdüğü yere git{' '}
                  </span>
                  <span className={styles.text_3}>" </span>
                </p>
              </div>
              <div id="spacing">
                <p className={'heading'}>Spacing</p>
                <p className={'text'}>
                  Use only one space between words and sentences.
                </p>
                <p className={styles.block_259}>
                  <span className={styles.text_3}>C</span>
                  <span className={styles.text_}>ORRECT</span>
                  <span className={styles.text_3}>: Urfa nerededir? </span>
                </p>
                <p className={styles.block_260}>
                  <span className={styles.text_3}>I</span>
                  <span className={styles.text_}>NCORRECT</span>
                  <span className={styles.text_3}>: Urfa _nerededir? </span>
                </p>
                <p className={styles.block_261}>
                  <span className={styles.text_3}>C</span>
                  <span className={styles.text_}>ORRECT</span>
                  <span className={styles.text_3}>
                    : Ben de öyle düşünüyorum. Hadi şansımızı deneyelim.
                  </span>
                </p>
                <p className={styles.block_262}>
                  <span className={styles.text_3}>I</span>
                  <span className={styles.text_}>NCORRECT</span>
                  <span className={styles.text_3}>
                    : Ben de öyle düşünüyorum. _Hadi şansımızı deneyelim.
                  </span>
                </p>
                <p className={styles.block_263}>
                  For most types of punctuation, do not put a space between the
                  preceding word and the punctuation.
                </p>
                <p className={styles.block_264}>
                  <span className={styles.text_3}>C</span>
                  <span className={styles.text_}>ORRECT</span>
                  <span className={styles.text_3}>: Geliyor musun? </span>
                </p>
                <p className={styles.block_265}>
                  <span className={styles.text_3}>I</span>
                  <span className={styles.text_}>NCORRECT</span>
                  <span className={styles.text_3}>: Geliyor musun ? </span>
                </p>
                <p className={styles.block_266}>
                  <span className={styles.text_3}>C</span>
                  <span className={styles.text_}>ORRECT</span>
                  <span className={styles.text_3}>: Çeneni kapat! </span>
                </p>
                <p className={styles.block_267}>
                  <span className={styles.text_3}>I</span>
                  <span className={styles.text_}>NCORRECT</span>
                  <span className={styles.text_3}>: Çeneni kapat ! </span>
                </p>
                <p className={styles.block_268}>
                  <span className={styles.text_3}>C</span>
                  <span className={styles.text_}>ORRECT</span>
                  <span className={styles.text_3}>
                    : Merhaba, ben öğretmen Selin.{' '}
                  </span>
                </p>
                <p className={styles.block_269}>
                  <span className={styles.text_3}>I</span>
                  <span className={styles.text_}>NCORRECT</span>
                  <span className={styles.text_3}>
                    : Merhaba , ben öğretmen Selin .{' '}
                  </span>
                </p>
                <p className={styles.block_270}>
                  For quotation marks and similar punctuation, put a space
                  before the opening punctuation, but not necessarily after the
                  closing punctuation.
                </p>
                <p className={styles.block_271}>
                  <span className={styles.text_3}>C</span>
                  <span className={styles.text_}>ORRECT</span>
                  <span className={styles.text_3}>
                    : Ahmet, "Seni seviyorum." dedi.{' '}
                  </span>
                </p>
                <p className={styles.block_272}>
                  <span className={styles.text_3}>I</span>
                  <span className={styles.text_}>NCORRECT</span>
                  <span className={styles.text_3}>
                    : Ahmet, " Seni seviyorum. " dedi.{' '}
                  </span>
                </p>
                <p className={styles.block_273}>
                  <span className={styles.text_3}>C</span>
                  <span className={styles.text_}>ORRECT</span>
                  <span className={styles.text_3}>
                    : "Sevmek" İngilizceye çevir.{' '}
                  </span>
                </p>
                <p className={styles.block_274}>
                  <span className={styles.text_3}>I</span>
                  <span className={styles.text_}>NCORRECT</span>
                  <span className={styles.text_3}>
                    : "Sevmek"İngilizceye çevir.{' '}
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
