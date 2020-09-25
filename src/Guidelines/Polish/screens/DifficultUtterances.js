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
    // 'skipping-a-prompt',
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
            <PageContentHeader currentPage="Longform Polish" />
            <div className="content text">
              {' '}
              <p className="large-heading">Difficult Utterances</p>
              <p className={'text'}>
                <span className={styles.text_2}>
                  Transcribe onomatopoeia when clearly spoken. Otherwise, use
                  the Unintelligible label{' '}
                </span>
                <span className={styles.text_3}> </span>
                <span className={styles.text_2}>
                  as instructed in: Longform generic rules &gt; Unintelligible
                  or foreign or singing.
                </span>
                <span className={styles.text_3}> </span>
              </p>
              <div id="hesitations-and-truncations">
                <p className={'heading'}>Hesitations and truncations</p>
                <p className={styles.block_573}>
                  <span className={styles.text_2}>
                    If a speaker says only the beginning part of the word,
                    transcribe it if it can be considered{' '}
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>
                    a word on its own. Otherwise do not transcribe the false
                    start.
                  </span>
                  <span className={styles.text_3}> </span>
                </p>
                <p className={styles.block_191}>
                  <span className={styles.text_37}>
                    Correct: największe miasto{' '}
                  </span>
                  <span className={styles.text_38}>Example audio: " </span>
                  <span className={styles.text_39}>
                    naj- największe miasto{' '}
                  </span>
                  <span className={styles.text_38}>"</span>
                  <span className={styles.text_31}> </span>
                </p>
                <p className={styles.block_574}>
                  <span className={styles.text_2}>
                    If a user repeats a sentence for the sake of the phone,
                    format the repetition as a{' '}
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>
                    sentence if it's restating (as a sentence) what the person
                    has said.
                  </span>
                  <span className={styles.text_3}> </span>
                </p>
                <p className={styles.block_89}>
                  <span className={styles.text_23}>
                    Correct: Pokaż zdjęcia kotów syjamskich.{' '}
                  </span>
                  <span className={styles.text_19}> </span>
                </p>
                <p className={styles.block_575}>
                  <span className={styles.text_23}>
                    Pokaż zdjęcia kotów syjamskich.
                  </span>
                  <span className={styles.text_19}> </span>
                </p>
                <p className={styles.block_139}>
                  <span className={styles.text_23}>
                    Correct: Jaka pogoda jest w Krakowie? Jaka{' '}
                  </span>
                  <span className={styles.text_19}> </span>
                </p>
                <p className={styles.block_576}>
                  <span className={styles.text_19}>j</span>
                  <span className={styles.text_23}>est pogoda w Krakowie?</span>
                </p>
                <p className={styles.block_577}>
                  <span className={styles.text_23}>
                    Correct: Jakich narzędzi użyć do plewienia{' '}
                  </span>
                  <span className={styles.text_19}> </span>
                  <span className={styles.text_23}>
                    ogródka? plewienie ogródka
                  </span>
                  <span className={styles.text_19}> </span>
                </p>
                <p className={styles.block_578}>
                  <span className={styles.text_23}>
                    Explanation: If the repeated phrase is part of{' '}
                  </span>
                  <span className={styles.text_19}> </span>
                  <span className={styles.text_23}>
                    the sentence, format it as a fragment.
                  </span>
                  <span className={styles.text_19}> </span>
                </p>
                <p className={styles.block_579}>
                  <span className={styles.text_2}>
                    Complete words that have been truncated only if a very small
                    portion of the word is{' '}
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>
                    missing (one syllable or less in a multisyllable word) and
                    it is obvious what the word{' '}
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>
                    should be. In cases of ambiguity, do not transcribe the
                    cut-off word. Do not put{' '}
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>
                    punctuation at the end of truncated words.
                  </span>
                  <span className={styles.text_3}> </span>
                </p>
                <p className={styles.block_580}>
                  <span className={styles.text_37}>
                    Correct: Mieszkam w Warszawie
                  </span>
                  <span className={styles.text_21}> </span>
                  <span className={styles.text_38}>Example audio: " </span>
                  <span className={styles.text_39}>mieszkam w warszawi- </span>
                  <span className={styles.text_38}>"</span>
                  <span className={styles.text_31}> </span>
                  <span className={styles.text_40}>
                    Explanation: Final sound "e" was truncated.
                  </span>
                  <span className={styles.text_22}> </span>
                </p>
                <p className={styles.block_581}>
                  <span className={styles.text_37}>
                    Correct: ucieczka z piekła{' '}
                  </span>
                  <span className={styles.text_38}>Example audio: " </span>
                  <span className={styles.text_39}>-cieczka z piekła </span>
                  <span className={styles.text_38}>"</span>
                  <span className={styles.text_31}> </span>
                  <span className={styles.text_40}>
                    Explanation: Initial "u" was cut off.
                  </span>
                  <span className={styles.text_22}> </span>
                </p>
                <p className={styles.block_582}>
                  <span className={styles.text_2}>
                    If a truncation occurs mid-quote, use an end quotation mark
                    even if there is possibly{' '}
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>more intended content.</span>
                  <span className={styles.text_3}> </span>
                </p>
                <p className={styles.block_583}>
                  <span className={styles.text_37}>
                    Correct: Sylwia powiedziała: "Powinnam teraz"
                  </span>
                  <span className={styles.text_21}> </span>
                  <span className={styles.text_38}>Example audio: " </span>
                  <span className={styles.text_39}>
                    sylwia powiedziała powinnam{' '}
                  </span>
                  <span className={styles.text_32}> </span>
                  <span className={styles.text_39}>teraz- </span>
                  <span className={styles.text_38}>"</span>
                  <span className={styles.text_31}> </span>
                </p>
                <p className={styles.block_584}>
                  <span className={styles.text_23}>
                    Explanation: End of quote was truncated.{' '}
                  </span>
                  <span className={styles.text_19}> </span>
                </p>
                <p className={styles.block_585}>
                  <span className={styles.text_23}>
                    Include closing quotation mark.
                  </span>
                  <span className={styles.text_19}> </span>
                </p>
                <p className={styles.block_586}>
                  <span className={styles.text_2}>
                    For numbers, stick to what is uttered, even if you know this
                    is not all the speaker is{' '}
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>going to say.</span>
                  <span className={styles.text_3}> </span>
                </p>
                <p className={styles.block_191}>
                  <span className={styles.text_37}>
                    Correct: salon dwieście
                  </span>
                  <span className={styles.text_21}> </span>
                  <span className={styles.text_38}>Example audio: " </span>
                  <span className={styles.text_39}>salon dwieście- </span>
                  <span className={styles.text_38}>"</span>
                </p>
                <p className={styles.block_587}>
                  <span className={styles.text_23}>
                    Explanation: Speaker was going to say "Salon{' '}
                  </span>
                  <span className={styles.text_19}> </span>
                </p>
                <p className={styles.block_588}>
                  <span className={styles.text_23}>
                    dwieście dwa" but was cut off.
                  </span>
                  <span className={styles.text_19}> </span>
                </p>
                <p className={styles.block_589}>
                  <span className={styles.text_37}>
                    Correct: autobus numer siedem
                  </span>
                  <span className={styles.text_21}> </span>
                  <span className={styles.text_38}>Example audio: " </span>
                  <span className={styles.text_39}>autobus numer siedem- </span>
                  <span className={styles.text_38}>"</span>
                  <span className={styles.text_31}> </span>
                </p>
                <p className={styles.block_590}>
                  <span className={styles.text_23}>
                    Explanation: Speaker was going to say "autobus{' '}
                  </span>
                  <span className={styles.text_19}> </span>
                </p>
                <p className={styles.block_591}>
                  <span className={styles.text_23}>
                    numer siedemnaście" but was cut off.
                  </span>
                  <span className={styles.text_19}> </span>
                </p>
                <p className={styles.block_592}>
                  <span className={styles.text_2}>
                    Transcribe any filler words that are applicable and used in
                    the target language. Below{' '}
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>
                    are examples of filler words in the English language. These
                    may or may not be{' '}
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>
                    applicable in the target language. Again, only transcribe
                    filler words that exist in and are
                  </span>
                  <span className={styles.text_3}>
                    <span className={styles.calibre1}> </span>
                  </span>
                  <span className={styles.text_2}>
                    used in the target language.
                  </span>
                  <span className={styles.text_3}> </span>
                </p>
                <p className={styles.block_593}>
                  <span className={styles.text_41}>● </span>
                  <span className={styles.text_42}>um</span>
                  <span className={styles.text_36}> </span>
                </p>
                <p className={styles.block_20}>
                  <span className={styles.text_41}>● </span>
                  <span className={styles.text_42}>uh</span>
                  <span className={styles.text_36}> </span>
                </p>
                <p className={styles.block_20}>
                  <span className={styles.text_41}>● </span>
                  <span className={styles.text_42}>right</span>
                  <span className={styles.text_36}> </span>
                </p>
                <p className={styles.block_20}>
                  <span className={styles.text_41}>● </span>
                  <span className={styles.text_42}>you know</span>
                  <span className={styles.text_36}> </span>
                </p>
                <p className={styles.block_391}>
                  <span className={styles.text_41}>● </span>
                  <span className={styles.text_42}>so</span>
                  <span className={styles.text_36}> </span>
                </p>
                <p className={styles.block_20}>
                  <span className={styles.text_41}>● </span>
                  <span className={styles.text_42}>like</span>
                  <span className={styles.text_36}> </span>
                </p>
                <p className={styles.block_594}>
                  <span className={styles.text_2}>
                    Below is a list of all filler words that should only be
                    transcribed if affirmations or{' '}
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>answers to a question.</span>
                  <span className={styles.text_3}> </span>
                </p>
                <p className={styles.block_149}>
                  <span className={styles.text_23}>
                    Correct: I need to get a new um telephone.
                  </span>
                  <span className={styles.text_19}> </span>
                </p>
                <p className={styles.block_139}>
                  <span className={styles.text_23}>
                    Correct: Do you like it? Mhm.
                  </span>
                  <span className={styles.text_19}> </span>
                </p>
                <p className={styles.block_595}>
                  <span className={styles.text_41}>● </span>
                  <span className={styles.text_42}>ah</span>
                  <span className={styles.text_36}> </span>
                </p>
                <p className={styles.block_20}>
                  <span className={styles.text_41}>● </span>
                  <span className={styles.text_42}>er</span>
                  <span className={styles.text_36}> </span>
                </p>
                <p className={styles.block_20}>
                  <span className={styles.text_41}>● </span>
                  <span className={styles.text_42}>mhm</span>
                </p>
                <p className={styles.block_596}>
                  <span className={styles.text_2}>
                    Only transcribe foreign words if they are common in your
                    language or if speakers of{' '}
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>
                    your language would understand it. If it is foreign and
                    speakers of your language would{' '}
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>
                    not know this word, use the Foreign Speech label as
                    instructed in: Longform generic{' '}
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>
                    rules &gt; Unintelligible or foreign or singing.
                  </span>
                  <span className={styles.text_3}> </span>
                </p>
              </div>
              <div id="background-and-foreground-speech">
                <p className={'heading'}>Background and foreground speech</p>
              </div>
              <div id="foreign-language">
                <p className={'heading'}>Foreign language</p>
                <p className={styles.block_601}>
                  <span className={styles.text_2}>
                    If an utterance is in a foreign language, tag with [skip],
                    unless it is an easily identifiable{' '}
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>
                    media title or a foreign language phrase commonly understood
                    in the transcription{' '}
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>
                    language. Stick to the capitalisation and punctuation
                    conventions of your target{' '}
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>language.</span>
                  <span className={styles.text_3}> </span>
                </p>
                <p className={styles.block_602}>
                  <span className={styles.text_21}>Correct: Cómo estás? </span>
                  <span className={styles.text_22}>
                    <span className={styles.calibre2}>
                      Explanation: This is a very common phrase that most
                      English-speakers know, spelled as in
                    </span>
                  </span>
                </p>
                <p className={styles.block_603}>
                  <span className={styles.calibre2}>
                    Spanish but only using the English single{' '}
                  </span>
                </p>
                <p className={styles.block_604}>question mark.</p>
                <p className={styles.block_605}>
                  <span className={styles.text_21}>
                    Correct: La Vie en Rose{' '}
                  </span>
                  <span className={styles.text_22}>
                    <span className={styles.calibre2}>
                      Explanation: Follow English conventions for capitalisation
                      of media titles.
                    </span>
                  </span>
                </p>
                <p className={styles.block_606}>Correct: La Vita È Bella</p>
                <p className={styles.block_607}>
                  <span className={styles.text_2}>
                    Correct non-standard pronunciations to their standard ones.
                    Non-standard{' '}
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>
                    pronunciations could be from speakers of regional dialects,
                    language learners, or{' '}
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>
                    speakers from different countries.
                  </span>
                </p>
                <p className={styles.block_608}>
                  <span className={styles.text_37}>
                    Correct: Mój brat ma trzydzieści trzy lata.
                  </span>
                  <span className={styles.text_21}> </span>
                  <span className={styles.text_40}>
                    Incorrect: Mój brat ma czydzieści czy lata.
                  </span>
                  <span className={styles.text_22}> </span>
                </p>
                <p className={styles.block_609}>
                  <span className={styles.text_23}>Correct: biała pościel</span>
                  <span className={styles.text_19}> </span>
                </p>
                <p className={styles.block_504}>
                  <span className={styles.text_23}>
                    Incorrect: bioło pościel
                  </span>
                  <span className={styles.text_19}> </span>
                </p>
                <p className={styles.block_610}>
                  <span className={styles.text_23}>
                    Explanation: Person said "trzydzieści trzy" with{' '}
                  </span>
                  <span className={styles.text_19}> </span>
                  <span className={styles.text_23}>
                    an accent, using "cz" instead of "trz", but it{' '}
                  </span>
                  <span className={styles.text_19}> </span>
                  <span className={styles.text_23}>
                    should still be spelled as standard.
                  </span>
                  <span className={styles.text_19}> </span>
                </p>
                <p className={styles.block_611}>
                  <span className={styles.text_23}>
                    Explanation: Person said "bioło" instead of{' '}
                  </span>
                  <span className={styles.text_19}> </span>
                  <span className={styles.text_23}>
                    "biała", but it should be spelled as standard.
                  </span>
                </p>
              </div>
              <div id="accents">
                <p className={'heading'}>Accents</p>
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
