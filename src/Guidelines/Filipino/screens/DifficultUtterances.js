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
            <PageContentHeader currentPage="Longform Filipino" />
            <div className="content text">
              <p className={'large-heading'}>Difficult utterances</p>
              <p className={'text'}>
                Everything relating to problematic utterances (background noise,
                false starts, etc.) or different
                <span className={styles.text_3}> </span>
                <span className={styles.text_2}>language varieties.</span>
                <span className={styles.text_3}> </span>
              </p>
              <div id="skipping-a-prompt">
                <p className={'heading'}>Skipping a prompt</p>
                <p className={styles.block_586}>
                  <span className={styles.text_2}>
                    For Loft 1.0: If you can't understand part of the audio,
                    transcribe only the part you can
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>
                    understand. For the part you cannot understand, create a
                    separate speaker segment and add
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>
                    the Unintelligible label as instructed in: Longform generic
                    rules &gt; Unintelligible or foreign or
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>singing.</span>
                  <span className={styles.text_3}> </span>
                </p>
                <p className={styles.block_587}>
                  <span className={styles.text_2}>
                    For Loft 2.0: Below is a list of reasons to skip the audio
                    that may be available for you to choose
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>
                    from. Each contain a description of when is an appropriate
                    time to use it.
                  </span>
                  <span className={styles.text_3}> </span>
                </p>
                <p className={styles.block_107}>
                  <span className={styles.text_25}>● </span>
                  <span className={styles.text_19}>
                    No Audio: The audio doesn't load.{' '}
                  </span>
                </p>
                <p className={styles.block_588}>
                  <span className={styles.text_26}>● </span>
                  <span className={styles.text_19}>
                    No Sound: The waveform indicates there is audio but I can't
                    hear anything.
                  </span>
                </p>
                <p className={styles.block_589}>
                  <span className={styles.text_26}>● </span>
                  <span className={styles.text_19}>
                    Other Locale: All of the speech is in a different language.
                  </span>
                </p>
                <p className={styles.block_111}>
                  <span className={styles.text_26}>● </span>
                  <span className={styles.text_19}>
                    Silent Audio: The entire utterance is silent
                  </span>
                </p>
                <p className={styles.block_111}>
                  <span className={styles.text_26}>● </span>
                  <span className={styles.text_19}>
                    Noisy Audio: The entire utterance is too noisy.
                  </span>
                </p>
                <p className={styles.block_590}>
                  <span className={styles.text_27}>● </span>
                  <span className={styles.text_28}>
                    Other: Other reason (Please explain).
                  </span>
                  <span className={styles.text_19}> </span>
                </p>
                <p className={styles.block_591}>
                  <span className={styles.text_2}>
                    For utterances that contain speech that is user-generated,
                    pre-recorded, or synthesized,
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>transcribe all of it.</span>
                  <span className={styles.text_3}> </span>
                </p>
              </div>
              <div id="hesitations-and-truncations">
                <p className={'heading'}>Hesitations and truncations</p>
                <p className={styles.block_593}>
                  <span className={styles.text_2}>
                    If a speaker says only the beginning part of the word,
                    transcribe it if it can be considered a word
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>
                    on its own. Otherwise do not transcribe the false start.
                  </span>
                  <span className={styles.text_3}> </span>
                </p>
                <p className={styles.block_594}>
                  <span className={styles.text_29}>C</span>
                  <span className={styles.text_30}>ORRECT</span>
                  <span className={styles.text_29}>: kainan na </span>
                  <span className={styles.text_33}>E</span>
                  <span className={styles.text_34}>XAMPLE AUDIO</span>
                  <span className={styles.text_33}>: " </span>
                  <span className={styles.text_35}>kain kainan na </span>
                  <span className={styles.text_33}>" </span>
                  <span className={styles.text_29}>C</span>
                  <span className={styles.text_30}>ORRECT</span>
                  <span className={styles.text_29}>: malaki ang </span>
                  <span className={styles.text_33}>E</span>
                  <span className={styles.text_34}>XAMPLE AUDIO</span>
                  <span className={styles.text_33}>: " </span>
                  <span className={styles.text_35}>ma malaki ang </span>
                  <span className={styles.text_33}>" </span>
                  <span className={styles.text_29}>C</span>
                  <span className={styles.text_30}>ORRECT</span>
                  <span className={styles.text_29}>
                    : marami marimng tao sa loob{' '}
                  </span>
                  <span className={styles.text_33}>E</span>
                  <span className={styles.text_34}>XAMPLE AUDIO</span>
                  <span className={styles.text_33}>: " </span>
                  <span className={styles.text_35}>
                    marami maraming tao sa loob{' '}
                  </span>
                  <span className={styles.text_33}>" </span>
                </p>
                <p className={styles.block_595}>
                  <span className={styles.text_2}>
                    If a user repeats a sentence for the sake of the phone,
                    format the repetition as a sentence if it's
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>
                    restating (as a sentence) what the person has said.
                  </span>
                  <span className={styles.text_3}> </span>
                </p>
                <p className={styles.block_153}>
                  <span className={styles.text_19}>C</span>
                  <span className={styles.text_20}>ORRECT</span>
                  <span className={styles.text_19}>
                    : Maghanap ng malalamig na lugar. Maghanap
                  </span>
                </p>
                <p className={styles.block_309}>ng malalamig na lugar.</p>
                <p className={styles.block_99}>
                  <span className={styles.text_19}>C</span>
                  <span className={styles.text_20}>ORRECT</span>
                  <span className={styles.text_19}>
                    : Mga larawan ng sisiw. Mga larawan ng sisiw.
                  </span>
                </p>
                <p className={styles.block_596}>
                  <span className={styles.text_23}>C</span>
                  <span className={styles.text_20}>ORRECT</span>
                  <span className={styles.text_23}>
                    : Ano ano ang sangkap para sa adobo? Sangkap para sa adobo
                  </span>
                </p>
                <p className={styles.block_597}>
                  <span className={styles.text_23}>C</span>
                  <span className={styles.text_20}>ORRECT</span>
                  <span className={styles.text_23}>
                    : Saán ang pinaka malapit na botika? Saán ang pinaka malapit
                    na botika?
                  </span>
                </p>
                <p className={styles.block_598}>
                  <span className={styles.text_23}>E</span>
                  <span className={styles.text_20}>XPLANATION</span>
                  <span className={styles.text_23}>
                    : If the repeated phrase is part of the sentence that just
                    happens to form a sentence on it's own (possibly under a
                    different interpretation), format it as a fragment. While
                    "sangkap para sa adobo" can be a command, it is ambiguous
                    and is most likely a fragment in this context.
                  </span>
                </p>
                <p className={styles.block_599}>
                  <span className={styles.text_2}>
                    Complete words that have been truncated only if a very small
                    portion of the word is missing
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>
                    (one syllable or less in a multisyllable word) and it is
                    obvious what the word should be. In cases
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>
                    of ambiguity, do not transcribe the cut-off word. Do not put
                    punctuation at the end of truncated
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>words.</span>
                  <span className={styles.text_3}> </span>
                </p>
                <p className={styles.block_600}>
                  <span className={styles.text_29}>C</span>
                  <span className={styles.text_30}>ORRECT</span>
                  <span className={styles.text_29}>
                    : Nakatira kami sa Tandang Sora{' '}
                  </span>
                  <span className={styles.text_33}>E</span>
                  <span className={styles.text_34}>XAMPLE AUDIO</span>
                  <span className={styles.text_33}>: " </span>
                  <span className={styles.text_35}>
                    nakatira kami sa tandang sor-{' '}
                  </span>
                  <span className={styles.text_33}>" </span>
                  <span className={styles.text_31}>E</span>
                  <span className={styles.text_32}>XPLANATION</span>
                  <span className={styles.text_31}>
                    : Final sound "a" was truncated.{' '}
                  </span>
                </p>
                <p className={styles.block_601}>
                  <span className={styles.text_2}>
                    If a truncation occurs mid-quote, use an end quotation mark
                    even if there is possibly more
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>intended content.</span>
                  <span className={styles.text_3}> </span>
                </p>
                <p className={styles.block_602}>
                  <span className={styles.text_29}>C</span>
                  <span className={styles.text_30}>ORRECT</span>
                  <span className={styles.text_29}>
                    : Sabi ni Arthur, "Talagang dapat nating"{' '}
                  </span>
                  <span className={styles.text_33}>E</span>
                  <span className={styles.text_34}>XAMPLE AUDIO</span>
                  <span className={styles.text_33}>: " </span>
                  <span className={styles.text_35}>
                    sabi ni arthur talagang dapat nating-{' '}
                  </span>
                  <span className={styles.text_33}>" </span>
                </p>
                <p className={styles.block_603}>
                  <span className={styles.text_19}>E</span>
                  <span className={styles.text_20}>XPLANATION</span>
                  <span className={styles.text_19}>
                    : End of quote was truncated. Include{' '}
                  </span>
                </p>
                <p className={styles.block_604}>closing quotation mark.</p>
                <p className={styles.block_382}>
                  <span className={styles.text_8}>
                    For numbers, stick to what is uttered, even if you know this
                    is not all the speaker is going to say.
                  </span>
                  <span className={styles.text_6}> </span>
                </p>
                <p className={styles.block_176}>
                  <span className={styles.text_29}>C</span>
                  <span className={styles.text_30}>ORRECT</span>
                  <span className={styles.text_29}>: Xbox three six </span>
                  <span className={styles.text_33}>E</span>
                  <span className={styles.text_34}>XAMPLE AUDIO</span>
                  <span className={styles.text_33}>: " </span>
                  <span className={styles.text_35}>xbox three six- </span>
                  <span className={styles.text_33}>" </span>
                </p>
                <p className={styles.block_605}>
                  <span className={styles.text_19}>E</span>
                  <span className={styles.text_20}>XPLANATION</span>
                  <span className={styles.text_19}>
                    : Speaker was going to say "Xbox three{' '}
                  </span>
                </p>
                <p className={styles.block_606}>sixty" but was cut off.</p>
                <p className={styles.block_607}>
                  <span className={styles.text_2}>
                    Transcribe any filler words that are applicable and used in
                    the target language. Below are
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>
                    examples of filler words in the English language. These may
                    or may not be applicable in the
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>
                    target language. Again, only transcribe filler words that
                    exist in and are used in the target
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>language.</span>
                  <span className={styles.text_3}> </span>
                </p>
                <p className={styles.block_608}>
                  <span className={styles.text_25}>● </span>
                  <span className={styles.text_19}>um </span>
                </p>
                <p className={styles.block_588}>
                  <span className={styles.text_26}>● </span>
                  <span className={styles.text_19}>uh </span>
                </p>
                <p className={styles.block_111}>
                  <span className={styles.text_26}>● </span>
                  <span className={styles.text_19}>right </span>
                </p>
                <p className={styles.block_111}>
                  <span className={styles.text_26}>● </span>
                  <span className={styles.text_19}>you know </span>
                </p>
                <p className={styles.block_111}>
                  <span className={styles.text_26}>● </span>
                  <span className={styles.text_19}>so </span>
                </p>
                <p className={styles.block_111}>
                  <span className={styles.text_27}>● </span>
                  <span className={styles.text_28}>like</span>
                  <span className={styles.text_19}> </span>
                </p>
                <p className={styles.block_609}>
                  <span className={styles.text_2}>
                    Below is a list of all filler words that should only be
                    transcribed if affirmations or answers to a
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>question.</span>
                </p>
                <p className={styles.block_185}>
                  <span className={styles.text_19}>C</span>
                  <span className={styles.text_20}>ORRECT</span>
                  <span className={styles.text_19}>
                    : I need to get a new um telephone.{' '}
                  </span>
                </p>
                <p className={styles.block_99}>
                  <span className={styles.text_19}>C</span>
                  <span className={styles.text_20}>ORRECT</span>
                  <span className={styles.text_19}>
                    : Do you like it? Mhm.{' '}
                  </span>
                </p>
                <p className={styles.block_610}>
                  <span className={styles.text_25}>● </span>
                  <span className={styles.text_19}>ah </span>
                </p>
                <p className={styles.block_588}>
                  <span className={styles.text_26}>● </span>
                  <span className={styles.text_19}>er </span>
                </p>
                <p className={styles.block_111}>
                  <span className={styles.text_27}>● </span>
                  <span className={styles.text_28}>mhm</span>
                  <span className={styles.text_19}> </span>
                </p>
                <p className={styles.block_611}>
                  <span className={styles.text_2}>
                    Only transcribe foreign words if they are common in your
                    language or if speakers of your
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>
                    language would understand it. If it is foreign and speakers
                    of your language would not know this
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>
                    word, use the Foreign Speech label as instructed in:
                    Longform generic rules &gt; Unintelligible or
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>foreign or singing.</span>
                  <span className={styles.text_3}> </span>
                </p>
              </div>
              <div id="background-and-foreground-speech">
                <p className={'heading'}>Background and foreground speech</p>
              </div>
              <div id="foreign-language">
                <p className={'heading'}>Foreign language</p>
              </div>
              <div id="accents">
                <p className={'heading'}>Accents</p>
                <p className={'text'}>
                  Correct non-standard pronunciations to their standard ones.
                  Non-standard pronunciations could be from speakers of regional
                  dialects, language learners, or speakers from different
                  countries.
                </p>
                <p className={styles.block_489}>
                  <span className={styles.text_29}>C</span>
                  <span className={styles.text_30}>ORRECT</span>
                  <span className={styles.text_29}>: ate kuya </span>
                  <span className={styles.text_31}>I</span>
                  <span className={styles.text_32}>NCORRECT</span>
                  <span className={styles.text_31}>: ati koya </span>
                </p>
                <p className={styles.block_616}>
                  <span className={styles.text_23}>E</span>
                  <span className={styles.text_20}>XPLANATION</span>
                  <span className={styles.text_23}>
                    : Person said "ati" instead of "ate", but it should still be
                    spelled as standard.
                  </span>
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
