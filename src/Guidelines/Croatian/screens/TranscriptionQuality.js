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
            <PageContentHeader currentPage="Longform Croatian" />
            <div className="content text">
              <p className={'large-heading'}>Transcription quality</p>
              <p className={'text'}>
                <span className={styles.text_17}>
                  Comply with the standard rules of the writing system.
                </span>
                <span className={styles.text_18}> </span>
              </p>
              <div id="typo">
                <p className={'heading'}>
                  Typo
                  <span className={styles.text_1}> </span>
                </p>
                <p className={styles.block_86}>
                  <span className={styles.text_17}>
                    A typo results in the unintentional creation of a non-word.
                  </span>
                  <span className={styles.text_18}> </span>
                </p>
                <p className={styles.block_137}>
                  <span className={styles.text_2}>
                    Avoid making any typographical errors. Carefully check your
                    work before marking items{' '}
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>as "complete".</span>
                  <span className={styles.text_3}> </span>
                </p>
                <p className={styles.block_91}>
                  Correct: Potraži me na Facebook.
                </p>
                <p className={styles.block_92}>
                  Incorrect: Potraži me na Facebok.
                </p>
                <p className={styles.block_138}>
                  <span className={styles.calibre2}>
                    Correct: Sutra u 14:00 imate sastanak s{' '}
                  </span>
                </p>
                <p className={styles.block_139}>Johnom.</p>
                <p className={styles.block_140}>
                  <span className={styles.calibre2}>
                    Incorrect: Sutra u 14:00 imate sastanek s{' '}
                  </span>
                </p>
                <p className={styles.block_141}>Johnom.</p>
                <p className={styles.block_94}>Correct: Otvorite ta vrata.</p>
                <p className={styles.block_92}>
                  Incorrect: Otvorite ta vatara.
                </p>
                <p className={styles.block_93}>
                  Correct: Priključite kabele s punjačem.
                </p>
                <p className={styles.block_92}>
                  Incorrect: Prikuljučite kableb s punjačem.
                </p>
              </div>
              <div id="context-error">
                <p className={'heading'}>Context error</p>
              </div>
              <div id="adding-missing-words">
                <p className={'heading'}>Added or missing words</p>
                <p className={styles.block_144}>
                  <span className={styles.text_2}>
                    Do not transcribe words that are not spoken, even if they
                    are obviously intended by the{' '}
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>
                    speaker. Avoid putting words in the speaker's mouth.
                    However, do transcribe implied{' '}
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>
                    times and units of currency.
                  </span>
                  <span className={styles.text_3}> </span>
                </p>
                <p className={styles.block_145}>Correct: Želim ići kino.</p>
                <p className={styles.block_146}>Incorrect: Želim ići u kino.</p>
                <p className={styles.block_147}>
                  Correct: Pri silasku stepenice okliznuo se i pao.
                </p>
                <p className={styles.block_148}>
                  <span className={styles.calibre2}>
                    Incorrect: Pri silasku niz stepenice okliznuo se i pao.
                  </span>
                </p>
                <p className={styles.block_149}>
                  <span className={styles.text_18}>Example audio: " </span>
                  <span className={styles.text_23}>želim ići kino </span>
                  <span className={styles.text_18}>" </span>
                </p>
                <p className={styles.block_150}>
                  Explanation: Do not add the omitted "u".
                </p>
                <p className={styles.block_151}>
                  <span className={styles.text_18}>Example audio: " </span>
                  <span className={styles.text_23}>
                    <span className={styles.calibre2}>
                      pri silasku stepenice okliznuo se i pao
                    </span>
                  </span>
                  <span className={styles.text_18}>" </span>
                </p>
                <p className={styles.block_152}>
                  Explanation: Do not add the omitted "niz".
                </p>
                <p className={styles.block_153}>
                  <span className={styles.calibre2}>
                    Correct: 3,49 HRK je previše za čokoladnu pločicu.
                  </span>
                </p>
                <p className={styles.block_154}>
                  Incorrect: 349 je previše za čokoladnu pločicu.
                </p>
                <p className={styles.block_155}>
                  <span className={styles.text_18}>Example audio: " </span>
                  <span className={styles.text_23}>
                    <span className={styles.calibre2}>
                      tri četrdeset devet je previše za čokoladnu pločicu
                    </span>
                  </span>
                  <span className={styles.text_18}>" </span>
                </p>
                <p className={styles.block_156}>
                  <span className={styles.calibre2}>
                    Explanation: Implied currency, add "HRK" even though it is
                    not spoken.
                  </span>
                </p>
                <p className={styles.block_157}>
                  <span className={styles.text_2}>
                    Transcribe all words spoken, even if they are not intended
                    by the speaker. For{' '}
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>
                    interjections and non-speech vocalizations, refer to Agreed
                    Spelling &gt; Interjections and{' '}
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>
                    Difficult Utterances &gt; Hesitations and Truncations.
                  </span>
                  <span className={styles.text_3}> </span>
                </p>
                <p className={styles.block_158}>
                  <span className={styles.text_24}>
                    Correct: Idemo li večeras na dagnje lignje?{' '}
                  </span>
                  <span className={styles.text_25}>
                    <span className={styles.calibre2}>
                      Explanation: The speaker clearly corrected themselves
                      after "dagnje".
                    </span>
                  </span>
                </p>
                <p className={styles.block_159}>
                  <span className={styles.text_24}>
                    Correct: Donesi mi kutiju kruh iz dućana.{' '}
                  </span>
                  <span className={styles.text_25}>
                    <span className={styles.calibre2}>
                      Explanation: The speaker clearly corrected themselves
                      after "kutiju".
                    </span>
                  </span>
                </p>
              </div>
              <div id="substitution">
                <p className={'heading'}>Substitution</p>
              </div>
              <div id="spacing">
                <p className={'heading'}>Spacing</p>
                <p className={styles.block_162}>
                  <span className={styles.text_17}>
                    Use only one space between words and sentences.
                  </span>
                  <span className={styles.text_18}> </span>
                </p>
                <p className={styles.block_163}>
                  Correct: Koja je najviša građevina u New Yorku?
                </p>
                <p className={styles.block_92}>
                  <span className={styles.calibre2}>
                    Incorrect: Koja je najviša građevina u _New
                  </span>
                </p>
                <p className={styles.block_164}>Yorku?</p>
                <p className={styles.block_94}>
                  Correct: Mislim da da. Pokušajmo.
                </p>
                <p className={styles.block_140}>
                  Incorrect: Mislim da da. _Pokušajmo.
                </p>
                <p className={styles.block_138}>
                  Correct: Prikaži moju lokaciju.
                </p>
                <p className={styles.block_92}>
                  Incorrect: Prikaži moju _lokaciju.
                </p>
                <p className={styles.block_93}>
                  <span className={styles.calibre2}>
                    Correct: Mary Sue je večeras u bolnici kod
                  </span>
                </p>
                <p className={styles.block_139}>
                  <span className={styles.calibre2}>
                    Jerryja a ja očekujem važan telefonski poziv.
                  </span>
                </p>
                <p className={styles.block_165}>
                  <span className={styles.calibre2}>
                    Dok čekam poziv, mogu li ti dovesti Jordana na
                  </span>
                </p>
                <p className={styles.block_166}>čuvanje?</p>
                <p className={styles.block_140}>
                  <span className={styles.calibre2}>
                    Incorrect: Mary Sue je večeras u bolnici kod
                  </span>
                </p>
                <p className={styles.block_141}>
                  <span className={styles.calibre2}>
                    Jerryja a ja očekujem važan telefonski poziv.
                  </span>
                </p>
                <p className={styles.block_167}>
                  <span className={styles.calibre2}>
                    _Dok čekam poziv, mogu li ti dovesti Jordana
                  </span>
                </p>
                <p className={styles.block_168}>na čuvanje?</p>
                <p className={styles.block_169}>
                  <span className={styles.text_2}>
                    For most types of punctuation, do not put a space between
                    the preceding word and the{' '}
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>punctuation.</span>
                  <span className={styles.text_3}> </span>
                </p>
                <p className={styles.block_170}>Correct: Dolaziš li?</p>
                <p className={styles.block_140}>Incorrect: Dolaziš li ?</p>
                <p className={styles.block_94}>
                  Correct: Zdravo, ovo je dr. Smith.
                </p>
                <p className={styles.block_140}>
                  Incorrect: Zdravo , ovo je dr . Smith.
                </p>
                <p className={styles.block_94}>
                  <span className={styles.calibre2}>
                    Correct: Za nastavak pregleda kliknite na{' '}
                  </span>
                </p>
                <p className={styles.block_171}>„Slažem se”.</p>
                <p className={styles.block_92}>
                  <span className={styles.calibre2}>
                    Incorrect: Za nastavak pregleda kliknite na „
                  </span>
                </p>
                <p className={styles.block_172}>Slažem se ”.</p>
                <p className={styles.block_138}>
                  <span className={styles.calibre2}>
                    Correct: Čuvaj se žurbe, jer ona uvijek dovodi do
                  </span>
                </p>
                <p className={styles.block_173}>kajanja.</p>
                <p className={styles.block_140}>
                  <span className={styles.calibre2}>
                    Incorrect: Čuvaj se žurbe , jer ona uvijek dovodi
                  </span>
                </p>
                <p className={styles.block_174}>do kajanja.</p>
                <p className={styles.block_175}>
                  <span className={styles.text_2}>
                    For quotation marks and similar punctuation, put a space
                    before the opening{' '}
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>
                    punctuation, but not necessarily after the closing
                    punctuation.
                  </span>
                  <span className={styles.text_3}> </span>
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
