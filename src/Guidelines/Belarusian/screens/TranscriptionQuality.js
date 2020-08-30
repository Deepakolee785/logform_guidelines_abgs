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
            <PageContentHeader currentPage="longform Belarusian" />
            <div className="content text">
              <p className={'large-heading'}>Transcription quality </p>
              <p className={'text'}>
                Comply with the standard rules of the writing system.{' '}
              </p>
              <div id="typo">
                <p className={'heading'}>Typo </p>
                <p className={'text'}>
                  A typo results in the unintentional creation of a non-word.{' '}
                </p>
                <p className={styles.block_220}>
                  Avoid making any typographical errors. Carefully check your
                  work before marking items as "complete".{' '}
                </p>
                <p className={styles.block_221}>
                  Correct: Наведайце нашу старонку на{' '}
                </p>
                <p className={styles.block_222}>VKontakte. </p>
                <p className={styles.block_223}>
                  Incorrect: Наведаце нашу старонку на{' '}
                </p>
                <p className={styles.block_224}>ВКонтакте. </p>
                <p className={styles.block_225}>
                  Use the proper capitalization for standard words that require
                  it.{' '}
                </p>
              </div>
              <div id="context-error">
                <p className={'heading'}>Context error </p>
                <p className={'text'}>
                  A context error occurs when a real word is used incorrectly or
                  when the incorrect form of a word is used. This includes
                  homophones and punctuation, among other things.{' '}
                </p>
                <p className={styles.block_228}>Correct: Я з'еў плод. </p>
                <p className={styles.block_229}>Incorrect: Я з'еў плот. </p>
                <p className={styles.block_230}>
                  Correct: Не судзіце пра кнігу па яе вокладцы.{' '}
                </p>
                <p className={styles.block_231}>
                  Incorrect: Не судзіце па яе вокладцы пра{' '}
                </p>
                <p className={styles.block_232}>кнігу. </p>
              </div>
              <div id="adding-missing-words">
                <p className={'heading'}>Added or missing words </p>
                <p className={'text'}>
                  Do not transcribe words that are not spoken, even if they are
                  obviously intended by the speaker. Avoid putting words in the
                  speaker's mouth. However, do transcribe implied times and
                  units of currency.{' '}
                </p>
                <p className={styles.block_235}>
                  Correct: Я хачу пайсці паглядзець фільм{' '}
                </p>
                <p className={styles.block_236}>Кіндэрвілейскі прывід. </p>
                <p className={styles.block_237}>
                  Incorrect: Я хачу пайсці паглядзець той{' '}
                </p>
                <p className={styles.block_238}>
                  фільм Кіндэрвілейскі прывід.{' '}
                </p>
                <p className={styles.block_239}>
                  <span className={styles.text_}>Example audio: " </span>
                  <span className={styles.text_1}>
                    я хачу пайсці паглядзець той{' '}
                  </span>
                </p>
                <p className={styles.block_240}>
                  <span className={styles.text_1}>
                    фільм кіндэрвілейскі прывід{' '}
                  </span>
                  <span className={styles.text_}>" </span>
                </p>
                <p className={styles.block_241}>
                  Explanation: Don't add the omitted "той".{' '}
                </p>
                <p className={styles.block_242}>
                  Correct: 3.49 руб. гэта занадта шмат для{' '}
                </p>
                <p className={styles.block_243}>шакаладнага батончыка. </p>
                <p className={styles.block_244}>
                  Incorrect: 349 гэта занадта шмат для{' '}
                </p>
                <p className={styles.block_245}>шакаладнага батончыка. </p>
                <p className={styles.block_246}>
                  <span className={styles.text_}>Example audio: " </span>
                  <span className={styles.text_1}>тры сорак дзевяць гэта </span>
                </p>
                <p className={styles.block_247}>
                  <span className={styles.text_1}>
                    занадта шмат для шакаладнага батончыка{' '}
                  </span>
                  <span className={styles.text_}>" </span>
                </p>
                <p className={styles.block_248}>
                  Explanation: Implied currency, add "руб." even{' '}
                </p>
                <p className={styles.block_249}>though it is not spoken. </p>
                <p className={styles.block_250}>
                  Transcribe all words spoken, even if they are not intended by
                  the speaker. For interjections and non-speech vocalizations,
                  refer to Agreed Spelling &gt; Interjections and Difficult
                  Utterances &gt; Hesitations and Truncations.{' '}
                </p>
                <p className={styles.block_251}>
                  <span className={styles.text_4}>
                    Correct: Колькі там ёсць маліны чарніц?{' '}
                  </span>
                  <span className={styles.text_5}>
                    Explanation: Speaker clearly corrected{' '}
                  </span>
                </p>
                <p className={styles.block_252}>themselves after "маліны". </p>
              </div>
              <div id="substitution">
                <p className={styles.block_253}>Substitution </p>
              </div>
              <div id="spacing">
                <p className={'heading'}>Spacing </p>
                <p className={'text'}>
                  Use only one space between words and sentences.{' '}
                </p>
                <p className={styles.block_256}>
                  Correct: Які самы высокі будынак у Miнску?{' '}
                </p>
                <p className={styles.block_257}>
                  Incorrect: Які самы высокі будынак у{' '}
                </p>
                <p className={styles.block_258}>_Miнску? </p>
                <p className={styles.block_259}>
                  Correct: Я таксама так думаю. Давайце{' '}
                </p>
                <p className={styles.block_260}>проста паспрабуем. </p>
                <p className={styles.block_261}>
                  Incorrect: Я таксама так думаю. _Давайце{' '}
                </p>
                <p className={styles.block_262}>проста паспрабуем. </p>
                <p className={styles.block_263}>
                  For most types of punctuation, do not put a space between the
                  preceding word and the punctuation.{' '}
                </p>
                <p className={styles.block_264}>Correct: Ты ідзеш? </p>
                <p className={styles.block_265}>Incorrect: Ты ідзеш ? </p>
                <p className={styles.block_266}>
                  Correct: Прывітанне, гэта д-р Сміт.{' '}
                </p>
                <p className={styles.block_267}>
                  Incorrect: Прывітанне, гэта д-р Сміт .{' '}
                </p>
                <p className={styles.block_268}>
                  <span className={styles.text_6}>
                    For quotation marks and similar punctuation, put a space
                    before the opening punctuation, but not necessarily after
                    the closing punctuation.{' '}
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
