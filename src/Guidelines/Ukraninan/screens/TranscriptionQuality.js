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
            <PageContentHeader currentPage="longform Ukraninan" />
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
                <p className={styles.block_198}>
                  Avoid making any typographical errors. Carefully check your
                  work before marking items as "complete".
                </p>
                <p className={styles.block_199}>
                  <span className={styles.text_3}>C</span>
                  <span className={styles.text_}>ORRECT</span>
                  <span className={styles.text_3}>
                    : Додай мене в Фейсбуці.{' '}
                  </span>
                </p>
                <p className={styles.block_200}>
                  <span className={styles.text_3}>I</span>
                  <span className={styles.text_}>NCORRECT</span>
                  <span className={styles.text_3}>
                    : Додй мене в Фейсбуці.{' '}
                  </span>
                </p>
                <p className={styles.block_201}>
                  <span className={styles.text_3}>E</span>
                  <span className={styles.text_}>XAMPLE AUDIO</span>
                  <span className={styles.text_3}>: " </span>
                  <span className={styles.text_4}>додай мене в фейсбуці </span>
                  <span className={styles.text_3}>" </span>
                </p>
                <p className={styles.block_202}>
                  Use the proper capitalization for standard words that require
                  it.
                </p>
                <p className={styles.block_203}>
                  <span className={styles.text_3}>C</span>
                  <span className={styles.text_}>ORRECT</span>
                  <span className={styles.text_3}>
                    : Ми будемо у Харкові наступного тижня.{' '}
                  </span>
                </p>
                <p className={styles.block_204}>
                  <span className={styles.text_3}>I</span>
                  <span className={styles.text_}>NCORRECT</span>
                  <span className={styles.text_3}>
                    : Ми будемо у харкові наступного тижня.{' '}
                  </span>
                </p>
                <p className={styles.block_205}>
                  <span className={styles.text_3}>C</span>
                  <span className={styles.text_}>ORRECT</span>
                  <span className={styles.text_3}>
                    : Краса по-американськи{' '}
                  </span>
                </p>
                <p className={styles.block_206}>
                  <span className={styles.text_3}>I</span>
                  <span className={styles.text_}>NCORRECT</span>
                  <span className={styles.text_3}>
                    : Краса по-Американськи{' '}
                  </span>
                </p>
                <p className={styles.block_207}>
                  <span className={styles.text_3}>C</span>
                  <span className={styles.text_}>ORRECT</span>
                  <span className={styles.text_3}>
                    : Земля обертається навколо Сонця.{' '}
                  </span>
                </p>
                <p className={styles.block_208}>
                  <span className={styles.text_3}>I</span>
                  <span className={styles.text_}>NCORRECT</span>
                  <span className={styles.text_3}>
                    : Земля обертається навколо сонця.{' '}
                  </span>
                </p>
              </div>
              <div id="context-error">
                <p className={'heading'}>Context error</p>
                <p className={'text'}>
                  A context error occurs when a real word is used incorrectly or
                  when the incorrect form of a word is used. This includes
                  homophones and punctuation, among other things.
                </p>
                <p className={styles.block_211}>
                  <span className={styles.text_3}>C</span>
                  <span className={styles.text_}>ORRECT</span>
                  <span className={styles.text_3}>
                    : У них у квартирі завжди грає музика.{' '}
                  </span>
                </p>
                <p className={styles.block_212}>
                  <span className={styles.text_3}>I</span>
                  <span className={styles.text_}>NCORRECT</span>
                  <span className={styles.text_3}>
                    : У них у квартирі завжди гра є музика.{' '}
                  </span>
                </p>
                <p className={styles.block_213}>
                  <span className={styles.text_3}>C</span>
                  <span className={styles.text_}>ORRECT</span>
                  <span className={styles.text_3}>: Він теж випив соку. </span>
                </p>
                <p className={styles.block_214}>
                  <span className={styles.text_3}>I</span>
                  <span className={styles.text_}>NCORRECT</span>
                  <span className={styles.text_3}>: Він те ж випив соку. </span>
                </p>
                <p className={styles.block_215}>
                  <span className={styles.text_3}>E</span>
                  <span className={styles.text_}>XAMPLE AUDIO</span>
                  <span className={styles.text_3}>: " </span>
                  <span className={styles.text_4}>він теж випив соку </span>
                  <span className={styles.text_3}>" </span>
                </p>
                <p className={styles.block_216}>
                  <span className={styles.text_3}>C</span>
                  <span className={styles.text_}>ORRECT</span>
                  <span className={styles.text_3}>
                    : Вона випила те ж, що і він.{' '}
                  </span>
                </p>
                <p className={styles.block_217}>
                  <span className={styles.text_3}>I</span>
                  <span className={styles.text_}>NCORRECT</span>
                  <span className={styles.text_3}>
                    : Вона випила теж, що і він.{' '}
                  </span>
                </p>
                <p className={styles.block_218}>
                  <span className={styles.text_3}>E</span>
                  <span className={styles.text_}>XAMPLE AUDIO</span>
                  <span className={styles.text_3}>: " </span>
                  <span className={styles.text_4}>
                    вона випила те ж що і він{' '}
                  </span>
                  <span className={styles.text_3}>" </span>
                </p>
                <p className={styles.block_219}>
                  Transcribe what is actually spoken. Use context to help with
                  spelling and homophone disambiguation. Look up words if you
                  are unsure.
                </p>
                <p className={styles.block_220}>
                  <span className={styles.text_3}>C</span>
                  <span className={styles.text_}>ORRECT</span>
                  <span className={styles.text_3}>
                    : Він написав красивий роман.{' '}
                  </span>
                </p>
                <p className={styles.block_221}>
                  <span className={styles.text_3}>I</span>
                  <span className={styles.text_}>NCORRECT</span>
                  <span className={styles.text_3}>
                    : Він написав красивий Роман.{' '}
                  </span>
                </p>
                <p className={styles.block_222}>
                  <span className={styles.text_3}>E</span>
                  <span className={styles.text_}>XAMPLE AUDIO</span>
                  <span className={styles.text_3}>: " </span>
                  <span className={styles.text_4}>
                    він написав красивий роман{' '}
                  </span>
                  <span className={styles.text_3}>" </span>
                </p>
                <p className={styles.block_223}>
                  <span className={styles.text_3}>E</span>
                  <span className={styles.text_}>XPLANATION</span>
                  <span className={styles.text_3}>
                    : The word "роман" here is understood as a novel, but not as
                    a name "Роман".
                  </span>
                </p>
                <p className={styles.block_224}>
                  Do not correct speaker's grammar if they intentionally say
                  something, even if what they say does not follow the standard
                  grammatical rules of the transcription language.
                </p>
                <p className={styles.block_225}>
                  <span className={styles.text_3}>C</span>
                  <span className={styles.text_}>ORRECT</span>
                  <span className={styles.text_3}>: Нове Україна </span>
                </p>
                <p className={styles.block_226}>
                  <span className={styles.text_3}>I</span>
                  <span className={styles.text_}>NCORRECT</span>
                  <span className={styles.text_3}>: Нова Україна </span>
                </p>
                <p className={styles.block_227}>
                  <span className={styles.text_3}>E</span>
                  <span className={styles.text_}>XPLANATION</span>
                  <span className={styles.text_3}>
                    : The adjective "нова" (new) is not in agreement with the
                    noun "Україна".
                  </span>
                </p>
                <p className={styles.block_228}>
                  <span className={styles.text_3}>C</span>
                  <span className={styles.text_}>ORRECT</span>
                  <span className={styles.text_3}>: Пам'ятник Франка </span>
                </p>
                <p className={styles.block_229}>
                  <span className={styles.text_3}>I</span>
                  <span className={styles.text_}>NCORRECT</span>
                  <span className={styles.text_3}>: Пам'ятник Франку </span>
                </p>
                <p className={styles.block_230}>
                  <span className={styles.text_3}>E</span>
                  <span className={styles.text_}>XPLANATION</span>
                  <span className={styles.text_3}>
                    : The noun "пам'ятник" (monument) requires the dative case
                    on the following word.
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
                <p className={styles.block_233}>
                  <span className={styles.text_3}>C</span>
                  <span className={styles.text_}>ORRECT</span>
                  <span className={styles.text_3}>: Я живу на Київській. </span>
                </p>
                <p className={styles.block_234}>
                  <span className={styles.text_3}>I</span>
                  <span className={styles.text_}>NCORRECT</span>
                  <span className={styles.text_3}>
                    : Я живу на вулиці Київська.{' '}
                  </span>
                </p>
                <p className={styles.block_235}>
                  <span className={styles.text_3}>E</span>
                  <span className={styles.text_}>XAMPLE AUDIO</span>
                  <span className={styles.text_3}>: " </span>
                  <span className={styles.text_4}>я живу на київській </span>
                  <span className={styles.text_3}>" </span>
                </p>
                <p className={styles.block_236}>
                  <span className={styles.text_3}>E</span>
                  <span className={styles.text_}>XPLANATION</span>
                  <span className={styles.text_3}>
                    : Do not add words like "вулиця" (street) when they are not
                    spoken.
                  </span>
                </p>
                <p className={styles.block_237}>
                  <span className={styles.text_3}>C</span>
                  <span className={styles.text_}>ORRECT</span>
                  <span className={styles.text_3}>: станції з біопаливом </span>
                </p>
                <p className={styles.block_238}>
                  <span className={styles.text_3}>I</span>
                  <span className={styles.text_}>NCORRECT</span>
                  <span className={styles.text_3}>
                    : станції з біологічним паливом{' '}
                  </span>
                </p>
                <p className={styles.block_239}>
                  <span className={styles.text_3}>E</span>
                  <span className={styles.text_}>XAMPLE AUDIO</span>
                  <span className={styles.text_3}>: " </span>
                  <span className={styles.text_4}>станції з біопаливом </span>
                  <span className={styles.text_3}>" </span>
                </p>
                <p className={styles.block_240}>
                  <span className={styles.text_3}>E</span>
                  <span className={styles.text_}>XPLANATION</span>
                  <span className={styles.text_3}>
                    : If the speaker says an abbreviated form, transcribe with
                    an abbreviated form and nothing else.
                  </span>
                </p>
                <p className={styles.block_241}>
                  <span className={styles.text_3}>C</span>
                  <span className={styles.text_}>ORRECT</span>
                  <span className={styles.text_3}>
                    : Я купив морозиво за 8,70 грн.{' '}
                  </span>
                </p>
                <p className={styles.block_242}>
                  <span className={styles.text_3}>I</span>
                  <span className={styles.text_}>NCORRECT</span>
                  <span className={styles.text_3}>
                    : Я купив морозиво за 8,70.{' '}
                  </span>
                </p>
                <p className={styles.block_243}>
                  <span className={styles.text_3}>E</span>
                  <span className={styles.text_}>XAMPLE AUDIO</span>
                  <span className={styles.text_3}>: " </span>
                  <span className={styles.text_4}>
                    я купив морозиво за вісім сімдесят{' '}
                  </span>
                  <span className={styles.text_3}>" </span>
                </p>
                <p className={styles.block_244}>
                  <span className={styles.text_3}>E</span>
                  <span className={styles.text_}>XPLANATION</span>
                  <span className={styles.text_3}>
                    : Implied currency, add "грн" even though it is not spoken.
                  </span>
                </p>
                <p className={styles.block_245}>
                  <span className={styles.text_3}>C</span>
                  <span className={styles.text_}>ORRECT</span>
                  <span className={styles.text_3}>: дивитися фільми </span>
                </p>
                <p className={styles.block_246}>
                  <span className={styles.text_3}>I</span>
                  <span className={styles.text_}>NCORRECT</span>
                  <span className={styles.text_3}>
                    : дивитися фільми онлайн{' '}
                  </span>
                </p>
                <p className={styles.block_247}>
                  <span className={styles.text_3}>E</span>
                  <span className={styles.text_}>XAMPLE AUDIO</span>
                  <span className={styles.text_3}>: " </span>
                  <span className={styles.text_4}>дивитися фільми он </span>
                  <span className={styles.text_3}>" </span>
                </p>
                <p className={styles.block_248}>
                  <span className={styles.text_3}>E</span>
                  <span className={styles.text_}>XPLANATION</span>
                  <span className={styles.text_3}>
                    : Do not transcribe the word "онлайн" even if it is the most
                    logical ending of the word the speaker started.
                  </span>
                </p>
                <p className={styles.block_249}>
                  Transcribe all words spoken, even if they are not intended by
                  the speaker. For interjections and non-speech vocalizations,
                  refer to Agreed Spelling &gt; Interjections and Difficult
                  Utterances &gt; Hesitations and Truncations.
                </p>
                <p className={styles.block_250}>
                  <span className={styles.text_3}>C</span>
                  <span className={styles.text_}>ORRECT</span>
                  <span className={styles.text_3}>
                    : Скільки там калини малини?{' '}
                  </span>
                </p>
                <p className={styles.block_251}>
                  <span className={styles.text_3}>I</span>
                  <span className={styles.text_}>NCORRECT</span>
                  <span className={styles.text_3}>: Скільки там малини? </span>
                </p>
                <p className={styles.block_252}>
                  <span className={styles.text_3}>E</span>
                  <span className={styles.text_}>XAMPLE AUDIO</span>
                  <span className={styles.text_3}>: " </span>
                  <span className={styles.text_4}>
                    скільки там калини малини{' '}
                  </span>
                  <span className={styles.text_3}>" </span>
                </p>
                <p className={styles.block_253}>
                  <span className={styles.text_3}>E</span>
                  <span className={styles.text_}>XPLANATION</span>
                  <span className={styles.text_3}>
                    : Speaker corrected himself after mistakenly saying "калини"
                    instead of "малини".
                  </span>
                </p>
                <p className={styles.block_254}>
                  <span className={styles.text_3}>C</span>
                  <span className={styles.text_}>ORRECT</span>
                  <span className={styles.text_3}>
                    : Кіт кит кота по хвилях катав.{' '}
                  </span>
                </p>
                <p className={styles.block_255}>
                  <span className={styles.text_3}>I</span>
                  <span className={styles.text_}>NCORRECT</span>
                  <span className={styles.text_3}>
                    : Кит кота по хвилях катав.{' '}
                  </span>
                </p>
                <p className={styles.block_256}>
                  <span className={styles.text_3}>E</span>
                  <span className={styles.text_}>XAMPLE AUDIO</span>
                  <span className={styles.text_3}>: " </span>
                  <span className={styles.text_4}>
                    кіт кит кота по хвилях катав{' '}
                  </span>
                  <span className={styles.text_3}>" </span>
                </p>
                <p className={styles.block_257}>
                  <span className={styles.text_3}>E</span>
                  <span className={styles.text_}>XPLANATION</span>
                  <span className={styles.text_3}>
                    : Speaker clearly corrected himself after mistakenly saying
                    "кіт".
                  </span>
                </p>
                <p className={styles.block_258}>
                  A false start occurs only when the speaker says part of a word
                  and then stops. A false start does not happen if the speaker
                  re-directs their speech mid sentence. False starts should be
                  marked with a dash “-” wherever the false start is happening
                </p>
                <p className={styles.block_259}>
                  <span className={styles.text_3}>C</span>
                  <span className={styles.text_}>ORRECT</span>
                  <span className={styles.text_3}>
                    : I need to get a new tele- telephone{' '}
                  </span>
                </p>
                <p className={styles.block_260}>
                  <span className={styles.text_3}>C</span>
                  <span className={styles.text_}>ORRECT</span>
                  <span className={styles.text_3}>
                    : The driver got out of the driver got into the car.
                  </span>
                </p>
                <p className={styles.block_261}>
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
                  transcribed instead of what was meant by the speaker. If what
                  the speaker said falls into another category (Context Error,
                  Proper Name, Media Title, etc.), see the relevant section.
                </p>
                <p className={styles.block_264}>
                  <span className={styles.text_3}>C</span>
                  <span className={styles.text_}>ORRECT</span>
                  <span className={styles.text_3}>
                    : актори фільму Зоряні війни{' '}
                  </span>
                </p>
                <p className={styles.block_265}>
                  <span className={styles.text_3}>I</span>
                  <span className={styles.text_}>NCORRECT</span>
                  <span className={styles.text_3}>
                    : актори фільму Зоряний десант{' '}
                  </span>
                </p>
                <p className={styles.block_266}>
                  <span className={styles.text_3}>E</span>
                  <span className={styles.text_}>XAMPLE AUDIO</span>
                  <span className={styles.text_3}>: " </span>
                  <span className={styles.text_4}>
                    актори фільму зоряні війни{' '}
                  </span>
                  <span className={styles.text_3}>" </span>
                </p>
                <p className={styles.block_267}>
                  <span className={styles.text_3}>C</span>
                  <span className={styles.text_}>ORRECT</span>
                  <span className={styles.text_3}>
                    : ресторан у місті Київ{' '}
                  </span>
                </p>
                <p className={styles.block_268}>
                  <span className={styles.text_3}>I</span>
                  <span className={styles.text_}>NCORRECT</span>
                  <span className={styles.text_3}>
                    : ресторан у місті Харків{' '}
                  </span>
                </p>
                <p className={styles.block_269}>
                  <span className={styles.text_3}>E</span>
                  <span className={styles.text_}>XAMPLE AUDIO</span>
                  <span className={styles.text_3}>: " </span>
                  <span className={styles.text_4}>ресторан у місті київ </span>
                  <span className={styles.text_3}>" </span>
                </p>
              </div>
              <div id="spacing">
                <p className={'heading'}>Spacing</p>
                <p className={'text'}>
                  Use only one space between words and sentences.
                </p>
                <p className={styles.block_272}>
                  <span className={styles.text_3}>C</span>
                  <span className={styles.text_}>ORRECT</span>
                  <span className={styles.text_3}>
                    : Яка найвища будівля у Києві?{' '}
                  </span>
                </p>
                <p className={styles.block_273}>
                  <span className={styles.text_3}>I</span>
                  <span className={styles.text_}>NCORRECT</span>
                  <span className={styles.text_3}>
                    : Яка найвища будівля у _Києві?{' '}
                  </span>
                </p>
                <p className={styles.block_274}>
                  <span className={styles.text_3}>C</span>
                  <span className={styles.text_}>ORRECT</span>
                  <span className={styles.text_3}>
                    : Ходімо додому. Батьки вже вдома.{' '}
                  </span>
                </p>
                <p className={styles.block_275}>
                  <span className={styles.text_3}>I</span>
                  <span className={styles.text_}>NCORRECT</span>
                  <span className={styles.text_3}>
                    : Ходімо додому. _Батьки вже вдома.{' '}
                  </span>
                </p>
                <p className={styles.block_276}>
                  For most types of punctuation, do not put a space between the
                  preceding word and the punctuation.
                </p>
                <p className={styles.block_277}>
                  <span className={styles.text_3}>C</span>
                  <span className={styles.text_}>ORRECT</span>
                  <span className={styles.text_3}>: Ти йдеш додому? </span>
                </p>
                <p className={styles.block_278}>
                  <span className={styles.text_3}>I</span>
                  <span className={styles.text_}>NCORRECT</span>
                  <span className={styles.text_3}>: Ти йдеш додому ? </span>
                </p>
                <p className={styles.block_192}>
                  <span className={styles.text_3}>C</span>
                  <span className={styles.text_}>ORRECT</span>
                  <span className={styles.text_3}>
                    : Коли ми підемо додому, я тобі зателефоную.
                  </span>
                </p>
                <p className={styles.block_279}>
                  <span className={styles.text_3}>I</span>
                  <span className={styles.text_}>NCORRECT</span>
                  <span className={styles.text_3}>
                    : Коли ми підемо додому , я тобі зателефоную.
                  </span>
                </p>
                <p className={styles.block_280}>
                  For quotation marks and similar punctuation, put a space
                  before the opening punctuation, but not necessarily after the
                  closing punctuation.
                </p>
                <p className={styles.block_281}>
                  <span className={styles.text_3}>C</span>
                  <span className={styles.text_}>ORRECT</span>
                  <span className={styles.text_3}>
                    : Він сказав: "Я тебе кохаю".{' '}
                  </span>
                </p>
                <p className={styles.block_282}>
                  <span className={styles.text_3}>I</span>
                  <span className={styles.text_}>NCORRECT</span>
                  <span className={styles.text_3}>
                    : Він сказав: "Я тебе кохаю" .{' '}
                  </span>
                </p>
                <p className={styles.block_283}>
                  <span className={styles.text_3}>C</span>
                  <span className={styles.text_}>ORRECT</span>
                  <span className={styles.text_3}>
                    : Переклади "собака" японською.{' '}
                  </span>
                </p>
                <p className={styles.block_284}>
                  <span className={styles.text_3}>I</span>
                  <span className={styles.text_}>NCORRECT</span>
                  <span className={styles.text_3}>
                    : Переклади "собака"японською.{' '}
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
