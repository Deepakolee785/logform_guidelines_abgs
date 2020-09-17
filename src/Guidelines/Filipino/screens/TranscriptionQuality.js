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
            <PageContentHeader currentPage="Longform Filipino" />
            <div className="content text">
              <p className={'large-heading'}>Transcription quality</p>
              <p className={styles.block_149}>
                <span className={styles.text_8}>
                  Comply with the standard rules of the writing system.
                </span>
                <span className={styles.text_6}> </span>
              </p>
              <div id="typo">
                <p className={'heading'}>Typo</p>
                <p className={styles.block_151}>
                  <span className={styles.text_8}>
                    A typo results in the unintentional creation of a non-word.
                  </span>
                  <span className={styles.text_6}> </span>
                </p>
                <p className={styles.block_152}>
                  <span className={styles.text_2}>
                    Avoid making any typographical errors. Carefully check your
                    work before marking items as
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>"complete".</span>
                  <span className={styles.text_3}> </span>
                </p>
                <p className={styles.block_153}>
                  <span className={styles.text_19}>C</span>
                  <span className={styles.text_20}>ORRECT</span>
                  <span className={styles.text_19}>
                    : Mag-log in Facebook.{' '}
                  </span>
                </p>
                <p className={styles.block_98}>
                  <span className={styles.text_19}>I</span>
                  <span className={styles.text_20}>NCORRECT</span>
                  <span className={styles.text_19}>: Mag-log in Facebok. </span>
                </p>
                <p className={styles.block_154}>
                  Use the proper capitalization for standard words that require
                  it.
                </p>
              </div>
              <div id="context-error">
                <p className={'heading'}>Context error</p>
                <p className={styles.block_156}>
                  <span className={styles.text_2}>
                    Do not correct speaker's grammar if they intentionally say
                    something, even if what they say
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>
                    does not follow the standard grammatical rules of the
                    transcription language.
                  </span>
                  <span className={styles.text_3}> </span>
                </p>
              </div>
              <div id="adding-missing-words">
                <p className={'heading'}>Added or missing words</p>
                <p className={styles.block_158}>
                  <span className={styles.text_2}>
                    Do not transcribe words that are not spoken, even if they
                    are obviously intended by the speaker.
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>
                    Avoid putting words in the speaker's mouth. However, do
                    transcribe implied times and units of
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>currency.</span>
                  <span className={styles.text_3}> </span>
                </p>
                <p className={styles.block_159}>
                  <span className={styles.text_19}>C</span>
                  <span className={styles.text_20}>ORRECT</span>
                  <span className={styles.text_19}>
                    : Gusto ko manood X-Men.{' '}
                  </span>
                </p>
                <p className={styles.block_160}>
                  <span className={styles.text_19}>I</span>
                  <span className={styles.text_20}>NCORRECT</span>
                  <span className={styles.text_19}>
                    : Gusto ko manood ng X-Men.{' '}
                  </span>
                </p>
                <p className={styles.block_161}>
                  <span className={styles.text_29}>C</span>
                  <span className={styles.text_30}>ORRECT</span>
                  <span className={styles.text_29}>
                    : Masyadong mahal iyan para sa Php20.{' '}
                  </span>
                  <span className={styles.text_31}>I</span>
                  <span className={styles.text_32}>NCORRECT</span>
                  <span className={styles.text_31}>
                    : Masyadong mahal iyan para sa 20.{' '}
                  </span>
                </p>
                <p className={styles.block_162}>
                  <span className={styles.text_33}>E</span>
                  <span className={styles.text_34}>XAMPLE AUDIO</span>
                  <span className={styles.text_33}>: " </span>
                  <span className={styles.text_35}>gusto ko manood x men </span>
                  <span className={styles.text_33}>" </span>
                  <span className={styles.text_31}>E</span>
                  <span className={styles.text_32}>XPLANATION</span>
                  <span className={styles.text_31}>
                    : Do not add the omitted "ng".{' '}
                  </span>
                </p>
                <p className={styles.block_163}>
                  <span className={styles.text_23}>E</span>
                  <span className={styles.text_20}>XAMPLE AUDIO</span>
                  <span className={styles.text_23}>: " </span>
                  <span className={styles.text_36}>
                    masyadong mahal iyan para sa bente{' '}
                  </span>
                  <span className={styles.text_23}>" </span>
                </p>
                <p className={styles.block_164}>
                  <span className={styles.text_23}>E</span>
                  <span className={styles.text_20}>XPLANATION</span>
                  <span className={styles.text_23}>
                    : Implied currency, add "Php" even though it is not spoken.
                  </span>
                </p>
                <p className={styles.block_165}>
                  <span className={styles.text_2}>
                    Transcribe all words spoken, even if they are not intended
                    by the speaker. For interjections and
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>
                    non-speech vocalizations, refer to Agreed Spelling &gt;
                    Interjections and Difficult Utterances &gt;
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>
                    Hesitations and Truncations.
                  </span>
                  <span className={styles.text_3}> </span>
                </p>
                <p className={styles.block_166}>
                  <span className={styles.text_37}>C</span>
                  <span className={styles.text_30}>ORRECT</span>
                  <span className={styles.text_37}>
                    : Makikipagkita sa kaibigan kapitbahay.{' '}
                  </span>
                  <span className={styles.text_38}>E</span>
                  <span className={styles.text_32}>XPLANATION</span>
                  <span className={styles.text_38}>
                    : Speaker clearly corrected themselves after "kaibigan".
                  </span>
                </p>
              </div>
              <div id="substitution">
                <p className={'heading'}>Substitution</p>
                <p className={styles.block_168}>
                  <span className={styles.text_2}>
                    A substitution error occurs when another standard word is
                    transcribed instead of what was
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>
                    meant by the speaker. If what the speaker said falls into
                    another category (Context Error,
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>
                    Proper Name, Media Title, etc.), see the relevant section.
                  </span>
                  <span className={styles.text_3}> </span>
                </p>
                <p className={styles.block_169}>
                  <span className={styles.text_29}>C</span>
                  <span className={styles.text_30}>ORRECT</span>
                  <span className={styles.text_29}>: tauhan Star Wars </span>
                  <span className={styles.text_31}>I</span>
                  <span className={styles.text_32}>NCORRECT</span>
                  <span className={styles.text_31}>: tauhan Star Trek </span>
                </p>
                <p className={styles.block_170}></p>
                <p className={styles.block_171}>
                  <span className={styles.text_19}>E</span>
                  <span className={styles.text_20}>XAMPLE AUDIO</span>
                  <span className={styles.text_19}>: " </span>
                  <span className={styles.text_39}>tauhan star wars </span>
                  <span className={styles.text_19}>" </span>
                </p>
              </div>
              <div id="spacing">
                <p className={styles.block_173}>Spacing</p>
                <p className={styles.block_174}></p>
                <p className={styles.block_175}>
                  <span className={styles.text_8}>
                    Use only one space between words and sentences.
                  </span>
                  <span className={styles.text_6}> </span>
                </p>
                <p className={styles.block_176}>
                  <span className={styles.text_19}>C</span>
                  <span className={styles.text_20}>ORRECT</span>
                  <span className={styles.text_19}>
                    : Ano ang pinakamataas na gusali sa New{' '}
                  </span>
                </p>
                <p className={styles.block_177}>York?</p>
                <p className={styles.block_178}>
                  <span className={styles.text_19}>I</span>
                  <span className={styles.text_20}>NCORRECT</span>
                  <span className={styles.text_19}>
                    : Ano ang pinakamataas na gusali sa _New{' '}
                  </span>
                </p>
                <p className={styles.block_179}>York?</p>
                <p className={styles.block_99}>
                  <span className={styles.text_19}>C</span>
                  <span className={styles.text_20}>ORRECT</span>
                  <span className={styles.text_19}>
                    : Parang ganun nga. Subukan na lang natin.
                  </span>
                </p>
                <p className={styles.block_98}>
                  <span className={styles.text_19}>I</span>
                  <span className={styles.text_20}>NCORRECT</span>
                  <span className={styles.text_19}>
                    : Parang ganun nga. _Subukan na lang natin.
                  </span>
                </p>
                <p className={styles.block_99}>
                  <span className={styles.text_19}>C</span>
                  <span className={styles.text_20}>ORRECT</span>
                  <span className={styles.text_19}>
                    : Ang Pilipinas ay magandang bansa.{' '}
                  </span>
                </p>
                <p className={styles.block_98}>
                  <span className={styles.text_19}>I</span>
                  <span className={styles.text_20}>NCORRECT</span>
                  <span className={styles.text_19}>
                    : Ang Pilipinas ay _magandang bansa.{' '}
                  </span>
                </p>
                <p className={styles.block_99}>
                  <span className={styles.text_19}>C</span>
                  <span className={styles.text_20}>ORRECT</span>
                  <span className={styles.text_19}>
                    : Hindi ko maintindihan. Pakisulat nga po.
                  </span>
                </p>
                <p className={styles.block_98}>
                  <span className={styles.text_19}>I</span>
                  <span className={styles.text_20}>NCORRECT</span>
                  <span className={styles.text_19}>
                    : Hindi ko maintindihan. _Pakisulat nga po.
                  </span>
                </p>
                <p className={styles.block_180}>
                  <span className={styles.text_2}>
                    For most types of punctuation, do not put a space between
                    the preceding word and the
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>punctuation.</span>
                  <span className={styles.text_3}> </span>
                </p>
                <p className={styles.block_153}>
                  <span className={styles.text_19}>C</span>
                  <span className={styles.text_20}>ORRECT</span>
                  <span className={styles.text_19}>: Sasama ka ba? </span>
                </p>
                <p className={styles.block_98}>
                  <span className={styles.text_19}>I</span>
                  <span className={styles.text_20}>NCORRECT</span>
                  <span className={styles.text_19}>: Sasama ka ba ? </span>
                </p>
                <p className={styles.block_99}>
                  <span className={styles.text_19}>C</span>
                  <span className={styles.text_20}>ORRECT</span>
                  <span className={styles.text_19}>
                    : Hello, si Dr. Smith ito.{' '}
                  </span>
                </p>
                <p className={styles.block_98}>
                  <span className={styles.text_19}>I</span>
                  <span className={styles.text_20}>NCORRECT</span>
                  <span className={styles.text_19}>
                    : Hello, si Dr . Smith ito.{' '}
                  </span>
                </p>
                <p className={styles.block_99}>
                  <span className={styles.text_19}>C</span>
                  <span className={styles.text_20}>ORRECT</span>
                  <span className={styles.text_19}>: Pakisabi nga ulit? </span>
                </p>
                <p className={styles.block_98}>
                  <span className={styles.text_19}>I</span>
                  <span className={styles.text_20}>NCORRECT</span>
                  <span className={styles.text_19}>: Pakisabi nga ulit ? </span>
                </p>
                <p className={styles.block_181}>
                  <span className={styles.text_19}>C</span>
                  <span className={styles.text_20}>ORRECT</span>
                  <span className={styles.text_19}>
                    : Masama ang pakiramdam ko. Hindi ako{' '}
                  </span>
                </p>
                <p className={styles.block_182}>makatulog.</p>
                <p className={styles.block_98}>
                  <span className={styles.text_19}>I</span>
                  <span className={styles.text_20}>NCORRECT</span>
                  <span className={styles.text_19}>
                    : Masama ang pakiramdam ko . Hindi ako{' '}
                  </span>
                </p>
                <p className={styles.block_183}>makatulog.</p>
                <p className={styles.block_184}>
                  <span className={styles.text_2}>
                    For quotation marks and similar punctuation, put a space
                    before the opening punctuation, but
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>
                    not necessarily after the closing punctuation.
                  </span>
                </p>
                <p className={styles.block_185}>
                  <span className={styles.text_19}>C</span>
                  <span className={styles.text_20}>ORRECT</span>
                  <span className={styles.text_19}>
                    : Sabi ni Antonio, "I love you."{' '}
                  </span>
                </p>
                <p className={styles.block_98}>
                  <span className={styles.text_19}>I</span>
                  <span className={styles.text_20}>NCORRECT</span>
                  <span className={styles.text_19}>
                    : Sabi ni Antonio, "I love you. "{' '}
                  </span>
                </p>
                <p className={styles.block_99}>
                  <span className={styles.text_19}>C</span>
                  <span className={styles.text_20}>ORRECT</span>
                  <span className={styles.text_19}>
                    : Isalin ang salitang "aso" sa Hapon.{' '}
                  </span>
                </p>
                <p className={styles.block_98}>
                  <span className={styles.text_19}>I</span>
                  <span className={styles.text_20}>NCORRECT</span>
                  <span className={styles.text_19}>
                    : Isalin ang salitang "aso " sa Hapon.{' '}
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
