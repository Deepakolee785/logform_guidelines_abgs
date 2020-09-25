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
            <PageContentHeader currentPage="Longform French" />
            <div className="content text">
              {' '}
              <p className={'large-heading'}>Transcription quality</p>
              <p className={'text'}>
                <span className={styles.text_19}>
                  Comply with the standard rules of the writing system.
                </span>
                <span className={styles.text_20}> </span>
              </p>
              <div id="typo">
                <p className={'heading'}>Typo</p>
                <p className={styles.block_143}>
                  <span className={styles.text_19}>
                    A typo results in the unintentional creation of a non-word.
                  </span>
                  <span className={styles.text_20}> </span>
                </p>
                <p className={styles.block_144}>
                  <span className={styles.text_2}>
                    Avoid making any typographical errors. Carefully check your
                    work before marking items{' '}
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>as "complete".</span>
                  <span className={styles.text_3}> </span>
                </p>
                <p className={styles.block_145}>Correct: Va sur Facebook.</p>
                <p className={styles.block_90}>Incorrect: Va sur Facebok</p>
                <p className={styles.block_146}>
                  <span className={styles.text_19}>
                    Use the proper capitalization for standard words that
                    require it.
                  </span>
                  <span className={styles.text_20}> </span>
                </p>
                <p className={styles.block_147}>Correct: Elle est Allemande.</p>
                <p className={styles.block_90}>
                  Incorrect: Elle est allemande.
                </p>
                <p className={styles.block_139}>
                  Correct: C'est une voiture allemande.
                </p>
                <p className={styles.block_148}>
                  Incorrect: C'est une voiture Allemande.
                </p>
                <p className={styles.block_139}>Correct: Directions maison.</p>
                <p className={styles.block_148}>
                  Incorrect: Directions Maison.
                </p>
                <p className={styles.block_149}>
                  <span className={styles.text_1}> </span>
                </p>
              </div>
              <div id="context-error">
                <p className={'text'}>Context error</p>
                <p className={styles.block_150}>
                  <span className={styles.text_2}>
                    A context error occurs when a real word is used incorrectly
                    or when the incorrect form{' '}
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>
                    of a word is used. This includes homophones and punctuation,
                    among other things.
                  </span>
                </p>
                <p className={styles.block_151}>
                  Correct: Les oiseaux chantent.
                </p>
                <p className={styles.block_90}>
                  Incorrect: Les oiseaux chante.
                </p>
                <p className={styles.block_91}>
                  Correct: Ils nous attendent demain.
                </p>
                <p className={styles.block_90}>
                  Incorrect: Ils nous attende deux main.
                </p>
                <p className={styles.block_91}>
                  Correct: J'ai quatre tablettes.
                </p>
                <p className={styles.block_90}>
                  Incorrect: J'ai quatre tablette.
                </p>
                <p className={styles.block_139}>
                  Correct: J'ai bu quelques verres.
                </p>
                <p className={styles.block_148}>
                  Incorrect: J'ai bu quelques vers.
                </p>
                <p className={styles.block_139}>
                  Correct: Ils mangent tous ensemble.
                </p>
                <p className={styles.block_148}>
                  Incorrect: Il mange tous ensemble.
                </p>
                <p className={styles.block_139}>Correct: J'ai</p>
                <p className={styles.block_148}>Incorrect: J ai</p>
                <p className={styles.block_152}>
                  <span className={styles.text_2}>
                    Transcribe what is actually spoken. Use context to help with
                    spelling and homophone{' '}
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>
                    disambiguation. Look up words if you are unsure.
                  </span>
                  <span className={styles.text_3}> </span>
                </p>
                <p className={styles.block_89}>Correct: Ricky Martin</p>
                <p className={styles.block_148}>
                  Incorrect: C'est qui Martine ?
                </p>
                <p className={styles.block_151}>Correct: Elle est partie.</p>
                <p className={styles.block_90}>Incorrect: Elle est parti.</p>
                <p className={styles.block_91}>
                  Correct: J'ai quatre tablettes.
                </p>
                <p className={styles.block_90}>
                  Incorrect: J'ai quatre tablette.
                </p>
                <p className={styles.block_91}>
                  <span className={styles.calibre2}>
                    Correct: Ils mangent au restaurant tous{' '}
                  </span>
                </p>
                <p className={styles.block_153}>ensemble.</p>
                <p className={styles.block_148}>
                  <span className={styles.calibre2}>
                    Incorrect: Il mange au restaurant tous{' '}
                  </span>
                </p>
                <p className={styles.block_154}>ensemble.</p>
                <p className={styles.block_155}>
                  <span className={styles.text_2}>
                    Do not correct speaker's grammar if they intentionally say
                    something, even if what they{' '}
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>
                    say does not follow the standard grammatical rules of the
                    transcription language.
                  </span>
                  <span className={styles.text_3}> </span>
                </p>
                <p className={styles.block_156}>
                  <span className={styles.calibre2}>
                    Correct: C'est quand que vous faisez une soirée ?
                  </span>
                </p>
                <p className={styles.block_157}>
                  <span className={styles.calibre2}>
                    Incorrect: C'est quand que vous faites une soirée ?
                  </span>
                </p>
                <p className={styles.block_158}>
                  <span className={styles.text_21}>
                    Correct: Si j'aurais su, j'aurais pas venu.{' '}
                  </span>
                  <span className={styles.text_22}>
                    Incorrect: Si j'avais su, je serais pas venu.
                  </span>
                </p>
              </div>
              <div id="adding-missing-words">
                <p className={'heading'}>Added or missing words</p>
                <p className={styles.block_160}>
                  <span className={styles.text_20}>Example audio: " </span>
                  <span className={styles.text_23}>
                    <span className={styles.calibre2}>
                      c'est quand que vous faisez une soirée
                    </span>
                  </span>
                  <span className={styles.text_20}>" </span>
                </p>
                <p className={styles.block_161}>
                  <span className={styles.text_20}>Example audio: " </span>
                  <span className={styles.text_23}>
                    si j'aurais su j'aurais pas venu{' '}
                  </span>
                  <span className={styles.text_20}>" </span>
                </p>
                <p className={styles.block_162}>
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
                </p>
                <p className={styles.block_163}>
                  <span className={styles.text_21}>
                    Correct: Je veux voir dernier film X-Men.{' '}
                  </span>
                  <span className={styles.text_22}>
                    Incorrect: Je veux voir le dernier film X-Men.
                  </span>
                </p>
                <p className={styles.block_164}>
                  <span className={styles.calibre2}>
                    Correct: 3,50 € c'est un peu cher pour une barre chocolatée.
                  </span>
                </p>
                <p className={styles.block_165}>
                  <span className={styles.calibre2}>
                    Incorrect: 3,50 c'est un peu cher pour une barre chocolatée.
                  </span>
                </p>
                <p className={styles.block_166}>
                  <span className={styles.calibre2}>
                    Incorrect: trois cinquante c'est un peu cher pour une barre
                    chocolatée.
                  </span>
                </p>
                <p className={styles.block_167}>Correct: Je mesure 1m80.</p>
                <p className={styles.block_168}>Incorrect: Je mesure 1 80.</p>
                <p className={styles.block_169}>
                  Incorrect: Je mesure un quatre-vingt.
                </p>
                <p className={styles.block_170}>
                  <span className={styles.text_24}>Example audio: " </span>
                  <span className={styles.text_25}>
                    je veux voir dernier film x-men{' '}
                  </span>
                  <span className={styles.text_24}>" </span>
                  <span className={styles.text_22}>
                    Explanation: Do not add the omitted article "le".
                  </span>
                </p>
                <p className={styles.block_171}>
                  <span className={styles.text_20}>Example audio: " </span>
                  <span className={styles.text_23}>
                    <span className={styles.calibre2}>
                      trois cinquante c'est un peu cher pour une barre
                      chocolatée
                    </span>
                  </span>
                  <span className={styles.text_20}>" </span>
                </p>
                <p className={styles.block_172}>
                  <span className={styles.text_20}>Example audio: " </span>
                  <span className={styles.text_23}>
                    je mesure un quatre-vingt{' '}
                  </span>
                  <span className={styles.text_20}>" </span>
                </p>
                <p className={styles.block_173}>
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
                <p className={styles.block_174}>Correct: Je je je sais pas.</p>
                <p className={styles.block_175}>Incorrect: Je sais pas.</p>
                <p className={styles.block_176}>
                  <span className={styles.calibre2}>
                    Correct: Les chaussettes de l'archiduchesse sont-elles
                    sèches sèches ?
                  </span>
                </p>
                <p className={styles.block_177}>
                  <span className={styles.calibre2}>
                    Incorrect: Les chaussettes de l'archiduchesse sont-elles
                    sèches ?
                  </span>
                </p>
                <p className={styles.block_178}>
                  <span className={styles.text_20}>Example audio: " </span>
                  <span className={styles.text_23}>je je je sais pas </span>
                  <span className={styles.text_20}>" </span>
                </p>
                <p className={styles.block_179}>
                  <span className={styles.text_20}>Example audio: " </span>
                  <span className={styles.text_23}>
                    <span className={styles.calibre2}>
                      les chaussettes de l'archiduchesse sont-elles sèches
                      sèches
                    </span>
                  </span>
                  <span className={styles.text_20}>"</span>
                </p>
                <p className={styles.block_180}>
                  <span className={styles.text_21}>
                    Correct: J'habite au 60 75.{' '}
                  </span>
                  <span className={styles.text_22}>
                    Incorrect: J'habite au 75.{' '}
                  </span>
                </p>
              </div>
              <div id="substitution">
                <p className={'heading'}>Substitution</p>
                <p className={styles.block_182}>
                  <span className={styles.text_20}>Example audio: " </span>
                  <span className={styles.text_23}>
                    j'habite au soixante soixante quinze{' '}
                  </span>
                  <span className={styles.text_20}>" </span>
                </p>
                <p className={styles.block_183}>
                  Explanation: User stuttered saying "soixante quinze".
                </p>
                <p className={styles.block_184}>
                  <span className={styles.text_2}>
                    A substitution error occurs when another standard word is
                    transcribed instead of what{' '}
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>
                    was meant by the speaker. If what the speaker said falls
                    into another category (Context{' '}
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>
                    Error, Proper Name, Media Title, etc.), see the relevant
                    section.
                  </span>
                  <span className={styles.text_3}> </span>
                </p>
                <p className={styles.block_185}>
                  <span className={styles.text_21}>
                    Correct: Emmène-moi à Domino's.{' '}
                  </span>
                  <span className={styles.text_22}>
                    Incorrect: Emmène-moi à Pizza Hut.{' '}
                  </span>
                </p>
                <p className={styles.block_186}>
                  <span className={styles.text_21}>
                    Correct: Je veux regarder Le Nombre 23.{' '}
                  </span>
                  <span className={styles.text_22}>
                    Incorrect: Je veux regarder Le Numéro 23.{' '}
                  </span>
                </p>
                <p className={styles.block_187}>
                  <span className={styles.text_21}>
                    Correct: J'ai acheté un portable Samsung.{' '}
                  </span>
                  <span className={styles.text_22}>
                    Incorrect: J'ai acheté un portable Semsong.
                  </span>
                </p>
              </div>
              <div id="spacing">
                <p className={'heading'}>Spacing</p>
                <p className={styles.block_189}>
                  <span className={styles.text_20}>Example audio: " </span>
                  <span className={styles.text_23}>emmène-moi à domino's </span>
                  <span className={styles.text_20}>" </span>
                </p>
                <p className={styles.block_190}>
                  <span className={styles.text_20}>Example audio: " </span>
                  <span className={styles.text_23}>
                    <span className={styles.calibre2}>
                      je veux regarder le nombre vingt trois
                    </span>
                  </span>
                  <span className={styles.text_20}>" </span>
                </p>
                <p className={styles.block_191}>
                  <span className={styles.calibre2}>
                    Explanation: Tag this error in Media Title, not in
                    Substitution.
                  </span>
                </p>
                <p className={styles.block_192}>
                  <span className={styles.text_20}>Example audio: " </span>
                  <span className={styles.text_23}>
                    <span className={styles.calibre2}>
                      j'ai acheté un portable samsung{' '}
                    </span>
                  </span>
                  <span className={styles.text_20}>" </span>
                </p>
                <p className={styles.block_193}>
                  <span className={styles.calibre2}>
                    Explanation: Tag this error in Brand Name, not in
                    Substitution.
                  </span>
                </p>
                <p className={styles.block_194}>
                  Use only one space between words and sentences.
                </p>
                <p className={styles.block_151}>
                  <span className={styles.calibre2}>
                    Correct: Quel est le point le plus haut en
                  </span>
                </p>
                <p className={styles.block_195}>Ardèche ?</p>
                <p className={styles.block_148}>
                  <span className={styles.calibre2}>
                    Incorrect: Quel est le point le plus _haut en
                  </span>
                </p>
                <p className={styles.block_196}>Ardèche ?</p>
                <p className={styles.block_139}>
                  Correct: Je pense oui. On n'a qu'à essayer.
                </p>
                <p className={styles.block_90}>
                  Incorrect: Je pense oui. _On n'a qu'à essayer.
                </p>
                <p className={styles.block_197}>
                  <span className={styles.text_2}>
                    For all types of punctuation consisting in a double sign,
                    such as exclamation marks,{' '}
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>
                    interrogation marks, colons and semi-colons, put a space
                    between the preceding word{' '}
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>
                    and the punctuation. For other types of punctuation, such as
                    commas and periods, do{' '}
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>
                    not put a space between the preceding word and the
                    punctuation.
                  </span>
                  <span className={styles.text_3}> </span>
                </p>
                <p className={styles.block_145}>Correct: Tu viens ?</p>
                <p className={styles.block_90}>Incorrect: Tu viens?</p>
                <p className={styles.block_91}>Correct: Ferme-la !</p>
                <p className={styles.block_90}>Incorrect: Ferme-la!</p>
                <p className={styles.block_91}>
                  Correct: Bonjour, c'est le docteur Lauzon.
                </p>
                <p className={styles.block_90}>
                  Incorrect: Bonjour, c'est le docteur Lauzon .
                </p>
                <p className={styles.block_198}>
                  <span className={styles.text_2}>
                    For quotation marks and similar punctuation, use the English
                    quotes "" instead of the{' '}
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>
                    French ones « » and do not put a space after the opening
                    quote or before the closing{' '}
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>
                    quote. Put a space before the opening punctuation, but not
                    necessarily after the closing{' '}
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>punctuation.</span>
                </p>
                <p className={styles.block_151}>
                  Correct: Antonio a dit "Je t'aime."
                </p>
                <p className={styles.block_90}>
                  Incorrect: Antonio a dit « Je t'aime. »
                </p>
                <p className={styles.block_91}>
                  Correct: Traduis "chien" en japonais.
                </p>
                <p className={styles.block_90}>
                  Incorrect: Traduis " chien " en japonais.
                </p>
                <p className={styles.block_91}>
                  Correct: Jean m'a dit "C'est une super idée."
                </p>
                <p className={styles.block_90}>
                  Incorrect: Jean m'a dit"C'est une super idée."
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
