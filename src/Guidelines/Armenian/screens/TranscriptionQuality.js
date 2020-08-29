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
            <PageContentHeader currentPage="longform Armenian" />
            <div className="content text">
              <p className={'large-heading'}>Transcription quality </p>
              <p className={styles.block_138}>
                Comply with the standard rules of the writing system.{' '}
              </p>
              <div id="typo">
                <p className={'heading'}>Typo </p>
                <p className={'text'}>
                  A typo results in the unintentional creation of a non-word.{' '}
                </p>
                <p className={'text'}>
                  Avoid making any typographical errors. Carefully check your
                  work before marking items as "complete".{' '}
                </p>
              </div>
              <div id="context-error">
                <p className={'heading'}>Context error </p>
                <p className={'text'}>
                  A context error occurs when a real word is used incorrectly or
                  when the incorrect form of a word is used. This includes
                  homophones and punctuation, among other things.{' '}
                </p>
                <p className={styles.block_144}>Correct: Ես խնձոր կերա։ </p>
                <p className={styles.block_145}>Incorrect: Ես խնցոր կերա։ </p>
                <p className={styles.block_146}>
                  Correct: Արտաքին տեսքը խաբուսիկ է։{' '}
                </p>
                <p className={styles.block_147}>
                  Incorrect: Արտակի տեսքը խափուսիկ է։{' '}
                </p>
              </div>
              <div id="adding-missing-words">
                <p className={'heading'}>Added or missing words </p>
                <p className={'text'}>
                  Do not transcribe words that are not spoken, even if they are
                  obviously intended by the speaker. Avoid putting words in the
                  speaker's mouth. However, do transcribe implied times and
                  units of currency.{' '}
                </p>
                <p className={styles.block_150}>
                  Correct: Ուզում եմ X-Men ֆիլմը դիտել։{' '}
                </p>
                <p className={styles.block_147}>
                  Incorrect: Ուզում եմ X-Men-ը դիտել։{' '}
                </p>
                <p className={styles.block_152}>
                  <span className={styles.text_4}>
                    Example audio: "ուզում եմ x men ֆիլմը դիտել "{' '}
                  </span>
                </p>

                <p className={'gray-text'}>
                  Explanation: Չավելացնել հոդեր, բառեր։{' '}
                </p>
                <p className={styles.block_155}>
                  Correct: 1.000 չափազանց թանկ է{' '}
                </p>
                <p className={styles.block_156}>
                  <span className={styles.text_4}>Example audio: " </span>
                  <span className={styles.text_5}>երեք ու քառասուն ինը </span>
                </p>
                <p className={styles.block_157}>շոկոլադի համար։ </p>
                <p className={styles.block_158}>
                  Incorrect: 1.000 չափազանց թանկ է
                </p>

                <p className={''}>
                  <p>Explanation: հազար չափազանց թանկ է շոկոլադի համար։</p>
                </p>
                <p className={styles.block_162}> </p>
                <p className={'text'}>
                  Transcribe all words spoken, even if they are not intended by
                  the speaker. For interjections and non-speech vocalizations,
                  refer to Agreed Spelling &gt; Interjections and Difficult
                  Utterances &gt; Hesitations and Truncations.{' '}
                </p>
                <p className={styles.block_164}>
                  <span className={styles.text_8}>
                    Correct: Քանի՞ ազնվամորի հապալաս կա։{' '}
                  </span>
                  <p className={styles.text_9}>
                    Explanation: Խոսողն ուղղում է իր սխալն՝ ազնվամորին։{' '}
                  </p>
                </p>
              </div>
              <div id="substitution">
                <p className={'heading'}>Substitution </p>
              </div>
              <div id="spacing">
                <p className={'heading'}>Spacing </p>
                <p className={'text'}>
                  Use only one space between words and sentences.{' '}
                </p>
                <p className={styles.block_169}>
                  Correct: Ո՞րն է Նյու Յորքի ամենաբարձր{' '}
                </p>
                <p className={styles.block_170}>շենքը։ </p>
                <p className={styles.block_171}>
                  Incorrect: Ո՞րն է Նյու Յորքի ամենաբարձր{' '}
                </p>
                <p className={styles.block_172}>շենքը։ </p>
                <p className={styles.block_173}>
                  Correct: Կարծում եմ։ Փորձե՛նք։{' '}
                </p>
                <p className={styles.block_174}>
                  Incorrect: Կարծում եմ։ _Փորձե՛նք։{' '}
                </p>
                <p className={styles.block_175}>
                  For most types of punctuation, do not put a space between the
                  preceding word and the punctuation.{' '}
                </p>
                <p className={styles.block_176}>Correct: Գալի՞ս ես։ </p>
                <p className={styles.block_177}>Incorrect: Գալի՞ս ես ։ </p>
                <p className={styles.block_178}>
                  Correct: Բարեւ, ծանոթացե՛ք, պրն. Սմիթն է։{' '}
                </p>
                <p className={styles.block_179}>
                  <span className={styles.text_10}>
                    Incorrect: Բարեւ, ծանոթացե՛ք, պրն _. Սմիթն է։
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
